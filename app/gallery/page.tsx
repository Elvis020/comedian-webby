"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { GalleryGrid } from "@/app/components/GalleryGrid";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

// Static list of images for now
const galleryImages = [
  { src: "/images/gallery/image00001.jpeg", alt: "Kwame Obed comedian Ghana - Video shoot behind the scenes" },
  { src: "/images/gallery/image00002.jpeg", alt: "Audience laughing at Kwame Obed comedy show" },
  { src: "/images/gallery/image00003.jpeg", alt: "Comedian Kwame Obed performing stand-up on stage" },
  { src: "/images/gallery/image00004.jpeg", alt: "Kwame Obed professional portrait - Ghanaian comedian" },
  { src: "/images/gallery/image00005.jpeg", alt: "Kwame Obed live comedy performance in Ghana" },
  { src: "/images/gallery/image00006.jpeg", alt: "Kwame Obed on stage - Stand-up comedy show" },
  { src: "/images/gallery/image00009.jpeg", alt: "Kwame Obed comedy event - Ghanaian stand-up" },
  { src: "/images/gallery/image00010.jpeg", alt: "Comedian Kwame Obed entertaining crowd" },
  { src: "/images/gallery/image00011.jpeg", alt: "Kwame Obed stand-up performance Ghana" },
  { src: "/images/gallery/image00012.jpeg", alt: "Kwame Obed comedy show moment" },
  { src: "/images/gallery/image00013.jpeg", alt: "Kwame Obed comedian performing live" },
  { src: "/images/gallery/image00014.jpeg", alt: "Kwame Obed on stage - Comedy performance" },
  { src: "/images/gallery/image00015.jpeg", alt: "Comedian Kwame Obed Ghana show" },
  { src: "/images/gallery/image00016.jpeg", alt: "Kwame Obed stand-up comedy Ghana" },
  { src: "/images/gallery/image00017.jpeg", alt: "Kwame Obed live performance" },
  { src: "/images/gallery/image00018.jpeg", alt: "Comedian Kwame Obed stage performance" },
  { src: "/images/gallery/image00019.jpeg", alt: "Kwame Obed comedy show Ghana" },
  { src: "/images/gallery/image00020.jpeg", alt: "Kwame Obed performing - Ghanaian comedian" },
  { src: "/images/gallery/image00021.jpeg", alt: "Kwame Obed comedy performance" },
  { src: "/images/gallery/image00023.jpeg", alt: "Comedian Kwame Obed on stage Ghana" },
  { src: "/images/gallery/image00025.jpeg", alt: "Kwame Obed stand-up show" },
  { src: "/images/gallery/image00027.jpeg", alt: "Kwame Obed live comedy Ghana" },
  { src: "/images/gallery/image00029.jpeg", alt: "Comedian Kwame Obed performing" },
  { src: "/images/gallery/image00030.jpeg", alt: "Kwame Obed comedy event Ghana" },
  { src: "/images/gallery/image00032.jpeg", alt: "Kwame Obed on stage - Comedian" },
  { src: "/images/gallery/image00033.jpeg", alt: "Kwame Obed Ghana comedy show" },
  { src: "/images/gallery/image00035.jpeg", alt: "Comedian Kwame Obed live performance Ghana" },
];

export default function GalleryPage() {
  const { darkMode, setDarkMode, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${darkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-[#1A1A1A]"
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
            Comedy Moments & Memories
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
