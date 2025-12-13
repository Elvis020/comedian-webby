"use client";
import { useTheme } from "./context/ThemeContext";
import {
  Bio,
  Footer,
  Header,
  Hero,
  MediaSection,
  Snowfall,
  UpcomingShows,
} from "./components";

export default function ComedianWebsite() {
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
      <Snowfall />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <UpcomingShows darkMode={darkMode} />
      <MediaSection darkMode={darkMode} />
      <Bio darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
