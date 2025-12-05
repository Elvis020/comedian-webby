"use client";
import { socials } from "@/lib/consts";
import Link from "next/link";

export function Footer({ darkMode }: { darkMode: boolean }) {
  const phone = "233599226332";

  const linkBase =
    "w-full text-center py-3 border-2 space-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2";
  const themeLink = darkMode
    ? "border-white/20 text-white hover:bg-white hover:border-white hover:text-[#0A0A0A]"
    : "border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#228B22] hover:border-[#228B22] hover:text-white";

  return (
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
            <div
              className={`w-full text-center py-3 border-2 space-mono text-xs uppercase tracking-wider cursor-default ${
                darkMode
                  ? "border-white/15 text-white/60 bg-white/5"
                  : "border-[#1A1A1A]/15 text-[#1A1A1A]/60 bg-black/5"
              }`}
            >
              kwameobed@gmail.com
            </div>

            <Link
              href={`https://wa.me/${phone}`}
              target="_blank"
              className={`${linkBase} ${themeLink}`}
            >
              Chat on WhatsApp
            </Link>

            <Link href="#" className={`${linkBase} ${themeLink}`}>
              🎫 Buy Tickets
            </Link>

            <Link href="#" className={`${linkBase} ${themeLink}`}>
              📺 YouTube Channel
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div
            className={`playfair text-xl font-extrabold mb-2 ${
              darkMode ? "text-white" : "text-[#228B22]"
            }`}
          >
            Comedian Kwame Obed
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
  );
}
