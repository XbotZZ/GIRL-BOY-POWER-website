export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: ServiceCategory;
  image: string;
  tag?: string;
  forWhom?: "elle" | "lui" | "duo" | "tous";
}

export type ServiceCategory =
  | "massages"
  | "soins-visage"
  | "soins-corps"
  | "rituels"
  | "hammam";

export const categoryLabels: Record<ServiceCategory, string> = {
  massages: "Massages",
  "soins-visage": "Soins du Visage",
  "soins-corps": "Soins du Corps",
  rituels: "Rituels & Forfaits",
  hammam: "Hammam & Bien-Être",
};

export const categoryDescriptions: Record<ServiceCategory, string> = {
  massages:
    "Des mains expertes, des techniques venues du monde entier. Nos massages sont des invitations au lâcher-prise, conçus pour dénouer les tensions et reconnecter le corps à l'esprit.",
  "soins-visage":
    "Réveiller l'éclat naturel de la peau grâce à des protocoles personnalisés et des produits d'exception. Pour elles, pour eux, pour toutes les peaux.",
  "soins-corps":
    "Sublimer, modeler, hydrater. Nos soins corporels enveloppent et transforment, pour une peau visiblement plus douce, plus tonique, plus lumineuse.",
  rituels:
    "L'art du temps suspendu. Nos rituels combinent plusieurs soins en une expérience complète, pour une évasion totale sur 90 minutes ou plus.",
  hammam:
    "L'expérience du hammam traditionnel, des soins orientaux ancestraux et la chaleur reposante du sauna. Un voyage sensoriel au cœur du bien-être.",
};

