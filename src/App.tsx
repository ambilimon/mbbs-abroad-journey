import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Dashboard from './pages/Dashboard';
import DynamicUniversityPage from './pages/DynamicUniversityPage';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import UniversityPage from './pages/UniversityPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/university/:id" element={<UniversityPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dynamic-university/:id" element={<DynamicUniversityPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
