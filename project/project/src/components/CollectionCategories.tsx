import { Cpu, Zap, Battery, Car, Recycle } from 'lucide-react';

const categories = [
  {
    title: 'Electronics',
    icon: Cpu,
    description: 'Computers, phones, tablets, and other electronic devices'
  },
  {
    title: 'Electricals',
    icon: Zap,
    description: 'Appliances, motors, and electrical equipment'
  },
  {
    title: 'Battery',
    icon: Battery,
    description: 'All types of batteries and power cells'
  },
  {
    title: 'Tyre & Oil',
    icon: Car,
    description: 'Vehicle tires and used oils'
  },
  {
    title: 'Plastics',
    icon: Recycle,
    description: 'Recyclable plastics and polymer materials'
  }
];

export default function CollectionCategories() {
  return (
    <section className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-green-950 tracking-tight mb-2">
            What <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">We Collect</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A wide range of items for safe and responsible recycling
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
          {categories.map((category) => (
            <div key={category.title} className="group flex flex-col items-center transition-all">
              <div className="bg-green-100 rounded-2xl p-4 inline-flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <category.icon className="h-7 w-7 text-green-700" />
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-1">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-[200px]">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
