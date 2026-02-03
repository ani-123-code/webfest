import { Scroll, FileText, Shield, Award, ArrowRight, Calendar } from 'lucide-react';

const amendments = [
  {
    title: "E-Waste Management and Handling Rules, 2011",
    date: "2011",
    description: "Introduced EPR in India, mandating manufacturers to manage their product waste.",
    key_points: [
      "Initial framework for e-waste management",
      "Manufacturer responsibility established",
      "Basic guidelines for handling e-waste"
    ]
  },
  {
    title: "E-Waste (Management) Rules, 2016",
    date: "March 23, 2016",
    description: "Replaced 2011 rules with comprehensive framework for all stakeholders.",
    key_points: [
      "Extended scope of stakeholders",
      "Enhanced collection mechanisms",
      "Stricter compliance requirements"
    ]
  },
  {
    title: "E-Waste (Management) Rules, 2022",
    date: "November 2022",
    description: "Revised rules focusing on environmental responsibility and enhanced EPR framework.",
    key_points: [
      "Mandatory CPCB portal registration",
      "Reduction of hazardous substances",
      "Improved stakeholder accountability"
    ]
  },
  {
    title: "First Amendment Rules, 2023",
    date: "January 30, 2023",
    description: "Updated documentation requirements and exemptions.",
    key_points: [
      "Modified documentation phrases",
      "New exemptions for specific components",
      "Updated compliance guidelines"
    ]
  },
  {
    title: "Third Amendment Rules, 2024",
    date: "March 8, 2024",
    description: "Enhanced flexibility in reporting and certificate management.",
    key_points: [
      "Extended deadline provisions",
      "EPR certificate exchange platform",
      "Updated reporting guidelines"
    ]
  }
];

const benefits = [
  {
    title: "Financial Incentives",
    description: "Encourages sustainable product design and reduced recycling costs",
    icon: Award
  },
  {
    title: "Material Efficiency",
    description: "Promotes use of fewer materials and enhanced product durability",
    icon: FileText
  },
  {
    title: "Domestic Recycling",
    description: "Supports local recycling infrastructure development",
    icon: Scroll
  },
  {
    title: "Environmental Protection",
    description: "Reduces environmental impact through proper waste management",
    icon: Shield
  }
];

export default function EPRPolicy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
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
                EPR Policy 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Framework</span>
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
              Understanding Extended Producer Responsibility in E-Waste Management - A comprehensive guide to compliance and environmental stewardship.
            </p>
          </div>
        </div>
      </div>

      {/* What is EPR Section */}
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                What is 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> EPR?</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-all duration-500 shadow-lg hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Extended Producer Responsibility (EPR) is a policy strategy designed to hold producers accountable for the end-of-life management of their products. This approach aims to reduce the environmental impact of waste by ensuring producers take responsibility for the entire lifecycle of their goods, particularly when they become waste.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 relative">
                Policy Evolution 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Timeline</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Tracking the evolution of e-waste management regulations
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 w-1 bg-gradient-to-b from-green-400 via-emerald-400 to-green-400 h-full rounded-full shadow-lg"></div>
            
            <div className="space-y-12 md:space-y-16">
              {amendments.map((amendment, index) => (
                <div key={amendment.title} className="group relative">
                  {/* Timeline Marker */}
                  <div className="absolute left-2 md:left-6 top-6 md:top-8 z-20">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg border-4 border-green-950 flex items-center justify-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  <div className="absolute left-8 md:left-12 top-8 md:top-10 w-6 md:w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"></div>
                  
                  {/* Content Card */}
                  <div className="ml-16 md:ml-24">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-green-400/20 hover:border-green-400/40 relative shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100"></div>
                      
                      <div className="relative z-10">
                        {/* Date Badge */}
                        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full mb-4 border border-green-400/30 group-hover:border-green-400/50">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
                          <span className="text-green-400 font-bold text-xs md:text-sm">{amendment.date}</span>
                        </div>
                        
                        <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-green-300">
                          {amendment.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed group-hover:text-gray-200 text-sm md:text-base">
                          {amendment.description}
                        </p>
                        
                        <ul className="space-y-2 md:space-y-3">
                          {amendment.key_points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 md:gap-3 text-gray-300 group-hover:text-gray-200">
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                              <span className="text-xs md:text-sm leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute -bottom-1 left-4 right-4 md:left-5 md:right-5 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 rounded-full group-hover:opacity-100"></div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-bl from-green-100/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline End Marker */}
            <div className="absolute left-2 md:left-6 bottom-0 translate-y-8">
              <div className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg border-2 md:border-4 border-green-950 flex items-center justify-center">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                Benefits of 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> EPR Management</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Strategic advantages of implementing EPR compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-all duration-500 shadow-lg hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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

      {/* Certification Section */}
      <div className=" bg-emerald-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="group bg-gradient-to-br from-green-950 via-green-900 to-green-950 bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-green-400/20 hover:border-green-400/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className=" relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 relative">
                  EPR 
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Certification</span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-gray-200 mb-8 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                Obtaining an EPR certificate ensures manufacturers and producers manage the waste generated by their products. This includes setting up collection centers, ensuring proper segregation and recycling, and adhering to all necessary compliances.
              </p>
              
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-400 text-green-950 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Shield className="h-6 w-6" />
                <span>Certified EPR Compliant</span>
              </div>
            </div>

            <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}