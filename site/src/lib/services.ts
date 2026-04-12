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
  hammam: "Hammam & Bien-Etre",
};

export const categoryDescriptions: Record<ServiceCategory, string> = {
  massages:
    "Des mains expertes, des techniques venues du monde entier. Nos massages sont des invitations au lacher-prise, concus pour denouer les tensions et reconnecter le corps a l'esprit.",
  "soins-visage":
    "Reveiller l'eclat naturel de la peau grace a des protocoles personnalises et des produits d'exception. Pour elles, pour eux, pour toutes les peaux.",
  "soins-corps":
    "Sublimer, modeler, hydrater. Nos soins corporels enveloppent et transforment, pour une peau visiblement plus douce, plus tonique, plus lumineuse.",
  rituels:
    "L'art du temps suspendu. Nos rituels combinent plusieurs soins en une experience complete, pour une evasion totale sur 90 minutes ou plus.",
  hammam:
    "L'experience du hammam traditionnel, des soins orientaux ancestraux et la chaleur reposante du sauna. Un voyage sensoriel au coeur du bien-etre.",
};

export const services: Service[] = [
  // MASSAGES
  {
    id: "massage-suedois",
    name: "Massage Suedois Relaxant",
    description:
      "Massage doux et fluide a base de longs effleurages. Soulage le stress, ameliore la circulation et procure une detente profonde du corps et de l'esprit.",
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
      "Massage profond et tonique cible les tensions musculaires chroniques. Ideal pour les sportifs et ceux qui souffrent de douleurs persistantes.",
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
      "Pierres de basalte chauffees a 50C posees sur les points cles du corps. Une chaleur enveloppante qui dissout les tensions et procure un bien-etre absolu.",
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
      "Partagez un moment d'exception a deux. Massage relaxant simultane dans notre cabine duo, dans un cadre intime et raffine.",
    duration: "60 min",
    price: 170,
    category: "massages",
    image: "https://picsum.photos/seed/gbp-massage-duo/600/750",
    tag: "En Couple",
    forWhom: "duo",
  },
  {
    id: "massage-femme-enceinte",
    name: "Massage Prenatal",
    description:
      "Massage doux et adapte aux futures mamans. Pratique en position laterale, il soulage les tensions du bas du dos et apaise les jambes lourdes.",
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
      "Massage tonique et dynamique pour preparer ou recuperer apres l'effort. Cible les groupes musculaires sollicites.",
    duration: "45 min",
    price: 75,
    category: "massages",
    image: "https://picsum.photos/seed/gbp-massage-sport/600/750",
    forWhom: "lui",
  },

  // SOINS VISAGE
  {
    id: "soin-eclat-diamant",
    name: "Soin Eclat Diamant",
    description:
      "Soin lumiere intensif a base de poudre de diamant et vitamine C. Revele un teint frais, lumineux et homogene des la premiere seance.",
    duration: "60 min",
    price: 95,
    category: "soins-visage",
    image: "https://picsum.photos/seed/gbp-soin-diamant/600/750",
    tag: "Best-seller",
    forWhom: "elle",
  },
  {
    id: "soin-anti-age-premium",
    name: "Soin Anti-Age Premium",
    description:
      "Protocole complet anti-rides : massage liftant, masque collagene et serum aux peptides. Une jeunesse retrouvee en 75 minutes.",
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
      "Cure d'hydratation profonde a l'acide hyaluronique et aloe vera. Pour les peaux deshydratees ou exposees aux agressions exterieures.",
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
      "Soin specifiquement formule pour la peau masculine. Nettoyage en profondeur, exfoliation et apaisement post-rasage.",
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
      "Soin cible pour estomper les cernes, poches et ridules. Un regard repose et lumineux en 30 minutes.",
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
      "Exfoliation douce aux cristaux de sucre et huiles precieuses. Laisse la peau lisse, douce et delicatement parfumee.",
    duration: "45 min",
    price: 65,
    category: "soins-corps",
    image: "https://picsum.photos/seed/gbp-gommage/600/750",
    forWhom: "tous",
  },
  {
    id: "enveloppement-detox",
    name: "Enveloppement Detox",
    description:
      "Enveloppement aux algues marines et argile verte pour drainer, purifier et raffermir le corps. Sensation de legerete garantie.",
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
      "Manoeuvres de palper-rouler combinees a un serum drainant. Un soin coup d'eclat sur les zones a problemes.",
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
      "Gommage doux suivi d'une application de lait de karite chauffe et d'un modelage relaxant. Une peau soyeuse pour des heures.",
    duration: "75 min",
    price: 110,
    category: "soins-corps",
    image: "https://picsum.photos/seed/gbp-hydra-corps/600/750",
    forWhom: "tous",
  },

  // RITUELS & FORFAITS
  {
    id: "rituel-decouverte",
    name: "Rituel Decouverte",
    description:
      "Une premiere immersion dans l'univers GBP : acces hammam, gommage doux et massage relaxant de 30 minutes. Le parfait avant-gout.",
    duration: "90 min",
    price: 130,
    category: "rituels",
    image: "https://picsum.photos/seed/gbp-rituel-decouverte/600/750",
    tag: "Pour debuter",
    forWhom: "tous",
  },
  {
    id: "rituel-evasion",
    name: "Rituel Evasion",
    description:
      "Hammam, gommage corps complet, soin visage hydratation et massage relaxant 45 min. 2 heures pour s'evader totalement.",
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
      "Notre experience la plus complete : hammam, gommage, enveloppement, soin visage premium, massage 60 min et collation gourmande.",
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
      "A deux dans la cabine privative : hammam, gommage mutuel optionnel, massage duo 60 min et coupe de champagne. Un moment inoubliable.",
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
    name: "Acces Hammam",
    description:
      "Profitez de notre hammam traditionnel chauffe a 45C. Vapeurs aromatiques, ambiance feutree, the a la menthe offert.",
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
      "Tradition orientale ancestrale : application de savon noir au hammam puis exfoliation au gant Kessa. La peau renait.",
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
      "L'experience hammam dans toute sa splendeur : gommage savon noir, masque au rhassoul, modelage a l'huile d'argan.",
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
      "Acces a notre sauna finlandais en bois noble. Chaleur seche relaxante pour eliminer toxines et detendre les muscles.",
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
