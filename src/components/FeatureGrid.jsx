const features = [
  {
    title: 'Navegación SPA',
    text: 'Rutas con React Router para navegar sin recargar la página y con una mejor experiencia de usuario.',
  },
  {
    title: 'Estado global',
    text: 'El inventario y la lista de posible compra comparten un estado centralizado y consistente.',
  },
  {
    title: 'Filtro dinámico',
    text: 'La lista de vehículos se puede filtrar por categoría seleccionada sin alterar los datos originales.',
  },
  {
    title: 'Diseño responsive',
    text: 'El sitio usa Tailwind CSS para mantener una presentación visual clara en escritorio y móvil.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="container-page mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature) => (
        <article key={feature.title} className="card p-6">
          <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
        </article>
      ))}
    </section>
  );
}
