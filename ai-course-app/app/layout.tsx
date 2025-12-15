import type { Metadata } from "next";
import "./globals.css";
import AuthSessionProvider from "@/components/SessionProvider";
import BugReportModal from "@/components/BugReportModal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://courses.wearewacky.com'),
  title: {
    default: 'Introduction to AI Course | Learn AI in 30 Days',
    template: '%s | Introduction to AI Course',
  },
  description: 'Master AI fundamentals in 30 days. Learn ChatGPT, Claude, Midjourney, and more. No coding required. Earn your official LinkedIn certificate. Start your AI journey today.',
  keywords: [
    'AI course',
    'learn AI',
    'artificial intelligence course',
    'ChatGPT tutorial',
    'AI for beginners',
    'online AI course',
    '30 day AI course',
    'AI certification',
    'learn artificial intelligence',
    'AI training',
    'prompt engineering',
    'Midjourney course',
    'Claude AI',
    'Gemini AI',
  ],
  authors: [{ name: 'Wacky Works Digital', url: 'https://wearewacky.com' }],
  creator: 'Wacky Works Digital',
  publisher: 'Wacky Works Digital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://courses.wearewacky.com',
    siteName: 'Introduction to AI Course',
    title: 'Introduction to AI Course | Learn AI in 30 Days',
    description: 'Master AI fundamentals in 30 days. Learn ChatGPT, Claude, Midjourney, and more. Earn your official LinkedIn certificate.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Introduction to AI Course - 30 Day AI Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introduction to AI Course | Learn AI in 30 Days',
    description: 'Master AI fundamentals in 30 days. Earn your official LinkedIn certificate.',
    creator: '@WeAreWacky',
  },
  alternates: {
    canonical: 'https://courses.wearewacky.com',
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background-light text-text-primary min-h-screen flex flex-col">
        <AuthSessionProvider>
          <div className="flex-1">{children}</div>
          <Footer />
          <BugReportModal />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
