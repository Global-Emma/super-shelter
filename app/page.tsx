import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsapp';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { FAQ } from '@/components/sections/FAQ';
import { ContactLocation } from '@/components/sections/ContactLocation';
import { EnquiryForm } from '@/components/sections/EnquiryForm';
import { JsonLd } from '@/components/ui/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Process />
        <EnquiryForm />
        <FAQ />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}