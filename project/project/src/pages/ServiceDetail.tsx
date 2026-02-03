import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import RequestPickup from '../components/RequestPickup';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Service not found</h2>
          <Link to="/" className="mt-4 text-green-600 hover:text-green-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="rounded-lg inline-flex p-3 bg-green-100 text-green-600">
              <service.icon className="h-8 w-8" />
            </span>
            <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
              {service.type === 'b2b' ? 'Business' : service.type === 'b2c' ? 'Individual' : 'All'}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {service.fullDescription}
          </p>
        </div>
      </div>

      {/* Benefits & Features */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={step.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-green-600 font-bold text-lg mb-2">Step {index + 1}</div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Request Pickup Section */}
      <RequestPickup />
    </div>
  );
}