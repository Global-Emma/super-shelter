// components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, Building2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111827] shadow-xl py-2.5' : 'bg-[#111827]/95 backdrop-blur-md py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark & Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            {/* White container so the white logo background blends seamlessly */}
            <div className="relative w-12 h-10 bg-white rounded-md flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm shrink-0 p-0.5">
              {!logoError ? (
                <Image
                  src="/logo.png"
                  alt={`${siteConfig.name} Logo`}
                  fill
                  sizes="48px"
                  className="object-contain"
                  onError={() => setLogoError(true)}
                  priority
                />
              ) : (
                <Building2 className="w-6 h-6 text-[#DC2626]" />
              )}
            </div>
            <div>
              <span className="block font-bold text-lg leading-tight tracking-wider text-white group-hover:text-red-400 transition-colors">
                SUPER SHELTER
              </span>
              <span className="block text-[10px] tracking-widest text-[#DC2626] font-extrabold uppercase">
                CONSTRUCTION LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-[#DC2626] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC2626] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Call & Quote CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors"
            >
              <div className="p-1.5 bg-[#DC2626]/20 rounded-full text-[#DC2626]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">{siteConfig.displayPhone}</span>
            </a>
            <Link
              href="#enquire"
              className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded transition-all shadow-md hover:shadow-red-600/30"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-200 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#DC2626]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#111827] border-b border-gray-800 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-gray-200 hover:text-[#DC2626] py-1.5 font-medium transition-colors border-b border-gray-800/50"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 flex flex-col space-y-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 text-gray-200 text-sm font-medium py-2 bg-gray-800/60 rounded"
            >
              <Phone className="w-4 h-4 text-[#DC2626]" />
              <span>{siteConfig.displayPhone}</span>
            </a>
            <Link
              href="#enquire"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold rounded text-sm shadow-md"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}