import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Animated Tooltip Badge */}
      {showTooltip && (
        <a
          href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Rada Concept, deseo información sobre sus servicios de arquitectura e interiorismo.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-[#fcf9f3] text-[#1c1c18] shadow-lg text-xs font-medium hover:bg-[#f1ddb8] border border-[#cfc4c5]/40 transition-all duration-300 transform hover:-translate-x-1"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>¿En qué podemos ayudarte?</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#7e7576] hover:text-black ml-1 text-xs"
            title="Cerrar"
          >
            ×
          </button>
        </a>
      )}

      {/* Circular Floating WhatsApp Button */}
      <a
        href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Rada Concept, deseo asesoría para mi proyecto.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp a Rada Concept"
        className="relative w-14 h-14 rounded-full bg-black text-[#fcf9f3] flex items-center justify-center shadow-[0_12px_36px_-4px_rgba(26,26,26,0.3)] hover:scale-110 hover:bg-[#1f2421] transition-all duration-300 focus:outline-none"
      >
        <span className="material-symbols-outlined text-[28px]">chat</span>
        {/* Notification Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#6b5d40] border-2 border-[#fcf9f3]"></span>
      </a>
    </div>
  );
};
