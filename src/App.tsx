/**
 * Declare Groceries UK - Web Application Entry
 * Built for 374 Moston Ln, Manchester M40 9JS
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change or handle hash scroll
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.replace('#', ''));
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function MainApp() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#0B1215] bg-grain">
      {/* Branded First-Visit Preloader */}
      <Preloader />

      {/* Desktop Spring Cursor */}
      <CustomCursor />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingMobileBar />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
