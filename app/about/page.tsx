"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import { useApp } from "@/components/AppShell";
import { aboutContent } from "@/lib/about";

export default function AboutPage() {
  const { lang } = useApp();
  const a = aboutContent[lang];

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-8 md:px-8 md:pb-6">
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

          <div className="mt-5 grid gap-2 sm:grid-cols-[repeat(2,minmax(0,15rem))]">
            {/* Card Education + GPA */}
            <div className="flex flex-col rounded-lg border border-line bg-surface p-2.5 transition duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <p className="text-[10px] uppercase leading-4 tracking-wide text-muted">
                {a.education.label}
              </p>

              <div className="mb-2 mt-1.5 flex items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-white p-1">
                  <Image
                    src={a.education.logo}
                    alt={a.education.school}
                    width={36}
                    height={36}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium leading-tight text-ink">
                    {a.education.degree}
                  </p>
                  <p className="text-[11px] leading-tight text-muted">
                    {a.education.school}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-2 border-t border-line pt-2">
                {" "}
                <span className="text-[10px] uppercase leading-4 tracking-wide text-muted">
                  {a.education.gpaLabel}
                </span>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium leading-4 text-accent">
                  {a.education.gpa}
                </span>
              </div>
            </div>
            {/* Card Based in */}
            <div className="flex flex-col rounded-lg border border-line bg-surface p-2.5 transition duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <p className="text-[10px] uppercase leading-4 tracking-wide text-muted">
                {a.location.label}
              </p>

              <div className="mb-2 mt-1.5 flex items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-accent/10 text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="min-w-0 text-xs font-medium text-ink">
                  {a.location.city}
                </p>
              </div>

              <div className="mt-auto flex items-center border-t border-line pt-2">
                {" "}
                <span className="py-0.5 text-[11px] font-medium leading-4 text-ink">
                  {a.location.country}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
