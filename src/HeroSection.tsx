export default function HeroSection() {
  return (
    <section className="bg-white py-10 lg:py-16 px-4 text-center border-b-4 border-orange-500">
      {/* 1. Allows the container to expand on laptops */}
      <div className="max-w-full lg:max-w-5xl mx-auto">

        {/* 2. Text scales up on medium (md) and large (lg) screens */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Stay Cool Anywhere – Rechargeable Portable Fan with 12-Hour Battery
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
          Perfect for home, office, travel & power outages.
        </p>

        {/* 3. Video container height adjusts for mobile, tablet, and desktop */}
        <div className="bg-black h-64 md:h-80 lg:h-[500px] rounded-xl mb-8 overflow-hidden shadow-lg relative max-w-4xl mx-auto">
          <video
            src="/fodable.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-8">
          <p className="text-base md:text-lg text-gray-500 line-through">
            Normal Price: ₦45,000
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-red-600">
            Promo Price: ₦40,000
          </p>
        </div>

        {/* 4. Button locked to max-w-md so it doesn't span the whole laptop screen */}
        <a
          href="#order-form"
          className="block w-full max-w-md mx-auto bg-orange-600 text-white font-bold text-xl py-4 rounded-lg shadow-lg hover:bg-orange-700 transition animate-pulse"
        >
          Order Now – Pay on Delivery
        </a>
      </div>
    </section>
  );
}