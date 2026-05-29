import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.GITHUB_PAGES === "true" ? "/trixon-optimizer-landing" : "";

export const metadata: Metadata = {
  title: "Trixon Optimizer 0.3.4 | Diagnóstico, limpeza e administração Windows",
  description:
    "Landing page do Trixon Optimizer, aplicativo desktop para Windows com dashboard, limpeza segura, rede, DNS, backups, logs e diagnóstico exportável.",
  icons: {
    icon: `${basePath}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
