import { useContext, useMemo, useState } from 'react';
import InventoryFilters from '../components/InventoryFilters';
import InventoryTable from '../components/InventoryTable';
import VehicleCard from '../components/VehicleCard';
import { VehicleContext } from '../context/VehicleContext';

const initialFilters = {
  brand: '',
  category: '',
  year: '',
  price: '',
};

export default function InventoryPage() {
  const { inventory } = useContext(VehicleContext);
  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setFilters(initialFilters);

  const filteredVehicles = useMemo(() => {
    return inventory.filter((vehicle) => {
      const matchesBrand = filters.brand
        ? vehicle.brand.toLowerCase().includes(filters.brand.toLowerCase())
        : true;
      const matchesCategory = filters.category ? vehicle.category === filters.category : true;
      const matchesYear = filters.year ? vehicle.year >= Number(filters.year) : true;
      const matchesPrice = filters.price ? vehicle.price <= Number(filters.price) : true;

      return matchesBrand && matchesCategory && matchesYear && matchesPrice;
    });
  }, [inventory, filters]);

  return (
    <section className="container-page space-y-6">
      <div>
        <h2 className="section-title">Inventario de vehículos</h2>
        <p className="section-text mt-2">
          Listado general del inventario con filtros dinámicos por marca, categoría, año y precio.
        </p>
      </div>

      <InventoryFilters filters={filters} onChange={handleChange} onReset={handleReset} />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card p-5">
          <p className="text-sm text-slate-500">Inventario total</p>
          <p className="mt-2 text-3xl font-black text-slate-900">{inventory.length}</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-slate-500">Resultados filtrados</p>
          <p className="mt-2 text-3xl font-black text-slate-900">{filteredVehicles.length}</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-slate-500">Visualización</p>
          <p className="mt-2 text-3xl font-black text-slate-900">Tabla + cards</p>
        </div>
      </div>

      <InventoryTable vehicles={filteredVehicles} />

      <div>
        <h3 className="mb-4 text-xl font-bold text-slate-900">Vista visual del inventario</h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
