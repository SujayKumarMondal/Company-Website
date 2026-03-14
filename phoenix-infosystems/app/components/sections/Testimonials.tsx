'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { TESTIMONIALS } from '@/utils/constants';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setAutoplay(false);
  };

  return (
    <SectionWrapper
      id="testimonials"
      title="Testimonials"
      subtitle="See what people have to say about us"
      dark={false}
    >
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4"
          >
            <div className="mb-10">
              <p className="text-2xl sm:text-3xl text-gray-800 italic mb-8 leading-relaxed font-light">
                "{TESTIMONIALS[currentIndex].content}"
              </p>
              <div className="flex items-center justify-center gap-5">
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center text-4xl shadow-md">
                  {TESTIMONIALS[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-600 font-medium">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                  <p className="text-sm text-blue-600 font-semibold">
                    {TESTIMONIALS[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <motion.button
            onClick={goToPrevious}
            className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-3">
            {TESTIMONIALS.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setAutoplay(false);
                }}
                className={`rounded-full transition-all ${
                  idx === currentIndex ? 'bg-blue-600 w-10 h-3' : 'bg-gray-300 w-3 h-3'
                }`}
                whileHover={{ scale: 1.3 }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={goToNext}
            className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>
      </div>
    </SectionWrapper>
  );
};
