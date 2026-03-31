export default function AboutPage() {
  return (
    <section className="container-page">
      <div className="card p-8">
        <h2 className="section-title">Quiénes somos</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          AutoMarket es un sitio web orientado a la venta de vehículos, creado como proyecto académico para demostrar
          navegación con React Router, manejo de estado global y aplicación de Tailwind CSS. Nuestro enfoque es
          mostrar un catálogo claro, fácil de recorrer y con acciones simples para que el usuario identifique opciones
          de compra de manera rápida.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Misión</h3>
            <p className="mt-2 text-sm text-slate-600">Facilitar la búsqueda y gestión de vehículos en una interfaz moderna y ordenada.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Visión</h3>
            <p className="mt-2 text-sm text-slate-600">Construir una experiencia de catálogo automotriz clara, modular y escalable.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Valores</h3>
            <p className="mt-2 text-sm text-slate-600">Transparencia en la información, orden visual y foco en la experiencia del usuario.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
