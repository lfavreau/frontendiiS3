import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VehicleContext } from '../context/VehicleContext';

export default function PossiblePurchasePage() {
  const { possiblePurchases, removePossiblePurchase } = useContext(VehicleContext);

  return (
    <section className="container-page space-y-6">
      <div>
        <h2 className="section-title">Vehículos para posible compra</h2>
        <p className="section-text mt-2">
          Aquí aparecen los vehículos marcados desde la pantalla de detalle. Puedes devolverlos al inventario.
        </p>
      </div>

      {possiblePurchases.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-slate-600">Aún no has marcado vehículos como posible compra.</p>
          <Link to="/inventario" className="btn-primary mt-4">
            Ir al inventario
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {possiblePurchases.map((vehicle) => (
            <article key={vehicle.id} className="card overflow-hidden">
              <div className="grid sm:grid-cols-[220px_1fr]">
                <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} className="h-full w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">{vehicle.category}</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{vehicle.description}</p>
                  <div className="mt-4 grid gap-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold text-slate-900">Precio:</span> ${vehicle.price.toLocaleString('es-CL')}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">Año:</span> {vehicle.year}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="btn-danger"
                      onClick={() => removePossiblePurchase(vehicle.id)}
                    >
                      Desmarcar y devolver al inventario
                    </button>
                    <Link className="btn-secondary" to={`/vehiculo/${vehicle.id}`}>
                      Ver referencia
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
