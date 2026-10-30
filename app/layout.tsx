import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import AppShell from "@/components/AppShell";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bagaskara Ridho Vandio | Portfolio",
  description:
    "Computer Science graduate focused on AI/ML and mobile development. Ask me about my projects and experience.",
  openGraph: {
    title: "Bagaskara Ridho Vandio | Portfolio",
    description:
      "Computer Science graduate focused on AI/ML and mobile development. Ask me about my projects and experience.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}