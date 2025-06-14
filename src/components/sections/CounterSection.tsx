import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Calendar, Timer, Sparkles } from 'lucide-react';
import { useTimeCounter } from '../../hooks/useTimeCounter';

const CounterSection: React.FC = () => {
  // Data de início do namoro: 18 de agosto de 2023
  const startDate = new Date('2023-08-18T00:00:00');
  const timeLeft = useTimeCounter(startDate);

  const timeUnits = [
    { value: timeLeft.days, label: 'Dias', icon: Calendar, color: 'text-blue-500', bgColor: 'from-blue-500/20 to-blue-600/20' },
    { value: timeLeft.hours, label: 'Horas', icon: Clock, color: 'text-purple-500', bgColor: 'from-purple-500/20 to-purple-600/20' },
    { value: timeLeft.minutes, label: 'Minutos', icon: Timer, color: 'text-indigo-500', bgColor: 'from-indigo-500/20 to-indigo-600/20' },
    { value: timeLeft.seconds, label: 'Segundos', icon: Heart, color: 'text-violet-500', bgColor: 'from-violet-500/20 to-violet-600/20' },
  ];

  return (
    <section id="counter" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? 'rgba(99, 102, 241, 0.1)' : 
                i % 4 === 1 ? 'rgba(139, 92, 246, 0.1)' : 
                i % 4 === 2 ? 'rgba(168, 85, 247, 0.1)' :
                'rgba(79, 70, 229, 0.1)'
              } 0%, transparent 70%)`,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
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
            <div className="flex justify-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-blue-400"
              >
                <Sparkles size={32} />
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
                <Sparkles size={32} />
              </motion.div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Nosso Tempo Mágico Juntos
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Cada segundo ao seu lado é um presente precioso. Veja quanto tempo de amor puro já compartilhamos!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {timeUnits.map((unit, index) => {
              const Icon = unit.icon;
              return (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center group"
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${unit.bgColor} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                    
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        className={`${unit.color} mb-4 flex justify-center`}
                      >
                        <Icon size={40} />
                      </motion.div>
                      
                      <motion.div
                        key={unit.value}
                        initial={{ scale: 1.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-2"
                      >
                        {unit.value.toLocaleString()}
                      </motion.div>
                      
                      <div className="text-sm md:text-base font-semibold text-white/70 uppercase tracking-wider">
                        {unit.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Desde 18 de Agosto de 2023
                </h3>
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Foram <strong className="text-blue-300">{timeLeft.days}</strong> dias repletos de amor verdadeiro, 
                  risadas contagiantes, aventuras inesquecíveis e crescimento mútuo. 
                  E isso é apenas o começo da nossa eternidade juntos!
                </p>
                
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="flex justify-center space-x-3"
                >
                  <Heart size={24} fill="currentColor" className="text-blue-400" />
                  <Heart size={32} fill="currentColor" className="text-purple-400" />
                  <Heart size={24} fill="currentColor" className="text-indigo-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;