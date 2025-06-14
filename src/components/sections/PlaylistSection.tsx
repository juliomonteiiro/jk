import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music2, Heart, Sparkles } from 'lucide-react';

const PlaylistSection: React.FC = () => {
  return (
    <section id="playlist" className="py-20 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(99, 102, 241, 0.1)' : 
                i % 3 === 1 ? 'rgba(139, 92, 246, 0.1)' : 
                'rgba(168, 85, 247, 0.1)'
              } 0%, transparent 70%)`,
              width: Math.random() * 250 + 100,
              height: Math.random() * 250 + 100,
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="mb-6"
          >
            <div className="flex justify-center space-x-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-blue-400"
              >
                <Music2 size={32} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-purple-400"
              >
                <Heart size={40} fill="currentColor" />
              </motion.div>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-indigo-400"
              >
                <Sparkles size={28} />
              </motion.div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Nossa Trilha Sonora do Amor
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            As melodias que embalam nosso coração e marcam cada momento especial da nossa jornada
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Spotify Playlist Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group mb-12"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              {/* Spotify Iframe Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                {/* Decorative frame */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl" />
                <div className="relative bg-black/20 p-2 rounded-2xl">
                  <iframe
  style={{ borderRadius: '12px' }}
  src="https://open.spotify.com/embed/playlist/04hfOfpq8yNcFqxDx2hqQ9?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
                </div>
              </motion.div>

              {/* Decorative elements around the player */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse" />
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-70 animate-pulse" style={{animationDelay: '0.5s'}} />
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute -bottom-2 -left-6 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.5s'}} />
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="mb-4"
              >
                <Sparkles size={48} className="text-purple-400 mx-auto" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;