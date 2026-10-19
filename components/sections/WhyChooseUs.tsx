'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      title: 'Clear Project Scope & Expectations',
      desc: 'Defining parameters early to prevent confusion during construction phases.',
    },
    {
      title: 'Communication Throughout Execution',
      desc: 'Keeping property owners updated with straightforward progress reports.',
    },
    {
      title: 'Attention to Construction Details',
      desc: 'Focusing on standard structural practices and quality material handling.',
    },
    {
      title: 'Transparent Quotations',
      desc: 'Detailed breakdown of materials, labor expectations, and agreed payment terms.',
    },
    {
      title: 'Safety & Standard Compliance',
      desc: 'Adhering to local building practices and safe site protocols in Anambra State.',
    },
    {
      title: 'Budget-Aligned Solutions',
      desc: 'Matching client objectives with pragmatic, realistic construction plans.',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Considerations"
          title="Why Partner With Super Shelter Construction Ltd?"
          subtitle="Selecting the right team is essential for a stress-free construction experience. Here is what we aim to deliver to every client."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#F3F5F7] rounded-lg border border-gray-200 hover:border-[#DC2626]/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-[#DC2626] shrink-0" />
                <h3 className="text-base font-bold text-[#111827]">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}