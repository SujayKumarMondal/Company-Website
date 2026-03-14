'use client';

import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Shield,
  Cpu,
  GitBranch,
  BarChart3,
} from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SERVICES } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

const iconMap: Record<string, React.ComponentType<any>> = {
  Cloud,
  Zap,
  Shield,
  Cpu,
  GitBranch,
  BarChart3,
};

interface ServicesSectionProps {
  dark?: boolean;
}

export const ServicesSection = ({ dark = false }: ServicesSectionProps) => {
  return (
    <SectionWrapper
      id="services"
      title="Our Services"
      subtitle="Comprehensive solutions tailored to drive your business forward"
      dark={dark}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-11"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-8 lg:p-9 transition-all duration-300 hover:border-blue-400 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="mb-6 inline-block p-3 bg-linear-to-br from-blue-100 to-orange-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {Icon && (
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-orange-500 transition-colors" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                {service.description}
              </p>

              <motion.a
                href="#contact"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-orange-500 transition-colors group/link"
                whileHover={{ x: 5 }}
              >
                Learn more
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </motion.a>

              {/* Decorative Border */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-orange-500/0 rounded-2xl group-hover:from-blue-600/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};
