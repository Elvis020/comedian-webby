"use client";
import { useState } from "react";
import { mediaItems } from "@/lib/consts";
import Image from "next/image";
import Link from "next/link";
import AutoPlayVideoThumb from "./AutoPlayVideoThumb";

export function MediaSection({ darkMode }: { darkMode: boolean }) {
  const [activeSection, setActiveSection] = useState("media");

  // Filter media items based on active section
  const filteredItems = mediaItems.filter(
    (item) =>
      activeSection === "media" ||
      (activeSection === "videos" && item.type === "video") ||
      (activeSection === "photos" && item.type === "image"),
  );

  return (
    <section
      className={`py-24 px-6 transition-colors duration-500 relative overflow-hidden ${darkMode ? "bg-[#0A0A0A]" : "bg-white"
        }`}
      id="media"
    >
      {/* Artistic Background Elements - Geometric Style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Diagonal stripe accent */}
        <div
          className={`absolute top-0 right-0 w-1/3 h-full ${darkMode
            ? "bg-gradient-to-bl from-white/[0.02] to-transparent"
            : "bg-gradient-to-bl from-[#228B22]/[0.03] to-transparent"
            }`}
        />
        {/* Geometric square - top left */}
        <div
          className={`absolute -top-10 -left-10 w-40 h-40 rotate-45 ${darkMode ? "border border-white/10" : "border border-[#228B22]/10"
            }`}
        />
        {/* Geometric square - bottom right */}
        <div
          className={`absolute -bottom-16 -right-16 w-56 h-56 rotate-12 ${darkMode ? "border-2 border-white/5" : "border-2 border-[#228B22]/5"
            }`}
        />
        {/* Dotted pattern overlay hint */}
        <div
          className={`absolute bottom-0 left-0 w-1/4 h-1/3 ${darkMode
            ? "bg-gradient-to-tr from-white/[0.01] to-transparent"
            : "bg-gradient-to-tr from-[#228B22]/[0.02] to-transparent"
            }`}
        />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
          <div>
            <span
              className={`space-mono text-[10px] uppercase tracking-[0.3em] ${darkMode ? "text-white" : "text-[#228B22]"
                }`}
            >
              Pics &amp; Videos
            </span>
            <h2
              className={`playfair text-4xl md:text-5xl font-extrabold tracking-tight mt-2 ${darkMode ? "text-white" : "text-[#1A1A1A]"
                }`}
            >
              Caught on Camera
            </h2>
          </div>
          <div className="flex gap-2 relative">
            {["media", "videos", "photos"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  console.log("Clicked:", tab); // Debug log
                  setActiveSection(tab);
                }}
                className={`px-5 py-3 space-mono text-xs uppercase tracking-wider border-2 transition-all cursor-pointer ${activeSection === tab
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
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className={`relative aspect-square overflow-hidden cursor-pointer group ${i === 0 ? "col-span-2 row-span-2" : ""
                } ${darkMode ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src ?? ""}
                  alt={`${item.title} - Kwame Obed comedian Ghana`}
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ) : (
                <div className="relative w-full h-full">
                  <AutoPlayVideoThumb
                    videoId={item.videoId ?? ""}
                    darkMode={darkMode}
                    className="w-full h-full"
                  />
                </div>
              )}
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent opacity-0
                  ${item.type === "image" ? "group-hover:opacity-100" : "group-hover:opacity-20"}
                  transition-opacity flex flex-col justify-end p-5 pointer-events-none`}
              >
                <span
                  className={`space-mono text-[10px] uppercase tracking-widest ${darkMode ? "text-white/70" : "text-[#90EE90]"
                    }`}
                >
                  {item.type}
                </span>
                <span
                  className={`mt-1 playfair text-xl font-semibold  text-white`}
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/gallery"
            className={`inline-flex items-center gap-3 px-8 py-4 space-mono text-xs font-bold uppercase tracking-wider border-2 transition-all ${darkMode
              ? "bg-transparent text-white border-white/30 hover:bg-white hover:border-white hover:text-[#0A0A0A]"
              : "bg-transparent text-[#1A1A1A] border-[#1A1A1A]/30 hover:bg-[#228B22] hover:border-[#228B22] hover:text-white"
              }`}
          >
            <span>View Full Gallery</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
