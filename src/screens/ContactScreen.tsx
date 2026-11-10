import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/mockData';

export const ContactScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [modality, setModality] = useState<'presencial' | 'virtual'>('presencial');
  const [projectType, setProjectType] = useState('Cocina');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const fullMsg = encodeURIComponent(
      `Hola Rada Concept, deseo contactarlos:\n` +
      `• Nombre: ${name}\n` +
      `• Teléfono: ${phone}\n` +
      `• Email: ${email || 'No especificado'}\n` +
      `• Tipo de Espacio: ${projectType}\n` +
      `• Modalidad Deseada: ${modality === 'presencial' ? 'Presencial en Valledupar' : 'Virtual'}\n` +
      (message ? `• Mensaje: ${message}\n` : '') +
      `\nEspero su respuesta para coordinar.`
    );

    window.open(`${STUDIO_INFO.whatsappUrl}?text=${fullMsg}`, '_blank');
  };

  return (
    <div className="w-full py-12 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1ddb8]/40 mb-4 border border-[#f1ddb8]">
            <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40]">
              Estudio & Showroom • Valledupar
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1c1c18] font-normal leading-[1.15] mb-6">
            Hablemos de tu próximo espacio
          </h1>
          <p className="text-base sm:text-lg text-[#4c4546] font-light leading-relaxed">
            Estamos listos para transformar tu hogar, tienda u oficina. Agenda una cita en nuestro estudio en Valledupar o conéctate con nosotros desde cualquier ciudad del país.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Studio Details & Map */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-xl shadow-sm border border-[#cfc4c5]/30">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f1ddb8] text-[#6b5d40] flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px]">mark_email_read</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1c1c18]">¡Mensaje Preparado!</h3>
                <p className="text-sm text-[#4c4546] font-light max-w-md mx-auto">
                  Hemos enviado los detalles a nuestro canal prioritario de WhatsApp para responderte en menos de 2 horas hábiles.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded bg-[#f6f3ed] hover:bg-black hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#1c1c18] mb-1 font-medium">
                    Envíanos tu requerimiento
                  </h3>
                  <p className="text-xs text-[#7e7576] font-light">
                    Te responderemos con asesoría preliminar sin ningún compromiso.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full px-3.5 py-2.5 rounded bg-[#f6f3ed] border border-[#cfc4c5]/40 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                      WhatsApp o Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+57 300 000 0000"
                      className="w-full px-3.5 py-2.5 rounded bg-[#f6f3ed] border border-[#cfc4c5]/40 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                      Correo Electrónico (opcional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ejemplo@correo.com"
                      className="w-full px-3.5 py-2.5 rounded bg-[#f6f3ed] border border-[#cfc4c5]/40 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                      Espacio a Intervenir
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#f6f3ed] border border-[#cfc4c5]/40 text-xs text-[#1c1c18] focus:border-black focus:outline-none"
                    >
                      <option value="Cocina">Cocina de Autor</option>
                      <option value="Residencial Integral">Casa / Apartamento Completo</option>
                      <option value="Sala y Comedor">Sala / Área Social</option>
                      <option value="Local Comercial">Local Comercial o Restaurante</option>
                      <option value="Oficina Corporativa">Oficina Corporativa</option>
                      <option value="Carpintería Fija">Carpintería / Muebles Especiales</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-2">
                    ¿Cómo prefieres la atención?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setModality('presencial')}
                      className={`p-3 rounded border text-left text-xs transition-all ${
                        modality === 'presencial'
                          ? 'border-black bg-[#f0eee8] font-semibold text-black'
                          : 'border-[#cfc4c5]/40 bg-[#f6f3ed] text-[#4c4546]'
                      }`}
                    >
                      Visita a Estudio en Valledupar
                    </button>
                    <button
                      type="button"
                      onClick={() => setModality('virtual')}
                      className={`p-3 rounded border text-left text-xs transition-all ${
                        modality === 'virtual'
                          ? 'border-black bg-[#f0eee8] font-semibold text-black'
                          : 'border-[#cfc4c5]/40 bg-[#f6f3ed] text-[#4c4546]'
                      }`}
                    >
                      Asesoría Virtual (Google Meet)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#6b5d40] font-semibold block mb-1.5">
                    Detalles del proyecto
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos las medidas estimadas, ideas de diseño o cualquier inquietud..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#f6f3ed] border border-[#cfc4c5]/40 text-xs text-[#1c1c18] focus:border-black focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-black text-[#fcf9f3] py-4 rounded text-xs uppercase tracking-widest font-semibold hover:bg-[#1f2421] transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Enviar mensaje prioritario</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Card & Location Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f6f3ed] p-6 sm:p-8 rounded-xl border border-[#cfc4c5]/30 space-y-5">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6b5d40] block">
                Canales Directos
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[20px] text-[#6b5d40] mt-0.5">
                    location_on
                  </span>
                  <div>
                    <h5 className="text-xs font-semibold text-[#1c1c18]">Estudio Central</h5>
                    <p className="text-xs text-[#4c4546] font-light">{STUDIO_INFO.address}</p>
                    <p className="text-xs text-[#4c4546] font-light">{STUDIO_INFO.city}, {STUDIO_INFO.department}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[20px] text-[#6b5d40] mt-0.5">
                    phone_iphone
                  </span>
                  <div>
                    <h5 className="text-xs font-semibold text-[#1c1c18]">Línea Directa & WhatsApp</h5>
                    <a
                      href={STUDIO_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#6b5d40] font-medium hover:underline block"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[20px] text-[#6b5d40] mt-0.5">
                    schedule
                  </span>
                  <div>
                    <h5 className="text-xs font-semibold text-[#1c1c18]">Horario de Atención</h5>
                    <p className="text-xs text-[#4c4546] font-light">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-xs text-[#4c4546] font-light">Sábados: Con cita previa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[20px] text-[#6b5d40] mt-0.5">
                    photo_camera
                  </span>
                  <div>
                    <h5 className="text-xs font-semibold text-[#1c1c18]">Instagram Oficial</h5>
                    <a
                      href={STUDIO_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#6b5d40] font-medium hover:underline block"
                    >
                      {STUDIO_INFO.instagram}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div
                className="w-full h-60 rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner border border-[#cfc4c5]/30 mt-4"
                style={{
                  backgroundImage: `url('${STUDIO_INFO.mapImageUrl}')`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="p-2.5 bg-white/95 backdrop-blur-md rounded shadow-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-600 text-[18px] fill-icon">
                      location_on
                    </span>
                    <span className="text-xs font-semibold text-[#1c1c18]">
                      Rada Concept • Valledupar
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-right">
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#6b5d40] hover:underline"
                >
                  <span>Abrir ubicación en Google Maps</span>
                  <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
