import type { Metadata } from "next";
import { Inter, Source_Code_Pro, Roboto } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['Helvetica', 'sans-serif'],
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
  fallback: ['Courier New', 'Courier', 'monospace'],
})
 
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: "--roboto-font",
  fallback: ['Helvetica', 'sans-serif'],
});

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
    <html lang="es" className={`${inter.variable} ${sourceCodePro.variable} ${roboto.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
