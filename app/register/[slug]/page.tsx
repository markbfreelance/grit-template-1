import { notFound } from "next/navigation";
import { registrations } from "./data";
import RegisterForm from "./registrationForm";
import Image from "next/image";

export function generateStaticParams() {
  return registrations.map((r) => ({ slug: r.slug }));
}

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reg = registrations.find((r) => r.slug === slug);
  if (!reg) notFound();

  const spotsPercent = Math.round(
    ((reg.spots - reg.spotsLeft) / reg.spots) * 100,
  );

  return (
    <main className="bg-white min-h-screen">
      {/* Hero banner */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <Image
          src={reg.image}
          alt={reg.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0e132b] to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DA1D3A]" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex flex-col justify-end pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display text-xs tracking-[0.4em] text-[#DA1D3A]">
              {reg.type.toUpperCase()} — REGISTRATION
            </span>
          </div>
          <h1
            className="font-display font-black text-white leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {reg.title}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left — form */}
        <div className="lg:col-span-7">
          <RegisterForm reg={reg} />
        </div>

        {/* Right — event details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Event info card */}
          <div className="border border-white/10 p-6 flex flex-col gap-5">
            <h3 className="font-display font-black text-white text-lg tracking-wider">
              EVENT DETAILS
            </h3>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  label: "Date",
                  value: reg.date,
                },
                {
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Location",
                  value: reg.location,
                },
                {
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: "Registration Deadline",
                  value: reg.deadline,
                },
                {
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  ),
                  label: "Entry Fee",
                  value: reg.price + " per team",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center border border-[#DA1D3A]/30 text-[#DA1D3A]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-display text-[9px] tracking-widest text-white/30 mb-0.5">
                      {item.label.toUpperCase()}
                    </p>
                    <p className="font-display text-xs tracking-wide text-white/70">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Spots progress */}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-display text-[9px] tracking-widest text-white/30">
                  {reg.spotsLeft} SPOTS REMAINING
                </span>
                <span className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
                  {spotsPercent}% FULL
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10">
                <div
                  className="h-full bg-[#DA1D3A] transition-all duration-500"
                  style={{ width: `${spotsPercent}%` }}
                />
              </div>
            </div>

            {/* Divisions */}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <p className="font-display text-[9px] tracking-widest text-white/30">
                AGE DIVISIONS
              </p>
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
          </div>

          {/* What's included */}
          <div className="border border-white/10 p-6 flex flex-col gap-4">
            <h3 className="font-display font-black text-white text-lg tracking-wider">
              WHAT'S INCLUDED
            </h3>
            <ul className="flex flex-col gap-3">
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

          {/* Description */}
          <div className="border border-white/10 p-6 flex flex-col gap-3">
            <h3 className="font-display font-black text-white text-lg tracking-wider">
              ABOUT THIS EVENT
            </h3>
            <p className="font-display text-xs tracking-wide text-white/50 leading-relaxed">
              {reg.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
