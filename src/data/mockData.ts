import { ServiceItem, MaterialSample, Testimonial, FaqItem } from '../types';

export const STUDIO_INFO = {
  name: 'Rada Concept',
  tagline: 'Arquitectura & Interiorismo de Autor',
  city: 'Valledupar',
  address: 'Carrera 9 #8-48',
  department: 'Cesar, Colombia',
  phone: '+57 350 289 9088',
  phoneClean: '573502899088',
  whatsappUrl: 'https://wa.me/573502899088',
  instagram: '@rada_concept',
  instagramUrl: 'https://instagram.com/rada_concept',
  email: 'contacto@radaconcept.com',
  hours: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados con cita previa',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XLepM4xgfC_6oxQfJUtFV1RKkVDCCrsXr-j63GtdvXnmP9B5kMcZHkaVfuyJjCFVOQQumdqbN6JG0ik_vJOQCuvZUzdRHK2Ju46fzZ1bQAfEHhKjZrY-8_ELBeM29WiRNK21SoAq85hgbU9DhYshLSGDF5b2LjZfk0p_UYpXZ_N-T2fgWBb9cOvizQfQwY09AzcBnidkAT5PSsjmfOsItUUlgD69X78BVHwPqcvdJT_Q',
  mapImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCODjSiT9C91x-NOt_ueVZN0kOFgZBnenaZ_R9HWlnEtGYVPLYn71yLh4hGbPEJrFa3mgGS1J8dJG_YD-OyHPlA9aOBcTBhNBbR7N6rZ4aEbHzUAnGAbDqJYEewAxUkgH0kzs-zlTvrq0-f88uH-DhTj2nm_4DwcdfQ1ZKIJhl2tWomoetcIlfjTdt2sIrqFAVTJoK_4k_Wohb6t127BYlnIHpgSvAhhtHNspYI5J-M',
  googleMapsUrl: 'https://maps.google.com/?q=Carrera+9+8-48+Valledupar+Colombia'
};

export { PROJECTS } from './portfolioData';

