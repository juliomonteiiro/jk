import React from 'react';
import { motion } from 'framer-motion';
import { Heart, PenTool, Quote, Sparkles, Star } from 'lucide-react';

const LetterSection: React.FC = () => {
  return (
    <section id="letter" className="py-20 bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
            }}
            animate={{
              rotate: [null, Math.random() * 360 + 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {i % 2 === 0 ? (
              <Heart size={Math.random() * 30 + 15} className="text-purple-400/10" />
            ) : (
              <Sparkles size={Math.random() * 25 + 12} className="text-blue-400/10" />
            )}
          </motion.div>
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
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-purple-400"
              >
                <PenTool size={28} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blue-400"
              >
                <Heart size={40} fill="currentColor" />
              </motion.div>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-indigo-400"
              >
                <Sparkles size={28} />
              </motion.div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Carta
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Dessa vez, não é uma carta a mão, mas continua tendo todo o meu amor por você.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

            {/* Letter Paper Effect */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
              {/* Letter Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50" />
                <div className="relative flex items-center justify-center space-x-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <PenTool size={28} />
                  </motion.div>
                  <span className="text-2xl font-bold" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    Para o meu amor
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart size={28} fill="currentColor" />
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 text-white/30">
                  <Sparkles size={20} />
                </div>
                <div className="absolute bottom-4 right-4 text-white/30">
                  <Star size={18} />
                </div>
              </div>

              {/* Letter Content */}
              <div className="p-8 md:p-12 space-y-8 text-white/90 leading-relaxed">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <Quote className="text-purple-400 flex-shrink-0 mt-2" size={32} />
                  <p className="text-xl md:text-2xl italic text-purple-200 font-medium" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    "Meu amor..."
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base md:text-lg"
                >
                  Com o passar do tempo, tenho aprendido, a cada dia, a te amar ainda mais e a entender a importância de demonstrar isso para você.
                  Às vezes, na correria do dia a dia, talvez eu não consiga mostrar o quanto você é importante para mim,
                  mas saiba que você é a razão do meu sorriso, a luz dos meus dias e a paz do meu coração.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-base md:text-lg"
                >
                  Você é o meu maior presente, a pessoa que faz meu coração bater mais forte e me faz acreditar que tudo é possível.
                  Estar ao seu lado é um sonho inesquecível e maravilhoso, e eu sou eternamente grato por cada momento que compartilhamos.
                  O seu sorriso é o melhor remédio para os meus dias difíceis, e o seu amor é a força que me impulsiona a ser uma pessoa melhor.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-base md:text-lg"
                >
                  Você não é apenas minha namorada, é também minha melhor amiga, minha confidente, minha parceira de vida
                  e a minha alma gêmea. Ao seu lado, me sinto amado, seguro e completo.
                  Palavras jamais serão suficientes para expressar o quanto você significa para mim,
                  mas espero que esta carta consiga transmitir ao menos um pouco do meu amor por você.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-base md:text-lg"
                >
                  Obrigado por ser exatamente quem você é, por me amar e por me fazer sentir tão especial.
                  Você é a razão do meu sorriso, a luz dos meus dias e a paz do meu coração.
                  Agora, cá estou eu... ansioso para te ver. E mesmo que este gesto seja simples, é feito com todo o meu coração.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="border-t border-white/20 pt-8 text-center"
                >
                  <p className="text-lg md:text-xl text-purple-200 font-semibold mb-4">
                    Eu te amo mais que tudo,
                  </p>
                  <p
                    className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 mb-4"
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                  >
                    Seu Julio, para sempre
                  </p>
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex justify-center space-x-2"
                  >
                    <Heart size={20} fill="currentColor" className="text-purple-400" />
                    <Heart size={24} fill="currentColor" className="text-blue-400" />
                    <Heart size={20} fill="currentColor" className="text-indigo-400" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Decorative Bottom */}
              <div className="h-3 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 text-purple-400"
            >
              <Sparkles size={36} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 text-blue-400"
            >
              <Heart size={32} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;