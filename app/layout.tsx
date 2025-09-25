import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonergie-CI - Solutions Électriques Premium en Afrique de l'Ouest",
  description: "Leader en import et distribution d'équipements électriques de qualité supérieure en Afrique de l'Ouest. Câbles, transformateurs, éclairage LED, services d'installation professionnels. 15+ années d'expérience, 2000+ projets réalisés.",
  keywords: [
    "équipements électriques",
    "câbles électriques",
    "transformateurs",
    "éclairage LED",
    "installation électrique",
    "Afrique de l'Ouest",
    "Côte d'Ivoire",
    "Abidjan",
    "matériel électrique",
    "solutions électriques",
    "Sonergie-CI",
    "électricité industrielle",
    "équipements premium",
    "services électriques"
  ],
  authors: [{ name: "Sonergie-CI" }],
  creator: "Sonergie-CI",
  publisher: "Sonergie-CI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sonergie-ci.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sonergie-CI - Solutions Électriques Premium en Afrique de l'Ouest",
    description: "Leader en import et distribution d'équipements électriques de qualité supérieure en Afrique de l'Ouest. 15+ années d'expérience, 2000+ projets réalisés.",
    url: "https://sonergie-ci.com",
    siteName: "Sonergie-CI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sonergie-CI - Solutions Électriques Premium",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonergie-CI - Solutions Électriques Premium en Afrique de l'Ouest",
    description: "Leader en import et distribution d'équipements électriques de qualité supérieure en Afrique de l'Ouest.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}


