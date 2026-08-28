"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Category, Event } from "../lib/api";
import { Suspense } from "react";

function CalendarIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EventCard({ event }: { event: Event }) {
  const isOpen = event.registration_status === "open";
  const isFull = event.registration_status === "full";

  const startDate = new Date(event.date);
  const endDate = new Date(event.end_date);
  const deadline = new Date(event.registration_deadline);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const spotsLeft =
    event.max_participants != null
      ? event.max_participants - event.current_participants
      : null;

  const fillPercent =
    event.max_participants != null
      ? Math.round((event.current_participants / event.max_participants) * 100)
      : 0;

  return (
    <div className="group relative flex flex-col bg-white border border-stone-200 overflow-hidden hover:border-[#DA1D3A]/40 hover:shadow-lg transition-all duration-300">
      {/* Top accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DA1D3A]" />

      {/* Status badge */}
      <div className="flex items-center justify-between px-6 pt-5 pl-7">
        <span
          className={`font-display text-[9px] tracking-[0.35em] px-2 py-1 border ${
            isOpen
              ? "text-emerald-700 border-emerald-200 bg-emerald-50"
              : isFull
              ? "text-orange-700 border-orange-200 bg-orange-50"
              : "text-stone-500 border-stone-200 bg-stone-50"
          }`}
        >
          {event.registration_status.toUpperCase()}
        </span>
        <span className="font-display text-[9px] tracking-widest text-stone-400">
          {event.category?.name ?? "GENERAL"}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 px-6 py-5 pl-7 flex-1">
        <div>
          <h2 className="font-display font-black text-[#1a1a1a] text-xl leading-tight tracking-wide mb-1 group-hover:text-[#DA1D3A] transition-colors duration-200">
            {event.name.toUpperCase()}
          </h2>
          <p className="font-display text-xs tracking-wide text-stone-500 leading-relaxed line-clamp-2">
            {event.description}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-stone-500">
            <span className="text-[#DA1D3A]"><CalendarIcon /></span>
            <span className="font-display text-xs tracking-wide">
              {formatDate(startDate)}
              {startDate.toDateString() !== endDate.toDateString() && ` – ${formatDate(endDate)}`}
            </span>
          </div>
          <div className="flex items-center gap-2 text-stone-500">
            <span className="text-[#DA1D3A]"><PinIcon /></span>
            <span className="font-display text-xs tracking-wide">{event.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
          <div>
            <p className="font-display text-[9px] tracking-widest text-stone-400 mb-0.5">ENTRY FEE</p>
            <p className="font-display font-black text-[#1a1a1a] text-lg">
              {event.entry_fee === 0 ? "FREE" : `₱${event.entry_fee.toLocaleString()}`}
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-[9px] tracking-widest text-stone-400 mb-0.5">DEADLINE</p>
            <p className="font-display text-xs tracking-wide text-stone-600">{formatDate(deadline)}</p>
          </div>
        </div>

        {/* Spots bar */}
        {event.max_participants != null && (
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-display text-[9px] tracking-widest text-stone-400">
                {spotsLeft} SPOTS LEFT
              </span>
              <span className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
                {fillPercent}% FULL
              </span>
            </div>
            <div className="w-full h-1 bg-stone-100">
              <div
                className="h-full bg-[#DA1D3A] transition-all duration-500"
                style={{ width: `${fillPercent}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer — Register button */}
      <div className="px-6 pb-5 pl-7">
        {isOpen ? (
          <Link
            href={`/events/${event.id}/register`}
            className="block w-full font-display font-black text-sm tracking-widest text-white text-center py-3 bg-[#DA1D3A] hover:bg-[#b01730] transition-colors duration-200"
          >
            REGISTER NOW →
          </Link>
        ) : (
          <div className="w-full font-display font-black text-sm tracking-widest text-stone-400 text-center py-3 bg-stone-100 cursor-not-allowed">
            {isFull ? "REGISTRATION FULL" : "REGISTRATION CLOSED"}
          </div>
        )}
      </div>
    </div>
  );
}

function EventsContent({
  categories,
  events,
  activeCategoryId,
}: {
  categories: Category[];
  events: Event[];
  activeCategoryId?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategory = (catId?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (catId) {
      params.set("category", catId);
    } else {
      params.delete("category");
    }
    router.push(`/events?${params.toString()}`);
  };

  return (
    <main className="bg-[#F4F1EC] min-h-screen">
      {/* Header */}
      <div className="relative w-full border-b border-stone-300">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DA1D3A]" />
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display text-xs tracking-[0.4em] text-[#DA1D3A]">
              MACOY GAMES
            </span>
          </div>
          <h1
            className="font-display font-black text-[#1a1a1a] leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            UPCOMING
            <br />
            <span className="text-[#DA1D3A]">EVENTS.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Category filter tabs — only shown if categories exist */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => handleCategory(undefined)}
              className={`font-display text-xs tracking-widest px-4 py-2 border transition-colors duration-200 ${
                !activeCategoryId
                  ? "bg-[#DA1D3A] text-white border-[#DA1D3A]"
                  : "bg-white text-stone-500 border-stone-300 hover:border-[#DA1D3A] hover:text-[#DA1D3A]"
              }`}
            >
              ALL EVENTS
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`font-display text-xs tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  activeCategoryId === cat.id
                    ? "bg-[#DA1D3A] text-white border-[#DA1D3A]"
                    : "bg-white text-stone-500 border-stone-300 hover:border-[#DA1D3A] hover:text-[#DA1D3A]"
                }`}
              >
                {cat.name.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {/* Events grid */}
        {events.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <div className="w-16 h-16 border-2 border-stone-200 flex items-center justify-center">
              <svg width="24" height="24" fill="none" stroke="#9ca3af" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="font-display text-sm tracking-widest text-stone-400">
              NO EVENTS FOUND
            </p>
            <p className="font-display text-xs text-stone-400 max-w-sm">
              Check back soon — new events are added regularly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default function EventsClient({
  categories,
  events,
  activeCategoryId,
}: {
  categories: Category[];
  events: Event[];
  activeCategoryId?: string;
}) {
  return (
    <Suspense>
      <EventsContent
        categories={categories}
        events={events}
        activeCategoryId={activeCategoryId}
      />
    </Suspense>
  );
}
