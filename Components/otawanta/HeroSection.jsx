import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ASSETS, FALLBACK_ASSETS } from '../../src/assets.js';

export default function HeroSection({ setActiveSection }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('hero');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ASSETS.hero.backgroundImage})`,
          }}
          onError={(e) => {
            e.target.style.backgroundImage = `url(${FALLBACK_ASSETS.placeholder})`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </motion.div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, transparent 70%)',
            y
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Actual logo */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl shadow-white/20">
                <img 
                  src={ASSETS.logo}
                  alt="OTAWANTA Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if logo fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-6xl md:text-7xl font-bold text-black">OW</span>
                </div>
              </div>
              {/* Animated ring around logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-white/40"
              />
            </div>
          </motion.div>

          <h1 className="text-7xl md:text-8xl font-light tracking-[0.3em] mb-6 text-white drop-shadow-2xl">
            OTAWANTA
          </h1>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-300 tracking-[0.2em] font-light">
            MINIMAL DEEP / TECH HOUSE
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}