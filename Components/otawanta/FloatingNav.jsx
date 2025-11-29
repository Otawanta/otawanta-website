import React from 'react';
import { motion } from 'framer-motion';
import { Home, Music, Video, Mail, ShoppingBag } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'music', icon: Music, label: 'Music' },
  { id: 'videos', icon: Video, label: 'Videos' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];

export default function FloatingNav({ activeSection }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col gap-6 bg-black border border-gray-700 rounded-full py-6 px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative transition-all duration-300 ${
              activeSection === item.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black border border-gray-700 px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
}