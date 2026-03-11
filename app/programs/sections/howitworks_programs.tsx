const steps = [
  {
    number: "01",
    title: "CHOOSE YOUR PROGRAM",
    description:
      "Browse our programs and find the one that fits your age group, goals, and schedule.",
  },
  {
    number: "02",
    title: "REGISTER & ENROLL",
    description:
      "Complete your registration online. Our team will confirm your spot and send you everything you need.",
  },
  {
    number: "03",
    title: "GET ASSESSED",
    description:
      "Every athlete starts with a baseline assessment so we can track your progress from day one.",
  },
  {
    number: "04",
    title: "TRAIN & DOMINATE",
    description:
      "Show up, put in the work, and watch your game transform under our elite coaching staff.",
  },
];

export default function HowItWorks_Programs() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              THE PROCESS
            </span>
          </div>
          <h2
            className="font-display font-black text-[#0e132b] leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            HOW IT
            <br />
            <span className="text-[#DA1D3A]">WORKS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-4 p-8 border-l border-[#0e132b]/10 hover:border-[#DA1D3A]/60 transition-colors duration-300"
            >
              <span
                className="font-display font-black text-[#DA1D3A]/20 group-hover:text-[#DA1D3A]/50 transition-colors duration-300 leading-none"
                style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
              >
                {step.number}
              </span>

              <h3 className="font-display font-black text-[#0e132b] text-sm tracking-wider leading-tight">
                {step.title}
              </h3>

              <p className="text-[#0e132b]/50 text-xs leading-relaxed">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#DA1D3A] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
