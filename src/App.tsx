import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import EnhancedIndex from "./pages/EnhancedIndex";
import NotFound from "./pages/NotFound";
import EnhancedHeader from "./components/EnhancedHeader";
import EnhancedFooter from "./components/EnhancedFooter";
import Telehealth from "./pages/Telehealth";
import MobileTestingKits from "./pages/MobileTestingKits";
import Supplements from "./pages/Supplements";
import FirstTimePatients from "./pages/FirstTimePatients";
import Events from "./pages/Events";
import GiftCards from "./pages/GiftCards";
import Privacy from "./pages/Privacy";
import VitaminInjections from "./pages/VitaminInjections";
import NadPeptides from "./pages/NadPeptides";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <EnhancedHeader />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<EnhancedIndex />} />
                <Route path="/telehealth" element={<Telehealth />} />
                <Route path="/mobile-testing-kits" element={<MobileTestingKits />} />
                <Route path="/supplements" element={<Supplements />} />
                <Route path="/first-time-patients" element={<FirstTimePatients />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gift-cards" element={<GiftCards />} />
                <Route path="/vitamin-injections" element={<VitaminInjections />} />
                <Route path="/nad-peptides" element={<NadPeptides />} />
                <Route path="/privacy" element={<Privacy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <EnhancedFooter />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
