import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="container-page">
      <div className="card p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">404</p>
        <h2 className="mt-3 text-3xl font-black text-slate-900">Ruta no encontrada</h2>
        <p className="mt-3 text-slate-600">La página que buscas no existe dentro del proyecto.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
          <Link to="/inventario" className="btn-secondary">
            Ir al inventario
          </Link>
        </div>
      </div>
    </section>
  );
}
