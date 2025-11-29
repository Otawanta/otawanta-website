import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music } from 'lucide-react';
import { ASSETS } from '../../src/assets.js';

export default function SpotifySection({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setActiveSection('music');
    }
  }, [isInView]);

  return (
    <section
      id="music"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-32 px-6 relative"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: `url(${ASSETS.gallery[2]})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Music className="w-8 h-8 text-white" />
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em]">
              SOUNDS
            </h2>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
          <p className="text-gray-400 text-lg tracking-wider">
            Experience the deep minimal grooves
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black/80 backdrop-blur-sm border border-gray-600 rounded-3xl p-8 hover:border-white transition-all duration-300">
            {/* Spotify Embed - Replace with actual Spotify playlist/artist URL */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/5pPyKfYrZazFK0mMsWtB8Q?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <a
              href="https://open.spotify.com/artist/your-artist-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg tracking-wider"
            >
              <span>Stream on Spotify</span>
              <span className="text-2xl">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}