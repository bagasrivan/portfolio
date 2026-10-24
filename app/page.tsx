"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Topic = "about" | "projects" | "experience" | "skills" | "contact";
const topics: Topic[] = [
  "about",
  "projects",
  "experience",
  "skills",
  "contact",
];

// Kata kunci untuk mencocokkan pertanyaan yang diketik bebas
const keywords: Record<Topic, string[]> = {
  about: [
    "about",
    "who",
    "siapa",
    "tentang",
    "perkenalan",
    "introduce",
    "education",
    "pendidikan",
    "kuliah",
    "study",
    "gpa",
    "ipk",
  ],
  projects: [
    "project",
    "proyek",
    "karya",
    "built",
    "aplikasi",
    "app",
    "thesis",
    "skripsi",
    "journal",
    "jurnal",
    "research",
    "riset",
  ],
  experience: [
    "experience",
    "pengalaman",
    "work",
    "kerja",
    "intern",
    "magang",
    "career",
    "himakom",
    "organisasi",
    "organization",
  ],
  skills: [
    "skill",
    "keahlian",
    "tech",
    "stack",
    "programming",
    "python",
    "flutter",
    "certificate",
    "sertifikat",
    "tools",
    "database",
  ],
  contact: [
    "contact",
    "kontak",
    "email",
    "hire",
    "hubungi",
    "reach",
    "github",
    "linkedin",
  ],
};

