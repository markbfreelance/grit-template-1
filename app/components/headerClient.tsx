"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import type { Category } from "../lib/api";

const staticLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
];

export default function HeaderClient({ categories }: { categories: Category[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  // Build events dropdown: "All Events" + one link per category (if any)
  const eventLinks = [
    { label: "All Events", href: "/events" },
    ...categories.map((cat) => ({
      label: cat.name,
      href: `/events?category=${cat.id}`,
    })),
  ];

  return (
    <header
      style={{ backgroundColor: "#0e132b", borderBottom: "2px solid #DA1D3A" }}
      className="w-full sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/gritLogo2.webp"
            alt="Logo"
            width={160}
            height={60}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {staticLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase text-white/90 hover:text-white px-3 py-1 transition-colors duration-200 relative group"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#DA1D3A" }}
              />
            </Link>
          ))}

          {/* Events Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button className="font-display text-sm uppercase text-white/90 hover:text-white px-3 py-1 transition-colors duration-200 relative group flex items-center gap-1 h-16">
              Events
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`mt-0.5 transition-transform duration-200 ${eventsOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#DA1D3A" }}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-0 min-w-[220px] transition-all duration-200 origin-top ${
                eventsOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              }`}
              style={{
                backgroundColor: "#0e132b",
                border: "1px solid rgba(218,29,58,0.2)",
                borderTop: "2px solid #DA1D3A",
              }}
            >
              {eventLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block font-display text-xs tracking-widest uppercase text-white/70 hover:text-white hover:bg-white/5 px-5 py-3 transition-colors duration-150 border-b last:border-0"
                  style={{ borderColor: "rgba(218,29,58,0.1)" }}
                >
                  {i === 0 ? (
                    <span className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#DA1D3A" }}
                      />
                      {link.label}
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Register CTA */}
          <Link
            href="/registration"
            className="font-display text-sm uppercase ml-4 px-5 py-2 text-white transition-all duration-200 hover:text-[#0e132b]"
            style={{ backgroundColor: "#DA1D3A" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#ff2a4a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#DA1D3A";
            }}
          >
            REGISTER
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"}`}
        style={{ backgroundColor: "#0e132b" }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-1">
          {staticLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-sm tracking-widest text-white/70 hover:text-white py-3 border-b transition-colors duration-200"
              style={{ borderColor: "#DA1D3A22" }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Events section */}
          <div className="border-b py-3" style={{ borderColor: "#DA1D3A22" }}>
            <p
              className="font-display text-[9px] tracking-[0.4em] mb-2"
              style={{ color: "#DA1D3A" }}
            >
              EVENTS
            </p>
            {eventLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display text-sm tracking-widest text-white/70 hover:text-white py-2 pl-3 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/registration"
            onClick={() => setMenuOpen(false)}
            className="font-display text-sm tracking-widest mt-4 px-5 py-3 text-white text-center"
            style={{ backgroundColor: "#DA1D3A" }}
          >
            REGISTER
          </Link>
        </nav>
      </div>
    </header>
  );
}
