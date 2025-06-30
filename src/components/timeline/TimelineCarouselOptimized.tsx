
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import TimelineHeader from "./TimelineHeader";
import TimelineCard from "./TimelineCard";
import TimelineBackground from "./TimelineBackground";

const TIMELINE = [
  {
    year: "1991",
    title: "Fundação do Barateiro",
    description: "Os Irmãos Farias iniciaram sua jornada empreendedora em Campina Grande, inaugurando o primeiro Supermercado 'O Barateiro'.",
    icon: "🏪",
    img: "/lovable-uploads/4a5b8413-ee54-4498-8897-d49d287c045f.png"
  },
  {
    year: "2007",
    title: "Nascimento do Grupo RedeCompras",
    description: "Rebranding estratégico e expansão das operações, consolidando nossa presença no mercado paraibano.",
    icon: "🔄",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    year: "2012",
    title: "Inauguração BomQuéSó",
    description: "Lançamento do formato atacarejo, revolucionando o conceito de compras em grande escala na região.",
    icon: "🛒",
    img: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    year: "2019",
    title: "E-commerce RedeCompras.com",
    description: "Entrada no mundo digital com nossa plataforma de vendas online, aproximando ainda mais nossos clientes.",
    icon: "🌐",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    year: "2023",
    title: "Centro de Distribuição Moderno",
    description: "Inauguração de moderno centro de distribuição, otimizando nossa logística e capacidade de abastecimento.",
    icon: "🏭",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    year: "2024",
    title: "Expansão João Pessoa",
    description: "Marco histórico com a expansão significativa para a capital paraibana, consolidando nossa presença estadual.",
    icon: "🏢",
    img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TimelineCarouselOptimized: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();

  const handleTimelineClick = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
      setCurrentSlide(index);
    }
  }, [api]);

  const handlePrevious = useCallback(() => {
    if (api) {
      const newIndex = Math.max(0, currentSlide - 1);
      api.scrollTo(newIndex);
      setCurrentSlide(newIndex);
    }
  }, [api, currentSlide]);

  const handleNext = useCallback(() => {
    if (api) {
      const newIndex = Math.min(TIMELINE.length - 1, currentSlide + 1);
      api.scrollTo(newIndex);
      setCurrentSlide(newIndex);
    }
  }, [api, currentSlide]);

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-green-50/20 relative overflow-hidden">
      <TimelineBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <TimelineHeader />

        {/* Timeline Navigation */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
              <div className="flex items-center gap-2 sm:gap-4">
                {TIMELINE.map((item, idx) => (
                  <button
                    key={item.year}
                    onClick={() => handleTimelineClick(idx)}
                    className={`relative flex flex-col items-center group transition-all duration-300 px-2 py-2 rounded-lg ${
                      currentSlide === idx 
                        ? 'text-[#282e76]' 
                        : 'text-gray-400 hover:text-[#0d7c3d]'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 mb-1 ${
                      currentSlide === idx 
                        ? 'bg-[#282e76] scale-125' 
                        : 'bg-gray-300 group-hover:bg-[#0d7c3d]'
                    }`} />
                    <span className="text-xs sm:text-sm font-bold">{item.year}</span>
                  </button>
                ))}
              </div>
              
              {/* Progress Line */}
              <div className="absolute top-[22px] left-6 right-6 h-0.5 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-gradient-to-r from-[#282e76] to-[#0d7c3d] transition-all duration-500 rounded-full"
                  style={{ width: `${(currentSlide / (TIMELINE.length - 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Current Year Display */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] text-white rounded-2xl shadow-lg">
              <div className="text-2xl">{TIMELINE[currentSlide].icon}</div>
              <div>
                <div className="text-3xl font-bold">{TIMELINE[currentSlide].year}</div>
                <div className="text-sm opacity-90">Marco {currentSlide + 1} de {TIMELINE.length}</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: false,
              duration: 25,
              skipSnaps: false,
            }}
            className="relative max-w-5xl mx-auto"
            onSelect={() => {
              if (api) {
                setCurrentSlide(api.selectedScrollSnap());
              }
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {TIMELINE.map((item, idx) => (
                <CarouselItem key={`${item.year}-${idx}`} className="pl-2 md:pl-4 basis-full">
                  <TimelineCard 
                    item={item} 
                    index={idx} 
                    totalItems={TIMELINE.length} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious 
              className="left-4 bg-white/95 backdrop-blur-sm shadow-lg border border-[#282e76]/20 hover:border-[#282e76] hover:bg-[#282e76] hover:text-white transition-all duration-300 w-12 h-12"
              onClick={handlePrevious}
            />
            <CarouselNext 
              className="right-4 bg-white/95 backdrop-blur-sm shadow-lg border border-[#282e76]/20 hover:border-[#282e76] hover:bg-[#282e76] hover:text-white transition-all duration-300 w-12 h-12"
              onClick={handleNext}
            />
          </Carousel>
        </motion.div>

        {/* Navigation Instructions */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Use as setas ou clique nos anos acima para navegar pela nossa história
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineCarouselOptimized;
