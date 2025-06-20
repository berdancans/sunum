export interface Brand {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight: string;
}

const brandsData: Brand[] = [
  {
    id: 1,
    name: "AI-First",
    href: "https://ai-first.me",
    image: "/images/brands/aifirst.svg",
    imageLight: "/images/brands/aifirst-light.svg",
  },
  {
    id: 2,
    name: "RelatIQ",
    href: "https://ai-first.me/relatiq",
    image: "/images/brands/relatiq.svg",
    imageLight: "/images/brands/relatiq-light.svg",
  },
  {
    id: 3,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids.svg",
    imageLight: "/images/brands/tailgrids-light.svg",
  },
  {
    id: 4,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons.svg",
    imageLight: "/images/brands/lineicons-light.svg",
  },
];

export default brandsData;
