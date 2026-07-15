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
    /* The 'orange-50' and 'orange-600' accents match the fan branding.
      'overflow-x-hidden' prevents mobile side-scrolling.
    */
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-orange-100 selection:text-orange-900">
      
      {/* 1. Hero: The main 'Stay Cool' value proposition */}
      <HeroSection />

      {/* 2. Social Proof: WhatsApp reviews and customer feedback */}
      <Testimonials />

      {/* 3. Features: 12H Battery, Portability, and USB Charging */}
      <Features />

      {/* 4. Product Details: Video of the fan and 'In the Box' list */}
      <ProductBox />

      {/* 5. Order Section: The high-conversion Pay-on-Delivery form */}
      <OrderForm />

      {/* 6. Footer: Branding, Copyright, and Legal Modals */}
      <Footer openModal={openModal} setOpenModal={setOpenModal} />
      
    </div>
  );
}

export default App;