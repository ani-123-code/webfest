// import { Award } from 'lucide-react';
import { useState } from 'react';
import AboutHero from '../components/AboutHero';
import MissionVision from '../components/MissionVision';
import CompanyValues from '../components/CompanyValues';
import TeamMember from '../components/TeamMember';
// import Certifications from '../components/Certifications';
import Gallery from '../components/Gallery';
import Certifications from '../components/Certifications';
import anikethImage from '../assets/aniketh.jpg';
import alokImage from '../assets/alok_kumar.jpg'
import govindarajuImage from '../assets/leadership/image.png'
import ramanakumarImage from '../assets/leadership/ramana-kumar.jpeg'
import sortingImage from '../assets/erik-mclean-oKva4WUIXss-unsplash.jpg'
import processingPlantImage from '../assets/martin-adams-a_PDPUPuNZ8-unsplash.jpg'
import facility1 from '../assets/gallery/facility/20241207_115958-1-scaled-187x187.jpg'
import facility2 from '../assets/gallery/facility/ABC-scaled-187x187.jpg'
import facility3 from '../assets/gallery/facility/a12-scaled-187x187.jpeg'
import facility4 from '../assets/gallery/facility/a13-scaled-187x187.jpeg'
import facility5 from '../assets/gallery/facility/a9-scaled-187x187.jpeg'
import award1 from '../assets/gallery/awards/AWARD.jpg'
import community1 from '../assets/gallery/community/20240313_132709-scaled-187x187.jpg'
import community2 from '../assets/gallery/community/20241207_121243-scaled-187x187.jpg'
import events1 from '../assets/gallery/evnts/20241207_115512-scaled-187x187.jpg'
import events2 from '../assets/gallery/evnts/Recommerce-Expo-187x187.jpeg'
import events3 from '../assets/gallery/evnts/a10-scaled-187x187.jpeg'
import events4 from '../assets/gallery/stories/IMG_0046.jpg';
import events5 from '../assets/gallery/stories/IMG_0047.jpg';
import events6 from '../assets/gallery/stories/IMG_0048.jpg';
import events7 from '../assets/gallery/stories/IMG_0049.jpg';
import events8 from '../assets/gallery/stories/IMG_0050.jpg';
import events9 from '../assets/gallery/stories/IMG_0051.jpg';
import events10 from '../assets/gallery/stories/1749123433306.jpeg';
import events11 from '../assets/gallery/stories/1749123433832.jpeg';
import events12 from '../assets/gallery/stories/1749123433871.jpeg';
import events13 from '../assets/gallery/stories/1749123433907.jpeg';
import events14 from '../assets/gallery/stories/1749123433973.jpeg';
import events15 from '../assets/gallery/stories/1749123434362.jpeg';
import events16 from '../assets/gallery/stories/IMG_9962.jpg';
import events17 from '../assets/gallery/stories/IMG_9925.jpg';
import events18 from '../assets/gallery/stories/IMG_9926.jpg';
import events19 from '../assets/gallery/stories/1749123436592.jpeg';
import events20 from '../assets/gallery/stories/1749123436625.jpeg';
import events21 from '../assets/gallery/stories/IMG_E0108.jpg';
import events22 from '../assets/gallery/stories/1751791609519.jpeg';

const galleryImages = [
  {
    id: 1,
    url: facility1,
    category: 'facility'
  },
  {
    id: 2,
    url: facility2,
    category: 'facility'
  },
  {
    id: 3,
    url: facility3,
    category: 'facility'
  },
  {
    id: 4,
    url: facility4,
    category: 'facility'
  },
  {
    id: 5,
    url: community1,
    category: 'community'
  },
  {
    id: 6,
    url: award1,
    category: 'awards'
  },
  {
    id: 7,
    url: events1,
    category: 'events'
  },
  {
    id: 8,
    url: facility5,
    category: 'facility'
  },
  {
    id: 9,
    url: community2,
    category: 'community'
  },
  {
    id: 10,
    url: events2,
    category: 'events'
  },
  {
    id: 11,
    url: events3,
    category: 'events'
  },
  {
    id: 12,
    url: events4,
    category: 'events'
  },
  {
    id: 13,
    url: events5,
    category: 'events'
  },
  {
    id: 14,
    url: events6,
    category: 'events'
  },
  {
    id: 15,
    url: events7,
    category: 'events'
  },
  {
    id: 16,
    url: events8,
    category: 'events'
  },
  {
    id: 17,
    url: events9,
    category: 'events'
  },
  {
    id: 18,
    url: events10,
    category: 'events'
  },
  {
    id: 19,
    url: events11,
    category: 'events'
  },
  {
    id: 20,
    url: events12,
    category: 'events'
  },
  {
    id: 21,
    url: events13,
    category: 'events'
  },
  {
    id: 22,
    url: events14,
    category: 'events'
  },
  {
    id: 23,
    url: events15,
    category: 'events'
  },
  {
    id: 24,
    url: events16,
    category: 'events'
  },
  {
    id: 25,
    url: events17,
    category: 'events'
  },
  {
    id: 26,
    url: events18,
    category: 'events'
  },
  {
    id: 27,
    url: events19,
    category: 'events'
  },
  {
    id: 28,
    url: events20,
    category: 'events'
  },
  {
    id: 29,
    url: events21,
    category: 'events'
  },
  // {
  //   id: 30,
  //   url: events22,
  //   category: 'events'
  // }

];

