"use client";

import { useState, useEffect } from "react";
import { GalleryGrid } from "@/app/components/GalleryGrid";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

// Static list of images for now
const galleryImages = [
  { src: "/images/gallery/image00001.jpeg", alt: "Kwame Obed Video Shoot" },
  { src: "/images/gallery/image00002.jpeg", alt: "Audience Laughing" },
  { src: "/images/gallery/image00003.jpeg", alt: "Kwame Obed on Stage" },
  { src: "/images/gallery/image00004.jpeg", alt: "Kwame Obed Portrait" },
  { src: "/images/gallery/image00005.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00006.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00009.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00010.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00011.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00012.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00013.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00014.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00015.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00016.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00017.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00018.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00019.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00020.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00021.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00023.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00025.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00027.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00029.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00030.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00032.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00033.jpeg", alt: "Kwame Obed Performing" },
  { src: "/images/gallery/image00035.jpeg", alt: "Kwame Obed Performing" },
];

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(saved === "true");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-[#1A1A1A]"
      }`}
      style={{ fontFamily: "'Syne', system-ui, sans-serif" }}
    >
      <div className="noise-overlay"></div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center animate-fade-up">
          <h1
            className={`playfair text-4xl md:text-6xl font-bold mb-4 ${darkMode ? "text-white" : "text-[#1A1A1A]"}`}
          >
            Gallery
          </h1>
          <p
            className={`space-mono text-sm md:text-base uppercase tracking-widest ${darkMode ? "text-[#228B22]" : "text-[#228B22]"}`}
          >
            Moments & Memories
          </p>
        </div>

        <div className="animate-fade-up-delay">
          <GalleryGrid images={galleryImages} />
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
