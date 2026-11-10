import React from 'react';
import { STUDIO_INFO, MATERIALS_LIBRARY } from '../data/mockData';

interface AboutScreenProps {
  onOpenBooking: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full py-12 sm:py-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1ddb8]/40 mb-4 border border-[#f1ddb8]">
            <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40]">
              Manifiesto & Taller • Valledupar
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1c1c18] font-normal leading-[1.15] mb-6">
            La armonía entre la luz del Caribe y la pureza material
          </h1>
          <p className="text-base sm:text-lg text-[#4c4546] font-light leading-relaxed">
            Rada Concept nace en Valledupar con una convicción clara: la arquitectura y el diseño interior no son meros adornos, sino la disciplina de esculpir atmósferas de calma, dignidad y orden cotidiano.
          </p>
        </div>
      </section>

      {/* Featured Editorial Split */}
      <section className="bg-[#f6f3ed] py-16 sm:py-20 border-y border-[#cfc4c5]/30 mb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block">
                Nuestra Filosofía de Diseño
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1c1c18] font-normal leading-snug">
                Quiet Luxury: El lujo silencioso de los materiales honestos
              </h2>
              <p className="text-sm text-[#4c4546] font-light leading-relaxed">
                Rechazamos las soluciones sintéticas de corta duración. En nuestro estudio seleccionamos maderas nobles secadas al horno para resistir los cambios de humedad, piedras naturales con vetas irrepetibles y herrajes europeos con amortiguación silenciosa.
              </p>
              <p className="text-sm text-[#4c4546] font-light leading-relaxed">
                Cada proyecto es desarrollado como un traje de sastre: estudiamos cómo entra el sol a las 4 de la tarde, cómo circula tu familia en la mañana y cómo se atenúa la iluminación en la noche para crear paz mental.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#cfc4c5]/40 text-center">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#6b5d40]">10+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7e7576] mt-1">Años de Maestría</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#6b5d40]">+80</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7e7576] mt-1">Obras Realizadas</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#6b5d40]">100%</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7e7576] mt-1">Fabricación Propia</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-white border border-[#cfc4c5]/30">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_KBUpT4cq-LhADVtlf1tV2KRfRikZnzJK9CE6O1Lq1IZyj3Gr4joJm9x2Vh69mroT2mn1v3-5_NufdcY1NMbF5NB1zDMLBdtt988LvR1LaiSe4q--GgaboGCIDxEqkWC2Ywd4C6Y7udo4bBcTxLj1b22jEutoZD66CotIM0A4y0bxCcBP23zslr0EiDqcSQJj3jJS4rq-yih2DMn2XSmZA4y8iagwcfx0KDTtZRt"
                  alt="Detalle de carpintería y acabados finos en taller Rada Concept"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Library Swatches */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
            Materialoteca de Autor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1c18] font-normal">
            Texturas seleccionadas para perdurar
          </h2>
          <p className="text-sm text-[#4c4546] font-light mt-2">
            Toca y experimenta estas muestras en nuestra sala de exhibición en Carrera 9 #8-48, Valledupar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS_LIBRARY.map((mat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-xs border border-[#cfc4c5]/30 hover:border-black/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-10 h-10 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: mat.colorHex }}
                  />
                  <span className="text-[10px] uppercase tracking-wider text-[#7e7576]">
                    {mat.category}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1c1c18] mb-1">
                  {mat.name}
                </h3>
                <span className="text-[11px] text-[#6b5d40] font-medium block mb-3">
                  {mat.textureLabel}
                </span>
                <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                  {mat.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f0eee8] text-[11px] text-[#7e7576]">
                Disponible para aplicación inmediata
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Pillars of Execution */}
      <section className="bg-[#f6f3ed] py-16 sm:py-20 border-t border-[#cfc4c5]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
              Rigor Constructivo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1c18] font-normal">
              Nuestra Metodología en 4 Etapas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#cfc4c5]/20">
              <span className="font-serif text-2xl text-[#f1ddb8] block mb-2">01</span>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Escucha & Diagnóstico
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                Levantamiento métrico en sitio, análisis bioclimático y definición de presupuesto objetivo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#cfc4c5]/20">
              <span className="font-serif text-2xl text-[#f1ddb8] block mb-2">02</span>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Diseño 3D & Muestras
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                Renders fotorrealistas con texturas reales y aprobación de muestras de carpintería y mesones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#cfc4c5]/20">
              <span className="font-serif text-2xl text-[#f1ddb8] block mb-2">03</span>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Manufactura en Taller
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                Corte CNC milimétrico, ensamble artesanal y prearmado en taller para evitar errores en obra.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#cfc4c5]/20">
              <span className="font-serif text-2xl text-[#f1ddb8] block mb-2">04</span>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Instalación Llave en Mano
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                Montaje limpio por operarios propios, calibración de iluminación y entrega con garantía formal.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-black text-[#fcf9f3] px-8 py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Agendar cita con nuestros arquitectos</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
