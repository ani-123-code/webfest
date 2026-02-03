export default function MissionVision() {
  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-6 group-hover:text-green-700 transition-colors duration-300">
                Our 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                To revolutionize e-waste management through innovative solutions that protect our environment and create a sustainable future for generations to come. We strive to make responsible e-waste disposal accessible to everyone while ensuring the highest standards of data security and environmental compliance.
              </p>
            </div>

            <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-6 group-hover:text-green-700 transition-colors duration-300">
                Our 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Vision</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                To be the leading force in transforming India's e-waste management landscape, setting new standards for environmental responsibility and sustainable practices. We envision a future where every piece of electronic waste is properly recycled and repurposed.
              </p>
            </div>

            <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}