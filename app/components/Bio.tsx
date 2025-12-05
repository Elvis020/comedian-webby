import Image from "next/image";

export function Bio({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0A0A0A]" : "bg-white"
      }`}
      id="bio"
    >
      <div
        className={`absolute top-0 right-0 playfair text-[30rem] leading-none pointer-events-none select-none hidden lg:block ${
          darkMode ? "text-white/5" : "text-[#228B22]/10"
        }`}
      >
        &quot;
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className={`absolute -bottom-4 -left-4 w-full h-full -z-10 ${
                  darkMode ? "bg-white" : "bg-[#228B22]"
                }`}
              ></div>
              <Image
                src="/images/portrait_2.jpeg"
                alt="Kwame Obed Portrait"
                width={800}
                height={1000}
                className={`w-full h-full object-cover`}
              />
            </div>
          </div>
          <div className="relative z-10">
            <blockquote
              className={`playfair text-2xl md:text-3xl italic leading-relaxed mb-8 ${
                darkMode ? "text-white/90" : "text-[#1B6B1B]"
              }`}
            >
              &quot;I discovered my calling in 2021, and I haven&apos;t looked
              back. Comedy isn&apos;t just laughter. It&apos;s therapy, release,
              and pure joy.&quot;
            </blockquote>
            <p
              className={`leading-loose mb-4 ${
                darkMode ? "text-white/80" : "text-[#1A1A1A]/80"
              }`}
            >
              Born on January 12th, Kwame Obed is a rising force in Ghanaian
              comedy who discovered his calling in standup in 2021. Since then,
              he&apos;s moved fast—racking up over 100 performances and
              commanding some of Ghana&apos;s most iconic stages, including the
              National Theatre, Bukom Boxing Arena, and Snap Cinemas, with shows
              spanning the Greater Accra, Ashanti, Western, and Eastern Regions.
              In 2025, his momentum hit new heights. He took home the Next Rated
              Comedy Star at the Ghana Comedy Awards, then headlined his own
              comedy special, AT AN EARLY AGE, on November 14th—a milestone that
              proved he&apos;s not just arriving, he&apos;s already here.
            </p>
            <p
              className={`leading-loose mb-8 ${
                darkMode ? "text-white/80" : "text-[#1A1A1A]/80"
              }`}
            >
              What sets Kwame apart is his raw energy, quick wit, and genuine
              connection with every crowd he faces. Whether he&apos;s performing
              or hosting, he brings a mix of youthful fire and emotional
              intelligence that turns laughter into something deeper—therapy,
              release, and pure joy.For Kwame, comedy isn&apos;t just a career.
              It&apos;s a mission: to make the world a happier place, one joke
              at a time.
            </p>
            <div
              className={`flex gap-10 pt-6 border-t ${
                darkMode ? "border-white/10" : "border-[#1A1A1A]/10"
              }`}
            >
              {[
                { num: "50+", label: "Countries" },
                { num: "2M+", label: "Followers" },
                { num: "500+", label: "Shows" },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    className={`playfair text-4xl font-extrabold ${
                      darkMode ? "text-white" : "text-[#228B22]"
                    }`}
                  >
                    {stat.num}
                  </div>
                  <div
                    className={`space-mono text-[10px] uppercase tracking-widest mt-1 ${
                      darkMode ? "text-white/60" : "text-[#1A1A1A]/60"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
