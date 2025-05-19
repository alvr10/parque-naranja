import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title = 'Parque Naranja - Diversión para niños en Loja, Ecuador',
  description = 'Parque Naranja es el mejor parque de bolas para niños en Loja, Ecuador. Diversión garantizada con juegos, actividades y fiestas infantiles.',
  canonicalUrl = 'https://www.parquenaranja.com',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
}) => {
  // Título completo para SEO
  const seoTitle = `${title} | Parque Naranja`;

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{seoTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#FC920E" />
      <meta name="msapplication-TileColor" content="#FC920E" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${canonicalUrl}${ogImage}`} />
      <meta property="og:site_name" content="Parque Naranja" />
      <meta property="og:locale" content="es_EC" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${canonicalUrl}${ogImage}`} />
      
      {/* Metadatos adicionales */}
      <meta name="keywords" content="parque infantil, parque de bolas, juegos para niños, fiestas infantiles, Loja, Ecuador, diversión, entretenimiento infantil" />
      <meta name="author" content="Parque Naranja" />
      <meta name="robots" content="index, follow" />
      
      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EntertainmentBusiness',
            name: 'Parque Naranja',
            description: description,
            url: canonicalUrl,
            logo: `${canonicalUrl}/images/logo.png`,
            image: `${canonicalUrl}${ogImage}`,
            telephone: '0982419136',
            email: 'parquenaranja@gmail.com',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Calles Teniente Maximiliano Rodríguez y José María Peña esquina',
              addressLocality: 'Loja',
              addressCountry: 'Ecuador'
            },
            openingHours: [
              'Mo-Fr 10:00-20:00',
              'Sa-Su 10:00-22:00'
            ],
            sameAs: [
              'https://www.facebook.com/ParqueNaranja',
              'https://www.instagram.com/parquenaranja',
              'https://www.tiktok.com/@parquenaranja'
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEO;