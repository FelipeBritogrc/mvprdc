
import React from "react";
import { motion } from "framer-motion";

const TimelineHeader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-[#282e76]/20 rounded-full shadow-lg mb-6">
        <div className="w-2 h-2 bg-[#0d7c3d] rounded-full animate-pulse" />
        <span className="text-sm font-bold text-[#282e76] uppercase tracking-wider">Nossa Jornada</span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span className="block text-gray-900 mb-3">Nossa</span>
        <span className="block bg-gradient-to-r from-[#282e76] via-[#0d7c3d] to-[#282e76] bg-clip-text text-transparent">
          Trajetória
        </span>
      </h2>
      
      <div className="w-24 h-1 bg-gradient-to-r from-[#282e76] via-[#0d7c3d] to-[#282e76] mx-auto mb-6 rounded-full" />
      
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Mais de três décadas construindo uma história de sucesso, inovação e compromisso 
        com nossos clientes e comunidades.
      </p>
    </motion.div>
  );
};

export default TimelineHeader;
