import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SkincareRoutine from "./pages/SkincareRoutine";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path="/skincare-routine" element={<SkincareRoutine />} />
        <Route path="/beauty-products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
