import React from 'react';
import { SERVICES, STUDIO_INFO } from '../data/mockData';
import { ScreenType } from '../types';

interface ServicesScreenProps {
  onOpenBooking: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="w-full py-12 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1ddb8]/40 mb-4 border border-[#f1ddb8]">
            <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40]">
              Alcance Técnico & Soluciones
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1c1c18] font-normal leading-[1.15] mb-6">
            Nuestros Servicios de Arquitectura & Interiorismo
          </h1>
          <p className="text-base sm:text-lg text-[#4c4546] font-light leading-relaxed">
            Desde la concepción espacial hasta la manufactura en taller e instalación llave en mano. Brindamos soluciones para hogares, marcas comerciales y empresas que buscan excelencia sin concesiones.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12 mb-20">
        {SERVICES.map((svc, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={svc.id}
              className="bg-white rounded-xl p-8 sm:p-10 shadow-sm border border-[#cfc4c5]/30 hover:border-black/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#f6f3ed] flex items-center justify-center text-[#1c1c18] border border-[#cfc4c5]/20">
                    <span className="material-symbols-outlined text-[26px]">
                      {svc.iconName}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7e7576]">
                      Servicio 0{index + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1c18] font-normal">
                      {svc.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-[#4c4546] font-light leading-relaxed pt-2">
                  {svc.fullDesc}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#6b5d40]">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>Tiempo estimado: <strong>{svc.timeline}</strong></span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4 bg-[#f6f3ed] p-6 rounded-lg border border-[#cfc4c5]/20">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1c1c18]">
                  ¿Qué incluye este servicio?
                </h4>
                <ul className="space-y-2.5">
                  {svc.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#4c4546] font-light">
                      <span className="material-symbols-outlined text-[16px] text-[#6b5d40] flex-shrink-0 mt-0.5">
                        check
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#cfc4c5]/30 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(svc.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-[#fcf9f3] py-3 px-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-colors text-center"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>Cotizar por WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2 border border-black/30 text-black py-3 px-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>Agendar Cita</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Quote Banner */}
      <section className="bg-[#f6f3ed] py-16 border-t border-[#cfc4c5]/30 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1c18] font-normal mb-3">
            ¿Deseas calcular una estimación preliminar?
          </h3>
          <p className="text-sm text-[#4c4546] font-light mb-8 max-w-xl mx-auto">
            Utiliza nuestra calculadora interactiva para seleccionar área, nivel de acabados y complementos en segundos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('cotizador')}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>Abrir Calculadora de Presupuesto</span>
            </button>
            <button
              onClick={() => onNavigate('galeria')}
              className="inline-flex items-center gap-2 border border-black/30 text-black px-8 py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
            >
              <span>Ver Proyectos Terminados</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
