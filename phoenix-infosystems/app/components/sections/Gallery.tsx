'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { SectionWrapper } from '@/components/SectionWrapper';
import { GALLERY_IMAGES } from '@/utils/constants';
import { containerVariants, itemVariants } from '@/utils/animations';

interface GallerySectionProps {
  dark?: boolean;
}

export const GallerySection = ({ dark = false }: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null);

  return (
    <SectionWrapper
      id="gallery"
      title="Our Work"
      subtitle="Showcasing our latest projects and achievements"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {GALLERY_IMAGES.map((image) => (
          <motion.div
            key={image.id}
            className="relative h-64 sm:h-80 rounded-lg overflow-hidden cursor-pointer group shadow-lg"
            variants={itemVariants}
            onClick={() => setSelectedImage(image)}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
              >
                {image.title}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.alt}</p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};
