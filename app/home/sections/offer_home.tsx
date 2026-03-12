"use client";
import { useState, useEffect } from "react";
const offers = [
  {
    title: "SPEED & AGILITY",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer1.png",
  },
  {
    title: "STRENGTH TRAINING",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer2.jpg",
  },
  {
    title: "MENTAL STRENGTH",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer3.jpg",
  },
  {
    title: "TEAM PROGRAMS",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer4.jpg",
  },
];

export default function Offer_Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-lg tracking-[0.3em] font-display font-medium mb-3 text-[#0e132b]">
            WHAT WE OFFER
          </p>
          <h2
            className="font-display font-black text-[#DA1D3A] leading-none uppercase"
            style={{ fontSize: "clamp(22px, 4vw, 40px)" }}
          >
            Built For Champions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, i) => (
            <a
              href="/programs"
              key={i}
              className="relative overflow-hidden group cursor-pointer block"
              style={{ height: "360px" }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${offer.image})` }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  backgroundColor: "rgba(0,0,0,0.11)",
                }}
              />
              <div
                className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 mix-blend-multiply"
                style={{
                  backgroundColor: "#960016",
                }}
              />
              {/* Red accent line */}
              <div
                className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500"
                style={{ backgroundColor: "#DA1D3A" }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3
                  className="font-display font-black text-white leading-none mb-3"
                  style={{ fontSize: "clamp(16px, 2vw, 18px)" }}
                >
                  {offer.title}
                </h3>

                <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-300">
                  <p className="text-white/90 text-xs leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-300"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
