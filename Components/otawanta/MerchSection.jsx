import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { ASSETS, FALLBACK_ASSETS } from '../../src/assets.js';

// Simple Button component to replace the missing one
const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg transition-colors font-medium';
  const variantClasses = variant === 'outline' 
    ? 'border border-gray-600 text-white hover:bg-gray-800' 
    : 'bg-blue-600 hover:bg-blue-700 text-white';
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const merchItems = [
  {
    id: 1,
    name: 'OTAWANTA Black Tee',
    price: '$35',
    image: ASSETS.merch[0].image,
    category: 'Apparel'
  },
  {
    id: 2,
    name: 'Minimal Logo Cap',
    price: '$25',
    image: ASSETS.merch[1].image,
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Limited Edition Vinyl',
    price: '$45',
    image: ASSETS.merch[2].image,
    category: 'Music'
  },
  {
    id: 4,
    name: 'Tech House Hoodie',
    price: '$55',
    image: ASSETS.merch[3].image,
    category: 'Apparel'
  }
];

export default function MerchSection({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      setActiveSection('merch');
    }
  }, [isInView]);

  return (
    <section
      id="merch"
      ref={ref}
      className="min-h-screen py-32 px-6 relative"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Floating visual element */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-40 right-20 w-48 h-48 rounded-full overflow-hidden opacity-10 hidden xl:block"
      >
        <img 
          src={ASSETS.hero.backgroundImage} 
          alt="" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = FALLBACK_ASSETS.placeholder;
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <ShoppingBag className="w-8 h-8 text-white" />
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em]">
              MERCH
            </h2>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
          <p className="text-gray-400 text-lg tracking-wider">
            Official merchandise & limited editions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {merchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-black/80 backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden hover:border-white transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = FALLBACK_ASSETS.placeholder;
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light tracking-wider mb-2 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-light text-white mb-4">
                    {item.price}
                  </p>
                  <Button
                    className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://shop.otawanta.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#00f0ff] hover:text-white transition-colors text-lg tracking-wider"
          >
            <span>Visit Full Store</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}