
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface NewsCardProps {
  id: string;
  title: string;
  img: string;
  summary: string;
  date: string;
  readTime?: string;
  category: string;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  id, 
  title, 
  img, 
  summary, 
  date, 
  readTime, 
  category, 
  featured = false 
}) => {
  return (
    <article className={`
      group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
      transition-all duration-500 transform hover:-translate-y-2
      ${featured ? 'lg:col-span-2' : ''}
    `}>
      <Link to={`/noticias/${id}`} className="block">
        {/* Image Container with fixed aspect ratio */}
        <div className="relative overflow-hidden">
          <AspectRatio ratio={featured ? 16/9 : 16/10} className="bg-gray-100">
            <img 
              src={img} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              style={{ 
                objectPosition: 'center',
                minHeight: featured ? '300px' : '200px'
              }}
            />
          </AspectRatio>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#282e76]/90 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20">
              {category}
            </span>
          </div>
          
          {/* Read more overlay for featured */}
          {featured && (
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[#282e76] font-bold text-sm">
                <span>Leia mais</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
          {/* Meta information */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            {readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className={`
            font-bold text-[#282e76] mb-3 line-clamp-2 group-hover:text-[#0d7c3d] transition-colors duration-300
            ${featured ? 'text-2xl lg:text-3xl' : 'text-lg'}
          `}>
            {title}
          </h3>

          {/* Summary */}
          <p className={`
            text-gray-600 leading-relaxed mb-4
            ${featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}
          `}>
            {summary}
          </p>

          {/* Read more link for non-featured */}
          {!featured && (
            <div className="flex items-center gap-2 text-[#0d7c3d] font-bold text-sm group-hover:gap-3 transition-all duration-300">
              <span>Leia mais</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;
