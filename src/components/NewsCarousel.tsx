
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { NEWS_DATA } from "@/data/news";

const NewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  console.log("NewsCarousel renderizando, NEWS_DATA:", NEWS_DATA.length, "items");

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || NEWS_DATA.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % NEWS_DATA.length);
    }, 10000); // 10 segundos
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % NEWS_DATA.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + NEWS_DATA.length) % NEWS_DATA.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

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
  console.log("Notícia atual:", currentNews.title);

  return (
    <section id="noticias" className="w-full py-20 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#282e76]/10 to-[#0d7c3d]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#0d7c3d]/10 to-[#282e76]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#282e76]/5 to-[#0d7c3d]/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#282e76]/20 rounded-full shadow-lg mb-8">
            <TrendingUp className="w-5 h-5 text-[#282e76]" />
            <span className="text-sm font-bold text-[#282e76] uppercase tracking-wider">Últimas Notícias</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#282e76]">
            Fique por Dentro
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] mx-auto mb-6" />
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Acompanhe as principais novidades e acontecimentos do Grupo RedeCompras
          </p>
        </div>

        {/* News Card - Simplified approach without overlapping images */}
        <div className="relative mb-12">
          {/* Main News Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[450px]">
              {/* Text Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#282e76]/5 via-white to-[#0d7c3d]/5 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="px-3 py-1 bg-[#0d7c3d] text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                      NEGÓCIOS
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#282e76] leading-tight">
                    {currentNews?.title}
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {currentNews?.summary}
                  </p>
                  
                  <div className="flex items-center gap-3 text-gray-500">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{currentNews?.date}</span>
                  </div>
                  
                  <Link
                    to={`/noticias/${currentNews?.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 self-start uppercase tracking-wider"
                  >
                    LEIA MAIS
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Image Side - Single image without overlay issues */}
              <div className="relative order-1 lg:order-2 overflow-hidden">
                <img 
                  key={`news-image-${currentNews.id}`}
                  src={currentNews.img} 
                  alt={currentNews.title}
                  className="w-full h-64 lg:h-full object-cover transition-all duration-300"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#282e76]/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#282e76]/10 lg:block hidden" />
              </div>
            </div>
          </div>

          {/* Navigation Controls - Below the card to avoid obstruction */}
          {NEWS_DATA.length > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              {/* Previous Button */}
              <button
                onClick={goToPrev}
                className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#282e76]"
                aria-label="Notícia anterior"
              >
                <ChevronLeft className="w-6 h-6 text-[#282e76]" />
              </button>

              {/* Navigation Dots */}
              <div className="flex gap-2">
                {NEWS_DATA.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => goToSlide(index)}
                    className={`
                      h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#282e76]
                      ${index === currentIndex 
                        ? 'bg-[#0d7c3d] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                      }
                    `}
                    aria-label={`Ir para notícia ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#282e76]"
                aria-label="Próxima notícia"
              >
                <ChevronRight className="w-6 h-6 text-[#282e76]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
