import React, { useEffect } from 'react';
import { GalleryImage } from '../types/gallery';

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-2xl p-2 focus:ring-2 focus:ring-white"
        aria-label="Close lightbox"
      >
        &times;
      </button>

      <button
        onClick={onPrev}
        className="absolute left-5 text-white text-4xl p-4 focus:ring-2 focus:ring-white"
        aria-label="Previous image"
      >
        &#8249;
      </button>

      <div className="flex flex-col items-center max-w-5xl w-full">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-auto object-contain rounded-sm"
        />
        <p className="mt-4 text-white text-center text-lg">{image.caption}</p>
      </div>

      <button
        onClick={onNext}
        className="absolute right-5 text-white text-4xl p-4 focus:ring-2 focus:ring-white"
        aria-label="Next image"
      >
        &#8250;
      </button>
    </div>
  );
};
