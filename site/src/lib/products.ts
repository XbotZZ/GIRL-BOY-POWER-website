export type ProductUniverse = "parfums" | "soins" | "julicath" | "spa";

export type Season = "printemps" | "ete" | "automne" | "hiver";

export interface Product {
  id: string;
  ref: string;
  name: string;
  description: string;
  price: number;
  universe: ProductUniverse;
  season?: Season;
  gender?: "feminin" | "masculin" | "mixte";
  volume?: string;
  isCoffret?: boolean;
  image: string;
  notes?: string[];
  ingredients?: string[];
  tag?: string;
}

export const seasonLabels: Record<Season, string> = {
  printemps: "Printemps",
  ete: "Été",
  automne: "Automne",
  hiver: "Hiver",
};

export const seasonCollectionNames: Record<Season, string> = {
  printemps: "Source d'Aurore — Printemps",
  ete: "Source d'Aurore — Été",
  automne: "Souffle d'Ambre — Automne",
  hiver: "Éclat d'Hiver",
};

export const universeLabels: Record<ProductUniverse, string> = {
  parfums: "Parfums",
  soins: "Soins Homme & Mixte",
  julicath: "JuliCath Bagagerie",
  spa: "Spa & Bien-Être",
};

export const products: Product[] = [
  // ───── PARFUMS — PRINTEMPS : SOURCE D'AURORE ─────
  {
    id: "rosee-daube",
    ref: "GBP-DX-PFP-100",
    name: "Rosée d'Aube",
    description:
      "Avec l'arrivée du printemps, ce parfum dévoile une fragrance délicate et lumineuse inspirée par la nature qui s'éveille. La rose et le jasmin révèlent toute leur douceur et leur élégance, apportant une touche florale raffinée et intemporelle.",
    price: 139,
    universe: "parfums",
    season: "printemps",
    gender: "feminin",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-rosee-daube/800/1000",
    notes: ["Rose", "Jasmin", "Accords floraux printaniers"],
  },
  {
    id: "vent-clair",
    ref: "GBP-DX-PMP-100",
    name: "Vent Clair",
    description:
      "Ce parfum masculin capture l'esprit du printemps avec une fragrance fraîche et naturelle. Ses notes délicates mêlent des accords verts et boisés, apportant une sensation de légèreté et de vitalité.",
    price: 139,
    universe: "parfums",
    season: "printemps",
    gender: "masculin",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-vent-clair/800/1000",
    notes: ["Accords verts", "Bois clairs", "Agrumes frais"],
  },
  {
    id: "coffret-rosee-de-la-douix",
    ref: "GBP-DX-CPP-200",
    name: "Coffret Rosée de la Douix",
    description:
      "Notre coffret de printemps célèbre le renouveau de la nature et la douceur des premiers jours ensoleillés. Il réunit Rosée d'Aube et Vent Clair, deux fragrances délicates et lumineuses inspirées des jardins en fleurs.",
    price: 272,
    universe: "parfums",
    season: "printemps",
    isCoffret: true,
    volume: "2 × 100 ml",
    image: "https://picsum.photos/seed/gbp-coffret-printemps/800/1000",
    tag: "Coffret duo",
  },

  // ───── PARFUMS — ÉTÉ : SOURCE D'AURORE ─────
  {
    id: "lumiere-de-perle",
    ref: "GBP-DX-PFE-100",
    name: "Lumière de Perle",
    description:
      "Ce parfum féminin aux notes de vanille et de monoï évoque instantanément la douceur de l'été. Sa fragrance solaire et gourmande rappelle la chaleur du sable doré, les fleurs tropicales et les journées baignées de soleil.",
    price: 129,
    universe: "parfums",
    season: "ete",
    gender: "feminin",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-lumiere-perle/800/1000",
    notes: ["Vanille", "Monoï", "Fleurs tropicales"],
  },
  {
    id: "vague-azur",
    ref: "GBP-DX-PME-100",
    name: "Vague Azur",
    description:
      "Parfum masculin aux notes fraîches et estivales évoquant la liberté des journées d'été et la fraîcheur des brises marines. Ses accords d'agrumes lumineux et de bois légers créent une fragrance énergisante et élégante.",
    price: 129,
    universe: "parfums",
    season: "ete",
    gender: "masculin",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-vague-azur/800/1000",
    notes: ["Agrumes lumineux", "Bois légers", "Accords marins"],
  },
  {
    id: "coffret-source-daurore",
    ref: "GBP-DX-CPE-200",
    name: "Coffret Source d'Aurore",
    description:
      "Coffret d'été exclusif réunissant deux fragrances solaires et raffinées. Un duo élégant et ensoleillé, parfait pour accompagner les plus beaux moments de l'été.",
    price: 255,
    universe: "parfums",
    season: "ete",
    isCoffret: true,
    volume: "2 × 100 ml",
    image: "https://picsum.photos/seed/gbp-coffret-ete/800/1000",
    tag: "Coffret duo",
  },

  // ───── PARFUMS — AUTOMNE : SOUFFLE D'AMBRE ─────
  {
    id: "feuille-dor",
    ref: "GBP-DX-PFA-100",
    name: "Feuille d'Or",
    description:
      "Dès les premières notes, une touche délicatement épicée de cannelle se mêle à la douceur d'agrumes lumineux. Son cœur floral apporte une élégance féminine et raffinée, tandis que le fond ambré et légèrement boisé enveloppe la peau d'un sillage réconfortant.",
    price: 139,
    universe: "parfums",
    season: "automne",
    gender: "feminin",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-feuille-dor/800/1000",
    notes: ["Cannelle", "Agrumes", "Ambre & bois tendres"],
  },
  {
    id: "bois-ambre",
    ref: "GBP-DX-PMA-100",
    name: "Bois Ambré",
    description:
      "Fragrance chaleureuse et enveloppante, inspirée des couleurs profondes de l'automne. Une touche lumineuse de mandarine épicée se mêle à un souffle de feuilles dorées, sur un cœur de cannelle douce et de bois de cèdre.",
    price: 139,
    universe: "parfums",
    season: "automne",
    gender: "masculin",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-bois-ambre/800/1000",
    notes: ["Mandarine épicée", "Cannelle", "Bois de cèdre"],
  },
  {
    id: "coffret-souffle-dor",
    ref: "GBP-DX-CPA-200",
    name: "Coffret Souffle d'Or",
    description:
      "Coffret exclusif réunissant Feuille d'Or et Bois Ambré. Un duo raffiné pensé pour célébrer l'harmonie des contrastes et offrir une expérience olfactive élégante.",
    price: 272,
    universe: "parfums",
    season: "automne",
    isCoffret: true,
    volume: "2 × 100 ml",
    image: "https://picsum.photos/seed/gbp-coffret-automne/800/1000",
    tag: "Coffret duo",
  },

  // ───── PARFUMS — HIVER : ÉCLAT D'HIVER ─────
  {
    id: "rose-de-givre",
    ref: "GBP-DX-PFH-100",
    name: "Rose de Givre",
    description:
      "Fragrance féminine élégante et délicate, inspirée par la beauté de l'hiver. Ses notes florales raffinées s'entrelacent avec une douceur poudrée, évoquant une rose délicatement recouverte de givre au petit matin.",
    price: 149,
    universe: "parfums",
    season: "hiver",
    gender: "feminin",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-rose-givre/800/1000",
    notes: ["Rose poudrée", "Iris", "Musc blanc"],
  },
  {
    id: "bois-polaire",
    ref: "GBP-DX-PMH-100",
    name: "Bois Polaire",
    description:
      "Fragrance masculine intense et élégante, inspirée par la fraîcheur des paysages hivernaux. Ses notes boisées profondes se mêlent à des accords frais et légèrement épicés, évoquant l'air pur des forêts enneigées.",
    price: 146,
    universe: "parfums",
    season: "hiver",
    gender: "masculin",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-bois-polaire/800/1000",
    notes: ["Bois profonds", "Accords frais", "Épices douces"],
  },
  {
    id: "coffret-eclat-dhiver",
    ref: "GBP-DX-CPH-200",
    name: "Coffret Éclat d'Hiver",
    description:
      "Coffret d'hiver réunissant deux fragrances élégantes et complémentaires, inspirées par la magie de la saison. Un duo raffiné et chaleureux, parfait pour les journées froides et les soirées d'hiver.",
    price: 290,
    universe: "parfums",
    season: "hiver",
    isCoffret: true,
    volume: "2 × 100 ml",
    image: "https://picsum.photos/seed/gbp-coffret-hiver/800/1000",
    tag: "Coffret duo",
  },

  // ───── SOINS HOMME & MIXTE ─────
  {
    id: "huile-a-barbe",
    ref: "GBP-DX-HB-30",
    name: "Huile à Barbe",
    description:
      "Nourrit, adoucit et discipline la barbe au quotidien. Formule d'inspiration naturelle pour une barbe souple, brillante et confortable.",
    price: 24.9,
    universe: "soins",
    volume: "30 ml",
    image: "https://picsum.photos/seed/gbp-huile-barbe/800/1000",
    ingredients: ["Huile d'argan", "Huile de jojoba", "Huile d'amande douce"],
  },
  {
    id: "gel-a-raser-150",
    ref: "GBP-DX-GR-150",
    name: "Gel à Raser Naturel",
    description:
      "Prépare la peau et facilite une glisse précise du rasoir. Texture fraîche conçue pour limiter les sensations d'irritation.",
    price: 14.9,
    universe: "soins",
    volume: "150 ml",
    image: "https://picsum.photos/seed/gbp-gel-raser/800/1000",
    ingredients: ["Aloe vera", "Glycérine végétale"],
  },
  {
    id: "shampoing-barbe",
    ref: "GBP-DX-SB-200",
    name: "Shampoing Barbe",
    description:
      "Nettoie en douceur, assouplit et révèle l'éclat naturel de la barbe. Formule concentrée en actifs fortifiants.",
    price: 18.9,
    universe: "soins",
    volume: "200 ml",
    image: "https://picsum.photos/seed/gbp-shampoing-barbe/800/1000",
    ingredients: ["Huile de ricin", "Protéines de blé"],
  },
  {
    id: "solution-exfoliante",
    ref: "GBP-DX-SE-100",
    name: "Solution Exfoliante Mixte",
    description:
      "Affine le grain de peau, libère les impuretés et réveille l'éclat. Texture fluide qui convient à tous les types de peau.",
    price: 19.9,
    universe: "soins",
    volume: "100 ml",
    image: "https://picsum.photos/seed/gbp-exfoliante/800/1000",
    ingredients: ["Acide salicylique", "Poudre de noyau d'abricot"],
  },
  {
    id: "creme-hydratante",
    ref: "GBP-DX-CH-50",
    name: "Crème Hydratante",
    description:
      "Hydrate intensément, repulpe et lisse la peau. Une texture onctueuse inspirée des soins naturels.",
    price: 24.9,
    universe: "soins",
    volume: "50 ml",
    image: "https://picsum.photos/seed/gbp-creme-hydratante/800/1000",
    ingredients: ["Acide hyaluronique végétal", "Beurre de karité bio"],
  },
  {
    id: "savon-homme",
    ref: "GBP-DX-SAH-100",
    name: "Savon pour Homme",
    description:
      "Savon solide purifiant à la texture veloutée. Nettoie en profondeur et laisse la peau fraîche et équilibrée.",
    price: 10.9,
    universe: "soins",
    volume: "100 g",
    image: "https://picsum.photos/seed/gbp-savon-homme/800/1000",
    ingredients: ["Charbon actif", "Argile noire volcanique"],
  },
  {
    id: "gel-a-raser-200",
    ref: "GBP-DX-GR-200",
    name: "Gel à Raser Naturel — Format Généreux",
    description:
      "Le format généreux de notre gel à raser signature. Menthe poivrée et glycérine végétale pour une glisse parfaite et une peau apaisée.",
    price: 14.9,
    universe: "soins",
    volume: "200 ml",
    image: "https://picsum.photos/seed/gbp-gel-raser-200/800/1000",
    ingredients: ["Menthe poivrée", "Glycérine végétale"],
  },
  {
    id: "rasoir-precision",
    ref: "GBP-DX-RP-01",
    name: "Rasoir de Précision",
    description:
      "La maîtrise du geste, en toute douceur. Corps titane, acier trempé japonais, roulements céramique, verre saphir pour l'écran et batterie haute densité.",
    price: 199,
    universe: "soins",
    image: "https://picsum.photos/seed/gbp-rasoir-precision/800/1000",
    tag: "Accessoire premium",
    ingredients: [
      "Corps titane",
      "Acier trempé japonais",
      "Roulements céramique",
      "Verre saphir",
    ],
  },
  {
    id: "baume-apres-rasage",
    ref: "GBP-DX-BAR-75",
    name: "Baume Après-Rasage",
    description:
      "Hydrate et protège la peau jour après jour. Une texture confortable inspirée des soins naturels, enrichie en actifs apaisants.",
    price: 19.9,
    universe: "soins",
    volume: "75 ml",
    image: "https://picsum.photos/seed/gbp-baume-rasage/800/1000",
    ingredients: [
      "Aloe vera",
      "Huile de calendula",
      "Beurre de karité",
      "Acide hyaluronique",
      "Vitamine E",
    ],
  },
  {
    id: "pack-rituel-barbe",
    ref: "GBP-DX-PRB-01",
    name: "Pack Rituel Barbe de la Douix",
    description:
      "Un indispensable pour les barbus en devenir. Un rituel complet pour nourrir, discipliner et sublimer la barbe.",
    price: 49.9,
    universe: "soins",
    isCoffret: true,
    image: "https://picsum.photos/seed/gbp-pack-barbe/800/1000",
    tag: "Pack",
  },
  {
    id: "pack-rituel-visage",
    ref: "GBP-DX-PRV-01",
    name: "Pack Rituel Visage Pureté",
    description:
      "Inspiré par la source, pensé pour votre peau. Un rituel visage complet pour purifier, hydrater et révéler l'éclat naturel.",
    price: 47.9,
    universe: "soins",
    isCoffret: true,
    image: "https://picsum.photos/seed/gbp-pack-visage/800/1000",
    tag: "Pack",
  },
  {
    id: "pack-rituel-rasage",
    ref: "GBP-DX-PCR-001",
    name: "Pack Rituel de Rasage",
    description:
      "Quand la technologie fusionne avec le naturel. L'ensemble complet pour un rasage d'excellence : rasoir de précision, gel, baume et accessoires.",
    price: 210,
    universe: "soins",
    isCoffret: true,
    image: "https://picsum.photos/seed/gbp-pack-rasage/800/1000",
    tag: "Pack premium",
  },
  {
    id: "rituel-barbu-forets",
    ref: "GBP-DX-CFB-01",
    name: "Rituel du Barbu des Forêts",
    description:
      "Coffret d'exception dédié aux rituels de la barbe. Une sélection précieuse pour les amateurs de gestes authentiques et raffinés.",
    price: 64.9,
    universe: "soins",
    isCoffret: true,
    image: "https://picsum.photos/seed/gbp-coffret-barbu/800/1000",
    tag: "Coffret",
  },
  {
    id: "rituel-douix",
    ref: "GBP-DX-CDX-01",
    name: "Rituel de la Douix",
    description:
      "Inspiré directement par les Sources de la Douix, ce coffret rassemble les soins signatures de notre maison dans un écrin raffiné.",
    price: 69.9,
    universe: "soins",
    isCoffret: true,
    image: "https://picsum.photos/seed/gbp-coffret-douix/800/1000",
    tag: "Coffret signature",
  },
  {
    id: "coffret-origines",
    ref: "GBP-DX-COR-01",
    name: "Le Coffret des Origines",
    description:
      "Création signature GBP — fait main, finitions premium, sceau d'authenticité. Édition limitée, coffret numéroté. L'expression ultime de notre savoir-faire.",
    price: 299,
    universe: "soins",
    isCoffret: true,
    image: "https://picsum.photos/seed/gbp-coffret-origines/800/1000",
    tag: "Édition limitée",
  },

  // ───── JULICATH BAGAGERIE ─────
  {
    id: "julie-sac-voyage",
    ref: "GBP-JC-SAC-01",
    name: "Sac de Voyage Julie",
    description:
      "La pièce maîtresse de la maison JuliCath. Courbes intemporelles, cuir noble, finitions d'exception. Pensé pour transformer chaque déplacement en expérience de raffinement.",
    price: 50000,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-julie-sac/800/1000",
    tag: "Pièce signature",
  },
  {
    id: "cathy-trousse-toilette",
    ref: "GBP-JC-TRT-01",
    name: "Trousse de Toilette Cathy",
    description:
      "La trousse de toilette pensée comme une écrin. Compartimentage ingénieux, cuir pleine fleur, fermetures précieuses.",
    price: 10000,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-cathy-trousse/800/1000",
  },
  {
    id: "wendy-pochette-plate",
    ref: "GBP-JC-POP-01",
    name: "Pochette Plate Wendy",
    description:
      "Silhouette épurée, cuir glacé, coutures sellier. Une pochette essentielle, du quotidien aux grandes occasions.",
    price: 5000,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-wendy-pochette/800/1000",
  },
  {
    id: "gwendoline-rollup",
    ref: "GBP-JC-RUP-01",
    name: "Roll-up Gwendoline",
    description:
      "Roll-up de voyage pour bijoux et petites pièces précieuses. Compartiments feutrés, fermeture à lacet en cuir tressé.",
    price: 4000,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-gwendoline-rollup/800/1000",
  },
  {
    id: "elisabeth-etui-rouge",
    ref: "GBP-JC-ERL-01",
    name: "Étui à Rouge à Lèvres Elisabeth",
    description:
      "L'écrin parfait pour vos rouges à lèvres. Miroir intégré, intérieur velours, cuir grainé d'exception.",
    price: 3500,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-elisabeth-etui/800/1000",
  },
  {
    id: "jessica-set-manucure",
    ref: "GBP-JC-STM-01",
    name: "Set de Manucure Jessica",
    description:
      "Set de manucure complet dans un étui en cuir de luxe. Outils en acier inoxydable, finitions dorées.",
    price: 3000,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-jessica-manucure/800/1000",
  },
  {
    id: "amandine-etui-parfum",
    ref: "GBP-JC-EFP-01",
    name: "Étui pour Flacon de Parfum Amandine",
    description:
      "Pensé pour voyager avec vos fragrances les plus précieuses. Cuir matelassé, intérieur protecteur, format nomade.",
    price: 2500,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-amandine-etui/800/1000",
  },
  {
    id: "christopher-porte-rasoir",
    ref: "GBP-JC-PRA-01",
    name: "Porte Rasoir Christopher",
    description:
      "Écrin cuir pour rasoir de précision. Doublure protectrice, fermeture aimantée, finitions d'exception.",
    price: 2000,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-christopher-rasoir/800/1000",
  },
  {
    id: "guilyann-porte-peigne",
    ref: "GBP-JC-PPG-01",
    name: "Porte Peigne Guilyann",
    description:
      "L'accessoire raffiné pour accompagner vos rituels. Cuir noble, silhouette fine, élégance masculine.",
    price: 1500,
    universe: "julicath",
    image: "https://picsum.photos/seed/gbp-guilyann-peigne/800/1000",
  },
];

export const getProductsByUniverse = (universe: ProductUniverse): Product[] =>
  products.filter((p) => p.universe === universe);

export const getProductsBySeason = (season: Season): Product[] =>
  products.filter((p) => p.universe === "parfums" && p.season === season);

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
