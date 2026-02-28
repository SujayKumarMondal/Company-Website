'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { COMPANY_INFO } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

const Counter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = value / 50;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + increment > value) {
          clearInterval(timer);
          return value;
        }
        return prev + increment;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div className="text-center" variants={itemVariants}>
      <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
        {Math.floor(count)}+
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

interface AboutSectionProps {
  dark?: boolean;
}

export const AboutSection = ({ dark = false }: AboutSectionProps) => {
  return (
    <SectionWrapper
      id="about"
      title="About Phoenix Infosystems"
      subtitle="Pioneering digital transformation since 2010"
      dark={dark}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Content */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Founded in {COMPANY_INFO.yearFounded}, Phoenix Infosystems has evolved into a
            trusted technology partner for enterprises across sectors. Our commitment to
            excellence and innovation drives every project we undertake.
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-600">{COMPANY_INFO.mission}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
              <p className="text-gray-600">{COMPANY_INFO.vision}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Why Choose Us</h4>
            <ul className="space-y-2">
              {[
                'Industry-leading expertise and innovation',
                'Customer-centric approach and support',
                'Proven track record of successful projects',
                'Cutting-edge technology stack',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          className="relative"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-full h-96 bg-linear-to-br from-blue-400 to-orange-400 rounded-lg shadow-xl overflow-hidden">
            <motion.div
              className="w-full h-full flex items-center justify-center text-white text-6xl font-bold"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              🚀
            </motion.div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
        </motion.div>
      </motion.div>

      {/* Counters */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 bg-slate-50 rounded-xl p-16 border border-slate-200"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Counter value={14} label="Years in Business" />
        <Counter value={500} label="Clients Worldwide" />
        <Counter value={1000} label="Projects Completed" />
        <Counter value={150} label="Team Members" />
      </motion.div>
    </SectionWrapper>
  );
};