const teamMembers = [
  {
    name: "Aniketh Vadthya",
    role: "Founder & CEO",
    image: anikethImage,
    linkedinUrl: "https://www.linkedin.com/in/anikethvadthya",
    bio: "Aniketh is the visionary behind Eco Dispose, bringing a relentless commitment to sustainability and environmental preservation. Under his leadership, the company is transforming how e-waste is managed, creating innovative solutions for efficient recycling, safe disposal, and resource recovery.",
    // achievements: [
    //   "Optimized processing efficiency by 40%",
    //   "Implemented ISO 14001 standards",
    //   "Developed partner network across 10 states",
    //   "Speaker at Global Recycling Summit 2023"
    // ]
  },
  {
    name: "Alok Kumar",
    role: "CBO",
    image: alokImage,
    linkedinUrl: "https://www.linkedin.com/in/alok-kumar-6a0856107",
    bio: "Alok Kumar, the Chief Business Officer at Eco Dispose, spearheads strategic initiatives with a vision to revolutionize e-waste management. His unwavering commitment to sustainability drives the development of innovative solutions for electronic waste disposal, ensuring environmental safety while maximizing resource recovery and reuse. With a unique ability to merge technological advancements with operational excellence, Alok plays a pivotal role in positioning Eco Dispose as a leader in creating a cleaner, greener, and more sustainable future.",
    // achievements: [
    //   "Optimized processing efficiency by 40%",
    //   "Implemented ISO 14001 standards",
    //   "Developed partner network across 10 states",
    //   "Speaker at Global Recycling Summit 2023"
    // ]
  },
  {
    name: "Ramana Kumar Musunuru",
    role: "CSO",
    image: ramanakumarImage,
    linkedinUrl: "https://www.linkedin.com/in/ramana-kumar-musunuru-a716626",
    bio:"Ramana Kumar Musunuru serves as the Chief Strategy Officer at Eco Dispose, bringing over 20 years of experience in strategic leadership and innovation. He is passionate about revolutionizing e-waste management through sustainable practices that safeguard the environment and maximize resource reuse. With a deep commitment to leveraging technology and operational excellence, Ramana plays a pivotal role in driving Eco Dispose's mission to create a cleaner, greener future."
  },
  {
    name: "Mr. Govindaraju",
    role: "MD & Founder",
    image: govindarajuImage,
    linkedinUrl: "",
    bio: "Our pride, Shri Govindaraju, an eminent service provider, is a living legend with over 20+ years of experience in E-Waste and IT Asset Management. He has implemented efficient processes for the collection, sorting, dismantling, and recycling of electronic waste to maximize resource recovery.",
    // achievements: [
    //   "Optimized processing efficiency by 40%",
    //   "Implemented ISO 14001 standards",
    //   "Developed partner network across 10 states",
    //   "Speaker at Global Recycling Summit 2023"
    // ]
  },
];

const processImages = [
  {
    title: "Collection Centers",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "State-of-the-art facilities for e-waste collection"
  },
  {
    title: "Sorting Process",
    image: sortingImage,
    description: "Advanced sorting technology for maximum recycling efficiency"
  },
  {
    title: "Processing Plant",
    image: processingPlantImage,
    description: "Modern processing facilities for sustainable recycling"
  }
];

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <MissionVision />
      <CompanyValues />
      
      {/* Process Images Section */}
      <div className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 relative">
                Our 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Process</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Innovative solutions for sustainable e-waste management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processImages.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-green-400/20 hover:border-green-400/40"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-1 left-5 right-5 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery 
        images={galleryImages} 
        title="Our Gallery" 
        subtitle="Explore our facility and initiatives through our image gallery"
      />

      {/* Team Section */}
      <div className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 relative">
                Our Leadership 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Team</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Meet the visionaries driving our sustainable mission forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Certifications/>
    </div>
  );
}