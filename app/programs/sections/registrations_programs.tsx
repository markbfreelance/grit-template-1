"use client";

import { useState } from "react";
import Image from "next/image";

const registrations = [
  {
    id: 1,
    slug: "spring-classic",
    title: "GRIT SPRING CLASSIC",
    type: "Tournament",
    date: "April 12–14, 2026",
    location: "Performance City Sports Complex",
    divisions: ["8U", "10U", "12U", "14U"],
    spots: 32,
    spotsLeft: 8,
    price: "$250",
    image: "/placeholders/offer1.png",
    description:
      "Our flagship spring tournament. Teams compete across 4 age divisions in a 3-day round-robin and bracket format. All games played on turf fields with certified officials.",
    includes: [
      "3 guaranteed games",
      "Bracket play for top teams",
      "Tournament t-shirt per player",
      "Digital scoreboard & livestream",
    ],
    deadline: "March 28, 2026",
  },
  {
    id: 2,
    slug: "elite-showcase",
    title: "ELITE SHOWCASE 2026",
    type: "Showcase",
    date: "May 3, 2026",
    location: "Grit Elite Training Facility",
    divisions: ["16U", "18U"],
    spots: 16,
    spotsLeft: 3,
    price: "$175",
    image: "/placeholders/offer2.jpg",
    description:
      "A college recruiting showcase for elite 16U and 18U athletes. College coaches will be in attendance evaluating players. Film and highlight packages available.",
    includes: [
      "Full day of games & drills",
      "College coach evaluation",
      "Highlight film package",
      "1-on-1 coach Q&A session",
    ],
    deadline: "April 18, 2026",
  },
  {
    id: 3,
    slug: "summer-kickoff",
    title: "GRIT SUMMER KICKOFF",
    type: "Tournament",
    date: "June 21–22, 2026",
    location: "Riverside Athletic Park",
    divisions: ["8U", "10U", "12U", "14U", "16U"],
    spots: 40,
    spotsLeft: 22,
    price: "$200",
    image: "/placeholders/offer3.jpg",
    description:
      "Kick off summer the right way. A 2-day tournament open to 5 age divisions with prizes for top finishers. Concessions, vendor booths, and family activities on site.",
    includes: [
      "2 guaranteed pool games",
      "Single elimination bracket",
      "Awards ceremony",
      "Family activities & vendors",
    ],
    deadline: "June 7, 2026",
  },
];

type Registration = (typeof registrations)[0];

