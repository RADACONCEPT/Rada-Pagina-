import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/mockData';

interface ColorOption {
  name: string;
  color: string;
  label: string;
}

const CABINET_COLORS: ColorOption[] = [
  { name: 'Blanco puro', color: '#ffffff', label: 'Blanco' },
  { name: 'Gris grafito', color: '#9ca3af', label: 'Gris' },
  { name: 'Malva contemporáneo', color: '#b09e99', label: 'Malva' },
  { name: 'Madera clara', color: '#d9be9b', label: 'Mad. Clara' },
  { name: 'Madera oscura nogal', color: '#5a4234', label: 'Mad. Oscura' },
  { name: 'Negro mate', color: '#1f2421', label: 'Negro' },
];

const COUNTERTOP_COLORS: ColorOption[] = [
  { name: 'Blanco Calacatta', color: '#fdfdfd', label: 'Blanco' },
  { name: 'Gris Pietra', color: '#7e8082', label: 'Gris' },
  { name: 'Negro Marquina', color: '#1c1c1a', label: 'Negro' },
  { name: 'Crema Travertino', color: '#ede3d1', label: 'Crema' },
];

const HARDWARE_ACCENTS = [
  { name: 'Latón Dorado', color: '#6b5d40' },
  { name: 'Negro Mate', color: '#1c1c18' },
  { name: 'Cromo Cepillado', color: '#9ca3af' },
];

