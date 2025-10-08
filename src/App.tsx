import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Health from "./pages/Health";
import Enjoy from "./pages/Enjoy";
import Mind from "./pages/Mind";
import Work from "./pages/Work";
import Growth from "./pages/Growth";
import Home from "./pages/Home";
import Time from "./pages/Time";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/health" element={<Health />} />
          <Route path="/enjoy" element={<Enjoy />} />
          <Route path="/mind" element={<Mind />} />
          <Route path="/work" element={<Work />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/time" element={<Time />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
