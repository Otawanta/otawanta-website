import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';
import { ASSETS, FALLBACK_ASSETS } from '../../src/assets.js';

const galleryImages = [
  {
    id: 1,
    url: ASSETS.gallery[0],
    title: 'Live Performance'
  },
  {
    id: 2,
    url: ASSETS.gallery[1],
    title: 'Studio Session'
  },
  {
    id: 3,
    url: ASSETS.gallery[2],
    title: 'Club Night'
  },
  {
    id: 4,
    url: ASSETS.gallery[3],
    title: 'Festival Set'
  },
  {
    id: 5,
    url: ASSETS.gallery[4],
    title: 'Behind the Decks'
  },
  {
    id: 6,
    url: ASSETS.gallery[5],
    title: 'Sunset Session'
  }
];

export default function VisualGallery({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (isInView) {
      setActiveSection('gallery');
    }
  }, [isInView]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <ImageIcon className="w-8 h-8 text-white" />
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em]">
              VISUALS
            </h2>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
          <p className="text-gray-400 text-lg tracking-wider">
            Moments captured in time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative cursor-pointer aspect-square overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = FALLBACK_ASSETS.placeholder;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-light tracking-wider mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white">
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-sm tracking-wider">View</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-full max-h-full object-contain rounded-xl"
            onError={(e) => {
              e.target.src = FALLBACK_ASSETS.placeholder;
            }}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-gray-300 text-4xl font-light transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}
    </section>
  );
}