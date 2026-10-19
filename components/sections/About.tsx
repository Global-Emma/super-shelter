'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ShieldCheck, MessageCircle, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function About() {
  const principles = [
    {
      icon: ShieldCheck,
      title: 'Quality-Focused Work',
      description: 'Emphasizing high attention to detail and appropriate building practices across residential and commercial developments.',
    },
    {
      icon: MessageCircle,
      title: 'Clear Communication',
      description: 'Encouraging transparency about project scope, estimated timelines, material requirements, and expectations.',
    },
    {
      icon: FileCheck,
      title: 'Project Responsibility',
      description: 'Highlighting the importance of careful planning, structured coordination, and accountability on every site.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Super Shelter Construction Ltd"
          title="Your Construction Project Deserves a Serious Partner."
          subtitle="Super Shelter Construction Ltd is a construction business located in Awka, Anambra State. We welcome enquiries from individuals, property owners, businesses, and organizations seeking building solutions."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our goal is to understand each client’s requirements, communicate clearly, and help them identify the next step for their construction project in Awka and surrounding areas.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Whether you are planning a new residential property, commercial premises, structural additions, or building remodeling, we invite you to discuss your project parameters with us before work begins.
            </p>

            <div className="pt-2">
              <Link
                href="#enquire"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#111827] hover:bg-[#1E293B] text-white font-semibold text-sm rounded transition-colors"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#DC2626]" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {principles.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#F3F5F7] rounded-lg border border-gray-200 flex items-start gap-4"
                >
                  <div className="p-3 bg-[#DC2626]/10 text-[#DC2626] rounded-md shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111827]">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}