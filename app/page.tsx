"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import {
  Bio,
  Footer,
  Header,
  Hero,
  MediaSection,
  UpcomingShows,
} from "./components";

export default function ComedianWebsite() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-[#1A1A1A]"
      }`}
      style={{ fontFamily: "'Syne', system-ui, sans-serif" }}
    >
      <div className="noise-overlay"></div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <MediaSection darkMode={darkMode} />
      <UpcomingShows darkMode={darkMode} />
      <Bio darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
