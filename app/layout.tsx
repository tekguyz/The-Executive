import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans, Bebas_Neue } from 'next/font/google';
import { NavProvider } from '@/context/NavContext';
import './globals.css';

// Configure Google Fonts for luxury typography pairings
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent',
  weight: ['400'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://theexecutiveimage.com'),
  title: 'The Executive Image | Ceramic Coating & Mobile Detailing — Treasure Coast, FL',
  description: "Stuart, FL's premier mobile ceramic coating and detailing service. Automotive, Marine & Aeronautical. We come to you. Call Jason at (772) 631-1339.",
  keywords: 'ceramic coating stuart fl, mobile detailing treasure coast, boat detailing port st lucie, paint correction stuart florida, executive image detailing',
  authors: [{ name: 'Jason', url: 'https://www.facebook.com/Theexecutivedetailer/' }],
  alternates: {
    canonical: 'https://theexecutiveimage.com',
  },
  openGraph: {
    title: 'The Executive Image | Ceramic Coating & Mobile Detailing — Treasure Coast, FL',
    description: "Stuart, FL's premier mobile ceramic coating and detailing service. Automotive, Marine & Aeronautical. We come to you. Call Jason at (772) 631-1339.",
    url: 'https://theexecutiveimage.com',
    siteName: 'The Executive Image',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://theexecutiveimage.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Executive Image Ceramic Coating & Mobile Detailing',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Executive Image | Ceramic Coating & Mobile Detailing — Treasure Coast, FL',
    description: "Stuart, FL's premier mobile ceramic coating and detailing service. Automotive, Marine & Aeronautical. We come to you. Call Jason at (772) 631-1339.",
    images: ['https://theexecutiveimage.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

// LocalBusiness representation structured format
const schemaJson = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Executive Image Ceramic Coating & Mobile Detailing",
  "telephone": "+17726311339",
  "image": "https://theexecutiveimage.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Stuart",
    "addressRegion": "FL"
  },
  "areaServed": ["Stuart", "Port St. Lucie", "Jensen Beach", "Treasure Coast"],
  "url": "https://theexecutiveimage.com",
  "sameAs": ["https://www.facebook.com/Theexecutivedetailer/"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${playfair.variable} ${dmSans.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          id="ld-json-schema-business-id"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#0a0a0a] text-[#F5F0E8] antialiased">
        <NavProvider>
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
