'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { FAQs } from '@/utils/constants';
import { itemVariants, containerVariants } from '@/utils/animations';

export const FAQSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <SectionWrapper
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Get answers to common questions about our services"
      dark={false}
    >
      <motion.div
        className="max-w-4xl mx-auto space-y-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {FAQs.map((faq) => (
          <motion.div
            key={faq.id}
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
            variants={itemVariants}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-7 py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-left font-semibold text-gray-900 text-lg leading-snug">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 ml-6"
              >
                <ChevronDown size={28} className="text-blue-600" />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeId === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-7 py-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
