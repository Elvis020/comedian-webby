"use client";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

  const visibilityObserver = () => {
    // Track visible sections on scroll
    const sections = ["hero", "shows", "media", "bio"];
    const sectionElements = new Map<string, Element>();

    // Collect all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        sectionElements.set(section, element);
      }
    });

    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "0px 0px -50% 0px",
    };

    const observerCallback = () => {
      // Check all sections and find which one is most visible in viewport
      let maxVisibility = 0;
      let mostVisibleSection = "";

      sectionElements.forEach((element, sectionId) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate how much of the section is in the top half of viewport
        if (rect.top < viewportHeight / 2 && rect.bottom > 0) {
          const visibleTop = Math.max(rect.top, 0);
          const visibleBottom = Math.min(rect.bottom, viewportHeight / 2);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          if (visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight;
            mostVisibleSection = sectionId;
          }
        }
      });

      if (mostVisibleSection === "hero") {
        setVisibleSection("");
      } else if (mostVisibleSection) {
        setVisibleSection(`#${mostVisibleSection}`);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  };

  const heroSectionObserver = () => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  };

  const handleScrollObserver = () => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };

  const handleHashChange = () => {
    // Track hash changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  };

  const [scrolled, setScrolled] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [visibleSection, setVisibleSection] = useState("");
  const pathname = usePathname();

  const phone = "233599226332";

  useEffect(() => {
    visibilityObserver();
    heroSectionObserver();
    handleScrollObserver();
    handleHashChange();
  }, []);

  useEffect(() => {
    // Handle hash navigation after page load
    const hash = window.location.hash;
    setCurrentHash(hash);
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  useEffect(() => {}, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isLinkActive = (href: string) => {
    if (pathname !== "/" && !href.startsWith("/")) return false;

    if (href === "/") {
      // Home link is active when on home page with hero visible (no hash/section)
      return pathname === "/" && visibleSection === "";
    }

    if (href.startsWith("/#")) {
      if (pathname !== "/") return false;
      const hash = href.substring(1);
      // Use visible section from scroll tracking
      return visibleSection === hash;
    }

    return pathname === href;
  };

  return (
    <>
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
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Kwame Obed Logo"
                width={42}
                height={42}
                className={`select-none ${darkMode ? "invert" : ""}`}
              />
            </Link>

            <Link
              href="/"
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
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                alt="Kwame Obed Logo"
                width={42}
                height={42}
                className={`select-none ${darkMode ? "invert" : ""}`}
              />
            </Link>
          </div>

          <nav className="flex gap-6 md:gap-8 items-center">
            {/* Hamburger Menu Button - Mobile Only */}

            <Link
              href="/#shows"
              className={`space-mono text-xs uppercase tracking-widest transition-colors hidden md:block ${
                isLinkActive("/#shows")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Shows
            </Link>

            <Link
              href="/#media"
              className={`space-mono text-xs uppercase tracking-widest transition-colors hidden md:block ${
                isLinkActive("/#media")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Media
            </Link>

            <Link
              href="/#bio"
              className={`space-mono text-xs uppercase tracking-widest transition-colors hidden md:block ${
                isLinkActive("/#bio")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Bio
            </Link>

            <Link
              href="/gallery"
              className={`space-mono text-xs uppercase tracking-widest transition-colors hidden md:block ${
                isLinkActive("/gallery")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Gallery
            </Link>

            <button
              onClick={toggleDarkMode}
              className={`bulb-btn hover:cursor-pointer transition-all ${
                isHeroInView ? "ml-auto md:ml-auto" : "md:ml-auto"
              }`}
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
              href={`https://wa.me/${phone}`}
              target="_blank"
              className={`space-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border-2 transition-all duration-300 md:hidden ${
                !isHeroInView
                  ? " translate-x-0 pointer-events-auto animate-slide-in-right"
                  : "hidden translate-x-5 pointer-events-none"
              } ${
                darkMode
                  ? "bg-white text-[#0A0A0A] border-white hover:bg-transparent hover:text-white"
                  : "bg-[#228B22] text-white border-[#228B22] hover:bg-[#1B6B1B] hover:border-[#1B6B1B]"
              }`}
            >
              Book now
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X
                  size={24}
                  className={darkMode ? "text-white" : "text-[#1A1A1A]"}
                />
              ) : (
                <Menu
                  size={24}
                  className={darkMode ? "text-white" : "text-[#1A1A1A]"}
                />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
            darkMode ? "bg-[#0A0A0A]" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <Link
              href="/"
              onClick={closeMenu}
              className={`space-mono text-2xl uppercase tracking-widest transition-colors ${
                isLinkActive("/")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/#shows"
              onClick={closeMenu}
              className={`space-mono text-2xl uppercase tracking-widest transition-colors ${
                isLinkActive("/#shows")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Shows
            </Link>

            <Link
              href="/#media"
              onClick={closeMenu}
              className={`space-mono text-2xl uppercase tracking-widest transition-colors ${
                isLinkActive("/#media")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Media
            </Link>

            <Link
              href="/#bio"
              onClick={closeMenu}
              className={`space-mono text-2xl uppercase tracking-widest transition-colors ${
                isLinkActive("/#bio")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Bio
            </Link>

            <Link
              href="/gallery"
              onClick={closeMenu}
              className={`space-mono text-2xl uppercase tracking-widest transition-colors ${
                isLinkActive("/gallery")
                  ? darkMode
                    ? "text-[#228B22] font-bold"
                    : "text-[#228B22] font-bold"
                  : darkMode
                    ? "text-white hover:text-white/70"
                    : "text-[#1A1A1A] hover:text-[#228B22]"
              }`}
            >
              Gallery
            </Link>

            <Link
              href={`https://wa.me/${phone}`}
              target="_blank"
              onClick={closeMenu}
              className={`space-mono text-lg font-bold uppercase tracking-wider px-8 py-4 border-2 rounded-lg transition-all mt-4 ${
                darkMode
                  ? "bg-white text-[#0A0A0A] border-white hover:bg-transparent hover:text-white"
                  : "bg-[#228B22] text-white border-[#228B22] hover:bg-[#1B6B1B] hover:border-[#1B6B1B]"
              }`}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
