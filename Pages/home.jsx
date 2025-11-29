import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Instagram, Youtube, Music, Mail, ShoppingBag, Facebook } from 'lucide-react';
import HeroSection from '../Components/otawanta/HeroSection.jsx';
import SocialLinks from '../Components/otawanta/SocialLinks.jsx';
import SpotifySection from '../Components/otawanta/SpotifySection.jsx';
import VideoSection from '../Components/otawanta/VideoSection.jsx';
import ContactForm from '../Components/otawanta/ContactForm.jsx';
import FloatingNav from '../Components/otawanta/FloatingNav.jsx';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <FloatingNav activeSection={activeSection} />
      
      <HeroSection setActiveSection={setActiveSection} />
      
      <SocialLinks setActiveSection={setActiveSection} />
      
      <SpotifySection setActiveSection={setActiveSection} />
      
      <VideoSection setActiveSection={setActiveSection} />
      
      <ContactForm setActiveSection={setActiveSection} />
      
      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-700">
        <p>© 2025 OTAWANTA. All rights reserved.</p>
        <p className="mt-2">Minimal Deep / Tech House</p>
      </footer>
    </div>
  );
}