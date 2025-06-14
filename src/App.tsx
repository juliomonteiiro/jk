import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import TimelineSection from './components/sections/TimelineSection';
import GallerySection from './components/sections/GallerySection';
import LetterSection from './components/sections/LetterSection';
import CounterSection from './components/sections/CounterSection';
import PlaylistSection from './components/sections/PlaylistSection';
import FinalSection from './components/sections/FinalSection';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'timeline', 'gallery', 'letter', 'counter', 'playlist', 'final'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollToNext = () => {
    scrollToSection('timeline');
  };

  const scrollToTop = () => {
    scrollToSection('hero');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white mb-4"
          >
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-xl font-semibold"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Preparando algo especial para você, Kemily... ❤️
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      
      <main>
        <HeroSection onScrollToNext={scrollToNext} />
        <TimelineSection />
        <GallerySection />
        <LetterSection />
        <CounterSection />
        <PlaylistSection />
        <FinalSection onScrollToTop={scrollToTop} />
      </main>
    </div>
  );
}

export default App;