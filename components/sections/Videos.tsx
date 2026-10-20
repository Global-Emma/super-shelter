'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig, BusinessConfig } from '@/data/siteConfig';
import { Play, X, MapPin, Clock, Info } from 'lucide-react';
import Image from 'next/image';

const videoCategories = ['all', 'residential', 'commercial', 'structural', 'renovation', 'other'] as const;

export function Videos() {
  const [filter, setFilter] = useState<(typeof videoCategories)[number]>('all');
  const [selectedVideo, setSelectedVideo] = useState<BusinessConfig['WorkVideo'][number] | null>(null);
  const filterOptions: Array<{
    label: string;
    value: (typeof videoCategories)[number];
  }> = [
    { label: 'All Videos', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Structural', value: 'structural' },
    { label: 'Renovations', value: 'renovation' },
    { label: 'Other Footage', value: 'other' },
  ];

  const videoList = siteConfig.WorkVideo;

  const filteredVideos =
    filter === 'all'
      ? videoList
      : videoList.filter((v) => v.category === filter);

  return (
    <section id="videos" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="On-Site Footage & Highlights"
          title="Watch Our Construction Progress in Action"
          subtitle="Watch construction footage and project updates from Awka and Anambra State."
        />

        {/* Category Filters */}
        {videoList.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filterOptions.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                  filter === btn.value
                    ? 'bg-[#111827] text-white shadow-sm'
                    : 'bg-[#F3F5F7] text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {/* Video Cards Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                className="bg-[#F3F5F7] rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between group hover:border-[#DC2626]/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  {/* Video Thumbnail Area */}
                  <div className="relative h-56 bg-black overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Play Button Trigger */}
                    <button
                      onClick={() => setSelectedVideo(video)}
                      aria-label={`Play video: ${video.title}`}
                      className="absolute inset-0 flex items-center justify-center group/btn focus:outline-none"
                    >
                      <div className="w-14 h-14 bg-[#DC2626] text-white rounded-full flex items-center justify-center shadow-lg group-hover/btn:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-1" />
                      </div>
                    </button>

                    {/* Duration Badge */}
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#DC2626]" />
                        <span>{video.duration}</span>
                      </div>
                    )}

                    {/* Illustrative Flag */}
                    {video.isIllustrative && (
                      <div className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        Illustrative Footage
                      </div>
                    )}
                  </div>

                  {/* Info Meta */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#DC2626] font-semibold mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{video.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#111827] leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="w-full py-2.5 bg-[#111827] hover:bg-[#DC2626] text-white text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#F3F5F7] rounded-xl border border-dashed border-gray-300 max-w-xl mx-auto p-6">
            <Play className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h4 className="text-sm font-bold text-[#111827]">Video Media Placeholder</h4>
            <p className="text-xs text-gray-500 mt-1">
              On-site video recordings will appear here once authenticated project footage is updated.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal Video Player */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-[#111827] rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800 text-white">
                <div>
                  <h3 className="text-sm font-bold">{selectedVideo.title}</h3>
                  <p className="text-xs text-gray-400">{selectedVideo.location}</p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Responsive Video Frame */}
              <div className="relative aspect-video bg-black">
                {/\.(mp4|webm|ogg)(?:$|[?#])/i.test(selectedVideo.videoUrl) ? (
                  <video
                    src={selectedVideo.videoUrl}
                    poster={selectedVideo.thumbnail}
                    className="w-full h-full"
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support video playback.
                  </video>
                ) : (
                  <iframe
                    src={`${selectedVideo.videoUrl}${selectedVideo.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                    title={selectedVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 bg-[#111827] text-xs text-gray-300 border-t border-gray-800">
                <p>{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}