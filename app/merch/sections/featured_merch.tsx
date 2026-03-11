import Image from "next/image";

export default function Featured_Merch() {
  return (
    <section className="w-full bg-[#0e132b] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              NEW DROP
            </span>
          </div>
          <h2
            className="font-display font-black text-white leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            FEATURED
            <br />
            <span className="text-[#DA1D3A]">COLLECTION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
          {/* Image */}
          <div className="relative h-125 lg:h-full overflow-hidden bg-[#DA1D3A]/10">
            <Image
              src="/placeholders/offer1.png"
              alt="Featured Product"
              fill
              className="object-cover object-center"
            />
            {/* Limited badge */}
            <div className="absolute top-6 right-6 bg-[#DA1D3A] px-4 py-2 rotate-6">
              <span className="font-display font-black text-white tracking-widest">
                LIMITED
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between p-12 bg-[#0a0f24]">
            <div className="flex flex-col gap-6">
              <span className="font-display text-[10px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/40 px-3 py-1 self-start">
                OUTERWEAR
              </span>
              <h3
                className="font-display font-black text-white leading-none"
                style={{ fontSize: "clamp(1.2rem, 3vw, 2.8rem)" }}
              >
                GRIT ELITE
                <br />
                PERFORMANCE
                <br />
                HOODIE
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Built for the grind, designed for the
                culture.
              </p>

              {/* Size selector */}
              <div className="flex flex-col gap-3">
                <span className="font-display text-[10px] tracking-widest text-white/40">
                  SELECT SIZE
                </span>
                <div className="flex gap-2 flex-wrap">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="font-display tracking-widest text-white/60 border border-white/20 px-4 py-2 hover:border-[#DA1D3A] hover:text-white transition-all duration-200"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-baseline gap-3">
                <span
                  className="font-display font-black text-white"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
                >
                  $79.99
                </span>
                <span className="font-display text-white/30 text-sm line-through">
                  $99.99
                </span>
              </div>
              <a
                href="/merch/hoodie"
                className="font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-colors duration-200"
              >
                SHOP NOW
              </a>
              <a
                href="/merch"
                className="font-display tracking-widest text-white/40 text-center border border-white/20 px-8 py-4 hover:border-white/60 hover:text-white/80 transition-all duration-200"
              >
                VIEW ALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
