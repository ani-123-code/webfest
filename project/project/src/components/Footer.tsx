import { Mail, Phone, MapPin, Linkedin, Handshake, Facebook, Instagram, Recycle, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import ecodisposeLogo from '../assets/footer-logos/logo_full_light.png'
import grkmsLogo from '../assets/footer-logos/GRKMS - LOGO  - vertical.png'
import NewsletterSubscription from './NewsletterSubscription';
import { API_ENDPOINTS } from '../config/api';

export default function Footer() {
  const [input,setInput]=useState("")
  const [message, setMessage] = useState('');
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle subscription logic here
    // alert('Thank you for subscribing to our newsletter!');
    const email=input
    try {
      const response= await axios.post(API_ENDPOINTS.ADD_SUBSCRIBERS, {email})
      setMessage(response.data.message)
      setInput("");
      setTimeout(()=>{
        setMessage("");
      },3000)
      
    } catch (error) {
      
    }
  };
  return (
    <footer className="bg-gray-900 text-white">

      {/* Collaboration Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/20 text-green-400 text-sm">
              <Handshake className="h-4 w-4" />
              Strategic Partnership
            </div>
            <h3 className="text-2xl font-bold mt-4">In Collaboration With</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* EcoDispose Logo */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <img
                  src={ecodisposeLogo}
                  alt="EcoDispose"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <p className="mt-4 text-lg font-semibold">EcoDispose</p>
              <p className="text-sm text-gray-400">E-Waste Management Solutions</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gray-700"></div>
              <Handshake className="h-8 w-8 text-green-500" />
              <div className="w-16 h-px bg-gray-700"></div>
            </div>

            {/* GRKMS Logo */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-center justify-center">
                <img 
                  src={grkmsLogo} 
                  alt="GRKMS Logo" 
                  className="h-32 object-contain"
                />
              </div>
              <p className="mt-4 text-lg font-semibold">GRKMS</p>
              <p className="text-sm text-gray-400">Recycling Technology Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterSubscription />
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>team@eco-dispose.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>88610 09443</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1" />
                <span>B 501 , Definer Kingdom, Mandur post , Bomenahalli,<br />Bangalore - 560049, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/corporate" className="hover:text-white transition-colors">Corporate</Link>
              </li>
              <li>
                <Link to="/individual" className="hover:text-white transition-colors">Individual</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-white transition-colors">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ISO 14001</li>
              <li>ISO 27001:2022</li>
              <li>ISO 45001</li>
              <li>ISO 9001</li>
              <li>KSBCB AUTORISATION CERTIFICATE</li>
              <li>R2 CERTIFIED </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574007071429" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/Eco_Dispose" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/clenrgy-eco-dispose-india-llp" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/clenrgy.eco.dispose" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@EcoDispose" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 EcoDispose. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}