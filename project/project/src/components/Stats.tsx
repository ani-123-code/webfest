import { Recycle, Award, Building2, Users } from 'lucide-react';

const stats = [
  { name: 'E-Waste Recycled', value: '2000+', unit: 'Tons', icon: Recycle },
  { name: 'Corporate Clients', value: '500+', unit: 'Companies', icon: Building2 },
  { name: 'Individual Customers', value: '10000+', unit: 'Users', icon: Users },
  { name: 'Certifications', value: '15+', unit: 'Awards', icon: Award },
];

export default function Stats() {
  return (
    <div className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Businesses and Individuals Alike
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our impact in numbers
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col bg-white p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  <div className="flex items-center justify-center gap-2">
                    <stat.icon className="h-6 w-6 text-green-600" />
                    <span>{stat.value}</span>
                  </div>
                </dd>
                <dd className="text-xs text-gray-500">{stat.unit}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}