import { Globe } from "lucide-react";

export function CountriesSection() {
  const countries = [
    { name: "Côte d'Ivoire", flag: "🇨🇮", code: "CI" },
    { name: "Ghana", flag: "🇬🇭", code: "GH" },
    { name: "Nigeria", flag: "🇳🇬", code: "NG" },
    { name: "Senegal", flag: "🇸🇳", code: "SN" },
    { name: "Mali", flag: "🇲🇱", code: "ML" },
    { name: "Burkina Faso", flag: "🇧🇫", code: "BF" },
    { name: "Benin", flag: "🇧🇯", code: "BJ" },
    { name: "Togo", flag: "🇹🇬", code: "TG" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background World Map Silhouette */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='%23374151' d='M158 206c-1 3-3 4-6 2l-5-4c-2-2-3-4-2-7 1-2 3-3 5-2l6 4c2 2 3 5 2 7zm679-85c2 1 3 3 2 5l-3 4c-1 2-3 2-5 1l-4-3c-2-1-2-3-1-5l3-4c1-2 3-2 5-1l3 3zm-185 85c3 0 5-2 5-5s-2-5-5-5-5 2-5 5 2 5 5 5zm-89-35c3 0 5-2 5-5s-2-5-5-5-5 2-5 5 2 5 5 5zm200-30c2 1 4 0 5-2l2-5c1-2 0-4-2-5l-5-2c-2-1-4 0-5 2l-2 5c-1 2 0 4 2 5l5 2zm-510 120c3 1 6 0 8-2l15-15c2-2 2-5 0-7l-15-15c-2-2-5-2-7 0l-15 15c-2 2-2 5 0 7l15 15c2 2 5 2 7 0zm85-75c4 0 7-3 7-7s-3-7-7-7-7 3-7 7 3 7 7 7zm200 50c2 2 5 2 7 0l10-10c2-2 2-5 0-7l-10-10c-2-2-5-2-7 0l-10 10c-2 2-2 5 0 7l10 10zm-300-100c3 0 6-2 7-5l5-12c1-3 0-6-3-7l-12-5c-3-1-6 0-7 3l-5 12c-1 3 0 6 3 7l12 5zm450 25c4 1 8-1 9-5l3-15c1-4-1-8-5-9l-15-3c-4-1-8 1-9 5l-3 15c-1 4 1 8 5 9l15 3zm-200 75c3 0 5-2 5-5s-2-5-5-5-5 2-5 5 2 5 5 5zm-150-50c2 0 4-1 5-3l8-12c1-2 1-5-1-6l-12-8c-2-1-5-1-6 1l-8 12c-1 2-1 5 1 6l12 8c1 1 2 1 3 1z'/%3E%3C/svg%3E")`,
            filter: 'opacity(0.4)'
          }}
        />
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <Globe className="w-32 h-32 text-blue-600" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-15">
        <Globe className="w-24 h-24 text-green-500" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900">
            Global Reach, Local Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing sustainable solar energy solutions to communities across West Africa and beyond, 
            with deep local knowledge and international standards.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {countries.map((country, index) => (
            <div
              key={country.code}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>
                <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                  {country.name}
                </h3>
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-900">15+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-900">1000+</div>
            <div className="text-gray-600">Local Partners</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-900">24/7</div>
            <div className="text-gray-600">Support Network</div>
          </div>
        </div>
      </div>
    </section>
  );
}