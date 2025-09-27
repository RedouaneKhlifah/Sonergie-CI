import { Zap, Camera, Thermometer, Wrench, Settings } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
  price: number;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
}

export const categories: Category[] = [
  {
    id: "electricite",
    name: "Électricité",
    description: "Équipements électriques, câbles, transformateurs et solutions de distribution",
    icon: Zap,
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: "camera",
    name: "Caméra",
    description: "Systèmes de surveillance, caméras de sécurité et équipements de vidéosurveillance",
    icon: Camera,
    color: "from-blue-400 to-purple-500"
  },
  {
    id: "climatisation",
    name: "Climatisation",
    description: "Systèmes de climatisation, ventilation et contrôle de température",
    icon: Thermometer,
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: "plomberie",
    name: "Plomberie",
    description: "Équipements de plomberie, tuyauterie et systèmes de distribution d'eau",
    icon: Wrench,
    color: "from-green-400 to-teal-500"
  },
  {
    id: "accessoires",
    name: "Accessoires",
    description: "Outils, accessoires et équipements complémentaires pour tous vos besoins",
    icon: Settings,
    color: "from-gray-400 to-slate-500"
  }
];

export const products: Product[] = [
  // Électricité
  {
    id: 1,
    name: "Câbles et Fils Électriques Premium",
    description: "Câbles de qualité premium en cuivre et aluminium pour la distribution électrique, systèmes de contrôle et applications de transmission de données.",
    image: "https://images.unsplash.com/photo-1692343421570-649b993c28e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwd2lyZXN8ZW58MXx8fHwxNzU4NzQyMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Zap,
    features: ["Certifié IEC", "Résistant au feu", "Multiples tensions", "Garantie 5 ans"],
    price: 125000,
    category: "electricite",
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "Interrupteurs et Prises Moderne",
    description: "Interrupteurs électriques modernes, prises et dispositifs de contrôle conçus pour la sécurité, la durabilité et l'attrait esthétique.",
    image: "https://images.unsplash.com/photo-1623495801487-661d1614b971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3dpdGNoZXMlMjBvdXRsZXRzfGVufDF8fHx8MTc1ODYzNTY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Zap,
    features: ["Contrôles intelligents", "Résistant aux intempéries", "Design moderne", "Installation facile"],
    price: 45000,
    category: "electricite",
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Transformateurs Haute Puissance",
    description: "Transformateurs de puissance haute efficacité pour la conversion de tension dans les applications industrielles, commerciales et résidentielles.",
    image: "https://images.unsplash.com/photo-1741449840536-a758bb0cdaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdHJhbnNmb3JtZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4NzQyMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Zap,
    features: ["Haute efficacité", "Faible bruit", "Design rempli d'huile", "Certifié CE"],
    price: 850000,
    category: "electricite",
    inStock: true,
    rating: 4.9,
    reviews: 23
  },
  {
    id: 4,
    name: "Solutions d'Éclairage LED",
    description: "Luminaires LED écoénergétiques pour applications intérieures et extérieures avec longue durée de vie et performance supérieure.",
    image: "https://images.unsplash.com/photo-1604122747172-5379bac4ea9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBsaWdodGluZyUyMGZpeHR1cmVzJTIwbW9kZXJufGVufDF8fHx8MTc1ODc0MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Zap,
    features: ["Économie d'énergie", "Longue durée de vie", "Designs multiples", "Dimmable"],
    price: 75000,
    category: "electricite",
    inStock: true,
    rating: 4.7,
    reviews: 134
  },

  // Caméra
  {
    id: 5,
    name: "Caméras de Surveillance HD",
    description: "Système de surveillance haute définition avec vision nocturne, détection de mouvement et enregistrement cloud.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYXxlbnwxfHx8fDE3NTg3NDIyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Camera,
    features: ["Vision nocturne", "Détection de mouvement", "Enregistrement cloud", "App mobile"],
    price: 180000,
    category: "camera",
    inStock: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 6,
    name: "Système de Vidéosurveillance IP",
    description: "Caméras IP professionnelles avec zoom optique, vision panoramique et intégration domotique.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcCUyMGNhbWVyYXxlbnwxfHx8fDE3NTg3NDIyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Camera,
    features: ["Zoom optique", "Vision panoramique", "Intégration domotique", "Résistant aux intempéries"],
    price: 320000,
    category: "camera",
    inStock: true,
    rating: 4.8,
    reviews: 45
  },

  // Climatisation
  {
    id: 7,
    name: "Climatiseur Inverter Économique",
    description: "Système de climatisation inverter haute efficacité avec contrôle intelligent et économie d'énergie optimale.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmd8ZW58MXx8fHwxNzU4NzQyMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Thermometer,
    features: ["Technologie Inverter", "Contrôle intelligent", "Économie d'énergie", "Installation professionnelle"],
    price: 450000,
    category: "climatisation",
    inStock: true,
    rating: 4.6,
    reviews: 92
  },
  {
    id: 8,
    name: "Ventilateur Industriel Puissant",
    description: "Ventilateur industriel haute performance pour la ventilation et le refroidissement des espaces commerciaux.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFuJTIwdmVudGlsYXRpb258ZW58MXx8fHwxNzU4NzQyMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Thermometer,
    features: ["Haute performance", "Contrôle de vitesse", "Résistant aux intempéries", "Maintenance facile"],
    price: 280000,
    category: "climatisation",
    inStock: true,
    rating: 4.4,
    reviews: 67
  },

  // Plomberie
  {
    id: 9,
    name: "Pompe à Eau Centrifuge",
    description: "Pompe centrifuge haute efficacité pour l'alimentation en eau, l'irrigation et les applications industrielles.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHB1bXAlMjBpbmR1c3RyaWFsfGVufDF8fHwxNzU4NzQyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Wrench,
    features: ["Haute efficacité", "Corps en acier inoxydable", "Résistant à la corrosion", "Installation facile"],
    price: 350000,
    category: "plomberie",
    inStock: true,
    rating: 4.7,
    reviews: 56
  },
  {
    id: 10,
    name: "Tuyaux et Raccords PVC",
    description: "Système complet de tuyauterie PVC pour l'évacuation et la distribution d'eau avec tous les raccords nécessaires.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHZpbmclMjBwaXBlcyUyMHR1YmluZ3xlbnwxfHx8fDE3NTg3NDIyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Wrench,
    features: ["Résistant à la corrosion", "Facile à installer", "Longue durée de vie", "Certifié NSF"],
    price: 85000,
    category: "plomberie",
    inStock: true,
    rating: 4.3,
    reviews: 43
  },

  // Accessoires
  {
    id: 11,
    name: "Boîte à Outils Professionnelle",
    description: "Ensemble complet d'outils électriques et de plomberie pour tous vos travaux de maintenance et installation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMHRvb2xib3glMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NzQyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Settings,
    features: ["Outils de qualité", "Organisation optimale", "Transport facile", "Garantie 2 ans"],
    price: 150000,
    category: "accessoires",
    inStock: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 12,
    name: "Multimètre Digital Avancé",
    description: "Multimètre professionnel avec mesure de tension, courant, résistance et test de continuité pour diagnostics électriques.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aW1ldGVyJTIwZGlnaXRhbCUyMHRlc3RlcndlbnxlbnwxfHx8fDE3NTg3NDIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Settings,
    features: ["Mesures précises", "Écran LCD", "Protection contre les surtensions", "Certifié CE"],
    price: 95000,
    category: "accessoires",
    inStock: true,
    rating: 4.8,
    reviews: 124
  }
];

// Fonction pour obtenir des produits aléatoires
export const getRandomProducts = (count: number = 4): Product[] => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Fonction pour obtenir des produits par catégorie
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

// Fonction pour obtenir un produit par ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Fonction pour formater le prix
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0
  }).format(price);
};
