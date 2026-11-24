import React, { useState } from 'react';
import { Project, ScreenType } from '../types';
import { SERVICES, TESTIMONIALS, FAQS, STUDIO_INFO } from '../data/mockData';
import { PROJECTS } from '../data/portfolioData';
import { KitchenSimulator } from '../components/KitchenSimulator';

interface HomeScreenProps {
  onSelectProject: (project: Project) => void;
  onOpenBooking: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectProject,
  onOpenBooking,
  onNavigate,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative -mt-20 flex min-h-[90vh] flex-col overflow-hidden bg-[#fcf9f3] pt-20 md:flex-row">
        <div className="relative flex min-h-[42vh] items-center justify-center bg-[#e8e4dc] px-5 py-8 sm:min-h-[52vh] md:min-h-0 md:w-[46%] md:px-10 md:py-12">
          <img
            src="/assets/rada/SHOW ROOM RADA CONCEPT/ESPACIO RADA 8.jpeg"
            alt="Espacio Rada 8 en el showroom de Rada Concept"
            className="max-h-[52vh] w-full object-contain sm:max-h-[62vh] md:max-h-[calc(90vh-3rem)]"
          />
        </div>

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-5 py-14 text-center sm:px-8 md:w-[54%] md:max-w-none md:px-12 md:py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#6b5d40]" />
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#4c4546]">
              Arquitectura & Interiorismo de Autor • Valledupar
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-[clamp(2.25rem,4.5vw,3.75rem)] text-[#1c1c18] max-w-4xl tracking-tight leading-[1.15] mb-6 font-normal">
            Espacios elegantes y funcionales, diseñados a tu medida
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#4c4546] max-w-2xl mb-10 font-light leading-relaxed">
            Diseño, arquitectura e interiorismo en Valledupar y todo el país. Cotización 100 % gratuita.
          </p>

          <div className="flex flex-col items-center gap-4 w-full md:max-w-md xl:flex-row xl:max-w-none">
            <a
              href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Rada Concept, deseo mi cotización gratuita para mi proyecto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full xl:w-auto inline-flex items-center justify-center gap-3 bg-[#fcf9f3] text-black px-8 py-4 rounded shadow-xl hover:bg-[#f1ddb8] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[22px] text-[#6b5d40]">chat</span>
              <span className="text-xs uppercase tracking-[0.14em] font-semibold">
                Quiero mi cotización gratis
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <button
              onClick={() => onNavigate('galeria')}
              className="w-full xl:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded border border-[#6b5d40]/50 text-[#1c1c18] hover:bg-[#f1ddb8]/40 transition-colors text-xs uppercase tracking-[0.14em] font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">photo_library</span>
              <span>Explorar Portafolio</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST / CONFIDENCE BAR */}
      <section className="bg-white py-8 border-b border-[#cfc4c5]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded bg-[#f6f3ed]/60 hover:bg-[#f6f3ed] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#f1ddb8]/40 flex items-center justify-center flex-shrink-0 text-[#6b5d40]">
                <span className="material-symbols-outlined text-[24px]">price_check</span>
              </div>
              <div>
                <h4 className="font-serif text-base md:text-lg font-medium text-[#1c1c18]">
                  Cotización gratuita
                </h4>
                <p className="text-xs text-[#4c4546]">Valoración sin costo para tu proyecto</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded bg-[#f6f3ed]/60 hover:bg-[#f6f3ed] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#f1ddb8]/40 flex items-center justify-center flex-shrink-0 text-[#6b5d40]">
                <span className="material-symbols-outlined text-[24px]">travel_explore</span>
              </div>
              <div>
                <h4 className="font-serif text-base md:text-lg font-medium text-[#1c1c18]">
                  Proyectos en todo el país
                </h4>
                <p className="text-xs text-[#4c4546]">Alcance nacional con dirección técnica</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded bg-[#f6f3ed]/60 hover:bg-[#f6f3ed] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#f1ddb8]/40 flex items-center justify-center flex-shrink-0 text-[#6b5d40]">
                <span className="material-symbols-outlined text-[24px]">design_services</span>
              </div>
              <div>
                <h4 className="font-serif text-base md:text-lg font-medium text-[#1c1c18]">
                  Atención personalizada
                </h4>
                <p className="text-xs text-[#4c4546]">Arquitectos dedicados a tu estilo de vida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US / QUIÉNES SOMOS */}
      <section className="py-20 lg:py-28 bg-[#fcf9f3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#6b5d40]" />
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40]">
                  Estudio de Arquitectura
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] leading-tight font-normal">
                Quiénes somos
              </h2>

              <p className="text-base sm:text-lg text-[#4c4546] font-light leading-relaxed">
                Somos una empresa especializada en diseño, arquitectura e interiorismo. Creamos espacios funcionales, elegantes e innovadores.
              </p>

              <p className="text-sm text-[#4c4546] font-light leading-relaxed">
                Nacidos en Valledupar, conjugamos la nobleza de las maderas cálidas, el mármol y la sobriedad contemporánea en proyectos residenciales, corporativos y comerciales concebidos con perfección artesanal y rigor milimétrico.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 bg-[#f6f3ed] p-5 rounded-lg border border-[#cfc4c5]/20">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#6b5d40] block font-light">
                    100%
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#4c4546] font-medium">
                    A la medida de cada cliente
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#6b5d40] block font-light">
                    +80
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#4c4546] font-medium">
                    Espacios transformados
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('quienes-somos')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-black hover:text-[#6b5d40] transition-colors"
                >
                  <span>Conoce nuestra filosofía y taller</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-lg shadow-2xl bg-[#f0eee8] group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHfOe7_zXvfEIIYrbSrzXxibg0E46YHYyla8HZpbpcR6qY6Amy_DCErYN0mwJDAnEtjU-P2EVPXjUvomZTrhD_UAch98UmLbNvMVePTHRsNA64cQdFt_dIW179xVuBeSekqiE7StSEev7tNHJ-FjWNUEm24EWjYClUxhjr-RFRfyzI8tAeFsdcQ8-kJcvFFYMyOioDWZ08y1cy_oQKReYMvi8YgIy-94OzQEcuXGZI"
                  alt="Sala de estar con panel alistonado de roble y chimenea monolítica en diseño Rada Concept"
                  className="w-full h-[380px] sm:h-[480px] md:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#fcf9f3]/95 backdrop-blur-md rounded-lg shadow-lg max-w-sm hidden sm:block border border-[#cfc4c5]/30">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#6b5d40] font-semibold block mb-1">
                    Materia Prima & Textura
                  </span>
                  <p className="text-xs text-[#1c1c18] italic font-light">
                    "El equilibrio entre el alistonado de madera natural y la serenidad de los tonos neutros."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES / NUESTROS SERVICIOS (6 Cards) */}
      <section className="py-20 lg:py-28 bg-[#f6f3ed] border-y border-[#cfc4c5]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
                Soluciones Integrales
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-normal">
                Nuestros Servicios
              </h2>
            </div>
            <p className="text-sm text-[#4c4546] font-light max-w-md">
              Abarcamos desde la concepción espacial y visualización tridimensional hasta la manufactura fina de mobiliario y domótica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="bg-white p-7 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 border border-[#cfc4c5]/20"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#f0eee8] flex items-center justify-center mb-6 group-hover:bg-[#f1ddb8] transition-colors">
                    <span className="material-symbols-outlined text-[26px] text-[#1c1c18]">
                      {svc.iconName}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1c1c18] mb-3 font-medium">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4c4546] mb-6 leading-relaxed font-light">
                    {svc.shortDesc}
                  </p>
                </div>

                <a
                  href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(svc.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full py-3 px-4 rounded bg-[#f6f3ed] hover:bg-black hover:text-white transition-all text-[#1c1c18]"
                >
                  <span className="text-[11px] uppercase tracking-[0.12em] font-semibold">
                    Cotizar {svc.title.toLowerCase()}
                  </span>
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('servicios')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#6b5d40] hover:text-black transition-colors"
            >
              <span>Ver especificaciones completas de cada servicio</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US / POR QUÉ ELEGIRNOS */}
      <section className="py-20 lg:py-28 bg-[#fcf9f3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
              Nuestra Propuesta de Valor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-normal">
              Por qué elegirnos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-[#f0eee8] p-6 rounded-lg text-center flex flex-col items-center hover:bg-[#f1ddb8]/30 transition-all duration-300 border border-[#cfc4c5]/20">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-[#6b5d40] shadow-xs">
                <span className="material-symbols-outlined text-[24px]">draw</span>
              </div>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Diseño personalizado
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                Cada trazo responde exclusivamente a tus hábitos, gustos y estilo de vida.
              </p>
            </div>

            <div className="bg-[#f0eee8] p-6 rounded-lg text-center flex flex-col items-center hover:bg-[#f1ddb8]/30 transition-all duration-300 border border-[#cfc4c5]/20">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-[#6b5d40] shadow-xs">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Atención personalizada
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                Trato directo y cercano con los arquitectos líderes de Rada Concept.
              </p>
            </div>

            <div className="bg-[#f0eee8] p-6 rounded-lg text-center flex flex-col items-center hover:bg-[#f1ddb8]/30 transition-all duration-300 border border-[#cfc4c5]/20">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-[#6b5d40] shadow-xs">
                <span className="material-symbols-outlined text-[24px]">aspect_ratio</span>
              </div>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Optimización de espacios
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                Aprovechamos cada centímetro cuadrado con soluciones funcionales e inteligentes.
              </p>
            </div>

            <div className="bg-[#f0eee8] p-6 rounded-lg text-center flex flex-col items-center hover:bg-[#f1ddb8]/30 transition-all duration-300 border border-[#cfc4c5]/20">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-[#6b5d40] shadow-xs">
                <span className="material-symbols-outlined text-[24px]">lightbulb</span>
              </div>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Soluciones innovadoras
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                Tendencias de vanguardia global, domótica y acabados de última generación.
              </p>
            </div>

            <div className="bg-[#f0eee8] p-6 rounded-lg text-center flex flex-col items-center hover:bg-[#f1ddb8]/30 transition-all duration-300 border border-[#cfc4c5]/20">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-[#6b5d40] shadow-xs">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <h4 className="font-serif text-base font-medium text-[#1c1c18] mb-2">
                Acompañamiento integral
              </h4>
              <p className="text-xs text-[#4c4546] font-light leading-relaxed">
                De principio a fin: desde el render inicial hasta la instalación de la última pieza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KITCHEN SIMULATOR (Interactive SVG Customizer) */}
      <section className="py-20 lg:py-28 bg-[#ebe8e2] border-y border-[#cfc4c5]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
              Experiencia Interactiva
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] mb-4 font-normal">
              Diseña la cocina de tus sueños
            </h2>
            <p className="text-base sm:text-lg text-[#4c4546] font-light">
              Juega con colores y materiales y mira cómo podría verse
            </p>
          </div>

          <KitchenSimulator />
        </div>
      </section>

      {/* 7. PROJECT GALLERY / NUESTROS PROYECTOS */}
      <section className="py-20 lg:py-28 bg-[#fcf9f3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
                Portafolio Seleccionado
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-normal">
                Nuestros proyectos
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.filter((proj) => proj.featured).map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative overflow-hidden rounded-lg bg-[#f0eee8] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#cfc4c5]/20"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#e5e2dc]">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {proj.images.length > 1 && (
                    <span className="absolute right-3 top-3 rounded bg-[#1c1c18]/90 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-white">
                      {proj.images.length} fotos
                    </span>
                  )}
                </div>
                <div className="p-5 bg-[#fcf9f3]">
                  <span className="text-[10px] uppercase tracking-[0.14em] font-medium text-[#6b5d40] block mb-1">
                    {proj.categoryLabel}
                  </span>
                  <h4 className="font-serif text-xl text-[#1c1c18] font-medium group-hover:text-[#6b5d40] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-[#4c4546] mt-1.5 font-light leading-relaxed">
                    {proj.isRender ? 'Render' : proj.categoryLabel}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#cfc4c5]/20 flex items-center justify-between text-xs text-[#6b5d40]">
                    <span className="font-medium">{proj.images.length > 1 ? `Ver ${proj.images.length} fotos` : 'Ver foto ampliada'}</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('galeria')}
              className="inline-flex items-center gap-2 bg-black text-[#fcf9f3] px-8 py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">photo_library</span>
              <span>Explorar todos los proyectos</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. HOW TO GET A QUOTE / CÓMO COTIZAR EN 3 PASOS */}
      <section className="py-20 lg:py-28 bg-[#f6f3ed] border-y border-[#cfc4c5]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
              Proceso Transparente
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-normal">
              Cómo cotizar en 3 pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col justify-between border border-[#cfc4c5]/20">
              <div>
                <span className="font-serif text-4xl text-[#f1ddb8] block mb-4 font-normal select-none">
                  01
                </span>
                <h3 className="font-serif text-xl text-[#1c1c18] mb-3 font-medium">
                  Escríbenos por WhatsApp o redes sociales
                </h3>
                <p className="text-xs sm:text-sm text-[#4c4546] font-light leading-relaxed">
                  Cuéntanos brevemente qué espacio deseas intervenir, tus medidas aproximadas o las ideas que te inspiran.
                </p>
              </div>
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-2 text-[#6b5d40] text-xs uppercase tracking-wider font-semibold hover:underline"
              >
                <span>Contacto inmediato</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col justify-between border border-[#cfc4c5]/20">
              <div>
                <span className="font-serif text-4xl text-[#f1ddb8] block mb-4 font-normal select-none">
                  02
                </span>
                <h3 className="font-serif text-xl text-[#1c1c18] mb-3 font-medium">
                  Cita presencial o virtual
                </h3>
                <p className="text-xs sm:text-sm text-[#4c4546] font-light leading-relaxed">
                  Escuchamos tus necesidades en una cita en nuestro estudio en Valledupar o por videollamada si estás en otra ciudad.
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="mt-8 flex items-center gap-2 text-[#6b5d40] text-xs uppercase tracking-wider font-semibold hover:underline text-left"
              >
                <span>Diagnóstico espacial</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col justify-between border border-[#cfc4c5]/20">
              <div>
                <span className="font-serif text-4xl text-[#f1ddb8] block mb-4 font-normal select-none">
                  03
                </span>
                <h3 className="font-serif text-xl text-[#1c1c18] mb-3 font-medium">
                  Recibe tu presupuesto personalizado
                </h3>
                <p className="text-xs sm:text-sm text-[#4c4546] font-light leading-relaxed">
                  Te entregamos una propuesta clara, detallada por partidas de obra, acabados y tiempos de entrega garantizados.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[#6b5d40] text-xs uppercase tracking-wider font-semibold">
                <span>Sin costo ni compromiso</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS / LO QUE DICEN NUESTROS CLIENTES */}
      <section className="py-20 lg:py-28 bg-[#fcf9f3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
              Opiniones Reales
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-normal">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#f6f3ed] p-8 rounded-lg shadow-xs flex flex-col justify-between border border-[#cfc4c5]/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-[#6b5d40]">
                      {[...Array(t.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-[20px] text-amber-600 fill-icon"
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7e7576]">
                      {t.projectType}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1c1c18] leading-relaxed italic mb-8 font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#cfc4c5]/20">
                  <div className="w-11 h-11 rounded-full bg-[#e5e2dc] flex items-center justify-center text-[#4c4546] flex-shrink-0 font-serif font-medium text-sm">
                    {t.clientName.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-medium text-[#1c1c18]">
                      {t.clientName}
                    </h5>
                    <span className="text-xs text-[#7e7576] font-light">{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ & MAP / RESOLVEMOS TUS DUDAS */}
      <section className="py-20 lg:py-28 bg-[#f6f3ed] border-t border-[#cfc4c5]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Accordion FAQs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-2">
                  Preguntas Frecuentes
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1c18] font-normal">
                  Resolvemos tus dudas
                </h2>
              </div>

              <div className="space-y-3 pt-2">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-xs overflow-hidden border border-[#cfc4c5]/30"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                        type="button"
                      >
                        <span className="font-serif text-base font-medium text-[#1c1c18]">
                          {faq.question}
                        </span>
                        <span
                          className={`material-symbols-outlined text-[#6b5d40] transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-[#4c4546] text-xs sm:text-sm font-light leading-relaxed border-t border-[#f0eee8] animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Rada Concept, tengo otra pregunta sobre sus servicios de arquitectura.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#f0eee8] hover:bg-white text-xs uppercase tracking-wider font-semibold text-[#1c1c18] border border-[#cfc4c5]/40 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">help_outline</span>
                  <span>Tengo otra pregunta</span>
                </a>
              </div>
            </div>

            {/* Studio Map & Location Card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl shadow-lg border border-[#cfc4c5]/30">
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block mb-1">
                  Visítanos en Nuestro Estudio
                </span>
                <h4 className="font-serif text-xl font-medium text-[#1c1c18]">
                  {STUDIO_INFO.address} • Valledupar
                </h4>
                <p className="text-xs text-[#4c4546] mt-1 font-light leading-relaxed">
                  Conoce muestras reales de piedras naturales, maderas alistonadas, herrajes europeos y catálogo en vivo.
                </p>
              </div>

              {/* Map Preview */}
              <div
                className="w-full h-72 rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner border border-[#cfc4c5]/30"
                style={{
                  backgroundImage: `url('${STUDIO_INFO.mapImageUrl}')`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="p-3 bg-white/95 backdrop-blur-md rounded shadow-md flex items-center gap-2 border border-[#cfc4c5]/30">
                    <span className="material-symbols-outlined text-red-600 text-[20px] fill-icon">
                      location_on
                    </span>
                    <span className="text-xs font-semibold text-[#1c1c18]">
                      Rada Concept Estudio
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#f0eee8] flex items-center justify-between text-xs">
                <span className="text-[#4c4546] font-light">Lunes a Viernes 8:00am - 6:00pm</span>
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase tracking-wider font-semibold text-[#6b5d40] hover:underline flex items-center gap-1"
                >
                  <span>Abrir en Maps</span>
                  <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA / LLAMADO FINAL */}
      <section className="py-20 lg:py-28 bg-[#fcf9f3] text-center border-t border-[#cfc4c5]/30">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1ddb8]/40 mb-6 border border-[#f1ddb8]">
            <span className="material-symbols-outlined text-[18px] text-[#6b5d40]">
              calendar_today
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6f6143]">
              Cita sin compromiso
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1c1c18] tracking-tight mb-6 font-normal">
            ¿Listo para transformar tu espacio?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#4c4546] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Demos el primer paso hacia una atmósfera de serenidad, funcionalidad y distinción para tu hogar o empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black text-[#fcf9f3] px-10 py-5 rounded shadow-xl hover:bg-[#1f2421] transition-all text-xs uppercase tracking-widest font-semibold"
            >
              <span className="material-symbols-outlined text-[22px]">event_available</span>
              <span>Agendar mi cita</span>
            </button>

            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#f6f3ed] text-[#1c1c18] px-8 py-5 rounded border border-[#cfc4c5]/40 hover:bg-[#f0eee8] transition-all text-xs uppercase tracking-widest font-semibold"
            >
              <span className="material-symbols-outlined text-[22px] text-[#6b5d40]">chat</span>
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
