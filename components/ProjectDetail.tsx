"use client";

import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/components/AppShell";
import LangStack from "@/components/LangStack";
import { Icon } from "@/components/ui";
import { iconPaths } from "@/lib/icons";
import { projects, projectsContent } from "@/lib/projects";

export default function ProjectDetail({ slug }: { slug: string }) {
  const { lang } = useApp();
  const c = projectsContent[lang];
  const p = projects.find((x) => x.slug === slug);

  const backLink = (
    <Link
      href="/projects"
      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
    >
      <Icon
        d={iconPaths.arrowLeft}
        className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
      />
      {c.back}
    </Link>
  );

  if (!p) {
    return (
      <div className="min-h-0 flex-1 overflow-y-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          {backLink}
          <p className="mt-8 text-ink">{c.notFound}</p>
        </div>
      </div>
    );
  }

  const heading = "font-serif text-2xl text-ink";
  const body = "mt-3 whitespace-pre-line leading-relaxed text-ink";

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-12 md:px-8">
      <article className="fade-up mx-auto max-w-3xl md:pt-2">
        {backLink}

        <h1 className="mt-6 font-serif text-4xl text-ink md:text-5xl">
          {p.title}
        </h1>

        {/* Meta + tombol */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>{p.year}</span>
          <span aria-hidden="true">•</span>
          <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink">
            {c.categories[p.category]}
          </span>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-bg transition hover:opacity-80"
            >
              <Icon d={iconPaths.globe} className="h-3.5 w-3.5" />
              {c.visit}
            </a>
          )}
          {p.repoUrl && (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink transition hover:border-accent/40"
            >
              {c.code}
            </a>
          )}
        </div>

        {/* Gambar utama */}
        {p.confidential ? (
          <div className="mt-8 flex aspect-[16/9] items-center justify-center gap-2 rounded-2xl border border-line bg-soft text-sm text-muted">
            <Icon d={iconPaths.lock} className="h-4 w-4" />
            {c.confidential}
          </div>
        ) : (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover object-top"
            />
          </div>
        )}

        {/* Teks: tinggi mengikuti bahasa terpanjang agar tidak bergeser */}
        <div className="mt-10">
          <LangStack>
            {(l) => {
              const t = p.text[l];
              const labels = projectsContent[l];
              return (
                <div className="space-y-8">
                  <section>
                    <h2 className={heading}>{labels.summary}</h2>
                    <p className={body}>{t.summary}</p>
                  </section>

                  {t.results && (
                    <section>
                      <h2 className={heading}>{labels.results}</h2>
                      <p className={body}>{t.results}</p>
                    </section>
                  )}

                  {t.learnings && (
                    <section>
                      <h2 className={heading}>{labels.learnings}</h2>
                      <p className={body}>{t.learnings}</p>
                    </section>
                  )}
                </div>
              );
            }}
          </LangStack>
        </div>

        {/* Chip teknologi (tetap ada di bawah) */}
        <div className="mt-10 border-t border-line pt-6">
          <p className="text-xs uppercase tracking-wide text-muted">{c.tech}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}