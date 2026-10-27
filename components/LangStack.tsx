"use client";

import type { ReactNode } from "react";
import { useApp } from "@/components/AppShell";
import type { Lang } from "@/lib/content";

const LANGS: Lang[] = ["en", "id"];

// Merender kedua bahasa di sel grid yang sama, hanya satu yang terlihat.
export default function LangStack({
  children,
}: {
  children: (lang: Lang) => ReactNode;
}) {
  const { lang } = useApp();

  return (
    <div className="grid">
      {LANGS.map((l) => (
        <div
          key={l}
          className={`col-start-1 row-start-1 ${l === lang ? "" : "invisible"}`}
        >
          {children(l)}
        </div>
      ))}
    </div>
  );
}