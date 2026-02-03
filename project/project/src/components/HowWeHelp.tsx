import {
  Leaf,
  Recycle,
  Users,
  Globe,
  ArrowRight
} from 'lucide-react';

const impacts = [
  {
    title: "Environmental Impact",
    description:
      "We've prevented over 1000 tons of e-waste from reaching landfills, reducing toxic contamination and preserving natural resources.",
    icon: Leaf,
    stats: "1000+ tons diverted"
  },
  {
    title: "Resource Recovery",
    description:
      "Our advanced recycling processes recover precious metals and materials, contributing to the circular economy.",
    icon: Recycle,
    stats: "85% recovery rate"
  },
  {
    title: "Community Engagement",
    description:
      "Regular awareness programs and collection drives in schools, colleges, and residential communities.",
    icon: Users,
    stats: "100+ programs conducted"
  },
  {
    title: "Global Standards",
    description:
      "Following international best practices in e-waste management and environmental protection.",
    icon: Globe,
    stats: "ISO 14001 certified"
  }
];

export default function HowWeHelp() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-green-950 tracking-tight mb-2">
            Our <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Impact</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Making a measurable difference through sustainable e-waste management
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div
              key={impact.title}
              className="group bg-green-50 border border-green-200 rounded-2xl p-8 hover:border-green-300 "
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-green-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <impact.icon className="w-6 h-6 text-green-800" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-green-950 mb-1">
                    {impact.title}
                  </h3>
                  <div className="text-sm font-semibold text-green-700">
                    {impact.stats}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {impact.description}
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-500">
                  Impact #{index + 1}
                </div>
                <div className="w-16 h-1 bg-green-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-green-500 transition-all duration-500 group-hover:w-full"
                    style={{ width: `${((index + 1) / 4) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden bg-green-950 rounded-3xl p-12 text-center">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Together, we can create a sustainable future through responsible e-waste management and community action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#request-pickup"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-green-950 rounded-xl font-semibold hover:bg-green-100 transition-colors group"
              >
                Schedule a Free Pickup
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="inline-flex items-center px-8 py-4 border border-gray-400 text-white rounded-xl font-semibold hover:border-gray-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-green-100 rounded-2xl">
            <div className="text-4xl font-black text-green-950 mb-2">2M+</div>
            <div className="text-green-700">Devices Recycled</div>
          </div>
          <div className="text-center p-6 bg-green-100 rounded-2xl">
            <div className="text-4xl font-black text-green-950 mb-2">50K+</div>
            <div className="text-green-700">CO₂ Saved (kg)</div>
          </div>
          <div className="text-center p-6 bg-green-100 rounded-2xl">
            <div className="text-4xl font-black text-green-950 mb-2">100%</div>
            <div className="text-green-700">Data Destruction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
