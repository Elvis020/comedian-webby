"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ComedianWebsite() {
  const [activeSection, setActiveSection] = useState("media");
  const [hoveredShow, setHoveredShow] = useState(null);

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
      className="min-h-screen bg-[#0A0A0A] text-[#FAF7F2] overflow-x-hidden"
      style={{ fontFamily: "'Syne', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .playfair { font-family: 'Playfair Display', serif; }
        .space-mono { font-family: 'Space Mono', monospace; }
        .syne { font-family: 'Syne', sans-serif; }

        .noise-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 9999; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .hero-pattern {
          background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(212, 175, 55, 0.03) 2px, rgba(212, 175, 55, 0.03) 4px);
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
      `}</style>

      <div className="noise-overlay" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-gradient-to-b from-[#0A0A0A] to-transparent backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#"
            className="playfair text-2xl font-extrabold text-[#D4AF37] tracking-tight hover:opacity-80 transition-opacity"
          >
            Kwame Obed
          </a>
          <nav className="flex gap-8 items-center">
            <a
              href="#shows"
              className="space-mono text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors hidden md:block"
            >
              Shows
            </a>
            <a
              href="#media"
              className="space-mono text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors hidden md:block"
            >
              Media
            </a>
            <a
              href="#bio"
              className="space-mono text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors hidden md:block"
            >
              Bio
            </a>
            <a
              href="#tickets"
              className="space-mono text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#0A0A0A] px-5 py-3 hover:bg-transparent hover:text-[#D4AF37] border-2 border-[#D4AF37] transition-all"
            >
              Get Tickets
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-3/5 h-full hero-pattern hidden md:block" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up-delay">
              <div className="space-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-6 flex items-center gap-4">
                <span className="w-10 h-px bg-[#D4AF37] hidden md:block" />
                Ghana's Finest • Comedian
              </div>
              <h1 className="playfair text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
                Laughter
                <span className="block text-[#D4AF37] italic">
                  Without Borders
                </span>
              </h1>
              <p className="text-lg text-[#FAF7F2]/70 leading-relaxed max-w-md mb-8">
                From the streets of Accra to stages worldwide, bringing
                authentic African humor that connects cultures through the
                universal language of laughter.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#tickets"
                  className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#0A0A0A] px-6 py-4 space-mono text-xs font-bold uppercase tracking-wider border-2 border-[#D4AF37] hover:bg-transparent hover:text-[#D4AF37] transition-all"
                >
                  Book Now <span>→</span>
                </a>
                <a
                  href="#media"
                  className="inline-flex items-center gap-3 bg-transparent text-[#FAF7F2] px-6 py-4 space-mono text-xs font-bold uppercase tracking-wider border border-[#FAF7F2]/30 hover:border-[#FAF7F2] transition-all"
                >
                  Watch Clips <span>▶</span>
                </a>
              </div>
            </div>
            <div
              className="relative animate-fade-up hidden md:block"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <div className="absolute -top-5 -right-5 w-full h-full border-2 border-[#D4AF37] -z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                  alt="Kwame Obed"
                  width={"800"}
                  height={"800"}
                  className="w-full h-full object-cover grayscale-20 contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#C41E3A] flex flex-col items-center justify-center">
                <span className="playfair text-4xl font-black text-white">
                  10+
                </span>
                <span className="space-mono text-[10px] uppercase tracking-widest text-white">
                  Years Live
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="space-mono text-[10px] uppercase tracking-widest text-[#FAF7F2]/50">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent animate-scroll" />
        </div>
      </section>

      {/* Media Section */}
      <section className="py-24 px-6" id="media">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
            <div>
              <span className="space-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Pics & Videos
              </span>
              <h2 className="playfair text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
                Caught on Camera
              </h2>
            </div>
            <div className="flex gap-2">
              {["media", "videos", "photos"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSection(tab)}
                  className={`px-5 py-3 space-mono text-xs uppercase tracking-wider border transition-all ${
                    activeSection === tab
                      ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A0A0A]"
                      : "border-[#FAF7F2]/20 hover:border-[#FAF7F2]"
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
                  className={`relative aspect-square overflow-hidden cursor-pointer group bg-[#1A1A1A] ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    sizes="100vw"
                  />
                  {item.type === "video" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all">
                      <div className="w-0 h-0 border-l-14 border-l-[#0A0A0A] border-y-8 border-y-transparent ml-1" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                    <span className="space-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">
                      {item.type}
                    </span>
                    <span className="playfair text-xl font-semibold mt-1">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-24 px-6 bg-[#1A1A1A]" id="shows">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="space-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              On Tour
            </span>
            <h2 className="playfair text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
              Upcoming Shows
            </h2>
          </div>
          <div className="flex flex-col">
            {upcomingShows.map((show) => (
              <div
                key={show.id}
                className="grid md:grid-cols-[120px_1fr_auto] gap-6 py-6 border-b border-[#FAF7F2]/10 items-center hover:pl-4 hover:bg-[#D4AF37]/5 transition-all cursor-pointer"
              >
                <div className="playfair text-3xl font-extrabold text-[#D4AF37]">
                  {show.date}
                </div>
                <div>
                  <div className="syne text-xl font-semibold">{show.venue}</div>
                  <div className="space-mono text-xs text-[#FAF7F2]/60 uppercase tracking-wider mt-1">
                    {show.city} • {show.time}
                  </div>
                </div>
                <a
                  href={show.ticketLink}
                  className="space-mono text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#0A0A0A] px-5 py-3 border-2 border-[#D4AF37] hover:bg-transparent hover:text-[#D4AF37] transition-all text-center"
                  id="tickets"
                >
                  Get Tickets
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6 relative overflow-hidden" id="bio">
        <div className="absolute top-0 right-0 playfair text-[30rem] text-[#D4AF3720] leading-none pointer-events-none select-none hidden lg:block">
          "
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden">
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#228B22] -z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800"
                  alt="Kweku Portrait"
                  className="w-full h-full object-cover grayscale-30"
                  width={"800"}
                  height={"800"}
                />
              </div>
            </div>
            <div className="relative z-10">
              <blockquote className="playfair text-2xl md:text-3xl italic leading-relaxed text-[#F4E4BC] mb-8">
                "Comedy is my way of building bridges between cultures. When we
                laugh together, we remember we're all human."
              </blockquote>
              <p className="text-[#FAF7F2]/80 leading-loose mb-4">
                Born in Kumasi, Ghana, Kwame Obed discovered his gift for making
                people laugh at family gatherings where his impressions became
                legendary. After winning Ghana's Got Talent in 2015, he took his
                unique blend of observational comedy to stages across Africa,
                Europe, and North America.
              </p>
              <p className="text-[#FAF7F2]/80 leading-loose mb-8">
                His Netflix special "From Kejetia to the World" became the
                most-watched African comedy special of 2023. Today, Kweku
                continues pushing boundaries, using humor to address social
                issues while celebrating African life.
              </p>
              <div className="flex gap-10 pt-6 border-t border-[#FAF7F2]/10">
                {[
                  { num: "50+", label: "Countries" },
                  { num: "2M+", label: "Followers" },
                  { num: "500+", label: "Shows" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="playfair text-4xl font-extrabold text-[#D4AF37]">
                      {stat.num}
                    </div>
                    <div className="space-mono text-[10px] uppercase tracking-widest text-[#FAF7F2]/60 mt-1">
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
      <footer className="py-16 px-6 border-t border-[#FAF7F2]/10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
          <div className="flex gap-3 flex-wrap justify-center">
            {socials.map((s, i) => (
              <Link
                key={i}
                href="#"
                className="w-12 h-12 border border-[#FAF7F2]/20 flex items-center justify-center space-mono text-xs font-bold hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0A0A0A] hover:-translate-y-1 transition-all"
              >
                {s.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            <span className="space-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              Quick Links
            </span>
            <div className="flex flex-col gap-3 w-full">
              {[
                "📧 Booking Inquiries",
                "🎫 Buy Tickets",
                "📺 YouTube Channel",
                "🎙️ Podcast",
                "🛍️ Merch Store",
              ].map((link, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-full text-center py-3 border border-[#FAF7F2]/20 space-mono text-xs uppercase tracking-wider hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0A0A0A] transition-all"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="playfair text-xl font-extrabold text-[#D4AF37] mb-2">
              Kwame Obed
            </div>
            <p className="space-mono text-[10px] text-[#FAF7F2]/40 tracking-wider">
              © 2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
