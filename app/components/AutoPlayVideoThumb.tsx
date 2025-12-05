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
  }&mute=1&playsinline=1`;

  return (
    <div
      ref={ref}
      className={`relative w-full h-full ${className} cursor-pointer`}
      onClick={() => window.open(youtubeUrl, "_blank")}
    >
      <iframe
        src={embedUrl}
        className="w-full h-full object-cover"
        allow="autoplay; encrypted-media"
      />

      {/* invisible overlay ensures click goes to YouTube instead of pausing */}
      <div className="absolute inset-0"></div>
    </div>
  );
}
