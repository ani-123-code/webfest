import { Battery, Smartphone, Laptop, Cpu, MonitorCheck, Info } from 'lucide-react';

const guidelines = [
  {
    title: 'Identify E-Waste',
    description: 'Common items include old phones, laptops, batteries, chargers, and electronic accessories.',
    icon: Info,
    items: ['Computers & Laptops', 'Mobile Phones', 'Tablets', 'Printers', 'Electronic Toys']
  },
  {
    title: 'Safe Storage',
    description: 'Store e-waste in a dry place, away from direct sunlight and water exposure.',
    icon: MonitorCheck,
    items: ['Use original packaging', 'Keep in dry area', 'Avoid stacking heavy items', 'Separate batteries']
  },
  {
    title: 'Data Security',
    description: 'Protect your personal information before disposal.',
    icon: Laptop,
    items: ['Back up important data', 'Factory reset devices', 'Remove memory cards', 'Secure wipe drives']
  },
  {
    title: 'Battery Handling',
    description: 'Special care for batteries to prevent environmental hazards.',
    icon: Battery,
    items: ['Keep in cool place', 'Avoid metal contact', 'Use battery cases', 'Never puncture']
  }
];

export default function HouseholdGuide() {
  return (
    <div className="bg-white py-24" id="household-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Household E-Waste Guide
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Learn how to properly handle electronic waste in your home
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {guidelines.map((guide) => (
            <div
              key={guide.title}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                    <guide.icon className="h-6 w-6" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                  <p className="mt-2 text-gray-500">{guide.description}</p>
                </div>
              </div>
              
              <ul className="mt-6 space-y-3">
                {guide.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900">Ready to dispose of your e-waste?</h3>
              <p className="mt-2 text-gray-600">
                Schedule a pickup and we'll ensure your electronics are recycled responsibly.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#request-pickup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                Schedule Pickup Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}