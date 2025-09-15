import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import EnhancedIndex from "./pages/EnhancedIndex";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import EnhancedHeader from "./components/EnhancedHeader";
import EnhancedFooter from "./components/EnhancedFooter";
import Telehealth from "./pages/Telehealth";
import TestKits from "./pages/TestKits";
import Products from "./pages/Products";
import Compliance from "./pages/Compliance";
import GoodFaithEstimate from "./pages/GoodFaithEstimate";
import FirstTimePatients from "./pages/FirstTimePatients";
import Events from "./pages/Events";
import GiftCards from "./pages/GiftCards";
import Privacy from "./pages/Privacy";
import VitaminInjections from "./pages/VitaminInjections";
import NadPeptides from "./pages/NadPeptides";
import IVTherapy from "./pages/IVTherapy";
import EventInquiry from "./pages/EventInquiry";
import Membership from "./pages/Membership";
import EnhancedMembership from "./pages/EnhancedMembership";
import SpecialtyTreatments from "./pages/SpecialtyTreatments";
import AboutUs from "./pages/AboutUs";
import MedicalCompliance from "./pages/MedicalCompliance";
import TermsOfService from "./pages/TermsOfService";
import Sponsorship from "@/pages/Sponsorship";
import Newsletter from "@/pages/Newsletter";
import Contact from "@/pages/Contact";
import ClientPortal from "@/pages/ClientPortal";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <EnhancedHeader />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<EnhancedIndex />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/telehealth" element={<Telehealth />} />
                <Route path="/test-kits" element={<TestKits />} />
                <Route path="/products" element={<Products />} />
                
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/good-faith-estimate" element={<GoodFaithEstimate />} />
                <Route path="/first-time-patients" element={<FirstTimePatients />} />
                <Route path="/events" element={<Events />} />
                <Route path="/event-inquiry" element={<EventInquiry />} />
                <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/vitamin-injections" element={<VitaminInjections />} />
          <Route path="/nad-peptides" element={<NadPeptides />} />
          <Route path="/iv-therapy" element={<IVTherapy />} />
          <Route path="/membership" element={<EnhancedMembership />} />
           <Route path="/specialty-treatments" element={<SpecialtyTreatments />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/medical-compliance" element={<MedicalCompliance />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/sponsorship" element={<Sponsorship />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/client-portal" element={<ClientPortal />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <EnhancedFooter />
          </div>
        </BrowserRouter>
      </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
