'use client';

import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { ServicesSection } from '@/components/sections/Services';
import { StatisticsSection } from '@/components/sections/Statistics';
import { GallerySection } from '@/components/sections/Gallery';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { ClientsSection } from '@/components/sections/Clients';
import { TeamSection } from '@/components/sections/Team';
import { ContactSection } from '@/components/sections/Contact';
import { FAQSection } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection dark />
      <StatisticsSection />
      <GallerySection dark />
      <TestimonialsSection />
      <ClientsSection dark />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
