import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Valledupar');
  const [serviceType, setServiceType] = useState(preselectedService || 'Residencial / Remodelación');
  const [modality, setModality] = useState<'presencial' | 'virtual'>('presencial');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Mañana (9:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = encodeURIComponent(
      `Hola Rada Concept, deseo agendar una cita de diseño:\n` +
      `• Nombre: ${name}\n` +
      `• Teléfono: ${phone}\n` +
      `• Ciudad: ${city}\n` +
      `• Tipo de Espacio: ${serviceType}\n` +
      `• Modalidad: ${modality === 'presencial' ? 'Presencial en Estudio (Valledupar)' : 'Virtual (Videollamada)'}\n` +
      `• Fecha Deseada: ${preferredDate || 'Por coordinar'}\n` +
      `• Horario: ${preferredTime}\n` +
      (notes ? `• Comentarios: ${notes}\n` : '') +
      `\nQuedo a la espera de su confirmación.`
    );

    // Open WhatsApp in new tab
    window.open(`${STUDIO_INFO.whatsappUrl}?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f3] text-[#1c1c18] rounded-xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#cfc4c5]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#fcf9f3]/95 backdrop-blur-sm px-6 py-4 border-b border-[#cfc4c5]/30 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block">
              Cita de Asesoría & Diagnóstico
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1c1c18]">
              Agendar con Rada Concept
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

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f1ddb8] text-[#6b5d40] flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>
              <h4 className="font-serif text-2xl text-[#1c1c18]">¡Solicitud Iniciada con Éxito!</h4>
              <p className="text-sm text-[#4c4546] font-light max-w-md mx-auto leading-relaxed">
                Hemos preparado tu mensaje de confirmación para WhatsApp. Un arquitecto de nuestro equipo revisará tu requerimiento y te contactará para confirmar el horario final.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded text-xs uppercase tracking-widest font-semibold"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Ver chat de WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded border border-black/20 text-xs uppercase tracking-widest text-[#1c1c18] hover:bg-[#f0eee8]"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs text-[#4c4546] font-light">
                Coordina un encuentro con nuestro equipo directivo en nuestro estudio en Valledupar o por videollamada si resides fuera de la ciudad.
              </p>

              {/* Modality Selector */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-2">
                  Modalidad de Cita
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setModality('presencial')}
                    className={`p-3 rounded border text-left transition-all flex items-center gap-2.5 ${
                      modality === 'presencial'
                        ? 'border-black bg-white shadow-xs font-medium text-black'
                        : 'border-[#cfc4c5]/40 bg-[#f6f3ed] text-[#4c4546]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#6b5d40]">storefront</span>
                    <div>
                      <div className="text-xs font-semibold">Presencial en Estudio</div>
                      <div className="text-[10px] text-[#7e7576]">Carrera 9 #8-48, Valledupar</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModality('virtual')}
                    className={`p-3 rounded border text-left transition-all flex items-center gap-2.5 ${
                      modality === 'virtual'
                        ? 'border-black bg-white shadow-xs font-medium text-black'
                        : 'border-[#cfc4c5]/40 bg-[#f6f3ed] text-[#4c4546]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#6b5d40]">videocam</span>
                    <div>
                      <div className="text-xs font-semibold">Virtual (Google Meet)</div>
                      <div className="text-[10px] text-[#7e7576]">Nacional & Internacional</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Personal Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Sofia Bermúdez"
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-[#cfc4c5]/50 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                    WhatsApp / Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +57 300 123 4567"
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-[#cfc4c5]/50 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Space and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                    Tipo de Espacio
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-[#cfc4c5]/50 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                  >
                    <option value="Cocina de Autor">Cocina de Autor</option>
                    <option value="Residencial / Remodelación">Residencial / Casa Completa</option>
                    <option value="Sala & Área Social">Sala & Área Social</option>
                    <option value="Espacio Comercial / Tienda">Espacio Comercial / Tienda</option>
                    <option value="Oficina Corporativa">Oficina Corporativa</option>
                    <option value="Carpintería & Mobiliario a Medida">Carpintería & Mobiliario a Medida</option>
                    <option value="Diseño 3D & Renders">Diseño 3D & Renders</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                    Ciudad del Proyecto
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ej. Valledupar, Barranquilla, Bogotá..."
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-[#cfc4c5]/50 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                    Fecha Sugerida
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-[#cfc4c5]/50 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                    Franja Horaria Preferida
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-[#cfc4c5]/50 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                  >
                    <option value="Mañana (8:30 AM - 11:30 AM)">Mañana (8:30 AM - 11:30 AM)</option>
                    <option value="Tarde (2:00 PM - 5:30 PM)">Tarde (2:00 PM - 5:30 PM)</option>
                    <option value="Sábado en la mañana">Sábado en la mañana (Previa cita)</option>
                  </select>
                </div>
              </div>

              {/* Optional comments */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                  Cuéntanos brevemente sobre tu proyecto (opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Deseo renovar una cocina de 25m² con isla de mármol y palillaje..."
                  className="w-full px-3.5 py-2 rounded bg-white border border-[#cfc4c5]/50 text-xs text-[#1c1c18] focus:border-black focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-black text-[#fcf9f3] py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Confirmar & Agendar Cita Gratis</span>
                </button>
                <p className="text-[11px] text-[#7e7576] text-center mt-2">
                  Atención 100% personalizada. Sin compromisos contractuales.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
