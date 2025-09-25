import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ProductDetails } from "./components/ProductDetails";
import { Toaster } from "./components/ui/sonner";

type Page = "home" | "product-details";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("product-details");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedProduct(null);
  };

  if (currentPage === "product-details" && selectedProduct) {
    return (
      <>
        <ProductDetails product={selectedProduct} onBack={handleBackToHome} />
        <Toaster position="top-center" />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection onProductSelect={handleProductSelect} />
        <ServicesSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}