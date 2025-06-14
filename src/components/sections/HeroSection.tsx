import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Sparkles, Star } from 'lucide-react';

interface HeroSectionProps {
  onScrollToNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToNext }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #6366f1 50%, #8b5cf6 75%, #a855f7 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(99, 102, 241, 0.3)' : 
                i % 3 === 1 ? 'rgba(139, 92, 246, 0.3)' : 
                'rgba(168, 85, 247, 0.3)'
              } 0%, transparent 70%)`,
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
        
        {/* Sparkles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-white/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              rotate: [null, Math.random() * 360 + 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 25 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {i % 2 === 0 ? <Sparkles size={Math.random() * 20 + 10} /> : <Star size={Math.random() * 15 + 8} />}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Floating Hearts Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-blue-300"
            >
              <Heart size={40} fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="text-purple-300"
            >
              <Heart size={60} fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="text-indigo-300"
            >
              <Heart size={40} fill="currentColor" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mb-6"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Feliz Dia dos Namorados
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
            <p
              className="relative text-2xl md:text-4xl text-white/90 mb-8 font-semibold"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              Minha Princesa✨
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Este site é uma forma de demonstrar meu amor do meu jeito, para você meu amor.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            onClick={onScrollToNext}
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-2xl shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-medium">Descobrir Nossa História Mágica</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} />
            </motion.div>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={onScrollToNext}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-white/60 hover:text-white transition-colors group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium opacity-80">Deslize para baixo</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-900/50 to-transparent" />
    </section>
  );
};

export default HeroSection;