import { useEffect, useState } from "react";

const data = [
  { text: "This inflator saved me on the third mainland bridge. I noticed a low tire, preset it to 32 psi, and it stopped exactly when full!", author: "- Chuks from Lagos" },
  { text: "Very premium build. I received mine in Port Harcourt just 3 days after ordering and it's already inflated my SUV tire twice.", author: "- Preye from Rivers" },
  { text: "No more long queues at vulcanizers. The digital gauge is incredibly accurate, and the built-in light is bright enough for night emergencies.", author: "- Amina from Abuja" },
  { text: "Absolute lifesaver for interstate trips. Excellent value for money at ₦60,000. Customer service was polite and delivery was super fast.", author: "- Tobi from Ikeja" },
  { text: "Exactly what I saw in the demo video is what I got. Comes with all the nozzles for my kid's bicycle and football too!", author: "- Nneka from Enugu" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % data.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-md lg:max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-black text-center mb-10 lg:mb-16 text-gray-900">
          Trusted by 1,000+ Nigerian Drivers
        </h2>

        {/* 1. Desktop Layout: Image on Left, Testimonials on Right */}
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          
          {/* THE IMAGE (WhatsApp Review) */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-200 rotate-1 lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/inflator.JPG"
                alt="WhatsApp Customer Review"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-white text-center italic text-sm text-gray-500 font-medium">
                Every driver loves this device
              </div>
            </div>
          </div>

          {/* THE TESTIMONIALS */}
          <div className="w-full lg:w-7/12">
            {/* MOBILE VIEW: Single sliding card (Visible on mobile, hidden on laptop) */}
            <div className="lg:hidden bg-white p-8 rounded-3xl shadow-lg border border-blue-100 h-52 flex flex-col justify-center">
              <span className="text-yellow-400 text-xl mb-3">⭐⭐⭐⭐⭐</span>
              <p className="italic text-gray-700 text-base leading-relaxed">
                "{data[index].text}"
              </p>
              <p className="font-black mt-3 text-blue-600">{data[index].author}</p>
            </div>

            {/* DESKTOP VIEW: Grid of reviews (Hidden on mobile, visible on laptop) */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.slice(0, 4).map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <span className="text-yellow-400 text-sm mb-2 block">⭐⭐⭐⭐⭐</span>
                  <p className="italic text-gray-700 text-sm mb-3">"{item.text}"</p>
                  <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">{item.author}</p>
                </div>
              ))}
            </div>
            
            <div className="hidden lg:block mt-8 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                 <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Verified Nigerian Purchases
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}