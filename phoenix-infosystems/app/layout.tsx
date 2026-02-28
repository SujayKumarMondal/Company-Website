import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Phoenix Infosystems - Innovative Technology Solutions",
    template: "%s | Phoenix Infosystems",
  },
  description:
    "Transform your business with cutting-edge technology solutions. Phoenix Infosystems delivers innovative digital transformation, cloud solutions, AI & ML, and cybersecurity services.",
  keywords: [
    "technology solutions",
    "digital transformation",
    "cloud services",
    "AI consulting",
    "cybersecurity",
    "IT consulting",
    "enterprise software",
    "DevOps",
  ],
  authors: [{ name: "Phoenix Infosystems" }],
  creator: "Phoenix Infosystems",
  publisher: "Phoenix Infosystems",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.phoenixinfosystems.com",
    siteName: "Phoenix Infosystems",
    title: "Phoenix Infosystems - Innovative Technology Solutions",
    description:
      "Transform your business with cutting-edge technology solutions. Expert digital transformation, cloud, AI, and cybersecurity services.",
    images: [
      {
        url: "https://www.phoenixinfosystems.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phoenix Infosystems",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Infosystems - Innovative Technology Solutions",
    description:
      "Transform your business with cutting-edge technology solutions.",
    site: "@phoenixinfosys",
    creator: "@phoenixinfosys",
  },
  verification: {
    google: "verification-code-here",
  },
  alternates: {
    canonical: "https://www.phoenixinfosystems.com",
    languages: {
      "en-IN": "https://www.phoenixinfosystems.com/en-IN",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
