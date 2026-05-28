import { Building2, Award, Recycle, Users, Heart, Play, Handshake, Shield, FileCheck, Scale, Leaf } from 'lucide-react';
import { useState } from 'react';
import leaderImage from '../assets/leadership/image.png'
import facilityCollabImage from '../assets/facility-collabSection/jjaowoFfALv03wdj-generated_image.jpg'

const csrInitiatives = [
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "GRKMS is committed to reducing environmental impact by minimizing waste generation. The company focuses on waste reduction through the reuse, refurbishment, and recycling of electronic components and devices, promoting sustainable resource management."
  },
  {
    icon: Heart,
    title: "Labor Rights & Well-being",
    description: "GRKMS prioritizes safe working conditions and fair labor practices to ensure employee well-being. The company adheres to ISO 45001:2018 standards for occupational health and safety and provides fair wages, benefits, and growth opportunities, reinforcing its commitment to social sustainability."
  },
  {
    icon: Shield,
    title: "Corporate Governance",
    description: "GRKMS upholds strong governance practices by promoting ethical leadership, transparency, and accountability. The organization ensures compliance with corporate governance standards and regularly reports ESG performance to stakeholders, reinforcing its commitment to sustainability."
  },
  {
    icon: Users,
    title: "Diversity & Inclusion",
    description: "GRKMS fosters a diverse and inclusive workplace by providing equal opportunities for all individuals, regardless of background. The company supports supplier diversity and invests in employee training and development programs to promote inclusivity and professional growth."
  }
];

const upcomingInitiatives = [
  {
    title: "Green School Program",
    date: "Starting 2025",
    description: "Comprehensive environmental education program for schools"
  },
  {
    title: "Community Recycling Hub",
    date: "Launch in 2025",
    description: "Setting up local e-waste collection centers in communities"
  },
  {
    title: "Rural Outreach Program",
    date: "2025",
    description: "Expanding awareness campaigns to rural areas"
  }
];

