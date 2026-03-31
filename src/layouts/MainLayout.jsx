import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">
      <NavBar />
      <main className="py-10">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="container-page text-sm text-slate-500">
          Proyecto académico de venta de vehículos desarrollado con React Router, estado global y Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
