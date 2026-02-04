import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden" id="services">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-600 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced styling */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 relative">
              Our 
              <span className="bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent"> Services</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Comprehensive e-waste management solutions for businesses and individuals
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
         {services.map((service, index) => (
  <ServiceCard key={service.id} service={service} index={index} />
))}
        </div>

        
      </div>
    </div>
  );
}