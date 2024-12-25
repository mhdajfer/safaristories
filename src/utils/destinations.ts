export interface Destination {
  slug: string;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    slug: "lakshadweep",
    title: "Lakshadweep Islands",
    image:
      "https://images.unsplash.com/photo-1685701448456-ceba683d9b42?auto=format&fit=crop&q=80",
    description: "Discover pristine coral reefs and crystal-clear waters",
    fullDescription:
      "Experience the untouched beauty of Lakshadweep, where coral atolls meet crystal-clear lagoons. This tropical paradise offers a perfect escape with its white sandy beaches, vibrant marine life, and serene environment.",
    highlights: [
      "Snorkeling and scuba diving in coral reefs",
      "Traditional water sports activities",
      "Pristine beaches with white sand",
      "Rich marine biodiversity",
      "Local Malabar cuisine experiences",
    ],
  },

  {
    slug: "munnar",
    title: "Munnar Hill Station",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80",
    description: "Endless tea plantations and misty mountains",
    fullDescription:
      "Nestled in the Western Ghats, Munnar is a haven of rolling hills covered in emerald tea plantations. The cool climate, misty valleys, and exotic flora create an enchanting atmosphere perfect for nature lovers.",
    highlights: [
      "Vast tea plantations tours",
      "Eravikulam National Park visits",
      "Tea museum and factory tours",
      "Trekking and hiking trails",
      "Spice garden exploration",
    ],
  },
  {
    slug: "ooty",
    title: "Ooty",
    image:
      "https://images.unsplash.com/photo-1606207682737-4427606d58d2?auto=format&fit=crop&q=80",
    description: "Queen of hill stations with colonial charm",
    fullDescription:
      "Ooty, the Queen of Hill Stations, charms visitors with its colonial architecture, beautiful gardens, and pleasant climate. The toy train journey through nilgiri mountains offers breathtaking views of the landscape.",
    highlights: [
      "Nilgiri Mountain Railway rides",
      "Botanical Gardens exploration",
      "Ooty Lake boating",
      "Rose Garden visits",
      "Doddabetta Peak adventures",
    ],
  },

  {
    slug: "thailand",
    title: "Thailand",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80",
    description: "Tropical beaches and rich cultural heritage",
    fullDescription:
      "Thailand offers a perfect blend of tropical beaches, ornate temples, and vibrant culture. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, experience the warmth of Thai hospitality.",
    highlights: [
      "Island hopping adventures",
      "Ancient temple visits",
      "Thai cuisine workshops",
      "Traditional Thai massage",
      "Night market experiences",
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((dest) => dest.slug === slug);
}
