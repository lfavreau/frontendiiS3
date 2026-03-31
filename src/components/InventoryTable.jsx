import { Link } from 'react-router-dom';

export default function InventoryTable({ vehicles }) {
  if (vehicles.length === 0) {
    return (
      <div className="card p-8 text-center text-slate-500">
        No hay vehículos que coincidan con el filtro actual.
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Marca</th>
              <th className="px-4 py-3 font-semibold">Modelo</th>
              <th className="px-4 py-3 font-semibold">Año</th>
              <th className="px-4 py-3 font-semibold">Categoría</th>
              <th className="px-4 py-3 font-semibold">Precio</th>
              <th className="px-4 py-3 font-semibold">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="px-4 py-3 font-medium text-slate-900">{vehicle.brand}</td>
                <td className="px-4 py-3">{vehicle.model}</td>
                <td className="px-4 py-3">{vehicle.year}</td>
                <td className="px-4 py-3">{vehicle.category}</td>
                <td className="px-4 py-3">${vehicle.price.toLocaleString('es-CL')}</td>
                <td className="px-4 py-3">
                  <Link to={`/vehiculo/${vehicle.id}`} className="font-semibold text-brand-600 hover:text-brand-700">
                    Ver detalle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
