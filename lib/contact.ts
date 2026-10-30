import type { Lang } from "@/lib/content";

export const contactContent: Record<
  Lang,
  { eyebrow: string; title: string; description: string }
> = {
  en: {
    eyebrow: "Contact",
    title: "Let’s connect!",
    description:
      "I’m open to AI/ML Engineer opportunities, collaborations, and conversations about AI and technologies. Reach out through any of the links below.",
  },
  id: {
    eyebrow: "Kontak",
    title: "Hubungi saya!",
    description:
      "Saya terbuka untuk peluang sebagai AI/ML Engineer, kolaborasi, serta diskusi tentang AI dan teknologi. Hubungi saya melalui salah satu tautan di bawah ",
  },
};

export const contactLinks = [
  {
    key: "email",
    label: "Email",
    value: "bagaskaravandio@gmail.com",
    href: "mailto:bagaskaravandio@gmail.com",
    icon: "contact",
  },
  {
    key: "github",
    label: "GitHub",
    value: "github.com/bagasrivan",
    href: "https://github.com/bagasrivan",
    icon: "github",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/bagaskara-ridho-vandio/",
    href: "https://www.linkedin.com/in/bagaskara-ridho-vandio/",
    icon: "linkedin",
  },
] as const;