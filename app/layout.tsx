import './globals.css';
import './projects.css';
import type { Metadata } from 'next';

const siteUrl = 'https://sussexsiteco.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sussex Site Co. | Web Design in West Sussex',
    template: '%s | Sussex Site Co.',
  },
  description: 'Independent web studio creating modern, high impact websites for businesses across West Sussex and the South Coast.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sussex Site Co. | Web Design in West Sussex',
    description: 'Modern websites for businesses that refuse to blend in.',
    url: siteUrl,
    siteName: 'Sussex Site Co.',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sussex Site Co. | Web Design in West Sussex',
    description: 'Modern websites for businesses that refuse to blend in.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Sussex Site Co.',
  url: siteUrl,
  description: 'Independent web studio creating modern websites for businesses across West Sussex and the South Coast.',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'West Sussex' },
    { '@type': 'Place', name: 'South Coast, England' },
  ],
  serviceType: [
    'Web Design',
    'Web Development',
    'Ecommerce Website Development',
    'Interactive Website Development',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
