export default function Cta_Programs() {
  return (
    <section className="w-full bg-[#DA1D3A] py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2
          className="font-display font-black text-white leading-none text-center md:text-left"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          READY TO START
          <br />
          YOUR PROGRAM?
        </h2>
        <a
          href="/register"
          className="font-display font-black text-sm tracking-widest text-[#DA1D3A] bg-white px-10 py-4 hover:bg-white/90 transition-colors duration-200 shrink-0"
        >
          REGISTER NOW
        </a>
      </div>
    </section>
  );
}
