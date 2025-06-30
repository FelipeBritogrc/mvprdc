
import React from "react";
import { ChevronLeft, ChevronRight, MapPin, Phone, Clock, Navigation } from "lucide-react";

const LOJAS = [
  {
    nome: "RedeCompras Centro",
    endereco: "Rua das Trincheiras, 123, Centro",
    cidade: "João Pessoa, PB",
    telefone: "(83) 3333-1111",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Maior loja da rede",
    coords: "-7.1195,-34.8450",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-34.8450!3d-7.1195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMTAuMiJTIDM0wrA1MCc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "BomQuéSó Mangabeira",
    endereco: "Av. Josefa Taveira, 456",
    cidade: "João Pessoa, PB", 
    telefone: "(83) 3333-2222",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Estacionamento grátis",
    coords: "-7.1624,-34.8570",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-34.8570!3d-7.1624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMTAuMiJTIDM0wrA1MCc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "RedeCompras Tambaú",
    endereco: "Av. Epitácio Pessoa, 789",
    cidade: "João Pessoa, PB",
    telefone: "(83) 3333-3333", 
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Próximo à praia",
    coords: "-7.1264,-34.8400",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-34.8400!3d-7.1264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMTAuMiJTIDM0wrA1MCc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "Campina Atacado",
    endereco: "Rua Maciel Pinheiro, 321",
    cidade: "Campina Grande, PB",
    telefone: "(83) 3333-4444",
    horario: "Seg-Sáb: 6h-20h | Dom: 8h-18h", 
    destaque: "Especialista em atacado",
    coords: "-7.2167,-35.8811",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-35.8811!3d-7.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMTAuMiJTIDM0wrA1MCc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "BomQuéSó Bancários", 
    endereco: "Av. Gov. Flávio Ribeiro, 555",
    cidade: "João Pessoa, PB",
    telefone: "(83) 3333-5555",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Drive-thru disponível",
    coords: "-7.1500,-34.8400",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-34.8400!3d-7.1500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMTAuMiJTIDM0wrA1MCc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  },
  {
    nome: "RedeCompras Valentina",
    endereco: "Rua José Américo, 888",
    cidade: "João Pessoa, PB", 
    telefone: "(83) 3333-6666",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Recém inaugurada",
    coords: "-7.1700,-34.8600",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-34.8600!3d-7.1700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMTAuMiJTIDM0wrA1MCc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
  }
];

const StoresCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % LOJAS.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextStore = () => {
    setCurrentIndex(prev => (prev + 1) % LOJAS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevStore = () => {
    setCurrentIndex(prev => (prev - 1 + LOJAS.length) % LOJAS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDirections = (coords: string, nome: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coords}&travelmode=driving`;
    window.open(url, '_blank');
  };

  const currentStore = LOJAS[currentIndex];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#282e76] mb-4">
            Nossas Lojas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre a loja mais próxima de você e venha nos visitar. 
            Estamos sempre prontos para atendê-lo com qualidade e carinho.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Google Maps Interactive */}
            <div className="relative overflow-hidden">
              <iframe
                src={currentStore.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
                title={`Mapa da loja ${currentStore.nome}`}
              />
              
              {/* Store Name Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3">
                <h3 className="text-xl font-bold text-[#282e76] mb-1">
                  {currentStore.nome}
                </h3>
                <div className="inline-block px-2 py-1 bg-[#0d7c3d]/10 text-[#0d7c3d] rounded-full text-xs font-medium">
                  {currentStore.destaque}
                </div>
              </div>
            </div>

            {/* Store Information */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0d7c3d] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium">{currentStore.endereco}</p>
                    <p className="text-gray-600">{currentStore.cidade}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0d7c3d]" />
                  <span className="text-gray-800">{currentStore.telefone}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0d7c3d] mt-1" />
                  <span className="text-gray-800">{currentStore.horario}</span>
                </div>
              </div>

              <button
                onClick={() => handleDirections(currentStore.coords, currentStore.nome)}
                className="w-full bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Como Chegar
              </button>
            </div>
          </div>

          {/* Navigation Dots - Mobile Friendly */}
          <div className="flex justify-center py-6 gap-2">
            {LOJAS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 8000);
                }}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? 'bg-[#0d7c3d] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                aria-label={`Ir para loja ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows - Only visible on larger screens */}
          <div className="hidden lg:block">
            <button
              onClick={prevStore}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 hover:scale-110"
              aria-label="Loja anterior"
            >
              <ChevronLeft className="w-6 h-6 text-[#282e76]" />
            </button>

            <button
              onClick={nextStore}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 hover:scale-110"
              aria-label="Próxima loja"
            >
              <ChevronRight className="w-6 h-6 text-[#282e76]" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-[#0d7c3d] mb-1">6+</div>
            <div className="text-sm text-gray-600">Lojas na Paraíba</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-[#0d7c3d] mb-1">35+</div>
            <div className="text-sm text-gray-600">Anos de Tradição</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-[#0d7c3d] mb-1">4.7</div>
            <div className="text-sm text-gray-600">Avaliação Média</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-[#0d7c3d] mb-1">100%</div>
            <div className="text-sm text-gray-600">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoresCarousel;
