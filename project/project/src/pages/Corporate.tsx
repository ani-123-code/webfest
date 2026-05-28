import { Building2, ShieldCheck, BarChart3, Globe2, Award, Clock, Truck, Recycle, TrendingUp, Shield, Target, Sparkles } from 'lucide-react';
import RequestPickup from '../components/RequestPickup';

const features = [
  {
    title: "Customized Solutions",
    description: "Tailored e-waste management programs designed for your organization's specific needs and scale",
    icon: Building2,
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Compliance Management",
    description: "Full compliance with environmental regulations and comprehensive documentation support",
    icon: ShieldCheck,
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Asset Management",
    description: "Comprehensive tracking, reporting, and lifecycle management of disposed assets",
    icon: BarChart3,
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Global Standards",
    description: "Following international best practices and certifications in e-waste management",
    icon: Globe2,
    gradient: "from-green-500 to-green-600"
  }
];

const benefits = [
  {
    title: "Cost Efficiency",
    description: "Optimize your e-waste management costs with our bulk handling capabilities and transparent pricing",
    icon: TrendingUp
  },
  {
    title: "Risk Mitigation",
    description: "Ensure complete data security and environmental compliance with certified processes",
    icon: Shield
  },
  {
    title: "Sustainability Goals",
    description: "Support your organization's environmental initiatives with measurable impact reporting",
    icon: Target
  },
  {
    title: "Brand Enhancement",
    description: "Demonstrate corporate responsibility through certified e-waste management practices",
    icon: Sparkles
  }
];

const processSteps = [
  {
    title: "Assessment",
    description: "Comprehensive evaluation of your e-waste management needs and current processes",
    icon: Clock
  },
  {
    title: "Collection",
    description: "Scheduled pickup from multiple locations with flexible timing options",
    icon: Recycle
  },
  {
    title: "Transport",
    description: "Secure, tracked transportation of your e-waste with chain of custody documentation",
    icon: Truck
  },
  {
    title: "Processing",
    description: "Certified secure handling, data destruction, and environmentally responsible recycling",
    icon: ShieldCheck
  },
  {
    title: "Reporting",
    description: "Detailed documentation, certificates of destruction, and sustainability impact reports",
    icon: Award
  }
];

const industries = [
  {
    title: "IT & Technology",
    sectors: ["Data Centers", "Software Companies", "Hardware Manufacturers", "Telecom Companies"]
  },
  {
    title: "Corporate & Finance",
    sectors: ["Banks", "Insurance Companies", "Corporate Offices", "Financial Institutions"]
  },
  {
    title: "Education & Healthcare",
    sectors: ["Universities", "Research Institutions", "Hospitals", "Medical Centers"]
  }
];

export default function Corporate() {
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
                Enterprise 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> E-Waste Solutions</span>
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
              Comprehensive e-waste management solutions tailored for businesses, ensuring compliance, sustainability, and corporate responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                Enterprise 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Solutions</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive e-waste management designed for your organization's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-base">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 relative">
                Why Partner 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> With Us</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Strategic advantages that drive your organization forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-green-400 to-green-500 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                Our 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Process</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Streamlined workflow designed for enterprise efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
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

      {/* Industries Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 relative">
                Industries 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> We Serve</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Specialized solutions tailored for various sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="group bg-gradient-to-br from-black via-gray-900 to-black bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-700 hover:border-gray-600"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-green-300 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <ul className="space-y-3">
                    {industry.sectors.map((sector) => (
                      <li key={sector} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                        {sector}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
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