import React, { useEffect } from 'react';
import { GalleryItem } from '../data/products';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-stone-900/80 text-stone-200 hover:text-white hover:bg-stone-800 transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {items.length > 1 && (
        <>
          <button
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-stone-200 hover:text-white hover:bg-stone-800 transition-colors z-10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-stone-200 hover:text-white hover:bg-stone-800 transition-colors z-10"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
          <ImageWithFallback
            src={currentItem.image}
            alt={currentItem.title}
            fallbackTitle={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-4 text-center text-white px-4">
          <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-stone-300">
            {currentItem.category} • {currentIndex + 1} of {items.length}
          </span>
          <h4 className="text-xl font-bold font-serif">{currentItem.title}</h4>
          <p className="text-sm text-stone-300 mt-1 max-w-xl mx-auto">{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
};
