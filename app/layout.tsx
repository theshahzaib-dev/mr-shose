import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Comprehensive, high-ranking SEO Keywords strategy
const shoeKeywords = [
  // Primary Brand Keywords
  "MR SHOSE",
  "MR SHOSE Pakistan",
  "MR SHOSE footwear",
  "Step Into Style",

  // High Intent E-Commerce & Buying Keywords
  "buy shoes online Pakistan",
  "best online shoe store Pakistan",
  "buy men shoes online",
  "buy women shoes online",
  "cash on delivery shoes Pakistan",
  "branded shoes discount sale",

  // Men's Footwear Categories
  "men formal leather shoes",
  "italian handmade oxfords",
  "leather double monk strap shoes",
  "mens dress shoes for wedding",
  "mens leather loafers and moccasins",
  "gentlemen formal footwear",

  // Athletic & Casual Footwear
  "urban running shoes",
  "memory foam cushioned sneakers",
  "streetwear sneakers men",
  "lightweight walking shoes",
  "comfortable casual sneakers",

  // Boots & Specialty Footwear
  "men leather chelsea boots",
  "handstitched suede loafers",
  "genuine leather boots Pakistan",

  // Women's Footwear
  "women minimalist slip-on loafers",
  "ladies casual shoes online",
  "women comfortable flat shoes",

  // Quality & Materials
  "100 authentic leather shoes",
  "handcrafted footwear brand",
  "memorygel cushioned insoles"
];

export const metadata: Metadata = {
  title: {
    default: "MR. SHOSE | Step Into Style - Handcrafted Italian Leather & Premium Footwear",
    template: "%s | MR. SHOSE"
  },
  description:
    "Shop Pakistan's best handcrafted footwear online at MR. SHOSE. Explore Italian leather formal shoes, Oxfords, double monk straps, MemoryGel sneakers, running shoes, and genuine leather boots. Cash on Delivery nationwide.",
  keywords: shoeKeywords,
  authors: [{ name: "Muhammad Shahzaib" }],
  creator: "Muhammad Shahzaib",
  publisher: "MR. SHOSE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mrshose.com"), // Replace with your production domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MR. SHOSE | Handcrafted Italian Leather & Luxury Footwear",
    description:
      "Step into style with MR. SHOSE. Shop premium Italian leather Oxfords, casual sneakers, and handcrafted boots with 24-hour express shipping and Cash on Delivery.",
    url: "https://mrshose.com",
    siteName: "MR. SHOSE",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Place an impressive shoe banner image in your public folder
        width: 1200,
        height: 630,
        alt: "MR. SHOSE - Step Into Style",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MR. SHOSE | Premium Leather & Athletic Footwear",
    description: "Explore handcrafted Italian leather shoes, memory-gel sneakers, and Chelsea boots.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Google Structured Data (JSON-LD) for E-Commerce Search Engine Dominance
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "name": "MR. SHOSE",
    "url": "https://mrshose.com",
    "logo": "https://mrshose.com/logo.png",
    "description": "Pakistan's top store for handcrafted Italian leather formal shoes, sneakers, loafers, and boots.",
    "priceRange": "PKR 5000 - PKR 25000",
    "currenciesAccepted": "PKR",
    "paymentAccepted": "Cash on Delivery, Credit Card, Direct WhatsApp",
    "areaServed": "Pakistan",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Footwear Catalog",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Men Formal Leather Shoes"
        },
        {
          "@type": "OfferCatalog",
          "name": "Casual & Streetwear Sneakers"
        },
        {
          "@type": "OfferCatalog",
          "name": "Handmade Leather Boots"
        }
      ]
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#121212] selection:bg-[#E5A83B] selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}