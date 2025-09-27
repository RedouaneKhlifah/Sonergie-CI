import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CatalogSection } from "./components/CatalogSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ProductPage } from "./components/ProductPage";
import { CategoryPage } from "./components/CategoryPage";
import { Toaster } from "./components/ui/sonner";
import { CartProvider } from "./contexts/CartContext";
import { Product, Category } from "./data/products";

type Page = "home" | "product-details" | "category";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("product-details");
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage("category");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedProduct(null);
    setSelectedCategory(null);
  };

  if (currentPage === "product-details" && selectedProduct) {
    return (
      <>
        <ProductPage product={selectedProduct} onBack={handleBackToHome} />
        <Toaster position="top-center" />
      </>
    );
  }

  if (currentPage === "category" && selectedCategory) {
    return (
      <>
        <CategoryPage 
          category={selectedCategory} 
          onBack={handleBackToHome}
          onProductSelect={handleProductSelect}
        />
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
        <CatalogSection 
          onProductSelect={handleProductSelect}
          onCategorySelect={handleCategorySelect}
        />
        <ServicesSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}