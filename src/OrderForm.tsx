import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "Federal Capital Territory", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
  "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara"
];

export default function OrderForm() {
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Price points updated for the Portable Tire Inflator (60k promo vs 80k original)
  const originalPrice = 80000;
  const unitPrice = 54999;
  
  const originalTotal = originalPrice * quantity;
  const productTotal = unitPrice * quantity;
  const totalSaved = originalTotal - productTotal;

  // Delivery is universally free
  const grandTotal = productTotal;

  const whatsappNumber = "2349064543927";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const message = `
🛒 *NEW ORDER (TIRE INFLATOR - PAY ON DELIVERY)*
👤 Name: ${formData.get("customer_name")}
📞 Phone: ${formData.get("customer_phone")}
📍 Address: ${formData.get("customer_address")}, ${selectedState}
📦 Quantity: ${quantity}
💵 Product Total: ₦${productTotal.toLocaleString()}
🚚 Delivery Fee: FREE
💰 *Total to Pay on Delivery: ₦${grandTotal.toLocaleString()}*
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey && formRef.current) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.warn("EmailJS failed to deliver sequence, falling back safely:", emailError);
      }
    }

    setLoading(false);
    setShowModal(true);
    
    form.reset();
    setSelectedState("");
    setQuantity(1);

    window.location.href = whatsappURL;
  };

  return (
    <section id="order-form" className="py-12 lg:py-20 px-4 bg-slate-50 relative">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[99] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center gap-2"
      >
        <WhatsAppIcon />
        <span className="hidden md:inline font-bold">Chat with Support</span>
      </a>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* LEFT COLUMN: Info */}
        <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
          <div className="inline-block self-start bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
            100% Pay On Delivery + Free Shipping
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            See It First, <br />
            <span className="text-blue-600">Pay Later</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We trust you. That's why we are shipping this directly to your doorstep without requesting a dime upfront. 
            <span className="font-bold text-slate-900"> You only pay when you have received and inspected your device.</span>
          </p>
        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="w-full lg:w-1/2">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 lg:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Where should we send it?</h3>
            
            <div className="space-y-4">
              <input type="text" name="customer_name" placeholder="Your Full Name" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" name="customer_phone" placeholder="Phone Number" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                <input type="email" name="customer_email" placeholder="Email (Optional)" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>

              <input type="text" name="customer_address" placeholder="Full Home/Office Address" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" required />

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 ml-2">DELIVERY STATE</label>
                <select
                  name="customer_note"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                  required
                >
                  <option value="">Choose State...</option>
                  {NIGERIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                <label className="font-bold text-blue-900">Quantity:</label>
                <div className="flex items-center gap-4">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow text-xl font-bold">-</button>
                  <span className="text-xl font-black w-6 text-center">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow text-xl font-bold">+</button>
                </div>
              </div>

              {/* Hidden Inputs for EmailJS Variables */}
              <input type="hidden" name="order_items" value={`${quantity} unit(s) of Tire Inflator ⭕`} />
              <input type="hidden" name="order_total" value={grandTotal.toLocaleString()} />
              <input type="hidden" name="total_saved" value={totalSaved.toLocaleString()} />

              {/* Money Back Guarantee Banner */}
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-2xl">
                <span className="text-2xl">🛡️</span>
                <div>
                  <p className="text-sm font-bold text-green-800">100% Money-Back Guarantee</p>
                  <p className="text-xs text-green-700">If your device is not delivered in perfect working condition, you don't pay a dime.</p>
                </div>
              </div>

              {/* FINAL BREAKDOWN */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h4 className="text-sm font-bold mb-3 flex items-center gap-2 text-slate-800">
                  <span className="bg-blue-100 p-1 rounded text-xs">📋</span> Final Breakdown
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600 items-center">
                    <span>Original Price</span>
                    <span className="font-semibold text-slate-400 line-through">₦{originalTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 items-center">
                    <span>Promo Price ({quantity} unit)</span>
                    <span className="font-semibold text-green-600">₦{productTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 items-center">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-green-600 uppercase tracking-wider">Free</span>
                  </div>
                  <div className="pt-3 mt-3 border-t flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">To Pay On Delivery</p>
                      <p className="text-2xl font-black text-slate-900">
                        ₦{grandTotal.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-lg lg:text-xl font-black shadow-xl shadow-blue-200 transition-all active:scale-95 disabled:bg-slate-300 flex justify-center items-center gap-2 mt-4 cursor-pointer"
              >
                {loading ? (
                  "Processing Order..."
                ) : (
                  <>
                    Confirm Order <span className="hidden sm:inline">•</span> Pay On Delivery
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] max-w-sm w-full p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
            <h3 className="text-2xl font-black text-slate-900">Order Placed!</h3>
            <p className="text-slate-600 mt-2 mb-6">
              Your details have been registered. If your web browser did not open WhatsApp automatically, your order remains safe.
            </p>
            
            <button 
              onClick={() => setShowModal(false)} 
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
            >
              Back to Page
            </button>
          </div>
        </div>
      )}
    </section>
  );
}