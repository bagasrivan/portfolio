"use client";

import { useState } from "react";
import LangStack from "@/components/LangStack";
import { Icon, icons } from "@/components/ui";
import { skills, skillsContent, type Level } from "@/lib/skills";
import type { SimpleIcon } from "simple-icons";

// Offset vertikal tetap agar chip terlihat "bertebaran" tapi tidak acak tiap render
const offsets = [0, 16, 6, 24, 10, 20, 2, 14];

function SkillIcon({ icon }: { icon?: SimpleIcon }) {
  if (!icon) return <Icon d={icons.skills} className="h-4 w-4" />;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function SkillsPage() {
  const [filter, setFilter] = useState<Level | null>(null);

  const toggle = (lv: Level) => setFilter((f) => (f === lv ? null : lv));

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-8 md:px-8 md:pb-6">
      <div className="mx-auto flex max-w-5xl md:min-h-full md:items-center">
        <section className="fade-up relative w-full rounded-[2rem] border border-line bg-surface px-5 py-10 text-center shadow-sm md:rounded-[3rem_5rem_3.5rem_6rem] md:px-12 md:py-14">
          <LangStack>
            {(l) => {
              const c = skillsContent[l];
              return (
                <>
                  <p className="text-sm font-medium uppercase tracking-wide text-accent">
                    {c.eyebrow}
                  </p>
                  <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">
                    {c.title}
                  </h1>

                  <div className="mt-5 flex items-center justify-center gap-2">
                    {(["comfort", "familiar"] as Level[]).map((lv) => (
                      <button
                        key={lv}
                        onClick={() => toggle(lv)}
                        aria-pressed={filter === lv}
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm text-muted transition-colors hover:text-ink aria-pressed:bg-soft aria-pressed:text-ink"
                      >
                        <span
                          className={`h-3 w-3 rounded-full ${
                            lv === "comfort"
                              ? "bg-accent"
                              : "border-2 border-line"
                          }`}
                        />
                        {c[lv]}
                      </button>
                    ))}
                  </div>
                </>
              );
            }}
          </LangStack>

          <ul className="mt-8 flex flex-wrap items-start justify-center gap-x-4 gap-y-3">
            {skills.map((s, i) => {
              const dimmed = filter !== null && filter !== s.level;
              return (
                <li
                  key={s.name}
                  style={{ marginTop: offsets[i % offsets.length] }}
                  className={`transition duration-300 ${
                    dimmed ? "scale-95 opacity-25" : ""
                  }`}
                >
                  <div
                    className="float"
                    style={
                      {
                        "--delay": `${(i % 7) * 0.4}s`,
                        "--dur": `${4 + (i % 4)}s`,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg motion-reduce:transition-none ${
                        s.level === "comfort" ? "chip-comfort" : "chip-familiar"
                      }`}
                    >
                      <span
                        className={s.level === "comfort" ? "text-accent" : ""}
                      >
                        <SkillIcon icon={s.icon} />
                      </span>
                      {s.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
