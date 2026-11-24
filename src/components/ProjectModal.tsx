import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { STUDIO_INFO } from '../data/mockData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenBooking }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % project.images.length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) => (current - 1 + project.images.length) % project.images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const activeImage = project.images[activeImageIndex];

  const quoteWhatsappUrl = `${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hola Rada Concept, vi la foto "${project.title}" y quisiera consultar por un proyecto similar.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-photo-title"
        className="max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-[#fcf9f3] text-[#1c1c18] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#cfc4c5]/30 bg-[#fcf9f3] px-5 py-4 sm:px-7">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40]">
              {project.isRender ? 'Render' : project.categoryLabel}
            </span>
            <h2 id="project-photo-title" className="mt-1 font-serif text-lg sm:text-2xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0eee8] text-[#1c1c18] hover:bg-black hover:text-white"
            aria-label="Cerrar foto ampliada"
          >
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </div>

        <div className="relative bg-[#e8e4dc] p-3 sm:p-6">
          <img
            src={activeImage.src}
            alt={activeImage.title}
            className="mx-auto max-h-[68vh] w-full object-contain"
          />
          {project.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActiveImageIndex((current) => (current - 1 + project.images.length) % project.images.length)}
                className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#fcf9f3]/95 text-[#1c1c18] shadow-md hover:bg-white"
                aria-label="Ver foto anterior"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveImageIndex((current) => (current + 1) % project.images.length)}
                className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#fcf9f3]/95 text-[#1c1c18] shadow-md hover:bg-white"
                aria-label="Ver foto siguiente"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col items-center gap-1 px-5 pt-4 text-center">
          <span className="text-xs text-[#4c4546]">{activeImage.title}</span>
          {project.images.length > 1 && (
            <span className="text-[10px] uppercase tracking-wider text-[#6b5d40]">
              Foto {activeImageIndex + 1} de {project.images.length}
            </span>
          )}
        </div>

        <div className="flex flex-col items-center gap-3 px-5 py-5 sm:flex-row sm:justify-center sm:px-7">
          <a
            href={quoteWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-black px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#fcf9f3] hover:bg-[#1f2421] sm:w-auto"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chat</span>
            Consultar por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded border border-black/30 px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#f1ddb8]/40 sm:w-auto"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">calendar_today</span>
            Agendar cita
          </button>
        </div>
      </div>
    </div>
  );
};
