import Image from "next/image";
import Link from "next/link";


export function Hero({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className={`min-h-screen flex items-center relative pt-24 -mt-32 lg:mt-0 overflow-hidden transition-colors duration-500 ${
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
              From the streets of Accra to stages worldwide, bringing authentic
              African humor that connects cultures through the universal
              language of laughter.
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
                src="/images/image00028.jpeg"
                alt="Kwame Obed"
                width={800}
                height={1067}
                className={`w-full h-full object-cover hover:scale-105 transition-all duration-700`}
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
                5+
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
  );
}
