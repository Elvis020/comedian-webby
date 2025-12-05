"use client";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggleDarkMode = async () => {
    if (!document.startViewTransition) {
      setDarkMode(!darkMode);
      return;
    }

    const button = document.querySelector(".bulb-btn");
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);
    document.documentElement.style.setProperty(
      "--end-radius",
      `${endRadius}px`,
    );

    document.startViewTransition(() => {
      setDarkMode(!darkMode);
    });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-[#0A0A0A] to-transparent"
          : "bg-gradient-to-b from-white to-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo (desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Kwame Obed Logo"
            width={42}
            height={42}
            className={`select-none ${darkMode ? "invert" : ""}`}
          />

          <Link
            href="#"
            className={`playfair text-2xl font-extrabold tracking-tight transition-opacity duration-300
              ${darkMode ? "text-white" : "text-[#228B22]"}
              ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
          >
            Comedian Kwame Obed
          </Link>
        </div>

        {/* Mobile title (no logo) */}
        <div className="block md:hidden items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Kwame Obed Logo"
            width={42}
            height={42}
            className={`select-none ${darkMode ? "invert" : ""}`}
          />
        </div>

        <nav className="flex gap-6 md:gap-8 items-center">
          <Link
            href="#shows"
            className={`space-mono text-xs uppercase tracking-widest transition-colors hidden md:block ${
              darkMode
                ? "text-white hover:text-white/70"
                : "text-[#1A1A1A] hover:text-[#228B22]"
            }`}
          >
            Shows
          </Link>

          <Link
            href="#media"
            className={`space-mono text-xs uppercase tracking-widest transition-colors hidden md:block ${
              darkMode
                ? "text-white hover:text-white/70"
                : "text-[#1A1A1A] hover:text-[#228B22]"
            }`}
          >
            Media
          </Link>

          <Link
            href="#bio"
            className={`space-mono text-xs uppercase tracking-widest transition-colors hidden md:block ${
              darkMode
                ? "text-white hover:text-white/70"
                : "text-[#1A1A1A] hover:text-[#228B22]"
            }`}
          >
            Bio
          </Link>

          <button
            onClick={toggleDarkMode}
            className="bulb-btn hover:cursor-pointer"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun size={17} className="text-white transition-all" />
            ) : (
              <Moon size={17} className="text-[#228B22] transition-all" />
            )}
          </button>

          <Link
            href="#tickets"
            className={`space-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border-2 transition-all ${
              darkMode
                ? "bg-white text-[#0A0A0A] border-white hover:bg-transparent hover:text-white"
                : "bg-[#228B22] text-white border-[#228B22] hover:bg-[#1B6B1B] hover:border-[#1B6B1B]"
            }`}
          >
            Get Tickets
          </Link>
        </nav>
      </div>
    </header>
  );
}
