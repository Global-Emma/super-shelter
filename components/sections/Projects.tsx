'use client';

import { useMemo, useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/siteConfig';
import { MapPin, Info, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const filterLabels = {
  all: 'All Works',
  residential: 'Residential',
  commercial: 'Commercial',
  renovation: 'Renovation',
} as const;

export function Projects() {
  const [filter, setFilter] = useState<keyof typeof filterLabels>('all');
  const [showAllProjects, setShowAllProjects] = useState(false);

  const uniqueProjects = useMemo(
    () => [...new Map(siteConfig.projects.map((project) => [project.image, project])).values()],
    [],
  );

  const filteredProjects = useMemo(
    () =>
      filter === 'all'
        ? uniqueProjects
        : uniqueProjects.filter((project) => project.category === filter),
    [filter, uniqueProjects],
  );

  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 9);

  return (
    <section id="projects" className="bg-[#F3F5F7] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio & Concepts"
          title="Explore Construction Work Examples"
          subtitle="Browse recent construction visuals, concept layouts, and project references that reflect the quality and style of our work in Awka."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {Object.entries(filterLabels).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setFilter(value as keyof typeof filterLabels);
                setShowAllProjects(false);
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                filter === value
                  ? 'bg-[#111827] text-white shadow-sm'
                  : 'border border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          <span>
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
          <span className="h-px flex-1 bg-gray-300" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.image}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {project.isIllustrative && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#DC2626]/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    <Info className="h-3 w-3" />
                    Illustrative
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-[#B91C1C]">
                  <MapPin className="h-3.5 w-3.5 text-[#DC2626]" />
                  <span>{project.location}</span>
                </div>

                <h3 className="text-lg font-bold text-[#111827]">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{project.description}</p>

                <div className="mt-auto pt-5">
                  <Link
                    href="#enquire"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#B91C1C] transition-colors hover:text-[#DC2626]"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length > 9 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((showAll) => !showAll)}
              className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#DC2626]"
              aria-expanded={showAllProjects}
            >
              {showAllProjects ? 'Show fewer images' : `View all ${filteredProjects.length} images`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}