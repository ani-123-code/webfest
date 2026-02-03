import { Recycle, RotateCcw, RefreshCw, Trash2, Heart, BookOpen } from 'lucide-react';

const principles = [
  {
    title: "Refuse",
    icon: Trash2,
    description: "Say no to unnecessary electronic purchases and excess packaging"
  },
  {
    title: "Rethink",
    icon: BookOpen,
    description: "Consider the environmental impact before purchasing electronic items"
  },
  {
    title: "Reduce",
    icon: Heart,
    description: "Minimize e-waste by choosing durable, long-lasting products"
  },
  {
    title: "Repair",
    icon: RefreshCw,
    description: "Fix and maintain electronics to extend their lifespan"
  },
  {
    title: "Reuse",
    icon: RotateCcw,
    description: "Give electronics a second life through donation or repurposing"
  },
  {
    title: "Recycle",
    icon: Recycle,
    description: "Properly dispose of electronics through certified recycling programs"
  }
];

export default function RecyclingPrinciples() {
  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
     
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced styling */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
              The 6 R's of 
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Recycling</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Guiding principles for responsible e-waste management and sustainable living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6  border border-green-100 hover:border-green-300  "
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white    transition-all duration-300">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {principle.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {principle.description}
                </p>
              </div>

              <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
             
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}