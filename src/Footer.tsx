import Modal from "./Modal";

// 1. Define the possible states for the modal
type ModalState = "privacy" | "terms" | null;

// 2. Define the props interface for TypeScript
interface FooterProps {
  openModal: ModalState;
  setOpenModal: (state: ModalState) => void;
}

export default function Footer({ openModal, setOpenModal }: FooterProps) {
  return (
    <footer className="py-12 bg-gray-950 text-gray-400 text-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Content: Stacks on mobile, splits on laptop */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          <div className="text-center md:text-left">
            <p className="font-bold text-white text-lg">Gemini Auto Tech NG</p>
            <p className="mt-1">Premium smart automotive solutions to keep Nigerian drivers moving.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setOpenModal("privacy")} 
              className="hover:text-white underline decoration-gray-700 underline-offset-4 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setOpenModal("terms")} 
              className="hover:text-white underline decoration-gray-700 underline-offset-4 transition-colors cursor-pointer"
            >
              Terms of Service & Delivery
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Gemini Auto Tech NG. All rights reserved.</p>
          
          {/* Trust Badges matching the free shipping updates */}
          <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition">
            <span className="text-[10px] font-bold border border-gray-700 px-2 py-1 rounded">PAY ON DELIVERY</span>
            <span className="text-[10px] font-bold border border-gray-700 px-2 py-1 rounded">100% FREE SHIPPING</span>
          </div>
        </div>

        {/* --- Privacy Policy Modal --- */}
        {openModal === "privacy" && (
          <Modal title="Privacy Policy" onClose={() => setOpenModal(null)}>
            <div className="space-y-4 text-left text-gray-700">
              <p>
                We value your privacy. All information collected (Name, Phone Number, and Delivery Address) is used 
                strictly for processing your order and facilitating delivery.
              </p>
              <p>
                We do not sell, rent, or share your personal data with third parties, except for our 
                trusted logistics partners to ensure your order reaches you.
              </p>
            </div>
          </Modal>
        )}

        {/* --- Terms of Service Modal --- */}
        {openModal === "terms" && (
          <Modal title="Terms & Delivery" onClose={() => setOpenModal(null)}>
            <div className="space-y-4 text-left text-gray-700">
              <section>
                <h4 className="font-bold text-gray-900">1. Operations</h4>
                <p>We operate from Lagos, Nigeria. Pay-on-delivery is available for confirmed orders in all accessible states.</p>
              </section>
              <section>
                <h4 className="font-bold text-gray-900">2. Free Delivery & Timelines</h4>
                <p>Delivery is 100% free nationwide. Lagos: 24–48 hours. Other States: 3–5 working days. You will receive a call from our dispatch agent before delivery is attempted.</p>
              </section>
              <section>
                <h4 className="font-bold text-gray-900">3. Returns & Warranty</h4>
                <p>We accept returns within 7 days for factory defects only. The item must be unused, returned with all included adapters/nozzles, and kept in its original packaging.</p>
              </section>
            </div>
          </Modal>
        )}
      </div>
    </footer>
  );
}