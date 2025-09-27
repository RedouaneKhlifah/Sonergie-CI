import { useState } from "react";
import { Button } from "./ui/button";
import { Sun, Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import logoImage from "../assets/a70b1aef28e39c82a1e4d6e9d0d0472f337b8f76.png";
import { useCart } from "../contexts/CartContext";
import { Badge } from "./ui/badge";
import { CartModal } from "./CartModal";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <nav className="container mx-auto px-6 py-4" role="navigation" aria-label="Navigation principale">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="#home" aria-label="Sonergie-CI - Retour à l'accueil">
              <Image src={logoImage} alt="Sonergie-CI Logo" className="h-10 w-auto" height={40} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar" aria-label="Menu de navigation principal">
            <a href="#home" className="text-blue-900 hover:text-blue-700 transition-colors" role="menuitem">Accueil</a>
            <a href="#about" className="text-blue-900 hover:text-blue-700 transition-colors" role="menuitem">À Propos</a>
            <a href="#catalog" className="text-blue-900 hover:text-blue-700 transition-colors" role="menuitem">Catalogue</a>
            <a href="#services" className="text-blue-900 hover:text-blue-700 transition-colors" role="menuitem">Services</a>
            <a href="#contact" className="text-blue-900 hover:text-blue-700 transition-colors" role="menuitem">Contact</a>
          </div>

          {/* Cart and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Shopping Cart */}
            <Button 
              variant="outline" 
              size="icon"
              className="relative border-blue-200 hover:bg-blue-50"
              aria-label="Panier d'achat"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              {getTotalItems() > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
            
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6">
              Demander un Devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-blue-900" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-blue-900" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-lg"
            role="menu"
            aria-label="Menu mobile"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="text-blue-900 hover:text-blue-700 transition-colors py-2 border-b border-blue-100"
                  onClick={closeMobileMenu}
                  role="menuitem"
                >
                  Accueil
                </a>
                <a 
                  href="#about" 
                  className="text-blue-900 hover:text-blue-700 transition-colors py-2 border-b border-blue-100"
                  onClick={closeMobileMenu}
                  role="menuitem"
                >
                  À Propos
                </a>
                <a 
                  href="#catalog" 
                  className="text-blue-900 hover:text-blue-700 transition-colors py-2 border-b border-blue-100"
                  onClick={closeMobileMenu}
                  role="menuitem"
                >
                  Catalogue
                </a>
                <a 
                  href="#services" 
                  className="text-blue-900 hover:text-blue-700 transition-colors py-2 border-b border-blue-100"
                  onClick={closeMobileMenu}
                  role="menuitem"
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="text-blue-900 hover:text-blue-700 transition-colors py-2 border-b border-blue-100"
                  onClick={closeMobileMenu}
                  role="menuitem"
                >
                  Contact
                </a>
                <div className="pt-4 space-y-3">
                  {/* Mobile Cart */}
                  <Button 
                    variant="outline"
                    className="w-full border-blue-200 hover:bg-blue-50 flex items-center justify-center space-x-2"
                    onClick={() => {
                      setIsCartOpen(true);
                      closeMobileMenu();
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 text-blue-600" />
                    <span>Panier ({getTotalItems()})</span>
                  </Button>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                    onClick={closeMobileMenu}
                  >
                    Demander un Devis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}