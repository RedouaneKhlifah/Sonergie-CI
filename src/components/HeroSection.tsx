import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Zap, ShieldCheck, Award, Cable } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-20" aria-labelledby="hero-title">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.header 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-2 text-blue-600"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Zap className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Leader en Solutions Électriques</span>
              </motion.div>
              
              <motion.h1 
                id="hero-title" 
                className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Votre Partenaire de Confiance en 
                <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent"> Solutions Électriques</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Alimenter l'Afrique de l'Ouest avec des équipements électriques de qualité supérieure, 
                des services d'installation experts, et des réseaux de distribution fiables. Produits de qualité, service professionnel, solutions personnalisées.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
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
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap items-center gap-8 pt-6" 
              role="list" 
              aria-label="Indicateurs de confiance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { icon: ShieldCheck, text: "Qualité Certifiée", color: "text-green-600" },
                { icon: Award, text: "Équipe Experte", color: "text-yellow-600" },
                { icon: Cable, text: "Équipements Premium", color: "text-blue-600" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2" 
                  role="listitem"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} aria-hidden="true" />
                  <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200" 
              role="list" 
              aria-label="Statistiques de l'entreprise"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { number: "2000+", label: "Projets Réalisés", ariaLabel: "Plus de 2000 projets réalisés" },
                { number: "15+", label: "Années d'Expérience", ariaLabel: "Plus de 15 années d'expérience" },
                { number: "8", label: "Pays Desservis", ariaLabel: "8 pays desservis" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center" 
                  role="listitem"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-blue-900" 
                    aria-label={stat.ariaLabel}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.header>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607631755187-298a3f9a640a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZXF1aXBtZW50JTIwaW5kdXN0cmlhbCUyMGNhYmxlc3xlbnwxfHx8fDE3NTg3NDIxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Équipements électriques professionnels et câbles industriels"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Card */}
              <motion.div 
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Zap className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold text-blue-900" aria-label="Service disponible 24 heures sur 24, 7 jours sur 7">24/7</div>
                    <div className="text-sm text-gray-600">Service d'Assistance</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}