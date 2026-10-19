'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';

export function Process() {
  const steps = [
    {
      num: '01',
      title: 'Initial Consultation',
      desc: 'The client explains the proposed project location, objectives, requirements, and general timeline.',
    },
    {
      num: '02',
      title: 'Scope & Assessment',
      desc: 'Discussing the planned work, site considerations, materials, and details needed for an accurate quotation.',
    },
    {
      num: '03',
      title: 'Planning & Agreement',
      desc: 'Clarifying the project scope, pricing, payment schedule, responsibilities, and terms before construction begins.',
    },
    {
      num: '04',
      title: 'Execution & Updates',
      desc: 'Proceeding according to the agreed scope with clear communication and periodic site updates.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow Journey"
          title="A Clearer Path From Idea to Construction"
          subtitle="Our suggested project journey ensures clarity, proper planning, and mutual understanding at every phase."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="p-6 bg-[#F3F5F7] rounded-lg border border-gray-200 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-[#DC2626] block mb-2">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-[#111827] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}