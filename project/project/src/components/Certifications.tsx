import { Award, ShieldCheck, FileCheck, Scale, Leaf, Recycle } from 'lucide-react';

const certifications = [
  {
    title: 'ISO 14001:2015',
    icon: Leaf,
    description: 'Environmental Management System'
  },
  {
    title: 'ISO 27001:2022',
    icon: ShieldCheck,
    description: 'Information Security Management'
  },
  {
    title: 'ISO 45001:2018',
    icon: Award,
    description: 'Occupational Health & Safety'
  },
  {
    title: 'ISO 9001:2015',
    icon: FileCheck,
    description: 'Quality Management System'
  },
  {
    title: 'KSBCB Authorization',
    icon: Scale,
    description: 'Karnataka State Pollution Control Board'
  },
  {
    title: 'R2 Certified',
    icon: Recycle,
    description: 'Responsible Recycling Standard'
  }
];

export default function Certifications() {
  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
              Our
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Certifications</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Committed to maintaining the highest standards in e-waste management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-green-100 hover:border-green-300 p-8"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="h-12 w-12 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>

              <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
