import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="container-page">
      <div className="grid gap-8 rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-soft lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-100">Semana 1 + 2 + 3</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Sitio web de venta de vehículos con navegación, inventario y flujo de posible compra.
          </h2>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Explora el inventario, agrega nuevos vehículos, filtra por categoría y gestiona una lista de vehículos
            marcados como posible compra sin perder el estado original del sistema.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/inventario" className="btn-primary">
              Ver inventario
            </Link>
            <Link to="/agregar" className="btn-secondary">
              Agregar vehículo
            </Link>
          </div>
        </div>

        <div className="card flex flex-col justify-between p-6 text-slate-900">
          <div>
            <p className="text-sm font-semibold text-brand-600">Características implementadas</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• React Router con rutas centralizadas y detalle dinámico.</li>
              <li>• Estado global con useReducer y persistencia en localStorage.</li>
              <li>• Tailwind CSS con diseño responsive y componentes reutilizables.</li>
              <li>• Inventario editable con flujo de “posible compra”.</li>
            </ul>
          </div>
          <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
            Estructura modular pensada para cumplir la pauta y facilitar mantenimiento.
          </div>
        </div>
      </div>
    </section>
  );
}
