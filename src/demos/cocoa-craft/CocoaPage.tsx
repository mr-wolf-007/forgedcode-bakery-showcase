import React, { useState } from 'react';
import { CocoaHeader } from './CocoaHeader';
import { CocoaHero } from './CocoaHero';
import { CocoaCatalogue, ChocolateProduct } from './CocoaCatalogue';
import { CocoaCartDrawer, CartEntry } from './CocoaCartDrawer';
import { CocoaProductModal } from './CocoaProductModal';
import { CocoaFooter } from './CocoaFooter';

export const CocoaPage: React.FC = () => {
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [quickViewProduct, setQuickViewProduct] = useState<ChocolateProduct | null>(null);

  const handleAddToCart = (product: ChocolateProduct) => {
    setCart(prev => {
      const idx = prev.findIndex(e => e.product.id === product.id);
      if (idx > -1) {
        return prev.map((e, i) => i === idx ? { ...e, quantity: e.quantity + 1 } : e);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(e => e.product.id === id ? { ...e, quantity: e.quantity + delta } : e)
        .filter(e => e.quantity > 0);
    });
  };

  const handleRemove = (id: string) => {
    setCart(prev => prev.filter(e => e.product.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, e) => sum + e.quantity, 0);

  const handleQuickFilter = (categoryName: string) => {
    setActiveCategory(categoryName);
    const el = document.getElementById('catalogue');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF5EE] text-[#271810] font-sans selection:bg-[#C68B59] selection:text-white">
      
      {/* Header */}
      <CocoaHeader
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main>
        {/* Compact Product-Led Hero */}
        <CocoaHero onQuickFilter={handleQuickFilter} />

        {/* E-Commerce Product Catalogue with Filtering & Sorting */}
        <CocoaCatalogue
          searchFilter={searchQuery}
          activeCategoryFilter={activeCategory}
          onSelectCategoryFilter={setActiveCategory}
          onAddToCart={handleAddToCart}
          onOpenQuickView={setQuickViewProduct}
        />
      </main>

      {/* Cart Drawer */}
      <CocoaCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
        onClear={handleClearCart}
      />

      {/* Product Detail Modal */}
      <CocoaProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* E-Commerce Footer */}
      <CocoaFooter />

    </div>
  );
};
