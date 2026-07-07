import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RadPathEducation | Corrélations Radio-Histologiques",
  description: "Plateforme éducative dédiée aux corrélations radio-histologiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${openSans.variable} font-sans h-full antialiased bg-[#f0f2f5]`}
    >
      <body className="min-h-full flex flex-col text-slate-800">
        {/* Navigation Bar - Style Radiopaedia */}
        <header className="w-full bg-[#0b1c2c] text-white shadow-md z-10 sticky top-0">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 no-underline">
              {/* Remplacez '/images/logo.png' par le nom exact de votre fichier logo. */}
              {/* Le fichier doit se trouver dans le dossier 'public/images/' */}
              {/* Si vous n'avez pas encore de logo, un carré gris avec le texte s'affichera par défaut */}
              <div className="relative h-10 w-auto min-w-[150px] flex items-center">
                <span className="text-2xl font-bold tracking-tight block sm:hidden md:block">RadPath<span className="text-blue-400">Education</span></span>
                {/* Décommentez la ligne ci-dessous une fois l'image placée dans le dossier public */}
                {/* <Image src="/images/logo.png" alt="Logo RadPathEducation" fill className="object-contain object-left" priority /> */}
              </div>
            </Link>
            <nav className="hidden sm:flex gap-6 font-medium text-sm text-slate-200">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <Link href="/cas" className="hover:text-white transition">Cas Cliniques</Link>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <Link href="/cours" className="hover:text-white transition">Cours</Link>
              <Link href="/a-propos" className="hover:text-white transition">À Propos</Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>

        {/* Simple Footer */}
        <footer className="w-full bg-[#081521] text-slate-400 py-6 text-center text-sm mt-auto">
          <p>© {new Date().getFullYear()} RadPathEducation. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
