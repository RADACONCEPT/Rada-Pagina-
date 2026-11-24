import React, { useState, useMemo } from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface PortfolioScreenProps {
  onSelectProject: (project: Project) => void;
  onOpenBooking: () => void;
}

export const PortfolioScreen: React.FC<PortfolioScreenProps> = ({
  onSelectProject,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos' },
    ...Array.from(
      new Map(PROJECTS.map((project) => [project.category, project.categoryLabel])).entries(),
      ([id, label]) => ({ id, label }),
    ),
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory =
        activeCategory === 'todos' || proj.category === activeCategory;
      const matchesSearch =
        searchTerm === '' ||
        proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.images.some((image) => image.title.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="w-full py-12 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1ddb8]/40 mb-4 border border-[#f1ddb8]">
            <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40]">
              Portafolio de Obras Realizadas
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1c1c18] font-normal leading-[1.15] mb-6">
            Galería de Proyectos
          </h1>
          <p className="text-base sm:text-lg text-[#4c4546] font-light leading-relaxed">
            Una mirada íntima a nuestros proyectos residenciales, locales comerciales y oficinas corporativas en Valledupar y Colombia. Cada espacio habla de su habitante.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#cfc4c5]/30">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded text-xs uppercase tracking-[0.12em] font-medium whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-black text-white border-black shadow-xs'
                      : 'bg-white text-[#4c4546] border-[#cfc4c5]/40 hover:border-black/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#7e7576]">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por material o zona..."
              className="w-full pl-9 pr-4 py-2 rounded bg-white border border-[#cfc4c5]/50 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7e7576] hover:text-black"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-20">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-[#cfc4c5]/30">
            <span className="material-symbols-outlined text-[40px] text-[#7e7576] mb-3">
              image_not_supported
            </span>
            <h4 className="font-serif text-xl text-[#1c1c18]">No se encontraron proyectos</h4>
            <p className="text-xs text-[#4c4546] font-light mt-1">
              Prueba cambiando el filtro de categoría o limpiando la búsqueda.
            </p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 bg-[#f0eee8] rounded text-xs font-medium hover:bg-black hover:text-white transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative overflow-hidden rounded-lg bg-white cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#cfc4c5]/20 flex flex-col justify-between"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#e5e2dc] relative">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {proj.isRender && (
                    <span className="absolute top-3 right-3 bg-[#1c1c18]/90 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-white">
                      Render
                    </span>
                  )}
                  {proj.images.length > 1 && (
                    <span className="absolute bottom-3 left-3 bg-[#fcf9f3]/95 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#1c1c18]">
                      {proj.images.length} fotos
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.14em] font-medium text-[#6b5d40] block mb-1">
                      {proj.categoryLabel}
                    </span>
                    <h4 className="font-serif text-xl text-[#1c1c18] font-medium group-hover:text-[#6b5d40] transition-colors">
                      {proj.title}
                    </h4>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#f0eee8] flex items-center justify-between text-xs text-[#6b5d40]">
                    <span className="font-medium">
                      {proj.images.length > 1 ? `Ver ${proj.images.length} fotos` : 'Ampliar foto'}
                    </span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f6f3ed] py-16 border-t border-[#cfc4c5]/30 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1c18] font-normal mb-3">
            ¿Inspirado por alguno de nuestros proyectos?
          </h3>
          <p className="text-sm text-[#4c4546] font-light mb-8 max-w-xl mx-auto">
            Podemos adaptar conceptos de materiales, iluminación y carpintería arquitectónica a las medidas exactas de tu inmueble.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Agendar Sesión de Diseño</span>
            </button>
            <a
              href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Rada Concept, estuve revisando su portafolio y me gustaría cotizar un proyecto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black border border-black/20 px-8 py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#f0eee8] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
