
import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  img: string;
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  totalItems: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, index, totalItems }) => {
  return (
    <div className="h-full">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden group border border-white/50 hover:border-[#0d7c3d]/20 hover:-translate-y-2 transform-gpu">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="aspect-[16/9]">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ 
                objectPosition: 'center',
                minHeight: '300px'
              }}
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Year Badge */}
          <div className="absolute top-6 left-6 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] text-white px-6 py-3 rounded-xl font-bold text-xl shadow-lg border border-white/20 backdrop-blur-sm">
            {item.year}
          </div>
          
          {/* Icon */}
          <div className="absolute bottom-6 left-6 text-4xl bg-white/30 backdrop-blur-md rounded-xl w-16 h-16 flex items-center justify-center border border-white/40 shadow-lg">
            {item.icon}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/20">
            <div 
              className="h-full bg-gradient-to-r from-[#282e76] to-[#0d7c3d] transition-all duration-500 group-hover:opacity-100 opacity-80"
              style={{ width: `${((index + 1) / totalItems) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-10 flex-1 flex flex-col">
          <h3 className="font-bold text-2xl lg:text-3xl text-[#282e76] mb-6 group-hover:text-[#0d7c3d] transition-colors leading-tight">
            {item.title}
          </h3>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed flex-1 mb-6">
            {item.description}
          </p>
          
          {/* Timeline Indicator */}
          <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#0d7c3d] rounded-full" />
              <span>Marco {index + 1} de {totalItems}</span>
            </div>
            <div className="h-3 w-px bg-gray-300" />
            <span>Grupo RedeCompras</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
