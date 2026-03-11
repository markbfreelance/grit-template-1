export default function Cta_Merch() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0e132b] py-24">
      {/* Giant bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-display font-black text-white/3 whitespace-nowrap leading-none"
          style={{ fontSize: "clamp(6rem, 20vw, 16rem)" }}
        >
          GRIT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-[#DA1D3A]" />
          <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
            LIMITED DROPS
          </span>
          <div className="w-8 h-px bg-[#DA1D3A]" />
        </div>

        <h2
          className="font-display font-black text-white leading-none"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          DON'T MISS THE
          <br />
          <span className="text-[#DA1D3A]">NEXT DROP.</span>
        </h2>

        <p className="text-white/40 text-sm leading-relaxed max-w-md">
          New collections drop regularly. Follow us on social or sign up to be
          the first to know when new gear hits the store.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/merch"
            className="font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-10 py-4 hover:bg-[#b01730] transition-colors duration-200"
          >
            SHOP ALL GEAR
          </a>
          <a
            href="/contact"
            className="font-display font-black text-sm tracking-widest text-white border border-white/30 px-10 py-4 hover:border-white transition-colors duration-200"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
