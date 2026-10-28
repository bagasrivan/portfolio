"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useApp } from "@/components/AppShell";
import LangStack from "@/components/LangStack";
import { Icon, icons } from "@/components/ui";
import {
  certificates,
  skills,
  skillsContent,
  type Certificate,
  type Level,
  type Skill,
} from "@/lib/skills";

type Tab = "tools" | "certification";

// Ikon award (lingkaran + pita) untuk tab Certification
const awardIcon =
  "M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526";

const tabIcons: Record<Tab, string> = {
  tools: icons.skills,
  certification: awardIcon,
};

// Offset vertikal tetap agar chip terlihat "bertebaran" tapi tidak acak tiap render
const offsets = [0, 16, 6, 24, 10, 20, 2, 14];

function SkillIcon({ skill }: { skill: Skill }) {
  if (!skill.icon) return <Icon d={icons.skills} className="h-4 w-4" />;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d={skill.icon.path} />
    </svg>
  );
}

/* ---------- Switcher ---------- */
function TabSwitcher({
  tab,
  setTab,
  labels,
}: {
  tab: Tab;
  setTab: (t: Tab) => void;
  labels: Record<Tab, string>;
}) {
  const tabs: Tab[] = ["tools", "certification"];

  return (
    <div
      role="tablist"
      className="sticky top-2 z-10 mx-auto grid w-80 max-w-full grid-cols-2 rounded-full border border-line bg-surface p-1 shadow-md"
    >
      {/* Penanda yang bergeser antar tab */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-accent shadow-sm transition-transform duration-300 ease-out motion-reduce:transition-none ${
          tab === "certification" ? "translate-x-full" : ""
        }`}
      />
      {tabs.map((k) => (
        <button
          key={k}
          role="tab"
          aria-selected={tab === k}
          onClick={() => setTab(k)}
          className={`relative z-10 flex items-center justify-center gap-2 rounded-full py-2 text-sm font-medium transition-colors duration-300 ${
            tab === k ? "text-white" : "text-muted hover:text-ink"
          }`}
        >
          <Icon d={tabIcons[k]} className="h-4 w-4" />
          {labels[k]}
        </button>
      ))}
    </div>
  );
}

/* ---------- Tab 1: Tools ---------- */
function ToolsPanel() {
  const [filter, setFilter] = useState<Level | null>(null);
  const toggle = (lv: Level) => setFilter((f) => (f === lv ? null : lv));

  return (
    <>
      {/* Judul hanya tampil di tab Tools */}
      <header className="mb-8 text-center">
        <LangStack>
          {(l) => (
            <>
              <p className="text-sm font-medium uppercase tracking-wide text-accent">
                {skillsContent[l].eyebrow}
              </p>
              <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">
                {skillsContent[l].title}
              </h1>
            </>
          )}
        </LangStack>
      </header>

      <section className="relative w-full rounded-[2rem] border border-line bg-surface px-5 py-10 text-center shadow-sm md:rounded-[3rem_5rem_3.5rem_6rem] md:px-12 md:py-14">
        <LangStack>
          {(l) => {
            const c = skillsContent[l];
            return (
              <>
                <div className="flex items-center justify-center gap-2">
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
                      <SkillIcon skill={s} />
                    </span>
                    {s.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

/* ---------- Tab 2: Certification ---------- */
function CertificationPanel() {
  const [active, setActive] = useState<Certificate | null>(null);

  // Tutup lightbox dengan tombol Esc
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <li key={c.id}>
            <button
              onClick={() => setActive(c)}
              aria-label={c.title}
              className="group block w-full"
            >
              <span className="relative block aspect-[14/10] overflow-hidden rounded-xl border border-line bg-surface shadow-sm transition duration-200 ease-out group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-lg motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fade-up fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-black/75 p-4"
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <Icon d="M18 6 6 18M6 6l12 12" className="h-5 w-5" />
          </button>
          <div className="relative h-[75vh] w-full max-w-5xl">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Halaman ---------- */
export default function SkillsPage() {
  const { lang } = useApp();
  const [tab, setTab] = useState<Tab>("tools");
  const c = skillsContent[lang];

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-8 md:px-8 md:pb-6">
      <div className="mx-auto max-w-5xl md:pt-2">
        <TabSwitcher
          tab={tab}
          setTab={setTab}
          labels={{ tools: c.tools, certification: c.certification }}
        />

        <div key={tab} className="fade-up mt-8">
          {tab === "tools" ? <ToolsPanel /> : <CertificationPanel />}
        </div>
      </div>
    </div>
  );
}
