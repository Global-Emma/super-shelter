'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Hero() {
  return (
    <section id="hero" className="relative bg-[#111827] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Graphic Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=2000')`,
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#111827] via-[#111827]/90 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#DC2626]/20 border border-[#DC2626]/60 rounded-full text-xs font-semibold tracking-wide text-red-200 uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>Awka, Anambra State, Nigeria</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Building Strong Foundations.{' '}
              <span className="text-[#DC2626]">Creating Spaces for the Future.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              From building projects to construction solutions, Super Shelter Construction Ltd is here to help you move your vision from plan to reality. Speak with our team about your next project in Awka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#enquire"
                className="px-6 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold rounded transition-all text-center shadow-lg hover:shadow-red-600/20"
              >
                Discuss Your Project
              </Link>
              <Link
                href="#services"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded border border-white/20 transition-all text-center"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-gray-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Locally Based in Awka</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Direct Phone Contact</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Project Enquiries Welcomed</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase Card */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-2xl bg-[#1E293B]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Residential Building Construction"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-6 bg-[#1E293B] text-white">
                <div className="text-xs uppercase font-semibold text-[#DC2626] mb-1">
                  Verified Local Contact
                </div>
                <div className="text-lg font-bold">Ready to Start Construction?</div>
                <p className="text-sm text-gray-400 mt-1 mb-4">
                  Call directly to confirm scope and discuss site details in Awka.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call {siteConfig.displayPhone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}