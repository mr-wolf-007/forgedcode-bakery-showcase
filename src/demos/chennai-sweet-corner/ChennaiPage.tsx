import React, { useState } from 'react';
import { ChennaiHeader } from './ChennaiHeader';
import { ChennaiHero } from './ChennaiHero';
import { ChennaiProducts, SweetItem } from './ChennaiProducts';
import { ChennaiStoreInfo } from './ChennaiStoreInfo';
import { ChennaiFooter } from './ChennaiFooter';
import { MessageCircle, X, Trash2, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  quantity: number;
}

export const ChennaiPage: React.FC = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isBagOpen, setIsBagOpen] = useState(false);

  const handleAddToBag = (item: SweetItem, weight: string, price: number) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id && p.weight === weight);
      if (existing) {
        return prev.map(p => p.id === item.id && p.weight === weight ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { id: item.id, name: item.name, weight, price, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id: string, weight: string) => {
    setCart(prev => prev.filter(p => !(p.id === id && p.weight === weight)));
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsAppOrder = () => {
    let text = 'Vanakkam Chennai Sweet Corner, I want to place an order:\n\n';
    if (cart.length > 0) {
      cart.forEach((item, idx) => {
        text += `${idx + 1}. ${item.name} (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
      });
      text += `\n*Total Estimate: ₹${totalCartAmount}*\n\nPlease confirm availability for pickup/delivery.`;
    } else {
      text += 'I would like to inquire about today\'s fresh sweets and savouries availability.';
    }

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF0] text-stone-900 font-sans selection:bg-amber-400 selection:text-red-950">
      
      {/* Header */}
      <ChennaiHeader
        onSearchChange={setSearchFilter}
        activeCategory=""
        onSelectCategory={() => {}}
        orderCount={totalCartCount}
        onOpenOrderSummary={() => setIsBagOpen(true)}
      />

      <main>
        {/* Promotional Hero */}
        <ChennaiHero
          onExploreMenu={scrollToMenu}
          onWhatsAppOrder={openWhatsAppOrder}
        />

        {/* Category Rail & Product Catalogue */}
        <ChennaiProducts
          searchFilter={searchFilter}
          onAddToBag={handleAddToBag}
        />

        {/* Store Locations & Timings */}
        <ChennaiStoreInfo />
      </main>

      {/* Local Storefront Footer */}
      <ChennaiFooter />

      {/* Floating Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={openWhatsAppOrder}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-105 border-2 border-emerald-400"
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
      </div>

      {/* Order Bag Drawer Modal */}
      {isBagOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border-2 border-amber-300 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-red-700" size={20} />
                <h4 className="text-lg font-black text-stone-900 uppercase">
                  Your Order Bag ({totalCartCount})
                </h4>
              </div>
              <button
                onClick={() => setIsBagOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-stone-500 text-xs">
                Your order bag is currently empty. Add sweets and savouries from the menu above!
              </div>
            ) : (
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-amber-100 pb-2 text-xs">
                    <div>
                      <span className="font-bold text-stone-900 block">{item.name}</span>
                      <span className="text-[10px] text-stone-500 font-medium">{item.weight} • ₹{item.price} each</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-red-900">Qty: {item.quantity} (₹{item.price * item.quantity})</span>
                      <button
                        onClick={() => handleRemoveItem(item.id, item.weight)}
                        className="text-stone-400 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="pt-2 flex items-center justify-between font-black text-sm text-stone-900">
                  <span>Estimated Total:</span>
                  <span className="text-lg text-red-700">₹{totalCartAmount}</span>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-amber-200 flex flex-col gap-2">
              <button
                disabled={cart.length === 0}
                onClick={openWhatsAppOrder}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <MessageCircle size={16} />
                <span>Send Order to Counter WhatsApp</span>
              </button>

              <button
                onClick={() => setIsBagOpen(false)}
                className="w-full py-2 bg-stone-100 text-stone-700 rounded-xl text-xs font-semibold"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
