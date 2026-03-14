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
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Content */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Story</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Founded in {COMPANY_INFO.yearFounded}, Phoenix Infosystems has evolved into a
            trusted technology partner for enterprises across sectors. Our commitment to
            excellence and innovation drives every project we undertake.
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
              <p className="text-gray-600 text-base leading-relaxed">{COMPANY_INFO.mission}</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
              <p className="text-gray-600 text-base leading-relaxed">{COMPANY_INFO.vision}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h4>
            <ul className="space-y-4">
              {[
                'Industry-leading expertise and innovation',
                'Customer-centric approach and support',
                'Proven track record of successful projects',
                'Cutting-edge technology stack',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start"
                  whileHover={{ x: 8 }}
                >
                  <span className="inline-block w-4 h-4 bg-blue-600 rounded-full mt-1.5 mr-5 shrink-0" />
                  <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          className="relative"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative w-full h-96 bg-linear-to-br from-blue-400 via-blue-500 to-orange-400 rounded-2xl shadow-2xl overflow-hidden">
            <motion.div
              className="w-full h-full flex items-center justify-center text-white text-7xl font-bold"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              🚀
            </motion.div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/30 rounded-full blur-3xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl" />
        </motion.div>
      </motion.div>

      {/* Counters */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-9 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-12 lg:p-16 border border-slate-200/50 shadow-sm"
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
