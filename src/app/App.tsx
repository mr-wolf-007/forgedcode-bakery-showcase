import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShowcaseLanding } from './ShowcaseLanding';
import { DemoLayout } from '../components/DemoLayout';

// 10 Distinct Demo Website Pages
import { MaharajaPage } from '../demos/maharaja/MaharajaPage';
import { CrumbPage } from '../demos/crumb/CrumbPage';
import { SugarRushPage } from '../demos/sugar-rush/SugarRushPage';
import { MaisonPage } from '../demos/maison/MaisonPage';
import { ChennaiPage } from '../demos/chennai-sweet-corner/ChennaiPage';
import { AtelierPage } from '../demos/cake-atelier/AtelierPage';
import { OvenPage } from '../demos/oven-hearth/OvenPage';
import { CocoaPage } from '../demos/cocoa-craft/CocoaPage';
import { MomentsPage } from '../demos/mithai-moments/MomentsPage';
import { ButterPage } from '../demos/butter-bloom/ButterPage';

// Component to scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Showcase Portfolio Landing */}
        <Route path="/" element={<ShowcaseLanding />} />

        {/* 01: Maharaja Mithai House (Luxury Indian Heritage Editorial) */}
        <Route
          path="/demos/maharaja"
          element={
            <DemoLayout demoId="maharaja">
              <MaharajaPage />
            </DemoLayout>
          }
        />
        <Route
          path="/demos/royal-sweets"
          element={
            <DemoLayout demoId="maharaja">
              <MaharajaPage />
            </DemoLayout>
          }
        />

        {/* 02: Crumb & Co. (Minimalist Artisan Bakery & Hearth Journal) */}
        <Route
          path="/demos/crumb"
          element={
            <DemoLayout demoId="crumb">
              <CrumbPage />
            </DemoLayout>
          }
        />
        <Route
          path="/demos/artisan-bakery"
          element={
            <DemoLayout demoId="crumb">
              <CrumbPage />
            </DemoLayout>
          }
        />

        {/* 03: Sugar Rush Bakery (Playful Maximalist Retail & Fast Order Counter) */}
        <Route
          path="/demos/sugar-rush"
          element={
            <DemoLayout demoId="sugar-rush">
              <SugarRushPage />
            </DemoLayout>
          }
        />
        <Route
          path="/demos/modern-bakery"
          element={
            <DemoLayout demoId="sugar-rush">
              <SugarRushPage />
            </DemoLayout>
          }
        />

        {/* 04: Maison Éclair (Cinematic Haute Patisserie & Salon de Thé) */}
        <Route
          path="/demos/maison"
          element={
            <DemoLayout demoId="maison">
              <MaisonPage />
            </DemoLayout>
          }
        />
        <Route
          path="/demos/luxury-patisserie"
          element={
            <DemoLayout demoId="maison">
              <MaisonPage />
            </DemoLayout>
          }
        />

        {/* 05: Chennai Sweet Corner (Practical Local Sweet Shop & Savouries) */}
        <Route
          path="/demos/chennai-sweet-corner"
          element={
            <DemoLayout demoId="chennai-sweet-corner">
              <ChennaiPage />
            </DemoLayout>
          }
        />

        {/* 06: The Cake Atelier (Bespoke Celebration Cake Studio & Visual Portfolio) */}
        <Route
          path="/demos/cake-atelier"
          element={
            <DemoLayout demoId="cake-atelier">
              <AtelierPage />
            </DemoLayout>
          }
        />

        {/* 07: Oven & Hearth (Rustic Nostalgic Neighborhood Brick-Oven Bakery) */}
        <Route
          path="/demos/oven-hearth"
          element={
            <DemoLayout demoId="oven-hearth">
              <OvenPage />
            </DemoLayout>
          }
        />

        {/* 08: Cocoa Craft (Product-First Chocolate Store & E-Commerce Prototype) */}
        <Route
          path="/demos/cocoa-craft"
          element={
            <DemoLayout demoId="cocoa-craft">
              <CocoaPage />
            </DemoLayout>
          }
        />

        {/* 09: Mithai & Moments (Seasonal Indian Sweets & Festive Gifting Campaigns) */}
        <Route
          path="/demos/mithai-moments"
          element={
            <DemoLayout demoId="mithai-moments">
              <MomentsPage />
            </DemoLayout>
          }
        />

        {/* 10: Butter & Bloom Café (Contemporary Bakery Café & Lifestyle Roastery) */}
        <Route
          path="/demos/butter-bloom"
          element={
            <DemoLayout demoId="butter-bloom">
              <ButterPage />
            </DemoLayout>
          }
        />

        {/* Fallback to Showcase */}
        <Route path="*" element={<ShowcaseLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
