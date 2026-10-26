export interface BusinessItem {
  id: string;
  name: string;
  tag?: string;
  headline: string;
  description: string;
  ctaText: string;
  image: string;
  brandColor: string;
  sideLabels: string[];
  theme: {
    baseBg: string;
    gradientOverlay: string;
    accentColor: string;
    subheadColor: string;
    borderColor: string;
  };
  details: {
    tagline: string;
    hours: string;
    location: string;
    features: string[];
    experience: string;
  };
}

export const BUSINESS_DATA: BusinessItem[] = [
  {
    id: 'lounge-2',
    name: 'The Lounge RK 2.0',
    tag: 'THE LOUNGE RK 2.0',
    headline: 'Contemporary open-air dining.',
    description: 'An open-air garden terrace dining pavilion in Asansol adorned with hanging greenery, fairy lights and modern hospitality for families and celebrations.',
    ctaText: 'Discover The Lounge RK 2.0',
    image: '/images/lounge_rk_2.jpg',
    brandColor: '#173D33',
    sideLabels: ['TERRACE GARDEN', 'ARTISAN CUISINE', 'CELEBRATIONS'],
    theme: {
      baseBg: '#101412',
      gradientOverlay: `linear-gradient(90deg, 
        rgba(14, 18, 16, 0.88) 0%, 
        rgba(14, 18, 16, 0.72) 30%, 
        rgba(14, 18, 16, 0.15) 48%, 
        transparent 60%)`,
      accentColor: '#B69B65',
      subheadColor: '#B69B65',
      borderColor: 'rgba(182, 155, 101, 0.22)',
    },
    details: {
      tagline: 'Open-Air Botanical Garden Terrace & Culinary Pavilion',
      hours: 'Daily: 12:00 PM – 11:45 PM',
      location: 'Shakespeare Sarani, near Blessed Hospital, Radhanagar, Asansol, West Bengal 713304',
      features: [
        'Fairy-Lit Botanical Garden Canopy',
        'North Indian, Mughlai & Continental',
        'Artisanal Mocktails & Shakes',
        'Private Birthday & Celebration Terrace'
      ],
      experience: 'An open-air garden terrace beneath strings of warm canopy fairy lights and hanging greenery, featuring the illuminated HIVE THE LOUNGE wall. A premier social dining experience in Asansol for shared family moments and lively gatherings.'
    }
  },
  {
    id: 'lounge-classic',
    name: 'The Lounge RK',
    headline: 'An intimate nightlife escape.',
    description: 'Asansol’s signature cafe and lounge destination crafted with ambient neon lighting, plush leather VIP couches, Mughlai starters and curated music.',
    ctaText: 'Discover The Lounge RK',
    image: '/images/lounge_rk.jpg',
    brandColor: '#804C3B',
    sideLabels: ['NEON LOUNGE', 'MOCKTAILS & DINE', 'CURATED BEATS'],
    theme: {
      baseBg: '#180E0A',
      gradientOverlay: `linear-gradient(90deg, 
        rgba(24, 12, 8, 0.90) 0%, 
        rgba(32, 16, 11, 0.74) 30%, 
        rgba(42, 21, 14, 0.15) 48%, 
        transparent 60%)`,
      accentColor: '#C4816F',
      subheadColor: '#C4816F',
      borderColor: 'rgba(128, 76, 59, 0.35)',
    },
    details: {
      tagline: 'Vibrant Neon Ambient Lounge & Hookah Parlour',
      hours: 'Daily: 12:00 PM – 11:45 PM',
      location: 'Shakespeare Sarani, Radhanagar, Asansol, West Bengal 713304',
      features: [
        'Plush Leather VIP Banquettes',
        'Mughlai & Chinese Specialties',
        'Signature Hookah & Shisha Blends',
        'Ambient Neon Lighting & DJ Sets'
      ],
      experience: 'Step into Asansol’s iconic nightlife destination featuring glowing geometric neon illumination, deep leather couches, sizzling kebabs, and curated music far removed from the city rush.'
    }
  },
  {
    id: 'automobiles',
    name: 'HIVE RK Enterprise Automobiles',
    tag: 'AUTOMOBILES & FLEET',
    headline: 'Performance meets precision.',
    description: 'Certified multi-brand showroom in Asansol dealing in pre-owned luxury SUVs, sports motorcycles (KTM, Duke) and transparent vehicle documentation.',
    ctaText: 'Discover Automobiles',
    image: '/images/automobiles.jpg',
    brandColor: '#293F46',
    sideLabels: ['CERTIFIED CARS & SUVS', 'SPORTS BIKES & KTM', 'EXCHANGE & RTO SUPPORT'],
    theme: {
      baseBg: '#0E1417',
      gradientOverlay: `linear-gradient(90deg, 
        rgba(12, 18, 21, 0.90) 0%, 
        rgba(18, 27, 31, 0.74) 30%, 
        rgba(26, 38, 43, 0.15) 48%, 
        transparent 60%)`,
      accentColor: '#8AAEB9',
      subheadColor: '#8AAEB9',
      borderColor: 'rgba(41, 63, 70, 0.45)',
    },
    details: {
      tagline: 'Multi-Brand Pre-Owned Cars, SUVs & Performance Superbikes',
      hours: 'Mon – Sun: 10:00 AM – 09:00 PM',
      location: 'Shakespeare Sarani / Jyoti Nagar, Near Blessed Hospital, Asansol, West Bengal 713304',
      features: [
        'Certified Pre-Owned Cars & SUVs (Kia, Hyundai)',
        'Sports & Performance Motorcycles (KTM RC / Duke)',
        'Buy, Sale & Exchange Guarantee',
        'Complete RTO Paper Transfer & Legal Documentation'
      ],
      experience: 'Asansol’s trusted automotive destination offering meticulously inspected pre-owned cars, SUVs and high-performance bikes. Hassle-free vehicle exchanges, competitive pricing and seamless ownership transfer.'
    }
  }
];
