import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Motorista from "./pages/Motorista";
import Seguranca from "./pages/Seguranca";
import Socios from "./pages/Socios";
import Blog from "./pages/Blog";
import NeoenergiaSegumdaVia from "./pages/blog/NeoenergiaSegumdaVia";
import OrcamentoFamiliarVoltaAulas from "./pages/blog/OrcamentoFamiliarVoltaAulas";
import LiquidoDeArrefecimento from "./pages/blog/LiquidoDeArrefecimento";
import TrianguloSinalizacao from "./pages/blog/TrianguloSinalizacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/motorista" element={<Motorista />} />
          <Route path="/seguranca" element={<Seguranca />} />
          <Route path="/socios" element={<Socios />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/neoenergia-segunda-via" element={<NeoenergiaSegumdaVia />} />
          <Route path="/blog/orcamento-familiar-volta-aulas" element={<OrcamentoFamiliarVoltaAulas />} />
          <Route path="/blog/liquido-de-arrefecimento" element={<LiquidoDeArrefecimento />} />
          <Route path="/blog/triangulo-de-sinalizacao" element={<TrianguloSinalizacao />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
