'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { JOBS } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';
import { Button } from '@/components/Button';

interface CareersSectionProps {
  dark?: boolean;
}

export const CareersSection = ({ dark = false }: CareersSectionProps) => {
  return (
    <SectionWrapper
      id="careers"
      title="Join Our Team"
      subtitle="Be part of a dynamic team shaping the future of technology"
    >
      {/* Culture Description */}
      <motion.div
        className="bg-blue-50 rounded-xl p-8 mb-12 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Culture</h3>
        <p className="text-gray-700 leading-relaxed">
          At Phoenix Infosystems, we believe in fostering an environment of innovation,
          collaboration, and continuous learning. Our team is composed of passionate
          professionals who are committed to delivering excellence and pushing the boundaries
          of what's possible with technology.
        </p>
      </motion.div>

      {/* Job Listings */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {JOBS.map((job) => (
          <motion.div
            key={job.id}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-500 group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>

            <div className="space-y-2 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-blue-600" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-600" />
                <span>{job.type}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {job.description}
            </p>

            <motion.a
              href="#contact"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-orange-500 transition-colors"
              whileHover={{ x: 5 }}
            >
              Apply Now <ArrowRight size={16} className="ml-2" />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 mb-6">
          Don't see a position that matches your skills?
        </p>
        <Button variant="secondary" size="lg">
          Send Your Resume
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};
