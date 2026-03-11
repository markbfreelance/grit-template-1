import Image from "next/image";

const socials = [
  {
    label: "INSTAGRAM",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TWITTER / X",
    href: "https://x.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "FACEBOOK",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YOUTUBE",
    href: "https://youtube.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TIKTOK",
    href: "https://tiktok.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
      {/* BG Image */}
      <div className="absolute inset-0">
        <Image
          src="/background/footer.jpg"
          alt="Footer background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0e132b]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e132b] via-transparent to-[#0e132b]/95" />
      </div>

      {/* Red top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#DA1D3A]" />

      <div className="relative z-10">
        {/* #BUILTBYGRIT */}
        <div className="w-full overflow-hidden border-b border-white/10 px-6 py-10 md:py-16">
          <h2
            className="font-display font-black text-white/90 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center"
          >
            #BUILTBYGRIT
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Logo + Socials */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <Image
              src="/logo/gritLogo2.webp"
              alt="Grit Logo"
              width={140}
              height={56}
              className="h-20 w-auto object-contain"
            />
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/90 hover:border-[#DA1D3A] hover:text-[#DA1D3A] hover:bg-[#DA1D3A]/10 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Register CTA */}
          <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
            <p className="font-display font-black text-white text-sm tracking-widest">
              READY TO START?
            </p>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              Join hundreds of athletes already training with Grit.
            </p>
            <a
              href="/register"
              className="font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-8 py-3 hover:bg-[#ff2a4a] transition-colors duration-200"
            >
              REGISTER NOW
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-display text-[10px] tracking-widest text-white/40 text-center md:text-left">
              © {year} GRIT DIGITAL PERFORMANCE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6">
              {["PRIVACY POLICY", "TERMS OF USE"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-display text-[10px] tracking-widest text-white/40 hover:text-white/70 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
