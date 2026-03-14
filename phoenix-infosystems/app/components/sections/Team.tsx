'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { TEAM_MEMBERS } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

const socialIconMap: Record<string, React.ComponentType<any>> = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
};

export const TeamSection = () => {
  return (
    <SectionWrapper
      id="team"
      title="Our Team"
      subtitle="Meet the talented professionals driving our success"
      dark={false}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-9"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {TEAM_MEMBERS.map((member) => (
          <motion.div
            key={member.id}
            className="group"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-2xl mb-5 shadow-lg hover:shadow-xl transition-shadow">
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-end justify-center pb-5 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {member.socials &&
                  Object.entries(member.socials).map(([key, url]) => {
                    const Icon = socialIconMap[key];
                    return Icon ? (
                      <motion.a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    ) : null;
                  })}
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {member.name}
            </h3>
            <p className="text-blue-600 font-semibold text-base">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
