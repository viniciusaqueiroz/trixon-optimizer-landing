import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trixon Optimizer 0.3.4 | Diagnostico, limpeza e administracao Windows",
  description:
    "Landing page do Trixon Optimizer, aplicativo desktop para Windows com dashboard, limpeza segura, rede, DNS, backups, logs e diagnostico exportavel.",
  icons: {
    icon: "/favicon.ico",
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
