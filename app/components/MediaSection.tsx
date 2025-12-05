"use client";
import { useState } from "react";
import { mediaItems } from "@/lib/consts";
import Image from "next/image";
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
          <div className="flex gap-2 relative z-10">
            {["media", "videos", "photos"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  console.log("Clicked:", tab); // Debug log
                  setActiveSection(tab);
                }}
                className={`px-5 py-3 space-mono text-xs uppercase tracking-wider border-2 transition-all cursor-pointer ${
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
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className={`relative aspect-square overflow-hidden cursor-pointer group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              } ${darkMode ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src ?? ""}
                  alt={item.title}
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
                className={`absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent opacity-0 ${item.type === "image" ? "group-hover:opacity-100" : "group-hover:opacity-20"} transition-opacity flex flex-col justify-end p-5 pointer-events-none`}
              >
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
  );
}
