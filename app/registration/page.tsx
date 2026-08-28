import RegisterAthleteForm from "./registerForm";

export default function RegisterPage() {
  return (
    <main className="bg-[#F4F1EC] min-h-screen">
      {/* Header banner */}
      <div className="relative w-full border-b border-stone-300">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DA1D3A]" />
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display text-xs tracking-[0.4em] text-[#DA1D3A]">
              ATHLETE REGISTRATION
            </span>
          </div>
          <h1
            className="font-display font-black text-[#1a1a1a] leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            REGISTER YOUR
            <br />
            <span className="text-[#DA1D3A]">ATHLETE.</span>
          </h1>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <RegisterAthleteForm />
      </div>
    </main>
  );
}
