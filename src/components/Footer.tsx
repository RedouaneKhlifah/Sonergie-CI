import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import logoImage from "../assets/a70b1aef28e39c82a1e4d6e9d0d0472f337b8f76.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <a href="#home" aria-label="Sonergie-CI - Retour à l'accueil">
                <Image src={logoImage} alt="Sonergie-CI Logo" className="h-10 w-auto" height={40} />
              </a>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Fournisseur leader de solutions électriques à travers l'Afrique de l'Ouest, 
              apportant des équipements de qualité et services professionnels aux communautés et entreprises.
            </p>
            <div className="flex space-x-4" role="list" aria-label="Réseaux sociaux">
              <a href="https://www.facebook.com/sonergie-ci" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" role="listitem" aria-label="Suivez-nous sur Facebook">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/sonergie-ci" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" role="listitem" aria-label="Suivez-nous sur Twitter">
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/sonergie-ci" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" role="listitem" aria-label="Suivez-nous sur LinkedIn">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/sonergie-ci" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" role="listitem" aria-label="Suivez-nous sur Instagram">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Products */}
          <nav className="space-y-6" aria-labelledby="products-heading">
            <h3 id="products-heading" className="text-xl font-semibold">Produits</h3>
            <ul className="space-y-3" role="list">
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Câbles Électriques</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Interrupteurs & Prises</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Transformateurs</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Éclairage LED</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Équipements Industriels</a></li>
            </ul>
          </nav>

          {/* Services */}
          <nav className="space-y-6" aria-labelledby="services-heading">
            <h3 id="services-heading" className="text-xl font-semibold">Services</h3>
            <ul className="space-y-3" role="list">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Installation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Consultation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Formation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="space-y-6" aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="text-xl font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-gray-400">Abidjan, Côte d'Ivoire</p>
                  <p className="text-gray-400">Plateau District</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" aria-hidden="true" />
                <a href="tel:+225XXXXXXXX" className="text-gray-400 hover:text-white transition-colors">+225 XX XX XX XX</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" aria-hidden="true" />
                <a href="mailto:info@sonergie-ci.com" className="text-gray-400 hover:text-white transition-colors">info@sonergie-ci.com</a>
              </div>
            </div>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Sonergie-CI. Tous droits réservés.
            </p>
            <nav className="flex space-x-6 text-sm" aria-label="Liens légaux">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Politique de Confidentialité</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions d'Utilisation</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Politique des Cookies</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}