import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Lukman Alao — Product & UI/UX Designer",
  description:
    "Lukman Agbolade Alao is a product designer crafting web and mobile interfaces people trust on the first try. Selected work, tools, and a way to book a consultation.",
  keywords: [
    "Lukman Alao",
    "Product Designer",
    "UI UX Designer",
    "Mobile Design",
    "Design Systems",
    "Figma",
    "Framer",
  ],
  authors: [{ name: "Lukman Agbolade Alao" }],
  openGraph: {
    title: "Lukman Alao — Product & UI/UX Designer",
    description:
      "3D portfolio of product and interface design work, upcoming tools, and a way to book a consultation.",
    type: "website",
  },
  icons: {
    icon: "/brand/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
