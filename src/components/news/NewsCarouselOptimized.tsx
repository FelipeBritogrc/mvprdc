
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NEWS_DATA } from '@/data/news';

const NewsCarouselOptimized: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play otimizado
  useEffect(() => {
    if (!isAutoPlaying || NEWS_DATA.length <= 1) return;
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % NEWS_DATA.length);
    }, 6000); // Voltou para 6s para fluidez
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleTransition = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);

    // Re-enable auto-play após interação
    setTimeout(() => {
      setIsTransitioning(false);
      setTimeout(() => setIsAutoPlaying(true), 8000);
    }, 400); // Reduzido para 400ms
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % NEWS_DATA.length;
    handleTransition(nextIndex);
  }, [currentIndex, handleTransition]);

  const goToPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + NEWS_DATA.length) % NEWS_DATA.length;
    handleTransition(prevIndex);
  }, [currentIndex, handleTransition]);

  const goToSlide = useCallback((index: number) => {
    handleTransition(index);
  }, [handleTransition]);

  const handleReadMore = useCallback((newsId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (NEWS_DATA.length === 0) {
    return (
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Nenhuma notícia disponível no momento.</p>
        </div>
      </section>
    );
  }

  const currentNews = NEWS_DATA[currentIndex];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #282e76 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-[#282e76]/20 rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-[#0d7c3d] rounded-full animate-pulse" />
            <TrendingUp className="w-5 h-5 text-[#282e76]" />
            <span className="text-sm font-bold text-[#282e76] uppercase tracking-wider">Últimas Notícias</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#282e76]">
            Fique por Dentro
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] mx-auto mb-4" />
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Acompanhe as principais novidades do Grupo RedeCompras
          </p>
        </motion.div>

        {/* News Carousel */}
        <div className="relative mb-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentNews.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative max-w-4xl mx-auto"
            >
              {/* Featured Image - Carregamento otimizado */}
              <div className="relative overflow-hidden">
                <div className="aspect-[16/9]">
                  <img 
                    src={currentNews.img} 
                    alt={currentNews.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ objectPosition: 'center' }}
                    loading="eager" // Carrega imediatamente
                    decoding="async" // Decodifica de forma assíncrona
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 bg-[#0d7c3d] text-white text-sm font-bold rounded-full shadow-lg uppercase tracking-wider"
                  >
                    {currentNews.category}
                  </motion.span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#282e76] leading-tight">
                    {currentNews.title}
                  </h3>
                  
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {currentNews.summary}
                  </p>
                  
                  <div className="flex items-center gap-3 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{currentNews.date}</span>
                    {currentNews.readTime && (
                      <>
                        <span>•</span>
                        <span className="font-medium">{currentNews.readTime}</span>
                      </>
                    )}
                  </div>
                  
                  <Link
                    to={`/noticias/${currentNews.id}`}
                    onClick={() => handleReadMore(currentNews.id)}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wider text-sm"
                  >
                    LEIA MAIS
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {NEWS_DATA.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#282e76] disabled:opacity-50"
                aria-label="Notícia anterior"
              >
                <ChevronLeft className="w-5 h-5 text-[#282e76]" />
              </button>

              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#282e76] disabled:opacity-50"
                aria-label="Próxima notícia"
              >
                <ChevronRight className="w-5 h-5 text-[#282e76]" />
              </button>
            </>
          )}
        </div>

        {/* Navigation Dots */}
        {NEWS_DATA.length > 1 && (
          <div className="flex justify-center items-center gap-2">
            {NEWS_DATA.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`
                  h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#282e76] disabled:opacity-50
                  ${index === currentIndex 
                    ? 'bg-[#0d7c3d] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }
                `}
                aria-label={`Ir para notícia ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsCarouselOptimized;
