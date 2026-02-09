import { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Gavel, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Zap,
  Building2,
  ShoppingCart,
  Sparkles,
  X,
  ExternalLink
} from 'lucide-react';

// Helper function to get color classes - all using green theme like About page
const getColorClasses = () => {
  return {
    icon: 'text-green-500',
    bg: 'bg-green-600',
    hover: 'hover:bg-green-700',
    stepBg: 'bg-green-100',
    stepText: 'text-green-600',
    bullet: 'text-green-500',
    border: 'border-green-500'
  };
};

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  gradient: string;
  color: string;
  website: string;
  features: string[] | { title: string; description: string }[];
  howItWorks: { step: string; title: string; description: string }[];
  benefits: { title: string; description: string }[];
  industries: string[];
  services?: { title: string; description: string }[];
}

const products: Product[] = [
  {
    id: 'reeown',
    name: 'Reeown',
    tagline: 'Your Trusted Platform for Refurbished and Used Electronics',
    description: `A seamless online marketplace dedicated to buying, selling, repairing, and recycling electronics. We connect sellers with buyers seeking high-quality refurbished devices at unbeatable prices, while championing sustainability through responsible e-waste management. Reeown is your go-to platform for all things electronics—whether you're looking to sell your old gadgets for quick cash, buy premium refurbished devices at a fraction of the cost, get expert repairs, or recycle responsibly. Inspired by the best in the industry like Cashify, we focus on transparency, convenience, and eco-friendliness. Our mission is to extend the life of electronics, reduce e-waste, and make technology accessible to everyone. We also specialize in bulk sales for businesses, retailers, and organizations looking to purchase large quantities of refurbished devices at competitive prices.`,
    icon: Smartphone,
    gradient: 'from-green-600 to-emerald-600',
    color: 'green',
    website: 'https://reeown.eco-dispose.com',
    features: [
      'Live Valuation System',
      'Secure Transactions',
      'Refurbishment Expertise',
      'Eco-Friendly Disposal',
      'Buyer Protections',
      'Bulk Sales Options'
    ],
    howItWorks: [
      { step: '1', title: 'Visit Our Website', description: 'Go to the Reeown website and fill out the simple seller form with details about your device (model, condition, photos)' },
      { step: '2', title: 'We Contact You', description: 'Our team will reach out promptly to discuss your submission, provide a fair valuation, and guide you through the next steps' },
      { step: '3', title: 'Schedule Pickup', description: 'Once agreed, opt for free doorstep collection or drop-off at our partner centers' },
      { step: '4', title: 'Inspection and Payout', description: 'Our experts inspect the device; receive a proper, market-based price and instant payment upon approval' }
    ],
    benefits: [
      { title: 'Financial Savings', description: `Sellers get a fair deal through our expert contact and valuation process, earning up to 70% more than standard trade-ins. Buyers save 30-50% on retail prices for top-tier refurbished gadgets, with even greater discounts on bulk orders` },
      { title: 'Environmental Responsibility', description: `Every transaction helps cut down e-waste—reusing devices reduces the need for new manufacturing and lowers carbon emissions` },
      { title: 'Ultimate Convenience', description: `Easy form submission for sellers, followed by personalized contact; doorstep services and a streamlined website make the process hassle-free, skipping the risks of local classifieds` },
      { title: 'Quality Assurance', description: `All refurbished items undergo multi-point inspections, ensuring reliability and performance` },
      { title: 'Wide Market Reach', description: `Access a vast network of buyers and sellers, plus bulk options for businesses to source refurbished tech efficiently` }
    ],
    services: [
      { title: 'Buy', description: `Explore our premium selection of refurbished electronics, from smartphones and laptops to smartwatches and accessories. Each item is certified, comes with a warranty, and is priced 30-50% below retail. Shop confidently with detailed specs, user reviews, and easy financing options. We also offer bulk purchasing for businesses, with customized quotes and volume discounts` },
      { title: 'Sell', description: `Ready to sell your old devices? Visit our website, fill out the seller form with your device details, and submit. Our team will contact you to provide a proper, market-based price, handle inspections, and arrange free pickup or drop-off. Enjoy instant payouts upon approval. Bulk selling options available for multiple devices` },
      { title: 'Repair', description: `Get your devices fixed by certified experts using genuine parts. Request a live quote based on the issue—whether it's a cracked screen, battery replacement, or software glitches. We offer doorstep repairs where possible, with transparent pricing and quick turnaround times. Bulk repair services for businesses and fleets` },
      { title: 'Recycle', description: `Dispose of e-waste responsibly without any cost. Submit your non-functional devices for a live evaluation; if recyclable, we'll handle the eco-friendly breakdown through our certified partners. Contribute to a greener planet while ensuring data security with our wiping services. Bulk recycling programs for organizations` },
      { title: 'Business', description: `Cater to your company's needs with bulk orders of refurbished electronics, custom repair packages, or large-scale recycling solutions. Ideal for retailers, offices, schools, and non-profits—get competitive pricing on wholesale purchases, dedicated support, and sustainable sourcing for your tech requirements. We specialize in selling in bulk, offering tiered discounts based on volume to help you scale efficiently` }
    ],
    industries: [
      'Consumer Electronics and Retail',
      'IT and Telecommunications',
      'Refurbishing and Recycling Services',
      'E-Waste Management',
      'Education and Non-Profits'
    ]
  },
  {
    id: 'eco-marketplace',
    name: 'Eco Market Place',
    tagline: 'Your Dedicated Marketplace for Post-Consumer Recycled Solutions',
    description: `A specialized online platform connecting buyers and sellers in the recycling sector, offering post-consumer recycled (PCR) products, machinery, and software to promote sustainable sourcing and eco-friendly practices. Eco Market Place is a focused marketplace designed for the recycling industry, where businesses can discover and procure post-consumer recycled materials, advanced machinery, and specialized software. We emphasize sustainability by facilitating access to verified eco-friendly alternatives, helping organizations reduce their environmental footprint while supporting circular economy principles. Our platform bridges suppliers and buyers globally, ensuring reliable transactions and transparent supply chains.`,
    icon: ShoppingCart,
    gradient: 'from-green-700 to-emerald-700',
    color: 'green',
    website: 'https://ecomarketplace.eco-dispose.com/eco-home',
    features: [
      { title: 'Curated Listings', description: `Hand-selected products, machinery, and software from trusted suppliers, complete with detailed descriptions and certifications` },
      { title: 'Search and Filter Tools', description: `Advanced search capabilities to easily find items by category, material type, origin, or specifications` },
      { title: 'Supply Chain Transparency', description: `Full visibility into product origins, recycling processes, and compliance with environmental standards` },
      { title: 'Bulk Purchasing Options', description: `Flexible options for large-volume orders, ideal for scaling operations` },
      { title: 'Educational Resources', description: `Guides, articles, and webinars on recycling best practices and industry trends` },
      { title: 'Integration APIs', description: `Seamless connectivity with your existing systems for inventory management and order tracking` }
    ],
    howItWorks: [
      { step: '1', title: 'Seller Onboarding', description: `Register on the platform, submit product details, certifications, and pricing information for review` },
      { step: '2', title: 'Buyer Search', description: `Explore listings through intuitive browsing or targeted searches for specific PCR items, machinery, or software` },
      { step: '3', title: 'Transaction', description: `Complete secure payments, arrange shipping logistics, and finalize agreements with digital contracts` },
      { step: '4', title: 'Verification', description: `Every listing is thoroughly checked for authenticity and quality to maintain trust and standards` }
    ],
    benefits: [
      { title: 'Cost Efficiency', description: `Access affordable PCR alternatives that support budget-conscious sustainable sourcing` },
      { title: 'Sustainability Boost', description: `Enhance your environmental, social, and governance (ESG) initiatives by incorporating recycled content into your operations` },
      { title: 'Scalability', description: `From small enterprises to large corporations, find tailored solutions to meet varying business needs` },
      { title: 'Global Reach', description: `Connect with a worldwide network of suppliers and buyers, minimizing supply chain risks and fostering international collaboration` }
    ],
    industries: [
      'Packaging Industry',
      'Automotive and Construction',
      'Consumer Goods and Textiles',
      'Beauty and Personal Care',
      'Electronics and Manufacturing'
    ]
  },
  {
    id: 'eco-trade',
    name: 'Eco Trade',
    tagline: 'Secure Bidding Platform for E-Waste and Waste Materials',
    description: `A robust, auction-style marketplace designed for trading e-waste and various waste materials, linking waste generators with buyers to achieve competitive pricing, ethical disposal, and sustainable recycling practices. Eco Trade is a secure online platform that facilitates real-time auctions for e-waste and other waste materials, ensuring safe, transparent, and compliant transactions. By connecting waste generators directly with buyers, we promote fair market values while prioritizing environmental responsibility and regulatory adherence. Our encrypted system safeguards all data and payments, making it a trusted choice for businesses seeking efficient waste management solutions. We cover a wide range of materials, including e-waste, FMCG waste, textiles, plastics, paper, industrial waste, and metals, empowering users to divert waste from landfills into valuable resources.`,
    icon: Gavel,
    gradient: 'from-green-500 to-green-700',
    color: 'green',
    website: 'https://ecotrade.eco-dispose.com/',
    features: [
      { title: 'Real-Time Bidding', description: `Engage in live auctions with instant updates and competitive bidding to secure the best deals` },
      { title: 'Material Categorization', description: `Easily classify and search for waste by type, such as electronics, plastics, metals, or textiles, for precise matching` },
      { title: 'Compliance Tools', description: `Built-in features for regulatory reporting, certifications, and adherence to environmental standards` },
      { title: 'Logistics Integration', description: `Seamless coordination with shipping partners for efficient pickup, transport, and delivery` },
      { title: 'Analytics Dashboard', description: `Gain insights into market trends, bidding history, and performance metrics to inform decisions` },
      { title: 'Secure Escrow', description: `Protected payment system that holds funds until transactions are verified and completed, ensuring trust and security` }
    ],
    howItWorks: [
      { step: '1', title: 'List Waste', description: `Sellers register securely, upload detailed descriptions, photos, quantity, and set starting bids for their materials` },
      { step: '2', title: 'Auction Launch', description: `Configure auction duration, reserve prices, and visibility to attract the right buyers` },
      { step: '3', title: 'Bidding Phase', description: `Buyers participate in real-time bidding; the platform notifies participants of updates, with the highest bid winning at close` },
      { step: '4', title: 'Transaction Closure', description: `Finalize with secure payment release from escrow, arrange logistics for pickup, and generate compliance reports for all parties` }
    ],
    benefits: [
      { title: 'Maximized Value', description: `Auction dynamics drive competitive pricing, often yielding higher returns for sellers compared to traditional fixed-price models` },
      { title: 'Efficiency', description: `Streamline the process of finding buyers or sellers, saving time and resources through our intuitive, secure interface` },
      { title: 'Sustainability', description: `Encourage recycling and reuse of materials like plastics, metals, and e-waste, reducing landfill contributions and supporting circular economies` },
      { title: 'Transparency and Security', description: `Every transaction is auditable, with end-to-end encryption and escrow protection for regulatory compliance and peace of mind` }
    ],
    industries: [
      'Waste Management and Recycling',
      'Electronics and ITAD (IT Asset Disposition)',
      'Manufacturing and Industrial',
      'Government and Energy',
      'Construction and Commodities',
      'FMCG (Fast-Moving Consumer Goods)',
      'Textiles',
      'Plastics',
      'Paper',
      'E-Waste Processing',
      'Metal Scrap and Recovery'
    ]
  },
  {
    id: 'eco-captain',
    name: 'Eco Captain',
    tagline: 'Community E-Waste Collection Network',
    description: `An innovative platform that empowers local communities by designating "Eco Captains" in neighborhoods, societies, or zones to organize and streamline e-waste collection, turning recycling into an accessible, rewarding, and community-driven effort. Eco Captain is a community-focused initiative designed to make e-waste recycling simple and impactful. By appointing verified local leaders as "Eco Captains," we enable residents to coordinate collections, promote participation, and earn rewards. This network fosters environmental responsibility at the grassroots level, ensuring that electronic waste is handled ethically and efficiently. Integrated with our partner services like Eco Dispose for pickups, Eco Captain builds sustainable habits while rewarding contributors for their efforts.`,
    icon: Users,
    gradient: 'from-emerald-600 to-green-600',
    color: 'green',
    website: 'https://ecocaptian.eco-dispose.com/',
    features: [
      { title: 'Captain Dashboard', description: `A user-friendly interface for captains to track collections, manage community members, and monitor progress` },
      { title: 'Community Engagement Tools', description: `Resources like messaging, event planners, and educational content to boost participation and awareness` },
      { title: 'Commission System', description: `Fair reward distribution based on collected waste, incentivizing captains and participants` },
      { title: 'Reporting', description: `Detailed analytics and reports on collection volumes, recycling outcomes, and environmental impact` },
      { title: 'Integration with Rewards', description: `Seamless connections to loyalty programs, vouchers, or cash incentives for sustained involvement` }
    ],
    howItWorks: [
      { step: '1', title: 'Captain Signup', description: `Interested residents apply through our platform, get verified, and become zone leaders to rally their community` },
      { step: '2', title: 'Waste Logging', description: `Community members log e-waste details via our intuitive app or website, building up collections over time` },
      { step: '3', title: 'Monthly Collection', description: `After 30 days of accumulation, our partner Eco Dispose schedules and handles bulk pickups for efficiency` },
      { step: '4', title: 'Processing and Payout', description: `Collected waste is responsibly recycled; commissions and rewards are distributed to captains and contributors promptly` }
    ],
    benefits: [
      { title: 'Incentivized Participation', description: `Attractive rewards and commissions motivate ongoing recycling, turning eco-friendly actions into tangible gains` },
      { title: 'Reduced Logistics Costs', description: `By consolidating collections into monthly bulk pickups, we minimize transportation expenses and environmental footprint` },
      { title: 'Community Building', description: `Strengthens local bonds through shared goals, events, and education, raising awareness about sustainability` },
      { title: 'Scalable Model', description: `Easily adaptable from urban neighborhoods to rural areas, allowing for widespread implementation and growth` }
    ],
    industries: [
      'Residential and Local Communities',
      'Education and Schools',
      'Non-Profits and NGOs',
      'Municipal and Government',
      'Events and Zero-Waste Initiatives'
    ]
  },
  {
    id: 'eco-trace',
    name: 'Eco Trace',
    tagline: 'Product Lifecycle Tracking for Sustainability',
    description: `A comprehensive app-based platform that enables end-to-end tracking of product lifecycles, from manufacturing to consumer usage and responsible return, fostering sustainability, accountability, and resource recovery for brands and users alike. Eco Trace is an innovative solution designed to monitor the entire journey of products, promoting eco-conscious practices across industries. Brands can customize the platform by simply connecting via our API to track their products seamlessly. Utilizing QR codes, RFID tags, and integrable kiosks or systems, it ensures precise tracking from production to end-of-life. Consumers activate products at purchase, log usage, and return them for rewards, while brands recover valuable materials, reduce waste, and save costs through efficient recycling and reuse. This customizable system empowers brands to enhance their sustainability efforts without complex overhauls.`,
    icon: MapPin,
    gradient: 'from-green-600 to-emerald-500',
    color: 'green',
    website: 'https://ecotrace.eco-dispose.com',
    features: [
      { title: 'Product Registry', description: `Secure database for brands to upload and manage product details, including materials and lifecycle data` },
      { title: 'User Scanning', description: `Easy activation via QR codes or RFID tags for consumers to link products to their app accounts` },
      { title: 'Lifecycle Monitoring', description: `Real-time tracking of usage, repairs, and status updates throughout the product's life` },
      { title: 'Return Incentives', description: `Reward systems for consumers returning products, with seamless integration for credits or refunds` },
      { title: 'Analytics', description: `In-depth insights into product performance, usage patterns, and sustainability metrics for data-driven decisions` },
      { title: 'Blockchain Security', description: `Tamper-proof records ensuring transparency and trust in all transactions and data` },
      { title: 'API Integration and Customization', description: `Brands connect effortlessly via API for tailored tracking; add kiosks or external systems for enhanced functionality` }
    ],
    howItWorks: [
      { step: '1', title: 'Brand Upload and Customization', description: `Manufacturers register products in the registry, input lifecycle data, and connect via API for custom tracking. Integrate QR codes, RFID, kiosks, or other systems as needed` },
      { step: '2', title: 'Consumer Activation', description: `At purchase, users scan the QR code or RFID tag using the app to activate and link the product to their profile` },
      { step: '3', title: 'Usage Tracking', description: `Throughout ownership, consumers log events like usage milestones or repairs; the platform monitors progress in real-time` },
      { step: '4', title: 'Return Process', description: `When ready, users return the product to designated stores, brands, or kiosks for evaluation. Materials are recovered for recycling, and consumers receive incentives like credits` },
      { step: '5', title: 'Material Recovery and Closure', description: `Brands reclaim reusable materials, saving costs on new resources, while the platform updates records for full end-to-end accountability` }
    ],
    benefits: [
      { title: 'Consumer Rewards', description: `Users earn credits or incentives for responsible returns and sustainable behaviors, encouraging participation` },
      { title: 'Brand Loyalty and Customization', description: `Boosts reputation through eco-friendly features; easy API integration allows brands to tailor the system to their needs` },
      { title: 'Waste Reduction and Material Recovery', description: `Promotes returns over disposal, enabling brands to retrieve valuable materials and reduce manufacturing expenses` },
      { title: 'Data-Driven Sustainability', description: `Provides actionable analytics to optimize product designs for durability and efficiency` },
      { title: 'Cost Savings', description: `By recovering materials and streamlining lifecycles, brands minimize resource costs and enhance supply chain resilience` }
    ],
    industries: [
      'Manufacturing and Electronics',
      'Retail and Fashion',
      'Packaging and Consumer Goods',
      'Automotive',
      'Waste Management'
    ]
  }
];