const content = {
  en: {
    greeting: "Hi, I’m Bagas 👋",
    subtitle: "Ask me anything about my projects and experience.",
    placeholder: "Ask me anything...",
    send: "Send",
    cv: "Download CV",
    role: "AI Engineer",
    newChat: "New chat",
    labels: {
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    questions: {
      about: "Who are you?",
      projects: "Tell me about your projects",
      experience: "What’s your experience?",
      skills: "What are your skills?",
      contact: "How can I contact you?",
    },
    answers: {
      about:
        "I’m Bagaskara Ridho Vandio, a Computer Science graduate (Data Science concentration) from Universitas Lambung Mangkurat, 2022–2026, with a GPA of 3.64/4.00. I’m aiming for a career as an AI Engineer, and I’ve published a SINTA 2 journal article on deep learning for image classification. I’m based in Bekasi, Indonesia.",
      projects:
        "• SiBisa: a fullstack inventory and monitoring app built with Flutter (Android and iOS) during my internship at BMKG Syamsudin Noor, with REST API integration and Provider state management.\n• HairLab: my Bangkit capstone project that detects face shape and recommends hairstyles. I was the backend developer, connecting the app to cloud and machine learning APIs.\n• Research: “Evaluating CNN Robustness for Face Mask Classification under Environmental Variations”, published in JESSI (SINTA 2). My thesis compares ResNet50 and MobileNetV3 using transfer learning.",
      experience:
        "• Data Labeling, Universitas Lambung Mangkurat, freelance (May 2026): annotated an oil palm tree image dataset with AnyLabeling and reviewed labels to keep the training data clean.\n• Mobile Developer Intern, BMKG Syamsudin Noor (Feb–May 2025): built SiBisa with Flutter.\n• Mobile Development Cohort, Bangkit Academy (Sep–Dec 2024): backend developer for the HairLab capstone.\n• IT Support Intern, CV Iqromaya Global Mandiri (Nov–Dec 2023): built a landing page to help South Kalimantan MSMEs with digital marketing.\n• HIMAKOM, Cadre Division (May–Dec 2024): head organizer of a training event with 98% attendance.",
      skills:
        "Programming: Python, Java, JavaScript, SQL, Kotlin, Dart.\nFrameworks and libraries: Flutter, Pandas, NumPy, Scikit-learn, TensorFlow/Keras. Database: MySQL.\nDelivery: Git, GitHub, REST API integration, model deployment and evaluation.\nTools: VS Code, Android Studio, Jupyter Notebook, Google Colab, RunPod, Postman.\nCertificates include Introduction to Large Language Models, Applied Machine Learning for Android Developer, and AWS Cloud Practitioner Essentials.\nLanguages: Indonesian, English.",
      contact:
        "Email: bagaskaravandio@gmail.com\nGitHub: github.com/bagasrivan\nI’m open to AI Engineer opportunities.",
    },
    fallback:
      "I’m not sure about that yet. Try asking about my projects, experience, skills, or how to contact me.",
  },
  id: {
    greeting: "Halo, aku Bagas 👋",
    subtitle: "Tanya apa saja soal project dan pengalamanku.",
    placeholder: "Tanyakan sesuatu...",
    send: "Kirim",
    cv: "Unduh CV",
    role: "AI Engineer",
    newChat: "Percakapan baru",
    labels: {
      about: "Tentang Saya",
      projects: "Project",
      experience: "Pengalaman",
      skills: "Skill",
      contact: "Kontak",
    },
    questions: {
      about: "Kamu siapa?",
      projects: "Ceritakan project-mu",
      experience: "Apa saja pengalamanmu?",
      skills: "Apa saja skill-mu?",
      contact: "Bagaimana cara menghubungimu?",
    },
    answers: {
      about:
        "Aku Bagaskara Ridho Vandio, lulusan S1 Ilmu Komputer (konsentrasi Data Science) Universitas Lambung Mangkurat angkatan 2022–2026, dengan IPK 3,64/4,00. Aku bercita-cita berkarier sebagai AI Engineer, dan sudah menerbitkan artikel jurnal terakreditasi SINTA 2 tentang deep learning untuk klasifikasi gambar. Aku tinggal di Bekasi.",
      projects:
        "• SiBisa: aplikasi inventaris dan monitoring fullstack berbasis Flutter (Android dan iOS) yang kubuat saat magang di BMKG Syamsudin Noor, dengan integrasi REST API dan state management Provider.\n• HairLab: proyek capstone Bangkit yang mendeteksi bentuk wajah dan merekomendasikan gaya rambut. Aku backend developer-nya, menghubungkan aplikasi dengan API cloud dan machine learning.\n• Riset: “Evaluating CNN Robustness for Face Mask Classification under Environmental Variations”, terbit di JESSI (SINTA 2). Skripsiku membandingkan ResNet50 dan MobileNetV3 dengan transfer learning.",
      experience:
        "• Data Labeling, Universitas Lambung Mangkurat, freelance (Mei 2026): menganotasi dataset gambar pohon kelapa sawit dengan AnyLabeling dan mengecek ulang label agar data latih tetap bersih.\n• Mobile Developer Intern, BMKG Syamsudin Noor (Feb–Mei 2025): membangun SiBisa dengan Flutter.\n• Mobile Development Cohort, Bangkit Academy (Sep–Des 2024): backend developer proyek capstone HairLab.\n• IT Support Intern, CV Iqromaya Global Mandiri (Nov–Des 2023): membuat landing page untuk membantu UMKM Kalimantan Selatan dalam pemasaran digital.\n• HIMAKOM, Divisi Kaderisasi (Mei–Des 2024): ketua pelaksana acara pelatihan dengan tingkat kehadiran 98%.",
      skills:
        "Pemrograman: Python, Java, JavaScript, SQL, Kotlin, Dart.\nFramework dan library: Flutter, Pandas, NumPy, Scikit-learn, TensorFlow/Keras. Database: MySQL.\nDelivery: Git, GitHub, integrasi REST API, deployment dan evaluasi model.\nTools: VS Code, Android Studio, Jupyter Notebook, Google Colab, RunPod, Postman.\nSertifikat antara lain Introduction to Large Language Models, Applied Machine Learning for Android Developer, dan AWS Cloud Practitioner Essentials.\nBahasa: Indonesia, Inggris.",
      contact:
        "Email: bagaskaravandio@gmail.com\nGitHub: github.com/bagasrivan\nAku terbuka untuk peluang sebagai AI Engineer.",
    },
    fallback:
      "Aku belum tahu soal itu. Coba tanya soal project, pengalaman, skill, atau cara menghubungiku.",
  },
};

type Lang = keyof typeof content;
type Message =
  | { role: "user"; text: string }
  | { role: "bot"; topic: Topic | "fallback" };
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
        className="text-[#c96442] underline underline-offset-2 hover:opacity-80"
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
}: {
  text: string;
  animate: boolean;
  onTick: () => void;
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

  return <>{linkify(animate ? text.slice(0, count) : text)}</>;
}

const icons: Record<Topic | "plus" | "download" | "menu", string> = {
  about:
    "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  projects:
    "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  experience:
    "M4 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  skills: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  contact:
    "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 7L2 7",
  plus: "M12 5v14M5 12h14",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  menu: "M4 6h16M4 12h16M4 18h16",
};

