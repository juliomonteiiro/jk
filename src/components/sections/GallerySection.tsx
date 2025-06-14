import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Camera, X, Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { Photo } from '../../types';

// Import das imagens
import photo1 from '../../assets/images/photo-1.jpg';
import photo2 from '../../assets/images/photo-2.jpg';
import photo3 from '../../assets/images/photo-3.jpg';
import photo4 from '../../assets/images/photo-4.jpg';
import photo5 from '../../assets/images/photo-5.jpg';
import photo6 from '../../assets/images/photo-6.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Usando imagens importadas do assets/images
  const photos: Photo[] = [
    {
      id: '1',
      src: photo1,
      alt: 'J&K',
      caption: 'A vida é boa com você'
    },
    {
      id: '2',
      src: photo2,
      alt: 'J&K',
      caption: 'Qualquer momento com você faz sentido'
    },
    {
      id: '3',
      src: photo3,
      alt: 'J&K',
      caption: 'Meu ponto de equilíbrio'
    },
    {
      id: '4',
      src: photo4,
      alt: 'J&K',
      caption: 'Meu presente de Deus'
    },
    {
      id: '5',
      src: photo5,
      alt: 'J&K',
      caption: 'Meu bem mais precioso'
    },
    {
      id: '6',
      src: photo6,
      alt: 'J&K',
      caption: 'Meu presente e meu futuro'
    }
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? 'rgba(99, 102, 241, 0.1)' : 
                  i % 3 === 1 ? 'rgba(139, 92, 246, 0.1)' : 
                  'rgba(168, 85, 247, 0.1)'
                } 0%, transparent 70%)`,
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
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
                  <Camera size={32} />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-purple-400"
                >
                  <Heart size={40} fill="currentColor" />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                  className="text-indigo-400"
                >
                  <Sparkles size={28} />
                </motion.div>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Nossa Galeria
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="gallery-swiper"
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={photo.id} className="!w-80">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Caption */}
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <p className="text-sm font-medium backdrop-blur-sm bg-black/20 rounded-lg p-2">
                            {photo.caption}
                          </p>
                        </div>
                        
                        {/* Camera icon */}
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
                          <Camera size={20} className="text-white" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 left-4 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <Sparkles size={16} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-white/70 font-medium flex items-center justify-center space-x-3">
              <Heart size={20} fill="currentColor" className="text-purple-400" />
              <span>Clique nas fotos para ver em tamanho maior</span>
              <Heart size={20} fill="currentColor" className="text-blue-400" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-purple-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20"
              >
                <X size={24} />
              </button>
              
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />
                
                {selectedPhoto.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-2xl">
                    <p className="text-white text-lg text-center font-medium">
                      {selectedPhoto.caption}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-swiper {
          padding: 50px 0;
        }
        
        .gallery-swiper .swiper-pagination-bullet {
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
        }
        
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: white;
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        .gallery-swiper .swiper-button-next:after,
        .gallery-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        
        .gallery-swiper .swiper-button-next:hover,
        .gallery-swiper .swiper-button-prev:hover {
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.4));
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default GallerySection;