export const services: Service[] = [
  // MASSAGES
  {
    id: "massage-suedois",
    name: "Massage Suédois Relaxant",
    description:
      "Massage doux et fluide à base de longs effleurages. Soulage le stress, améliore la circulation et procure une détente profonde du corps et de l'esprit.",
    duration: "60 min",
    price: 85,
    category: "massages",
    image: "https://picsum.photos/seed/gbp-massage-suedois/600/750",
    tag: "Best-seller",
    forWhom: "tous",
  },
  {
    id: "massage-deep-tissue",
    name: "Massage Deep Tissue",
    description:
      "Massage profond et tonique ciblé sur les tensions musculaires chroniques. Idéal pour les sportifs et ceux qui souffrent de douleurs persistantes.",
    duration: "60 min",
    price: 95,
    category: "massages",
    image: "https://picsum.photos/seed/gbp-massage-deep/600/750",
    forWhom: "tous",
  },
  {
    id: "massage-pierres-chaudes",
    name: "Massage aux Pierres Chaudes",
    description:
      "Pierres de basalte chauffées à 50°C posées sur les points clés du corps. Une chaleur enveloppante qui dissout les tensions et procure un bien-être absolu.",
    duration: "75 min",
    price: 110,
    category: "massages",
    image: "https://picsum.photos/seed/gbp-massage-pierres/600/750",
    tag: "Signature",
    forWhom: "tous",
  },
  {
    id: "massage-duo",
    name: "Massage Duo en Cabine",
    description:
      "Partagez un moment d'exception à deux. Massage relaxant simultané dans notre cabine duo, dans un cadre intime et raffiné.",
    duration: "60 min",
    price: 170,
    category: "massages",
    image: "https://picsum.photos/seed/gbp-massage-duo/600/750",
    tag: "En Couple",
    forWhom: "duo",
  },
  {
    id: "massage-femme-enceinte",
    name: "Massage Prénatal",
    description:
      "Massage doux et adapté aux futures mamans. Pratiqué en position latérale, il soulage les tensions du bas du dos et apaise les jambes lourdes.",
    duration: "60 min",
    price: 90,
    category: "massages",
    image: "https://picsum.photos/seed/gbp-massage-prenatal/600/750",
    forWhom: "elle",
  },
  {
    id: "massage-sportif",
    name: "Massage Sportif",
    description:
      "Massage tonique et dynamique pour préparer ou récupérer après l'effort. Cible les groupes musculaires sollicités.",
    duration: "45 min",
    price: 75,
    category: "massages",
    image: "https://picsum.photos/seed/gbp-massage-sport/600/750",
    forWhom: "lui",
  },

  // SOINS VISAGE
  {
    id: "soin-eclat-diamant",
    name: "Soin Éclat Diamant",
    description:
      "Soin lumière intensif à base de poudre de diamant et vitamine C. Révèle un teint frais, lumineux et homogène dès la première séance.",
    duration: "60 min",
    price: 95,
    category: "soins-visage",
    image: "https://picsum.photos/seed/gbp-soin-diamant/600/750",
    tag: "Best-seller",
    forWhom: "elle",
  },
  {
    id: "soin-anti-age-premium",
    name: "Soin Anti-Âge Premium",
    description:
      "Protocole complet anti-rides : massage liftant, masque collagène et sérum aux peptides. Une jeunesse retrouvée en 75 minutes.",
    duration: "75 min",
    price: 130,
    category: "soins-visage",
    image: "https://picsum.photos/seed/gbp-soin-antiage/600/750",
    tag: "Signature",
    forWhom: "elle",
  },
  {
    id: "soin-hydratation",
    name: "Soin Hydratation Intense",
    description:
      "Cure d'hydratation profonde à l'acide hyaluronique et aloe vera. Pour les peaux déshydratées ou exposées aux agressions extérieures.",
    duration: "60 min",
    price: 85,
    category: "soins-visage",
    image: "https://picsum.photos/seed/gbp-soin-hydra/600/750",
    forWhom: "tous",
  },
  {
    id: "soin-purifiant-homme",
    name: "Soin Purifiant Homme",
    description:
      "Soin spécifiquement formulé pour la peau masculine. Nettoyage en profondeur, exfoliation et apaisement post-rasage.",
    duration: "45 min",
    price: 70,
    category: "soins-visage",
    image: "https://picsum.photos/seed/gbp-soin-homme/600/750",
    tag: "Pour Lui",
    forWhom: "lui",
  },
  {
    id: "soin-yeux-express",
    name: "Soin Contour des Yeux",
    description:
      "Soin ciblé pour estomper les cernes, poches et ridules. Un regard reposé et lumineux en 30 minutes.",
    duration: "30 min",
    price: 45,
    category: "soins-visage",
    image: "https://picsum.photos/seed/gbp-soin-yeux/600/750",
    forWhom: "tous",
  },

  // SOINS CORPS
  {
    id: "gommage-sublime",
    name: "Gommage Corps Sublime",
    description:
      "Exfoliation douce aux cristaux de sucre et huiles précieuses. Laisse la peau lisse, douce et délicatement parfumée.",
    duration: "45 min",
    price: 65,
    category: "soins-corps",
    image: "https://picsum.photos/seed/gbp-gommage/600/750",
    forWhom: "tous",
  },
  {
    id: "enveloppement-detox",
    name: "Enveloppement Détox",
    description:
      "Enveloppement aux algues marines et argile verte pour drainer, purifier et raffermir le corps. Sensation de légèreté garantie.",
    duration: "60 min",
    price: 95,
    category: "soins-corps",
    image: "https://picsum.photos/seed/gbp-detox/600/750",
    tag: "Best-seller",
    forWhom: "tous",
  },
  {
    id: "soin-modelant",
    name: "Soin Modelant Anti-Cellulite",
    description:
      "Manœuvres de palper-rouler combinées à un sérum drainant. Un soin coup d'éclat sur les zones à problèmes.",
    duration: "60 min",
    price: 100,
    category: "soins-corps",
    image: "https://picsum.photos/seed/gbp-modelant/600/750",
    forWhom: "elle",
  },
  {
    id: "rituel-hydratation-corps",
    name: "Rituel Hydratation Corps",
    description:
      "Gommage doux suivi d'une application de lait de karité chauffé et d'un modelage relaxant. Une peau soyeuse pour des heures.",
    duration: "75 min",
    price: 110,
    category: "soins-corps",
    image: "https://picsum.photos/seed/gbp-hydra-corps/600/750",
    forWhom: "tous",
  },

  // RITUELS & FORFAITS
  {
    id: "rituel-decouverte",
    name: "Rituel Découverte",
    description:
      "Une première immersion dans l'univers GBP : accès hammam, gommage doux et massage relaxant de 30 minutes. Le parfait avant-goût.",
    duration: "90 min",
    price: 130,
    category: "rituels",
    image: "https://picsum.photos/seed/gbp-rituel-decouverte/600/750",
    tag: "Pour débuter",
    forWhom: "tous",
  },
  {
    id: "rituel-evasion",
    name: "Rituel Évasion",
    description:
      "Hammam, gommage corps complet, soin visage hydratation et massage relaxant 45 min. 2 heures pour s'évader totalement.",
    duration: "2 h",
    price: 180,
    category: "rituels",
    image: "https://picsum.photos/seed/gbp-rituel-evasion/600/750",
    tag: "Best-seller",
    forWhom: "tous",
  },
  {
    id: "rituel-royal",
    name: "Rituel Royal",
    description:
      "Notre expérience la plus complète : hammam, gommage, enveloppement, soin visage premium, massage 60 min et collation gourmande.",
    duration: "3 h",
    price: 280,
    category: "rituels",
    image: "https://picsum.photos/seed/gbp-rituel-royal/600/750",
    tag: "Signature",
    forWhom: "tous",
  },
  {
    id: "rituel-duo-romantique",
    name: "Rituel Duo Romantique",
    description:
      "À deux dans la cabine privative : hammam, gommage mutuel optionnel, massage duo 60 min et coupe de champagne. Un moment inoubliable.",
    duration: "2 h",
    price: 350,
    category: "rituels",
    image: "https://picsum.photos/seed/gbp-rituel-duo/600/750",
    tag: "En Couple",
    forWhom: "duo",
  },

  // HAMMAM & BIEN-ETRE
  {
    id: "acces-hammam",
    name: "Accès Hammam",
    description:
      "Profitez de notre hammam traditionnel chauffé à 45°C. Vapeurs aromatiques, ambiance feutrée, thé à la menthe offert.",
    duration: "60 min",
    price: 35,
    category: "hammam",
    image: "https://picsum.photos/seed/gbp-hammam-acces/600/750",
    forWhom: "tous",
  },
  {
    id: "gommage-savon-noir",
    name: "Gommage au Savon Noir",
    description:
      "Tradition orientale ancestrale : application de savon noir au hammam puis exfoliation au gant Kessa. La peau renaît.",
    duration: "45 min",
    price: 55,
    category: "hammam",
    image: "https://picsum.photos/seed/gbp-savon-noir/600/750",
    tag: "Authentique",
    forWhom: "tous",
  },
  {
    id: "rituel-oriental",
    name: "Rituel Oriental Complet",
    description:
      "L'expérience hammam dans toute sa splendeur : gommage savon noir, masque au rhassoul, modelage à l'huile d'argan.",
    duration: "90 min",
    price: 130,
    category: "hammam",
    image: "https://picsum.photos/seed/gbp-rituel-oriental/600/750",
    tag: "Signature",
    forWhom: "tous",
  },
  {
    id: "sauna-finlandais",
    name: "Sauna Finlandais",
    description:
      "Accès à notre sauna finlandais en bois noble. Chaleur sèche relaxante pour éliminer toxines et détendre les muscles.",
    duration: "60 min",
    price: 35,
    category: "hammam",
    image: "https://picsum.photos/seed/gbp-sauna/600/750",
    forWhom: "tous",
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.tag === "Best-seller");
}

export function getSignatureServices(): Service[] {
  return services.filter((s) => s.tag === "Signature");
}
