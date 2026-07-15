import { useEffect, useState } from "react";

const data = [
  { text: "This fan saved me during the grid collapse. The battery actually lasts all night!", author: "- Chuks from Lagos" },
  { text: "Very solid build. I received mine in Port Harcourt just 3 days after ordering.", author: "- Preye from Rivers" },
  { text: "The air output is very strong. I use it for my baby's room and it's quiet.", author: "- Amina from Abuja" },
  { text: "Real value for money at ₦35,000. Customer service was polite and delivery was fast.", author: "- Tobi from Ikeja" },
  { text: "Exactly what I saw in the video is what I got. Thank you!", author: "- Nneka from Enugu" },
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
          Trusted by 1,000+ Nigerians
        </h2>

        {/* 1. Desktop Layout: Image on Left, Testimonials on Right */}
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          
          {/* THE IMAGE (WhatsApp Review) */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 rotate-1 lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/FAN.JPG"
                alt="WhatsApp Customer Review"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-white text-center italic text-sm text-gray-500">
                Everybody loves this product
              </div>
            </div>
          </div>

          {/* THE TESTIMONIALS */}
          <div className="w-full lg:w-7/12">
            {/* MOBILE VIEW: Single sliding card (Visible on mobile, hidden on laptop) */}
            <div className="lg:hidden bg-white p-8 rounded-2xl shadow-lg border border-orange-100 h-48 flex flex-col justify-center">
              <span className="text-yellow-400 text-xl mb-3">⭐⭐⭐⭐⭐</span>
              <p className="italic text-gray-700 text-lg leading-relaxed">
                "{data[index].text}"
              </p>
              <p className="font-black mt-3 text-orange-600">{data[index].author}</p>
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