// Product Modal Component
function ProductModal({ product, isOpen, onClose, setShowComingSoon }: { product: Product | null; isOpen: boolean; onClose: () => void; setShowComingSoon: (show: boolean) => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const Icon = product.icon;
  const colorClasses = getColorClasses();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`bg-gradient-to-br ${product.gradient} p-8 text-white relative overflow-hidden`}>
          {/* Close Button - Top Right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          <div className="relative z-10">
            <Icon className="h-16 w-16 mb-4" />
            <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
            <p className="text-white/90 text-lg">{product.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">About {product.name}</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className={`h-6 w-6 ${colorClasses.icon}`} />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, idx) => {
                const featureTitle = typeof feature === 'string' ? feature : feature.title;
                const featureDescription = typeof feature === 'string' ? null : feature.description;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-5 w-5 mt-0.5 ${colorClasses.icon} flex-shrink-0`} />
                    <div className="flex-1">
                      <span className="text-gray-700 font-medium">{featureTitle}</span>
                      {featureDescription && (
                        <p className="text-gray-600 text-sm mt-1">{featureDescription}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className={`h-6 w-6 ${colorClasses.icon}`} />
              How It Works
            </h3>
            <div className="space-y-4">
              {product.howItWorks.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${colorClasses.stepBg} ${colorClasses.stepText} flex items-center justify-center font-bold`}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className={`h-6 w-6 ${colorClasses.icon}`} />
              Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          {product.services && product.services.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShoppingCart className={`h-6 w-6 ${colorClasses.icon}`} />
                Choose from Our Comprehensive Range of Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.services.map((service, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-green-100 hover:border-green-300 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">{service.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Industries */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className={`h-6 w-6 ${colorClasses.icon}`} />
              Industries We Serve
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.industries.map((industry, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className={`${colorClasses.bullet} mt-1.5`}>•</span>
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
            {product.id === 'reeown' || product.id === 'eco-marketplace' || product.id === 'eco-trade' || product.id === 'eco-captain' ? (
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-6 py-3 ${colorClasses.bg} text-white rounded-lg font-semibold ${colorClasses.hover} transition-colors flex items-center justify-center gap-2 cursor-pointer`}
              >
                Visit Website
                <ExternalLink className="h-5 w-5" />
              </a>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowComingSoon(true);
                }}
                className={`flex-1 px-6 py-3 ${colorClasses.bg} text-white rounded-lg font-semibold ${colorClasses.hover} transition-colors flex items-center justify-center gap-2 cursor-pointer`}
              >
                Visit Website
                <ExternalLink className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2">
                Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Products</span>
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for sustainable waste management, circular economy, and environmental responsibility. 
              Empowering businesses and communities to create a greener future.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              const colorClasses = getColorClasses();
              return (
                <div
                  key={product.id}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100 hover:border-green-300 group"
                >
                  <div className="bg-gradient-to-br from-green-950 via-green-900 to-black p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-white/90 text-sm">{product.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, idx) => {
                        const featureTitle = typeof feature === 'string' ? feature : feature.title;
                        return (
                          <div key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                            <CheckCircle2 className={`h-4 w-4 mr-2 ${colorClasses.icon} flex-shrink-0`} />
                            <span>{featureTitle}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsModalOpen(true);
                        }}
                        className={`w-full px-4 py-2.5 ${colorClasses.bg} text-white rounded-lg font-semibold ${colorClasses.hover} transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      {product.id === 'reeown' || product.id === 'eco-marketplace' || product.id === 'eco-trade' || product.id === 'eco-captain' ? (
                        <a
                          href={product.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full px-4 py-2.5 border-2 ${colorClasses.border} ${colorClasses.icon} rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2 cursor-pointer`}
                        >
                          Visit Website
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setShowComingSoon(true);
                          }}
                          className={`w-full px-4 py-2.5 border-2 ${colorClasses.border} ${colorClasses.icon} rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2 cursor-pointer`}
                        >
                          Visit Website
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-500/30 via-emerald-500/80 to-green-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Request for Demo Button */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto text-center">
          <a
            href="mailto:team@eco-dispose.com?subject=Request Demo - Product Inquiry"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg hover:shadow-xl"
          >
            Request for Demo
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        setShowComingSoon={setShowComingSoon}
      />

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowComingSoon(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're working hard to bring you an amazing experience. Stay tuned!
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Ready to Transform Your Waste Management?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join thousands of businesses and communities already making a difference with our sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918861009443"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="mailto:team@eco-dispose.com?subject=Request Demo - Product Inquiry"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">70%+</div>
              <div className="text-gray-600 text-sm">Higher Returns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30-50%</div>
              <div className="text-gray-600 text-sm">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Certified Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}