'use client';

import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/Hero';
import { ServicesSection } from '@/components/sections/Services';
import { AboutSection } from '@/components/sections/About';
import { ClientsSection } from '@/components/sections/Clients';
import { GallerySection } from '@/components/sections/Gallery';
import { CareersSection } from '@/components/sections/Careers';
import { ContactSection } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full space-y-32">
      <Navbar />
      <HeroSection />
      <ServicesSection dark />
      <AboutSection />
      <ClientsSection dark />
      <GallerySection />
      <CareersSection dark />
      <ContactSection />
      <Footer />
    </main>
  );
}
