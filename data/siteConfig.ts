export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  displayPhone: string;
  whatsappPhone: string | null; // Set to international string without leading zero when confirmed, e.g. "2347031184321"
  whatsappConfirmed: boolean;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    plusCode: string;
    full: string;
  };
  domain: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    verified: boolean;
  }>;
  projects: Array<{
    id: string;
    title: string;
    category: 'residential' | 'commercial' | 'renovation' | 'other';
    location: string;
    description: string;
    image: string;
    isIllustrative: boolean;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const siteConfig: BusinessConfig = {
  name: 'Super Shelter',
  legalName: 'Super Shelter Construction Ltd',
  tagline: 'Building Strong Foundations. Creating Spaces for the Future.',
  description: 'Super Shelter Construction Ltd provides residential, commercial, renovation, and structural construction services in Awka, Anambra State, Nigeria.',
  phone: '+2347031184321',
  displayPhone: '0703 118 4321',
  whatsappPhone: '2347031184321', // Set to null if WhatsApp is unconfirmed
  whatsappConfirmed: true, // Toggle to false to hide floating WhatsApp & direct fallback
  address: {
    street: 'Oby Okoli, Temp Site',
    area: 'Temp Site',
    city: 'Awka',
    state: 'Anambra State',
    postalCode: '420110',
    country: 'Nigeria',
    plusCode: '63G7+JP Awka',
    full: 'Oby Okoli, Temp Site, Awka 420110, Anambra State, Nigeria',
  },
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://supershelter.com.ng',
  socials: {}, // Leave empty until confirmed
  services: [
    {
      id: 'residential',
      title: 'Residential Construction',
      description: 'Building modern homes, duplexes, and residential developments tailored to client specifications and site realities.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      verified: true,
    },
    {
      id: 'commercial',
      title: 'Commercial Building Construction',
      description: 'Structural and space execution for offices, commercial outlets, and business facilities in Awka.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      verified: true,
    },
    {
      id: 'renovation',
      title: 'Building Renovation & Remodeling',
      description: 'Upgrading existing residential and commercial structures to meet current spatial standards and structural safety.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000',
      verified: true,
    },
    {
      id: 'finishing',
      title: 'Building Finishing Works',
      description: 'Quality finishing details including plastering, tiling, painting, ceiling work, and fitting installations.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000',
      verified: true,
    },
    {
      id: 'structural',
      title: 'Structural & Civil Works',
      description: 'Foundations, concrete casting, retaining walls, and civil site work executed in accordance with building standards.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1000',
      verified: true,
    },
    {
      id: 'planning',
      title: 'Project Planning & Coordination',
      description: 'Consultation on project scope, materials management, site preparation, and workflow scheduling.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000',
      verified: true,
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Residential Villa Architectural Concept',
      category: 'residential',
      location: 'Awka, Anambra State',
      description: 'Illustrative presentation of a modern multi-family residential building concept.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000',
      isIllustrative: true,
    },
    {
      id: 'proj-2',
      title: 'Commercial Office Structure',
      category: 'commercial',
      location: 'Awka, Anambra State',
      description: 'Illustrative execution example of concrete frame work for commercial space development.',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1000',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
      isIllustrative: true,
    },
  ],
  faqs: [
    {
      question: 'What types of construction projects do you handle?',
      answer: 'Super Shelter Construction Ltd assists clients with residential building, commercial construction, building renovations, and structural finishing projects in Awka and surrounding areas in Anambra State.',
    },
    {
      question: 'How can I request a quotation for my project?',
      answer: 'You can submit your project details using our online Enquiry Form or call us directly at 0703 118 4321 to discuss your requirements with our team.',
    },
    {
      question: 'What details should I have ready before calling?',
      answer: 'Having information regarding your project location, site size or status, desired timeline, and structural plans (if available) will help us understand your needs faster.',
    },
    {
      question: 'Do you handle construction work outside Awka?',
      answer: 'Our primary focus is Awka, Anambra State, but we welcome enquiries for projects in neighboring communities depending on project scope and logistics.',
    },
    {
      question: 'Where is your office located in Awka?',
      answer: 'We are located at Oby Okoli, Temp Site, Awka 420110, Anambra State, Nigeria (Google Maps Plus Code: 63G7+JP Awka).',
    },
  ],
};