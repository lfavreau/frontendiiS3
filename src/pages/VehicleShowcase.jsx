import { useContext } from 'react';
import { VehicleContext } from '../context/VehicleContext';
import VehicleCard from '../components/VehicleCard';

export default function VehicleShowcase() {
  const { inventory } = useContext(VehicleContext);
  const featured = inventory.slice(0, 3);

  return (
    <section className="container-page mt-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">Vehículos destacados</h2>
          <p className="section-text">Muestra inicial del inventario disponible en el sistema.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {featured.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
}
