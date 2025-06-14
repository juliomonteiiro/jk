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
            Carta do Meu Coração
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Palavras sinceras do coração, escritas com todo amor e carinho para você, minha princesa Kemily
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
                    Para minha amada Kemily
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
                    "Minha querida Kemily, minha princesa..."
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base md:text-lg"
                >
                  Desde o momento em que você entrou na minha vida, tudo se transformou em algo mágico e extraordinário. 
                  Seus sorrisos iluminam até os dias mais cinzentos, sua risada é a melodia mais doce que meus ouvidos 
                  já tiveram o privilégio de escutar, e seu amor é o presente mais precioso que o universo poderia me dar.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-base md:text-lg"
                >
                  Cada dia ao seu lado é uma nova descoberta, uma nova razão para me apaixonar ainda mais por você. 
                  Sua força me inspira a ser uma pessoa melhor, sua gentileza me ensina sobre o verdadeiro significado 
                  do amor, e sua presença em minha vida me completa de uma forma que eu nunca imaginei ser possível.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-base md:text-lg"
                >
                  Você não é apenas minha namorada, você é minha melhor amiga, minha confidente, minha parceira de vida 
                  e minha alma gêmea. Com você, encontrei não apenas o amor verdadeiro, mas também um lar onde meu 
                  coração pode descansar em paz e minha alma pode ser completamente livre.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-base md:text-lg"
                >
                  Prometo cuidar do seu coração como o tesouro mais valioso que possuo, estar ao seu lado em todos os 
                  momentos da vida, e construir junto com você uma história de amor que seja digna de ser contada 
                  por gerações. Nosso amor é eterno, único e verdadeiro.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="border-t border-white/20 pt-8 text-center"
                >
                  <p className="text-lg md:text-xl text-purple-200 font-semibold mb-4">
                    Te amo mais do que as palavras podem expressar,
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    Seu Julio para sempre ✨
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