export default function Collaboration() {
  const [activeTab, setActiveTab] = useState('process');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={facilityCollabImage}
            alt="GRKMS Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm mb-6">
              <Handshake className="h-4 w-4" />
              Strategic Partnership
            </div>
            <div className="inline-block mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-2 relative">
                Partnering with 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> GRKMS</span>
              </h1>
              {/* <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div> */}
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Together, revolutionizing e-waste management for a sustainable future through innovation and commitment.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('process')}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-colors flex items-center gap-2"
              >
                Watch Our Process
                <Play className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navigation Tabs */}
      <div className="sticky top-20 bg-white/90 backdrop-blur-md z-40 border-b border-green-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto" aria-label="Tabs">
            {[
              { id: 'overview', name: 'Overview', icon: Building2 },
              { id: 'certifications', name: 'Certifications', icon: Award },
              { id: 'process', name: 'Process', icon: Recycle },
              { id: 'csr', name: 'CSR Activities', icon: Heart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600 bg-green-50/50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50/50'
                } flex items-center gap-2 whitespace-nowrap py-4 px-4 border-b-2 font-semibold text-sm transition-all duration-300 rounded-t-lg`}
              >
                <tab.icon className={`h-5 w-5 transition-colors ${
                  activeTab === tab.id ? 'text-green-600' : 'text-gray-400'
                }`} />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CSR Activities Tab */}
          {activeTab === 'csr' && (
            <div className="space-y-16">
              {/* CSR Overview */}
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-block mb-4">
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                    Corporate Social 
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Responsibility</span>
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At GRKMS, we believe in giving back to society and creating a positive impact through our various CSR initiatives. Our programs focus on environmental conservation, community development, and sustainable practices.
                </p>
              </div>

              {/* CSR Initiatives Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {csrInitiatives.map((initiative, index) => (
                  <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:border-green-300 transition-all duration-500 hover:shadow-xl p-8">
                    <div className="relative">
                      <div className="flex items-center justify-center mb-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <initiative.icon className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{initiative.title}</h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{initiative.description}</p>
                    </div>
                    <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                  </div>
                ))}
              </div>

              {/* Upcoming Initiatives */}
              <div className="bg-gradient-to-br from-green-900 via-green-900 to-green-950 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-black text-white mb-2">
                      Upcoming 
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Initiatives</span>
                    </h3>
                    <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {upcomingInitiatives.map((initiative) => (
                      <div key={initiative.title} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                          <h4 className="font-bold text-xl mb-2 text-white group-hover:text-green-300 transition-colors duration-300">{initiative.title}</h4>
                          <p className="text-green-400 text-sm mb-3 font-semibold">{initiative.date}</p>
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">{initiative.description}</p>
                        </div>
                        
                        <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-16">
              {/* Leadership Section with Hover Effects */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl border border-green-100 hover:border-green-300 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <div className="inline-block mb-4">
                      <h2 className="text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white shadow-lg">
                          <Users className="h-6 w-6" />
                        </div>
                        Leadership
                      </h2>
                      <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden shadow-lg">
                          <img src={leaderImage} alt="Mr. Govindaraju" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Govindaraju</h3>
                        <p className="text-gray-600 leading-relaxed">
                          A visionary leader in the recycling industry with over two decades of experience.
                          Under his guidance, GRKMS has become a pioneer in sustainable e-waste management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                    <div className="inline-block mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white shadow-lg">
                          <Award className="h-5 w-5" />
                        </div>
                        Key Achievements
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    </div>
                    <ul className="space-y-4">
                      {[
                        "Processed over 100,000 tons of e-waste",
                        "Established state-of-the-art recycling facility",
                        "Launched innovative recycling technologies",
                        "Received multiple environmental awards",
                        "Expanded operations across multiple states"
                      ].map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/60 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Interactive Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "20+", label: "Years of Excellence", icon: Building2 },
                  { value: "5K+", label: "Tons Processed", icon: Recycle },
                  { value: "50+", label: "Corporate Partners", icon: Handshake }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer border border-green-100 hover:border-green-300 duration-500"
                    onMouseEnter={() => setHoveredCard(stat.label)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 shadow-lg ${
                      hoveredCard === stat.label ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600'
                    }`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <div className={`text-4xl font-black mb-3 transition-colors duration-300 ${
                      hoveredCard === stat.label ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                    <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-12">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                    Our 
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Certifications</span>
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Industry-leading certifications that demonstrate our commitment to excellence
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "ISO 14001:2015",
                    icon: Leaf,
                    description: "Environmental Management"
                  },
                  {
                    title: "R2 Certification",
                    icon: Recycle,
                    description: "Responsible Recycling"
                  },
                  {
                    title: "ISO 27001:2022",
                    icon: Shield,
                    description: "Information Security"
                  },
                  {
                    title: "ISO 9001:2015",
                    icon: FileCheck,
                    description: "Quality Management"
                  },
                  {
                    title: "ISO 45001:2018",
                    icon: Award,
                    description: "Health & Safety"
                  },
                  {
                    title: "KSBCB Authorization",
                    icon: Scale,
                    description: "Pollution Control Board"
                  }
                ].map((cert) => (
                  <div key={cert.title} className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:border-green-300 transition-all duration-500 hover:shadow-xl p-8">
                    <div className="relative">
                      <div className="flex items-center justify-center mb-6">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <cert.icon className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">{cert.title}</h3>
                        <p className="text-gray-600">{cert.description}</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-green-100">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/26SpwU31iHE"
                    title="EcoDispose Recycling Process"
                    className="w-full h-full rounded-t-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="inline-block mb-4">
                    <h2 className="text-3xl font-black text-gray-900 mb-2">Our Recycling Process</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Experience our state-of-the-art recycling facility and witness how we transform e-waste into valuable resources while ensuring environmental protection.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Collection & Sorting",
                        description: "Advanced sorting technology ensures proper categorization of different e-waste materials"
                      },
                      {
                        title: "Processing & Dismantling", 
                        description: "Systematic dismantling and processing using cutting-edge equipment"
                      },
                      {
                        title: "Resource Recovery",
                        description: "Maximum resource recovery with minimal environmental impact"
                      }
                    ].map((step) => (
                      <div key={step.title} className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                        <h3 className="font-bold mb-3 text-green-700 text-xl group-hover:text-green-800 transition-colors duration-300">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>
                        <div className="absolute -bottom-1 left-3 right-3 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { value: "99%", label: "Recovery Rate" },
                  { value: "50K+", label: "Devices Monthly" },
                  { value: "24/7", label: "Operation" },
                  { value: "15+", label: "Processing Lines" }
                ].map((stat) => (
                  <div key={stat.label} className="group bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center border border-green-100 hover:border-green-300 transition-all duration-500 hover:shadow-xl transform hover:scale-105">
                    <div className="text-4xl font-black text-green-600 mb-3 group-hover:text-green-700 transition-colors duration-300">{stat.value}</div>
                    <div className="text-gray-600 font-semibold group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
                    <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}