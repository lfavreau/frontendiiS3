import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VehicleContext } from '../context/VehicleContext';

const initialForm = {
  brand: '',
  model: '',
  year: '',
  price: '',
  category: 'SUV',
  transmission: 'Automática',
  fuel: 'Bencina',
  mileage: '',
  image: '',
  description: '',
};

export default function AddVehiclePage() {
  const { addVehicle } = useContext(VehicleContext);
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.brand || !form.model || !form.year || !form.price || !form.description) {
      setError('Completa los campos obligatorios antes de guardar el vehículo.');
      return;
    }

    addVehicle({
      id: Date.now(),
      brand: form.brand,
      model: form.model,
      year: Number(form.year),
      price: Number(form.price),
      category: form.category,
      transmission: form.transmission,
      fuel: form.fuel,
      mileage: Number(form.mileage || 0),
      image:
        form.image ||
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
      description: form.description,
    });

    setForm(initialForm);
    setError('');
    navigate('/inventario');
  };

  return (
    <section className="container-page">
      <div className="card p-8">
        <div className="mb-6">
          <h2 className="section-title">Agregar nuevo vehículo</h2>
          <p className="section-text mt-2">
            Formulario conectado al estado global del inventario. Al guardar, el vehículo queda disponible de inmediato.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="label">Marca *</label>
            <input className="field" name="brand" value={form.brand} onChange={handleChange} />
          </div>
          <div>
            <label className="label">Modelo *</label>
            <input className="field" name="model" value={form.model} onChange={handleChange} />
          </div>
          <div>
            <label className="label">Año *</label>
            <input className="field" type="number" name="year" value={form.year} onChange={handleChange} />
          </div>
          <div>
            <label className="label">Precio *</label>
            <input className="field" type="number" name="price" value={form.price} onChange={handleChange} />
          </div>
          <div>
            <label className="label">Categoría</label>
            <select className="field" name="category" value={form.category} onChange={handleChange}>
              <option>SUV</option>
              <option>Sedán</option>
              <option>Hatchback</option>
              <option>Camioneta</option>
              <option>Híbrido</option>
            </select>
          </div>
          <div>
            <label className="label">Transmisión</label>
            <select className="field" name="transmission" value={form.transmission} onChange={handleChange}>
              <option>Automática</option>
              <option>Manual</option>
            </select>
          </div>
          <div>
            <label className="label">Combustible</label>
            <select className="field" name="fuel" value={form.fuel} onChange={handleChange}>
              <option>Bencina</option>
              <option>Diésel</option>
              <option>Híbrido</option>
              <option>Eléctrico</option>
            </select>
          </div>
          <div>
            <label className="label">Kilometraje</label>
            <input className="field" type="number" name="mileage" value={form.mileage} onChange={handleChange} />
          </div>
          <div className="md:col-span-2">
            <label className="label">URL de imagen</label>
            <input className="field" name="image" value={form.image} onChange={handleChange} />
          </div>
          <div className="md:col-span-2">
            <label className="label">Descripción *</label>
            <textarea
              className="field min-h-32"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {error ? <p className="md:col-span-2 text-sm font-semibold text-rose-600">{error}</p> : null}

          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button className="btn-primary" type="submit">
              Guardar vehículo
            </button>
            <button className="btn-secondary" type="button" onClick={() => setForm(initialForm)}>
              Limpiar formulario
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
