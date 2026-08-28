"use client";

import { useState } from "react";

const divisions = ["8U", "10U", "12U", "14U", "16U", "18U"];

type FormState = {
  // Athlete
  athleteFirstName: string;
  athleteLastName: string;
  dateOfBirth: string;
  division: string;
  // Parent
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  // Emergency
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
  // Medical
  medicalConditions: string;
  allergies: string;
};

type ApiStatus = "idle" | "loading" | "success" | "error";

export default function RegisterAthleteForm() {
  const [status, setStatus] = useState<ApiStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<FormState>({
    athleteFirstName: "",
    athleteLastName: "",
    dateOfBirth: "",
    division: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
    medicalConditions: "",
    allergies: "",
  });

  const update = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    formData.athleteFirstName &&
    formData.athleteLastName &&
    formData.dateOfBirth &&
    formData.division &&
    formData.parentName &&
    formData.parentEmail &&
    formData.parentPhone &&
    formData.emergencyName &&
    formData.emergencyPhone;

  const handleSubmit = async () => {
    if (!isValid) return;

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      athlete: {
        firstName: formData.athleteFirstName,
        lastName: formData.athleteLastName,
        dateOfBirth: formData.dateOfBirth,
        division: formData.division,
      },
      parent: {
        name: formData.parentName,
        email: formData.parentEmail,
        phone: formData.parentPhone,
      },
      emergencyContact: {
        name: formData.emergencyName,
        phone: formData.emergencyPhone,
        relation: formData.emergencyRelation,
      },
      medical: {
        conditions: formData.medicalConditions || "None",
        allergies: formData.allergies || "None",
      },
    };

    try {
      const res = await fetch("https://your-api-endpoint.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || `Error ${res.status}`);
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const inputClass =
    "bg-white border border-stone-300 text-[#1a1a1a] text-sm px-4 py-3 font-display tracking-wide placeholder:text-stone-400 focus:outline-none focus:border-[#DA1D3A] transition-colors duration-200 w-full";

  const labelClass =
    "font-display text-[9px] tracking-widest text-stone-500 mb-1.5 block";

  const sectionLabel = (text: string) => (
    <p className="font-display text-[10px] tracking-[0.4em] text-[#DA1D3A] mb-4">
      {text}
    </p>
  );

  const divider = <div className="w-full h-px bg-stone-200" />;

  // Success state
  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto border border-[#DA1D3A]/30 bg-[#DA1D3A]/5 p-12 flex flex-col items-center gap-6 text-center">
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
          <h3 className="font-display font-black text-[#1a1a1a] text-2xl leading-none mb-3">
            REGISTRATION SUBMITTED!
          </h3>
          <p className="font-display text-xs tracking-wide text-stone-500 leading-relaxed">
            Thank you for registering{" "}
            <span className="text-[#1a1a1a]">
              {formData.athleteFirstName} {formData.athleteLastName}
            </span>
            . A confirmation will be sent to{" "}
            <span className="text-[#1a1a1a]">{formData.parentEmail}</span> within 24
            hours.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <a
            href="/programs"
            className="font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-colors duration-200"
          >
            BACK TO PROGRAMS
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                athleteFirstName: "",
                athleteLastName: "",
                dateOfBirth: "",
                division: "",
                parentName: "",
                parentEmail: "",
                parentPhone: "",
                emergencyName: "",
                emergencyPhone: "",
                emergencyRelation: "",
                medicalConditions: "",
                allergies: "",
              });
            }}
            className="font-display text-xs tracking-widest text-stone-400 hover:text-[#1a1a1a] transition-colors duration-200 py-2"
          >
            Register Another Athlete →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Form */}
      <div className="lg:col-span-8 flex flex-col gap-8">
        {/* Athlete Info */}
        <div className="flex flex-col gap-4">
          {sectionLabel("ATHLETE INFORMATION")}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className={labelClass}>FIRST NAME *</label>
              <input
                type="text"
                value={formData.athleteFirstName}
                onChange={(e) => update("athleteFirstName", e.target.value)}
                placeholder="First name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>LAST NAME *</label>
              <input
                type="text"
                value={formData.athleteLastName}
                onChange={(e) => update("athleteLastName", e.target.value)}
                placeholder="Last name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>DATE OF BIRTH *</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => update("dateOfBirth", e.target.value)}
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
                {divisions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {divider}

        {/* Parent Info */}
        <div className="flex flex-col gap-4">
          {sectionLabel("PARENT / GUARDIAN INFORMATION")}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 flex flex-col">
              <label className={labelClass}>FULL NAME *</label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => update("parentName", e.target.value)}
                placeholder="Parent or guardian full name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>EMAIL ADDRESS *</label>
              <input
                type="email"
                value={formData.parentEmail}
                onChange={(e) => update("parentEmail", e.target.value)}
                placeholder="parent@email.com"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>PHONE NUMBER *</label>
              <input
                type="tel"
                value={formData.parentPhone}
                onChange={(e) => update("parentPhone", e.target.value)}
                placeholder="+1 (555) 000-0000"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {divider}

        {/* Emergency Contact */}
        <div className="flex flex-col gap-4">
          {sectionLabel("EMERGENCY CONTACT")}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className={labelClass}>CONTACT NAME *</label>
              <input
                type="text"
                value={formData.emergencyName}
                onChange={(e) => update("emergencyName", e.target.value)}
                placeholder="Full name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>RELATIONSHIP</label>
              <select
                value={formData.emergencyRelation}
                onChange={(e) => update("emergencyRelation", e.target.value)}
                className={inputClass + " cursor-pointer"}
              >
                <option value="" disabled>
                  Select relationship
                </option>
                {[
                  "Parent",
                  "Guardian",
                  "Grandparent",
                  "Aunt / Uncle",
                  "Sibling",
                  "Other",
                ].map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label className={labelClass}>PHONE NUMBER *</label>
              <input
                type="tel"
                value={formData.emergencyPhone}
                onChange={(e) => update("emergencyPhone", e.target.value)}
                placeholder="+1 (555) 000-0000"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {divider}

        {/* Medical */}
        <div className="flex flex-col gap-4">
          {sectionLabel("MEDICAL INFORMATION")}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className={labelClass}>MEDICAL CONDITIONS</label>
              <input
                type="text"
                value={formData.medicalConditions}
                onChange={(e) => update("medicalConditions", e.target.value)}
                placeholder="e.g. Asthma, None"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>ALLERGIES</label>
              <input
                type="text"
                value={formData.allergies}
                onChange={(e) => update("allergies", e.target.value)}
                placeholder="e.g. Peanuts, None"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {divider}

        {/* Error message */}
        {status === "error" && (
          <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 flex items-center gap-3">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="font-display text-xs tracking-wide text-red-400">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!isValid || status === "loading"}
          className={`w-full font-display font-black text-sm tracking-widest py-4 transition-all duration-200 flex items-center justify-center gap-3 ${
            isValid && status !== "loading"
              ? "bg-[#DA1D3A] text-white hover:bg-[#b01730] cursor-pointer"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              SUBMITTING...
            </>
          ) : (
            "REGISTER ATHLETE →"
          )}
        </button>

        <p className="font-display text-[9px] tracking-widest text-stone-400 text-center">
          A confirmation will be sent to the parent email within 24 hours.
        </p>
      </div>

      {/* Right — summary panel */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="border border-stone-200 bg-white p-6 flex flex-col gap-4 sticky top-24">
          <h3 className="font-display font-black text-[#1a1a1a] text-lg tracking-wider">
            REGISTRATION SUMMARY
          </h3>

          <div className="flex flex-col gap-3">
            {[
              {
                label: "Athlete",
                value:
                  formData.athleteFirstName || formData.athleteLastName
                    ? `${formData.athleteFirstName} ${formData.athleteLastName}`.trim()
                    : "—",
              },
              { label: "Date of Birth", value: formData.dateOfBirth || "—" },
              { label: "Division", value: formData.division || "—" },
              { label: "Parent", value: formData.parentName || "—" },
              { label: "Email", value: formData.parentEmail || "—" },
              { label: "Phone", value: formData.parentPhone || "—" },
              { label: "Emergency", value: formData.emergencyName || "—" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-0.5 border-b border-stone-100 pb-3 last:border-0 last:pb-0"
              >
                <span className="font-display text-[9px] tracking-widest text-stone-400">
                  {item.label.toUpperCase()}
                </span>
                <span className="font-display text-xs tracking-wide text-stone-600 truncate">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* API payload preview */}
          <div className="border-t border-stone-200 pt-4 flex flex-col gap-2">
            <p className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
              API PAYLOAD PREVIEW
            </p>
            <pre className="font-display text-[9px] text-stone-500 leading-relaxed overflow-x-auto bg-stone-50 p-3 border border-stone-200">
              {JSON.stringify(
                {
                  athlete: {
                    firstName: formData.athleteFirstName || "...",
                    lastName: formData.athleteLastName || "...",
                    dateOfBirth: formData.dateOfBirth || "...",
                    division: formData.division || "...",
                  },
                  parent: {
                    name: formData.parentName || "...",
                    email: formData.parentEmail || "...",
                    phone: formData.parentPhone || "...",
                  },
                  emergencyContact: {
                    name: formData.emergencyName || "...",
                    phone: formData.emergencyPhone || "...",
                    relation: formData.emergencyRelation || "...",
                  },
                  medical: {
                    conditions: formData.medicalConditions || "None",
                    allergies: formData.allergies || "None",
                  },
                },
                null,
                2,
              )}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
