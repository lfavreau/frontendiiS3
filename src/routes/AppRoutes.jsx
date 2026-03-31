import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const HowToBuyPage = lazy(() => import('../pages/HowToBuyPage'));
const InventoryPage = lazy(() => import('../pages/InventoryPage'));
const AddVehiclePage = lazy(() => import('../pages/AddVehiclePage'));
const VehicleDetailPage = lazy(() => import('../pages/VehicleDetailPage'));
const PossiblePurchasePage = lazy(() => import('../pages/PossiblePurchasePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function Loader() {
  return (
    <div className="container-page">
      <div className="card p-8 text-center text-slate-500">Cargando vista...</div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="/como-comprar" element={<HowToBuyPage />} />
          <Route path="/inventario" element={<InventoryPage />} />
          <Route path="/agregar" element={<AddVehiclePage />} />
          <Route path="/vehiculo/:id" element={<VehicleDetailPage />} />
          <Route path="/posible-compra" element={<PossiblePurchasePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
