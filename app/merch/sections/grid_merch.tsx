const products = [
  {
    name: "GRIT PERFORMANCE TEE",
    category: "TOPS",
    price: "$34.99",
    image: "/placeholders/offer1.png",
    tag: "BESTSELLER",
  },
  {
    name: "TRAINING SHORTS",
    category: "BOTTOMS",
    price: "$44.99",
    image: "/placeholders/offer2.jpg",
    tag: "NEW",
  },
  {
    name: "GRIT SNAPBACK",
    category: "HEADWEAR",
    price: "$29.99",
    image: "/placeholders/offer3.jpg",
    tag: null,
  },
  {
    name: "COMPRESSION SHIRT",
    category: "TOPS",
    price: "$49.99",
    image: "/placeholders/offer4.jpg",
    tag: "NEW",
  },
  {
    name: "GRIT TRACKSUIT",
    category: "SETS",
    price: "$89.99",
    image: "/placeholders/offer1.png",
    tag: "LIMITED",
  },
  {
    name: "ATHLETE BACKPACK",
    category: "ACCESSORIES",
    price: "$59.99",
    image: "/placeholders/offer2.jpg",
    tag: null,
  },
];

export default function Grid_Merch() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#DA1D3A]" />
              <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
                THE COLLECTION
              </span>
            </div>
            <h2
              className="font-display font-black text-[#0e132b] leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              ALL
              <br />
              <span className="text-[#DA1D3A]">PRODUCTS</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap justify-end">
            {["ALL", "TOPS", "BOTTOMS", "HEADWEAR", "ACCESSORIES"].map((f) => (
              <button
                key={f}
                className="font-display text-[10px] tracking-widest px-4 py-2 border border-[#0e132b]/20 text-[#0e132b]/50 hover:border-[#DA1D3A] hover:text-[#DA1D3A] transition-all duration-200 first:bg-[#0e132b] first:text-white first:border-[#0e132b]"
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image container */}
              <div
                className="relative overflow-hidden bg-[#f5f5f5] mb-4"
                style={{ aspectRatio: "4/5" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />

                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-[#DA1D3A] px-3 py-1">
                    <span className="font-display text-[9px] tracking-widest text-white font-bold">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Quick shop overlay */}
                <div className="absolute inset-0 bg-[#0e132b]/0 group-hover:bg-[#0e132b]/40 transition-colors duration-300 flex items-end justify-center pb-8">
                  <a
                    href="/merch/product"
                    className="font-display font-black tracking-widest text-white bg-[#DA1D3A] px-8 py-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    QUICK SHOP
                  </a>
                </div>

                {/* Bottom red line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#DA1D3A] transition-all duration-500" />
              </div>

              {/* Product info */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-display text-[9px] tracking-widest text-[#0e132b]/40 mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display font-black text-[#0e132b] text-sm tracking-wider">
                    {product.name}
                  </h3>
                </div>
                <span className="font-display font-black text-[#DA1D3A] text-sm">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
