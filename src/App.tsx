
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Blog from "./pages/Blog";
import Healthcare from "./pages/Healthcare";
import Insurance from "./pages/Insurance";
import Ecommerce from "./pages/Ecommerce";
import Neurodivergence from "./pages/Neurodivergence";
import Enterprise from "./pages/Enterprise";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

// AnimationWrapper component to handle route transitions
const AnimationLayout = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/neurodivergence" element={<Neurodivergence />} />
        <Route path="/enterprise" element={<Enterprise />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimationLayout />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
