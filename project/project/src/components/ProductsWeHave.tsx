import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Reeown',
    description: 'Refurbished electronics marketplace for buying, selling, repair, and recycling.'
  },
  {
    name: 'Eco Market Place',
    description: 'Marketplace for post-consumer recycled products, machinery, and software.'
  },
  {
    name: 'Eco Trade',
    description: 'Secure bidding platform for e-waste and recyclable waste materials.'
  },
  {
    name: 'Eco Captain',
    description: 'Community collection network to drive local e-waste recycling programs.'
  },
  {
    name: 'Eco Trace',
    description: 'Product lifecycle tracking solution for sustainability and responsible returns.'
  }
];

export default function ProductsWeHave() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
            Products We Have
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Built to support circular economy goals across communities and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-green-100 bg-gradient-to-br from-white to-green-50 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
