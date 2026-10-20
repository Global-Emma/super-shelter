// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppLink } from '@/lib/utils';

export function Footer() {
  // Hardcode or use a static constant to allow static site generation (SSG)
  const currentYear = 2026;

  return (
    <footer className="bg-[#111827] text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-12 h-10 bg-white rounded-md flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm shrink-0 p-0.5">
                <Image
                  src="/logo.png"
                  alt={`${siteConfig.name} Logo`}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-bold text-lg leading-tight tracking-wider text-white">
                  SUPER SHELTER
                </span>
                <span className="block text-[10px] tracking-widest text-[#DC2626] font-semibold uppercase">
                  CONSTRUCTION LTD
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Super Shelter Construction Ltd — construction enquiries and building solutions in Awka, Anambra State, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {['Home', 'About Us', 'Services', 'Projects', 'Our Process', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="hover:text-[#DC2626] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proposed Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Proposed Services
            </h3>
            <ul className="space-y-2 text-xs">
              {siteConfig.services.map((service) => (
                <li key={service.id} className="text-gray-400">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Contact Information
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DC2626] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.displayPhone}
                </a>
              </li>
              {siteConfig.whatsappConfirmed && siteConfig.whatsappPhone && (
                <li className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-green-500 shrink-0" />
                  <a
                    href={buildWhatsAppLink(
                      'Hello Super Shelter Construction Ltd, I would like to make an enquiry.',
                      siteConfig.whatsappPhone
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Chat Available
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
