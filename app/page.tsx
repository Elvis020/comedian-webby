"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function ComedianWebsite() {
  const [activeSection, setActiveSection] = useState("media");
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  // Save preference when changed
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const upcomingShows = [
    {
      id: 1,
      date: "DEC 14",
      venue: "National Theatre",
      city: "Accra",
      time: "8:00 PM",
      ticketLink: "#",
    },
    {
      id: 2,
      date: "DEC 21",
      venue: "Movenpick Ambassador",
      city: "Accra",
      time: "9:00 PM",
      ticketLink: "#",
    },
    {
      id: 3,
      date: "JAN 05",
      venue: "Labadi Beach Hotel",
      city: "Accra",
      time: "7:30 PM",
      ticketLink: "#",
    },
    {
      id: 4,
      date: "JAN 18",
      venue: "Kempinski Gold Coast",
      city: "Accra",
      time: "8:00 PM",
      ticketLink: "#",
    },
  ];

  const mediaItems = [
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800",
      title: "Lagos Live Set",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      title: "Backstage Vibes",
    },
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800",
      title: "Accra Comedy Night",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      title: "Festival Moment",
    },
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",
      title: "UK Tour Highlights",
    },
  ];

  const socials = [
    { name: "Instagram", icon: "IG" },
    { name: "TikTok", icon: "TK" },
    { name: "YouTube", icon: "YT" },
    { name: "Twitter", icon: "X" },
    { name: "Facebook", icon: "FB" },
  ];

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-[#1A1A1A]"
      }`}
      style={{ fontFamily: "'Syne', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .playfair { font-family: 'Playfair Display', serif; }
        .space-mono { font-family: 'Space Mono', monospace; }
        .syne { font-family: 'Syne', sans-serif; }

        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .hero-pattern-light {
          background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(34, 139, 34, 0.05) 2px, rgba(34, 139, 34, 0.05) 4px);
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
        }

        .hero-pattern-dark {
          background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px);
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.5); opacity: 0.5; }
        }

        .animate-fade-up { animation: fadeUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-fade-up-delay { animation: fadeUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s forwards; opacity: 0; }
        .animate-scroll { animation: scrollPulse 2s ease infinite; }

        /* Bulb button styles */
        .bulb-btn {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
        }

        .bulb-btn:hover {
          transform: scale(1.1);
        }

        .bulb-btn:active {
          transform: scale(0.95);
        }

        .bulb-icon {
          transition: all 0.3s ease;
        }

        .bulb-icon.on {
          filter: drop-shadow(0 0 8px #FFD700) drop-shadow(0 0 16px #FFD700);
        }
      `}</style>

      <div className="noise-overlay"></div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-b from-[#0A0A0A] to-transparent"
            : "bg-gradient-to-b from-white to-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="#"
            className={`playfair text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity ${
              darkMode ? "text-white" : "text-[#228B22]"
            }`}
          >
            Kwame Obed
          </Link>
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

            {/* Bulb Icon Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bulb-btn"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Turn on the lights" : "Turn off the lights"}
            >
              {darkMode ? (
                <Sun size={17} className=" text-white transition-all" />
              ) : (
                <Moon size={17} className=" text-[#1A1A1A] transition-all" />
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

      {/* Hero */}
      <section
        className={`min-h-screen flex items-center relative pt-24 overflow-hidden transition-colors duration-500 ${
          darkMode ? "bg-[#0A0A0A]" : "bg-[#FAFAFA]"
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-3/5 h-full hidden md:block ${
            darkMode ? "hero-pattern-dark" : "hero-pattern-light"
          }`}
        ></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up-delay">
              <div
                className={`space-mono text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4 ${
                  darkMode ? "text-white" : "text-[#228B22]"
                }`}
              >
                <span
                  className={`w-10 h-px hidden md:block ${
                    darkMode ? "bg-white" : "bg-[#228B22]"
                  }`}
                ></span>
                <span>Ghana&apos;s Finest • Comedian</span>
              </div>
              <h1
                className={`playfair text-6xl md:text-8xl font-black leading-none tracking-tight mb-6 ${
                  darkMode ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                Laughter
                <span
                  className={`block italic ${
                    darkMode ? "text-white/90" : "text-[#228B22]"
                  }`}
                >
                  Without Borders
                </span>
              </h1>
              <p
                className={`text-lg leading-relaxed max-w-md mb-8 ${
                  darkMode ? "text-white/70" : "text-[#1A1A1A]/70"
                }`}
              >
                From the streets of Accra to stages worldwide, bringing
                authentic African humor that connects cultures through the
                universal language of laughter.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="#tickets"
                  className={`inline-flex items-center gap-3 px-6 py-4 space-mono text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                    darkMode
                      ? "bg-white text-[#0A0A0A] border-white hover:bg-transparent hover:text-white"
                      : "bg-[#228B22] text-white border-[#228B22] hover:bg-[#1B6B1B] hover:border-[#1B6B1B]"
                  }`}
                >
                  <span>Book Now</span>
                  <span>→</span>
                </Link>
                <Link
                  href="#media"
                  className={`inline-flex items-center gap-3 bg-transparent px-6 py-4 space-mono text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                    darkMode
                      ? "text-white border-white/30 hover:border-white"
                      : "text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#228B22] hover:text-[#228B22]"
                  }`}
                >
                  <span>Watch Clips</span>
                  <span>▶</span>
                </Link>
              </div>
            </div>
            <div
              className="relative animate-fade-up hidden md:block"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div
                  className={`absolute -top-5 -right-5 w-full h-full border-2 -z-10 ${
                    darkMode ? "border-white" : "border-[#228B22]"
                  }`}
                ></div>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                  alt="Kwame Obed"
                  width={800}
                  height={1067}
                  className={`w-full h-full object-cover hover:scale-105 transition-all duration-700 ${
                    darkMode ? "grayscale" : ""
                  }`}
                />
              </div>
              <div
                className={`absolute -bottom-8 -left-8 w-28 h-28 flex flex-col items-center justify-center ${
                  darkMode ? "bg-white" : "bg-[#228B22]"
                }`}
              >
                <span
                  className={`playfair text-4xl font-black ${
                    darkMode ? "text-[#0A0A0A]" : "text-white"
                  }`}
                >
                  10+
                </span>
                <span
                  className={`space-mono text-[10px] uppercase tracking-widest ${
                    darkMode ? "text-[#0A0A0A]" : "text-white"
                  }`}
                >
                  Years Live
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            className={`space-mono text-[10px] uppercase tracking-widest ${
              darkMode ? "text-white/50" : "text-[#1A1A1A]/50"
            }`}
          >
            Scroll
          </span>
          <div
            className={`w-px h-10 animate-scroll ${
              darkMode
                ? "bg-gradient-to-b from-white to-transparent"
                : "bg-gradient-to-b from-[#228B22] to-transparent"
            }`}
          ></div>
        </div>
      </section>

      {/* Media Section */}
      <section
        className={`py-24 px-6 transition-colors duration-500 ${
          darkMode ? "bg-[#0A0A0A]" : "bg-white"
        }`}
        id="media"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
            <div>
              <span
                className={`space-mono text-[10px] uppercase tracking-[0.3em] ${
                  darkMode ? "text-white" : "text-[#228B22]"
                }`}
              >
                Pics &amp; Videos
              </span>
              <h2
                className={`playfair text-4xl md:text-5xl font-extrabold tracking-tight mt-2 ${
                  darkMode ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                Caught on Camera
              </h2>
            </div>
            <div className="flex gap-2">
              {["media", "videos", "photos"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSection(tab)}
                  className={`px-5 py-3 space-mono text-xs uppercase tracking-wider border-2 transition-all ${
                    activeSection === tab
                      ? darkMode
                        ? "bg-white border-white text-[#0A0A0A]"
                        : "bg-[#228B22] border-[#228B22] text-white"
                      : darkMode
                        ? "border-white/20 text-white hover:border-white"
                        : "border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#228B22] hover:text-[#228B22]"
                  }`}
                >
                  {tab === "media" ? "All" : tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mediaItems
              .filter(
                (item) =>
                  activeSection === "media" ||
                  (activeSection === "videos" && item.type === "video") ||
                  (activeSection === "photos" && item.type === "image"),
              )
              .map((item, i) => (
                <div
                  key={i}
                  className={`relative aspect-square overflow-hidden cursor-pointer group ${
                    i === 0 ? "col-span-2 row-span-2" : ""
                  } ${darkMode ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"}`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className={`object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                      darkMode ? "grayscale" : ""
                    }`}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {item.type === "video" && (
                    <div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all ${
                        darkMode ? "bg-white" : "bg-[#228B22]"
                      }`}
                    >
                      <div
                        className={`w-0 h-0 border-l-[14px] border-y-[8px] border-y-transparent ml-1 ${
                          darkMode ? "border-l-[#0A0A0A]" : "border-l-white"
                        }`}
                      ></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                    <span
                      className={`space-mono text-[10px] uppercase tracking-widest ${
                        darkMode ? "text-white/70" : "text-[#90EE90]"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="playfair text-xl font-semibold mt-1 text-white">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section
        className={`py-24 px-6 transition-colors duration-500 ${
          darkMode ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"
        }`}
        id="shows"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span
              className={`space-mono text-[10px] uppercase tracking-[0.3em] ${
                darkMode ? "text-white" : "text-[#228B22]"
              }`}
            >
              On Tour
            </span>
            <h2
              className={`playfair text-4xl md:text-5xl font-extrabold tracking-tight mt-2 ${
                darkMode ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              Upcoming Shows
            </h2>
          </div>
          <div className="flex flex-col">
            {upcomingShows.map((show) => (
              <div
                key={show.id}
                className={`grid md:grid-cols-[120px_1fr_auto] gap-6 py-6 border-b items-center hover:pl-4 transition-all cursor-pointer ${
                  darkMode
                    ? "border-white/10 hover:bg-white/5"
                    : "border-[#1A1A1A]/10 hover:bg-[#228B22]/5"
                }`}
              >
                <div
                  className={`playfair text-3xl font-extrabold ${
                    darkMode ? "text-white" : "text-[#228B22]"
                  }`}
                >
                  {show.date}
                </div>
                <div>
                  <div
                    className={`syne text-xl font-semibold ${
                      darkMode ? "text-white" : "text-[#1A1A1A]"
                    }`}
                  >
                    {show.venue}
                  </div>
                  <div
                    className={`space-mono text-xs uppercase tracking-wider mt-1 ${
                      darkMode ? "text-white/60" : "text-[#1A1A1A]/60"
                    }`}
                  >
                    {show.city} • {show.time}
                  </div>
                </div>
                <Link
                  href={show.ticketLink}
                  className={`space-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border-2 transition-all text-center ${
                    darkMode
                      ? "bg-white text-[#0A0A0A] border-white hover:bg-transparent hover:text-white"
                      : "bg-[#228B22] text-white border-[#228B22] hover:bg-transparent hover:text-[#228B22]"
                  }`}
                  id="tickets"
                >
                  Get Tickets
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section
        className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
          darkMode ? "bg-[#0A0A0A]" : "bg-white"
        }`}
        id="bio"
      >
        <div
          className={`absolute top-0 right-0 playfair text-[30rem] leading-none pointer-events-none select-none hidden lg:block ${
            darkMode ? "text-white/5" : "text-[#228B22]/10"
          }`}
        >
          &quot;
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div
                  className={`absolute -bottom-4 -left-4 w-full h-full -z-10 ${
                    darkMode ? "bg-white" : "bg-[#228B22]"
                  }`}
                ></div>
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800"
                  alt="Kwame Obed Portrait"
                  width={800}
                  height={1000}
                  className={`w-full h-full object-cover ${
                    darkMode ? "grayscale" : ""
                  }`}
                />
              </div>
            </div>
            <div className="relative z-10">
              <blockquote
                className={`playfair text-2xl md:text-3xl italic leading-relaxed mb-8 ${
                  darkMode ? "text-white/90" : "text-[#1B6B1B]"
                }`}
              >
                &quot;Comedy is my way of building bridges between cultures.
                When we laugh together, we remember we&apos;re all human.&quot;
              </blockquote>
              <p
                className={`leading-loose mb-4 ${
                  darkMode ? "text-white/80" : "text-[#1A1A1A]/80"
                }`}
              >
                Born in Kumasi, Ghana, Kwame Obed discovered his gift for making
                people laugh at family gatherings where his impressions became
                legendary. After winning Ghana&apos;s Got Talent in 2015, he
                took his unique blend of observational comedy to stages across
                Africa, Europe, and North America.
              </p>
              <p
                className={`leading-loose mb-8 ${
                  darkMode ? "text-white/80" : "text-[#1A1A1A]/80"
                }`}
              >
                His Netflix special &quot;From Kejetia to the World&quot; became
                the most-watched African comedy special of 2023. Today, Kwame
                continues pushing boundaries, using humor to address social
                issues while celebrating African life.
              </p>
              <div
                className={`flex gap-10 pt-6 border-t ${
                  darkMode ? "border-white/10" : "border-[#1A1A1A]/10"
                }`}
              >
                {[
                  { num: "50+", label: "Countries" },
                  { num: "2M+", label: "Followers" },
                  { num: "500+", label: "Shows" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div
                      className={`playfair text-4xl font-extrabold ${
                        darkMode ? "text-white" : "text-[#228B22]"
                      }`}
                    >
                      {stat.num}
                    </div>
                    <div
                      className={`space-mono text-[10px] uppercase tracking-widest mt-1 ${
                        darkMode ? "text-white/60" : "text-[#1A1A1A]/60"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 px-6 border-t transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#1A1A1A]"
            : "border-[#1A1A1A]/10 bg-[#F5F5F5]"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
          <div className="flex gap-3 flex-wrap justify-center">
            {socials.map((s, i) => (
              <Link
                key={i}
                href="#"
                className={`w-12 h-12 border-2 flex items-center justify-center space-mono text-xs font-bold hover:-translate-y-1 transition-all ${
                  darkMode
                    ? "border-white/20 text-white hover:bg-white hover:border-white hover:text-[#0A0A0A]"
                    : "border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#228B22] hover:border-[#228B22] hover:text-white"
                }`}
              >
                {s.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            <span
              className={`space-mono text-[10px] uppercase tracking-[0.3em] ${
                darkMode ? "text-white" : "text-[#228B22]"
              }`}
            >
              Quick Links
            </span>
            <div className="flex flex-col gap-3 w-full">
              {[
                "📧 Booking Inquiries",
                "🎫 Buy Tickets",
                "📺 YouTube Channel",
              ].map((link, i) => (
                <Link
                  key={i}
                  href="#"
                  className={`w-full text-center py-3 border-2 space-mono text-xs uppercase tracking-wider transition-all ${
                    darkMode
                      ? "border-white/20 text-white hover:bg-white hover:border-white hover:text-[#0A0A0A]"
                      : "border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#228B22] hover:border-[#228B22] hover:text-white"
                  }`}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div
              className={`playfair text-xl font-extrabold mb-2 ${
                darkMode ? "text-white" : "text-[#228B22]"
              }`}
            >
              Kwame Obed
            </div>
            <p
              className={`space-mono text-[10px] tracking-wider ${
                darkMode ? "text-white/40" : "text-[#1A1A1A]/40"
              }`}
            >
              © 2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
