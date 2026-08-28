"use client";

import { useState } from "react";
import type { Registration } from "./data";

const steps = ["Team Info", "Coach Info", "Athletes", "Review"];

export default function RegisterForm({ reg }: { reg: Registration }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1 — Team
    teamName: "",
    division: "",
    clubName: "",
    // Step 2 — Coach
    coachName: "",
    coachEmail: "",
    coachPhone: "",
    emergencyContact: "",
    emergencyPhone: "",
    // Step 3 — Athletes
    rosterSize: "",
    notes: "",
    // Step 4 — Agreement
    agreed: false,
  });

  const update = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass =
    "bg-[#0a0f24] border border-white/10 text-white text-sm px-4 py-3 font-display tracking-wide placeholder:text-white/20 focus:outline-none focus:border-[#DA1D3A] transition-colors duration-200 w-full";

  const labelClass =
    "font-display text-[9px] tracking-widest text-white/40 mb-1 block";

  if (submitted) {
    return (
      <div className="border border-[#DA1D3A]/30 bg-[#DA1D3A]/5 p-10 flex flex-col items-center gap-6 text-center">
        <div className="w-16 h-16 flex items-center justify-center border-2 border-[#DA1D3A]">
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#DA1D3A"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h3 className="font-display font-black text-white text-2xl leading-none mb-3">
            REGISTRATION SUBMITTED!
          </h3>
          <p className="font-display text-xs tracking-wide text-white/50 leading-relaxed max-w-sm">
            Thank you for registering for {reg.title}. Our team will review your
            application and send a confirmation email within 24 hours.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <a
            href="/programs"
            className="font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-colors duration-200"
          >
            BACK TO PROGRAMS
          </a>
          <a
            href="/contact"
            className="font-display text-xs tracking-widest text-white/30 hover:text-white transition-colors duration-200 text-center py-2"
          >
            Questions? Contact Us →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Step indicator */}
      <div className="flex items-center gap-0">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                  i < step
                    ? "bg-[#DA1D3A] border-[#DA1D3A]"
                    : i === step
                      ? "border-[#DA1D3A] bg-transparent"
                      : "border-white/20 bg-transparent"
                }`}
              >
                {i < step ? (
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span
                    className={`font-display text-xs ${i === step ? "text-[#DA1D3A]" : "text-white/20"}`}
                  >
                    {i + 1}
                  </span>
                )}
              </div>
              <span
                className={`font-display text-[9px] tracking-widest whitespace-nowrap ${
                  i === step ? "text-[#DA1D3A]" : "text-white/20"
                }`}
              >
                {s.toUpperCase()}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-px mx-2 mb-5 transition-colors duration-300 ${
                  i < step ? "bg-[#DA1D3A]" : "bg-white/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="border border-white/10 p-8 flex flex-col gap-6">
        {/* Step 1 — Team Info */}
        {step === 0 && (
          <>
            <h3 className="font-display font-black text-white text-xl tracking-wider">
              TEAM INFORMATION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2 flex flex-col">
                <label className={labelClass}>TEAM NAME *</label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => update("teamName", e.target.value)}
                  placeholder="e.g. Grit Elite 14U"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>CLUB / ORGANIZATION</label>
                <input
                  type="text"
                  value={formData.clubName}
                  onChange={(e) => update("clubName", e.target.value)}
                  placeholder="e.g. Grit Digital Performance"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>AGE DIVISION *</label>
                <select
                  value={formData.division}
                  onChange={(e) => update("division", e.target.value)}
                  className={inputClass + " cursor-pointer"}
                >
                  <option value="" disabled>
                    Select division
                  </option>
                  {reg.divisions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}

        {/* Step 2 — Coach Info */}
        {step === 1 && (
          <>
            <h3 className="font-display font-black text-white text-xl tracking-wider">
              COACH INFORMATION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2 flex flex-col">
                <label className={labelClass}>HEAD COACH NAME *</label>
                <input
                  type="text"
                  value={formData.coachName}
                  onChange={(e) => update("coachName", e.target.value)}
                  placeholder="Full name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>COACH EMAIL *</label>
                <input
                  type="email"
                  value={formData.coachEmail}
                  onChange={(e) => update("coachEmail", e.target.value)}
                  placeholder="coach@email.com"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>COACH PHONE *</label>
                <input
                  type="tel"
                  value={formData.coachPhone}
                  onChange={(e) => update("coachPhone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>EMERGENCY CONTACT NAME *</label>
                <input
                  type="text"
                  value={formData.emergencyContact}
                  onChange={(e) => update("emergencyContact", e.target.value)}
                  placeholder="Full name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>EMERGENCY CONTACT PHONE *</label>
                <input
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={(e) => update("emergencyPhone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className={inputClass}
                />
              </div>
            </div>
          </>
        )}

        {/* Step 3 — Athletes */}
        {step === 2 && (
          <>
            <h3 className="font-display font-black text-white text-xl tracking-wider">
              ROSTER DETAILS
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>NUMBER OF ATHLETES *</label>
                <input
                  type="number"
                  min="1"
                  max="25"
                  value={formData.rosterSize}
                  onChange={(e) => update("rosterSize", e.target.value)}
                  placeholder="e.g. 15"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>ADDITIONAL NOTES</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Any special requirements, accommodations, or questions..."
                  rows={4}
                  className={inputClass + " resize-none"}
                />
              </div>

              {/* Info box */}
              <div className="border border-[#DA1D3A]/20 bg-[#DA1D3A]/5 p-4 flex flex-col gap-2">
                <p className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
                  ROSTER SUBMISSION
                </p>
                <p className="font-display text-xs tracking-wide text-white/40 leading-relaxed">
                  Full athlete roster with names and jersey numbers will be
                  required 7 days before the event. You'll receive an email with
                  instructions after registration is confirmed.
                </p>
              </div>
            </div>
          </>
        )}

        {/* Step 4 — Review */}
        {step === 3 && (
          <>
            <h3 className="font-display font-black text-white text-xl tracking-wider">
              REVIEW & CONFIRM
            </h3>

            {/* Summary */}
            <div className="flex flex-col gap-px bg-white/5">
              {[
                { label: "Tournament", value: reg.title },
                { label: "Team Name", value: formData.teamName || "—" },
                { label: "Division", value: formData.division || "—" },
                { label: "Club", value: formData.clubName || "—" },
                { label: "Head Coach", value: formData.coachName || "—" },
                { label: "Coach Email", value: formData.coachEmail || "—" },
                { label: "Coach Phone", value: formData.coachPhone || "—" },
                {
                  label: "Roster Size",
                  value: formData.rosterSize
                    ? `${formData.rosterSize} athletes`
                    : "—",
                },
                { label: "Entry Fee", value: reg.price },
              ].map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 bg-[#0e132b] px-4 py-3"
                >
                  <span className="font-display text-[9px] tracking-widest text-white/30">
                    {item.label.toUpperCase()}
                  </span>
                  <span className="font-display text-xs tracking-wide text-white/70">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Agreement */}
            <div
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => update("agreed", !formData.agreed)}
            >
              <div
                className={`w-5 h-5 shrink-0 border flex items-center justify-center transition-all duration-200 mt-0.5 ${
                  formData.agreed
                    ? "bg-[#DA1D3A] border-[#DA1D3A]"
                    : "border-white/20"
                }`}
              >
                {formData.agreed && (
                  <svg
                    width="10"
                    height="10"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <p className="font-display text-xs tracking-wide text-white/40 leading-relaxed">
                I confirm that all information provided is accurate and I agree
                to the Grit Digital Performance tournament rules, waiver, and
                refund policy. Entry fees are non-refundable within 7 days of
                the event.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {step > 0 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="font-display text-xs tracking-widest text-white/40 hover:text-white transition-colors duration-200 border border-white/10 px-6 py-3 hover:border-white/30"
          >
            ← BACK
          </button>
        ) : (
          <a
            href="/programs"
            className="font-display text-xs tracking-widest text-white/40 hover:text-white transition-colors duration-200"
          >
            ← Back to Programs
          </a>
        )}

        {step < steps.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-8 py-3 hover:bg-[#b01730] transition-colors duration-200"
          >
            NEXT STEP →
          </button>
        ) : (
          <button
            onClick={() => formData.agreed && setSubmitted(true)}
            disabled={!formData.agreed}
            className={`font-display font-black text-sm tracking-widest text-white px-8 py-3 transition-all duration-200 ${
              formData.agreed
                ? "bg-[#DA1D3A] hover:bg-[#b01730] cursor-pointer"
                : "bg-white/10 cursor-not-allowed text-white/30"
            }`}
          >
            SUBMIT REGISTRATION →
          </button>
        )}
      </div>
    </div>
  );
}
