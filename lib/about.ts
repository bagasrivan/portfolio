import type { Lang } from "@/lib/content";

export type Photo = {
  src: string;
  alt: string;
  caption?: Record<Lang, string>; // opsional
};

// Ganti/tambah/hapus baris sesuai foto di public/photos/
// Contoh dengan keterangan:
// { src: "/photos/photo-1.jpg", alt: "Bagaskara", caption: { en: "...", id: "..." } },
export const photos: Photo[] = [
  { src: "/photos/avatar1.jpg", alt: "Bagaskara" },
  { src: "/photos/avatar2.jpg", alt: "Bagaskara" },
  { src: "/photos/avatar3.jpg", alt: "Bagaskara" },
  { src: "/photos/avatar4.jpg", alt: "Bagaskara" },
];

type AboutText = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
  cta: string;
  hint: string;
};

export const aboutContent: Record<Lang, AboutText> = {
  en: {
    eyebrow: "About me",
    title: "Hi, I’m Bagaskara",
    paragraphs: [
      "I’m a Computer Science graduate (Data Science concentration) from Universitas Lambung Mangkurat, class of 2022–2026, with a GPA of 3.64/4.00.",
      "My focus is AI and machine learning, with a background in mobile development. I’ve published a SINTA 2 journal article on deep learning for image classification, and I’m aiming for a career as an AI Engineer.",
      "I’m based in Bekasi, Indonesia, and open to AI Engineer opportunities. Feel free to ask my chat assistant about my projects, experience, and skills.",
    ],
    facts: [
      {
        label: "Education",
        value: "Computer Science (Data Science), Universitas Lambung Mangkurat",
      },
      { label: "Focus", value: "AI/ML · Mobile Development" },
      { label: "Based in", value: "Bekasi, Indonesia" },
      { label: "GPA", value: "3.64 / 4.00" },
    ],
    cta: "Ask me in chat",
    hint: "Swipe to see more photos",
  },
  id: {
    eyebrow: "Tentang saya",
    title: "Halo, aku Bagaskara",
    paragraphs: [
      "Aku lulusan S1 Ilmu Komputer (konsentrasi Data Science) Universitas Lambung Mangkurat angkatan 2022–2026, dengan IPK 3,64/4,00.",
      "Fokusku di AI dan machine learning, dengan latar belakang pengembangan aplikasi mobile. Aku sudah menerbitkan artikel jurnal terakreditasi SINTA 2 tentang deep learning untuk klasifikasi gambar, dan bercita-cita berkarier sebagai AI Engineer.",
      "Aku tinggal di Bekasi dan terbuka untuk peluang sebagai AI Engineer. Silakan tanya asisten chat-ku soal project, pengalaman, dan skill.",
    ],
    facts: [
      {
        label: "Pendidikan",
        value: "S1 Ilmu Komputer (Data Science), Universitas Lambung Mangkurat",
      },
      { label: "Fokus", value: "AI/ML · Pengembangan Mobile" },
      { label: "Domisili", value: "Bekasi, Indonesia" },
      { label: "IPK", value: "3,64 / 4,00" },
    ],
    cta: "Tanya lewat chat",
    hint: "Geser untuk melihat foto lainnya",
  },
};
