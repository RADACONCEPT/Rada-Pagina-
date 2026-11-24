export type ScreenType = 'home' | 'quienes-somos' | 'servicios' | 'galeria' | 'cotizador' | 'contactanos';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  imageUrl: string;
  images: { src: string; title: string }[];
  isRender?: boolean;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  whatsappMessage: string;
  inclusions: string[];
  timeline: string;
}

export interface MaterialSample {
  name: string;
  category: string;
  description: string;
  colorHex: string;
  textureLabel: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  city: string;
  projectType: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
