'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/siteConfig';
import { MapPin, Info } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'renovation'>('all');

  const filteredProjects =
    filter === 'all'
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio & Concepts"
          title="Explore Construction Work Examples"
          subtitle="Explore concept representations and illustrative project execution examples for modern building structures."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { label: 'All Works', value: 'all' },
            { label: 'Residential', value: 'residential' },
            { label: 'Commercial', value: 'commercial' },
            { label: 'Renovation', value: 'renovation' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value as 'all' | 'residential' | 'commercial' | 'renovation')}
              className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${
                filter === btn.value
                  ? 'bg-[#111827] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.isIllustrative && (
                    <div className="absolute top-3 right-3 bg-[#DC2626]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Illustrative Sample
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#B91C1C] font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#111827]">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="#enquire"
                  className="block w-full text-center py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-semibold rounded transition-colors"
                >
                  Discuss a Similar Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}