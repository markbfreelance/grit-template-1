export default function Hero_Merch() {
  return (
    <section className="relative w-full h-[60vh] min-h-100 overflow-hidden flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholders/offer3.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#0e132b]/80" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0e132b] via-transparent to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DA1D3A]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 w-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#DA1D3A]" />
          <span className="font-display text-xs tracking-[0.4em] text-[#DA1D3A]">
            GRIT COLLECTION
          </span>
        </div>
        <h1
          className="font-display font-black text-white leading-none"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          WEAR THE
          <br />
          <span className="text-[#DA1D3A]">GRIND.</span>
        </h1>
      </div>
    </section>
  );
}
