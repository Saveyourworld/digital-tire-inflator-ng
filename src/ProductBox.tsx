export default function ProductBox() {
  return (
    <section className="py-12 lg:py-20 px-4 bg-gray-50">
      {/* Container expands to 5xl on laptops and switches to a 2-column grid */}
      <div className="max-w-md lg:max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">

        {/* Video Side: Takes up more space on desktop */}
        <div className="w-full lg:w-1/2 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-200 bg-white">
          <video
            src="/inflagif.MP4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-[9/16] object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 border-b-4 border-blue-600 inline-block pb-1 mb-6">
            What's in the box?
          </h2>

          <ul className="list-none space-y-4">
            {[
              "1x Smart Digital Tire Inflator",
              "1x Quick-Connect Air Hose",
              "1x USB Charging Cable / Power Cord",
              "3x Specialized Nozzle Adapters (for balls, toys & bikes)",
              "Built-in LED Flashlight & Power Bank Feature"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-lg lg:text-xl font-medium">
                {/* Custom blue checkmark for better branding */}
                <span className="text-blue-600 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 hidden lg:block">
            <p className="text-sm text-blue-800 font-bold uppercase tracking-wider">📦 Ready for Dispatch</p>
            <p className="text-xs text-blue-700">Order now and receive 100% free delivery nationwide within 2-4 working days.</p>
          </div>
        </div>

      </div>
    </section>
  );
}