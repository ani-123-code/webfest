import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logoLight from '../assets/logo_light.png'
import EcodisposeLight from '../assets/Ecodispose_light.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Corporate', href: '/corporate' },
  { name: 'Individual', href: '/individual' },
  { name: 'EPR Policy', href: '/epr-policy' },
  { name: 'Products', href: '/products' },
];

const dropdownItems = [
  { name: 'About', href: '/about' },
  { name: 'Facility/Collaboration', href: '/collaboration' },
  { name: 'Stories', href: '/stories' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="flex items-center justify-between p-6 xl:px-8" aria-label="Global">
        <div className="flex xl:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img className="h-10 " src={logoLight} alt="" />
            <img className="h-5 " src={EcodisposeLight} alt="" />
          </Link>
        </div>
        <div className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden xl:flex lg:gap-x-12 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 ${
                location.pathname === item.href
                  ? item.name === 'Products' 
                    ? 'text-green-600 bg-green-50 px-3 py-1.5 rounded-lg font-bold'
                    : 'text-green-600'
                  : 'text-gray-900 hover:text-green-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={`flex items-center gap-1 text-sm font-semibold leading-6 ${
                location.pathname === '/about' || location.pathname === '/collaboration' || location.pathname === '/stories'
                  ? 'text-green-600'
                  : 'text-gray-900 hover:text-green-600'
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              More
              <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="py-1">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 text-sm ${
                        location.pathname === item.href
                          ? 'bg-green-50 text-green-600'
                          : 'text-gray-900 hover:bg-gray-50 hover:text-green-600'
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden xl:flex xl:flex-1 xl:justify-end items-center gap-4">
          <a
            href="https://wa.me/918861009443"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 mx-2 rounded-full bg-green-50 text-green-600 font-medium hover:bg-green-100 transition-all"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span>Contact Us</span>
          </a>
          <a
            href="#request-pickup"
            className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-full font-semibold shadow-sm hover:bg-green-500 transition-all hover:shadow-md active:shadow-sm"
          >
            <span className='flex items-center justify-center'>Request Pickup</span>
          </a>
          <a
            href="mailto:team@eco-dispose.com?subject=Request for Quote"
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-full font-semibold shadow-sm hover:bg-emerald-500 transition-all hover:shadow-md active:shadow-sm"
          >
            <span className='flex items-center justify-center'>Request for Quote</span>
          </a>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay to block background */}
          <div 
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu Panel - Responsive height */}
          <div className="fixed inset-x-0 top-0 z-50 overflow-y-auto">
            <div className="flex">
              <div className="relative flex w-full flex-col bg-white max-h ">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <img className="h-10" src={logoLight} alt="" />
                    <img className="h-5" src={EcodisposeLight} alt="" />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation Links - Responsive height */}
                <nav className="flex-1 px-0 py-4  overflow-y-auto">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block w-full px-6 py-3 sm:py-2 text-base sm:text-sm font-semibold border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        location.pathname === item.href 
                          ? item.name === 'Products'
                            ? 'text-green-600 bg-green-100 border-l-4 border-l-green-600 font-bold'
                            : 'text-green-600 bg-green-50 border-l-4 border-l-green-600'
                          : 'text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Dropdown */}
                  <div className="border-b border-gray-100">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full px-6 py-3 sm:py-2 text-base sm:text-sm font-semibold hover:bg-gray-50 transition-colors ${
                        location.pathname === '/about' || location.pathname === '/collaboration' || location.pathname === '/stories'
                          ? 'text-green-600 bg-green-50 border-l-4 border-l-green-600' 
                          : 'text-gray-900'
                      }`}
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    >
                      More
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {mobileDropdownOpen && (
                      <div className="bg-gray-50">
                        {dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className={`block px-10 py-2 text-sm font-medium border-b border-gray-100 hover:bg-gray-100 transition-colors ${
                              location.pathname === item.href
                                ? 'text-green-600 bg-green-50 border-l-4 border-l-green-600'
                                : 'text-gray-700'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Contact Button */}
                  <div className="px-6 py-3 sm:py-2 border-b border-gray-100">
                    <a
                      href="tel:88610094433"
                      className="group flex items-center gap-3 w-full px-4 py-2 sm:py-1.5 rounded-lg bg-green-50 text-green-600 font-medium hover:bg-green-100 transition-all"
                    >
                      <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                      <span>88610 09443</span>
                    </a>
                  </div>

                  {/* Request Pickup Button */}
                  <div className="px-6 py-3 sm:py-2 border-b border-gray-100">
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      href="#request-pickup"
                      className="block w-full text-center bg-green-600 px-4 py-2 sm:py-1.5 rounded-lg text-base sm:text-sm font-semibold text-white hover:bg-green-500 transition-all mb-2"
                    >
                      Request Pickup
                    </a>
                  </div>
                  
                  {/* Request for Quote Button */}
                  <div className="px-6 py-3 sm:py-2">
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      href="mailto:team@eco-dispose.com?subject=Request for Quote"
                      className="block w-full text-center bg-emerald-600 px-4 py-2 sm:py-1.5 rounded-lg text-base sm:text-sm font-semibold text-white hover:bg-emerald-500 transition-all"
                    >
                      Request for Quote
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}