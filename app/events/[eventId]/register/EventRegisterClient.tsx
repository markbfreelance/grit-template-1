"use client";

import { useState } from "react";
import Link from "next/link";
import type { Event } from "../../../lib/api";
import { registerForEvent } from "../../../lib/api";

const ORG_SLUG = "macoy-games";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  emergency_contact: string;
  emergency_phone: string;
};

type ApiStatus = "idle" | "loading" | "success" | "error";

export default function EventRegisterClient({ event }: { event: Event }) {
  const [status, setStatus] = useState<ApiStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    emergency_contact: "",
    emergency_phone: "",
  });

  const update = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.date_of_birth &&
    formData.address &&
    formData.city &&
    formData.state &&
    formData.zip_code &&
    formData.emergency_contact &&
    formData.emergency_phone;

  const handleSubmit = async () => {
    if (!isValid) return;
    setStatus("loading");
    setErrorMessage("");

    const result = await registerForEvent({
      organization_slug: ORG_SLUG,
      event_id: event.id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date_of_birth: formData.date_of_birth,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip_code: formData.zip_code,
      emergency_contact: formData.emergency_contact,
      emergency_phone: formData.emergency_phone,
    });

    if (result.success) {
      setStatus("success");
      const data = result.data as { confirmation_code?: string } | undefined;
      setConfirmationCode(data?.confirmation_code ?? "");
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "bg-white border border-stone-300 text-[#1a1a1a] text-sm px-4 py-3 font-display tracking-wide placeholder:text-stone-400 focus:outline-none focus:border-[#DA1D3A] transition-colors duration-200 w-full";
  const labelClass =
    "font-display text-[9px] tracking-widest text-stone-500 mb-1.5 block";

  const startDate = new Date(event.date);
  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  if (status === "success") {
    return (
      <main className="bg-[#F4F1EC] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full border border-[#DA1D3A]/30 bg-white p-12 flex flex-col items-center gap-6 text-center">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-[#DA1D3A]">
            <svg width="28" height="28" fill="none" stroke="#DA1D3A" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <h2 className="font-display font-black text-[#1a1a1a] text-2xl leading-none mb-3">
              REGISTRATION CONFIRMED!
            </h2>
            {confirmationCode && (
              <p className="font-display text-xs tracking-widest text-[#DA1D3A] mb-3">
                CODE: {confirmationCode}
              </p>
            )}
            <p className="font-display text-xs tracking-wide text-stone-500 leading-relaxed">
              You&apos;ve been registered for{" "}
              <span className="text-[#1a1a1a] font-black">{event.name}</span>.
              A confirmation will be sent to{" "}
              <span className="text-[#1a1a1a]">{formData.email}</span> shortly.
            </p>
          </div>
          <Link
            href="/events"
            className="font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-colors duration-200 w-full"
          >
            BACK TO EVENTS
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F4F1EC] min-h-screen">
      {/* Header banner */}
      <div className="relative w-full border-b border-stone-300">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DA1D3A]" />
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="flex items-center gap-3 mb-3">
            <Link
              href="/events"
              className="font-display text-[9px] tracking-[0.35em] text-stone-400 hover:text-[#DA1D3A] transition-colors duration-200 flex items-center gap-1"
            >
              ← EVENTS
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display text-xs tracking-[0.4em] text-[#DA1D3A]">
              EVENT REGISTRATION
            </span>
          </div>
          <h1
            className="font-display font-black text-[#1a1a1a] leading-none"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            {event.name.toUpperCase()}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form — left */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Personal Info */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-[10px] tracking-[0.4em] text-[#DA1D3A]">
              PERSONAL INFORMATION
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 flex flex-col">
                <label className={labelClass}>FULL NAME *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>EMAIL ADDRESS *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>PHONE NUMBER *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+63 900 000 0000"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>DATE OF BIRTH *</label>
                <input
                  type="date"
                  value={formData.date_of_birth}
                  onChange={(e) => update("date_of_birth", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-stone-200" />

          {/* Address */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-[10px] tracking-[0.4em] text-[#DA1D3A]">
              ADDRESS
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 flex flex-col">
                <label className={labelClass}>STREET ADDRESS *</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="123 Main St"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>CITY *</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="City"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>STATE / PROVINCE *</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => update("state", e.target.value)}
                  placeholder="State"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>ZIP / POSTAL CODE *</label>
                <input
                  type="text"
                  value={formData.zip_code}
                  onChange={(e) => update("zip_code", e.target.value)}
                  placeholder="00000"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-stone-200" />

          {/* Emergency Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-[10px] tracking-[0.4em] text-[#DA1D3A]">
              EMERGENCY CONTACT
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className={labelClass}>CONTACT NAME *</label>
                <input
                  type="text"
                  value={formData.emergency_contact}
                  onChange={(e) => update("emergency_contact", e.target.value)}
                  placeholder="Full name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>CONTACT PHONE *</label>
                <input
                  type="tel"
                  value={formData.emergency_phone}
                  onChange={(e) => update("emergency_phone", e.target.value)}
                  placeholder="+63 900 000 0000"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-stone-200" />

          {/* Error */}
          {status === "error" && (
            <div className="border border-red-300 bg-red-50 px-4 py-3 flex items-center gap-3">
              <svg width="14" height="14" fill="none" stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="font-display text-xs tracking-wide text-red-600">{errorMessage}</p>
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
                <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#DA1D3A" strokeWidth="4" />
                  <path className="opacity-75" fill="#DA1D3A" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                SUBMITTING...
              </>
            ) : (
              "CONFIRM REGISTRATION →"
            )}
          </button>

          <p className="font-display text-[9px] tracking-widest text-stone-400 text-center">
            A confirmation email will be sent upon successful registration.
          </p>
        </div>

        {/* Event summary — right */}
        <div className="lg:col-span-4">
          <div className="border border-stone-200 bg-white p-6 flex flex-col gap-5 sticky top-24">
            <h3 className="font-display font-black text-[#1a1a1a] text-base tracking-wider">
              EVENT SUMMARY
            </h3>

            <div className="flex flex-col gap-3">
              {[
                { label: "Event", value: event.name },
                { label: "Date", value: formatDate(startDate) },
                { label: "Location", value: event.location },
                {
                  label: "Entry Fee",
                  value:
                    event.entry_fee === 0
                      ? "Free"
                      : `₱${event.entry_fee.toLocaleString()}`,
                },
                {
                  label: "Status",
                  value: event.registration_status.toUpperCase(),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-0.5 border-b border-stone-100 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-display text-[9px] tracking-widest text-stone-400">
                    {item.label.toUpperCase()}
                  </span>
                  <span
                    className={`font-display text-xs tracking-wide truncate ${
                      item.label === "Status"
                        ? event.registration_status === "open"
                          ? "text-emerald-600"
                          : "text-red-500"
                        : "text-stone-600"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {event.max_participants != null && (
              <div className="border-t border-stone-200 pt-4 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[9px] tracking-widest text-stone-400">
                    {event.max_participants - event.current_participants} SPOTS LEFT
                  </span>
                  <span className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
                    {Math.round((event.current_participants / event.max_participants) * 100)}% FULL
                  </span>
                </div>
                <div className="w-full h-1 bg-stone-100">
                  <div
                    className="h-full bg-[#DA1D3A] transition-all duration-500"
                    style={{
                      width: `${Math.round((event.current_participants / event.max_participants) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
