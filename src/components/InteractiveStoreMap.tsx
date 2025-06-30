
import React, { useState } from "react";
import { MapPin, Clock, Phone, Navigation, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOJAS_INFO = [
  {
    id: 1,
    name: "BomQuéSó Centro",
    endereco: "Rua Maciel Pinheiro, 100 - Centro, João Pessoa - PB",
    horario: "Segunda a Sábado: 7h às 20h | Domingo: 7h às 18h",
    telefone: "(83) 3218-4000",
    coordenadas: { lat: -7.1195, lng: -34.8450 },
    categoria: "Supermercado",
    destaque: "Loja Histórica",
    cor: "from-blue-500 to-blue-600",
    posicao: { x: "45%", y: "60%" }
  },
  {
    id: 2,
    name: "BomQuéSó Manaíra",
    endereco: "Av. Flávio Ribeiro Coutinho, 115 - Manaíra, João Pessoa - PB",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 19h",
    telefone: "(83) 3246-8000",
    coordenadas: { lat: -7.0956, lng: -34.8394 },
    categoria: "Supermercado",
    destaque: "Premium",
    cor: "from-emerald-500 to-emerald-600",
    posicao: { x: "50%", y: "45%" }
  },
  {
    id: 3,
    name: "BomQuéSó Bancários",
    endereco: "Rua Comerciante José Alves, 200 - Bancários, João Pessoa - PB",
    horario: "Segunda a Sábado: 7h às 20h | Domingo: 7h às 18h",
    telefone: "(83) 3235-7000",
    coordenadas: { lat: -7.1522, lng: -34.8394 },
    categoria: "Supermercado",
    destaque: "Familiar",
    cor: "from-purple-500 to-purple-600",
    posicao: { x: "55%", y: "70%" }
  },
  {
    id: 4,
    name: "BomQuéSó Mangabeira",
    endereco: "Rua José Américo de Almeida, 450 - Mangabeira, João Pessoa - PB",
    horario: "Segunda a Sábado: 7h às 20h | Domingo: 7h às 18h",
    telefone: "(83) 3238-9000",
    coordenadas: { lat: -7.2394, lng: -34.8450 },
    categoria: "Supermercado",
    destaque: "Completo",
    cor: "from-orange-500 to-orange-600",
    posicao: { x: "40%", y: "85%" }
  },
  {
    id: 5,
    name: "BomQuéSó Campina Grande",
    endereco: "Av. Brasília, 500 - Catolé, Campina Grande - PB",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 19h",
    telefone: "(83) 3310-5000",
    coordenadas: { lat: -7.2307, lng: -35.8811 },
    categoria: "Supermercado",
    destaque: "Moderno",
    cor: "from-red-500 to-red-600",
    posicao: { x: "75%", y: "40%" }
  },
  {
    id: 6,
    name: "RedeCompras Partage Shopping",
    endereco: "Partage Shopping, Campina Grande - PB",
    horario: "Segunda a Sábado: 10h às 22h | Domingo: 14h às 20h",
    telefone: "(83) 3310-6000",
    coordenadas: { lat: -7.2307, lng: -35.8811 },
    categoria: "Supermercado",
    destaque: "Em Breve - 2025",
    cor: "from-yellow-500 to-yellow-600",
    posicao: { x: "80%", y: "50%" }
  },
  {
    id: 7,
    name: "RedeCompras Megshop Manaíra",
    endereco: "Megshop Manaíra, João Pessoa - PB",
    horario: "Segunda a Sábado: 10h às 22h | Domingo: 14h às 20h",
    telefone: "(83) 3246-9000",
    coordenadas: { lat: -7.0956, lng: -34.8394 },
    categoria: "Supermercado",
    destaque: "Em Breve - 2025",
    cor: "from-indigo-500 to-indigo-600",
    posicao: { x: "48%", y: "40%" }
  },
  {
    id: 8,
    name: "BomQuéSó Tambaú",
    endereco: "Av. Epitácio Pessoa, 800 - Tambaú, João Pessoa - PB",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 19h",
    telefone: "(83) 3226-5000",
    coordenadas: { lat: -7.0731, lng: -34.8394 },
    categoria: "Supermercado",
    destaque: "Turístico",
    cor: "from-teal-500 to-teal-600",
    posicao: { x: "52%", y: "35%" }
  },
  {
    id: 9,
    name: "BomQuéSó Cristo",
    endereco: "Rua João Machado, 300 - Cristo, João Pessoa - PB",
    horario: "Segunda a Sábado: 7h às 20h | Domingo: 7h às 18h",
    telefone: "(83) 3218-7000",
    coordenadas: { lat: -7.1394, lng: -34.8594 },
    categoria: "Supermercado",
    destaque: "Comunitário",
    cor: "from-pink-500 to-pink-600",
    posicao: { x: "42%", y: "65%" }
  },
  {
    id: 10,
    name: "RedeCompras Express Centro",
    endereco: "Rua Duque de Caxias, 150 - Centro, João Pessoa - PB",
    horario: "Segunda a Domingo: 6h às 22h",
    telefone: "(83) 3218-8000",
    coordenadas: { lat: -7.1195, lng: -34.8500 },
    categoria: "Express",
    destaque: "24h Fins de Semana",
    cor: "from-cyan-500 to-cyan-600",
    posicao: { x: "46%", y: "58%" }
  },
  {
    id: 11,
    name: "Campina Atacado",
    endereco: "Distrito Industrial, Campina Grande - PB",
    horario: "Segunda a Sábado: 6h às 18h",
    telefone: "(83) 3310-7000",
    coordenadas: { lat: -7.2500, lng: -35.9000 },
    categoria: "Atacado",
    destaque: "Atacado",
    cor: "from-amber-500 to-amber-600",
    posicao: { x: "85%", y: "60%" }
  }
];

const InteractiveStoreMap = () => {
  const [selectedStore, setSelectedStore] = useState<typeof LOJAS_INFO[0] | null>(null);
  const [hoveredStore, setHoveredStore] = useState<number | null>(null);

  const handleVerLocalizacao = (coordenadas: { lat: number; lng: number }, nome: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordenadas.lat},${coordenadas.lng}&query_place_id=${encodeURIComponent(nome)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 text-[#282e76]">
          Nossas Lojas na Paraíba
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Clique nos pontos do mapa para descobrir mais sobre cada uma de nossas lojas
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Mapa Interativo */}
        <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-xl min-h-[600px]">
          <div className="absolute top-6 left-6">
            <h3 className="text-xl font-bold text-[#282e76] mb-2">Mapa da Paraíba</h3>
            <p className="text-sm text-gray-600">Clique nos pontos para ver detalhes</p>
          </div>
          
          {/* Contorno simplificado da Paraíba */}
          <div className="relative w-full h-full">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full opacity-20"
              style={{ minHeight: "500px" }}
            >
              <path
                d="M100 80 L300 60 L350 100 L320 180 L280 220 L200 240 L120 200 L80 150 Z"
                fill="#282e76"
                stroke="#0d7c3d"
                strokeWidth="2"
              />
            </svg>
            
            {/* Pontos das Lojas */}
            {LOJAS_INFO.map((loja) => (
              <motion.button
                key={loja.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer`}
                style={{ 
                  left: loja.posicao.x, 
                  top: loja.posicao.y,
                }}
                onClick={() => setSelectedStore(loja)}
                onHoverStart={() => setHoveredStore(loja.id)}
                onHoverEnd={() => setHoveredStore(null)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Pulse Animation */}
                <div className={`absolute inset-0 bg-gradient-to-r ${loja.cor} rounded-full animate-ping opacity-30`} />
                
                {/* Main Dot */}
                <div className={`relative w-4 h-4 bg-gradient-to-r ${loja.cor} rounded-full shadow-lg border-2 border-white z-10`}>
                  <MapPin className="w-3 h-3 text-white absolute inset-0.5" />
                </div>
                
                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredStore === loja.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -10, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20"
                    >
                      <div className="bg-white rounded-lg shadow-xl p-3 min-w-[200px] border border-gray-200">
                        <h4 className="font-bold text-[#282e76] text-sm mb-1">{loja.name}</h4>
                        <p className="text-xs text-gray-600 mb-2">{loja.destaque}</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-500">{loja.categoria}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
            
            {/* Legenda */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <h4 className="font-bold text-[#282e76] text-sm mb-3">Legenda</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
                  <span>Supermercados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full" />
                  <span>Express</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
                  <span>Atacado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detalhes da Loja Selecionada */}
        <div className="lg:sticky lg:top-8">
          <AnimatePresence mode="wait">
            {selectedStore ? (
              <motion.div
                key={selectedStore.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${selectedStore.cor} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/20 rounded-full p-3">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                          {selectedStore.categoria}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{selectedStore.name}</h3>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                      <span className="text-lg font-medium">{selectedStore.destaque}</span>
                    </div>
                  </div>
                </div>

                {/* Informações */}
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${selectedStore.cor} p-3 rounded-xl`}>
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Endereço</h4>
                        <p className="text-gray-600 leading-relaxed">{selectedStore.endereco}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${selectedStore.cor} p-3 rounded-xl`}>
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Horário de Funcionamento</h4>
                        <p className="text-gray-600 leading-relaxed">{selectedStore.horario}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${selectedStore.cor} p-3 rounded-xl`}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Telefone</h4>
                        <p className="text-gray-600 leading-relaxed">{selectedStore.telefone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Botão Google Maps */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => handleVerLocalizacao(selectedStore.coordenadas, selectedStore.name)}
                      className={`w-full bg-gradient-to-r ${selectedStore.cor} hover:scale-105 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3`}
                    >
                      <Navigation className="w-6 h-6" />
                      Ver no Google Maps
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-12 text-center border border-gray-100"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] rounded-full mx-auto flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#282e76] mb-4">
                  Selecione uma Loja
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Clique em qualquer ponto do mapa para ver informações detalhadas sobre nossas lojas, 
                  incluindo endereço, horários e como chegar.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InteractiveStoreMap;
