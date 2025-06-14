import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Sparkles, Star } from 'lucide-react';

interface FinalSectionProps {
  onScrollToTop: () => void;
}

const FinalSection: React.FC<FinalSectionProps> = ({ onScrollToTop }) => {
  return (
    <section id="final" className="py-20 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              rotate: [null, Math.random() * 360 + 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {i % 2 === 0 ? (
              <Heart size={Math.random() * 35 + 15} />
            ) : (
              <Sparkles size={Math.random() * 25 + 12} />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <div className="flex justify-center space-x-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-white"
              >
                <Sparkles size={40} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white"
              >
                <Heart size={80} fill="currentColor" />
              </motion.div>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-white"
              >
                <Star size={36} />
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mb-6"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Para Sempre e Sempre
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Este site é apenas uma pequena forma de expressar o quanto você significa para mim. 
            Cada momento, cada risada, cada lágrima compartilhada, tudo isso constrói a nossa linda história.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl text-white/80 mb-12"
          >
            Eu te amo eternamente, meu amor. ❤️
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="space-y-8"
          >
              
              <motion.button
                onClick={onScrollToTop}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp size={20} />
                </motion.div>
                <span className="font-semibold">Voltar ao Início</span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/10 transition-all duration-300" />
              </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
    </section>
  );
};

export default FinalSection;