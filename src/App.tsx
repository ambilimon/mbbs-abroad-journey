
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UniversityPage from "./pages/UniversityPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DynamicUniversityPage from "./pages/DynamicUniversityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/university/:id" element={<UniversityPage />} />
        <Route path="/universities/:country" element={<UniversityPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dynamic-university/:id" element={<DynamicUniversityPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
