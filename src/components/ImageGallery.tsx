import React, { useState, useCallback } from 'react';
import { GalleryImage } from '../types/gallery';
import { Lightbox } from './Lightbox'; // Direct import (no barrel)

interface ImageGalleryProps {
  images: GalleryImage[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  return (
    <section className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative overflow-hidden rounded-lg focus:ring-4 focus:ring-blue-500 outline-none"
            aria-label={`View ${img.caption}`}
          >
            <img
              src={img.thumbnail}
              alt={img.alt}
              loading="lazy"
              className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          image={images[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};
