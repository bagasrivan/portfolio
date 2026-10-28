"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  content,
  keywords,
  topics,
  type Lang,
  type Message,
  type Topic,
} from "@/lib/content";
import { Avatar, Icon, icons } from "@/components/ui";

type AppContextValue = {
  lang: Lang;
  t: (typeof content)[Lang];
  messages: Message[];
  thinking: boolean;
  typedCount: number;
  ask: (text: string, topic?: Topic) => void;
  markTyped: (index: number) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp harus dipakai di dalam <AppShell>");
  return ctx;
}
const pageTopics: Topic[] = ["about", "projects", "skills", "contact"];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [thinking, setThinking] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // sidebar di HP
  const [collapsed, setCollapsed] = useState(false); // sidebar di desktop
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const t = content[lang];

  // Samakan atribut lang di <html> dengan bahasa yang dipilih
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Batalkan timer yang masih berjalan kalau halaman ditutup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Menandai jawaban yang sudah selesai diketik, supaya tidak diketik ulang
  // saat kembali ke halaman chat
  const markTyped = useCallback((index: number) => {
    setTypedCount((c) => Math.max(c, index + 1));
  }, []);

  function ask(text: string, topic?: Topic) {
    if (thinking) return;
    setMenuOpen(false);
    if (pathname !== "/") router.push("/");
    const q = text.toLowerCase();
    const found =
      topic ?? topics.find((tp) => keywords[tp].some((k) => q.includes(k)));
    setActiveTopic(found ?? null);
    setMessages((prev) => [...prev, { role: "user", text }]);
    setThinking(true);
    timerRef.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", topic: found ?? "fallback" },
      ]);
      setThinking(false);
    }, 700);
  }

  function newChat() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessages([]);
    setActiveTopic(null);
    setThinking(false);
    setTypedCount(0);
    setMenuOpen(false);
    if (pathname !== "/") router.push("/");
  }

  // Desktop: lipat/buka sidebar. HP: tampilkan/sembunyikan sidebar melayang
  function toggleSidebar() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setCollapsed((c) => !c);
    } else {
      setMenuOpen((o) => !o);
    }
  }

  // Ganti tema dengan transisi halus, simpan pilihannya di browser
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.classList.add("theme-transition");
    root.dataset.theme = next;
    window.setTimeout(() => root.classList.remove("theme-transition"), 350);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const itemBase =
    "flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors";
  const itemActive = "bg-soft font-medium text-accent";
  const itemIdle = "text-ink hover:bg-soft";

  return (
    <AppContext.Provider
      value={{ lang, t, messages, thinking, typedCount, ask, markTyped }}
    >
      <div className="flex h-dvh bg-bg">
        {/* Lapisan gelap di belakang sidebar (hanya HP) */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-10 bg-black/30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 w-64 shrink-0 overflow-hidden border-r border-line bg-sidebar transition-all duration-300 md:static md:translate-x-0 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } ${collapsed ? "md:w-0 md:border-r-0" : "md:w-64"}`}
        >
          <div className="flex h-full w-64 flex-col p-4">
            {/* Profil singkat (klik untuk ke beranda) + tombol tutup */}
            <div className="mb-5 flex items-center gap-3">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex min-w-0 flex-1 items-center gap-3"
              >
                <Avatar className="h-10 w-10" />
                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-serif text-base text-ink">
                    Bagaskara
                  </h2>
                  <p className="truncate text-xs text-muted">{t.role}</p>
                </div>
              </Link>
              <button
                onClick={toggleSidebar}
                aria-label="Close sidebar"
                className="rounded-lg p-2 text-muted transition-colors hover:bg-soft hover:text-ink"
              >
                <Icon d={icons.panelClose} />
              </button>
            </div>

            {/* Percakapan baru */}
            <button
              onClick={newChat}
              className="mb-4 flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink transition-colors hover:bg-soft"
            >
              <Icon d={icons.plus} />
              {t.newChat}
            </button>

            {/* Menu: Membuka halaman sendiri */}
            <nav className="flex flex-col gap-1">
              {topics.map((tp) => {
                if (pageTopics.includes(tp)) {
                  const href = `/${tp}`;
                  const active = pathname.startsWith(href);
                  return (
                    <Link
                      key={tp}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`${itemBase} ${active ? itemActive : itemIdle}`}
                    >
                      <Icon d={icons[tp]} />
                      {t.labels[tp]}
                    </Link>
                  );
                }
                const active = pathname === "/" && activeTopic === tp;
                return (
                  <button
                    key={tp}
                    onClick={() => ask(t.questions[tp], tp)}
                    className={`${itemBase} ${active ? itemActive : itemIdle}`}
                  >
                    <Icon d={icons[tp]} />
                    {t.labels[tp]}
                  </button>
                );
              })}
            </nav>

            {/* Tombol unduh CV */}
            <a
              href="/cv.pdf"
              download
              className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink transition-colors hover:bg-soft"
            >
              <Icon d={icons.download} />
              {t.cv}
            </a>

            {/* Pilihan bahasa */}
            <div className="mt-3 flex rounded-lg bg-line/60 p-1 text-sm">
              {(["en", "id"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`flex-1 rounded-md py-1 transition-colors ${
                    lang === l
                      ? "bg-surface text-ink shadow-sm"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Area utama */}
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {/* Bilah atas: buka sidebar (kiri) dan ganti tema (kanan) */}
          <div className="flex items-center justify-between p-3">
            <button
              onClick={toggleSidebar}
              aria-label="Open sidebar"
              className={`rounded-lg p-2 text-ink transition-colors hover:bg-soft ${
                collapsed ? "" : "md:invisible"
              }`}
            >
              <Icon d={icons.menu} className="h-5 w-5 md:hidden" />
              <Icon d={icons.panelOpen} className="hidden h-5 w-5 md:block" />
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-ink transition-colors hover:bg-soft"
            >
              <Icon d={icons.moon} className="h-5 w-5 dark:hidden" />
              <Icon d={icons.sun} className="hidden h-5 w-5 dark:block" />
            </button>
          </div>

          {/* Isi halaman */}
          {children}
        </main>
      </div>
    </AppContext.Provider>
  );
}
