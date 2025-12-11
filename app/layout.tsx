import type { Metadata } from "next";
import "./globals.css";
import { playfair, spaceMono, syne } from "@/lib/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kwame Obed - Comedian | Ghanaian Stand-Up Comedy & Shows",
  description:
    "Official website of Kwame Obed, a Ghanaian comedian known for witty storytelling, skits, stand-up comedy, and authentic Ghanaian humour. Book shows and watch comedy clips.",
  keywords: [
    "kwame obed",
    "Comedian Kwame Obed",
    "kwame",
    "Kwame Obed comedian",
    "Ghanaian comedian Kwame Obed",
    "Comedian Kwame",
    "Kwame Obed Ghana",
    "Ghanaian comedian",
    "Ghana comedy",
    "Accra comedian",
    "stand-up comedy Ghana",
    "Kwame Obed shows",
    "Kwame Obed booking",
    "Ghana stand-up",
    "skits Ghana",
    "content creator Ghana",
    "Kwame Obed comedy",
  ],
  metadataBase: new URL("https://www.kwameobed.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kwame Obed - Comedian | Ghanaian Stand-Up Comedy",
    description:
      "Official website of Comedian Kwame Obed. Watch hilarious comedy clips, book Kwame for shows, and experience authentic Ghanaian stand-up comedy and skits.",
    url: "https://www.kwameobed.com",
    siteName: "Kwame Obed - Comedian",
    locale: "en_GH",
    type: "profile",
    images: [
      {
        url: "https://www.kwameobed.com/images/image00028.webp",
        width: 1200,
        height: 630,
        alt: "Comedian Kwame Obed - Ghanaian Stand-Up Comedy & Shows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwame Obed - Comedian | Ghanaian Stand-Up Comedy",
    description:
      "Watch comedy clips and book shows with Comedian Kwame Obed. Authentic Ghanaian stand-up comedy and humour.",
    images: ["https://www.kwameobed.com/images/image00028.webp"],
    creator: "@comedianko",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": ["Person", "PerformingArtist"],
    name: "Kwame Obed",
    alternateName: ["Comedian Kwame Obed", "Kwame", "Kwame Obed Comedian"],
    description:
      "Ghanaian comedian, stand-up performer, and content creator known for witty storytelling, skits, and authentic Ghanaian humour.",
    jobTitle: "Comedian",
    performerIn: "Stand-up Comedy",
    birthDate: "01-12",
    nationality: "Ghanaian",
    award: "Next Rated Comedy Star - Ghana Comedy Awards 2025",
    url: "https://www.kwameobed.com",
    image: "https://www.kwameobed.com/images/image00028.webp",
    sameAs: [
      "https://www.instagram.com/kwame__obed",
      "https://www.tiktok.com/@kwameobed001",
      "https://x.com/comedianko",
      "https://www.facebook.com/share/16hwCsoWpr",
    ],
    knowsAbout: [
      "Comedy",
      "Stand-up Comedy",
      "Ghanaian Comedy",
      "Entertainment",
      "Performing Arts",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "Ghana",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kwame Obed - Comedian",
    alternateName: "Comedian Kwame Obed Official Website",
    url: "https://www.kwameobed.com",
    description:
      "Official website of Kwame Obed, a Ghanaian comedian. Watch comedy clips, book shows, and follow Kwame's journey.",
    publisher: {
      "@type": "Person",
      name: "Kwame Obed",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.kwameobed.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9759952890681134"
        crossOrigin="anonymous"
      />
      <body
        className={`antialiased ${playfair.variable} ${spaceMono.variable} ${syne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
