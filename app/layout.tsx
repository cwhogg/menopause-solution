import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `Hormona — Track hormones, understand your menopause journey`,
  description: `Should I test my hormones during perimenopause? Get quarterly hormone testing with symptom tracking and telemedicine consultations for comprehensive menopause care.`,
  openGraph: {
    title: `Hormona — Track hormones, understand your menopause journey`,
    description: `Should I test my hormones during perimenopause? Get quarterly hormone testing with symptom tracking and telemedicine consultations for comprehensive menopause care.`,
    type: 'website',
    siteName: `Hormona`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hormona — Track hormones, understand your menopause journey`,
    description: `Should I test my hormones during perimenopause? Get quarterly hormone testing with symptom tracking and telemedicine consultations for comprehensive menopause care.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
