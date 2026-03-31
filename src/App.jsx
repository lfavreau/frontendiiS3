import { BrowserRouter } from 'react-router-dom';
import { VehicleProvider } from './context/VehicleContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <VehicleProvider>
        <AppRoutes />
      </VehicleProvider>
    </BrowserRouter>
  );
}
