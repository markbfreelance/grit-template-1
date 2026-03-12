"use client";

export default function Hero_Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/video_bg/hero_video_bg.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-350 px-10">
        <p
          className="text-xs tracking-[0.3em] mb-4 font-display font-medium"
          style={{ color: "#DA1D3A" }}
        >
          WELCOME TO THE PROGRAM
        </p>

        <h1
          className="font-display font-black text-white leading-none mb-6"
          style={{ fontSize: "clamp(1.8rem, 6vw, 6rem)" }}
        >
          GRIT DIGITAL
          <br />
          PERFORMANCE
        </h1>

        <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md font-sans">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/register"
            className="font-display font-bold text-sm tracking-widest px-8 py-4 text-white transition-all duration-200"
            style={{ backgroundColor: "#DA1D3A" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff2a4a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#DA1D3A")
            }
          >
            REGISTER NOW
          </a>

          <a
            href="/programs"
            className="font-display font-bold text-sm tracking-widest px-8 py-4 text-white border border-white/40 hover:border-white transition-all duration-200"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #0e132b, transparent)" }}
      />
    </section>
  );
}
