import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VehicleContext } from '../context/VehicleContext';

export default function VehicleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { inventory, markPossiblePurchase } = useContext(VehicleContext);

  const vehicle = inventory.find((item) => item.id === Number(id));

  if (!vehicle) {
    return (
      <section className="container-page">
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Vehículo no disponible</h2>
          <p className="mt-3 text-slate-600">
            Puede que ya haya sido marcado como posible compra o que el identificador no exista.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link to="/inventario" className="btn-primary">
              Volver al inventario
            </Link>
            <Link to="/posible-compra" className="btn-secondary">
              Ver posible compra
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const handleMark = () => {
    markPossiblePurchase(vehicle.id);
    navigate('/posible-compra');
  };

  return (
    <section className="container-page">
      <article className="card overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-2">
          <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} className="h-full min-h-80 w-full object-cover" />
          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">Detalle del vehículo</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">
              {vehicle.brand} {vehicle.model}
            </h2>
            <p className="mt-2 text-lg text-slate-500">{vehicle.category}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Precio</p>
                <p className="mt-1 text-xl font-bold text-slate-900">${vehicle.price.toLocaleString('es-CL')}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Año</p>
                <p className="mt-1 text-xl font-bold text-slate-900">{vehicle.year}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Transmisión</p>
                <p className="mt-1 text-xl font-bold text-slate-900">{vehicle.transmission}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Combustible</p>
                <p className="mt-1 text-xl font-bold text-slate-900">{vehicle.fuel}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">Descripción</p>
              <p className="mt-2 leading-7 text-slate-600">{vehicle.description}</p>
              <p className="mt-4 text-sm text-slate-500">Kilometraje: {vehicle.mileage.toLocaleString('es-CL')} km</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="btn-primary" onClick={handleMark}>
                Marcar como posible compra
              </button>
              <Link to="/inventario" className="btn-secondary">
                Volver al inventario
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
