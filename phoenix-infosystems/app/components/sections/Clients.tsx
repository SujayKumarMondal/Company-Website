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
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-slate-300 mb-8 text-center">
          Trusted by Industry Leaders
        </h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(6)].map((_, idx) => (
            <motion.div
              key={idx}
              className="h-16 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-500 font-semibold hover:bg-slate-600 transition-colors"
              whileHover={{ scale: 1.05 }}
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
            className="bg-slate-800 rounded-xl p-8 sm:p-12 border border-slate-700"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-yellow-500 text-lg mb-4">
              {'⭐'.repeat(5)}
            </div>

            <p className="text-xl text-slate-100 mb-6 italic leading-relaxed">
              "{TESTIMONIALS[current].content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {TESTIMONIALS[current].avatar}
              </div>
              <div>
                <p className="font-bold text-slate-100">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-sm text-slate-400">
                  {TESTIMONIALS[current].role},{' '}
                  <span>{TESTIMONIALS[current].company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <motion.button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === current ? 'bg-orange-500' : 'bg-slate-600'
                }`}
                onClick={() => {
                  setCurrent(idx);
                  setAutoplay(false);
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <motion.button
              onClick={prev}
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
