export default function HeroSection() {
  return (
    <section className="bg-white py-10 lg:py-16 px-4 text-center border-b-4 border-blue-600">
      {/* 1. Allows the container to expand on laptops */}
      <div className="max-w-full lg:max-w-5xl mx-auto">

        {/* 2. Headline focused on the premium tire inflator benefit */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Never Get Stranded Again – Smart Portable Digital Tire Inflator & Air Compressor
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
          Fast inflation, auto shut-off precision, and emergency LED flashlight. Perfect for cars, SUVs, bikes, and sports gear.
        </p>

        {/* 3. Video container showing the compressor in action */}
        <div className="bg-black h-64 md:h-80 lg:h-[500px] rounded-[2.5rem] mb-8 overflow-hidden shadow-lg relative max-w-4xl mx-auto border border-slate-100">
          <video
            src="/inflator.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4. Pricing details updated to 80,000 and 60,000 */}
        <div className="mb-8">
          <p className="text-base md:text-lg text-gray-400 line-through font-semibold">
            Normal Price: ₦80,000
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-red-600 mt-1">
            Promo Price: ₦60,000
          </p>
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mt-2">
            ★ FREE NATIONWIDE SHIPPING + PAY ON DELIVERY ★
          </p>
        </div>

        {/* 5. Sleek blue CTA button matching the updated branding */}
        <a
          href="#order-form"
          className="block w-full max-w-md mx-auto bg-blue-600 text-white font-black text-xl py-5 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 animate-pulse"
        >
          Order Now – Free Delivery
        </a>
      </div>
    </section>
  );
}