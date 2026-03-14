'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { TESTIMONIALS } from '@/utils/constants';

interface ClientsSectionProps {
  dark?: boolean;
}

export const ClientsSection = ({ dark = true }: ClientsSectionProps) => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!autoplay) return;

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [current, autoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
    setAutoplay(false);
  };

  return (
    <SectionWrapper
      id="clients"
      title="Our Clients Trust Us"
      subtitle="Partner with industry leaders and innovators"
      dark
    >
      {/* Logo Grid */}
      <div className="mb-24">
        <h3 className="text-2xl font-bold text-slate-300 mb-12 text-center">
          Trusted by Industry Leaders
        </h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 lg:gap-10 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(6)].map((_, idx) => (
            <motion.div
              key={idx}
              className="h-20 bg-slate-700/40 hover:bg-slate-600/60 rounded-xl flex items-center justify-center text-slate-400 font-semibold transition-all duration-300 border border-slate-600/30"
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(71, 85, 105, 0.8)' }}
            >
              Logo {idx + 1}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-10 sm:p-14 border border-slate-700/50 shadow-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-yellow-400 text-2xl mb-6">
              {'⭐'.repeat(5)}
            </div>

            <p className="text-2xl text-slate-100 mb-8 italic leading-relaxed font-light">
              "{TESTIMONIALS[current].content}"
            </p>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {TESTIMONIALS[current].avatar}
              </div>
              <div>
                <p className="font-bold text-slate-100 text-lg">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-sm text-slate-400 font-medium">
                  {TESTIMONIALS[current].role}
                </p>
                <p className="text-sm text-blue-400 font-semibold">
                  {TESTIMONIALS[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex gap-3">
            {TESTIMONIALS.map((_, idx) => (
              <motion.button
                key={idx}
                className={`rounded-full transition-all ${
                  idx === current ? 'bg-orange-500 w-10 h-3' : 'bg-slate-600 w-3 h-3'
                }`}
                onClick={() => {
                  setCurrent(idx);
                  setAutoplay(false);
                }}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-5">
            <motion.button
              onClick={prev}
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={next}
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
