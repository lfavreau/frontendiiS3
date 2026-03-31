import { Link } from 'react-router-dom';

export default function VehicleCard({ vehicle }) {
  return (
    <article className="card overflow-hidden">
      <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} className="h-52 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">{vehicle.category}</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">
              {vehicle.brand} {vehicle.model}
            </h3>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            {vehicle.year}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Precio:</span> ${vehicle.price.toLocaleString('es-CL')}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Transmisión:</span> {vehicle.transmission}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Combustible:</span> {vehicle.fuel}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Kilometraje:</span> {vehicle.mileage.toLocaleString('es-CL')} km
          </p>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{vehicle.description}</p>

        <div className="mt-5 flex gap-3">
          <Link to={`/vehiculo/${vehicle.id}`} className="btn-primary w-full">
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
