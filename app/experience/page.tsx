"use client";

import { useState } from "react";
import { useApp } from "@/components/AppShell";
import LangStack from "@/components/LangStack";
import { Icon } from "@/components/ui";
import {
  experiences,
  experienceContent,
  committees,
  type Group,
  type ExperienceItem,
} from "@/lib/experience";

// Ikon lokal (briefcase & users), dipakai oleh toggle
const GROUP_ICON: Record<Group, string> = {
  work: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M4 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z",
  social:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
};

const GROUPS: Group[] = ["work", "social"];
const MAX_TAGS = 6;

function ExperienceCard({
  e,
  latest,
  index,
}: {
  e: ExperienceItem;
  latest: boolean;
  index: number;
}) {
  const { lang } = useApp();
  const c = experienceContent[lang];

  return (
    <li
      className="fade-up relative pl-9"
      style={{
        animationDelay: `${index * 70}ms`,
        animationFillMode: "backwards",
      }}
    >
      {/* Titik timeline */}
      <span
        aria-hidden
        className={`absolute left-0 top-6 h-3 w-3 rounded-full border-2 border-accent ${
          latest ? "bg-accent ring-4 ring-accent/20" : "bg-bg"
        }`}
      />

      <article className="group rounded-2xl border border-line bg-surface p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        <div className="flex flex-wrap items-center gap-2">
          <LangStack>
            {(l) => (
              <span className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-ink">
                {e.period[l]}
              </span>
            )}
          </LangStack>
          {latest && (
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
              {c.current}
            </span>
          )}
        </div>

        <LangStack>
          {(l) => (
            <>
              <h2 className="mt-3 font-serif text-xl text-ink transition-colors group-hover:text-accent">
                {e.role[l]}
              </h2>
              <p className="mt-0.5 text-sm font-medium text-accent">{e.org}</p>
              <ul className="mt-3 space-y-2">
                {e.points[l].map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </LangStack>

        {e.tech && e.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {e.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-bg px-2.5 py-1 text-xs text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </article>
    </li>
  );
}

export default function ExperiencePage() {
  const { lang } = useApp();
  const c = experienceContent[lang];
  const [group, setGroup] = useState<Group>("work");

  const list = experiences.filter((e) => e.group === group);
  const latestId = list[0]?.id;

  const years = Array.from(new Set(committees.map((x) => x.year))).sort(
    (a, b) => b - a,
  );

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-10 md:px-8">
      <div className="mx-auto max-w-3xl md:pt-2">
        {/* Toggle Work / Social */}
        <div className="fade-up flex justify-center">
          <div
            role="tablist"
            className="relative grid w-fit grid-cols-2 rounded-full border border-line bg-surface p-1.5 shadow-sm"
          >
            {/* Indikator yang bergeser */}
            <span
              aria-hidden
              className={`absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-accent shadow transition-transform duration-300 ease-out motion-reduce:transition-none ${
                group === "social" ? "translate-x-full" : ""
              }`}
            />
            {GROUPS.map((g) => (
              <button
                key={g}
                role="tab"
                aria-selected={group === g}
                onClick={() => setGroup(g)}
                className={`relative z-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  group === g ? "text-white" : "text-muted hover:text-ink"
                }`}
              >
                <Icon d={GROUP_ICON[g]} className="h-4 w-4" />
                {c.groups[g]}
              </button>
            ))}
          </div>
        </div>

        <header className="fade-up mt-8 text-center">
          <LangStack>
            {(l) => (
              <>
                <p className="text-sm font-medium uppercase tracking-wide text-accent">
                  {experienceContent[l].eyebrow}
                </p>
                <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">
                  {experienceContent[l].title}
                </h1>
              </>
            )}
          </LangStack>
        </header>

        {/* Timeline: key={group} supaya animasi fade-up diulang saat tab berganti */}
        <ol key={group} className="relative mt-10 space-y-6">
          <span
            aria-hidden
            className="absolute bottom-6 left-[5px] top-6 w-px bg-line"
          />
          {list.map((e, i) => (
            <ExperienceCard
              key={e.id}
              e={e}
              latest={e.id === latestId}
              index={i}
            />
          ))}
        </ol>

        {/* Kepanitiaan (hanya tab Social) */}
        {group === "social" && committees.length > 0 && (
          <section key="committees" className="fade-up mt-14">
            <LangStack>
              {(l) => (
                <h2 className="text-center font-serif text-2xl text-ink">
                  {experienceContent[l].committeesTitle}
                </h2>
              )}
            </LangStack>
            <div className="mt-6 space-y-6">
              {years.map((y) => (
                <div key={y}>
                  <p className="mb-3 text-sm font-medium text-accent">{y}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {committees
                      .filter((x) => x.year === y)
                      .map((x) => (
                        <div
                          key={x.id}
                          className={`rounded-xl border bg-surface p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/40 motion-reduce:hover:translate-y-0 ${
                            x.lead ? "border-accent/40" : "border-line"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium text-ink">
                              {x.event}
                            </p>
                            {x.lead && (
                              <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                                {c.lead}
                              </span>
                            )}
                          </div>
                          <LangStack>
                            {(l) => (
                              <p className="mt-1 text-xs leading-relaxed text-muted">
                                {x.role[l]}
                                {x.org ? ` · ${x.org}` : ""}
                              </p>
                            )}
                          </LangStack>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}