
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
import { HelmetProvider } from 'react-helmet-async';

import Dashboard from './pages/Dashboard';
import DynamicUniversityPage from './pages/DynamicUniversityPage';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import UniversityPage from './pages/UniversityPage';
import UniversitiesPage from './pages/UniversitiesPage';
import AuthPage from './pages/AuthPage';
import CountryPage from './pages/CountryPage';
import WebinarPage from './pages/WebinarPage';

// Footer pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AdmissionProcessPage from './pages/AdmissionProcessPage';
import CoachingPage from './pages/CoachingPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BlogPage from './pages/BlogPage';
import NewsPage from './pages/NewsPage';
import FaqPage from './pages/FaqPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import SitemapPage from './pages/SitemapPage';

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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
              
              {/* Footer pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/admission-process" element={<AdmissionProcessPage />} />
              <Route path="/coaching" element={<CoachingPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
