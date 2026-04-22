import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {Toaster} from "@/components/ui/toaster";
import {TooltipProvider} from "@/components/ui/tooltip";
import Layout from "./components/Layout.js";
import Index from "./pages/Index.js";
import About from "./pages/About.js";
import Programs from "./pages/Programs.js";
import Approach from "./pages/Approach.js";
import Parents from "./pages/Parents";
import Contact from "./pages/Contact.js";
import FAQ from "./pages/FAQ.js";
import Admissions from "./pages/Admissions.js";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/approach" element={<Approach />} />
                        <Route path="/parents" element={<Parents />} />
                        <Route path="/admissions" element={<Admissions />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
