import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import '@/styles/globalicons.css';
import { Header } from "@/components";
import Footer from "@/components/Footer";

const defaultFont = Inter({ subsets: ["latin"] });
const codeFont = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonatan Montesdeoca - Full Stack Developer",
  description:
    "Portfolio de Jonatan Montesdeoca, Full Stack Developer con varios años de experiencia en el desarrollo de aplicaciones web y móviles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${defaultFont.className} ${codeFont.className}`}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
