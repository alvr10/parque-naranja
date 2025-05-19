import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parque Naranja - Diversión para niños en Loja, Ecuador',
  description: 'Parque Naranja es el mejor parque de bolas para niños en Loja, Ecuador. Diversión garantizada con juegos, actividades y fiestas infantiles.',
  openGraph: {
    title: 'Parque Naranja - Diversión para niños en Loja, Ecuador',
    description: 'Parque Naranja es el mejor parque de bolas para niños en Loja, Ecuador. Diversión garantizada con juegos, actividades y fiestas infantiles.',
    url: 'https://www.parquenaranja.com/',
    siteName: 'Parque Naranja',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Parque Naranja - Diversión para niños',
      }
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parque Naranja - Diversión para niños en Loja, Ecuador',
    description: 'Parque Naranja es el mejor parque de bolas para niños en Loja, Ecuador. Diversión garantizada con juegos, actividades y fiestas infantiles.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}