"use client";

import { useApp } from "@/components/AppShell";
import { Avatar, Icon, icons } from "@/components/ui";
import { contactContent, contactLinks } from "@/lib/contact";

export default function ContactPage() {
  const { lang } = useApp();
  const c = contactContent[lang];

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-8 md:px-8 md:pb-6">
      <section className="fade-up mx-auto flex max-w-2xl flex-col justify-center text-center md:min-h-full">
        <Avatar className="mx-auto mb-6 h-28 w-28 border-2 border-line shadow-lg md:h-32 md:w-32" />
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          {c.eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">
          {c.title}
        </h1>
        <p className="mt-6 leading-relaxed text-ink">{c.description}</p>

        <ul className="mt-8 flex items-center justify-center gap-4">
          {contactLinks.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={`${l.label}: ${l.value}`}
                title={l.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-accent transition duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <Icon d={icons[l.icon]} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
