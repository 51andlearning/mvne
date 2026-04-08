"use client";
import { useState, useEffect, useRef } from "react";

const AUTO_PLAY_MS   = 2_000;    // 2 s auto-advance
const MANUAL_PAUSE_MS = 300_000; // 5 min pause after manual interaction
const SLIDE_MS       = 700;      // smooth & gentle slide duration

interface CarouselCardsProps {
  children: React.ReactNode[];
  desktopPerView?: number;
}

/**
 * Infinite-loop carousel — cards flow continuously in a circular fashion.
 *
 * Strategy: clone `perView` items from each end of the list so the
 * wrap-around is invisible. After the CSS transition completes we silently
 * teleport from the clone back to its real counterpart (no flash).
 */
export function CarouselCards({
  children,
  desktopPerView = 3,
}: CarouselCardsProps) {
  const items = children;
  const n     = items.length;

  const [perView,  setPerView]  = useState(desktopPerView);
  // idx into the *cloned* array; real items occupy [perView … perView+n-1]
  const [idx,      setIdx]      = useState(desktopPerView);
  const [animated, setAnimated] = useState(true);
  const pausedUntil = useRef(0);

  /* ── Responsive perView ─────────────────────────────────────────── */
  useEffect(() => {
    const calc = () =>
      window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : desktopPerView;

    const onResize = () => {
      const pv = calc();
      setAnimated(false);
      setPerView(pv);
      setIdx(pv); // reset to first real item, no animation
      // Re-enable transition after React has painted the new position
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [desktopPerView]);

  /* ── Infinite-loop teleport ──────────────────────────────────────── */
  // When idx lands in a clone region, wait for the slide to finish then
  // silently jump back to the equivalent real position.
  useEffect(() => {
    if (n <= perView) return;
    const inClone = idx < perView || idx >= n + perView;
    if (!inClone) return;

    const timer = setTimeout(() => {
      setAnimated(false);
      setIdx(curr => {
        if (curr >= n + perView) return perView + (curr - n - perView);
        if (curr <  perView)     return n + perView + (curr - perView);
        return curr;
      });
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
    }, SLIDE_MS);

    return () => clearTimeout(timer);
  }, [idx, n, perView]);

  /* ── Auto-play ───────────────────────────────────────────────────── */
  useEffect(() => {
    if (n <= perView) return;
    const id = setInterval(() => {
      if (Date.now() >= pausedUntil.current) setIdx(i => i + 1);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [n, perView]);

  /* ── Manual navigation ───────────────────────────────────────────── */
  const pause = () => { pausedUntil.current = Date.now() + MANUAL_PAUSE_MS; };
  const prev  = () => { pause(); setIdx(i => i - 1); };
  const next  = () => { pause(); setIdx(i => i + 1); };
  const goTo  = (i: number) => { pause(); setIdx(perView + i); };

  /* ── Derived values ──────────────────────────────────────────────── */
  const realIdx = ((idx - perView) % n + n) % n;
  const pct     = 100 / perView;

  // Cloned array: [tail clone] + [real items] + [head clone]
  const cloned = [
    ...items.slice(-perView),
    ...items,
    ...items.slice(0, perView),
  ];

  /* ── All items fit — no carousel needed ─────────────────────────── */
  if (n <= perView) {
    return (
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}
      >
        {items}
      </div>
    );
  }

  /* ── Carousel ────────────────────────────────────────────────────── */
  return (
    <div className="relative overflow-hidden">
      {/* Track */}
      <div
        className="flex"
        style={{
          transform:  `translateX(${-(idx * pct)}%)`,
          transition: animated
            ? `transform ${SLIDE_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`
            : "none",
        }}
      >
        {cloned.map((child, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-3"
            style={{ width: `${pct}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0369A1] hover:text-[#0369A1] transition-colors text-lg leading-none"
        >
          ‹
        </button>

        {Array.from({ length: n }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === realIdx
                ? "w-6 h-2 bg-[#0369A1]"
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}

        <button
          onClick={next}
          aria-label="Next"
          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0369A1] hover:text-[#0369A1] transition-colors text-lg leading-none"
        >
          ›
        </button>
      </div>
    </div>
  );
}
