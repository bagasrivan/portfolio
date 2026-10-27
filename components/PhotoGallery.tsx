"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui";
import { useApp } from "@/components/AppShell";
import { photos } from "@/lib/about";

const closeIcon = "M18 6L6 18M6 6l12 12";
const prevIcon = "M15 18l-6-6 6-6";
const nextIcon = "M9 18l6-6-6-6";

const SWIPE_THRESHOLD = 80; // jarak geser (px) agar foto dianggap "dibuang"
const FLY_MS = 300;

export default function PhotoGallery() {
  const { lang } = useApp();
  const n = photos.length;

  const [active, setActive] = useState(0); // indeks foto paling depan
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [fly, setFly] = useState<1 | -1>(-1);
  const [open, setOpen] = useState(false); // lightbox

  const startX = useRef(0);
  const moved = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Foto depan terbang ke samping, lalu pindah ke belakang tumpukan
  const next = useCallback(
    (dir: 1 | -1 = -1) => {
      if (leaving || n < 2) return;
      setFly(dir);
      setLeaving(true);
      timerRef.current = setTimeout(() => {
        setActive((a) => (a + 1) % n);
        setLeaving(false);
        setDragX(0);
      }, FLY_MS);
    },
    [leaving, n],
  );

  // Foto paling belakang maju ke depan
  const prev = useCallback(() => {
    if (leaving || n < 2) return;
    setActive((a) => (a - 1 + n) % n);
  }, [leaving, n]);

  // Keyboard: panah untuk geser, Esc untuk menutup lightbox
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (open) {
        if (e.key === "Escape") setOpen(false);
        if (e.key === "ArrowLeft") setActive((a) => (a - 1 + n) % n);
        if (e.key === "ArrowRight") setActive((a) => (a + 1) % n);
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, n, prev, next]);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (leaving) return;
    startX.current = e.clientX;
    moved.current = false;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 6) moved.current = true;
    setDragX(dx);
  }

  function onPointerUp() {
    if (!dragging) return;
    setDragging(false);
    if (!moved.current) {
      // hanya klik, bukan geser: buka lightbox
      setDragX(0);
      setOpen(true);
      return;
    }
    if (Math.abs(dragX) > SWIPE_THRESHOLD) next(dragX > 0 ? 1 : -1);
    else setDragX(0);
  }

  function onPointerCancel() {
    setDragging(false);
    setDragX(0);
  }

  // Posisi tiap kartu: 0 = paling depan, makin besar makin ke belakang
  function cardStyle(p: number): React.CSSProperties {
    const transition =
      dragging && p === 0
        ? "none"
        : `transform ${FLY_MS}ms ease, opacity ${FLY_MS}ms ease`;

    if (p === 0) {
      if (leaving) {
        return {
          transform: `translateX(${fly * 120}%) rotate(${fly * 14}deg)`,
          opacity: 0,
          transition,
          zIndex: n,
        };
      }
      return {
        transform: `translateX(${dragX}px) rotate(${dragX * 0.04}deg)`,
        transition,
        zIndex: n,
      };
    }

    const fan =
      p === 1
        ? "translate(24px, 10px) rotate(4deg) scale(0.97)"
        : "translate(-24px, 18px) rotate(-5deg) scale(0.94)";
    return {
      transform: fan,
      opacity: p <= 2 ? 1 : 0,
      transition,
      zIndex: n - p,
    };
  }

  return (
    <>
      {/* Tumpukan foto */}
      <div className="flex flex-col items-center">
        <div
          className="relative aspect-[4/5]"
          style={{
            width: "min(84%, 24rem, calc((100dvh - 12rem) * 0.8))",
            marginBottom: 28,
          }}
        >
          {photos.map((p, i) => {
            const pos = (i - active + n) % n;
            const isFront = pos === 0;
            return (
              <div
                key={p.src}
                style={cardStyle(pos)}
                onPointerDown={isFront ? onPointerDown : undefined}
                onPointerMove={isFront ? onPointerMove : undefined}
                onPointerUp={isFront ? onPointerUp : undefined}
                onPointerCancel={isFront ? onPointerCancel : undefined}
                aria-label={isFront ? `Photo ${i + 1} of ${n}` : undefined}
                className={`absolute inset-0 select-none overflow-hidden rounded-2xl border border-line bg-soft shadow-lg ${
                  isFront
                    ? "cursor-grab touch-pan-y active:cursor-grabbing"
                    : "pointer-events-none"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  draggable={false}
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="pointer-events-none object-cover"
                />
                {p.caption && (
                  <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-4 text-left text-sm text-white">
                    {p.caption[lang]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <Icon d={closeIcon} className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((a) => (a - 1 + n) % n);
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <Icon d={prevIcon} className="h-6 w-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[85dvh] w-full max-w-3xl"
          >
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((a) => (a + 1) % n);
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <Icon d={nextIcon} className="h-6 w-6" />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {active + 1} / {n}
          </p>
        </div>
      )}
    </>
  );
}
