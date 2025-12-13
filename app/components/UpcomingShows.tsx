
"use client";
import { useState, useEffect, useMemo } from "react";
import { upcomingShows, CHRISTMAS_MODE } from "@/lib/consts";
import Image from "next/image";
import type { UpcomingShows } from "@/lib/types";

export function UpcomingShows({ darkMode }: { darkMode: boolean }) {
  // Filter out past shows with performance optimization
  const activeShows = useMemo(() => {
    const now = new Date();
    // Reset time to start of today for comparison (so shows today are included)
    now.setHours(0, 0, 0, 0);

    return upcomingShows.filter((show) => {
      try {
        // Parse "MM-DD-YYYY" format (e.g., "12-12-2025")
        const [monthStr, dayStr, yearStr] = show.date.split("-");

        const month = parseInt(monthStr) - 1; // JS months are 0-indexed
        const day = parseInt(dayStr);
        const year = parseInt(yearStr);

        if (isNaN(month) || isNaN(day) || isNaN(year)) return true; // Keep if invalid

        const showDate = new Date(year, month, day);
        return showDate >= now;
      } catch (e) {
        return true;
      }
    });
  }, []);

  const headliningShows = activeShows.filter(
    (show) => show.type === "main" || !show.type,
  );
  const featuredShows = activeShows.filter(
    (show) => show.type === "featured",
  );

  return (
    <section
      className={`py-24 px-6 transition-colors duration-500 relative overflow-hidden ${darkMode ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"
        }`}
      id="shows"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full ${darkMode ? "bg-[#228B22]/10" : "bg-[#228B22]/5"
            }`}
        />
        <div
          className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full ${darkMode ? "bg-white/5" : "bg-[#228B22]/8"
            }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl ${darkMode ? "bg-[#228B22]/5" : "bg-[#228B22]/3"
            }`}
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <span
            className={`space-mono text-[10px] uppercase tracking-[0.3em] ${darkMode ? "text-white" : "text-[#228B22]"
              }`}
          >
            Up Next
          </span>
          <h2
            className={`playfair text-4xl md:text-5xl font-extrabold tracking-tight mt-2 ${darkMode ? "text-white" : "text-[#1A1A1A]"
              }`}
          >
            Upcoming Shows
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {/* Headlining Section */}
          <div>
            <h3
              className={`playfair text-2xl font-bold mb-8 ${darkMode ? "text-white/80" : "text-[#1A1A1A]/80"
                }`}
            >
              🎤 Headlining
            </h3>
            {headliningShows.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {headliningShows.map((show) => (
                  <ShowCard key={show.id} show={show} darkMode={darkMode} />
                ))}
              </div>
            ) : (
              /* Empty State Placeholder */
              <div
                className={`flex flex-col items-center justify-center py-16 px-8 rounded-2xl border-2 border-dashed ${darkMode
                  ? "border-white/20 bg-white/5"
                  : "border-[#228B22]/20 bg-[#228B22]/5"
                  }`}
              >
                <div className="text-5xl mb-4">🎭</div>
                <h4
                  className={`playfair text-xl font-bold mb-2 ${darkMode ? "text-white/70" : "text-[#1A1A1A]/70"
                    }`}
                >
                  No Headlining Shows Yet
                </h4>
                <p
                  className={`space-mono text-sm text-center max-w-md ${darkMode ? "text-white/50" : "text-[#1A1A1A]/50"
                    }`}
                >
                  Stay tuned! Kwame Obed&apos;s solo shows will be announced
                  here soon.
                </p>
              </div>
            )}
          </div>

          {/* Featured Section */}
          {featuredShows.length > 0 && (
            <div>
              <h3
                className={`playfair text-2xl font-bold mb-8 ${darkMode ? "text-white/80" : "text-[#1A1A1A]/80"
                  }`}
              >
                ⭐ Featured
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredShows.map((show: UpcomingShows) => (
                  <ShowCard key={show.id} show={show} darkMode={darkMode} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ShowCard({
  show,
  darkMode,
}: {
  show: UpcomingShows;
  darkMode: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showShortCode, setShowShortCode] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [copied, setCopied] = useState(false);
  const hasFlyer = show.flyer !== null && show.flyer !== undefined;
  const hasShortCode = show.shortCode !== null && show.shortCode !== undefined;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  const handleShortCodeClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setShowShortCode(true);
    }, 600);
  };

  const handleCopyShortCode = async () => {
    if (show.shortCode) {
      await navigator.clipboard.writeText(show.shortCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Auto-reset shortCode display after 4 seconds
  useEffect(() => {
    if (showShortCode) {
      const timer = setTimeout(() => {
        setShowShortCode(false);
        setCopied(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showShortCode]);

  return (
    <>
      {/* Main Card */}
      <div
        className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${darkMode
          ? "bg-[#252525] shadow-lg shadow-black/20"
          : "bg-white shadow-lg shadow-black/10"
          }`}
      >
        {/* Christmas Decoration */}
        {CHRISTMAS_MODE && (
          <div className="absolute top-2 right-2 z-20 text-lg opacity-60 pointer-events-none">
            🎄
          </div>
        )}
        <div className="flex h-44">
          {/* Left Side - Flyer Thumbnail (33%) */}
          {hasFlyer && (
            <button
              onClick={() => setIsExpanded(true)}
              className="relative w-1/3 shrink-0 cursor-pointer overflow-hidden group/flyer"
              aria-label="View flyer details"
            >
              <Image
                src={show.flyer}
                alt={`Kwame Obed comedy show at ${show.venue} - Event flyer`}
                fill
                className="object-cover transition-transform duration-300 group-hover/flyer:scale-110"
                sizes="200px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/flyer:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
            </button>
          )}

          {/* Right Side - Show Details (67%) */}
          <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
            {/* Date Badge */}
            <div className="flex items-start gap-4">
              <div
                className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl ${darkMode ? "bg-white/10" : "bg-[#228B22]/10"
                  }`}
              >
                <div
                  className={`playfair text-lg sm:text-xl font-extrabold text-center leading-tight ${darkMode ? "text-white" : "text-[#228B22]"
                    }`}
                >
                  {/* Parse and display date from MM-DD-YYYY */}
                  {(() => {
                    const [m, d] = show.date.split("-");
                    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                    const monthIndex = parseInt(m) - 1;
                    const monthName = monthNames[monthIndex] || m;
                    return (
                      <>
                        {monthName}
                        <br />
                        <span className="text-sm sm:text-base">{d}</span>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div
                  className={`syne text-base sm:text-lg font-semibold line-clamp-1 ${darkMode ? "text-white" : "text-[#1A1A1A]"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {/* Badge removed for minimalist inline style */}
                  </div>
                  {show.venue}
                </div>
                <div
                  className={`space-mono text-[10px] sm:text-xs uppercase tracking-wider mt-1 ${darkMode ? "text-white/60" : "text-[#1A1A1A]/60"
                    }`}
                >
                  {show.city} • {show.time}
                  {(() => {
                    const now = new Date();
                    now.setHours(0, 0, 0, 0);
                    const [mStr, dStr, yStr] = show.date.split("-");
                    const sMonth = parseInt(mStr) - 1;
                    const sDay = parseInt(dStr);
                    const sYear = parseInt(yStr);
                    const showDate = new Date(sYear, sMonth, sDay);

                    // Check if current month and year
                    if (
                      now.getMonth() === sMonth &&
                      now.getFullYear() === sYear
                    ) {
                      const diffTime = showDate.getTime() - now.getTime();
                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                      if (diffDays >= 0) {
                        return (
                          <span className={`${darkMode ? "text-green-400 font-bold" : "text-[#228B22] font-bold"} block sm:inline mt-0.5 sm:mt-0`}>
                            <span className="hidden sm:inline mx-2">•</span>
                            {diffDays === 0 ? "TODAY" : `IN ${diffDays} DAYS`}
                          </span>
                        );
                      }
                    }
                    return null;
                  })()}
                </div>
              </div>
            </div>

            {/* Buttons - with proper z-index for mobile */}
            <div className="mt-3 relative z-20 flex gap-2 flex-wrap">
              {hasShortCode && !showShortCode && (
                <button
                  onClick={handleShortCodeClick}
                  className={`inline-block space-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 border-2 rounded-lg transition-all text-center ${isRotating ? "animate-spin-360" : ""
                    } ${darkMode
                      ? "bg-transparent text-white border-white hover:bg-white hover:text-[#0A0A0A]"
                      : "bg-transparent text-[#228B22] border-[#228B22] hover:bg-[#228B22] hover:text-white"
                    }`}
                >
                  Get Tickets
                </button>
              )}
              {hasShortCode && showShortCode && (
                <div
                  className={`flex items-center gap-2 px-3 py-2 border-2 rounded-lg ${darkMode ? "bg-white/10 border-white/30" : "bg-[#228B22]/10 border-[#228B22]/30"}`}
                >
                  <span
                    className={`space-mono text-sm font-bold ${darkMode ? "text-white" : "text-[#228B22]"}`}
                  >
                    {show.shortCode}
                  </span>
                  <button
                    onClick={handleCopyShortCode}
                    className={`space-mono text-xs font-bold px-2 py-1 rounded transition-all ${copied
                      ? darkMode
                        ? "bg-green-500 text-white"
                        : "bg-green-600 text-white"
                      : darkMode
                        ? "bg-white text-[#0A0A0A] hover:bg-gray-200"
                        : "bg-[#228B22] text-white hover:bg-[#1a6b1a]"
                      }`}
                  >
                    {copied ? "✓" : "Copy"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Flyer Modal */}
      {isExpanded && hasFlyer && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Full Flyer Image */}
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={show.flyer}
                alt={`Kwame Obed comedy show at ${show.venue} - Full event flyer details`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