function Icon({ d, className = "h-4 w-4" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const t = content[lang];
  const hasMessages = messages.length > 0;

  const bottomRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking, scrollToBottom]);

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

  function ask(text: string, topic?: Topic) {
    if (thinking) return;
    setMenuOpen(false);
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
    setMenuOpen(false);
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    ask(text);
    setInput("");
  }

  return (
    <div className="flex h-dvh bg-[#faf9f5]">
      {/* Lapisan gelap di belakang sidebar (hanya HP) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-[#e3e0d5] bg-[#f0eee6] p-4 transition-transform md:static md:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profil singkat */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c96442] font-serif text-lg text-white">
            B
          </div>
          <div className="min-w-0">
            <h2 className="truncate font-serif text-base text-[#29261b]">
              Bagaskara
            </h2>
            <p className="truncate text-xs text-[#6b6860]">{t.role}</p>
          </div>
        </div>

        {/* Percakapan baru */}
        <button
          onClick={newChat}
          className="mb-4 flex items-center gap-2 rounded-lg border border-[#e3e0d5] bg-white px-3 py-2 text-sm text-[#29261b] transition-colors hover:bg-[#faf9f5]"
        >
          <Icon d={icons.plus} />
          {t.newChat}
        </button>

        {/* Menu topik */}
        <nav className="flex flex-col gap-1">
          {topics.map((tp) => (
            <button
              key={tp}
              onClick={() => ask(t.questions[tp], tp)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                activeTopic === tp
                  ? "bg-white font-medium text-[#c96442] shadow-sm"
                  : "text-[#29261b] hover:bg-white/60"
              }`}
            >
              <Icon d={icons[tp]} />
              {t.labels[tp]}
            </button>
          ))}
        </nav>

        {/* Tombol unduh CV */}
        <a
          href="/cv.pdf"
          download
          className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-[#e3e0d5] bg-white px-3 py-2 text-sm text-[#29261b] transition-colors hover:bg-[#faf9f5]"
        >
          <Icon d={icons.download} />
          {t.cv}
        </a>

        {/* Pilihan bahasa */}
        <div className="mt-3 flex rounded-lg bg-[#e3e0d5]/60 p-1 text-sm">
          {(["en", "id"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`flex-1 rounded-md py-1 transition-colors ${
                lang === l
                  ? "bg-white text-[#29261b] shadow-sm"
                  : "text-[#6b6860] hover:text-[#29261b]"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </aside>

      {/* Area utama */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Tombol menu (hanya HP) */}
        <div className="flex items-center p-3 md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="rounded-lg px-3 py-2 text-[#29261b] hover:bg-[#f0eee6]"
          >
            <Icon d={icons.menu} className="h-5 w-5" />
          </button>
        </div>

        {/* Saat kosong: sapaan + input + chip dipusatkan. Saat ada chat: input turun ke bawah */}
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
                        className="fade-up ml-auto max-w-[80%] rounded-2xl bg-[#f0eee6] px-4 py-2 text-[#29261b]"
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
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c96442] text-xs font-semibold text-white">
                        B
                      </div>
                      <div className="whitespace-pre-line py-1 leading-relaxed text-[#29261b]">
                        <TypingText
                          key={botText}
                          text={botText}
                          animate={i === messages.length - 1}
                          onTick={scrollToBottom}
                        />
                      </div>
                    </div>
                  );
                })}

                {thinking && (
                  <div className="fade-up flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c96442] text-xs font-semibold text-white">
                      B
                    </div>
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
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c96442] font-serif text-2xl text-white">
                B
              </div>
              <h1 className="font-serif text-4xl text-[#29261b]">
                {t.greeting}
              </h1>
              <p className="mt-2 text-[#6b6860]">{t.subtitle}</p>
            </div>
          )}

          {/* Kotak input (posisinya tetap di pohon yang sama, jadi fokus tidak hilang) */}
          <form
            onSubmit={handleSend}
            className={`mx-auto w-full px-4 ${
              hasMessages ? "max-w-3xl pb-6" : "mt-8 max-w-2xl"
            }`}
          >
            <div className="flex items-center gap-2 rounded-2xl border border-[#e3e0d5] bg-white p-3 shadow-sm transition-colors focus-within:border-[#c96442]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent px-2 text-[#29261b] outline-none placeholder:text-[#6b6860]"
                placeholder={t.placeholder}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label={t.send}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c96442] text-white transition hover:opacity-90 disabled:opacity-40"
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
                  className="rounded-full border border-[#e3e0d5] bg-white px-4 py-2 text-sm text-[#29261b] transition hover:-translate-y-0.5 hover:bg-[#f0eee6] hover:shadow-sm"
                >
                  {t.questions[tp]}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
