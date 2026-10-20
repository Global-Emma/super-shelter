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
  WorkVideo: Array<{
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'structural' | 'renovation' | 'other';
  location: string;
  description: string;
  thumbnail: string;
  videoUrl: string; // Embeddable YouTube/Vimeo link or direct MP4 URL
  isIllustrative: boolean;
  duration: string;
 }>
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
      image: '/img/project1.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-2',
      title: 'Commercial Office Structure',
      category: 'commercial',
      location: 'Awka, Anambra State',
      description: 'Illustrative execution example of concrete frame work for commercial space development.',
      image: '/img/project2.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project3.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project4.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project4.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project5.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project6.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project7.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project8.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project9.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project10.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project11.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project12.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project13.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project14.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project15.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project16.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project17.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project18.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project19.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project20.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project21.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project22.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project23.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project24.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project25.jpg',
      isIllustrative: true,
    },
    {
      id: 'proj-3',
      title: 'Modern Renovation Work',
      category: 'renovation',
      location: 'Awka, Anambra State',
      description: 'Illustrative showcase of structural modifications and building finishing.',
      image: '/img/project26.jpg',
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
  WorkVideo: [
  {
    id: 'vid-1',
    title: 'Modern Villa Foundation & Structural Framing',
    category: 'residential',
    location: 'Awka, Anambra State',
    description: 'Walkthrough of site excavation, rebar layout, and concrete column casting for a residential multi-story villa.',
    thumbnail: '/img/project1.jpg',
    videoUrl: '/vids/video1.mp4', // Replace with your video link
    isIllustrative: true,
    duration: '02:45',
  },
  {
    id: 'vid-2',
    title: 'Commercial Office Slab Casting & Progress',
    category: 'commercial',
    location: 'Awka, Anambra State',
    description: 'On-site execution video showcasing floor slab reinforcement and concrete pumping operations.',
    thumbnail: '/img/project2.jpg',
    videoUrl: '/vids/video2.mp4', // Replace with your video link
    isIllustrative: true,
    duration: '03:15',
  },
  {
    id: 'vid-3',
    title: 'Residential Interior & Exterior Finishing',
    category: 'renovation',
    location: 'Awka, Anambra State',
    description: 'Detailed showcase of wall rendering, ceiling fitting, and tiling progress on a completed residential property.',
    thumbnail: '/img/project3.jpg',
    videoUrl: '/vids/video3.mp4',
    isIllustrative: true,
    duration: '01:50',
  },
  {
    id: 'vid-4',
    title: 'Construction Site Footage 04',
    category: 'other',
    location: 'Awka, Anambra State',
    description: 'Construction footage from the Super Shelter media gallery.',
    thumbnail: '/img/project4.jpg',
    videoUrl: '/vids/video4.mp4',
    isIllustrative: true,
    duration: '',
  },
  {
    id: 'vid-5',
    title: 'Construction Site Footage 05',
    category: 'other',
    location: 'Awka, Anambra State',
    description: 'Construction footage from the Super Shelter media gallery.',
    thumbnail: '/img/project5.jpg',
    videoUrl: '/vids/video5.mp4',
    isIllustrative: true,
    duration: '',
  },
  {
    id: 'vid-6',
    title: 'Construction Site Footage 06',
    category: 'other',
    location: 'Awka, Anambra State',
    description: 'Construction footage from the Super Shelter media gallery.',
    thumbnail: '/img/project6.jpg',
    videoUrl: '/vids/video6.mp4',
    isIllustrative: true,
    duration: '',
  },
  {
    id: 'vid-7',
    title: 'Construction Site Footage 07',
    category: 'other',
    location: 'Awka, Anambra State',
    description: 'Construction footage from the Super Shelter media gallery.',
    thumbnail: '/img/project7.jpg',
    videoUrl: '/vids/video7.mp4',
    isIllustrative: true,
    duration: '',
  },
  {
    id: 'vid-8',
    title: 'Construction Site Footage 08',
    category: 'other',
    location: 'Awka, Anambra State',
    description: 'Construction footage from the Super Shelter media gallery.',
    thumbnail: '/img/project8.jpg',
    videoUrl: '/vids/video8.mp4',
    isIllustrative: true,
    duration: '',
  },
  {
    id: 'vid-9',
    title: 'Construction Site Footage 09',
    category: 'other',
    location: 'Awka, Anambra State',
    description: 'Construction footage from the Super Shelter media gallery.',
    thumbnail: '/img/project9.jpg',
    videoUrl: '/vids/video9.mp4',
    isIllustrative: true,
    duration: '',
  },
  {
    id: 'vid-10',
    title: 'Construction Site Footage 10',
    category: 'other',
    location: 'Awka, Anambra State',
    description: 'Construction footage from the Super Shelter media gallery.',
    thumbnail: '/img/project10.jpg',
    videoUrl: '/vids/video10.mp4',
    isIllustrative: true,
    duration: '',
  },

],
};