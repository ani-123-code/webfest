import story1Image1 from '../assets/gallery/stories/IMG_0046.jpg';
import story1Image2 from '../assets/gallery/stories/IMG_0047.jpg';
import story1Image3 from '../assets/gallery/stories/IMG_0048.jpg';
import story1Image4 from '../assets/gallery/stories/IMG_0049.jpg';
import story1Image5 from '../assets/gallery/stories/IMG_0050.jpg';
import story1Image6 from '../assets/gallery/stories/IMG_0051.jpg';
import story2Image1 from '../assets/gallery/stories/1749123433306.jpeg';
import story2Image2 from '../assets/gallery/stories/1749123433832.jpeg';
import story2Image3 from '../assets/gallery/stories/1749123433871.jpeg';
import story2Image4 from '../assets/gallery/stories/1749123433907.jpeg';
import story2Image5 from '../assets/gallery/stories/1749123433973.jpeg';
import story2Image6 from '../assets/gallery/stories/1749123434362.jpeg';
import story3Image1 from '../assets/gallery/stories/IMG_9962.jpg';
import story3Image2 from '../assets/gallery/stories/IMG_9925.jpg';
import story3Image3 from '../assets/gallery/stories/IMG_9926.jpg';
import story2Image7 from '../assets/gallery/stories/1749123436592.jpeg';
import story2Image8 from '../assets/gallery/stories/1749123436625.jpeg';
import story4Image1 from '../assets/gallery/stories/IMG_E0108.jpg';
import story5Image1 from '../assets/gallery/stories/1751791609519.jpeg';

import DineshMishraAvatar from '../assets/gallery/stories/DineshMishra.jpeg';
import ecoDispose from '../assets/gallery/stories/ecodispose_log.jpeg';




export interface UserStory {
  id: string;
  title: string;
  description: string;
  images: string[];
  author: {
    name: string;
    role: string;
    company?: string;
    location: string;
    avatar: string;
  };
  date: string;
  category: 'Individual' | 'Corporate' | 'Institution';
  stats?: {
    wasteCollected: string;
    impact: string;
  };
}



export const userStories: UserStory[] = [
  {
    id: 'story-1',
    title: "World Environment Day Tree Plantation Drive",
    description: "This World Environment Day, Eco Dispose extends sincere gratitude to AMS, OSM, and Namma Pharma for your enthusiastic participation in our tree plantation drive. Your collective commitment to creating a greener, cleaner planet inspires us all. With your support, we didn't just plant trees — we planted the seeds of a more sustainable future. Thank you for standing with us in our mission to protect and restore the environment. Together, we're growing a better tomorrow.",
    images:  [ story1Image2,story1Image6,story1Image1, story1Image2, story1Image3, story1Image4 ],
    author: {
      name: "Clenrgy Eco Dispose India LLP",
      role: "Environmental Services",
      company: "Eco Dispose",
      location: "Bengaluru",
      avatar: ecoDispose
    },
    date: "1 month ago",
    category: "Corporate",
    stats: {
      wasteCollected: "Multiple partners",
      impact: "Green initiative"
    }
  },
  {
    id: 'story-2',
    title: "E-Waste Management Awareness Campaign",
    description: "On the occasion of World Environment Day, Clenrgy Eco Dispose India LLP-Dispose joined hands with Namma Pharma and Omega Seiki Mobility to launch an E-Waste Management Awareness Campaign across various parts of Bengaluru. Key Highlights: 2000+ plants were distributed and planted as part of the green initiative. Close to 1 metric ton of e-waste was collected from households and offices, helping drive home the message of responsible disposal. Special thanks to Mr. Uday Narang, Chairman of Omega Seiki Mobility, for his unwavering support—right from making plants available at key locations to providing the manpower that made this entire campaign operationally possible.",
    images: [story2Image1, story2Image2,story2Image3, story2Image4, story2Image5, story2Image6, story2Image7, story2Image8],
    author: {
      name: "Dinesh Mishra",
      role: "Senior Vice President Strategy",
      company: "Meshmix Media Pvt Ltd",
      location: "Bengaluru",
      avatar: DineshMishraAvatar
    },
    date: "1 month ago",
    category: "Institution",
    stats: {
      wasteCollected: "1 metric ton",
      impact: "2000+ plants distributed"
    }
  },
   {
    id: 'story-4',
    title: "Visit to Ace Designers Ltd",
    description: "Today, we had the privilege of visiting Ace Designers Ltd – in the heart of Peenya Industrial Area as part of our E-Waste Management Awareness & Plantation Drive under the World Environment Day initiative. A heartfelt thank you to Mr. Muralidhara Rao for graciously welcoming the Eco-Dispose team. The AMS facility is truly a green gem—over 1000 trees and plants make it a natural haven. Our visit became even more special with the presence of Mr. Ramadas P.,Founder Ace Micromatic Group, who actively participated by planting a tree with us.",
    images: [story1Image1,story4Image1, story1Image2, story1Image3, story1Image4, story1Image5, story1Image6],
    author: {
      name: "Dinesh Mishra",
      role: "Senior Vice President Strategy",
      company: "Meshmix Media Pvt Ltd",
      location: "Bengaluru",
      avatar: DineshMishraAvatar
    },
    date: "1 month ago",
    category: "Corporate",
    stats: {
      wasteCollected: "1 metric ton",
      impact: "2000+ plants distributed"
    }
  },
  {
    id: 'story-3',
    title: "UNOXpress Supply Chain Support",
    description: "We want to extend a big thank you to the team at UNOXpress for their seamless supply chain support during our campaign. Their contribution ensured timely movement and availability of essential materials across locations—truly appreciated. As a gesture of inclusion, Mr. Aniketh Vadthya planted a tree on behalf of Mr. kishan Gupta, who unfortunately couldn't attend due to professional commitments in Delhi. This visit was part of a larger campaign led by Clenrgy Eco Dispose India LLP, in collaboration with Namma Pharma and Omega Seiki Mobility, which was carried out across multiple locations in Bengaluru on the 4th and 5th of June.",
    images: [story3Image1, story3Image2, story3Image3],
    author: {
      name: "Dinesh Mishra",
      role: "Senior Vice President Strategy",
      company: "Meshmix Media Pvt Ltd",
      location: "Bengaluru",
      avatar: DineshMishraAvatar
    },
    date: "1 month ago",
    category: "Corporate",
    stats: {
      wasteCollected: "1 metric ton",
      impact: "2000+ plants planted"
    }
  },
 
  {
    id: 'story-5',
    title: "Erase Your E-Waste – Save the Planet",
    description: "Join hands with Eco Dispose in taking a stand against electronic waste! This powerful visual reminds us that our old gadgets—keyboards, monitors, CPUs, phones—don't belong in landfills. They contain hazardous materials that harm our environment and important data that can be misused. Erase it responsibly. Dispose it sustainably. Protect your privacy and the planet. Be a part of the green revolution. Recycle your electronics the right way with Eco Dispose – because a cleaner future begins with mindful action today.",
    images: [story5Image1],
    author: {
      name: "Clenrgy Eco Dispose India LLP",
      role: "Environmental Services",
      company: "Eco Dispose",
      location: "Bengaluru",
      avatar: ecoDispose
    },
    date: "3 weeks ago",
    category: "Corporate",
    stats: {
      wasteCollected: "Various e-waste items",
      impact: "Data security & sustainability"
    }
  }
];