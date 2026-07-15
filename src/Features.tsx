export default function Features() {
  return (
    <section className="py-12 lg:py-24 px-4 bg-white">
      {/* 1. Container expands from mobile (max-w-md) to laptop (max-w-6xl) */}
      <div className="max-w-md lg:max-w-6xl mx-auto">
        
        <h2 className="text-3xl lg:text-4xl font-black text-center mb-10 lg:mb-16 text-gray-900">
          Why You Need This Fan Today
        </h2>

        {/* 2. Grid: 1 column on mobile, 3 columns on laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition duration-300">
            <div className="text-5xl mb-4 bg-orange-50 w-20 h-20 flex items-center justify-center rounded-full">🔋</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Never Suffer Heat Again</h3>
              <p className="text-gray-600 leading-relaxed">
                High-capacity rechargeable battery works perfectly even when PHCN takes the light.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition duration-300">
            <div className="text-5xl mb-4 bg-orange-50 w-20 h-20 flex items-center justify-center rounded-full">🎒</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Carry It Anywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Foldable and lightweight design makes it perfect for the office, travel, or bedside.
              </p>
            </div>
          </div>

          {/* Feature 3 - Added for a balanced Desktop Look */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition duration-300">
            <div className="text-5xl mb-4 bg-orange-50 w-20 h-20 flex items-center justify-center rounded-full">⚡</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Fast USB Charging</h3>
              <p className="text-gray-600 leading-relaxed">
                Charge easily using your phone head, laptop, or power bank for non-stop cooling.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}