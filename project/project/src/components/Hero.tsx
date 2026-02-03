import { ArrowRight, Building2, Recycle, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Responsible E-Waste</span>
          <span className="block text-green-600">Management Solutions</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Secure, sustainable, and certified e-waste recycling services for businesses and individuals. Transform your electronic waste into a greener future.
        </p>
        <div className="mt-10 flex gap-x-6 justify-center">
          <a href="#corporate" className="rounded-md bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 flex items-center gap-2">
            <Building2 size={20} />
            Corporate Solutions
          </a>
          <a href="#individual" className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-green-600 shadow-sm ring-1 ring-inset ring-green-200 hover:ring-green-300 flex items-center gap-2">
            <Users size={20} />
            Individual Pickup
          </a>
        </div>
      </div>
    </div>
  );
}