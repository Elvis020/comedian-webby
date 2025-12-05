"use client";

import { useEffect, useRef, useState } from "react";

export default function AutoPlayVideoThumb({
  videoId,
  className,
  darkMode,
}: {
  videoId: string;
  className?: string;
  darkMode: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}&autoplay=1`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${
    visible ? 1 : 0
  }&mute=1&playsinline=1&controls=1`;

  return (
    <div ref={ref} className={`relative w-full h-full ${className}`}>
      <iframe
        src={embedUrl}
        className="w-full h-full object-cover"
        allow="autoplay; encrypted-media"
      />

      {/* Button to open on YouTube (does NOT block the video) */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // don’t trigger grid parent clicks
          window.open(youtubeUrl, "_blank");
        }}
        className={`absolute bottom-20 hover:cursor-pointer hover:scale-110 right-3 px-3 py-2 rounded-md text-xs space-mono uppercase tracking-wide shadow-md transition-all
          ${darkMode ? "bg-white text-[#0A0A0A]" : "bg-[#228B22] text-white"}
        `}
      >
        Open on YouTube
      </button>
    </div>
  );
}