export const KitchenSimulator: React.FC = () => {
  const [selectedCabinet, setSelectedCabinet] = useState<ColorOption>(CABINET_COLORS[3]); // Madera clara
  const [selectedCountertop, setSelectedCountertop] = useState<ColorOption>(COUNTERTOP_COLORS[0]); // Blanco
  const [selectedHardware, setSelectedHardware] = useState(HARDWARE_ACCENTS[0]); // Latón
  const [isWarmLight, setIsWarmLight] = useState(true);

  // Pre-filled WhatsApp link
  const whatsappQuoteUrl = `${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hola Rada Concept, he configurado mi cocina soñada en su simulador:\n• Muebles: ${selectedCabinet.name}\n• Mesón & Isla: ${selectedCountertop.name}\n• Herrajes: ${selectedHardware.name}\n\n¡Deseo cotizarla y agendar asesoría técnica!`
  )}`;

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-xl border border-[#cfc4c5]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* SVG Canvas (Kitchen in L with Island) */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center bg-[#f6f3ed] p-5 sm:p-8 rounded-lg relative overflow-hidden border border-[#cfc4c5]/20">
        {/* Ambient Warm Glow layer */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
            isWarmLight ? 'opacity-100 bg-amber-500/[0.04]' : 'opacity-0'
          }`}
        />

        <div className="w-full max-w-lg aspect-[4/3] flex items-center justify-center relative z-10">
          <svg
            className="w-full h-full drop-shadow-md select-none"
            viewBox="0 0 540 380"
            role="img"
            aria-label="Simulador interactivo de cocina Rada Concept"
          >
            {/* Wall Background */}
            <rect
              fill={isWarmLight ? '#eee7dc' : '#ece9e5'}
              height="340"
              rx="4"
              width="500"
              x="20"
              y="20"
              className="transition-colors duration-500"
            />

            {/* Upper Cabinets (L Layout) */}
            <g id="upper-cabinets">
              <rect
                className="transition-colors duration-500"
                fill={selectedCabinet.color}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
                height="110"
                rx="2"
                width="85"
                x="50"
                y="45"
              />
              <rect
                className="transition-colors duration-500"
                fill={selectedCabinet.color}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
                height="110"
                rx="2"
                width="85"
                x="140"
                y="45"
              />
              <rect
                className="transition-colors duration-500"
                fill={selectedCabinet.color}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
                height="110"
                rx="2"
                width="85"
                x="230"
                y="45"
              />

              {/* Extractor Hood */}
              <rect fill="#31312d" height="90" rx="2" width="80" x="320" y="55" />
              {/* Shelving */}
              <rect fill="#c6b497" height="10" rx="1" width="85" x="405" y="80" />
              <rect fill="#c6b497" height="10" rx="1" width="85" x="405" y="125" />
            </g>

            {/* Splashback / Salpicadero */}
            <rect
              fill="#f9f7f4"
              height="50"
              rx="1"
              stroke="#d5cfc5"
              strokeWidth="0.5"
              width="440"
              x="50"
              y="160"
            />

            {/* LED accent line (under cabinet glow) */}
            <line
              opacity={isWarmLight ? 1 : 0.6}
              stroke={isWarmLight ? '#f4dfba' : '#f0f0f0'}
              strokeWidth="3"
              x1="50"
              x2="490"
              y1="160"
              y2="160"
              className="transition-colors duration-500"
            />

            {/* Lower Countertop (L-Shape back run) */}
            <g id="back-countertop">
              <rect
                className="transition-colors duration-500"
                fill={selectedCountertop.color}
                stroke="rgba(0,0,0,0.08)"
                strokeWidth="0.5"
                filter="drop-shadow(0 2px 3px rgba(0,0,0,0.06))"
                height="16"
                rx="2"
                width="450"
                x="45"
                y="210"
              />
              {/* Cooktop */}
              <rect fill="#1c1c18" height="6" rx="1" width="60" x="330" y="212" />
              {/* Designer Faucet in chosen hardware finish */}
              <path
                d="M 170 212 Q 170 196 176 193 Q 182 196 182 212"
                fill="none"
                stroke={selectedHardware.color}
                strokeWidth="2.5"
                className="transition-colors duration-500"
              />
            </g>

            {/* Lower Cabinets */}
            <g id="lower-cabinets">
              <rect
                className="transition-colors duration-500"
                fill={selectedCabinet.color}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
                height="90"
                rx="2"
                width="100"
                x="50"
                y="226"
              />
              <rect
                className="transition-colors duration-500"
                fill={selectedCabinet.color}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
                height="90"
                rx="2"
                width="100"
                x="155"
                y="226"
              />
              <rect
                className="transition-colors duration-500"
                fill={selectedCabinet.color}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
                height="90"
                rx="2"
                width="115"
                x="260"
                y="226"
              />
              <rect
                className="transition-colors duration-500"
                fill={selectedCabinet.color}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
                height="90"
                rx="2"
                width="110"
                x="380"
                y="226"
              />
            </g>

            {/* Central Luxury Island (Foreground) */}
            {/* Shadow under island */}
            <ellipse cx="270" cy="345" fill="rgba(0,0,0,0.09)" rx="180" ry="12" />

            {/* Island Base with slat details */}
            <rect
              className="transition-colors duration-500"
              fill={selectedCabinet.color}
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="1"
              height="68"
              rx="3"
              width="320"
              x="110"
              y="265"
            />

            {/* Architectural Slat Lines on island */}
            <line stroke="rgba(0,0,0,0.12)" strokeWidth="2" x1="150" x2="150" y1="267" y2="330" />
            <line stroke="rgba(0,0,0,0.12)" strokeWidth="2" x1="190" x2="190" y1="267" y2="330" />
            <line stroke="rgba(0,0,0,0.12)" strokeWidth="2" x1="230" x2="230" y1="267" y2="330" />
            <line stroke="rgba(0,0,0,0.12)" strokeWidth="2" x1="270" x2="270" y1="267" y2="330" />
            <line stroke="rgba(0,0,0,0.12)" strokeWidth="2" x1="310" x2="310" y1="267" y2="330" />
            <line stroke="rgba(0,0,0,0.12)" strokeWidth="2" x1="350" x2="350" y1="267" y2="330" />
            <line stroke="rgba(0,0,0,0.12)" strokeWidth="2" x1="390" x2="390" y1="267" y2="330" />

            {/* Waterfall Island Countertop */}
            <path
              className="transition-colors duration-500"
              d="M 95 252 L 445 252 L 445 328 L 433 328 L 433 268 L 107 268 L 107 328 L 95 328 Z"
              fill={selectedCountertop.color}
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="0.5"
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.12))"
            />

            {/* Pendant Lamps Above Island */}
            <line stroke="#241a04" strokeWidth="1.5" x1="200" x2="200" y1="20" y2="90" />
            <path
              d="M 180 90 L 220 90 L 210 98 L 190 98 Z"
              fill={selectedHardware.color}
              className="transition-colors duration-500"
            />
            {isWarmLight && (
              <circle cx="200" cy="100" r="14" fill="#f4dfba" opacity="0.35" />
            )}

            <line stroke="#241a04" strokeWidth="1.5" x1="340" x2="340" y1="20" y2="90" />
            <path
              d="M 320 90 L 360 90 L 350 98 L 330 98 Z"
              fill={selectedHardware.color}
              className="transition-colors duration-500"
            />
            {isWarmLight && (
              <circle cx="340" cy="100" r="14" fill="#f4dfba" opacity="0.35" />
            )}
          </svg>
        </div>

        {/* Live Status Indicator Bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full px-2 gap-2 text-xs">
          <span className="uppercase tracking-widest text-[#7e7576] flex items-center gap-1.5 font-medium">
            <span className="material-symbols-outlined text-[16px] text-[#6b5d40]">touch_app</span>
            Render Dinámico en Tiempo Real
          </span>
          <span className="text-[#6b5d40] font-medium text-center sm:text-right">
            Muebles: {selectedCabinet.name} • Mesón: {selectedCountertop.name}
          </span>
        </div>
      </div>

      {/* Simulator Configuration Controls */}
      <div className="lg:col-span-5 space-y-7">
        {/* 1. Cabinet Color Selector */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[11px] uppercase tracking-[0.14em] text-[#6b5d40] font-semibold">
              1. Color de Muebles & Gabinetes
            </label>
            <span className="text-xs text-[#7e7576] font-light">{selectedCabinet.name}</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {CABINET_COLORS.map((opt) => {
              const isSelected = selectedCabinet.name === opt.name;
              return (
                <button
                  key={opt.name}
                  onClick={() => setSelectedCabinet(opt)}
                  className={`flex items-center gap-2 p-2.5 rounded transition-all text-left border ${
                    isSelected
                      ? 'border-black bg-[#f0eee8] shadow-sm ring-1 ring-black/10'
                      : 'border-transparent bg-[#f6f3ed] hover:bg-[#f0eee8]'
                  }`}
                  type="button"
                >
                  <span
                    className="w-5 h-5 rounded-full border border-black/10 flex-shrink-0 shadow-xs"
                    style={{ backgroundColor: opt.color }}
                  />
                  <span className={`text-xs ${isSelected ? 'font-semibold text-black' : 'text-[#4c4546]'}`}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Countertop Finish Selector */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[11px] uppercase tracking-[0.14em] text-[#6b5d40] font-semibold">
              2. Acabado de Mesón & Isla
            </label>
            <span className="text-xs text-[#7e7576] font-light">{selectedCountertop.name}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {COUNTERTOP_COLORS.map((opt) => {
              const isSelected = selectedCountertop.name === opt.name;
              return (
                <button
                  key={opt.name}
                  onClick={() => setSelectedCountertop(opt)}
                  className={`flex items-center gap-2 p-2.5 rounded transition-all text-left border ${
                    isSelected
                      ? 'border-black bg-[#f0eee8] shadow-sm ring-1 ring-black/10'
                      : 'border-transparent bg-[#f6f3ed] hover:bg-[#f0eee8]'
                  }`}
                  type="button"
                >
                  <span
                    className="w-5 h-5 rounded-full border border-black/10 flex-shrink-0 shadow-xs"
                    style={{ backgroundColor: opt.color }}
                  />
                  <span className={`text-xs ${isSelected ? 'font-semibold text-black' : 'text-[#4c4546]'}`}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Hardware Accents & Lighting Toggle */}
        <div className="grid grid-cols-2 gap-4 pt-1">
          <div>
            <label className="text-[11px] uppercase tracking-[0.14em] text-[#6b5d40] font-semibold block mb-2">
              3. Herrajes
            </label>
            <div className="flex gap-2">
              {HARDWARE_ACCENTS.map((hw) => {
                const isSelected = selectedHardware.name === hw.name;
                return (
                  <button
                    key={hw.name}
                    onClick={() => setSelectedHardware(hw)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs transition-all border ${
                      isSelected
                        ? 'border-black bg-[#f0eee8] font-medium'
                        : 'border-transparent bg-[#f6f3ed] text-[#4c4546]'
                    }`}
                    title={hw.name}
                    type="button"
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: hw.color }}
                    />
                    <span className="hidden sm:inline text-[11px]">{hw.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-[0.14em] text-[#6b5d40] font-semibold block mb-2">
              4. Iluminación LED
            </label>
            <button
              onClick={() => setIsWarmLight(!isWarmLight)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#f6f3ed] hover:bg-[#f0eee8] text-xs text-[#1c1c18] border border-[#cfc4c5]/40 transition-colors w-full justify-center"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px] text-amber-500">
                {isWarmLight ? 'light_mode' : 'wb_sunny'}
              </span>
              <span>{isWarmLight ? 'Cálida 2700K' : 'Neutra 4000K'}</span>
            </button>
          </div>
        </div>

        {/* Direct Action */}
        <div className="pt-2">
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-black text-[#fcf9f3] py-4 px-6 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-all duration-300 shadow-lg text-center"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Enviar mi cocina soñada</span>
          </a>
          <p className="text-[11px] text-[#7e7576] text-center mt-2.5">
            Recibe cotización estimada en menos de 2 horas sin compromiso alguno.
          </p>
        </div>
      </div>
    </div>
  );
};
