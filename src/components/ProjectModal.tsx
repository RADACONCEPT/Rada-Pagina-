import React from 'react';
import { Project } from '../types';
import { STUDIO_INFO } from '../data/mockData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenBooking }) => {
  if (!project) return null;

  const quoteWhatsappUrl = `${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hola Rada Concept, me encantó el proyecto "${project.title}" (${project.categoryLabel}) y quisiera cotizar un espacio con características similares.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f3] text-[#1c1c18] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#cfc4c5]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="sticky top-0 bg-[#fcf9f3]/95 backdrop-blur-sm px-6 py-4 border-b border-[#cfc4c5]/30 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block">
              {project.categoryLabel}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1c1c18]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f0eee8] hover:bg-black hover:text-white flex items-center justify-center transition-colors"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Image */}
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#f0eee8]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-[#f6f3ed] border border-[#cfc4c5]/20 text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7e7576] block mb-1">
                Ubicación
              </span>
              <span className="font-medium text-[#1c1c18]">{project.location}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7e7576] block mb-1">
                Año
              </span>
              <span className="font-medium text-[#1c1c18]">{project.year}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7e7576] block mb-1">
                Escala / Área
              </span>
              <span className="font-medium text-[#1c1c18]">{project.area || 'A medida'}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7e7576] block mb-1">
                Estudio
              </span>
              <span className="font-medium text-[#1c1c18]">Rada Concept</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-medium text-[#1c1c18]">
              Concepto Arquitectónico
            </h4>
            <p className="text-sm text-[#4c4546] font-light leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Material Palette Used */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-medium text-[#1c1c18]">
              Materialidad & Acabados Seleccionados
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.materials.map((mat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded bg-white border border-[#cfc4c5]/30 text-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#6b5d40]" />
                  <span className="text-[#1c1c18] font-medium">{mat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#cfc4c5]/30 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={quoteWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-black text-[#fcf9f3] py-3.5 px-6 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-colors text-center"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Cotizar proyecto similar</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-black text-black py-3.5 px-6 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#f1ddb8]/40 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>Agendar cita de diseño</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
