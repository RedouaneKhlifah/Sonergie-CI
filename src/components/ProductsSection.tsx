import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Zap, Battery, Droplets, Sun } from "lucide-react";

interface ProductsSectionProps {
  onProductSelect?: (product: any) => void;
}

export function ProductsSection({ onProductSelect }: ProductsSectionProps) {
  const products = [
    {
      id: 1,
      name: "Câbles et Fils Électriques",
      description: "Câbles de qualité premium en cuivre et aluminium pour la distribution électrique, systèmes de contrôle et applications de transmission de données.",
      image: "https://images.unsplash.com/photo-1692343421570-649b993c28e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwd2lyZXN8ZW58MXx8fHwxNzU4NzQyMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Zap,
      features: ["Certifié IEC", "Résistant au feu", "Multiples tensions"]
    },
    {
      id: 2,
      name: "Interrupteurs et Prises",
      description: "Interrupteurs électriques modernes, prises et dispositifs de contrôle conçus pour la sécurité, la durabilité et l'attrait esthétique.",
      image: "https://images.unsplash.com/photo-1623495801487-661d1614b971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3dpdGNoZXMlMjBvdXRsZXRzfGVufDF8fHx8MTc1ODYzNTY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Battery,
      features: ["Contrôles intelligents", "Résistant aux intempéries", "Design moderne"]
    },
    {
      id: 3,
      name: "Transformateurs",
      description: "Transformateurs de puissance haute efficacité pour la conversion de tension dans les applications industrielles, commerciales et résidentielles.",
      image: "https://images.unsplash.com/photo-1741449840536-a758bb0cdaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdHJhbnNmb3JtZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4NzQyMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Droplets,
      features: ["Haute efficacité", "Faible bruit", "Design rempli d'huile"]
    },
    {
      id: 4,
      name: "Solutions d'Éclairage LED",
      description: "Luminaires LED écoénergétiques pour applications intérieures et extérieures avec longue durée de vie et performance supérieure.",
      image: "https://images.unsplash.com/photo-1604122747172-5379bac4ea9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBsaWdodGluZyUyMGZpeHR1cmVzJTIwbW9kZXJufGVufDF8fHx8MTc1ODc0MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Sun,
      features: ["Économie d'énergie", "Longue durée de vie", "Designs multiples"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900">
            Produits Électriques Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Équipements et composants électriques de haute qualité conçus pour la fiabilité, la sécurité et la performance. 
            Chaque produit est certifié aux normes internationales et soutenu par un support expert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-blue-900 group-hover:text-blue-700 transition-colors">
                  {product.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={() => onProductSelect?.(product)}
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                >
                  En Savoir Plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6"
          >
            Voir Tous les Produits
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}