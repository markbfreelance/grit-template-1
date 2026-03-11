const groups = [
  {
    age: "KINDER — 6U",
    title: "LITTLE GRINDERS",
    description:
      "Fun-first fundamentals. We introduce young athletes to movement, coordination, and the love of sport in a positive environment.",
    features: [
      "Basic motor skills",
      "Fun & games-based",
      "Confidence building",
      "Team interaction",
    ],
    image: "/placeholders/offer3.jpg",
  },
  {
    age: "8U — 10U",
    title: "JUNIOR ATHLETES",
    description:
      "Start building real athletic habits. Speed, agility, and sport-specific skills introduced at the right intensity.",
    features: [
      "Speed fundamentals",
      "Agility ladders",
      "Sport intro skills",
      "Character development",
    ],
    image: "/placeholders/offer4.jpg",
  },
  {
    age: "12U — 14U",
    title: "DEVELOPING ATHLETES",
    description:
      "The critical window. We accelerate development with structured programming across speed, strength, and skills.",
    features: [
      "Strength intro",
      "Position skills",
      "Competition prep",
      "Mental performance",
    ],
    image: "/placeholders/offer1.png",
  },
  {
    age: "16U — 18U",
    title: "ELITE ATHLETES",
    description:
      "Prepare for the next level. High-intensity training built for athletes serious about collegiate and professional pursuits.",
    features: [
      "Elite strength",
      "Film & IQ sessions",
      "Recruiting prep",
      "Leadership training",
    ],
    image: "/placeholders/offer2.jpg",
  },
];

export default function AgeGroups_Programs() {
  return (
    <section className="w-full py-24 bg-[#0e132b]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              WHO WE TRAIN
            </span>
          </div>
          <h2
            className="font-display font-black text-white leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            AGE
            <br />
            <span className="text-[#DA1D3A]">GROUPS</span>
          </h2>
        </div>

        <div className="flex flex-col gap-px bg-white/10">
          {groups.map((group, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 bg-[#0e132b] hover:bg-[#0a0f24] transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative lg:col-span-3 h-50 lg:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${group.image})` }}
                />
                <div className="absolute inset-0 bg-[#0e132b]/40 group-hover:bg-[#0e132b]/20 transition-colors duration-300" />
                {/* Age badge */}
                <div className="absolute top-4 left-4 bg-[#DA1D3A] px-3 py-1">
                  <span className="font-display text-[10px] tracking-widest text-white font-bold">
                    {group.age}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 p-8 flex flex-col justify-center gap-3">
                <h3 className="font-display font-black text-white text-2xl leading-none">
                  {group.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Features */}
              <div className="lg:col-span-3 p-8 flex flex-col justify-center gap-2 border-t lg:border-t-0 lg:border-l border-white/10">
                {group.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] shrink-0" />
                    <span className="font-display text-[10px] tracking-widest text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
