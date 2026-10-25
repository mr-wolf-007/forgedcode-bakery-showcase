import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { ChocolateProduct } from './CocoaCatalogue';

export interface CartEntry {
  product: ChocolateProduct;
  quantity: number;
}

interface CocoaCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartEntry[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export const CocoaCartDrawer: React.FC<CocoaCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemove,
  onClear
}) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Mumbai',
    pin: '400001'
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, e) => sum + e.quantity, 0);
  const subtotal = cart.reduce((sum, e) => sum + (e.product.price * e.quantity), 0);
  const freeShippingThreshold = 1200;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 120;
  const grandTotal = subtotal + shippingFee;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutData.name || !checkoutData.phone) return;
    const ref = `CC-DEMO-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(ref);
    setOrderConfirmed(true);
  };

  const getWhatsAppOrderLink = () => {
    let text = `*Cocoa Craft — Demo Store Order*\n` +
      `Order Ref: ${orderRef}\n` +
      `Customer: ${checkoutData.name}\n` +
      `Phone: ${checkoutData.phone}\n` +
      `Shipping Address: ${checkoutData.address}, ${checkoutData.city} - ${checkoutData.pin}\n\n` +
      `*Items:*\n`;
    
    cart.forEach((e, idx) => {
      text += `${idx + 1}. ${e.product.name} (${e.product.weight}) x ${e.quantity} = ₹${e.product.price * e.quantity}\n`;
    });

    text += `\n*Subtotal:* ₹${subtotal}\n*Shipping:* ₹${shippingFee === 0 ? 'FREE' : shippingFee}\n*Total:* ₹${grandTotal}\n\n_(Note: Demonstration e-commerce order)_`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* Drawer Container */}
      <div className="bg-[#FAF5EE] w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l border-[#271810]/20 p-6 overflow-y-auto">
        
        {/* Top Bar */}
        <div>
          <div className="flex items-center justify-between border-b border-[#271810]/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-[#C68B59]" />
              <h3 className="text-lg font-serif font-light text-[#271810]">
                Your Shopping Bag ({totalItems})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="bg-white p-3.5 rounded-xl border border-[#271810]/10 mb-6 font-mono text-xs">
            {amountToFreeShipping > 0 ? (
              <p className="text-stone-700">
                Add <strong className="text-[#B85D38]">₹{amountToFreeShipping}</strong> more for Free Chilled Express Shipping!
              </p>
            ) : (
              <p className="text-emerald-800 font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>You unlocked Free Chilled Packaging &amp; Shipping!</span>
              </p>
            )}
            <div className="w-full bg-stone-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#C68B59] h-full transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          {cart.length === 0 ? (
            <div className="text-center py-16 text-stone-500 font-serif text-sm">
              Your bag is currently empty. Explore our bean-to-bar slabs and truffle collections!
            </div>
          ) : (
            <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-1">
              {cart.map(entry => (
                <div
                  key={entry.product.id}
                  className="bg-white p-3.5 rounded-xl border border-[#271810]/10 flex items-center gap-3"
                >
                  <img
                    src={entry.product.image}
                    alt={entry.product.name}
                    className="w-16 h-16 object-cover rounded-lg bg-stone-100 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs text-[#271810] font-normal truncate">
                      {entry.product.name}
                    </h4>
                    <span className="text-[10px] font-mono text-[#8C6D58] block">
                      {entry.product.weight} • ₹{entry.product.price}
                    </span>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#271810]/20 rounded-md">
                        <button
                          onClick={() => onUpdateQty(entry.product.id, -1)}
                          className="px-2 py-0.5 text-stone-600 hover:bg-stone-100"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold text-[#271810]">
                          {entry.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(entry.product.id, 1)}
                          className="px-2 py-0.5 text-stone-600 hover:bg-stone-100"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemove(entry.product.id)}
                        className="text-stone-400 hover:text-red-700 p-1"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  <span className="font-serif text-sm text-[#271810] font-normal shrink-0">
                    ₹{entry.product.price * entry.quantity}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Checkout Action */}
        <div className="pt-4 border-t border-[#271810]/15 space-y-3 font-mono text-xs">
          <div className="space-y-1.5 text-stone-600">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-bold text-[#271810]">₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Chilled Shipping:</span>
              <span>{shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingFee}`}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#271810] pt-2 border-t border-stone-200 font-serif">
              <span>Estimated Total:</span>
              <span className="text-lg text-[#B85D38]">₹{grandTotal}</span>
            </div>
          </div>

          <button
            disabled={cart.length === 0}
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full py-3.5 bg-[#271810] hover:bg-[#C68B59] text-white rounded-xl text-xs font-mono uppercase tracking-wider transition-colors disabled:opacity-50 shadow-md"
          >
            Proceed to Demo Checkout
          </button>

          <p className="text-[10px] text-center text-stone-400 font-sans">
            Demonstration checkout only. No real payments processed.
          </p>
        </div>

      </div>

      {/* Demo Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-[#FAF5EE] border border-[#271810]/20 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative font-sans">
            
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-5 right-5 p-1 text-stone-400 hover:text-stone-800"
            >
              <X size={20} />
            </button>

            {orderConfirmed ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 size={32} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B85D38] block">
                  Demonstration Order Successful
                </span>
                <h4 className="text-2xl font-serif text-[#271810]">
                  Order #{orderRef}
                </h4>
                <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {checkoutData.name}! This client-side order simulation has processed {totalItems} items (Total: ₹{grandTotal}).
                </p>

                <div className="pt-4 flex flex-col gap-2">
                  <a
                    href={getWhatsAppOrderLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={15} />
                    <span>Send Order Spec to Store WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      onClear();
                      setOrderConfirmed(false);
                      setIsCheckoutOpen(false);
                      onClose();
                    }}
                    className="w-full py-2.5 bg-stone-200 text-stone-800 rounded-xl text-xs font-mono"
                  >
                    Close Demo Checkout
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="border-b border-[#271810]/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B85D38] block">
                    Demo E-Commerce Checkout
                  </span>
                  <h4 className="text-2xl font-serif text-[#271810]">
                    Shipping &amp; Delivery Address
                  </h4>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-stone-600 mb-1">
                    Recipient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Sharma"
                    value={checkoutData.name}
                    onChange={e => setCheckoutData({ ...checkoutData, name: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-[#271810] focus:outline-none focus:border-[#C68B59]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-stone-600 mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={checkoutData.phone}
                    onChange={e => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-[#271810] focus:outline-none focus:border-[#C68B59] font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-stone-600 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="Apartment, Street, Landmark"
                    value={checkoutData.address}
                    onChange={e => setCheckoutData({ ...checkoutData, address: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-[#271810] focus:outline-none focus:border-[#C68B59]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-stone-600 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={checkoutData.city}
                      onChange={e => setCheckoutData({ ...checkoutData, city: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-[#271810] focus:outline-none focus:border-[#C68B59]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-stone-600 mb-1">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      value={checkoutData.pin}
                      onChange={e => setCheckoutData({ ...checkoutData, pin: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-[#271810] focus:outline-none focus:border-[#C68B59] font-mono"
                    />
                  </div>
                </div>

                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-[11px] text-amber-900">
                  <strong>Simulated Demo Payment:</strong> No credit card required. Completing this order generates a mock order reference.
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#271810] hover:bg-[#C68B59] text-white rounded-xl text-xs font-mono uppercase tracking-wider transition-colors shadow-md"
                >
                  Complete Demo Order (₹{grandTotal})
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
