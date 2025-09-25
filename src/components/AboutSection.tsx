import { CheckCircle, Award, Users, Globe, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

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
      <motion.div 
        className="absolute top-10 right-10 opacity-10" 
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Globe className="w-32 h-32 text-blue-600" />
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-10 opacity-10" 
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Award className="w-24 h-24 text-yellow-500" />
      </motion.div>

      <div className="container mx-auto px-6 relative">
        <motion.header 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="about-title" className="text-4xl lg:text-5xl font-bold text-blue-900">
            À Propos de Sonergie-CI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour l'import, la distribution et les services professionnels d'équipements électriques. 
            Nous livrons des solutions de qualité avec expertise, fiabilité et une approche centrée client.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-3" 
                    role="listitem"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{spec}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-6" 
            role="list" 
            aria-label="Statistiques de performance"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "15+", label: "Années d'Expérience", color: "border-blue-100 hover:border-blue-200", textColor: "text-blue-900" },
              { number: "500+", label: "Clients de Confiance", color: "border-yellow-100 hover:border-yellow-200", textColor: "text-yellow-600" },
              { number: "2000+", label: "Projets Réalisés", color: "border-green-100 hover:border-green-200", textColor: "text-green-600" },
              { number: "8", label: "Pays Desservis", color: "border-blue-100 hover:border-blue-200", textColor: "text-blue-900" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`text-center p-8 border-2 ${stat.color} transition-colors`} role="listitem">
                  <CardContent className="p-0">
                    <motion.div 
                      className={`text-4xl font-bold ${stat.textColor} mb-2`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.section 
          className="space-y-12" 
          aria-labelledby="values-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.header 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 id="values-title" className="text-3xl font-bold text-blue-900">Nos Valeurs Fondamentales</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail et définissent notre engagement envers l'excellence en solutions électriques.
            </p>
          </motion.header>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="Valeurs fondamentales de Sonergie-CI"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full" // Make motion div take full height
              >
                <Card
                  className="group text-center p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  role="listitem"
                >
                  <CardContent className="p-0 space-y-4 flex flex-col flex-1">
                    <motion.div
                      className="w-16 h-16 bg-blue-100 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mx-auto transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon
                        className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </motion.section>
      </div>
    </section>
  );
}