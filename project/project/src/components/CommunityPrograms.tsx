import { useState } from 'react';
import { Users, School, Building2, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "School E-Waste Education Program",
    description: "Engaging students in environmental responsibility through interactive workshops and collection drives.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    stats: {
      participants: "5000+",
      wasteCollected: "2 tons",
      schoolsEngaged: "25+"
    }
  },
  {
    id: 2,
    title: "Community Collection Drive",
    description: "Regular neighborhood collection events making e-waste disposal convenient for residents.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
    stats: {
      communities: "30+",
      wasteCollected: "5 tons",
      households: "1000+"
    }
  },
  {
    id: 3,
    title: "Corporate Sustainability Partnership",
    description: "Collaborating with businesses to implement effective e-waste management programs.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    stats: {
      partners: "50+",
      wasteCollected: "10 tons",
      employeesEngaged: "5000+"
    }
  }
];

export default function CommunityPrograms() {
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <section className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-24" id="community-programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-green-950 mb-3">
            Community <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Impact Programs</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Making a difference through local initiatives and educational programs
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Showcase */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-sm">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeProgram === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-200 text-sm">{program.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Program List */}
          <div className="space-y-6">
            {programs.map((program, index) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-start gap-5 border 
                  ${activeProgram === index 
                    ? 'bg-green-50 border-green-500' 
                    : 'bg-white border-gray-200 hover:bg-green-50/40'}`}
              >
                <div className={`p-3 rounded-xl transition-colors ${
                  activeProgram === index ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
                }`}>
                  {index === 0 ? <School className="w-5 h-5" /> : index === 1 ? <Users className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                </div>

                <div className="flex-1">
                  <h3 className={`text-lg font-bold mb-1 ${activeProgram === index ? 'text-green-900' : 'text-gray-900'}`}>
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                </div>

                <ArrowRight className={`w-5 h-5 mt-1 transition-transform ${
                  activeProgram === index ? 'rotate-90 text-green-600' : 'text-gray-400'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
