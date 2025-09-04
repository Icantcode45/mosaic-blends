import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnhancedIndex from "./pages/EnhancedIndex";
import NotFound from "./pages/NotFound";
import EnhancedHeader from "./components/EnhancedHeader";
import EnhancedFooter from "./components/EnhancedFooter";
import Telehealth from "./pages/Telehealth";
import MobileTestingKits from "./pages/MobileTestingKits";
import Supplements from "./pages/Supplements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <EnhancedFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
