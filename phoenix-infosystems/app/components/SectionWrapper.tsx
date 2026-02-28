'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { scrollVariants } from '@/utils/animations';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const SectionWrapper = ({
  children,
  id,
  className = '',
  title,
  subtitle,
  dark = false,
}: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={`relative w-full py-32 px-4 sm:px-6 lg:px-8 ${
        dark ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'
      } ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={scrollVariants}
    >
      {/* decorative shapes for lighter or dark sections */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {!dark ? (
          <>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          </>
        ) : (
          <>
            <div className="absolute top-0 right-0 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          </>
        )}
      </div>
      <div className="max-w-7xl mx-auto space-y-12 relative">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
                variants={scrollVariants}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className={`text-lg sm:text-xl ${
                  dark ? 'text-slate-300' : 'text-gray-600'
                } max-w-3xl mx-auto`}
                variants={scrollVariants}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
};
