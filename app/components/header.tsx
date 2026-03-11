"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase text-white/990 hover:text-white px-3 py-1 transition-colors duration-200 relative group"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#DA1D3A" }}
              />
            </Link>
          ))}

          {/* Register CTA */}
          <Link
            href="/register"
            className="font-display text-sm uppercase ml-4 px-5 py-2 text-white transition-all duration-200 hover:text-[#0e132b]"
            style={{
              backgroundColor: "#DA1D3A",
            }}
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        style={{ backgroundColor: "#0e132b" }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-1">
          {links.map((link) => (
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
          <Link
            href="/register"
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
