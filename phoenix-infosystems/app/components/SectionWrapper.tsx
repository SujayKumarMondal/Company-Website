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
      className={`relative w-full py-24 lg:py-32 ${
        dark ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'
      } ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={scrollVariants}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {!dark ? (
          <>
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-10" />
            <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-10" />
          </>
        ) : (
          <>
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-slate-700 rounded-full blur-3xl opacity-10" />
            <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-slate-600 rounded-full blur-3xl opacity-10" />
          </>
        )}
      </div>

      <div className="relative max-w-7xl xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 space-y-20">

        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto">
            {title && (
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
                variants={scrollVariants}
              >
                {title}
              </motion.h2>
            )}

            {subtitle && (
              <motion.p
                className={`text-lg sm:text-xl ${
                  dark ? 'text-slate-300' : 'text-gray-600'
                }`}
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