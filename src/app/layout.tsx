import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "G-Social — Geração de Conteúdo para Redes Sociais com IA",
  description:
    "Automatize a criação de posts, carrosséis e vídeos para Instagram e Facebook com inteligência artificial. Plataforma exclusiva para clientes Genesys Tech.",
  keywords: ["social media", "instagram", "SEO", "automação", "IA", "conteúdo", "genesys tech"],
  authors: [{ name: "Genesys Tech" }],
  openGraph: {
    title: "G-Social — Conteúdo para Redes com IA",
    description: "Gere imagens, carrosséis e vídeos profissionais para o Instagram com inteligência artificial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-noise">{children}</body>
    </html>
  );
}
