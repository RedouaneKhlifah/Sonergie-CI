import { CheckCircle, Award, Users, Globe, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  const coreValues = [
    {
      icon: Award,
      title: "Expertise",
      description: "Connaissances professionnelles et maîtrise technique en solutions électriques"
    },
    {
      icon: Shield,
      title: "Qualité",
      description: "Produits premium certifiés aux normes internationales"
    },
    {
      icon: CheckCircle,
      title: "Fiabilité",
      description: "Service fiable et performance constante sur laquelle vous pouvez compter"
    },
    {
      icon: Heart,
      title: "Convivialité",
      description: "Approche amicale et axée client avec un service personnalisé"
    }
  ];

  const specializations = [
    "Import & distribution de matériels électriques premium",
    "Personnel technique qualifié et professionnel",
    "Produits certifiés aux normes internationales",
    "Devis personnalisés et solutions sur mesure",
    "Options de livraison flexibles",
    "Approche de service conviviale et client"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden" aria-labelledby="about-title">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 opacity-10" aria-hidden="true">
        <Globe className="w-32 h-32 text-blue-600" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10" aria-hidden="true">
        <Award className="w-24 h-24 text-yellow-500" />
      </div>

      <div className="container mx-auto px-6 relative">
        <header className="text-center space-y-4 mb-16">
          <h2 id="about-title" className="text-4xl lg:text-5xl font-bold text-blue-900">
            À Propos de Sonergie-CI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour l'import, la distribution et les services professionnels d'équipements électriques. 
            Nous livrons des solutions de qualité avec expertise, fiabilité et une approche centrée client.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-900">
                Excellence Électrique Depuis le Premier Jour
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sonergie-CI se spécialise dans l'import et la distribution d'équipements électriques de haute qualité, 
                servant des clients à travers l'Afrique de l'Ouest avec une expertise professionnelle et un service personnalisé. 
                Notre engagement envers l'excellence garantit que chaque projet reçoit l'attention et la qualité qu'il mérite.
              </p>
            </div>

            {/* Specializations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center">
                <Users className="mr-2 w-5 h-5 text-blue-600" aria-hidden="true" />
                Ce Qui Nous Distingue
              </h3>
              <ul className="grid gap-3" role="list" aria-label="Spécialisations de Sonergie-CI">
                {specializations.map((spec, index) => (
                  <li key={index} className="flex items-start space-x-3" role="listitem">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6" role="list" aria-label="Statistiques de performance">
            <Card className="text-center p-8 border-2 border-blue-100 hover:border-blue-200 transition-colors" role="listitem">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-blue-900 mb-2" aria-label="Plus de 15 années d'expérience">15+</div>
                <div className="text-gray-600">Années d'Expérience</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 border-yellow-100 hover:border-yellow-200 transition-colors" role="listitem">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-yellow-600 mb-2" aria-label="Plus de 500 clients de confiance">500+</div>
                <div className="text-gray-600">Clients de Confiance</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 border-green-100 hover:border-green-200 transition-colors" role="listitem">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-green-600 mb-2" aria-label="Plus de 2000 projets réalisés">2000+</div>
                <div className="text-gray-600">Projets Réalisés</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 border-blue-100 hover:border-blue-200 transition-colors" role="listitem">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-blue-900 mb-2" aria-label="8 pays desservis">8</div>
                <div className="text-gray-600">Pays Desservis</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <section className="space-y-12" aria-labelledby="values-title">
          <header className="text-center space-y-4">
            <h3 id="values-title" className="text-3xl font-bold text-blue-900">Nos Valeurs Fondamentales</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail et définissent notre engagement envers l'excellence en solutions électriques.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Valeurs fondamentales de Sonergie-CI">
            {coreValues.map((value, index) => (
              <Card 
                key={index} 
                className="group text-center p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
                role="listitem"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mx-auto transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}