import React from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#f6f3ed] text-[#1c1c18] pt-16 pb-12 border-t border-[#cfc4c5]/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Studio Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={STUDIO_INFO.logoUrl}
                alt="Logo Rada Concept"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-serif text-xl text-[#1c1c18] tracking-wider uppercase">
                Rada Concept
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4c4546] font-light leading-relaxed max-w-xs">
              Arquitectura, diseño interior y piezas de mobiliario a medida con sobriedad contemplativa y manufactura de lujo en Valledupar y Colombia.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#cfc4c5]/40 flex items-center justify-center text-[#1c1c18] hover:bg-black hover:text-white transition-colors"
                aria-label="Instagram Rada Concept"
              >
                <span className="text-xs font-semibold">IG</span>
              </a>
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#cfc4c5]/40 flex items-center justify-center text-[#1c1c18] hover:bg-black hover:text-white transition-colors"
                aria-label="WhatsApp Rada Concept"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>

          {/* Col 2: Studio Location */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-3">
              Ubicación & Estudio
            </span>
            <p className="text-sm font-medium text-[#1c1c18]">{STUDIO_INFO.address}</p>
            <p className="text-xs text-[#4c4546]">{STUDIO_INFO.city}, {STUDIO_INFO.department}</p>
            <div className="pt-2">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#6b5d40] hover:underline"
              >
                <span>Ver en Google Maps</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Col 3: Attention Hours */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-3">
              Atención & Citas
            </span>
            <p className="text-sm font-medium text-[#1c1c18]">Lunes a Viernes</p>
            <p className="text-xs text-[#4c4546]">8:00 AM – 6:00 PM</p>
            <p className="text-sm font-medium text-[#1c1c18] pt-2">Sábados</p>
            <p className="text-xs text-[#4c4546]">Con cita previa</p>
            <p className="text-xs text-[#6b5d40] pt-1">Atención nacional virtual disponible</p>
          </div>

          {/* Col 4: Quick Navigation & Contact */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-3">
              Navegación Rápida
            </span>
            <div className="flex flex-col space-y-1.5 text-xs text-[#4c4546]">
              <button
                onClick={() => onNavigate('quienes-somos')}
                className="text-left hover:text-black transition-colors"
              >
                Quiénes somos & Filosofía
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-black transition-colors"
              >
                Servicios & Alcance
              </button>
              <button
                onClick={() => onNavigate('galeria')}
                className="text-left hover:text-black transition-colors"
              >
                Portafolio de Proyectos
              </button>
              <button
                onClick={() => onNavigate('cotizador')}
                className="text-left hover:text-black transition-colors"
              >
                Calculadora de Presupuesto
              </button>
              <button
                onClick={() => onNavigate('contactanos')}
                className="text-left hover:text-black transition-colors"
              >
                Agendar Cita en Estudio
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#cfc4c5]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e7576]">
          <span>© {new Date().getFullYear()} Rada Concept. Todos los derechos reservados.</span>
          <span className="uppercase tracking-widest text-[11px] text-[#6b5d40]">
            Valledupar • Arquitectura & Interiorismo de Autor
          </span>
        </div>
      </div>
    </footer>
  );
};
