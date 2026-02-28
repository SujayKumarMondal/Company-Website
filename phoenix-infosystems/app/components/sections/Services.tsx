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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
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
              className="group bg-white rounded-xl shadow-lg border border-gray-200 p-10 hover:shadow-2xl transition-all duration-300 hover:border-blue-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 inline-block p-3 bg-linear-to-br from-blue-100 to-orange-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                {Icon && (
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-orange-500 transition-colors" />
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <motion.a
                href="#contact"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-orange-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn more
                <span className="ml-2">→</span>
              </motion.a>

              {/* Decorative Border */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-orange-500/0 rounded-xl group-hover:from-blue-600/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};
