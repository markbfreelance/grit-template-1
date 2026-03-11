const programs = [
  {
    title: "SPEED & AGILITY",
    tag: "ALL AGES",
    duration: "8 WEEKS",
    sessions: "3X / WEEK",
    description:
      "Build explosive first-step quickness, lateral speed, and elite agility through proven drills and progressive overload.",
    image: "/placeholders/offer1.png",
    featured: true,
  },
  {
    title: "STRENGTH & POWER",
    tag: "14U+",
    duration: "10 WEEKS",
    sessions: "4X / WEEK",
    description:
      "Science-backed strength programming designed to build functional power without sacrificing athleticism.",
    image: "/placeholders/offer2.jpg",
    featured: false,
  },
  {
    title: "MENTAL PERFORMANCE",
    tag: "ALL AGES",
    duration: "6 WEEKS",
    sessions: "2X / WEEK",
    description:
      "Train your mind like you train your body. Focus, confidence, and composure under pressure.",
    image: "/placeholders/offer3.jpg",
    featured: false,
  },
  {
    title: "ELITE TEAM CAMP",
    tag: "TEAM",
    duration: "5 DAYS",
    sessions: "INTENSIVE",
    description:
      "A full-immersion team camp experience built around chemistry, communication, and competitive excellence.",
    image: "/placeholders/offer4.jpg",
    featured: false,
  },
  {
    title: "SKILLS & TECHNIQUE",
    tag: "ALL AGES",
    duration: "8 WEEKS",
    sessions: "3X / WEEK",
    description:
      "Position-specific skills work focused on technique refinement, lacrosse IQ, and game-speed execution.",
    image: "/placeholders/offer1.png",
    featured: false,
  },
  {
    title: "YEAR-ROUND ELITE",
    tag: "16U+",
    duration: "12 MONTHS",
    sessions: "5X / WEEK",
    description:
      "Our flagship program. Full-year development across speed, strength, skills, and mental performance.",
    image: "/placeholders/offer2.jpg",
    featured: false,
  },
];

export default function Grid_Programs() {
  const featured = programs[0];
  const rest = programs.slice(1);

  return (
    <section className="w-full py-24 bg-[#0e132b]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              ALL PROGRAMS
            </span>
          </div>
          <h2
            className="font-display font-black text-white leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            FIND YOUR
            <br />
            <span className="text-[#DA1D3A]">PROGRAM</span>
          </h2>
        </div>

        {/* Featured program — full width */}
        <div className="group relative overflow-hidden w-full h-105 mb-4 cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${featured.image})` }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0e132b]/95 via-[#0e132b]/60 to-transparent" />
          <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/5 transition-colors duration-300" />

          {/* Featured label */}
          <div className="absolute top-6 left-6 bg-[#DA1D3A] px-4 py-1">
            <span className="font-display text-[10px] tracking-widest text-white font-bold">
              FEATURED
            </span>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center px-12 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-display text-[10px] tracking-widest px-3 py-1 text-white border border-[#DA1D3A]/40">
                {featured.tag}
              </span>
              <span className="text-white/40 font-display text-[10px] tracking-widest">
                {featured.duration}
              </span>
              <span className="text-white/40 font-display text-[10px] tracking-widest">
                {featured.sessions}
              </span>
            </div>
            <h3
              className="font-display font-black text-white leading-none mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {featured.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              {featured.description}
            </p>
            <a
              href="/register"
              className="font-display font-black text-xs tracking-widest text-white bg-[#DA1D3A] px-8 py-3 self-start hover:bg-[#b01730] transition-colors duration-200"
            >
              REGISTER NOW
            </a>
          </div>

          {/* Right red accent line */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A] transition-colors duration-500" />
        </div>

        {/* Rest — 5 col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((program, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer h-70"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0e132b]/97 via-[#0e132b]/50 to-transparent" />
              <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/8 transition-colors duration-300" />

              {/* Bottom red line on hover */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#DA1D3A] transition-all duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-[9px] tracking-widest px-2 py-0.5 text-white border border-[#DA1D3A]/40 group-hover:bg-[#DA1D3A] group-hover:border-[#DA1D3A] transition-colors duration-300">
                    {program.tag}
                  </span>
                  <span className="text-white/30 font-display text-[9px] tracking-widest">
                    {program.duration}
                  </span>
                </div>
                <h3 className="font-display font-black text-white leading-none mb-2 text-xl">
                  {program.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-3 line-clamp-2">
                  {program.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-display text-[10px] tracking-widest font-bold text-[#DA1D3A]">
                    LEARN MORE
                  </span>
                  <span className="font-display text-[10px] text-[#DA1D3A] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
