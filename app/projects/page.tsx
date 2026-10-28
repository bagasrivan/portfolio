"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/components/AppShell";
import LangStack from "@/components/LangStack";
import { Icon } from "@/components/ui";
import { iconPaths } from "@/lib/icons";
import {
  projects,
  projectsContent,
  type Category,
  type Project,
} from "@/lib/projects";

const MAX_TECH = 4;

function ProjectCard({ p }: { p: Project }) {
  const { lang } = useApp();
  const c = projectsContent[lang];
  const shown = p.tech.slice(0, MAX_TECH);
  const rest = p.tech.slice(MAX_TECH);

  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-surface shadow-sm transition duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* Gambar */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-soft">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs font-medium text-bg">
          {c.categories[p.category]}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-line bg-surface/90 px-3 py-1 text-xs text-ink backdrop-blur">
          {p.year}
        </span>
        {p.confidential && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur">
            <Icon d={iconPaths.lock} className="h-3.5 w-3.5" />
            {c.confidential}
          </span>
        )}
      </div>

      {/* Isi */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-serif text-xl text-ink transition-colors group-hover:text-accent">
          {p.title}
        </h2>

        {/* flex-1: deskripsi menyerap sisa ruang, jadi chip & footer selalu di bawah */}
        <div className="flex-1">
          <LangStack>
            {(l) => (
              <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted">
                {p.text[l].description}
              </p>
            )}
          </LangStack>
        </div>

        {/* Chip teknologi: tinggi minimum 2 baris, content-start supaya baris tidak melar */}
        <div className="relative z-10 mt-4 flex min-h-[3.75rem] flex-wrap content-start items-center gap-2">
          {shown.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-bg px-2.5 py-1 text-xs text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              {t}
            </span>
          ))}
          {rest.length > 0 && (
            <span className="group/more relative">
              <span className="cursor-default rounded-full px-2 py-1 text-xs text-muted transition-colors hover:bg-soft hover:text-ink">
                +{rest.length}
              </span>
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs text-bg opacity-0 shadow-lg transition duration-200 group-hover/more:translate-y-0 group-hover/more:opacity-100"
              >
                {rest.join(", ")}
              </span>
            </span>
          )}
        </div>

        {/* Footer kartu */}
        <div className="mt-5 flex min-h-9 items-center justify-between border-t border-line pt-4">
          {" "}
          {/* Tautan ini "diregangkan" supaya seluruh kartu bisa diklik */}
          <Link
            href={`/projects/${p.slug}`}
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors after:absolute after:inset-0 after:rounded-2xl group-hover:text-ink"
          >
            {c.more}
            <Icon
              d={iconPaths.arrowRight}
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-bg transition hover:opacity-80"
            >
              <Icon d={iconPaths.globe} className="h-3.5 w-3.5" />
              {c.visit}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const { lang } = useApp();
  const c = projectsContent[lang];
  const [category, setCategory] = useState<Category | "all">("all");

  // Hanya tampilkan kategori yang memang punya project
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const list =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  const pill =
    "rounded-full border px-4 py-1.5 text-sm transition-colors duration-200";

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-10 md:px-8">
      <div className="mx-auto max-w-6xl md:pt-2">
        <header className="fade-up text-center">
          <LangStack>
            {(l) => (
              <>
                <p className="text-sm font-medium uppercase tracking-wide text-accent">
                  {projectsContent[l].eyebrow}
                </p>
                <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">
                  {projectsContent[l].title}
                </h1>
              </>
            )}
          </LangStack>

          {/* Filter kategori */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {(["all", ...categories] as (Category | "all")[]).map((k) => (
              <button
                key={k}
                onClick={() => setCategory(k)}
                aria-pressed={category === k}
                className={`${pill} ${
                  category === k
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-surface text-muted hover:border-accent/40 hover:text-ink"
                }`}
              >
                {k === "all" ? c.all : c.categories[k]}
              </button>
            ))}
          </div>
        </header>

        {/* Grid project */}
        {list.length === 0 ? (
          <p className="mt-12 text-center text-sm text-muted">{c.empty}</p>
        ) : (
          <div
            key={category}
            className="fade-up mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
