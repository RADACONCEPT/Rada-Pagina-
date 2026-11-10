import React, { useState } from 'react';
import { ScreenType } from '../types';
import { STUDIO_INFO } from '../data/mockData';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'quienes-somos', label: 'Quiénes somos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'galeria', label: 'Galería' },
    { id: 'cotizador', label: 'Cotizador' },
    { id: 'contactanos', label: 'Contáctanos' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf9f3]/90 backdrop-blur-md border-b border-[#cfc4c5]/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <img
            src={STUDIO_INFO.logoUrl}
            alt="Logo Rada Concept"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <span className="font-serif text-xl sm:text-2xl font-normal text-[#1c1c18] tracking-wider uppercase">
            Rada Concept
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-black font-semibold'
                    : 'text-[#4c4546] hover:text-[#1c1c18]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-[#fcf9f3] px-4 py-2 sm:px-5 sm:py-2.5 rounded text-xs uppercase tracking-[0.12em] font-medium hover:bg-[#1f2421] transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline">Escríbenos</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="hidden md:inline-flex items-center gap-1.5 border border-black/20 text-[#1c1c18] px-3.5 py-2 rounded text-xs uppercase tracking-[0.12em] font-medium hover:bg-[#f1ddb8]/40 transition-colors whitespace-nowrap"
            title="Agendar cita en estudio o virtual"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Agendar Cita</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded text-[#1c1c18] hover:bg-[#f0eee8] transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fcf9f3] border-b border-[#cfc4c5]/40 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm uppercase tracking-[0.12em] py-2 flex items-center justify-between ${
                    isActive ? 'font-semibold text-black' : 'text-[#4c4546]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-black"></span>}
                </button>
              );
            })}
            <div className="pt-4 border-t border-[#ebe8e2] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-black text-[#fcf9f3] py-3 rounded text-xs uppercase tracking-widest font-medium"
              >
                <span className="material-symbols-outlined text-[18px]">event_available</span>
                <span>Agendar Cita en Estudio</span>
              </button>
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-black/30 text-black py-3 rounded text-xs uppercase tracking-widest font-medium"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
