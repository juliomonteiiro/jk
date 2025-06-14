import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Sparkles, Star } from 'lucide-react';
import type { TimelineEvent } from '../../types';

const TimelineSection: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      date: '10 de Dezembro, 2023',
      title: 'Primeiro Olhar',
      description: 'A primeira vez que eu te vi, nem imaginava que, a partir dali, tudo mudaria.',
    },
    {
      id: '2',
      date: '8 de Março, 2023',
      title: 'Primeiro Chocolate 🍫',
      description: 'Um dos nossos momentos mais engraçados: eu, com vergonha de te entregar um chocolate, parecia uma criança apaixonada.',
    },
    {
      id: '3',
      date: '12 de Agosto, 2023',
      title: 'A Ligação',
      description: 'Aquele tinha tudo para ser um dia ruim, mas foi no momento difícil que ficou claro que deveríamos estar juntos.',
    },
    {
      id: '4',
      date: '15 de Agosto, 2023',
      title: 'Primeiro Beijo',
      description: 'O dia do primeiro beijo, da confirmação de que todo o tempo havia valido a pena.',
    },
    {
      id: '5',
      date: '18 de Agosto, 2023',
      title: 'Nossa Data',
      description: 'Nosso início, o começo da nossa história. O dia em que pude te chamar de minha namorada.',
    },
    {
      id: '6',
      date: '9 de Julho, 2024',
      title: 'Alianças',
      description: 'Talvez não tenha sido a melhor data para entregar as alianças, mas naquele momento eu só queria te mostrar o quanto eu te queria.',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
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
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {i % 2 === 0 ? (
              <Sparkles size={Math.random() * 20 + 10} className="text-blue-400/20" />
            ) : (
              <Star size={Math.random() * 15 + 8} className="text-purple-400/20" />
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
                className="text-blue-400"
              >
                <Sparkles size={28} />
              </motion.div>
              <Heart className="text-purple-400" size={40} fill="currentColor" />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-indigo-400"
              >
                <Sparkles size={28} />
              </motion.div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Nossa História
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Os primeiros capítulos da nossa história, onde tudo começou.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 transform md:-translate-x-1/2 rounded-full shadow-lg shadow-purple-500/50"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Enhanced Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                    className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/50 border-4 border-white/20"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute inset-1 bg-white rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative"
                  >
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                      <div className="flex items-center space-x-3 text-blue-300 mb-4">
                        <Calendar size={18} />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          <Heart size={24} fill="currentColor" className="text-purple-400" />
                        </motion.div>
                        <span>{event.title}</span>
                      </h3>

                      <p className="text-white/80 leading-relaxed text-base md:text-lg">
                        {event.description}
                      </p>



                      {/* Decorative corner elements */}
                      <div className="absolute top-4 right-4 text-purple-400/30">
                        <Sparkles size={16} />
                      </div>
                      <div className="absolute bottom-4 left-4 text-blue-400/30">
                        <Star size={14} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

          </div>
            <div className="max-w-4xl mx-auto mt-24 px-4 relative z-10 text-white text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 mb-6 text-lg"
              >
              Isso é apenas um pedacinho do nosso começo e da nossa história. Ela ainda não está completa — e, sinceramente, espero que nunca esteja —, porque sei que ainda temos muitos passos lindos a dar e uma vida inteira para construir, lado a lado
              </motion.p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;