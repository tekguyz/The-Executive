export const SITE_INFO = {
  name: "The Executive Image",
  fullName: "The Executive Image Ceramic Coating & Mobile Detailing",
  tagline: "Treasure Coast's Premier Experience",
  subTagline: "Where Precision Meets Perfection",
  owner: "Jason",
  phone: "(772) 631-1339",
  phoneRaw: "7726311339",
  location: "Stuart, FL",
  facebook: "https://www.facebook.com/Theexecutivedetailer/",
  experience: "17+ Years",
  reputation: "#1 Recommended on Nextdoor for Stuart & Hobe Sound",
  serviceAreas: [
    "Stuart",
    "Jensen Beach",
    "Hobe Sound",
    "Palm City",
    "Port St. Lucie",
    "Treasure Coast"
  ]
};

export interface ServiceItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  priceFrom: string;
  badge: string | null;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: "shield",
    title: "Ceramic Coating",
    subtitle: "Ultimate Paint Protection",
    description: "Industry-leading ceramic coating that chemically bonds to your paint, providing years of protection against UV damage, oxidation, water spots, and environmental contaminants. Delivers a deep, mirror-like gloss that turns heads.",
    features: ["5-9H Hardness Rating", "UV & Oxidation Protection", "Hydrophobic Surface", "2-5 Year Warranty"],
    priceFrom: "From $799",
    badge: "Most Popular"
  },
  {
    icon: "sparkles",
    title: "Paint Correction",
    subtitle: "Restore the Showroom Shine",
    description: "Remove swirl marks, scratches, water spots, and oxidation using professional-grade polishing techniques. Reveals the true depth and clarity of your paint before any protective coating is applied.",
    features: ["1, 2 & 3-Stage Correction", "Swirl & Scratch Removal", "Oxidation Treatment", "Pre-Coating Prep"],
    priceFrom: "From $350",
    badge: null
  },
  {
    icon: "car",
    title: "Mobile Detailing",
    subtitle: "We Come To You",
    description: "Full-service interior and exterior detailing delivered directly to your home, office, marina, or hangar. Save time without sacrificing quality — we bring the complete detail experience to your door.",
    features: ["Interior Deep Clean", "Exterior Hand Wash & Wax", "Leather Conditioning", "Engine Bay Detailing"],
    priceFrom: "From $149",
    badge: null
  },
  {
    icon: "anchor",
    title: "Marine Detailing",
    subtitle: "Boats & Watercraft",
    description: "Specialized detailing and ceramic coating for boats, yachts, and watercraft. Combat salt air, UV exposure, and marine oxidation with treatments specifically formulated for gelcoat and marine finishes.",
    features: ["Gelcoat Restoration", "Hull Oxidation Removal", "Marine Ceramic Coating", "Teak Treatment"],
    priceFrom: "From $299",
    badge: "Specialty"
  },
  {
    icon: "plane",
    title: "Aeronautical Detailing",
    subtitle: "Aircraft & Aviation",
    description: "Premium detailing services for aircraft, helicopters, and private jets. Protect your aviation investment against harsh atmospheric conditions with professional-grade coatings and meticulous attention to detail.",
    features: ["Aviation-Grade Products", "Aluminum & Composite Safe", "Ceramic Coating", "Interior Cabin Detailing"],
    priceFrom: "Custom Quote",
    badge: "Exclusive"
  },
  {
    icon: "zap",
    title: "Headlight Restoration",
    subtitle: "Clarity & Safety",
    description: "Restore yellowed, foggy headlights to crystal-clear condition. Improve nighttime visibility and road safety while dramatically improving the appearance of your vehicle.",
    features: ["UV Sanding Process", "Polish & Seal", "UV Protective Coating", "Same-Day Service"],
    priceFrom: "From $79",
    badge: null
  }
];

export const TESTIMONIALS = [
  {
    name: "M.S.",
    location: "Hobe Sound, FL",
    platform: "Nextdoor",
    rating: 5,
    text: "Executive Image Detailing — we've been using them for a few years now. Jason always does an exceptional job and we wouldn't trust anyone else with our vehicles.",
    vehicle: "Multiple Vehicles"
  },
  {
    name: "D.B.",
    location: "Port St. Lucie, FL",
    platform: "Nextdoor",
    rating: 5,
    text: "I use Jason — he's always done a great job on my Harley trike. Reliable, professional, and the results speak for themselves every single time.",
    vehicle: "Harley-Davidson Trike"
  },
  {
    name: "Facebook Reviewer",
    location: "Stuart, FL",
    platform: "Facebook",
    rating: 5,
    text: "Executive Image is the best on the Treasure Coast. You will love the outcome. Don't look anywhere else — Jason is the real deal.",
    vehicle: "Automotive"
  },
  {
    name: "S.B.",
    location: "Stuart, FL",
    platform: "Nextdoor",
    rating: 5,
    text: "Needed someone to come wash and wax our 3 cars at our home near downtown Stuart. Jason came out, was professional, reasonably priced, and did an incredible job.",
    vehicle: "3 Vehicles"
  },
  {
    name: "Google Reviewer",
    location: "Treasure Coast, FL",
    platform: "Google",
    rating: 5,
    text: "17 years of showroom shine. The Executive Image has been the #1 auto detailing and ceramic coating service on the Treasure Coast. Nobody compares.",
    vehicle: "Ceramic Coating"
  }
];

export const FAQS = [
  {
    question: "How much does ceramic coating cost?",
    answer: "Pricing starts around $799 and varies based on vehicle size and paint condition. Boats and aircraft are custom quoted. Call Jason at (772) 631-1339 for a fast, honest quote — no pressure."
  },
  {
    question: "Do I need paint correction before ceramic coating?",
    answer: "Almost always yes. Ceramic coating locks in whatever is on your paint permanently. We inspect every vehicle and handle the correction first so the coating bonds to a flawless surface."
  },
  {
    question: "How does the mobile service work?",
    answer: "We come to you — fully equipped with power, water, and everything needed. You stay home or at work. No drop-off, no waiting room, no strangers driving your vehicle."
  },
  {
    question: "Do you detail boats and aircraft?",
    answer: "Yes — and this is rare. We specialize in automotive, marine, and aeronautical detailing. Gelcoat restoration, hull work, aircraft ceramic coating — we handle it all on the Treasure Coast."
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Aston Martin Superleggera Gloss",
    category: "automotive",
    image: "https://picsum.photos/seed/detail-sportscar/600/400"
  },
  {
    id: "g2",
    title: "Yacht Gelcoat Reflection",
    category: "marine",
    image: "https://picsum.photos/seed/detail-boat/600/400"
  },
  {
    id: "g3",
    title: "Turboprop Wing Polish",
    category: "aeronautical",
    image: "https://picsum.photos/seed/detail-plane/600/400"
  },
  {
    id: "g4",
    title: "Harley Trike Chrome Correction",
    category: "automotive",
    image: "https://picsum.photos/seed/detail-bike/600/400"
  },
  {
    id: "g5",
    title: "Luxury SUV Ceramic Finish",
    category: "automotive",
    image: "https://picsum.photos/seed/detail-suv/600/400"
  },
  {
    id: "g6",
    title: "Sport Yacht Bow Shine",
    category: "marine",
    image: "https://picsum.photos/seed/detail-catamaran/600/400"
  }
];
