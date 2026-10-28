import type { Lang } from "@/lib/content";

export type Category = "Software Engineering" | "AI/ML/Data" | "Publication";

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
    slug: "simpulkan",
    title: "Simpulkan",
    year: 2026,
    category: "AI/ML/Data",
    image: "/projects/Simpulkan.jpg",
    liveUrl: "https://simpulkan.streamlit.app/?",
    repoUrl: "https://github.com/bagasrivan/Simpulkan",
    tech: [
      "Streamlit",
      "Large Language Models",
      "RAG",
      "LangChain",
      "Gemini API",
    ],
    text: {
      en: {
        description:
          "A document chatbot that answers questions directly from the contents of a PDF and shows the page each answer came from.",
        summary:
          "A document chatbot that answers questions directly from the contents of a PDF and shows the page each answer came from. The problem: reading long papers, course modules, or reports takes time, and answers from general-purpose chatbots are hard to verify. Simpulkan answers only from the uploaded document and points to the exact pages behind each answer.",
      },
      id: {
        description:
          "Chatbot dokumen yang menjawab pertanyaan secara langsung berdasarkan isi file PDF dan menunjukkan halaman sumber dari setiap jawaban.",
        summary:
          "Chatbot dokumen yang menjawab pertanyaan secara langsung berdasarkan isi file PDF dan menunjukkan halaman sumber dari setiap jawaban. Permasalahan: Membaca makalah ilmiah, modul perkuliahan, atau laporan yang panjang membutuhkan waktu, sementara jawaban dari chatbot umum sering kali sulit diverifikasi. Simpulkan hanya menghasilkan jawaban berdasarkan dokumen yang diunggah dan menunjukkan nomor halaman secara spesifik sebagai sumber pendukung setiap jawaban.",
      },
    },
  },
  {
    slug: "handakbajalan",
    title: "Handak Bajalan",
    year: 2026,
    category: "AI/ML/Data",
    image: "/projects/Handak Bajalan.jpg",
    liveUrl: "https://handak-bajalan.streamlit.app/?",
    repoUrl: "https://github.com/bagasrivan/Handak-Bajalan",
    tech: ["Streamlit", "Large Language Models", "Gemini API"],
    text: {
      en: {
        description:
          "An AI-powered travel assistant that acts as a local guide for South Kalimantan, Indonesia.",
        summary:
          "An AI-powered travel assistant that acts as a local guide for South Kalimantan, Indonesia. Users can ask about nature attractions, river and cultural tourism, Banjar cuisine, and souvenirs, and get recommendations and itineraries tailored to their travel style and chosen region.",
      },
      id: {
        description:
          "Asisten perjalanan berbasis AI yang berperan sebagai pemandu wisata lokal Kalimantan Selatan, Indonesia.",
        summary:
          "Asisten perjalanan berbasis AI yang berperan sebagai pemandu wisata lokal Kalimantan Selatan, Indonesia. Pengguna dapat bertanya tentang destinasi wisata alam, wisata sungai dan budaya, kuliner khas Banjar, serta oleh-oleh khas daerah. Asisten ini memberikan rekomendasi dan menyusun rencana perjalanan yang disesuaikan dengan gaya berwisata dan wilayah pilihan pengguna.",
      },
    },
  },
  {
    slug: "jessi",
    title: "Sinta 2 Journal Publication",
    year: 2026,
    category: "Publication",
    image: "/projects/Jessi.jpg",
    liveUrl: "https://lnkd.in/ga8CC4TF",
    repoUrl: "https://github.com/bagasrivan/cnn-robustnest-mask-classification",
    tech: [
      "Computer Vision",
      "Deep Learning",
      "TensorFlow",
      "Model Evaluation",
    ],
    text: {
      en: {
        description:
          "This research explores the robustness and computational efficiency of two CNN architectures, ResNet50 and MobileNetV3-Large, for multiclass face mask classification under controlled environmental variations.",
        summary:
          "This research explores the robustness and computational efficiency of two CNN architectures, ResNet50 and MobileNetV3-Large, for multiclass face mask classification under controlled environmental variations.",
      },
      id: {
        description:
          "Penelitian ini mengeksplorasi ketahanan dan efisiensi komputasi dua arsitektur CNN, yaitu ResNet50 dan MobileNetV3-Large, dalam melakukan klasifikasi masker wajah multikelas pada berbagai variasi lingkungan yang terkontrol.",
        summary:
          "Penelitian ini mengeksplorasi ketahanan dan efisiensi komputasi dua arsitektur CNN, yaitu ResNet50 dan MobileNetV3-Large, dalam melakukan klasifikasi masker wajah multikelas pada berbagai variasi lingkungan yang terkontrol.",
      },
    },
  },
  {
    slug: "sibisa",
    title: "SiBisa",
    year: 2025,
    category: "Software Engineering",
    image: "/projects/SiBisa.jpg",
    repoUrl: "https://github.com/bagasrivan/BMKG-Inventory-App",
    tech: ["Flutter", "Dart", "REST API"],
    text: {
      en: {
        description:
          "Fullstack inventory and monitoring app built with Flutter for Android and iOS, with REST API integration.",
        summary:
          "SiBisa is a fullstack inventory and monitoring application built during an internship at BMKG Syamsudin Noor. It runs on Android and iOS with Flutter, integrates with a REST API.",
      },
      id: {
        description:
          "Aplikasi inventaris dan monitoring fullstack berbasis Flutter untuk Android dan iOS, dengan integrasi REST API.",
        summary:
          "SiBisa adalah aplikasi inventaris dan monitoring fullstack yang dibuat saat magang di BMKG Syamsudin Noor. Aplikasi ini berjalan di Android dan iOS dengan Flutter, terintegrasi dengan REST API.",
      },
    },
  },
  {
    slug: "hairlab",
    title: "HairLab",
    year: 2024,
    category: "Software Engineering",
    image: "/projects/HairLab.jpg",
    repoUrl: "https://github.com/bagasrivan/Capstone",
    tech: ["Android Studio", "Library Android", "Kotlin", "Figma", "REST API"],
    text: {
      en: {
        description:
          "Bangkit Academy capstone project that detects face shape and recommends matching hairstyles.",
        summary:
          "HairLab detects the user’s face shape and recommends matching hairstyles. As the backend android developer, I connected the mobile app to cloud APIs and machine learning models.",
      },
      id: {
        description:
          "Proyek capstone Bangkit Academy yang mendeteksi bentuk wajah dan merekomendasikan gaya rambut yang cocok.",
        summary:
          "HairLab mendeteksi bentuk wajah pengguna dan merekomendasikan gaya rambut yang cocok. Sebagai backend android developer, saya menghubungkan aplikasi mobile dengan API cloud dan model machine learning.",
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
    categories: {
      "Software Engineering": "Mobile",
      "AI/ML/Data": "AI & ML",
      Publication: "Publication",
    },
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
    categories: {
      "Software Engineering": "Mobile",
      "AI/ML/Data": "AI & ML",
      Publication: "Publikasi",
    },
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
