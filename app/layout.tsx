import type { Metadata } from "next";
import "./globals.css";
import { playfair, spaceMono, syne } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Comedian Kwame Obed",
  description:
    "Official website of Kwame Obed, a Ghanaian comedian known for witty storytelling, skits, stand-up comedy, and authentic Ghanaian humour.",
  keywords: [
    "Comedian Kwame Obed",
    "Comedian Kwame",
    "Comedian Obed",
    "Kwame Obed",
    "Ghanaian comedian",
    "Ghana comedy",
    "Accra comedian",
    "stand-up comedy Ghana",
    "skits Ghana",
    "content creator Ghana",
  ],
  metadataBase: new URL("https://www.kwameobed.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kwame Obed – Ghanaian Comedian",
    description:
      "Laugh with Kwame Obed — skits, stand-up comedy, shows, and authentic Ghanaian humour.",
    url: "https://www.kwameobed.com",
    siteName: "Kwame Obed",
    type: "website",
    images: [
      {
        url: "/images/image00028.webp", // create later (1200x630)
        width: 1200,
        height: 630,
        alt: "Kwame Obed – Ghanaian Comedian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwame Obed – Ghanaian Comedian",
    description:
      "Skits, stand-up comedy, and authentic Ghanaian humour by Kwame Obed.",
    images: ["/images/image00028.webp"],
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
  return (
    <html lang="en">
      <body
        className={`antialiased ${playfair.variable} ${spaceMono.variable} ${syne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
