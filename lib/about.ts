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
      "Computer Science graduate passionate about Software Development and Artificial Intelligence. Enjoys exploring new technologies and building applications, ranging from AI-powered solutions to mobile and web applications. Experienced in Machine Learning, Deep Learning, and Large Language Models (LLMs), along with mobile and web development, API integration, and Software Engineering. Technical skills include Python, TensorFlow, PyTorch, Langflow, Flutter, Dart, Java, JavaScript, React.js, Next.js, and more.",
    ],
    education: {
      label: "Education",
      degree: "Bachelor of Computer Science",
      school: "Universitas Lambung Mangkurat",
      gpaLabel: "GPA",
      gpa: "3.64 / 4.00",
      logo: "/photos/ulm.jpeg",
    },
    location: { label: "Based in", city: "Banjarbaru", country: "Indonesia" },
    cta: "Ask me in chat",
    hint: "Swipe to see more photos",
  },
  id: {
    eyebrow: "Tentang saya",
    title: "Halo, saya Bagaskara",
    paragraphs: [
      "Lulusan Ilmu Komputer dengan ketertarikan pada bidang Software Development dan Artificial Intelligence. Aktif mengeksplorasi teknologi baru dan mengembangkan berbagai aplikasi, mulai dari solusi berbasis AI hingga aplikasi mobile dan web. Memiliki pengalaman di bidang Machine Learning, Deep Learning, dan Large Language Models (LLMs), serta pengembangan aplikasi mobile dan web, integrasi API, dan rekayasa perangkat lunak. Terbiasa menggunakan berbagai teknologi seperti Python, TensorFlow, PyTorch, Langflow, Flutter, Dart, Java, JavaScript, React.js, Next.js, dan lainnya.",
    ],
    education: {
      label: "Pendidikan",
      degree: "S1 Ilmu Komputer",
      school: "Universitas Lambung Mangkurat",
      gpaLabel: "IPK",
      gpa: "3,64 / 4,00",
      logo: "/photos/ulm.jpeg",
    },
    location: { label: "Domisili", city: "Banjarbaru", country: "Indonesia" },
    cta: "Tanya lewat chat",
    hint: "Geser untuk melihat foto lainnya",
  },
};
