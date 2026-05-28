import { Home, Package2, Truck, ClipboardCheck, ShieldCheck, Leaf } from 'lucide-react';
import RequestPickup from '../components/RequestPickup';
import automotiveImage from '../assets/automotive.jpg'
import industrialImage from '../assets/industrial.jpg'

const benefits = [
  {
    title: "Convenient Pickup",
    description: "Schedule pickups at your convenience with our doorstep collection service",
    icon: Truck,
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Data Security",
    description: "Certified data destruction for all storage devices",
    icon: ShieldCheck,
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Environmental Impact",
    description: "Contribute to reducing e-waste in landfills and protecting our environment",
    icon: Leaf,
    gradient: "from-green-500 to-green-600"
  }
];

const wasteTypes = [
  {
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    items: ["Smartphones", "Laptops", "Tablets", "Gaming Consoles", "Digital Cameras", "More ..."]
  },
  {
    category: "Electricals",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    items: ["Microwaves", "Air Conditioners", "Washing Machines", "Refrigerators", "Small Appliances", "More ..."]
  },
  {
    category: "Batteries & Power",
    image: "https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    items: ["Lithium Batteries", "Alkaline Batteries", "Power Banks", "UPS Systems", "Car Batteries", "More ..."]
  },
  {
    category: "Automotive",
    image: automotiveImage,
    items: ["Used Tires", "Motor Oil", "Car Parts", "Vehicle Batteries", "Filters", "More ..."]
  },
  {
    category: "Plastics",
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    items: ["Electronic Casings", "Computer Parts", "Printer Cartridges", "Cable Insulation", "Device Packaging", "More ..."]
  },
  {
    category: "Industrial",
    image: industrialImage,
    items: ["Industrial Equipment", "Manufacturing Waste", "Heavy Machinery", "Commercial Appliances", "Industrial Batteries", "More ..."]
  }
];

const processSteps = [
  {
    title: "Schedule Pickup",
    description: "Book a convenient time slot online",
    icon: Home
  },
  {
    title: "Package Items",
    description: "Prepare your e-waste for collection",
    icon: Package2
  },
  {
    title: "Doorstep Pickup",
    description: "We collect from your location",
    icon: Truck
  },
  {
    title: "Get Certificate",
    description: "Receive disposal certificate",
    icon: ClipboardCheck
  }
];

export default function Individual() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
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
                Household 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> E-Waste Collection</span>
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
              Easy and responsible disposal of your electronic waste with doorstep pickup service.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                Why Choose 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Us</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience hassle-free e-waste disposal with our premium services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-base">
                    {benefit.description}
                  </p>
                </div>

                <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Accept */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 relative">
                What We 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Accept</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Wide range of electronic and electrical waste items
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wasteTypes.map((type, index) => (
              <div
                key={type.category}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-green-400/20 hover:border-green-400/40"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                      {type.category}
                    </h3>
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <ul className="space-y-3 relative z-10">
                    {type.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                How It 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Works</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Simple steps to responsible e-waste disposal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            
            {processSteps.map((step) => (
              <div key={step.title} className="text-center group relative z-10">
                <div className="mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-4 inline-flex shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Request Pickup Form */}
      <RequestPickup />
    </div>
  );
}