'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Smile, Trophy } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { STATISTICS } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

const iconMap: Record<string, React.ComponentType<any>> = {
  Clock,
  CheckCircle,
  Smile,
  Trophy,
};

const Counter = ({ value, label }: { value: number | string; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value !== 'number') return;

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
      <div className="text-5xl sm:text-6xl font-bold bg-linear-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
        {typeof value === 'number' ? Math.floor(count) : value}+
      </div>
      <p className="text-gray-600 text-lg font-medium">{label}</p>
    </motion.div>
  );
};

export const StatisticsSection = () => {
  return (
    <SectionWrapper
      id="statistics"
      title="Our Success Metrics"
      subtitle="Proven impact and growth through numbers"
      dark={true}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {STATISTICS.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <motion.div
              key={stat.id}
              className="group text-center p-10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
            >
              {Icon && (
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                >
                  <Icon size={48} className="text-blue-300" />
                </motion.div>
              )}
              <Counter value={stat.value} label={stat.label} />
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};
