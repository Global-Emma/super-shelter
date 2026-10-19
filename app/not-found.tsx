import Link from 'next/link';
import { Building2, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-[#DC2626] rounded-lg flex items-center justify-center text-white mb-6">
        <Building2 className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-extrabold text-white mb-2">404</h1>
      <h2 className="text-2xl font-bold text-[#DC2626] mb-4">Page Not Found</h2>
      <p className="text-gray-300 max-w-md mb-8 text-sm">
        The page you are looking for does not exist or has been moved. You can return to our home page or reach out directly regarding your project enquiry.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold rounded text-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded text-sm transition-all border border-white/20"
        >
          Call Us: {siteConfig.displayPhone}
        </a>
      </div>
    </div>
  );
}