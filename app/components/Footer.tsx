"use client";
import { socials } from "@/lib/consts";
import Link from "next/link";

// Social Media Icons with Brand Colors
const SocialIcons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#instagram-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#F77737" />
          <stop offset="50%" stopColor="#E1306C" />
          <stop offset="75%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  TikTok: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="#25F4EE" d="M9.37 23.5a7.468 7.468 0 0 1-5.46-2.351 7.453 7.453 0 0 1-1.614-8.4 7.463 7.463 0 0 1 6.9-4.595l.091.001v3.45a4.02 4.02 0 0 0-.542-.037 4.023 4.023 0 0 0-3.72 5.54A4.023 4.023 0 0 0 9.37 20.05a3.992 3.992 0 0 0 2.921-1.201 3.96 3.96 0 0 0 1.17-2.848V.5h3.45c-.001.158.01.315.032.471a4.83 4.83 0 0 0 4.77 4.11v3.45a8.16 8.16 0 0 1-4.77-1.52v7.657a7.453 7.453 0 0 1-7.442 7.332z" />
      <path fill="#FE2C55" d="M10.37 22.5a6.453 6.453 0 0 1-6.453-6.453 6.453 6.453 0 0 1 6.453-6.453v2.45a4.023 4.023 0 0 0-3.72 5.54A4.023 4.023 0 0 0 10.37 21.05a3.992 3.992 0 0 0 2.921-1.201 3.96 3.96 0 0 0 1.17-2.848V1.5h2.45a3.83 3.83 0 0 0 3.77 3.19v2.45a7.16 7.16 0 0 1-3.77-1.07v8.477a6.453 6.453 0 0 1-6.541 6.453z" />
    </svg>
  ),
  Twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

export function Footer({ darkMode }: { darkMode: boolean }) {
  const phone = "233599226332";

  const linkBase =
    "w-full text-center py-3 border-2 space-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2";
  const themeLink = darkMode
    ? "border-white/20 text-white hover:bg-white hover:border-white hover:text-[#0A0A0A]"
    : "border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#228B22] hover:border-[#228B22] hover:text-white";

  return (
    <footer
      className={`py-16 px-6 border-t transition-colors duration-500 ${darkMode
        ? "border-white/10 bg-[#1A1A1A]"
        : "border-[#1A1A1A]/10 bg-[#F5F5F5]"
        }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        <div className="flex gap-3 flex-wrap justify-center">
          {socials.map((s, i) => (
            <Link
              key={i}
              target="_blank"
              href={s.link}
              className={`w-12 h-12 border-2 flex items-center justify-center hover:-translate-y-1 transition-all ${darkMode
                ? "border-white/20 text-white hover:bg-white hover:border-white hover:text-[#0A0A0A]"
                : "border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#228B22] hover:border-[#228B22] hover:text-white"
                }`}
              aria-label={s.name}
            >
              {SocialIcons[s.name] || s.icon}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-sm">
          <span
            className={`space-mono text-[10px] uppercase tracking-[0.3em] ${darkMode ? "text-white" : "text-[#228B22]"
              }`}
          >
            Quick Links
          </span>

          <div className="flex flex-col gap-3 w-full">
            <div
              className={`w-full text-center py-3 border-2 space-mono text-xs uppercase tracking-wider cursor-default ${darkMode
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

            <Link href="/#tickets" className={`${linkBase} ${themeLink}`}>
              🎫 Buy Tickets
            </Link>

            <Link
              target="_blank"
              href="https://www.youtube.com/@comediankwameobed"
              className={`${linkBase} ${themeLink}`}
            >
              📺 YouTube Channel
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div
            className={`playfair text-xl font-extrabold mb-2 ${darkMode ? "text-white" : "text-[#228B22]"
              }`}
          >
            Comedian Kwame Obed
          </div>
          <p
            className={`space-mono text-[10px] tracking-wider ${darkMode ? "text-white/40" : "text-[#1A1A1A]/40"
              }`}
          >
            © 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
