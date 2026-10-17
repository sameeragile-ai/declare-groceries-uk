# Declare Groceries UK — Web Experience

A high-fidelity, editorial React web application handcrafted for **Declare Groceries UK**, an authentic international grocery hub in Moston, Manchester specialising in African, Caribbean, and Italian food traditions, 100% Halal meats, fresh seafood, and imported continental confectionery.

## Features

- **Live Store Status**: Computes real-time "Open Now / Closed / Closing Soon" status based on UK local business hours (9:00 AM – 9:00 PM, 7 days a week).
- **Smooth Cursor Experience**: Custom dual-element cursor with spring physics, contextual hover labels, magnetic CTAs, and automated touch/prefers-reduced-motion fallback.
- **Lenis Smooth Scrolling**: Integrated 60fps inertial smooth scrolling with Framer Motion.
- **Interactive Bento & Carousel**: Shop by Region (Africa, Caribbean, Italy), Halal butchery highlight, interactive image lightbox for real store photography, and two-row marquee strip.
- **Real Business Data Integration**:
  - Address: 374 Moston Ln, Manchester M40 9JS, UK
  - Phone: +44 7402 754401
  - Google Business Rating: 5.0 ★
  - TikTok: [@declare.shop](https://www.tiktok.com/@declare.shop)
- **LocalBusiness Schema & SEO**: JSON-LD structured data for Google Search rich snippets, OpenGraph, and Twitter social cards.

---

## Quick Start & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## Where to Edit Business Info & Media

- **All Business Information & Hours**:
  Edit `/src/config/site.ts`. All store hours, phone numbers, addresses, Google Maps embed links, review quotes, and product marquee lists are centralized here in one place.
- **Photography & Assets**:
  Store images are located in `/src/assets/images/` and mapped in `/src/assets/images.ts`. Simply swap or add image references there.
