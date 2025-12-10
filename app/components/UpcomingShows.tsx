import { upcomingShows } from "@/lib/consts";
import Link from "next/link";
import Image from "next/image";

export function UpcomingShows({ darkMode }: { darkMode: boolean }) {
  const headliningShows = upcomingShows.filter(
    (show) => show.type === "main" || !show.type
  );
  const featuredShows = upcomingShows.filter(
    (show) => show.type === "featured"
  );

  return (
    <section
      className={`py-24 px-6 transition-colors duration-500 relative overflow-hidden ${darkMode ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"
        }`}
      id="shows"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large decorative circle - top right */}
        <div
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full ${darkMode ? "bg-[#228B22]/10" : "bg-[#228B22]/5"
            }`}
        />
        {/* Smaller circle - bottom left */}
        <div
          className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full ${darkMode ? "bg-white/5" : "bg-[#228B22]/8"
            }`}
        />
        {/* Radial gradient glow */}
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
                {featuredShows.map((show) => (
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

function ShowCard({ show, darkMode }: { show: any; darkMode: boolean }) {
  const hasFlyer = show.flyer !== null && show.flyer !== undefined;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${darkMode
        ? "bg-[#252525] shadow-lg shadow-black/20"
        : "bg-white shadow-lg shadow-black/10"
        }`}
    >
      {/* Flyer Image */}
      {hasFlyer ? (
        <div className="relative w-full aspect-[3/4] md:aspect-[4/5]">
          <Image
            src={show.flyer}
            alt={`${show.venue} event flyer`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Content over flyer */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="playfair text-3xl md:text-4xl font-extrabold text-white mb-1">
                  {show.date}
                </div>
                <div className="syne text-lg font-semibold text-white/90">
                  {show.venue}
                </div>
                <div className="space-mono text-xs uppercase tracking-wider text-white/70 mt-1">
                  {show.city} • {show.time}
                </div>
              </div>
              <Link
                href={show.ticketLink}
                className="shrink-0 space-mono text-xs font-bold uppercase tracking-wider px-4 py-3 bg-[#228B22] text-white border-2 border-[#228B22] rounded-lg transition-all hover:bg-[#1a6b1a] hover:border-[#1a6b1a]"
              >
                Tickets
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* No Flyer - Simple Card */
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Date Badge */}
            <div
              className={`shrink-0 w-20 h-20 flex items-center justify-center rounded-xl ${darkMode ? "bg-white/10" : "bg-[#228B22]/10"
                }`}
            >
              <div
                className={`playfair text-2xl font-extrabold text-center leading-tight ${darkMode ? "text-white" : "text-[#228B22]"
                  }`}
              >
                {show.date.split(" ")[0]}
                <br />
                <span className="text-lg">{show.date.split(" ")[1]}</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div
                className={`syne text-xl font-semibold ${darkMode ? "text-white" : "text-[#1A1A1A]"
                  }`}
              >
                {show.venue}
              </div>
              <div
                className={`space-mono text-xs uppercase tracking-wider mt-1 ${darkMode ? "text-white/60" : "text-[#1A1A1A]/60"
                  }`}
              >
                {show.city} • {show.time}
              </div>
            </div>

            {/* Button */}
            <Link
              href={show.ticketLink}
              className={`shrink-0 space-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border-2 rounded-lg transition-all text-center ${darkMode
                ? "bg-white text-[#0A0A0A] border-white hover:bg-gray-200 hover:border-gray-200"
                : "bg-[#228B22] text-white border-[#228B22] hover:bg-[#1a6b1a] hover:border-[#1a6b1a]"
                }`}
            >
              Get Tickets
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
