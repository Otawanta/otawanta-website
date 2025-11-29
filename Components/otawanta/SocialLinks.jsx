import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Youtube, Facebook, Music2, ExternalLink } from 'lucide-react';
import { ASSETS } from '../../src/assets.js';

const socialLinks = [
  { 
    name: 'Instagram', 
    icon: Instagram, 
    url: 'https://instagram.com/otawanta',
    color: 'from-purple-600 to-pink-600'
  },
  { 
    name: 'YouTube', 
    icon: Youtube, 
    url: 'https://youtube.com/@otawanta',
    color: 'from-red-600 to-red-700'
  },
  { 
    name: 'SoundCloud', 
    icon: Music2, 
    url: 'https://soundcloud.com/otawanta',
    color: 'from-orange-600 to-orange-700'
  },
  { 
    name: 'Facebook', 
    icon: Facebook, 
    url: 'https://facebook.com/otawanta',
    color: 'from-blue-600 to-blue-700'
  }
];

export default function SocialLinks({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setActiveSection('social');
    }
  }, [isInView]);

  return (
    <section
      id="social"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-32 px-6 relative"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${ASSETS.gallery[1]})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] mb-6">
            CONNECT
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-black/80 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 text-center hover:border-white transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light tracking-wider mb-2">{social.name}</h3>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm group-hover:text-white transition-colors">
                  <span>Follow</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}