export const SERVICES: ServiceItem[] = [
  {
    id: 'residencial',
    title: 'Residencial',
    shortDesc: 'Casas, apartamentos y remodelaciones en general. Transformamos hogares en refugios de calma y alta funcionalidad.',
    fullDesc: 'Intervención integral o parcial de viviendas privadas: diseño arquitectónico, redistribución de plantas, remodelación de cocinas gourmet, baños tipo spa, habitaciones principales y zonas sociales con máxima identidad.',
    iconName: 'roofing',
    whatsappMessage: 'Hola Rada Concept, quisiera cotizar un proyecto Residencial con ustedes.',
    inclusions: [
      'Levantamiento arquitectónico milimétrico',
      'Propuesta de distribución y circulación espacial',
      'Selección de pisos, muros y carpintería',
      'Diseño de iluminación arquitectónica'
    ],
    timeline: '4 a 8 semanas según escala'
  },
  {
    id: 'comercial',
    title: 'Espacios comerciales',
    shortDesc: 'Tiendas, restaurantes, cafeterías y más. Diseñamos atmósferas que potencian la experiencia de compra y multiplican tus ventas.',
    fullDesc: 'Arquitectura comercial estratégica (Retail Design). Desarrollamos conceptos visuales atractivos pensados para el flujo de clientes, exhibición óptima de producto y máxima recordación de marca.',
    iconName: 'storefront',
    whatsappMessage: 'Hola Rada Concept, quisiera cotizar un proyecto para mi Local Comercial.',
    inclusions: [
      'Análisis de experiencia de cliente y recorrido de compra',
      'Mobiliario de exhibición y mostradores personalizados',
      'Iluminación escénica para destacar productos',
      'Fachadas y branding espacial arquitectónico'
    ],
    timeline: '3 a 6 semanas'
  },
  {
    id: 'corporativo',
    title: 'Oficinas corporativas',
    shortDesc: 'Diseño de espacios productivos y modernos. Entornos ergonómicos, ejecutivos y acústicamente optimizados.',
    fullDesc: 'Creación de sedes empresariales, despachos gerenciales y oficinas colaborativas que inspiran productividad, bienestar y transmiten solidez a clientes y socios.',
    iconName: 'corporate_fare',
    whatsappMessage: 'Hola Rada Concept, quisiera cotizar el diseño de mi Oficina o Espacio Corporativo.',
    inclusions: [
      'Zonificación acústica y puestos ergonómicos',
      'Salas de juntas multimedia integradas',
      'Cabinas de llamada y zonas de café ejecutivas',
      'Mobiliario a medida con canalizaciones ocultas'
    ],
    timeline: '4 a 7 semanas'
  },
  {
    id: 'asesoria',
    title: 'Asesoría integral de proyectos',
    shortDesc: 'Te guiamos en cada decisión de tu proyecto. Elección de materiales, distribución arquitectónica y presupuesto exacto.',
    fullDesc: 'Acompañamiento profesional personalizado tanto para propietarios como para constructores. Te asesoramos en compatibilidad de materiales, cronogramas de obra, supervisión estética y optimización de costos.',
    iconName: 'handshake',
    whatsappMessage: 'Hola Rada Concept, deseo pedir asesoría integral para un proyecto.',
    inclusions: [
      'Sesión de diagnóstico y viabilidad espacial',
      'Libro de especificaciones y fichas técnicas',
      'Catálogo de proveedores y presupuestos comparativos',
      'Visitas de seguimiento a obra presenciales o virtuales'
    ],
    timeline: 'Por fases o acompañamiento mensual'
  },
  {
    id: 'renders',
    title: 'Diseños virtuales 3D y renders',
    shortDesc: 'Mira tu espacio antes de construirlo. Renders fotorrealistas con iluminación natural, texturas reales y recorridos.',
    fullDesc: 'Modelado tridimensional de precisión con simulaciones lumínicas exactas del sol caribeño y luz artificial nocturna. Visualiza cada textura, mueble y detalle antes de invertir en la obra física.',
    iconName: 'view_in_ar',
    whatsappMessage: 'Hola Rada Concept, quiero ver mi espacio en 3D y renders fotorrealistas.',
    inclusions: [
      'Modelado 3D de alta fidelidad',
      'Vistas fijas fotorrealistas en resolución 4K',
      'Recorridos virtuales interactivos 360°',
      'Variaciones de color y materiales para toma de decisiones'
    ],
    timeline: '7 a 14 días hábiles'
  },
  {
    id: 'complementos',
    title: 'Complementos decorativos',
    shortDesc: 'Diseño de iluminación, cortinas domotizadas y manuales, papel de colgadura personalizado y selección artística.',
    fullDesc: 'La capa final que aporta alma y sofisticación: cortinería técnica y decorativa, alfombras a medida, tapicería en linos y cueros nobles, curaduría de obras de arte y accesorios de autor.',
    iconName: 'curtains',
    whatsappMessage: 'Hola Rada Concept, deseo cotizar complementos decorativos para mi espacio.',
    inclusions: [
      'Telas importadas y linos lavados resistentes',
      'Sistemas de motorización y domótica compatibles',
      'Papeles murales botánicos y geométricos exclusivos',
      'Estilismo y montaje final en sitio'
    ],
    timeline: '2 a 4 semanas'
  }
];

