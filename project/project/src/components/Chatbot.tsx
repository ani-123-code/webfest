import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, MessageSquare, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  showWhatsApp?: boolean;
  showPickup?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your e-waste assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSchedulePickup = () => {
    // Navigate to the pickup request section
    window.location.href = '/#request-pickup';
    // Close the chatbot after navigation
    setIsOpen(false);
  };

  // Enhanced keyword-based responses with comprehensive content
 const getBotResponse = (userMessage: string): { text: string; showWhatsApp?: boolean; showPickup?: boolean } => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return { 
        text: "Hello! I'm EcoDispose Assistant. I can help you with:<br><br>" +
              "• Household e-waste disposal<br>" +
              "• Enterprise e-waste solutions<br>" +
              "• EPR compliance<br>" +
              "• Recycling guidelines<br><br>" +
              "What would you like to know about?"
      };
    }
    
    // Pickup related - HIGHLIGHTED
    if (message.includes('pickup') || message.includes('collect') || message.includes('schedule') || message.includes('doorstep')) {
      return { 
        text: "<strong>🚛 DOORSTEP PICKUP SERVICE</strong><br><br>" +
              "We offer convenient household e-waste collection:<br><br>" +
              "1️⃣ <strong>Schedule Pickup</strong> - Book online at your convenience<br>" +
              "2️⃣ <strong>Package Items</strong> - Prepare your e-waste safely<br>" +
              "3️⃣ <strong>Doorstep Collection</strong> - We come to your location<br>" +
              "4️⃣ <strong>Get Certificate</strong> - Receive disposal documentation<br><br>" +
              "✅ FREE for most items<br>" +
              "✅ Certified data destruction<br>" +
              "✅ Environmentally responsible recycling",
        showPickup: true
      };
    }
    
    // What items accepted
    if (message.includes('items') || message.includes('accept') || message.includes('dispose') || message.includes('electronic')) {
      return { 
        text: "**We Accept These Categories:**\n\n" +
              "📱 **Electronics**\n" +
              "• Smartphones • Laptops • Tablets\n" +
              "• Gaming Consoles • Digital Cameras\n\n" +
              "🏠 **Electricals**\n" +
              "• Microwaves • ACs • Washing Machines\n" +
              "• Refrigerators • Small Appliances\n\n" +
              "🔋 **Batteries & Power**\n" +
              "• Lithium Batteries • Alkaline Batteries\n" +
              "• Power Banks • UPS Systems\n\n" +
              "🚗 **Automotive**\n" +
              "• Used Tires • Motor Oil • Car Batteries\n\n" +
              "♻️ **Plastics**\n" +
              "• Electronic Casings • Printer Cartridges\n\n" +
              "🏭 **Industrial**\n" +
              "• Industrial Equipment • Heavy Machinery\n\n" +
              "What specific items do you need to dispose of?"
      };
    }
    
    // Enterprise/Corporate solutions
    if (message.includes('enterprise') || message.includes('corporate') || message.includes('business') || message.includes('company') || message.includes('bulk')) {
      return { 
        text: "**Enterprise E-Waste Solutions**\n\n" +
              "Comprehensive e-waste management tailored for businesses:\n\n" +
              "🔹 **Customized Solutions**\n" +
              "Tailored programs for your organization's needs\n\n" +
              "🔹 **Compliance Management**\n" +
              "Full compliance with environmental regulations\n\n" +
              "🔹 **Asset Management**\n" +
              "Tracking and reporting of disposed assets\n\n" +
              "🔹 **Global Standards**\n" +
              "Following international best practices\n\n" +
              "**Industries We Serve:**\n" +
              "• IT & Technology (Data Centers, Telecom)\n" +
              "• Corporate & Finance (Banks, Insurance)\n" +
              "• Education & Healthcare (Hospitals, Universities)\n\n" +
              "**Our Process:**\n" +
              "Assessment → Collection → Transport → Processing → Reporting"
      };
    }
    
    // EPR related
    if (message.includes('epr') || message.includes('producer') || message.includes('responsibility') || message.includes('compliance')) {
      return { 
        text: "**EPR Policy Framework**\n\n" +
              "Extended Producer Responsibility (EPR) holds producers accountable for product end-of-life management.\n\n" +
              "**Policy Evolution:**\n" +
              "• 2011: E-Waste Management Rules introduced\n" +
              "• 2016: Enhanced framework with stricter compliance\n" +
              "• 2022: Revised rules with improved EPR framework\n" +
              "• 2024: Latest amendments for flexibility\n\n" +
              "**EPR Benefits:**\n" +
              "• Financial incentives for sustainable design\n" +
              "• Material efficiency and product durability\n" +
              "• Domestic recycling infrastructure\n" +
              "• Environmental protection\n\n" +
              "We provide full EPR certification and compliance support."
      };
    }
    
    // Data security
    if (message.includes('data') || message.includes('security') || message.includes('destruction') || message.includes('wipe')) {
      return { 
        text: "**Data Security Assurance**\n\n" +
              "We provide certified data destruction services:\n\n" +
              "🔒 **Military-grade wiping** for all storage devices\n" +
              "💾 **Physical destruction** of hard drives when needed\n" +
              "📹 **Video documentation** available\n" +
              "📄 **Certificates of destruction** provided\n\n" +
              "**Before disposal:**\n" +
              "1. Back up important data\n" +
              "2. Perform factory reset\n" +
              "3. Remove SIM/memory cards\n" +
              "4. Log out of all accounts"
      };
    }
    
    // 6 R's of recycling
    if (message.includes('6r') || message.includes('refuse') || message.includes('rethink') || message.includes('reduce') || message.includes('repair') || message.includes('reuse') || message.includes('recycle')) {
      return { 
        text: "**The 6 R's of Recycling**\n\n" +
              "♻️ **Refuse** - Say no to unnecessary electronics\n" +
              "💡 **Rethink** - Consider environmental impact before buying\n" +
              "📉 **Reduce** - Choose durable, long-lasting products\n" +
              "🔧 **Repair** - Fix electronics to extend lifespan\n" +
              "🔄 **Reuse** - Donate or repurpose electronics\n" +
              "♻️ **Recycle** - Proper disposal through certified programs\n\n" +
              "Following these principles helps minimize e-waste."
      };
    }
    
    // Storage and handling
    if (message.includes('storage') || message.includes('handle') || message.includes('safe') || message.includes('battery')) {
      return { 
        text: "**Safe E-Waste Storage Guidelines**\n\n" +
              "📦 **Packaging**\n" +
              "• Use original boxes when possible\n" +
              "• Avoid stacking heavy items\n" +
              "• Label containers clearly\n\n" +
              "🏠 **Location**\n" +
              "• Keep in dry area\n" +
              "• Away from children\n" +
              "• Don't store long-term\n\n" +
              "🔋 **Battery Safety**\n" +
              "• Store in cool place\n" +
              "• Insulate terminals\n" +
              "• Never puncture batteries\n" +
              "• Recycle swollen batteries immediately"
      };
    }
    
    // Services
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return { 
        text: "**Our Comprehensive Services**\n\n" +
              "🏢 **Corporate E-Waste Management**\n" +
              "Bulk disposal with IT asset tracking\n\n" +
              "🏠 **Home Pickup Service**\n" +
              "Doorstep collection for individuals\n\n" +
              "🔐 **Data Security**\n" +
              "Certified destruction with documentation\n\n" +
              "📜 **Environmental Compliance**\n" +
              "Full regulatory compliance\n\n" +
              "🌱 **Green Initiatives**\n" +
              "Sustainability programs and workshops\n\n" +
              "👨‍👩‍👧‍👦 **Community Programs**\n" +
              "Collection drives and education\n\n" +
              "We've recycled 2M+ devices with 100% data security!"
      };
    }
    
    // Impact and statistics
    if (message.includes('impact') || message.includes('environment') || message.includes('statistics')) {
      return { 
        text: "**Our Environmental Impact**\n\n" +
              "🌍 1000+ tons diverted from landfills\n" +
              "💎 85% material recovery rate\n" +
              "🏫 100+ community programs conducted\n" +
              "🏆 ISO 14001 certified operations\n\n" +
              "**Key Statistics:**\n" +
              "• 2M+ devices recycled\n" +
              "• 50K+ kg CO₂ saved\n" +
              "• 100% data destruction guarantee\n\n" +
              "We're committed to measurable environmental benefits."
      };
    }
    
    // Certifications
    if (message.includes('certification') || message.includes('iso') || message.includes('certified')) {
      return { 
        text: "**Our Certifications**\n\n" +
              "✅ ISO 14001 - Environmental Management\n" +
              "✅ ISO 27001:2022 - Information Security\n" +
              "✅ ISO 45001 - Occupational Health & Safety\n" +
              "✅ ISO 9001 - Quality Management\n" +
              "✅ KSBCB Authorization Certificate\n" +
              "✅ R2 Certified - Responsible Recycling\n\n" +
              "These certifications ensure we meet the highest standards in e-waste management."
      };
    }
    
    // About company
    if (message.includes('about') || message.includes('company') || message.includes('ecodispose')) {
      return { 
        text: "**About EcoDispose**\n\n" +
              "Pioneering sustainable e-waste management solutions.\n\n" +
              "**Our Mission:**\n" +
              "Revolutionize e-waste management through innovative solutions that protect our environment.\n\n" +
              "**Our Vision:**\n" +
              "Lead India's e-waste transformation with new environmental standards.\n\n" +
              "**Our Values:**\n" +
              "• Sustainability\n" +
              "• Excellence\n" +
              "• Community\n" +
              "• Innovation\n\n" +
              "**Leadership Team:**\n" +
              "• Aniketh Vadthya (Founder & CEO)\n" +
              "• Alok Kumar (CBO)\n" +
              "• Ramana Kumar Musunuru (CSO)\n" +
              "• Mr. Govindaraju (MD)"
      };
    }
    
    // Community programs
    if (message.includes('community') || message.includes('education') || message.includes('captain') || message.includes('program')) {
      return { 
        text: "**Community Impact Programs**\n\n" +
              "Join our mission to create a sustainable future!\n\n" +
              "👨‍🏫 **School Education Program**\n" +
              "Interactive e-waste workshops for students\n\n" +
              "🏘️ **Community Collection Drives**\n" +
              "Neighborhood e-waste collection events\n\n" +
              "🏢 **Corporate Partnerships**\n" +
              "Business sustainability programs\n\n" +
              "**Become an EcoDispose Captain**\n" +
              "Lead environmental change in your community or organization.\n\n" +
              "Email us at: team@ecodispose",
        showWhatsApp: true
      };
    }
    
    // Pricing
    if (message.includes('price') || message.includes('cost') || message.includes('free') || message.includes('charge')) {
      return { 
        text: "**Pricing Information**\n\n" +
              "🏠 **Household Pickup:**\n" +
              "• FREE for most e-waste items\n" +
              "• Some valuable items may have buyback value\n\n" +
              "🏢 **Enterprise Services:**\n" +
              "• Cost-efficient bulk handling\n" +
              "• Custom pricing based on volume\n" +
              "• Significant savings vs. landfill disposal\n\n" +
              "We provide transparent pricing with no hidden fees.",
        showWhatsApp: true
      };
    }
    
    // Location/service area
    if (message.includes('location') || message.includes('area') || message.includes('where')) {
      return { 
        text: "**Service Areas**\n\n" +
              "We provide e-waste collection across multiple Indian cities.\n\n" +
              "When scheduling pickup, please provide your:\n" +
              "• City\n" +
              "• Area/Locality\n" +
              "• Contact details\n\n" +
              "We'll confirm service availability in your location.",
        showPickup: true
      };
    }
    
    // Process/how it works
    if (message.includes('process') || message.includes('how') || message.includes('work')) {
      return { 
        text: "**Our Simple Process**\n\n" +
              "1️⃣ **Assessment**\n" +
              "Evaluate your e-waste needs\n\n" +
              "2️⃣ **Collection**\n" +
              "Scheduled pickup from your location\n\n" +
              "3️⃣ **Safe Transport**\n" +
              "Secure transportation to our facility\n\n" +
              "4️⃣ **Processing**\n" +
              "Secure handling and recycling\n\n" +
              "5️⃣ **Reporting**\n" +
              "Detailed documentation and certificates\n\n" +
              "For households, we offer doorstep pickup!",
        showPickup: true
      };
    }
    
    // Thanks
    if (message.includes('thank') || message.includes('thanks')) {
      return { 
        text: "You're welcome! We're happy to help with all your e-waste needs. Is there anything else you'd like to know about our services?"
      };
    }
    
    // WhatsApp specific - HIGHLIGHTED
    if (message.includes('whatsapp') || message.includes('chat') || message.includes('talk') || message.includes('contact')) {
      return { 
        text: "💬 **CHAT ON WHATSAPP**\n\n" +
              "For personalized assistance:\n\n" +
              "• Get help scheduling pickup\n" +
              "• Discuss specific requirements\n" +
              "• Ask detailed questions\n" +
              "• Receive quick responses\n\n" +
              "Our team is ready to help you with all e-waste needs!",
        showWhatsApp: true
      };
    }
    
    // Default response - redirect to WhatsApp
    return { 
      text: "I'm not sure about that specific question. For detailed assistance, our WhatsApp team can provide personalized support and answer all your questions about e-waste disposal!",
      showWhatsApp: true
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        showWhatsApp: response.showWhatsApp,
        showPickup: response.showPickup
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = "8861009443"; 
    const message = "Hi! I need help with e-waste disposal services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickResponse = (response: string) => {
    // Handle "Schedule pickup" specially
    if (response === "Schedule pickup") {
      const botMessage: Message = {
        id: messages.length + 1,
        text: "🚛 **DOORSTEP PICKUP SERVICE**\n\n" +
              "Let me help you schedule a pickup:\n\n" +
              "1️⃣ Visit our website or WhatsApp us\n" +
              "2️⃣ Provide pickup details\n" +
              "3️⃣ Choose preferred date/time\n" +
              "4️⃣ We'll confirm your appointment\n\n" +
              "Would you like to proceed?",
        isBot: true,
        timestamp: new Date(),
        showPickup: true
      };
      
      setMessages(prev => [...prev, botMessage]);
      return;
    }

    const userMessage: Message = {
      id: messages.length + 1,
      text: response,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(response);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        showWhatsApp: botResponse.showWhatsApp,
        showPickup: botResponse.showPickup
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const quickResponses = [
    "Schedule pickup",
    "What items do you accept?",
    "Is it free?",
    "Corporate services",
    "Chat on WhatsApp"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <div 
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
          isOpen ? 'transform scale-95' : 'transform scale-100 hover:scale-110'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 relative group"
        >
          {isOpen ? <X size={20} className="md:w-6 md:h-6" /> : <MessageCircle size={20} className="md:w-6 md:h-6" />}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              !
            </div>
          )}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 sm:w-96 md:w-[380px] lg:w-[360px] h-[500px] md:h-[580px] lg:h-[520px] bg-white rounded-xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/dist/assets/logo_dark-CWyHD7aS.png" 
                  alt="Logo" 
                  className="w-10 h-10 rounded-full bg-white p-1"
                  onError={(e) => {
                    // Fallback to emoji if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.setAttribute('style', 'display: flex');
                  }}
                />
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-lg hidden">
                  🌱
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-base">E-Waste Assistant</h3>
                <p className="text-xs opacity-90">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-700 rounded-full p-2 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className="flex flex-col max-w-[85%]">
              <div
                className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  message.isBot
                    ? 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                    : 'bg-green-600 text-white rounded-br-md shadow-sm'
                }`}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
              
              {/* WhatsApp Button */}
              {message.isBot && message.showWhatsApp && (
                <button
                  onClick={handleWhatsAppRedirect}
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                >
                  <MessageSquare size={16} />
                  Continue on WhatsApp
                </button>
              )}
                  
                  {/* Pickup Button */}
                  {message.isBot && message.showPickup && (
                    <button
                      onClick={handleSchedulePickup}
                      className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                    >
                      🚛 Schedule Free Pickup
                    </button>
                  )}
                  
                  <span className={`text-xs text-gray-400 mt-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          {messages.length <= 2 && (
            <div className="p-3 border-t border-gray-200 bg-white">
              <p className="text-xs text-gray-500 mb-2 font-medium">Quick options:</p>
              <div className="flex flex-wrap gap-2">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className={`text-xs py-2 px-3 rounded-full transition-all duration-200 border ${
                      response === "Schedule pickup" 
                        ? 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-50'
                        : response === "Chat on WhatsApp"
                        ? 'bg-green-100 text-green-700 border-green-200 hover:bg-green-50'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-3 items-end">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                  disabled={isTyping}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white rounded-full p-3 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 disabled:transform-none disabled:hover:shadow-sm"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="flex items-center justify-center mt-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="text-xs text-gray-500 hover:text-green-600 flex items-center gap-1 py-1 px-2 rounded transition-colors"
              >
                <Phone size={12} />
                Or chat directly on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;