import { Leaf, Award, Users, Globe2 } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmental preservation"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining highest quality standards"
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a greener future together"
  },
  {
    icon: Globe2,
    title: "Innovation",
    description: "Pioneering sustainable solutions"
  }
];

export default function CompanyValues() {
  return (
    <div className=" bg-emerald-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-green-950 mb-2 relative">
              Our 
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"> Values</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Core principles that guide our mission
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-gradient-to-br from-green-950 via-green-900 to-green-950 relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-500"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-green-400 to-green-500 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 inline-flex">
                    <value.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}