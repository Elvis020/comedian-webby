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
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Only runs once on mount - reads from localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(saved === "true");
    }
  }, []);

  // Separate effect to save to localStorage when darkMode changes
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
      <Hero darkMode={darkMode} />
      <MediaSection darkMode={darkMode} />
      <UpcomingShows darkMode={darkMode} />
      <Bio darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
