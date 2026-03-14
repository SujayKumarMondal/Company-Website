'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { COMPANY_INFO } from '@/utils/constants';

export const HeroSection = () => {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80")',
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Animated accent shapes */}
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl xl:max-w-350 mx-auto px-6 sm:px-8 lg:px-10 py-32 text-center">
        {/* Tagline */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/20">
            Welcome to {COMPANY_INFO.name}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Transform Your{' '}
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
            Business Today
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-md font-light"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {COMPANY_INFO.tagline} — Empowering enterprises with innovative technology
          solutions that drive growth and digital excellence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-20 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={() => handleScroll('#services')}
            className="group bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8"
          >
            Get Started <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleScroll('#contact')}
            className="px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Contact Us
          </Button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { label: 'Years of Excellence', value: '14+' },
            { label: 'Global Clients', value: '500+' },
            { label: 'Projects Completed', value: '1000+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10"
              whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-blue-300 mb-2">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-gray-200 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <svg
            className="w-7 h-7 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
