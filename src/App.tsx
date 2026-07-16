import { useState } from "react";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import Features from "./Features";
import ProductBox from "./ProductBox";
import OrderForm from "./OrderForm";
import Footer from "./Footer";

function App() {
  // State for the legal modals (Privacy/Terms) in the footer
  const [openModal, setOpenModal] = useState<"privacy" | "terms" | null>(null);

  return (
    /* Swapped the old fan orange for a sleek automotive blue/slate theme.
      'overflow-x-hidden' prevents mobile side-scrolling.
    */
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Hero: The main 'Never get stranded with a flat tire' value proposition */}
      <HeroSection />

      {/* 2. Social Proof: WhatsApp reviews from drivers and car owners */}
      <Testimonials />

      {/* 3. Features: Digital Display, Auto Shut-off, Fast Inflation, Portable Power */}
      <Features />

      {/* 4. Product Details: Video of the inflator in action and 'In the Box' nozzles/hoses */}
      <ProductBox />

      {/* 5. Order Section: The high-conversion Pay-on-Delivery form (Original: 80k, Promo: 60k) */}
      <OrderForm />

      {/* 6. Footer: Branding, Copyright, and Legal Modals */}
      <Footer openModal={openModal} setOpenModal={setOpenModal} />
      
    </div>
  );
}

export default App;