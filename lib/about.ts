import type { Lang } from "@/lib/content";

export type Photo = {
  src: string;
  alt: string;
  caption?: Record<Lang, string>; // opsional
};

// Ganti/tambah/hapus baris sesuai foto di public/photos/
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
  education: {
    label: string;
    degree: string;
    school: string;
    gpaLabel: string;
    gpa: string;
    logo: string;
  };
  location: { label: string; city: string; country: string };
  cta: string;
  hint: string;
};

export const aboutContent: Record<Lang, AboutText> = {
  en: {
    eyebrow: "About me",
    title: "Hi, I’m Bagaskara",
    paragraphs: [
      "I'm a Computer Science graduate specializing in Data Science, with a strong interest in Artificial Intelligence, Machine Learning, Deep Learning, and Large Language Models (LLMs). My work combines machine learning research with practical software development, including mobile applications and API integration. I have published SINTA 2 research and have hands-on experience with Python, TensorFlow, PyTorch, Langflow, LLMs, Next.js, React.js, Flutter and other technologies. I'm passionate about building intelligent, reliable, and impactful technology solutions, with a goal of growing as an AI Engineer and turning research and ideas into real-world applications.",
    ],
    education: {
      label: "Education",
      degree: "Bachelor of Computer Science",
      school: "Universitas Lambung Mangkurat",
      gpaLabel: "GPA",
      gpa: "3.64 / 4.00",
      logo: "/photos/ulm.jpeg",
    },
    location: { label: "Based in", city: "Bekasi", country: "Indonesia" },
    cta: "Ask me in chat",
    hint: "Swipe to see more photos",
  },
  id: {
    eyebrow: "Tentang saya",
    title: "Halo, saya Bagaskara",
    paragraphs: [
      "Lulusan Ilmu Komputer dengan spesialisasi Data Science, dengan ketertarikan besar pada Artificial Intelligence, Machine Learning, Deep Learning, dan Large Language Models (LLM). Terbiasa memadukan riset machine learning dengan pengembangan perangkat lunak praktis, termasuk aplikasi mobile dan integrasi API. Pernah menerbitkan riset terindeks SINTA 2 dan berpengalaman langsung dengan Python, TensorFlow, PyTorch, Langflow, LLM, Next.js, React.js, Flutter, serta teknologi lainnya. Berantusias untuk membangun solusi teknologi yang cerdas, andal, dan berdampak, dengan tujuan mengembangkan karis sebagai AI Engineer dan mengubah riset serta ide menjadi solusi nyata.",
    ],
    education: {
      label: "Pendidikan",
      degree: "S1 Ilmu Komputer",
      school: "Universitas Lambung Mangkurat",
      gpaLabel: "IPK",
      gpa: "3,64 / 4,00",
      logo: "/photos/ulm.jpeg",
    },
    location: { label: "Domisili", city: "Bekasi", country: "Indonesia" },
    cta: "Tanya lewat chat",
    hint: "Geser untuk melihat foto lainnya",
  },
};
