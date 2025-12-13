import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";

export default function NotFound() {
  const { darkMode, mounted } = useTheme();

  // Prevent mismatch between SSR and CSR
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        {/* optional skeleton or nothing */}
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-[#0A0A0A]" : "bg-white"} flex items-center justify-center px-5 py-10`}
    >
      <div className="w-full max-w-xl space-y-10 text-center">
        <div className="space-y-3">
          <p
            className={`text-xs tracking-widest font-semibold uppercase ${darkMode ? "text-gray-400" : "text-green-600"}`}
          >
            404 Error
          </p>

          <h1
            className={`text-4xl font-extrabold leading-tight ${darkMode ? "text-white" : "text-green-700"}`}
          >
            Page Missing
            <br />
            <span
              className={`text-6xl italic ${darkMode ? "text-yellow-400" : "text-yellow-500"}`}
            >
              Oooops!
            </span>
          </h1>

          <p
            className={`text-sm max-w-sm mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            This page is more lost than a tourist trying to pronounce “Chorkor”
            for the first time.
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-72 rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 flex flex-col">
            <div className="h-1/6 bg-gradient-to-r from-red-600 to-red-500"></div>
            <div className="h-1/6 bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
            <div className="h-1/6 bg-gradient-to-r from-green-600 to-green-500"></div>
            <div className="h-1/6 bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
            <div className="h-1/6 bg-gradient-to-r from-black to-[#0A0A0A]"></div>
            <div className="h-1/6 bg-gradient-to-r from-green-600 to-green-500"></div>
          </div>

          <div className="absolute inset-0 flex opacity-40">
            <div className="w-1/4 border-r-4 border-yellow-400"></div>
            <div className="w-1/4 border-r-4 border-red-500"></div>
            <div className="w-1/4 border-r-4 border-green-600"></div>
            <div className="w-1/4"></div>
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center ${darkMode ? "bg-[#0A0A0A]/90" : "bg-white/90"}`}
          >
            <div className="space-y-2">
              <p
                className={`text-lg font-semibold ${darkMode ? "text-white" : "text-green-700"}`}
              >
                No Jokes Here!
              </p>
              <p
                className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                The page has escaped. We dey search am!
              </p>
            </div>
          </div>

          <div
            className={`absolute -bottom-6 -right-6 w-28 h-28 opacity-20 blur-2xl rounded-full ${darkMode ? "bg-gray-700" : "bg-green-600"}`}
          ></div>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className={`space-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border-2 transition-all ${darkMode
                ? "bg-white text-[#0A0A0A] border-white hover:bg-transparent hover:text-white"
                : "bg-[#228B22] text-white border-[#228B22] hover:bg-[#1B6B1B] hover:border-[#1B6B1B]"
              }`}
          >
            Go Home
            <span className="ml-2">→</span>
          </Link>
        </div>

        <p
          className={`text-xs pt-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Lost? Try searching for shows, media, or return to the home page.
        </p>
      </div>
    </div>
  );
}
