import { Project } from '../types';

interface AlbumEntry {
  title: string;
  files: string[];
  featured?: boolean;
  isRender?: boolean;
}

const addAlbums = (
  folder: string,
  category: string,
  categoryLabel: string,
  albums: AlbumEntry[],
): Project[] => albums.map(({ title, files, featured = false, isRender = false }) => {
  const folderPath = folder ? `${folder}/` : '';
  const images = files.map((file) => ({
    title: file,
    src: encodeURI(`/assets/rada/${folderPath}${file}`),
  }));
  const id = `${category}-${title}`
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return {
    id,
    title,
    category,
    categoryLabel,
    imageUrl: images[0].src,
    images,
    isRender,
    featured,
  };
});

export const PROJECTS: Project[] = [
  ...addAlbums('', 'intervencion-civil', 'Intervención civil', [
    {
      title: 'RECUBRIMIENTO DE PARED CON PUERTA OCULTA',
      files: [
        'RECUBRIMIENTO DE PARED CON PUERTA OCULTA.jpeg',
        'RECUBRIMIENTO DE PARED CON PUERTA OCULTA 2.jpeg',
      ],
      featured: true,
    },
  ]),
  ...addAlbums('CENTRO TV', 'centro-tv', 'Centro TV', [
    {
      title: 'CENTRO TV CON LICORERA BARCELONA',
      files: [
        'CENTRO TV CON LICORERA BARCELONA.jpeg',
        'CENTRO DE TV CON LICORERA BARCELONA 2.jpeg',
      ],
    },
    { title: 'CENTRO DE TV', files: ['CENTRO DE TV.jpeg'] },
    { title: 'CENTRO TV 2', files: ['CENTRO TV 2.jpeg'], featured: true },
  ]),
  ...addAlbums('CLOSET Y WALKIN CLOSET', 'closets', 'Closets y walk-in closet', [
    { title: 'CLOSET ALINA', files: ['CLOSET ALINA.jpeg'] },
    { title: 'WALKIN CLOSET', files: ['WALKIN CLOSET.jpeg'] },
  ]),
  ...addAlbums('COCINAS', 'cocinas', 'Cocinas', [
    { title: 'COCINA CAMPESTRE BONDA', files: ['COCINA CAMPESTRE BONDA.jpeg'] },
    { title: 'COCINA CON ISLA', files: ['COCINA CON ISLA.jpeg'], featured: true },
    { title: 'COCINA CON PENINSULA', files: ['COCINA CON PENINSULA.jpeg'] },
    { title: 'COCINA LA RIOJA', files: ['COCINA LA RIOJA.jpeg'] },
    { title: 'COCINA LINEAL', files: ['COCINA LINEAL.jpeg'] },
    { title: 'COCINA MAICOL', files: ['COCINA MAICOL.jpeg'] },
  ]),
  ...addAlbums('HABITACIONES', 'habitaciones', 'Habitaciones', [
    { title: 'CUARTO INFANTIL', files: ['CUARTO INFANTIL.jpeg'] },
  ]),
  ...addAlbums('', 'detalles', 'Detalles de mobiliario', [
    { title: 'MINI BAR', files: ['MINI BAR.jpeg'] },
    { title: 'MUEBLE BAÑO', files: ['MUEBLE BAÑO.jpeg'] },
    { title: 'ORATORIO', files: ['ORATORIO.jpeg'] },
  ]),
  ...addAlbums('RENDERS', 'renders', 'Renders', [
    {
      title: 'RECUBRIMIENTO ESCALERA DOBLE ALTURA',
      files: [
        'RECUBRIMIENTO ESCALERA DOBLE ALTURA 2.jpeg',
        'RENDER RECUBRIMIENTO ESCALERA DOBLE ALTURA.jpeg',
      ],
      isRender: true,
    },
  ]),
  ...addAlbums('SHOW ROOM RADA CONCEPT', 'showroom', 'Show Room Rada Concept', [
    {
      title: 'SHOW ROOM RADA CONCEPT',
      files: [
        'ESPACIO RADA 4.jpeg',
        'ESPACIO RADA 5.jpeg',
        'ESPACIO RADA 6.jpeg',
        'ESPACIO RADA 7.jpeg',
        'ESPACIO RADA 8.jpeg',
        'ESPACIO RADA 9.jpeg',
        'ESPACIO RADA CONCEPT 2.jpeg',
        'ESPACIO RADA CONCEPT 3.jpeg',
        'ESPACIOS RADA CONCEPT 1.jpeg',
        'ESTACION DE CAFE.jpeg',
      ],
    },
  ]),
  ...addAlbums('TALLER E INSTALACION', 'instalacion', 'Taller e instalación', [
    { title: 'INSTALACION', files: ['INSTALACION.jpeg'] },
  ]),
  ...addAlbums('VANITY', 'vanity', 'Vanity', [
    { title: 'VANITY 2', files: ['VANITY 2.jpeg'] },
    { title: 'VANITY', files: ['VANITY.jpeg'] },
  ]),
];
