import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Star, ShoppingCart, CreditCard, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { Product, formatPrice } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

export function ProductPage({ product, onBack }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} ajouté au panier !`);
  };

  const handlePurchase = () => {
    addToCart(product, quantity);
    toast.success(`Commande confirmée pour ${product.name} ! Merci pour votre achat.`);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux produits</span>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Product Image */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge 
                  variant={product.inStock ? "default" : "destructive"}
                  className="bg-green-500 hover:bg-green-600"
                >
                  {product.inStock ? "En Stock" : "Rupture de Stock"}
                </Badge>
              </div>
            </motion.div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <product.icon className="w-6 h-6 text-blue-600" />
                <span className="text-sm text-gray-600 capitalize">{product.category}</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} avis)
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-6">
                {formatPrice(product.price)}
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <h3 className="text-lg font-semibold text-gray-900">Caractéristiques</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-medium text-gray-900">Quantité:</span>
                  <div className="flex items-center space-x-2 border border-gray-300 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="h-10 w-10"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={incrementQuantity}
                      className="h-10 w-10"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Ajouter au Panier
                  </Button>
                  
                  <Button
                    onClick={handlePurchase}
                    disabled={!product.inStock}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Acheter Maintenant
                  </Button>
                </div>

                {!product.inStock && (
                  <div className="text-center text-red-600 font-medium">
                    Ce produit est actuellement en rupture de stock
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
