"use client";
import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/HeroSection";
import { AboutSection } from "../src/components/AboutSection";
import { ProductsSection } from "../src/components/ProductsSection";
import { ServicesSection } from "../src/components/ServicesSection";
import { WhyChooseUsSection } from "../src/components/WhyChooseUsSection";
import { CTASection } from "../src/components/CTASection";
import { Footer } from "../src/components/Footer";
import { Toaster } from "../src/components/ui/sonner";

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sonergie-CI",
    "description": "Leader en import et distribution d'équipements électriques de qualité supérieure en Afrique de l'Ouest",
    "url": "https://sonergie-ci.com",
    "logo": "https://sonergie-ci.com/logo.png",
    "image": "https://sonergie-ci.com/og-image.jpg",
    "telephone": "+225 XX XX XX XX",
    "email": "info@sonergie-ci.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plateau District",
      "addressLocality": "Abidjan",
      "addressCountry": "CI"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.3167",
      "longitude": "-4.0333"
    },
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "areaServed": [
      "Côte d'Ivoire",
      "Sénégal",
      "Mali",
      "Burkina Faso",
      "Guinée",
      "Niger",
      "Togo",
      "Bénin"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "5.3167",
        "longitude": "-4.0333"
      },
      "geoRadius": "2000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Équipements Électriques",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Câbles Électriques",
            "description": "Câbles électriques de qualité supérieure pour installations industrielles et résidentielles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Transformateurs",
            "description": "Transformateurs électriques pour applications industrielles et commerciales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Éclairage LED",
            "description": "Solutions d'éclairage LED économiques et durables"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation Électrique",
            "description": "Services d'installation électrique professionnels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maintenance Électrique",
            "description": "Services de maintenance et réparation d'équipements électriques"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/sonergie-ci",
      "https://www.linkedin.com/company/sonergie-ci",
      "https://twitter.com/sonergie-ci"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection onProductSelect={() => {}} />
          <ServicesSection />
          <WhyChooseUsSection />
          <CTASection />
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </>
  );
}


