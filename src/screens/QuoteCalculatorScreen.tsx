import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/mockData';

interface FinishTier {
  id: string;
  name: string;
  subtitle: string;
  desc: string;
  multiplier: number;
}

const FINISH_TIERS: FinishTier[] = [
  {
    id: 'esencial',
    name: 'Línea Esencial',
    subtitle: 'Calidad & Funcionalidad',
    desc: 'Melaminas antimicrobianas hidrófugas, mesón en granito pulido o cuarzo clásico, herrajes de cierre suave garantizados.',
    multiplier: 1.0,
  },
  {
    id: 'premier',
    name: 'Línea Premier',
    subtitle: 'Elegancia Contemporánea',
    desc: 'Frentes en palillaje alistonado de roble, mesones en cuarzo Calacatta o piedra sinterizada, iluminación lineal LED 2700K embutida.',
    multiplier: 1.45,
  },
  {
    id: 'autor',
    name: 'Colección de Autor',
    subtitle: 'Lujo Silencioso & Piezas Únicas',
    desc: 'Maderas macizas curadas, losas monolíticas de mármol travertino esculpidas, golas ocultas, domótica integrada y carpintería de arte.',
    multiplier: 1.95,
  },
];

const SPACE_TYPES = [
  { id: 'cocina', name: 'Cocina de Autor', baseCop: 18000000, icon: 'countertops' },
  { id: 'sala', name: 'Salón Principal & Estar', baseCop: 14000000, icon: 'chair' },
  { id: 'comercial', name: 'Local Comercial / Boutique', baseCop: 22000000, icon: 'storefront' },
  { id: 'oficina', name: 'Despacho Corporativo', baseCop: 16000000, icon: 'corporate_fare' },
  { id: 'integral', name: 'Remodelación Integral', baseCop: 45000000, icon: 'home' },
];

const AREA_SCALES = [
  { id: 'compacto', label: 'Compacto (<30 m²)', factor: 1.0 },
  { id: 'mediano', label: 'Mediano (30 – 60 m²)', factor: 1.4 },
  { id: 'amplio', label: 'Amplio (>60 m²)', factor: 1.85 },
];

export const QuoteCalculatorScreen: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState(SPACE_TYPES[0]);
  const [selectedScale, setSelectedScale] = useState(AREA_SCALES[1]);
  const [selectedTier, setSelectedTier] = useState(FINISH_TIERS[1]);

  const [include3D, setInclude3D] = useState(true);
  const [includeDomotica, setIncludeDomotica] = useState(false);
  const [includeArt, setIncludeArt] = useState(false);

  // Calculation in COP
  const basePrice = selectedSpace.baseCop * selectedScale.factor * selectedTier.multiplier;
  const add3DCost = include3D ? 1500000 : 0;
  const addDomoticaCost = includeDomotica ? 3800000 : 0;
  const addArtCost = includeArt ? 2400000 : 0;

  const totalMin = Math.round((basePrice + add3DCost + addDomoticaCost + addArtCost) * 0.95);
  const totalMax = Math.round((basePrice + add3DCost + addDomoticaCost + addArtCost) * 1.15);

  const formatCop = (num: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Rada Concept, coticé un proyecto en su simulador web:\n` +
    `• Tipo de Espacio: ${selectedSpace.name}\n` +
    `• Escala: ${selectedScale.label}\n` +
    `• Nivel de Acabados: ${selectedTier.name} (${selectedTier.subtitle})\n` +
    `• Adicionales:\n` +
    `  - Renders 3D fotorrealistas: ${include3D ? 'Sí' : 'No'}\n` +
    `  - Domótica & automatización: ${includeDomotica ? 'Sí' : 'No'}\n` +
    `  - Curaduría de arte/estilismo: ${includeArt ? 'Sí' : 'No'}\n` +
    `• Rango Estimado: ${formatCop(totalMin)} - ${formatCop(totalMax)} COP\n\n` +
    `Quisiera agendar una cita para revisar este presupuesto con sus arquitectos.`
  );

  return (
    <div className="w-full py-12 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1ddb8]/40 mb-4 border border-[#f1ddb8]">
            <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40]">
              Estimador de Inversión Transparente
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1c1c18] font-normal leading-[1.15] mb-6">
            Calculadora de Presupuesto
          </h1>
          <p className="text-base sm:text-lg text-[#4c4546] font-light leading-relaxed">
            Configura el tipo de espacio, metraje y nivel de materialidad deseado para obtener un rango presupuestal referencial de tu proyecto.
          </p>
        </div>
      </section>

      {/* Calculator Container */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#cfc4c5]/30 space-y-8">
            {/* Step 1: Space Type */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-3">
                1. Selecciona el Tipo de Espacio
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SPACE_TYPES.map((space) => {
                  const isSelected = selectedSpace.id === space.id;
                  return (
                    <button
                      key={space.id}
                      onClick={() => setSelectedSpace(space)}
                      className={`p-3.5 rounded border text-left transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-black bg-[#f0eee8] font-medium text-black ring-1 ring-black/10'
                          : 'border-[#cfc4c5]/40 bg-[#f6f3ed] text-[#4c4546] hover:bg-[#f0eee8]'
                      }`}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[22px] text-[#6b5d40]">
                        {space.icon}
                      </span>
                      <span className="text-xs font-semibold">{space.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Area Scale */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-3">
                2. Escala & Dimensiones Aproximadas
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {AREA_SCALES.map((scale) => {
                  const isSelected = selectedScale.id === scale.id;
                  return (
                    <button
                      key={scale.id}
                      onClick={() => setSelectedScale(scale)}
                      className={`p-3 rounded border text-center transition-all text-xs ${
                        isSelected
                          ? 'border-black bg-[#f0eee8] font-semibold text-black ring-1 ring-black/10'
                          : 'border-[#cfc4c5]/40 bg-[#f6f3ed] text-[#4c4546] hover:bg-[#f0eee8]'
                      }`}
                      type="button"
                    >
                      {scale.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Finish Tier */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-3">
                3. Nivel de Materialidad & Acabados
              </span>
              <div className="space-y-3">
                {FINISH_TIERS.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-4 rounded border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-black bg-[#fcf9f3] ring-1 ring-black/10'
                          : 'border-[#cfc4c5]/40 bg-[#f6f3ed]/60 hover:bg-[#f6f3ed]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-3.5 h-3.5 rounded-full border ${
                              isSelected
                                ? 'bg-black border-black'
                                : 'bg-transparent border-[#7e7576]'
                            }`}
                          />
                          <span className="font-serif text-sm font-medium text-[#1c1c18]">
                            {tier.name}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-[#6b5d40] font-semibold">
                          {tier.subtitle}
                        </span>
                      </div>
                      <p className="text-xs text-[#4c4546] font-light leading-relaxed pl-5.5 mt-1">
                        {tier.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-3">
                4. Complementos Opcionales
              </span>
              <div className="space-y-2.5">
                <label className="flex items-center gap-3 p-3 rounded bg-[#f6f3ed] border border-[#cfc4c5]/30 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={include3D}
                    onChange={(e) => setInclude3D(e.target.checked)}
                    className="w-4 h-4 accent-black"
                  />
                  <div className="text-xs">
                    <span className="font-medium text-[#1c1c18] block">
                      Renders Fotorrealistas 3D & Simulación Lumínica
                    </span>
                    <span className="text-[11px] text-[#7e7576]">
                      Vistas 4K y animación previa a obra
                    </span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded bg-[#f6f3ed] border border-[#cfc4c5]/30 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeDomotica}
                    onChange={(e) => setIncludeDomotica(e.target.checked)}
                    className="w-4 h-4 accent-black"
                  />
                  <div className="text-xs">
                    <span className="font-medium text-[#1c1c18] block">
                      Domótica & Escenas de Iluminación Inteligente
                    </span>
                    <span className="text-[11px] text-[#7e7576]">
                      Control por smartphone de tiras LED y cortinas motorizadas
                    </span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded bg-[#f6f3ed] border border-[#cfc4c5]/30 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeArt}
                    onChange={(e) => setIncludeArt(e.target.checked)}
                    className="w-4 h-4 accent-black"
                  />
                  <div className="text-xs">
                    <span className="font-medium text-[#1c1c18] block">
                      Curaduría de Arte, Vegetación & Estilismo Final
                    </span>
                    <span className="text-[11px] text-[#7e7576]">
                      Cuadros de autor, floristería botánica y accesorios de diseño
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results Card Column */}
          <div className="lg:col-span-5 bg-[#f6f3ed] p-6 sm:p-8 rounded-xl border border-[#cfc4c5]/30 sticky top-28 shadow-lg space-y-6">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block">
              Resumen de Estimación
            </span>

            <div className="border-b border-[#cfc4c5]/30 pb-4">
              <h3 className="font-serif text-2xl text-[#1c1c18] font-normal">
                {selectedSpace.name}
              </h3>
              <p className="text-xs text-[#7e7576] mt-1">
                {selectedScale.label} • {selectedTier.name}
              </p>
            </div>

            {/* Price Output */}
            <div className="bg-white p-5 rounded-lg border border-[#cfc4c5]/20 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#7e7576] block">
                Rango Estimado de Inversión
              </span>
              <div className="font-serif text-2xl sm:text-3xl text-black font-semibold">
                {formatCop(totalMin)} – {formatCop(totalMax)}
              </div>
              <span className="text-[10px] text-[#6b5d40] block pt-1">
                * En pesos colombianos (COP). Incluye diseño y manufactura a medida.
              </span>
            </div>

            {/* What's included checklist */}
            <div className="space-y-2 text-xs text-[#4c4546]">
              <span className="font-semibold text-black block mb-2">
                Partidas contempladas en este rango:
              </span>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#6b5d40]">check</span>
                <span>Levantamiento topográfico & planos arquitectónicos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#6b5d40]">check</span>
                <span>Fabricación de mobiliario fijo en taller propio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#6b5d40]">check</span>
                <span>Montaje con equipo técnico certificado en Valledupar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#6b5d40]">check</span>
                <span>Garantía estructural y soporte post-entrega</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-3">
              <a
                href={`${STUDIO_INFO.whatsappUrl}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-black text-[#fcf9f3] py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-all shadow-md text-center"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Enviar cotización a WhatsApp</span>
              </a>

              <p className="text-[11px] text-[#7e7576] text-center">
                El valor final exacto se afina tras la visita técnica sin costo a tu inmueble.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
