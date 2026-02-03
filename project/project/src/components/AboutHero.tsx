export default function AboutHero() {
  return (
    <div className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-600 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-2 relative">
              About 
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> EcoDispose</span>
            </h1>
            <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Pioneering sustainable e-waste management solutions.
          </p>
        </div>
      </div>
    </div>
  );
}