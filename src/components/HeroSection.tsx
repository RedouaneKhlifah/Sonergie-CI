import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Zap, ShieldCheck, Award, Cable } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-20" aria-labelledby="hero-title">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <header className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-600">
                <Zap className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Leader en Solutions Électriques</span>
              </div>
              
              <h1 id="hero-title" className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Votre Partenaire de Confiance en 
                <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent"> Solutions Électriques</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Alimenter l'Afrique de l'Ouest avec des équipements électriques de qualité supérieure, 
                des services d'installation experts, et des réseaux de distribution fiables. Produits de qualité, service professionnel, solutions personnalisées.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg transition-all ease-in-out duration-300"
              >
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg"
                className="bg-background
                text-primary/90 
                px-8 py-6 text-lg 
                border-2 border-blue-600 
                rounded-xl
                transition-all duration-400 ease-in-out
                hover:bg-input/50 hover:text-primary/90 hover:border-blue-700
              "
              >
                Découvrir Nos Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-6" role="list" aria-label="Indicateurs de confiance">
              <div className="flex items-center space-x-2" role="listitem">
                <ShieldCheck className="w-5 h-5 text-green-600" aria-hidden="true" />
                <span className="text-sm text-gray-700 font-medium">Qualité Certifiée</span>
              </div>
              <div className="flex items-center space-x-2" role="listitem">
                <Award className="w-5 h-5 text-yellow-600" aria-hidden="true" />
                <span className="text-sm text-gray-700 font-medium">Équipe Experte</span>
              </div>
              <div className="flex items-center space-x-2" role="listitem">
                <Cable className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <span className="text-sm text-gray-700 font-medium">Équipements Premium</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200" role="list" aria-label="Statistiques de l'entreprise">
              <div className="text-center" role="listitem">
                <div className="text-3xl font-bold text-blue-900" aria-label="Plus de 2000 projets réalisés">2000+</div>
                <div className="text-sm text-gray-600">Projets Réalisés</div>
              </div>
              <div className="text-center" role="listitem">
                <div className="text-3xl font-bold text-blue-900" aria-label="Plus de 15 années d'expérience">15+</div>
                <div className="text-sm text-gray-600">Années d'Expérience</div>
              </div>
              <div className="text-center" role="listitem">
                <div className="text-3xl font-bold text-blue-900" aria-label="8 pays desservis">8</div>
                <div className="text-sm text-gray-600">Pays Desservis</div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607631755187-298a3f9a640a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbCUyMGNhYmxlc3xlbnwxfHx8fDE3NTg3NDIxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Équipements électriques professionnels et câbles industriels"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-900" aria-label="Service disponible 24 heures sur 24, 7 jours sur 7">24/7</div>
                    <div className="text-sm text-gray-600">Service d'Assistance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}