"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Avatar } from "@/components/ui";
import { topics } from "@/lib/content";
import { useApp } from "@/components/AppShell";

// Mengubah email dan alamat web di dalam teks menjadi link yang bisa diklik
const linkPattern =
  /([\w.+-]+@[\w-]+\.[\w.]+|(?:https?:\/\/)?(?:[\w-]+\.)+[a-z]{2,}\/[\w\-./]*)/gi;

function linkify(text: string) {
  return text.split(linkPattern).map((part, i) => {
    if (i % 2 === 0) return part; // bagian teks biasa
    const href = part.includes("@")
      ? `mailto:${part}`
      : part.startsWith("http")
        ? part
        : `https://${part}`;
    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-2 hover:opacity-80"
      >
        {part}
      </a>
    );
  });
}

// Menampilkan teks huruf demi huruf (efek mengetik)
function TypingText({
  text,
  animate,
  onTick,
  onDone,
}: {
  text: string;
  animate: boolean;
  onTick: () => void;
  onDone: () => void;
}) {
  const [count, setCount] = useState(0);

  // Tambah 2 huruf setiap 15 milidetik sampai teks habis
  useEffect(() => {
    if (!animate || count >= text.length) return;
    const id = setTimeout(() => setCount((c) => c + 2), 15);
    return () => clearTimeout(id);
  }, [count, text, animate]);

  // Setiap ada huruf baru, minta layar scroll ke bawah
  useEffect(() => {
    onTick();
  }, [count, onTick]);

  // Setelah selesai, beri tahu induk supaya tidak diketik ulang
  useEffect(() => {
    if (animate && count >= text.length) onDone();
  }, [animate, count, text, onDone]);

  return <>{linkify(animate ? text.slice(0, count) : text)}</>;
}

export default function Home() {
  const { t, messages, thinking, typedCount, ask, markTyped } = useApp();
  const [input, setInput] = useState("");
  const hasMessages = messages.length > 0;

  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking, scrollToBottom]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    ask(text);
    setInput("");
  }

  return (
    <div
      className={`flex min-h-0 flex-1 flex-col ${
        hasMessages ? "" : "justify-center pb-16"
      }`}
    >
      {hasMessages ? (
        <div key="chat" className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {messages.map((m, i) => {
              if (m.role === "user") {
                return (
                  <div
                    key={i}
                    className="fade-up ml-auto max-w-[80%] rounded-2xl bg-soft px-4 py-2 text-ink"
                  >
                    {m.text}
                  </div>
                );
              }
              const botText =
                m.topic === "fallback" ? t.fallback : t.answers[m.topic];
              return (
                <div
                  key={i}
                  className="fade-up flex max-w-[85%] items-start gap-3"
                >
                  <Avatar className="mt-1 h-7 w-7" />
                  <div className="whitespace-pre-line py-1 leading-relaxed text-ink">
                    <TypingText
                      key={botText}
                      text={botText}
                      animate={i === messages.length - 1 && i >= typedCount}
                      onTick={scrollToBottom}
                      onDone={() => markTyped(i)}
                    />
                  </div>
                </div>
              );
            })}

            {thinking && (
              <div className="fade-up flex items-center gap-3">
                <Avatar className="h-7 w-7" />
                <div className="flex gap-1 py-3">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      ) : (
        <div
          key="hello"
          className="fade-up flex flex-col items-center px-4 text-center"
        >
          <Avatar className="mb-4 h-24 w-24" />
          <h1 className="font-serif text-4xl text-ink">{t.greeting}</h1>
          <p className="mt-2 text-muted">{t.subtitle}</p>
        </div>
      )}

      {/* Kotak input (posisinya tetap di pohon yang sama, jadi fokus tidak hilang) */}
      <form
        onSubmit={handleSend}
        className={`mx-auto w-full px-4 ${
          hasMessages ? "max-w-3xl pb-6" : "mt-8 max-w-2xl"
        }`}
      >
        <div className="flex items-center gap-2 rounded-2xl border border-line bg-surface p-3 shadow-sm transition-colors focus-within:border-accent">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent px-2 text-ink outline-none placeholder:text-muted"
            placeholder={t.placeholder}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label={t.send}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white transition hover:opacity-90 disabled:opacity-40"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </form>

      {/* Chip pertanyaan cepat (hanya di layar sapaan) */}
      {!hasMessages && (
        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-2 px-4">
          {topics.map((tp) => (
            <button
              key={tp}
              onClick={() => ask(t.questions[tp], tp)}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition hover:-translate-y-0.5 hover:bg-soft hover:shadow-sm"
            >
              {t.questions[tp]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}