import { Link } from 'react-router-dom';
import type { Service } from '../data/services';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${service.id}`}
      className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 pb-14 border border-green-300 shadow-2xl shadow-green-500/20 hover:bg-white/90 hover:backdrop-blur-sm hover:border-green-100 transition-all duration-300 block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background that fades out on hover */}
      <div className="absolute inset-0 bg-white/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white ">
            <service.icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-green-700 group-hover:text-gray-900 transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-700 group-hover:text-gray-600 transition-colors duration-300 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        {service.features && (
          <div className="mt-4 space-y-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center text-sm text-gray-500 group-hover:text-gray-500 transition-colors duration-300"
              >
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View Details CTA - Positioned Bottom Right */}
      <div className="absolute bottom-5 right-6 z-10 flex items-center gap-1 text-sm font-medium text-green-600 group-hover:text-green-800 transition-colors">
        <span>View Details</span>
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      {/* Bottom accent line */}
      <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-500 origin-center rounded-full" />

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/20 to-transparent rounded-tr-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-green-600/10 to-transparent rounded-bl-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
    </Link>
  );
}
