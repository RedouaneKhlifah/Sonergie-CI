import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Shield, Zap, Cable, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Award,
      title: "Personnel Professionnel",
      description: "Ingénieurs électriques qualifiés et techniciens certifiés avec une vaste expérience en installations et maintenance électriques."
    },
    {
      icon: Shield,
      title: "Produits Certifiés",
      description: "Équipements électriques de haute qualité certifiés aux normes internationales avec couverture de garantie complète."
    },
    {
      icon: Users,
      title: "Service Personnalisé",
      description: "Solutions personnalisées et devis sur mesure adaptés pour répondre à vos besoins électriques spécifiques et budget."
    },
    {
      icon: Zap,
      title: "Performance Fiable",
      description: "Historique prouvé de projets électriques réussis avec 99% de satisfaction client et fiabilité des systèmes."
    },
    {
      icon: Cable,
      title: "Assurance Qualité",
      description: "Processus rigoureux de contrôle qualité et tests complets pour garantir que toutes les installations respectent les normes de sécurité."
    },
    {
      icon: CheckCircle,
      title: "Solutions Complètes",
      description: "Services électriques de bout en bout, de la conception et installation à la maintenance et au support technique continu."
    }
  ];

  const stats = [
    { value: "2000+", label: "Projets Réalisés" },
    { value: "500+", label: "Clients Satisfaits" },
    { value: "8", label: "Pays Desservis" },
    { value: "100%", label: "Qualité Certifiée" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900">
                Pourquoi Choisir Sonergie-CI ?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nous combinons une expertise professionnelle avec des produits de qualité pour livrer des solutions électriques exceptionnelles 
                qui respectent les plus hauts standards de sécurité, fiabilité et performance.
              </p>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-blue-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXIlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODY0MjQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional electrical engineering team"
                  className="w-full h-96 object-cover"
                />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="text-2xl font-bold text-blue-900"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                            viewport={{ once: true }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Feature Highlights */}
            <motion.div 
              className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Nos Valeurs Fondamentales</h3>
              <div className="space-y-4">
                {[
                  "Expertise en solutions électriques",
                  "Produits de qualité certifiée", 
                  "Livraison de service fiable",
                  "Approche conviviale client"
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}