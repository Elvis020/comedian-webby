import { upcomingShows } from "@/lib/consts";
import Link from "next/link";

export function UpcomingShows({ darkMode }: { darkMode: boolean }) {
  return (
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
            Up Next
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
  );
}
