
import { useState } from 'react';
import { LOJAS } from '@/data/stores';

export const useStoreCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStore = () => {
    setCurrentIndex(prev => (prev + 1) % LOJAS.length);
  };

  const prevStore = () => {
    setCurrentIndex(prev => (prev - 1 + LOJAS.length) % LOJAS.length);
  };

  const goToStore = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDirections = (coords: string, nome: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coords}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return {
    currentIndex,
    currentStore: LOJAS[currentIndex],
    nextStore,
    prevStore,
    goToStore,
    handleDirections,
    totalStores: LOJAS.length
  };
};
