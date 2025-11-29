import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Video, Play } from 'lucide-react';
import { ASSETS, FALLBACK_ASSETS } from '../../src/assets.js';

const videos = [
  {
    id: 'video1',
    title: 'Otawanta b2b Thonis @ De Roulatie',
    embedId: 'mHb8tMFyajk',
    thumbnail: `https://img.youtube.com/vi/mHb8tMFyajk/maxresdefault.jpg`
  },
  {
    id: 'video2',
    title: 'Minimal House / Techno Mix | Vol 2',
    embedId: 'JC2dti588iY',
    thumbnail: `https://img.youtube.com/vi/JC2dti588iY/maxresdefault.jpg`
  },
  {
    id: 'video3',
    title: 'DIVE DEEP THÖNIGHT Livestream 001 w/ Thönis B2B Otawanta',
    embedId: 'co_vbCyLpwk',
    thumbnail: `https://img.youtube.com/vi/co_vbCyLpwk/maxresdefault.jpg`
  }
];

export default function VideoSection({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (isInView) {
      setActiveSection('videos');
    }
  }, [isInView]);

  return (
    <section
      id="videos"
      ref={ref}
      className="min-h-screen py-32 px-6 relative"
    >
      {/* Background with image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${ASSETS.gallery[0]})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Video className="w-8 h-8 text-white" />
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em]">
              SESSIONS
            </h2>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
          <p className="text-gray-400 text-lg tracking-wider">
            Watch the latest DJ sets and performances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-black/80 backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden hover:border-white transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  {activeVideo === video.id ? (
                    /* Embedded YouTube video */
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0`}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    /* Video thumbnail with play button */
                    <>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = FALLBACK_ASSETS.placeholder;
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onClick={() => setActiveVideo(video.id)}
                          className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
                        >
                          <Play className="w-8 h-8 text-black ml-1" />
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light tracking-wider text-white group-hover:text-gray-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 tracking-wider">
                    DJ SET
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://youtube.com/@otawanta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg tracking-wider"
          >
            <span>More on YouTube</span>
            <span className="text-2xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}