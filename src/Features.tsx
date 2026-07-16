export default function Features() {
  return (
    <section className="py-12 lg:py-24 px-4 bg-white">
      {/* 1. Container expands from mobile (max-w-md) to laptop (max-w-6xl) */}
      <div className="max-w-md lg:max-w-6xl mx-auto">
        
        <h2 className="text-3xl lg:text-4xl font-black text-center mb-10 lg:mb-16 text-slate-900">
          Why Every Driver Needs This Inflator
        </h2>

        {/* 2. Grid: 1 column on mobile, 3 columns on laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition duration-300">
            <div className="text-5xl mb-4 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-full">🎯</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Auto Shut-Off Precision</h3>
              <p className="text-slate-600 leading-relaxed">
                Simply set your desired tire pressure on the digital screen. It automatically stops pumping when reached, completely preventing over-inflation.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition duration-300">
            <div className="text-5xl mb-4 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-full">🚗</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Compact & Emergency-Ready</h3>
              <p className="text-slate-600 leading-relaxed">
                Ditch the bulky foot pumps. This sleek device fits perfectly in your glove box or trunk, ensuring you never get stranded with a flat tire.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition duration-300">
            <div className="text-5xl mb-4 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-full">⚡</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Fast & Multipurpose</h3>
              <p className="text-slate-600 leading-relaxed">
                Quickly inflates car tires, motorcycles, bicycles, and sports balls. It even includes a built-in LED flashlight for safe night-time emergencies.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}