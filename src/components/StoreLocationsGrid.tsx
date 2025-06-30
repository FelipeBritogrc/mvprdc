
import React from "react";
import { MapPin, Clock, Phone, Navigation, Star } from "lucide-react";
import { motion } from "framer-motion";

const LOJAS = [
  {
    nome: "RedeCompras Centro",
    endereco: "Rua das Trincheiras, 123, Centro",
    cidade: "João Pessoa, PB",
    telefone: "(83) 3333-1111",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Maior loja da rede",
    coords: "-7.1195,-34.8450",
    rating: 4.8
  },
  {
    nome: "BomQuéSó Mangabeira",
    endereco: "Av. Josefa Taveira, 456",
    cidade: "João Pessoa, PB", 
    telefone: "(83) 3333-2222",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Estacionamento grátis",
    coords: "-7.1624,-34.8570",
    rating: 4.7
  },
  {
    nome: "RedeCompras Tambaú",
    endereco: "Av. Epitácio Pessoa, 789",
    cidade: "João Pessoa, PB",
    telefone: "(83) 3333-3333", 
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Próximo à praia",
    coords: "-7.1264,-34.8400",
    rating: 4.9
  },
  {
    nome: "Campina Atacado",
    endereco: "Rua Maciel Pinheiro, 321",
    cidade: "Campina Grande, PB",
    telefone: "(83) 3333-4444",
    horario: "Seg-Sáb: 6h-20h | Dom: 8h-18h", 
    destaque: "Especialista em atacado",
    coords: "-7.2167,-35.8811",
    rating: 4.6
  },
  {
    nome: "BomQuéSó Bancários", 
    endereco: "Av. Gov. Flávio Ribeiro, 555",
    cidade: "João Pessoa, PB",
    telefone: "(83) 3333-5555",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Drive-thru disponível",
    coords: "-7.1500,-34.8400",
    rating: 4.5
  },
  {
    nome: "RedeCompras Valentina",
    endereco: "Rua José Américo, 888",
    cidade: "João Pessoa, PB", 
    telefone: "(83) 3333-6666",
    horario: "Seg-Sáb: 7h-22h | Dom: 7h-20h",
    destaque: "Recém inaugurada",
    coords: "-7.1700,-34.8600",
    rating: 4.8
  }
];

const StoreLocationsGrid: React.FC = () => {
  const handleDirections = (coords: string, nome: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coords}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#282e76]/30 to-[#0d7c3d]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#0d7c3d]/30 to-[#282e76]/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#282e76]">
            Nossas Lojas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre a loja mais próxima de você e descubra tudo o que temos a oferecer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOJAS.map((loja, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header da Loja */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#282e76] mb-1 group-hover:text-[#0d7c3d] transition-colors">
                    {loja.nome}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(loja.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{loja.rating}</span>
                  </div>
                </div>
                <div className="bg-[#0d7c3d]/10 text-[#0d7c3d] text-xs font-bold px-2 py-1 rounded-full">
                  {loja.destaque}
                </div>
              </div>

              {/* Informações da Loja */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0d7c3d] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p>{loja.endereco}</p>
                    <p className="font-medium">{loja.cidade}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0d7c3d] flex-shrink-0" />
                  <span className="text-sm text-gray-600">{loja.telefone}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0d7c3d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{loja.horario}</span>
                </div>
              </div>

              {/* Botão de Direções */}
              <button
                onClick={() => handleDirections(loja.coords, loja.nome)}
                className="w-full bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                Como Chegar
              </button>
            </motion.div>
          ))}
        </div>

        {/* Estatísticas das Lojas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-[#0d7c3d] mb-2">9+</div>
            <div className="text-gray-600 font-medium">Lojas na Paraíba</div>
          </div>
          <div className="text-center bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-[#0d7c3d] mb-2">35+</div>
            <div className="text-gray-600 font-medium">Anos de Tradição</div>
          </div>
          <div className="text-center bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-[#0d7c3d] mb-2">4.7</div>
            <div className="text-gray-600 font-medium">Avaliação Média</div>
          </div>
          <div className="text-center bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-[#0d7c3d] mb-2">100%</div>
            <div className="text-gray-600 font-medium">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocationsGrid;
