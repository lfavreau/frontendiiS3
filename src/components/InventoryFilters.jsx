export default function InventoryFilters({ filters, onChange, onReset }) {
  return (
    <div className="card p-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <label className="label" htmlFor="brand">
            Marca
          </label>
          <input
            id="brand"
            name="brand"
            value={filters.brand}
            onChange={onChange}
            className="field"
            placeholder="Ej: Toyota"
          />
        </div>

        <div>
          <label className="label" htmlFor="category">
            Categoría
          </label>
          <select id="category" name="category" value={filters.category} onChange={onChange} className="field">
            <option value="">Todas</option>
            <option value="SUV">SUV</option>
            <option value="Sedán">Sedán</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Camioneta">Camioneta</option>
            <option value="Híbrido">Híbrido</option>
          </select>
        </div>

        <div>
          <label className="label" htmlFor="year">
            Año mínimo
          </label>
          <input
            id="year"
            name="year"
            type="number"
            min="2000"
            value={filters.year}
            onChange={onChange}
            className="field"
            placeholder="Ej: 2021"
          />
        </div>

        <div>
          <label className="label" htmlFor="price">
            Precio máximo
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            value={filters.price}
            onChange={onChange}
            className="field"
            placeholder="Ej: 20000000"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={onReset} className="btn-secondary">
          Limpiar filtros
        </button>
        <p className="text-sm text-slate-500">El filtrado solo cambia la visualización, no altera el inventario original.</p>
      </div>
    </div>
  );
}
