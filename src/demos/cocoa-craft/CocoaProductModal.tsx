import React from 'react';
import { X, Plus, Check, ShieldCheck, Award } from 'lucide-react';
import { ChocolateProduct } from './CocoaCatalogue';

interface CocoaProductModalProps {
  product: ChocolateProduct | null;
  onClose: () => void;
  onAddToCart: (product: ChocolateProduct) => void;
}

export const CocoaProductModal: React.FC<CocoaProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="bg-[#FAF5EE] border border-[#271810]/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative font-serif">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-800 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl overflow-hidden aspect-square bg-[#1C120C]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#B85D38] block">
              {product.origin}
            </span>
            <h3 className="text-2xl font-light text-[#271810] leading-snug">
              {product.name}
            </h3>
            <span className="text-2xl font-normal text-[#271810] block">
              ₹{product.price}
            </span>

            <p className="text-xs font-sans text-stone-600 leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-stone-200 pt-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-2">
                Sensory Tasting Notes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white border border-[#271810]/15 rounded-md text-[10px] font-mono text-[#5C4535]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full py-3 bg-[#271810] hover:bg-[#C68B59] text-white rounded-xl text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
              >
                Add to Bag • ₹{product.price}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
