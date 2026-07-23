// -----------------------------------------------------------------------------
// EDIT ME: replace with your full WhatsApp number in international format,
// digits only (no "+", spaces or dashes). Example: "2348012345678"
// -----------------------------------------------------------------------------
export const WHATSAPP_NUMBER = "2348000000000";
export const WHATSAPP_MESSAGE =
  "Hi Lukman, I found your portfolio and I'd love to talk about a project.";

export const CONTACT_EMAIL = "alaolukman98@gmail.com";

export const whatsappHref = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

export type Project = {
  slug: string;
  title: string;
  url?: string;
  category: string;
  year: string;
  description: string;
  image: string;
  kind: "web" | "mobile";
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "ridsway",
    title: "Ridsway Inc.",
    url: "https://ridswayinc.com",
    category: "Corporate Web Experience",
    year: "2024",
    description:
      "A corporate web experience redesign for a construction firm — sharper messaging, a bold editorial hero and a more intuitive service flow.",
    image: "/work/ridsway.png",
    kind: "web",
    tags: ["Web Design", "Brand", "UX Strategy"],
  },
  {
    slug: "ndl",
    title: "NDL Apprentice School",
    url: "https://ndlapprenticeschool.com",
    category: "Education Platform",
    year: "2024",
    description:
      "Experience design for the Naval Dockyard Apprentice School — simplified onboarding, a clearer learner journey and an approachable admissions flow.",
    image: "/work/ndl.png",
    kind: "web",
    tags: ["Web Platform", "Onboarding", "Information Design"],
  },
  {
    slug: "deryde",
    title: "DeRyde",
    url: "https://deryde.com",
    category: "Product & Brand",
    year: "2024",
    description:
      "Modern brand and product storytelling for a rideshare company — a confident digital experience built to earn rider trust fast.",
    image: "/work/deryde.png",
    kind: "web",
    tags: ["Product Design", "Brand", "Marketing Site"],
  },
  {
    slug: "sneaker-store",
    title: "Sneaker Commerce App",
    category: "Mobile Experience",
    year: "2024",
    description:
      "A crisp e-commerce concept for sneaker discovery — light and dark themes, clear product hierarchy and a frictionless browse-to-cart flow.",
    image: "/work/shoe-app-dark.png",
    kind: "mobile",
    tags: ["iOS", "E-commerce", "Design System"],
  },
  {
    slug: "sneaker-store-light",
    title: "Sneaker Store — Light",
    category: "Mobile Experience",
    year: "2024",
    description:
      "The light variant of the sneaker storefront, tuned for legibility and calm product photography in daylight environments.",
    image: "/work/shoe-app-light.png",
    kind: "mobile",
    tags: ["iOS", "Theming", "UI"],
  },
  {
    slug: "pdu-fashion",
    title: "PDU Fashion",
    category: "Mobile Experience",
    year: "2024",
    description:
      "A fashion marketplace concept with location-aware discovery, flash sales and a warm, editorial product feed.",
    image: "/work/pdu-fashion.png",
    kind: "mobile",
    tags: ["Mobile", "Marketplace", "Discovery"],
  },
];

export type Tool = {
  name: string;
  status: string;
  description: string;
  points: string[];
};

export const tools: Tool[] = [
  {
    name: "EngneDiag",
    status: "In development",
    description:
      "A diagnostics companion for all kinds of outboard engines — read fault codes, walk through guided troubleshooting and keep a maintenance history in one clean interface.",
    points: [
      "Universal outboard engine support",
      "Guided fault-code diagnostics",
      "Service & maintenance logging",
    ],
  },
  {
    name: "Cipher — AES-256-GCM",
    status: "In development",
    description:
      "A privacy-first encryption tool built on AES-256-GCM authenticated encryption. Encrypt notes and files locally with a simple, trustworthy UX.",
    points: [
      "AES-256-GCM authenticated encryption",
      "Local, private by design",
      "Simple share-safe outputs",
    ],
  },
];

export type Platform = {
  name: string;
  file: string;
};

export const platforms: Platform[] = [
  { name: "Figma", file: "/logos/figma.svg" },
  { name: "Framer", file: "/logos/framer.svg" },
  { name: "Adobe", file: "/logos/adobe.svg" },
  { name: "Behance", file: "/logos/behance.svg" },
  { name: "Dribbble", file: "/logos/dribbble.svg" },
  { name: "Awwwards", file: "/logos/awwwards.svg" },
  { name: "Norton", file: "/logos/norton.svg" },
];
