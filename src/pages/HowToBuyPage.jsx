export default function HowToBuyPage() {
  const steps = [
    'Revisa el inventario y utiliza los filtros para encontrar una opción acorde a marca, categoría, año o precio.',
    'Ingresa al detalle del vehículo para revisar su información completa y evaluarlo con mayor precisión.',
    'Marca el vehículo como “posible compra” si quieres apartarlo visualmente del inventario general.',
    'Ve a la sección “Posible compra” para revisar tu shortlist y decidir si mantienes o revuelves el vehículo al inventario.',
  ];

  return (
    <section className="container-page">
      <div className="card p-8">
        <h2 className="section-title">Cómo comprar</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          El flujo del sitio está pensado para que el usuario navegue por el catálogo, filtre rápidamente la oferta y
          seleccione los vehículos más interesantes antes de tomar una decisión.
        </p>
        <ol className="mt-8 grid gap-4">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                {index + 1}
              </span>
              <p className="pt-2 text-slate-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
