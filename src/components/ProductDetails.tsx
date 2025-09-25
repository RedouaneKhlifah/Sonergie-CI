import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, CheckCircle, Sun, Zap, Battery, Droplets, Star, Shield, Award, Truck } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
  specifications?: string[];
  warranty?: string;
  price?: string;
}

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

// Enhanced product data
const getProductDetails = (id: number) => {
  const products = {
    1: {
      id: 1,
      name: "Electrical Cables & Wires",
      description: "Premium quality copper and aluminum cables for power distribution, control systems, and data transmission applications.",
      image: "https://images.unsplash.com/photo-1692343421570-649b993c28e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwd2lyZXN8ZW58MXx8fHwxNzU4NzQyMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Zap,
      features: ["IEC certified", "Fire resistant", "Multiple voltages"],
      specifications: [
        "Voltage Range: 300/500V - 18/30kV",
        "Conductor: Copper/Aluminum",
        "Insulation: XLPE/PVC",
        "Standards: IEC 60502, NFC 32-321",
        "Fire Performance: IEC 60332-1",
        "Operating Temperature: -40°C to +90°C",
        "Cross-section: 1.5mm² to 630mm²",
        "Applications: Power, Control, Instrumentation"
      ],
      warranty: "25-year manufacturer warranty with performance guarantee",
      price: "Contact for pricing per meter"
    },
    2: {
      id: 2,
      name: "Switches & Outlets",
      description: "Modern electrical switches, outlets, and control devices designed for safety, durability, and aesthetic appeal.",
      image: "https://images.unsplash.com/photo-1623495801487-661d1614b971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3dpdGNoZXMlMjBvdXRsZXRzfGVufDF8fHx8MTc1ODYzNTY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Battery,
      features: ["Smart controls", "Weather resistant", "Modern design"],
      specifications: [
        "Voltage: 110V-250V AC",
        "Current Rating: 10A, 16A, 20A",
        "Protection: IP44/IP55 rated",
        "Material: High-grade PC plastic",
        "Certifications: CE, RoHS compliant",
        "Temperature Range: -5°C to +40°C",
        "Mounting: Surface/Flush mount",
        "Colors: White, Ivory, Black available"
      ],
      warranty: "10-year warranty on all switching devices",
      price: "Starting from $15 per unit"
    },
    3: {
      id: 3,
      name: "Transformers",
      description: "High-efficiency power transformers for voltage conversion in industrial, commercial, and residential applications.",
      image: "https://images.unsplash.com/photo-1741449840536-a758bb0cdaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdHJhbnNmb3JtZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4NzQyMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Droplets,
      features: ["High efficiency", "Low noise", "Oil-filled design"],
      specifications: [
        "Power Range: 25kVA - 2500kVA",
        "Voltage: 11kV/22kV to 400V",
        "Efficiency: Up to 98.5%",
        "Cooling: ONAN/ONAF",
        "Insulation: Mineral oil",
        "Standards: IEC 60076",
        "Noise Level: <55dB",
        "Temperature Class: 105°C"
      ],
      warranty: "5-year comprehensive warranty",
      price: "Starting from $8,500"
    },
    4: {
      id: 4,
      name: "LED Lighting Solutions",
      description: "Energy-efficient LED lighting fixtures for indoor and outdoor applications with long lifespan and superior performance.",
      image: "https://images.unsplash.com/photo-1604122747172-5379bac4ea9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBsaWdodGluZyUyMGZpeHR1cmVzJTIwbW9kZXJufGVufDF8fHx8MTc1ODc0MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Sun,
      features: ["Energy saving", "Long lifespan", "Multiple designs"],
      specifications: [
        "Power: 5W - 200W",
        "Luminous Efficacy: 120-150 lm/W",
        "Color Temperature: 3000K-6500K",
        "CRI: >80",
        "Lifespan: 50,000+ hours",
        "Input Voltage: 85-265V AC",
        "Protection: IP65 (outdoor models)",
        "Dimming: 0-10V/DALI compatible"
      ],
      warranty: "5-year warranty on LED components",
      price: "Starting from $25 per fixture"
    }
  };

  return products[id as keyof typeof products] || null;
};

export function ProductDetails({ product: initialProduct, onBack }: ProductDetailsProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get enhanced product details
  const product = getProductDetails(initialProduct.id) || initialProduct;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast("Order submitted successfully! We'll contact you soon.", {
      description: `Your order for ${product.name} has been received.`,
      action: {
        label: "OK",
        onClick: () => console.log("Order confirmed"),
      },
    });

    setFormData({ name: "", phone: "", address: "", message: "" });
    setIsSubmitting(false);
  };

  const IconComponent = product.icon;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Information */}
          <div className="space-y-8">
            {/* Hero Image */}
            <Card className="overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Product Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl text-blue-900">{product.name}</CardTitle>
                  {product.price && (
                    <div className="text-2xl font-bold text-green-600">{product.price}</div>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <Star className="mr-2 w-5 h-5 text-yellow-500" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                {product.specifications && (
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                      <Award className="mr-2 w-5 h-5 text-blue-500" />
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="flex items-start space-x-3 py-2 border-b border-gray-100 last:border-b-0">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Warranty */}
                {product.warranty && (
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                      <Shield className="mr-2 w-5 h-5 text-blue-600" />
                      Warranty & Support
                    </h3>
                    <p className="text-blue-700">{product.warranty}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Truck className="mr-3 w-6 h-6" />
                  Order {product.name}
                </CardTitle>
                <p className="text-blue-100">
                  Fill out the form below and we'll contact you with a customized quote and installation timeline.
                </p>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="border-gray-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Installation Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter complete address where installation is needed"
                      required
                      rows={3}
                      className="border-gray-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requirements (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific requirements, questions, or preferred contact time?"
                      rows={3}
                      className="border-gray-200 focus:border-blue-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 h-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing Order...
                      </>
                    ) : (
                      <>
                        Submit Order Request
                        <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    <CheckCircle className="inline w-4 h-4 mr-1" />
                    Free consultation and quote • Professional installation • 24/7 support
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}