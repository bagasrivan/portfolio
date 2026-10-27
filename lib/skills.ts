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
    comfort: string;
    familiar: string;
  }
> = {
  en: {
    eyebrow: "Skills",
    title: "Things I work with",
    comfort: "Comfort",
    familiar: "Familiar",
  },
  id: {
    eyebrow: "Skill",
    title: "Teknologi yang saya gunakan",
    comfort: "Keahlian utama",
    familiar: "Pernah digunakan",
  },
};