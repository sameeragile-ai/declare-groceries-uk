import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { MarqueeStrip } from '../sections/MarqueeStrip';
import { ShopByRegion } from '../sections/ShopByRegion';
import { HalalAndFresh } from '../sections/HalalAndFresh';
import { WhyShopWithUs } from '../sections/WhyShopWithUs';
import { GallerySection } from '../sections/GallerySection';
import { ReviewsSection } from '../sections/ReviewsSection';
import { TikTokSection } from '../sections/TikTokSection';
import { VisitUsSection } from '../sections/VisitUsSection';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MarqueeStrip />
      <ShopByRegion />
      <HalalAndFresh />
      <WhyShopWithUs />
      <GallerySection />
      <ReviewsSection />
      <TikTokSection />
      <VisitUsSection />
    </main>
  );
};
