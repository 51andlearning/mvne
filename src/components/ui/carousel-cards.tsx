"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const AUTO_PLAY_MS = 2000;        // 2 seconds normal rotation
const MANUAL_PAUSE_MS = 300_000;  // 5 minutes pause after manual interaction

interface CarouselCardsProps {
  children: React.ReactNode[];
  desktopPerView?: number;
}

export function CarouselCards({ children, desktopPerView = 3 }: CarouselCardsProps) {
  const [perView, setPerView] = useState(desktopPerView);
  const [current, setCurrent] = useState(0);
  const pausedUntilRef = useRef<number>(0); // timestamp until which auto-play is paused
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(desktopPerView);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [desktopPerView]);

  const total = Math.ceil(children.length / perView);

  useEffect(() => {
    setCurrent(0);
  }, [perView]);

  // Start auto-play ticker
  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      if (Date.now() < pausedUntilRef.current) return; // still paused
      setCurrent((c) => (c + 1) % total);
    }, AUTO_PLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

  /** Call this on any manual navigation to pause auto-play for 5 minutes */
  const recordManualInteraction = useCallback(() => {
    pausedUntilRef.current = Date.now() + MANUAL_PAUSE_MS;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      recordManualInteraction();
      setCurrent(index);
    },
    [recordManualInteraction]
  );

  const prev = useCallback(() => {
    recordManualInteraction();
    setCurrent((c) => (c - 1 + total) % total);
  }, [total, recordManualInteraction]);

  const next = useCallback(() => {
    recordManualInteraction();
    setCurrent((c) => (c + 1) % total);
  }, [total, recordManualInteraction]);

  const pages = Array.from({ length: total }, (_, i) =>
    children.slice(i * perView, i * perView + perView)
  );

  return (
    <div className="relative">
      {/* Slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {pages.map((page, pageIdx) => (
            <div
              key={pageIdx}
              className="w-full flex-shrink-0 grid gap-6"
              style={{ gridTemplateColumns: `repeat(${perView}, 1fr)` }}
            >
              {page}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0369A1] hover:text-[#0369A1] transition-colors text-lg leading-none"
            aria-label="Previous"
          >
            ‹
          </button>
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-[#0369A1]"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0369A1] hover:text-[#0369A1] transition-colors text-lg leading-none"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

/** Styled company logo badge */
export function LogoBadge({
  text,
  bg,
  light = true,
}: {
  text: string;
  bg: string;
  light?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center justify-center h-7 px-3 rounded-md text-[10px] font-extrabold tracking-widest uppercase"
      style={{ backgroundColor: bg, color: light ? "#fff" : "#0F172A" }}
    >
      {text}
    </span>
  );
}