export const MATERIALS_LIBRARY: MaterialSample[] = [
  {
    name: 'Roble Europeo Alistonado',
    category: 'Maderas Nobles',
    description: 'Veta uniforme y tonalidad cálida secada al horno para estabilidad climática en Valledupar.',
    colorHex: '#d9be9b',
    textureLabel: 'Palillaje 20x20mm'
  },
  {
    name: 'Travertino Romano Rústico',
    category: 'Piedras Naturales',
    description: 'Piedra sedimentaria con porosidades minerales únicas, sellada para máxima durabilidad.',
    colorHex: '#ede3d1',
    textureLabel: 'Acabado Apomazado'
  },
  {
    name: 'Cuarzo Calacatta Gold',
    category: 'Superficies Continuas',
    description: 'Fondo marfil puro con vetas doradas y grises, resistente a manchas de café, vino y calor.',
    colorHex: '#f8f7f4',
    textureLabel: 'Pulido Seda'
  },
  {
    name: 'Microcemento Arena Cálida',
    category: 'Revestimientos Continuos',
    description: 'Aplicación monolítica sin juntas, ideal para arcos, nichos y muros de impacto sensorial.',
    colorHex: '#e5ded4',
    textureLabel: 'Textura Sedosa'
  },
  {
    name: 'Lino Orgánico Crudo',
    category: 'Textiles de Autor',
    description: 'Tejido transpirable de fibra natural para cortinas vaporosas y tapicería de alto confort.',
    colorHex: '#ede9e2',
    textureLabel: 'Trama Natural'
  },
  {
    name: 'Latón Cepillado Champagne',
    category: 'Metales & Acentos',
    description: 'Metales nobles con pátina protectora antihuellas para colgadores, tiradores y luminarias.',
    colorHex: '#c7b28b',
    textureLabel: 'Satinado Líquido'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dra. María Claudia Restrepo',
    city: 'Valledupar • Novalito',
    projectType: 'Remodelación Integral & Cocina',
    quote: 'El cambio en nuestra casa fue absoluto. Rada Concept captó desde la primera cita lo que soñábamos: mucha luz, orden impecable y una cocina en mármol y roble que ahora es el centro de todas nuestras reuniones familiares.',
    rating: 5
  },
  {
    id: 'test-2',
    clientName: 'Ing. Carlos Mendoza V.',
    city: 'Valledupar • Club Campestre',
    projectType: 'Salón Principal & Terraza',
    quote: 'La puntualidad en los tiempos y el nivel de detalle de la carpintería alistonada superaron cualquier expectativa. Ver el render 3D idéntico al resultado final construido nos dio total tranquilidad.',
    rating: 5
  },
  {
    id: 'test-3',
    clientName: 'Laura Sofía Gómez',
    city: 'Barranquilla • Proyecto Remoto',
    projectType: 'Boutique Comercial',
    quote: 'Aunque nuestro local estaba en otra ciudad, la dirección técnica y el envío de todo el mobiliario personalizado fue perfecto. Nuestros clientes siempre elogian la elegancia y calidez de la tienda.',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Dónde estamos ubicados?',
    answer: 'Nuestro estudio principal se encuentra en la Carrera 9 #8-48 en Valledupar, Cesar. Atendemos de lunes a viernes de 8:00 AM a 6:00 PM, y sábados con previa cita.'
  },
  {
    question: '¿Trabajan en todo el país?',
    answer: '¡Sí! Aunque nuestra sede de producción y diseño está en Valledupar, desarrollamos proyectos arquitectónicos, diseño de interiores y envío de mobiliario a medida en Barranquilla, Santa Marta, Bogotá, Medellín, Cartagena y en cualquier ciudad de Colombia con dirección técnica presencial o remota.'
  },
  {
    question: '¿Cómo es el proceso de cotización?',
    answer: 'Es 100% gratuito. Iniciamos con un contacto inicial donde conocemos tus requerimientos y dimensiones; agendamos una sesión presencial o virtual para afinar detalles y te presentamos un desglose detallado con cronograma y materiales.'
  },
  {
    question: '¿Cuánto cuesta una cocina de autor?',
    answer: 'El valor depende de los metros lineales, los materiales de los frentes (maderas alistonadas, lacas UV, polímeros anti-huellas), herrajes de cierre suave (Blum/Hettich) y el tipo de mesón (cuarzo, porcelánico sinterizado, granito o mármol). Adaptamos la propuesta a la escala y presupuesto de tu inversión.'
  },
  {
    question: '¿Qué otros servicios ofrecen?',
    answer: 'Además de diseño y construcción, ofrecemos renders fotorrealistas 3D, carpintería arquitectónica a medida, iluminación escénica, cortinas domotizadas, paneles decorativos acústicos y selección de arte y estilismo.'
  },
  {
    question: '¿Puedo contratar solo el diseño o también la fabricación?',
    answer: 'Ofrecemos ambas modalidades: puedes contratar exclusivamente el diseño conceptual y planos ejecutivos para cotizar con terceros, o contratar el paquete llave en mano donde nosotros nos encargamos de la manufactura e instalación completa garantizada.'
  }
];
