import { Project, ServiceItem, MaterialSample, Testimonial, FaqItem } from '../types';

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

export const PROJECTS: Project[] = [
  {
    id: 'cocina-isla-nacar',
    title: 'Cocina Isla Nácar',
    category: 'cocinas',
    categoryLabel: 'Residencial • Valledupar',
    location: 'Valledupar, Cesar',
    city: 'Valledupar',
    description: 'Mármol Calacatta, palillaje de roble y cava integrada',
    longDescription: 'Diseño integral de cocina abierta en concepto abierto con isla cascada monolítica en cuarzo Calacatta Gold. Frentes en madera natural con alistonado vertical, alacenas ocultas de piso a techo y cava de vinos empotrada con iluminación cálida 2700K regulable.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFeRsiz0Zz684LlKO2yFx5FPiIOpXmrbmR3sq1BtMHxsR5f4QQsr2TEb7vhS_uI0l_ynAlOgyWrpEesgzn4mvTnIuZhWhHivDzwBwq7vkjolW0D4eoOim6hF9yABCiqRdJdmaroQpj80-27h7vZITaDJMSYUHWbEGszPrXk7m_KQbHmak_6eeRLV0T-wNGE0QL2Mmt_o4h1gdcsqbIM71zni_T22gVozsdP06ff4Q2',
    materials: ['Cuarzo Calacatta Gold', 'Roble Europeo Alistonado', 'Herrajes Blum Blumotion', 'Perfilería Oculta Negro Mate'],
    area: '42 m²',
    year: '2024',
    featured: true
  },
  {
    id: 'salon-monolitico',
    title: 'Salón Monolítico',
    category: 'residencial',
    categoryLabel: 'Residencial • Novalito',
    location: 'Barrio Novalito, Valledupar',
    city: 'Valledupar',
    description: 'Panel alistonado retroiluminado y chimenea contemporánea',
    longDescription: 'Remodelación de área social principal en residencia privada en Novalito. Revestimiento de muro en palillaje continuo de roble con iluminación lineal LED embutida, hogar decorativo con piedra sinterizada oscura y mesa de centro monolítica en travertino romano de bordes rústicos.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHfOe7_zXvfEIIYrbSrzXxibg0E46YHYyla8HZpbpcR6qY6Amy_DCErYN0mwJDAnEtjU-P2EVPXjUvomZTrhD_UAch98UmLbNvMVePTHRsNA64cQdFt_dIW179xVuBeSekqiE7StSEev7tNHJ-FjWNUEm24EWjYClUxhjr-RFRfyzI8tAeFsdcQ8-kJcvFFYMyOioDWZ08y1cy_oQKReYMvi8YgIy-94OzQEcuXGZI',
    materials: ['Madera de Roble Curado', 'Travertino Romano', 'Ventanería Acero Negro', 'Lino Orgánico Natural'],
    area: '68 m²',
    year: '2024',
    featured: true
  },
  {
    id: 'boutique-aurelia',
    title: 'Boutique Aurelia',
    category: 'comercial',
    categoryLabel: 'Comercial • Valledupar',
    location: 'Centro Comercial / Calle 12, Valledupar',
    city: 'Valledupar',
    description: 'Arcos orgánicos con luz indirecta y texturas en microcemento',
    longDescription: 'Espacio comercial insignia concebido para crear una atmósfera inmersiva de calma y sofisticación. Nichos arqueados con iluminación perimetral tenue que realzan la exhibición de marroquinería y joyería de autor. Piso continuo en terrazo mineral y colgadores en latón cepillado.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPcrQudErawxweWEB5EkTBCtnkAZx3TlQzvRlBlICoMqMVvLPE76V-JiRZF2gRdMLiVePRLDUEtDRuDgBE0AKMZrNcbvMaK2ssV7UflC-VF5XFG-DNFca8dSLOXGY0tfQBTMvGQyEtyrDorcnORFKrZrPHU0G9BmPozu9GS79-rH27VbaWVCROfnXkBclndS3SKw3cJ6ogb50Y2P8zyNRsbCEv3YL-98vZeGn04Cu7',
    materials: ['Microcemento Mineral Cálido', 'Latón Cepillado Champagne', 'Piso Terrazo Marfil', 'Mobiliario Roble Natural'],
    area: '95 m²',
    year: '2024',
    featured: true
  },
  {
    id: 'oficina-presidencial',
    title: 'Oficina Presidencial',
    category: 'corporativo',
    categoryLabel: 'Corporativo • Valledupar',
    location: 'Edificio Empresarial, Valledupar',
    city: 'Valledupar',
    description: 'Alistonado acústico, escritorio de travertino y sobriedad ejecutiva',
    longDescription: 'Despacho corporativo para alta gerencia. Panel acústico de madera ranurada con iluminación cenital suspendida escultórica, escritorio escultórico ejecutado en losa maciza de mármol travertino y salón de juntas adyacente con cerramientos en vidrio templado y aluminio negro mate.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1j9YmGoe-lionkbIzbqes-lZ1kFWDVNWF_6KLDv4QaCmJ8TgQnaoA1XZ0upRxdVueRh1R-h-rKf1E7w-c2TfYLGi2yiLNVCJRhBXpubTA2UIuPlUnl34EnTbaPDIFCjgwjdXMLD-Kg7G4iqzMGMY8QAe23hUTSlL2RKB5K9qcNrqO09m5eibSuBmA2MGp_qGc9sGU53BUtgpXzHXom2LY-_Dmwl3v781p5d7ypxEb',
    materials: ['Travertino Esculpido', 'Madera Acústica Absorbente', 'Vidrio Flotado Acústico', 'Textiles Bouclé Crema'],
    area: '54 m²',
    year: '2023',
    featured: true
  },
  {
    id: 'comedor-serena',
    title: 'Comedor Serena',
    category: 'residencial',
    categoryLabel: 'Residencial • Club Campestre',
    location: 'Sector Club Campestre, Valledupar',
    city: 'Valledupar',
    description: 'Madera maciza, textiles en lino crudo y apertura al jardín exterior',
    longDescription: 'Comedor social formal integrado visualmente al patio tropical. Mesa redonda en madera maciza de zapan con base cónica, sillas ergonómicas tapizadas en lino belga repelente a manchas y lámpara central suspendida de geometría orgánica.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8xvga3oKLcisnyShnTHfqnMf3LYLvJxqvdDb5W964cpk-S2_noLUWrC05acmEHFWLgHggoB8VVTG_KjuhhTw14KPzr8X5yMb-C3tKB2ty-uDi7Yla_-yw5Y-yklUeRinnDZS8iy8oZmALrXgytgdvPsalXHNqOBOnSPLt06VvQDzJ4TPBlV7iohmYye9DY71AdAhRSNjGslXKW0Efppe2ymJV5VtEj0un6ZQqwUrg',
    materials: ['Madera Maciza de Zapan', 'Lino Puro Belga', 'Iluminación Cálida 2400K', 'Carpintería Perimetral de Nogal'],
    area: '38 m²',
    year: '2024',
    featured: true
  },
  {
    id: 'carpinteria-de-autor',
    title: 'Carpintería de Autor',
    category: 'detalles',
    categoryLabel: 'Detalle • Mobiliario a Medida',
    location: 'Taller & Proyectos Especiales',
    city: 'Valledupar',
    description: 'Manufactura milimétrica, perfiles ocultos y calidez sensorial',
    longDescription: 'Detalle de manufactura en taller propio. Cada unión a 45 grados, ranura acústica y gola oculta es calibrada a mano con maderas secadas al horno y selladas con aceites naturales no tóxicos para resistir el clima caribeño.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb_KBUpT4cq-LhADVtlf1tV2KRfRikZnzJK9CE6O1Lq1IZyj3Gr4joJm9x2Vh69mroT2mn1v3-5_NufdcY1NMbF5NB1zDMLBdtt988LvR1LaiSe4q--GgaboGCIDxEqkWC2Ywd4C6Y7udo4bBcTxLj1b22jEutoZD66CotIM0A4y0bxCcBP23zslr0EiDqcSQJj3jJS4rq-yih2DMn2XSmZA4y8iagwcfx0KDTtZRt',
    materials: ['Palillería de Roble Selecto', 'Aceites Naturales Mate', 'Perfiles de Difusión LED', 'Estructuras Reforzadas'],
    area: 'Mobiliario Fijo',
    year: '2024',
    featured: true
  }
];

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
