export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  neighborhood: string;
  type: 'Departamento' | 'Casa' | 'Lote' | 'Local' | 'PH';
  rooms: number;
  area?: string;
  image: string;
  featured?: boolean;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Lote en Colegiales',
    price: 'U$S 930.000',
    location: 'Av. Federico Lacroze y Conesa',
    neighborhood: 'Colegiales',
    type: 'Lote',
    rooms: 0,
    area: '2500m² construibles',
    image: 'https://cdn-images.xintelweb.com/upload/2db31d9e9023add63a2747407d320e8b.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Casa 4 amb. en Colegiales',
    price: 'U$S 595.000',
    location: 'Casa de estilo | 2 plantas',
    neighborhood: 'Colegiales',
    type: 'Casa',
    rooms: 4,
    area: 'Lote 8.66x33m',
    image: 'https://cdn-images.xintelweb.com/upload/edp1931_2.jpg',
    featured: true
  },
  {
    id: '3',
    title: 'Lote en Colegiales',
    price: 'U$S 590.000',
    location: 'Céspedes y Conde',
    neighborhood: 'Colegiales',
    type: 'Lote',
    rooms: 0,
    area: '8.66x23.60',
    image: 'https://cdn-images.xintelweb.com/upload/edp1575_2.jpg',
    featured: true
  },
  {
    id: '4',
    title: 'Lote en Colegiales',
    price: 'U$S 590.000',
    location: 'Jorge Newbery y E. Martínez',
    neighborhood: 'Colegiales',
    type: 'Lote',
    rooms: 0,
    area: '8.66x43.50',
    image: 'https://cdn-images.xintelweb.com/upload/edp1404_2.jpg',
    featured: true
  },
  {
    id: '5',
    title: 'Lote en Villa Crespo',
    price: 'U$S 570.000',
    location: 'Vera y Juan B. Justo',
    neighborhood: 'Villa Crespo',
    type: 'Lote',
    rooms: 0,
    area: '1088m² vendibles',
    image: 'https://cdn-images.xintelweb.com/upload/550173c7b726508451cb9e77c6200310.jpg',
    featured: true
  },
  {
    id: '6',
    title: 'Casa 5 amb. en Chacarita',
    price: 'U$S 558.000',
    location: 'Chacarita',
    neighborhood: 'Chacarita',
    type: 'Casa',
    rooms: 5,
    area: 'Garage | Quincho | Jardín',
    image: 'https://cdn-images.xintelweb.com/upload/41609bb83de0fe6f9f3d81954cd81af1.jpg',
    featured: true
  },
  {
    id: '7',
    title: 'Departamento Duplex 4 amb. en Belgrano',
    price: 'U$S 550.000',
    location: 'Arcos e/ Juramento y Mendoza',
    neighborhood: 'Belgrano',
    type: 'Departamento',
    rooms: 4,
    area: 'Cochera | Piso 8°',
    image: 'https://cdn-images.xintelweb.com/upload/13f6e344f4c99b70791d2b199d39a84b.jpg',
    featured: true
  },
  {
    id: '8',
    title: 'Lote en Colegiales',
    price: 'U$S 485.000',
    location: '8.66x32 | Zona residencial',
    neighborhood: 'Colegiales',
    type: 'Lote',
    rooms: 0,
    area: 'Apto 857m²',
    image: 'https://cdn-images.xintelweb.com/upload/71a08a352cb0b98c20bc7904c79b0685.jpg',
    featured: true
  },
  {
    id: '9',
    title: 'Lote en Palermo',
    price: 'U$S 460.000',
    location: 'Serrano y Gorriti',
    neighborhood: 'Palermo',
    type: 'Lote',
    rooms: 0,
    area: '600m² vendibles',
    image: 'https://cdn-images.xintelweb.com/upload/edp973_2.jpg'
  },
  {
    id: '10',
    title: 'Casa 4 amb. en Colegiales',
    price: 'U$S 418.000',
    location: 'Estilo Normando | 2 plantas',
    neighborhood: 'Colegiales',
    type: 'Casa',
    rooms: 4,
    image: 'https://cdn-images.xintelweb.com/upload/99871be43064b942a8b59e87d87e9a7e.jpg'
  },
  {
    id: '11',
    title: 'Casa 4 amb. en Parque Chas',
    price: 'U$S 400.000',
    location: 'Reciclada | Patio con pileta',
    neighborhood: 'Parque Chas',
    type: 'Casa',
    rooms: 4,
    image: 'https://cdn-images.xintelweb.com/upload/d002fd37d545e2d40898a0c56bad7888.jpeg'
  },
  {
    id: '12',
    title: 'Casa 5 amb. en Colegiales',
    price: 'U$S 399.000',
    location: 'Palpa y Conesa | Reciclada',
    neighborhood: 'Colegiales',
    type: 'Casa',
    rooms: 5,
    image: 'https://cdn-images.xintelweb.com/upload/1dc3331ae4856dec6dd3b00bc2d7f177.jpeg'
  },
  {
    id: '13',
    title: 'Casa 5 amb. en Colegiales',
    price: 'U$S 395.000',
    location: 'Olleros y Martínez',
    neighborhood: 'Colegiales',
    type: 'Casa',
    rooms: 5,
    image: 'https://cdn-images.xintelweb.com/upload/edp1299_2.jpg'
  },
  {
    id: '14',
    title: 'Departamento 3 amb. en Belgrano',
    price: 'U$S 390.000',
    location: 'Piso 14° | Torre gran calidad',
    neighborhood: 'Belgrano',
    type: 'Departamento',
    rooms: 3,
    image: 'https://cdn-images.xintelweb.com/upload/edp1886_2.jpg'
  },
  {
    id: '15',
    title: 'Casa 7 amb. en Parque Patricios',
    price: 'U$S 389.000',
    location: 'Frente sede Gobierno porteño',
    neighborhood: 'Parque Patricios',
    type: 'Casa',
    rooms: 7,
    image: 'https://cdn-images.xintelweb.com/upload/65e9d22723c46f5bfeae7c434345bdb4.jpg'
  },
  {
    id: '16',
    title: 'Local en esquina en Boedo',
    price: 'U$S 380.000',
    location: 'Av. Independencia esq. Virrey Liniers',
    neighborhood: 'Boedo',
    type: 'Local',
    rooms: 0,
    image: 'https://cdn-images.xintelweb.com/upload/a3750d3d04b9f36741654b76e77ed19c.jpg'
  },
  {
    id: '17',
    title: 'Departamento 4 amb. en Recoleta',
    price: 'U$S 375.000',
    location: 'Piso 11 | Gran categoría',
    neighborhood: 'Recoleta',
    type: 'Departamento',
    rooms: 4,
    image: 'https://cdn-images.xintelweb.com/upload/2e955fdd85bd3c1de65a37be1647895d.jpg'
  },
  {
    id: '18',
    title: 'Casa 4 amb. en Colegiales',
    price: 'U$S 360.000',
    location: 'Lote propio 8.66x18.50',
    neighborhood: 'Colegiales',
    type: 'Casa',
    rooms: 4,
    image: 'https://cdn-images.xintelweb.com/upload/edp1293_4.jpg'
  },
  {
    id: '19',
    title: 'Casa Duplex 4 amb. en Villa Urquiza',
    price: 'U$S 335.000',
    location: 'Duplex | Excelente estado',
    neighborhood: 'Villa Urquiza',
    type: 'Casa',
    rooms: 4,
    image: 'https://cdn-images.xintelweb.com/upload/9b4d781d9688126d105479369e199aae.jpg'
  },
  {
    id: '20',
    title: 'Departamento 5 amb. en Barrio Norte',
    price: 'U$S 320.000',
    location: 'Coronel Díaz y Santa Fe',
    neighborhood: 'Barrio Norte',
    type: 'Departamento',
    rooms: 5,
    image: 'https://cdn-images.xintelweb.com/upload/edp1695_2.jpg'
  },
  {
    id: '21',
    title: 'Departamento 4 amb. en Colegiales',
    price: 'U$S 320.000',
    location: 'Av. Lacroze y Conesa | 183m²',
    neighborhood: 'Colegiales',
    type: 'Departamento',
    rooms: 4,
    image: 'https://cdn-images.xintelweb.com/upload/edp608_2.jpg'
  },
  {
    id: '22',
    title: 'PH Duplex 3 amb. en Colegiales',
    price: 'U$S 295.000',
    location: 'Conesa y Céspedes | Balcón terraza',
    neighborhood: 'Colegiales',
    type: 'PH',
    rooms: 3,
    image: 'https://cdn-images.xintelweb.com/upload/7b98c7d01b8cb836361030e329b056b1.jpg'
  },
  {
    id: '23',
    title: 'PH 4 amb. en Palermo',
    price: 'U$S 280.000',
    location: 'Planta baja | 228m² totales',
    neighborhood: 'Palermo',
    type: 'PH',
    rooms: 4,
    image: 'https://cdn-images.xintelweb.com/upload/fa669d495c40f66b927defa924ad955f.jpg'
  },
  {
    id: '24',
    title: 'Casa PH 5 amb. en Saavedra',
    price: 'U$S 270.000',
    location: 'Ramallo y M. Acha',
    neighborhood: 'Saavedra',
    type: 'PH',
    rooms: 5,
    image: 'https://cdn-images.xintelweb.com/upload/b20ace65ba371ab84c6b05115c12ca45.jpg'
  }
];

export const NEIGHBORHOODS = [
  { name: 'Colegiales', count: 12, size: 'xl' },
  { name: 'Belgrano', count: 8, size: 'lg' },
  { name: 'Palermo', count: 6, size: 'lg' },
  { name: 'Villa Urquiza', count: 4, size: 'md' },
  { name: 'Recoleta', count: 3, size: 'md' },
  { name: 'Chacarita', count: 2, size: 'sm' },
  { name: 'Nuñez', count: 2, size: 'sm' },
  { name: 'Barrio Norte', count: 2, size: 'sm' },
  { name: 'Saavedra', count: 1, size: 'sm' },
  { name: 'Parque Chas', count: 1, size: 'sm' },
  { name: 'San Telmo', count: 1, size: 'sm' },
  { name: 'Villa Crespo', count: 1, size: 'sm' },
  { name: 'Caballito', count: 1, size: 'sm' },
  { name: 'Almagro', count: 1, size: 'sm' },
  { name: 'Retiro', count: 1, size: 'sm' }
];
