import { Building2, Truck, Users, ClipboardCheck, Leaf, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  type: 'b2b' | 'b2c' | 'both';
  fullDescription: string;
  benefits: string[];
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: 'corporate-ewaste',
    title: 'Corporate E-Waste Management',
    description: 'Tailored solutions for businesses with bulk e-waste disposal needs, including IT asset disposition.',
    icon: Building2,
    type: 'b2b',
    fullDescription: 'Our comprehensive corporate e-waste management program is designed to meet the unique needs of businesses of all sizes. We provide end-to-end solutions that ensure compliance, data security, and environmental responsibility.',
    benefits: [
      'Customized collection schedules',
      'Secure data destruction',
      'Detailed reporting and analytics',
      'Compliance documentation',
      'Bulk handling capabilities',
      'Asset tracking system'
    ],
    features: [
      'On-site collection',
      'Secure transportation',
      'Certificate of destruction',
      'Environmental compliance reports',
      'Asset value recovery',
      'Chain of custody documentation'
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'We evaluate your e-waste volume and specific requirements'
      },
      {
        title: 'Custom Plan Development',
        description: 'Create a tailored collection and processing schedule'
      },
      {
        title: 'Secure Collection',
        description: 'Professional pickup with proper handling protocols'
      },
      {
        title: 'Processing & Reporting',
        description: 'Systematic recycling and detailed documentation'
      }
    ]
  },
  {
    id: 'home-pickup',
    title: 'Home Pickup Service',
    description: 'Convenient doorstep collection for individuals with electronic waste.',
    icon: Truck,
    type: 'b2c',
    fullDescription: 'Our residential e-waste collection service makes responsible disposal easy and convenient for households. We provide doorstep pickup and ensure your electronic waste is handled responsibly.',
    benefits: [
      'Convenient scheduling',
      'Doorstep collection',
      'Free pickup service',
      'Environmental impact certificate',
      'Safe handling guarantee',
      'Digital receipt system'
    ],
    features: [
      'Online booking system',
      'Flexible pickup times',
      'Proper handling of devices',
      'Eco-friendly disposal',
      'Track your contribution',
      'Recycling certificate'
    ],
    process: [
      {
        title: 'Schedule Pickup',
        description: 'Book a convenient time slot online or via phone'
      },
      {
        title: 'Preparation',
        description: 'Package your e-waste items securely'
      },
      {
        title: 'Collection',
        description: 'Our team arrives at your doorstep'
      },
      {
        title: 'Confirmation',
        description: 'Receive disposal certificate and impact report'
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    description: 'Certified data destruction and security compliance for sensitive information.',
    icon: Shield,
    type: 'both',
    fullDescription: 'Our data security service ensures complete destruction of sensitive information stored on electronic devices. We follow international standards and provide certification for each device processed.',
    benefits: [
      'Certified data wiping',
      'Physical destruction options',
      'Detailed security reports',
      'Compliance certificates',
      'Chain of custody tracking',
      'Secure transport'
    ],
    features: [
      'Military-grade data wiping',
      'Hard drive shredding',
      'Video documentation',
      'Security compliance',
      'Destruction certificates',
      'Audit trails'
    ],
    process: [
      {
        title: 'Security Assessment',
        description: 'Evaluate data sensitivity and security requirements'
      },
      {
        title: 'Secure Transport',
        description: 'Protected transfer to our facility'
      },
      {
        title: 'Data Destruction',
        description: 'Complete wiping or physical destruction'
      },
      {
        title: 'Certification',
        description: 'Detailed reports and certificates provided'
      }
    ]
  },
  {
    id: 'environmental-compliance',
    title: 'Environmental Compliance',
    description: 'Full compliance with environmental regulations and proper disposal methods.',
    icon: ClipboardCheck,
    type: 'both',
    fullDescription: 'Stay compliant with all environmental regulations through our comprehensive compliance management service. We handle documentation, reporting, and ensure adherence to all applicable laws.',
    benefits: [
      'Regulatory compliance',
      'Documentation management',
      'Regular audits',
      'Updated certifications',
      'Legal consultation',
      'Risk management'
    ],
    features: [
      'Compliance monitoring',
      'Regular reporting',
      'Audit support',
      'Policy development',
      'Staff training',
      'Documentation system'
    ],
    process: [
      {
        title: 'Compliance Review',
        description: 'Assessment of current compliance status'
      },
      {
        title: 'Gap Analysis',
        description: 'Identify areas needing improvement'
      },
      {
        title: 'Implementation',
        description: 'Execute compliance measures'
      },
      {
        title: 'Monitoring',
        description: 'Ongoing compliance tracking and reporting'
      }
    ]
  },
  {
    id: 'green-initiatives',
    title: 'Green Initiatives',
    description: 'Supporting sustainability through responsible recycling practices.',
    icon: Leaf,
    type: 'both',
    fullDescription: 'Our green initiatives program helps organizations and individuals maximize their environmental impact through responsible e-waste management and sustainability practices.',
    benefits: [
      'Carbon footprint reduction',
      'Sustainability reporting',
      'Environmental impact tracking',
      'Green certification support',
      'Community engagement',
      'Educational resources'
    ],
    features: [
      'Impact measurement',
      'Sustainability workshops',
      'Green certifications',
      'Community programs',
      'Environmental reporting',
      'Educational materials'
    ],
    process: [
      {
        title: 'Impact Assessment',
        description: 'Evaluate current environmental impact'
      },
      {
        title: 'Strategy Development',
        description: 'Create sustainable practices plan'
      },
      {
        title: 'Implementation',
        description: 'Execute green initiatives'
      },
      {
        title: 'Impact Reporting',
        description: 'Track and report environmental benefits'
      }
    ]
  },
  {
    id: 'community-programs',
    title: 'Community Programs',
    description: 'Special collection drives and awareness programs for communities.',
    icon: Users,
    type: 'b2c',
    fullDescription: 'Our community programs bring e-waste awareness and collection services to local communities through educational events, collection drives, and partnerships with local organizations.',
    benefits: [
      'Community engagement',
      'Environmental education',
      'Local impact',
      'Convenient collection',
      'Group participation',
      'Social responsibility'
    ],
    features: [
      'Collection drives',
      'Educational workshops',
      'Community events',
      'School programs',
      'Local partnerships',
      'Impact reporting'
    ],
    process: [
      {
        title: 'Program Planning',
        description: 'Design community-specific initiatives'
      },
      {
        title: 'Community Outreach',
        description: 'Engage local organizations and residents'
      },
      {
        title: 'Event Execution',
        description: 'Conduct collection drives and workshops'
      },
      {
        title: 'Impact Assessment',
        description: 'Measure and report community benefits'
      }
    ]
  }
];