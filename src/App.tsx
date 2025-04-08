

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
import { ThemeProvider } from './hooks/use-theme';

import Dashboard from './pages/Dashboard';
import DynamicUniversityPage from './pages/DynamicUniversityPage';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import UniversityPage from './pages/UniversityPage';
import UniversitiesPage from './pages/UniversitiesPage';
import AuthPage from './pages/AuthPage';
import CountryPage from './pages/CountryPage';
import WebinarPage from './pages/WebinarPage';

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/university/:id" element={<UniversityPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dynamic-university/:id" element={<DynamicUniversityPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/country/:country" element={<CountryPage />} />
            <Route path="/webinar" element={<WebinarPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
