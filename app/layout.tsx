import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://sussexsiteco.co.uk'),
  title: { default: 'Sussex Site Co. | Web Design & Development', template: '%s | Sussex Site Co.' },
  description: 'Independent web studio creating modern, high-impact websites for businesses in Sussex and beyond.',
  openGraph: {
    title: 'Sussex Site Co.',
    description: 'Modern websites for businesses that refuse to blend in.',
    url: 'https://sussexsiteco.co.uk',
    siteName: 'Sussex Site Co.',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
