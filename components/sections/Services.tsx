'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proposed Construction Services"
          title="Construction Solutions for Your Next Project"
          subtitle="Every successful building project starts with the right conversations, careful planning, and a clear understanding of the work involved."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#111827]/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                    Proposed Service
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#DC2626] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`#enquire`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] hover:text-[#DC2626] transition-colors"
                >
                  <span>Enquire About This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}