function RegistrationModal({
  reg,
  onClose,
}: {
  reg: Registration;
  onClose: () => void;
}) {
  const spotsPercent = Math.round(
    ((reg.spots - reg.spotsLeft) / reg.spots) * 100,
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0e132b]/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl bg-[#0e132b] border border-white/10 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={reg.image}
            alt={reg.title}
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0e132b] to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-all duration-200 bg-[#0e132b]/60 backdrop-blur-sm"
          >
            ✕
          </button>

          {/* Type badge */}
          <div className="absolute top-4 left-4 bg-[#DA1D3A] px-3 py-1">
            <span className="font-display text-white text-[10px] tracking-widest">
              {reg.type.toUpperCase()}
            </span>
          </div>

          {/* Title over image */}
          <div className="absolute bottom-4 left-6">
            <h2
              className="font-display font-black text-white leading-none"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              {reg.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">
          {/* Key details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10">
            {[
              { label: "Date", value: reg.date },
              { label: "Price", value: reg.price },
              { label: "Spots Left", value: `${reg.spotsLeft} / ${reg.spots}` },
              { label: "Deadline", value: reg.deadline },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0e132b] px-4 py-3 flex flex-col gap-1"
              >
                <span className="font-display text-[9px] tracking-widest text-white/30">
                  {item.label.toUpperCase()}
                </span>
                <span className="font-display text-white text-sm leading-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Spots progress bar */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-display text-[9px] tracking-widest text-white/30">
                REGISTRATION FILL
              </span>
              <span className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
                {spotsPercent}% FULL
              </span>
            </div>
            <div className="w-full h-1 bg-white/10">
              <div
                className="h-full bg-[#DA1D3A] transition-all duration-500"
                style={{ width: `${spotsPercent}%` }}
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-[#DA1D3A] shrink-0 mt-0.5"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-display text-xs tracking-wide text-white/50">
              {reg.location}
            </span>
          </div>

          {/* Description */}
          <p className="font-display text-xs tracking-wide text-white/50 leading-relaxed">
            {reg.description}
          </p>

          {/* Divisions */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-[9px] tracking-widest text-white/30">
              AGE DIVISIONS
            </span>
            <div className="flex gap-2 flex-wrap">
              {reg.divisions.map((d) => (
                <span
                  key={d}
                  className="font-display text-[10px] tracking-widest text-white border border-white/20 px-3 py-1"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Includes */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-[9px] tracking-widest text-white/30">
              WHAT'S INCLUDED
            </span>
            <ul className="flex flex-col gap-2">
              {reg.includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] shrink-0" />
                  <span className="font-display text-xs tracking-wide text-white/50">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href={`/register/${reg.slug}`}
            className="w-full font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-8 py-4 hover:bg-[#b01730] transition-colors duration-200"
          >
            REGISTER NOW →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RegistrationsPrograms() {
  const [selected, setSelected] = useState<Registration | null>(null);

  return (
    <>
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#DA1D3A]" />
              <span className="font-display text-xs tracking-[0.4em] text-[#DA1D3A]">
                OPEN REGISTRATIONS
              </span>
            </div>
            <h2
              className="font-display font-black text-[#0e132b] leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              UPCOMING
              <br />
              <span className="text-[#DA1D3A]">TOURNAMENTS.</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {registrations.map((reg) => {
              const spotsPercent = Math.round(
                ((reg.spots - reg.spotsLeft) / reg.spots) * 100,
              );
              const isAlmostFull = reg.spotsLeft <= 5;

              return (
                <div
                  key={reg.id}
                  className="group border border-[#0e132b]/10 hover:border-[#DA1D3A]/40 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                  onClick={() => setSelected(reg)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={reg.image}
                      alt={reg.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0e132b]/40 group-hover:bg-[#0e132b]/20 transition-colors duration-300" />

                    {/* Type badge */}
                    <div className="absolute top-4 left-4 bg-[#DA1D3A] px-3 py-1">
                      <span className="font-display text-white text-[9px] tracking-widest">
                        {reg.type.toUpperCase()}
                      </span>
                    </div>

                    {/* Almost full badge */}
                    {isAlmostFull && (
                      <div className="absolute top-4 right-4 bg-white px-3 py-1">
                        <span className="font-display text-[#DA1D3A] text-[9px] tracking-widest font-bold">
                          ALMOST FULL
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div>
                      <p className="font-display text-[9px] tracking-widest text-[#0e132b]/30 mb-1">
                        {reg.date}
                      </p>
                      <h3 className="font-display font-black text-[#0e132b] text-xl leading-none group-hover:text-[#DA1D3A] transition-colors duration-300">
                        {reg.title}
                      </h3>
                    </div>

                    <p className="font-display text-xs tracking-wide text-[#0e132b]/50 leading-relaxed line-clamp-2">
                      {reg.description}
                    </p>

                    {/* Divisions */}
                    <div className="flex gap-1.5 flex-wrap">
                      {reg.divisions.map((d) => (
                        <span
                          key={d}
                          className="font-display text-[9px] tracking-widest text-[#0e132b]/50 border border-[#0e132b]/15 px-2 py-0.5"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <div className="flex flex-col gap-1.5 mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-[9px] tracking-widest text-[#0e132b]/30">
                          {reg.spotsLeft} SPOTS LEFT
                        </span>
                        <span className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
                          {spotsPercent}% FULL
                        </span>
                      </div>
                      <div className="w-full h-1 bg-[#0e132b]/10">
                        <div
                          className="h-full bg-[#DA1D3A] transition-all duration-500"
                          style={{ width: `${spotsPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#0e132b]/10">
                      <span className="font-display font-black text-[#0e132b] text-lg">
                        {reg.price}
                      </span>
                      <span className="font-display text-xs tracking-widest text-[#0e132b]/30 group-hover:text-[#DA1D3A] transition-colors duration-300">
                        VIEW DETAILS →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <RegistrationModal reg={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
