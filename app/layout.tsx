import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';
import { JsonLd } from '@/components/ui/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Configure viewport settings for mobile responsiveness and Core Web Vitals
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111827',
};

// Comprehensive Technical & Local SEO Metadata API Configuration
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.legalName} | Construction Company in Awka`,
    template: `%s | ${siteConfig.legalName}`,
  },
  description:
    'Super Shelter Construction Ltd is a trusted construction company in Awka, Anambra State, Nigeria. Handling residential, commercial building, structural works, and building renovation. Call 0703 118 4321.',
  keywords: [
    'Super Shelter Construction Ltd',
    'Construction company in Awka',
    'Building construction in Awka Anambra State',
    'Construction services in Anambra State',
    'Building renovation Awka',
    'Commercial building construction Awka',
    'Residential contractors Awka',
    'Civil engineering services Awka',
    'Oby Okoli Temp Site Awka construction',
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.domain }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteConfig.domain,
    title: `${siteConfig.legalName} | Construction Company in Awka`,
    description:
      'Contact Super Shelter Construction Ltd in Awka, Anambra State, Nigeria, for residential, commercial, and renovation projects. Call 0703 118 4321.',
    siteName: siteConfig.legalName,
    images: [
      {
        url: `${siteConfig.domain}/og-image.jpg`, // Ensure og-image.jpg exists in /public
        width: 1200,
        height: 630,
        alt: 'Super Shelter Construction Ltd — Awka, Anambra State',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.legalName} | Construction Company in Awka`,
    description:
      'Contact Super Shelter Construction Ltd in Awka, Anambra State, Nigeria, to discuss your building and construction project. Call 0703 118 4321.',
    images: [`${siteConfig.domain}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google Search Console verification boundary placeholder
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  category: 'Construction & Building Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to critical domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="bg-white text-[#1E293B] antialiased selection:bg-[#DC2626] selection:text-white">
        {/*
          JSON-LD Structured Data: Included at root layout level so all search engines
          and AI scrapers reliably parse GeneralContractor metadata across the site.
        */}
        <JsonLd />
        
        {children}
      </body>
    </html>
  );
}