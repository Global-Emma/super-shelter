'use client';

import { MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppLink } from '@/lib/utils';

export function FloatingWhatsApp() {
  if (!siteConfig.whatsappConfirmed || !siteConfig.whatsappPhone) {
    return null;
  }

  const defaultMsg = `Hello Super Shelter Construction Ltd, I found your website and would like to discuss a construction project in Awka. Please let me know how we can proceed.`;
  const href = buildWhatsAppLink(defaultMsg, siteConfig.whatsappPhone);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2 font-medium text-xs sm:text-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}