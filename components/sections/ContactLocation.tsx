'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/siteConfig';
import { MapPin, Phone, ExternalLink, Navigation } from 'lucide-react';

export function ContactLocation() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address.plusCode
  )}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Location & Contact"
          title="Let's Discuss Your Next Project"
          subtitle="Reach out directly or locate our physical address in Awka, Anambra State."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start mt-12">
          {/* Contact Information */}
          <div className="lg:col-span-5 bg-[#111827] text-white p-8 rounded-xl space-y-6 shadow-lg">
            <h3 className="text-xl font-bold border-b border-gray-700 pb-4">
              Verified Business Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DC2626] shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase text-gray-400 font-semibold block">Address</span>
                  <p className="text-sm font-medium mt-0.5">{siteConfig.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-[#DC2626] shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase text-gray-400 font-semibold block">Google Maps Plus Code</span>
                  <p className="text-sm font-medium mt-0.5">{siteConfig.address.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#DC2626] shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase text-gray-400 font-semibold block">Phone Line</span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base font-bold text-white hover:text-[#DC2626] transition-colors"
                  >
                    {siteConfig.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700 space-y-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded transition-colors"
              >
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Privacy-Conscious Embed Container */}
          <div className="lg:col-span-7 bg-[#F3F5F7] rounded-xl p-6 border border-gray-200">
            <div className="h-80 w-full rounded-lg bg-gray-300 relative overflow-hidden flex flex-col items-center justify-center text-center p-6 border border-gray-300">
              <MapPin className="w-12 h-12 text-[#DC2626] mb-3" />
              <h4 className="text-base font-bold text-[#111827]">Awka, Anambra State Location</h4>
              <p className="text-xs text-gray-600 mt-1 max-w-sm">
                Address: {siteConfig.address.street}, {siteConfig.address.city}. Plus Code: {siteConfig.address.plusCode}
              </p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#111827] hover:bg-[#1E293B] text-white text-xs font-semibold rounded transition-colors inline-flex items-center gap-2"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}