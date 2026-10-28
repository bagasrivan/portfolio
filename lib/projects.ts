import type { Lang } from "@/lib/content";

export type Category = "Software Engineering" | "AI/ML/Data" | "Research";

export type Project = {
  slug: string; 
  title: string;
  year: number;
  category: Category;
  image: string; 
  tech: string[];
  liveUrl?: string; 
  repoUrl?: string; 
  confidential?: boolean; 
  text: Record<
    Lang,
    {
      description: string; 
      summary: string; 
      results?: string; 
      learnings?: string; 
    }
  >;
};

export const projects: Project[] = [
  {
    slug: "sibisa",
    title: "SiBisa",
    year: 2025,
    category: "Software Engineering",
    image: "/projects/sibisa.jpg",
    tech: ["Flutter", "Dart", "Provider", "REST API"],
    text: {
      en: {
        description:
          "Fullstack inventory and monitoring app built with Flutter for Android and iOS, with REST API integration.",
        summary:
          "SiBisa is a fullstack inventory and monitoring application built during an internship at BMKG Syamsudin Noor. It runs on Android and iOS with Flutter, integrates with a REST API, and uses Provider for state management.",
      },
      id: {
        description:
          "Aplikasi inventaris dan monitoring fullstack berbasis Flutter untuk Android dan iOS, dengan integrasi REST API.",
        summary:
          "SiBisa adalah aplikasi inventaris dan monitoring fullstack yang dibuat saat magang di BMKG Syamsudin Noor. Aplikasi ini berjalan di Android dan iOS dengan Flutter, terintegrasi dengan REST API, dan memakai Provider untuk state management.",
      },
    },
  },
  {
    slug: "hairlab",
    title: "HairLab",
    year: 2024,
    category: "AI/ML/Data",
    image: "/projects/hairlab.jpg",
    tech: ["Machine Learning", "Cloud", "REST API"],
    text: {
      en: {
        description:
          "Bangkit capstone project that detects face shape and recommends matching hairstyles.",
        summary:
          "HairLab detects the user’s face shape and recommends matching hairstyles. As the backend developer, I connected the mobile app to cloud and machine learning APIs.",
      },
      id: {
        description:
          "Proyek capstone Bangkit yang mendeteksi bentuk wajah dan merekomendasikan gaya rambut yang cocok.",
        summary:
          "HairLab mendeteksi bentuk wajah pengguna dan merekomendasikan gaya rambut yang cocok. Sebagai backend developer, saya menghubungkan aplikasi mobile dengan API cloud dan machine learning.",
      },
    },
  },
];

export const projectsContent: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    all: string;
    categories: Record<Category, string>;
    more: string;
    visit: string;
    code: string;
    back: string;
    summary: string;
    tech: string;
    results: string;
    learnings: string;
    confidential: string;
    notFound: string;
    empty: string;
  }
> = {
  en: {
    eyebrow: "Projects",
    title: "All Projects",
    all: "All",
    categories: { "Software Engineering": "Mobile", "AI/ML/Data": "AI & ML", Research: "Research" },
    more: "Read more",
    visit: "Visit page",
    code: "Source code",
    back: "Projects",
    summary: "Summary",
    tech: "Technologies",
    results: "Results",
    learnings: "Challenges and Learnings",
    confidential: "Confidential project · Preview unavailable",
    notFound: "Project not found",
    empty: "No projects in this category yet.",
  },
  id: {
    eyebrow: "Project",
    title: "Semua Project",
    all: "Semua",
    categories: { "Software Engineering": "Mobile", "AI/ML/Data": "AI & ML", Research: "Riset" },
    more: "Selengkapnya",
    visit: "Lihat halaman",
    code: "Kode sumber",
    back: "Project",
    summary: "Ringkasan",
    tech: "Teknologi",
    results: "Hasil",
    learnings: "Tantangan dan Pembelajaran",
    confidential: "Project rahasia · Pratinjau tidak tersedia",
    notFound: "Project tidak ditemukan",
    empty: "Belum ada project di kategori ini.",
  },
};