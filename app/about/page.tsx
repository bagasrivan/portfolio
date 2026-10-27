"use client";

import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import { useApp } from "@/components/AppShell";
import { aboutContent } from "@/lib/about";

export default function AboutPage() {
  const { lang } = useApp();
  const a = aboutContent[lang];

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-8 md:px-8 md:pb-6">
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-8 md:px-8 md:pb-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:min-h-full md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          {/* Kiri: tumpukan foto */}
          <div className="flex flex-col justify-center">
            <PhotoGallery />
          </div>

          {/* Kanan: perkenalan */}
          <section className="fade-up flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              {a.eyebrow}
            </p>
            <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">
              {a.title}
            </h1>

            <div className="mt-6 space-y-4 leading-relaxed text-ink">
              {a.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {a.facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-line bg-surface p-4"
                >
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-accent px-5 py-2.5 text-sm text-white transition hover:opacity-90"
            >
              {a.cta}
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
