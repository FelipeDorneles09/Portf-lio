import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Dorneles | Engenheiro de Software Full Stack",
  description: "Engenheiro de Software Full Stack especializado em TypeScript, Next.js, Node.js e C++/Qt, com foco em arquitetura, testes automatizados, CI/CD e sistemas de telemetria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  );
}
