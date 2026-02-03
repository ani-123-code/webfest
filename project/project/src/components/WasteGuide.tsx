import { useState } from 'react';
import { Recycle, Shield, Package2, Battery } from 'lucide-react';

const categories = [
  {
    title: "Identify E-Waste",
    icon: Recycle,
    items: [
      "Computers & Laptops: Desktops, monitors, keyboards, mice, and cables",
      "Mobile Phones: Smartphones, basic phones, and accessories like headphones and chargers",
      "Tablets & E-Readers: Old or non-functional tablets and e-readers",
      "Printers & Scanners: Including ink cartridges and toners",
      "Electronic Toys & Gadgets: Remote-controlled toys, drones, and handheld gaming consoles",
      "Home Appliances: Irons, kettles, toasters, and microwaves",
      "Audio & Visual Equipment: Speakers, headphones, cameras, and DVD players",
      "Wearables: Smartwatches, fitness trackers, and similar devices",
      "Networking Equipment: Modems, routers, and switches",
      "Medical Devices: Old thermometers, blood pressure monitors, and glucose meters"
    ]
  },
  {
    title: "Safe Storage",
    icon: Package2,
    items: [
      "Use Original Packaging: Reuse boxes and foam inserts for safe transportation",
      "Keep in Dry Area: Avoid places with high humidity or the potential for water leakage",
      "Avoid Stacking Heavy Items: Prevent crushing or damage to fragile components",
      "Separate Batteries: Store batteries separately to avoid leakage or fire risks",
      "Label Items: Mark boxes or containers for easy identification during disposal",
      "Keep Out of Reach of Children: Avoid accidental exposure or tampering",
      "Avoid Prolonged Storage: Prolonged storage can lead to corrosion or leakage"
    ]
  },
  {
    title: "Data Security",
    icon: Shield,
    items: [
      "Back-Up Important Data: Use cloud storage or external drives to save data",
      "Perform a Factory Reset: Restore devices to factory settings to delete personal information",
      "Remove Memory Cards & SIM Cards: Retain these for reuse or separate disposal",
      "Securely Wipe Drives: Use data-wiping software to ensure the hard drive is completely erased",
      "Physically Destroy Drives (if necessary): For sensitive data, physically destroy hard drives or SSDs",
      "Deactivate Linked Accounts: Remove linked accounts like email or cloud services from devices",
      "Log Out of All Applications: Ensure no personal accounts remain logged in"
    ]
  },
  {
    title: "Battery Handling",
    icon: Battery,
    items: [
      "Keep in Cool Place: Store in a cool, dry area away from heat sources",
      "Avoid Metal Contact: Prevent short circuits by ensuring terminals don't touch metals",
      "Use Battery Cases or Insulate Terminals: Cover terminals with tape to prevent accidental discharge",
      "Never Puncture or Incinerate: Puncturing or burning batteries can release toxic chemicals",
      "Dispose of Leaking Batteries Separately: Handle leaking batteries with care and seal them in a plastic bag",
      "Recycle Through Approved Centers: Take batteries to certified e-waste recyclers",
      "Avoid Mixing Types: Keep lithium-ion batteries separate from other types to prevent reactions",
      "Monitor for Swelling: Discard swollen or damaged batteries immediately in proper facilities"
    ]
  }
];



export default function WasteGuide() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setExpandedCard((prev) => (prev === title ? null : title));
  };

  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-green-950 mb-2 relative">
              E-Waste 
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"> Guide</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                       Learn how to identify and properly handle electronic waste
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const isExpanded = expandedCard === category.title;

            return (
              <div
                key={category.title}
                onClick={() => toggleCard(category.title)}
                className={`group relative bg-gradient-to-br from-green-950 via-green-900 to-green-950 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 cursor-pointer font-light ${
                  isExpanded ? 'h-auto' : 'h-[20rem]'
                }`}
              >
                {/* Background hover pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Content container */}
                <div
                  className={`relative p-5 transition-transform duration-500 transform ${
                    isExpanded ? 'translate-y-0' : 'translate-y-0'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
                      <div className="relative p-2 rounded-lg  text-white">
                        <category.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-green-400 transition-colors">
                      {category.title}
                    </h3>
                    <div className="ml-auto w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent opacity-60"></div>
                  </div>

                  {/* Items */}
                  <div className="space-y-1.5">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-2.5 text-sm text-gray-300 group/item hover:text-white transition-colors"
                      >
                        <div className="relative mt-1.5">
                          <div className="h-1 w-1 bg-green-500 rounded-full group-hover/item:scale-150 group-hover/item:bg-green-400 transition-all duration-300"></div>
                          <div className="absolute inset-0 h-1 w-1 bg-green-400 rounded-full animate-ping opacity-0 group-hover/item:opacity-30"></div>
                        </div>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom black gradient overlay (only when collapsed) */}
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none transition-opacity duration-300" />
                )}

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

                {/* Top-right corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
