import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden" aria-labelledby="cta-title">
      {/* Background Pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-10 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <header className="space-y-8 text-white">
            <div className="space-y-4">
              <h2 id="cta-title" className="text-4xl lg:text-5xl font-bold leading-tight">
                Prêt à Alimenter Vos 
                <span className="text-yellow-400"> Projets Électriques ?</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Rejoignez des centaines de clients satisfaits qui font confiance à Sonergie-CI pour des équipements électriques premium 
                et des services professionnels. Obtenez votre devis personnalisé et consultation dès aujourd'hui.
              </p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4" role="list" aria-label="Avantages de nos services">
              <li className="flex items-center space-x-3" role="listitem">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" aria-hidden="true"></div>
                <span className="text-blue-100">Évaluation électrique gratuite et consultation</span>
              </li>
              <li className="flex items-center space-x-3" role="listitem">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" aria-hidden="true"></div>
                <span className="text-blue-100">Conception de solutions électriques personnalisées</span>
              </li>
              <li className="flex items-center space-x-3" role="listitem">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" aria-hidden="true"></div>
                <span className="text-blue-100">Installation et maintenance professionnelles</span>
              </li>
              <li className="flex items-center space-x-3" role="listitem">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" aria-hidden="true"></div>
                <span className="text-blue-100">Produits de qualité certifiée avec garantie</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-6 text-lg font-semibold"
              >
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg"
              >
                Planifier une Consultation
              </Button>
            </div>

            {/* Contact Info */}
            <address className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-blue-700">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <a href="tel:+225XXXXXXXX" className="text-blue-100 hover:text-white transition-colors">+225 XX XX XX XX</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <a href="mailto:info@sonergie-ci.com" className="text-blue-100 hover:text-white transition-colors">info@sonergie-ci.com</a>
              </div>
            </address>
          </header>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9uJTIwcHJvZmVzc2lvbmFsJTIwd29ya3xlbnwxfHx8fDE3NTg3NDMyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional electrical installation work"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Solutions Professionnelles
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <section className="mt-20 text-center" aria-labelledby="trust-title">
          <h3 id="trust-title" className="text-blue-200 mb-8">Approuvé par les principales organisations à travers l'Afrique de l'Ouest</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60" role="list" aria-label="Types de clients et projets">
            <div className="text-white font-semibold" role="listitem">Projets Gouvernementaux</div>
            <div className="text-white font-semibold" role="listitem">Normes Internationales</div>
            <div className="text-white font-semibold" role="listitem">Clients Industriels</div>
            <div className="text-white font-semibold" role="listitem">Bâtiments Commerciaux</div>
          </div>
        </section>
      </div>
    </section>
  );
}