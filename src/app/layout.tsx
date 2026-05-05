import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damienne — Graphiste Designer",
  description: "Portfolio de Damienne, Graphiste Designer spécialisée en création d'affiches, identité visuelle et photographie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${inter.className} min-h-full antialiased`}>{children}</body>
    </html>
  );
}
