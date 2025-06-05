import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  // Use basePath only in production (GitHub Pages)
  const basePath = import.meta.env.PROD ? '/Vishwanth-Reddy' : '';

  return (
    <Switch>
      <Route path={`${basePath}/`} component={Home}/>
      <Route path={`${basePath}/*`} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
