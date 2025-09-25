import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Zap, Home, Building, Cog, Cable, Camera, Wind, Flame, Shield } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Installations Électriques MT/BT",
      description: "Installations électriques professionnelles moyenne et basse tension pour projets industriels, commerciaux et résidentiels."
    },
    {
      icon: Building,
      title: "Éclairage Public",
      description: "Systèmes complets d'éclairage urbain et d'illumination publique avec contrôles intelligents et technologie LED écoénergétique."
    },
    {
      icon: Shield,
      title: "Réseaux de Secours & UPS",
      description: "Systèmes d'alimentation sans interruption fiables et solutions d'alimentation de secours pour applications critiques."
    },
    {
      icon: Home,
      title: "Domotique (Maison Intelligente)",
      description: "Systèmes de maison intelligente pour éclairage, sécurité, contrôle climatique et gestion énergétique avec intégration mobile."
    },
    {
      icon: Cable,
      title: "Réseaux Informatiques",
      description: "Câblage structuré, réseaux de données et infrastructure de télécommunications pour les besoins de connectivité modernes."
    },
    {
      icon: Flame,
      title: "Systèmes de Détection Incendie",
      description: "Systèmes avancés de détection et d'alarme incendie avec capacités de réponse automatisée pour une sécurité maximale."
    },
    {
      icon: Camera,
      title: "Vidéosurveillance & Sécurité",
      description: "Systèmes CCTV complets, contrôle d'accès et solutions de sécurité avec capacités de surveillance à distance."
    },
    {
      icon: Wind,
      title: "Ventilation & Climatisation",
      description: "Systèmes CVC, solutions de ventilation et contrôle climatique pour une qualité d'air intérieur et un confort optimaux."
    },
    {
      icon: Cog,
      title: "Maintenance & Contrats de Service",
      description: "Maintenance continue, support technique et contrats de service pour assurer une performance système optimale."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" aria-labelledby="services-title">
      <div className="container mx-auto px-6">
        <header className="text-center space-y-4 mb-16">
          <h2 id="services-title" className="text-4xl lg:text-5xl font-bold text-blue-900">
            Services Électriques Complets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des installations électriques aux systèmes d'automatisation intelligents, nous fournissons des solutions électriques complètes 
            avec une expertise professionnelle et un service fiable dans toutes les applications.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Services électriques disponibles">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              role="listitem"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Promise */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white" aria-labelledby="promise-title">
          <h3 id="promise-title" className="text-3xl font-bold mb-4">Notre Promesse de Service</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nous livrons des solutions électriques professionnelles avec une qualité certifiée, une installation experte, 
            et un support continu. Votre satisfaction et la sécurité électrique sont nos priorités principales.
          </p>
          <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Engagements de service">
            <div role="listitem">
              <div className="text-4xl font-bold text-yellow-400" aria-label="Support disponible 24 heures sur 24, 7 jours sur 7">24/7</div>
              <div className="text-blue-200">Support d'Urgence</div>
            </div>
            <div role="listitem">
              <div className="text-4xl font-bold text-yellow-400" aria-label="100% des produits sont certifiés">100%</div>
              <div className="text-blue-200">Produits Certifiés</div>
            </div>
            <div role="listitem">
              <div className="text-4xl font-bold text-yellow-400" aria-label="Plus de 15 années d'expérience">15+</div>
              <div className="text-blue-200">Années d'Expérience</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}