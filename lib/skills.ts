import {
  siAndroidstudio,
  siDart,
  siFlutter,
  siGit,
  siGithub,
  siGooglecolab,
  siJavascript,
  siJupyter,
  siKotlin,
  siMysql,
  siNextdotjs,
  siNumpy,
  siPandas,
  siPostman,
  siPython,
  siPytorch,
  siReact,
  siScikitlearn,
  siTensorflow,
  type SimpleIcon,
} from "simple-icons";
import type { Lang } from "@/lib/content";

export type Level = "comfort" | "familiar";

export type Skill = { name: string; level: Level; icon?: SimpleIcon };

export const skills: Skill[] = [
  { name: "Python", level: "comfort", icon: siPython },
  { name: "TensorFlow", level: "comfort", icon: siTensorflow },
  { name: "PyTorch", level: "comfort", icon: siPytorch },
  { name: "Scikit-learn", level: "comfort", icon: siScikitlearn },
  { name: "Pandas", level: "comfort", icon: siPandas },
  { name: "NumPy", level: "comfort", icon: siNumpy },
  { name: "Flutter", level: "comfort", icon: siFlutter },
  { name: "Dart", level: "comfort", icon: siDart },
  { name: "MySQL", level: "comfort", icon: siMysql },
  { name: "REST API", level: "comfort" },
  { name: "Git", level: "comfort", icon: siGit },
  { name: "GitHub", level: "comfort", icon: siGithub },
  { name: "Postman", level: "comfort", icon: siPostman },
  { name: "Google Colab", level: "comfort", icon: siGooglecolab },
  { name: "Jupyter", level: "comfort", icon: siJupyter },
  { name: "JavaScript", level: "familiar", icon: siJavascript },
  { name: "Next.js", level: "familiar", icon: siNextdotjs },
  { name: "React", level: "familiar", icon: siReact },
  { name: "Java", level: "comfort" },
  { name: "Kotlin", level: "familiar", icon: siKotlin },
  { name: "SQL", level: "comfort" },
  { name: "LLMs", level: "familiar" },
  { name: "Langflow", level: "familiar" },
  { name: "Android Studio", level: "familiar", icon: siAndroidstudio },
  { name: "RunPod", level: "familiar" },
  { name: "Model Deployment", level: "familiar" },
];

export const skillsContent: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    tools: string;
    certification: string;
    comfort: string;
    familiar: string;
  }
> = {
  en: {
    eyebrow: "Skills",
    title: "Things I work with",
    comfort: "Comfort",
    familiar: "Familiar",
    tools: "Tools",
    certification: "Certifications",
  },
  id: {
    eyebrow: "Skill",
    title: "Teknologi yang saya gunakan",
    comfort: "Keahlian utama",
    familiar: "Pernah digunakan",
    tools: "Tools",
    certification: "Sertifikasi",
  },
};

export type Certificate = {
  id: string;
  title: string;
  issuer?: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: "build-an-ai-agent-creedyly",
    title: "Build an AI Agent Creedly",
    image: "/certificates/Build an AI Agent Creedly.jpg",
  },
  {
    id: "build-an-ai-agent",
    title: "Build an AI Agent",
    image: "/certificates/Build an AI Agent.jpg",
  },
  {
    id: "introduction-to-llm",
    title: "Introduction to Large Language Models",
    image: "/certificates/Introduction to Large Language Models.jpg",
  },
  {
    id: "python-basic-programming",
    title: "Memulai Pemrograman dengan Python",
    image: "/certificates/Memulai Pemrograman dengan Python.jpg",
  },
  {
    id: "flutter-for-beginner",
    title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    image: "/certificates/Belajar Membuat Aplikasi Flutter untuk Pemula.jpg",
  },
  {
    id: "dart-basic-programming",
    title: "Memulai Pemrograman dengan Dart",
    image: "/certificates/Memulai Pemrograman dengan Dart.jpg",
  },
  {
    id: "basic-git-using-github",
    title: "Belajar Dasar Git dengan GitHub",
    image: "/certificates/Belajar Dasar Git dengan GitHub.jpg",
  },
  {
    id: "applied-machine-learning-for-android-developer",
    title: "Belajar Penerapan Machine Learning untuk Android",
    image: "/certificates/Belajar Penerapan Machine Learning untuk Android.jpg",
  },
  {
    id: "introduction-to-ai",
    title: "Belajar Dasar AI",
    image: "/certificates/Belajar Dasar AI.jpg",
  },
  {
    id: "fundamental-android",
    title: "Belajar Fundamental Aplikasi Android",
    image: "/certificates/Belajar Fundamental Aplikasi Android.jpg",
  },
  {
    id: "android-for-beginner",
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    image: "/certificates/Belajar Membuat Aplikasi Android untuk Pemula.jpg",
  },
  {
    id: "kotlin-basic-programming",
    title: "Memulai Pemrograman dengan Kotlin",
    image: "/certificates/Memulai Pemrograman dengan Kotlin.jpg",
  },
  {
    id: "introduction-to-programming-logic",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    image:
      "/certificates/Pengenalan ke Logika Pemrograman (Programming Logic 101).jpg",
  },
  {
    id: "basic-programming-become-software-developer",
    title: "Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software",
    image:
      "/certificates/Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software.jpg",
  },
  {
    id: "cloud-ractitioner-essentials",
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    image:
      "/certificates/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).jpg",
  },
  {
    id: "web-programming",
    title: "Basic Web Programming",
    image: "/certificates/Belajar Dasar Pemrograman Web.jpg",
  },
];
