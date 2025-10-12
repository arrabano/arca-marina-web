import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fish, Award, Snowflake } from "lucide-react";
import productsFish from "@/assets/products-fish.jpg";
import atlanticCod from "@/assets/product-atlantic-cod.jpg";
import atlanticHaddock from "@/assets/product-atlantic-haddock.jpg";
import pinkSalmon from "@/assets/product-pink-salmon.jpg";
import chumSalmon from "@/assets/product-chum-salmon.jpg";
import redKingCrab from "@/assets/product-red-king-crab.jpg";
import redCaviar from "@/assets/product-red-caviar.jpg";
import blackCaviar from "@/assets/product-black-caviar.jpg";

const products = [
  {
    name: "Atlantic Cod",
    description: "Caught in the icy waters of the Barents Sea",
    details: "Perfect for fillets, salted cod, and traditional bacalao",
    certification: "MSC-certified",
    image: atlanticCod
  },
  {
    name: "Atlantic Haddock",
    description: "Mild, flaky white fish ideal for frying and grilling",
    details: "MSC-certified fisheries",
    certification: "MSC-certified",
    image: atlanticHaddock
  },
  {
    name: "Pink Salmon",
    description: "Wild-caught in the Pacific",
    details: "Available as whole fish, fillets, or canned",
    certification: "Sustainable",
    image: pinkSalmon
  },
  {
    name: "Chum Salmon",
    description: "Renowned for its lean texture and rich flavor",
    details: "Frozen at sea to preserve freshness",
    certification: "Wild-caught",
    image: chumSalmon
  },
  {
    name: "Red King Crab",
    description: "Harvested from the nutrient-rich waters of the Far East",
    details: "Live, frozen, or cooked sections",
    certification: "Premium",
    image: redKingCrab
  },
  {
    name: "Red Caviar (Salmon Roe)",
    description: "Bright, delicate pearls with balanced brininess",
    details: "Sourced from sustainable salmon fisheries",
    certification: "Sustainable",
    image: redCaviar
  },
  {
    name: "Black Caviar (Sturgeon)",
    description: "Luxurious, buttery Caspian Sea caviar",
    details: "CITES-certified and traceable",
    certification: "CITES-certified",
    image: blackCaviar
  }
];

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <img
          src={productsFish}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-center text-white">Our Products</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
            Arca Marina's Ocean's Finest Fish Seafood Selection
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">
              We specialize in wild-caught, sustainably sourced fish and seafood from pristine Arctic and Pacific waters. 
              Each product reflects our commitment to quality, traceability, and responsible fishing practices.
            </p>
            <p className="text-lg leading-relaxed">
              We ensure all our seafood is processed and flash-frozen at sea immediately after harvest, preserving its 
              natural freshness and premium taste. Our shore-processed products undergo single freezing to maintain optimal 
              texture and flavor integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const getBadgeVariant = (cert: string) => {
                if (cert.toLowerCase().includes('sustainable')) return 'sustainable';
                if (cert.toLowerCase().includes('msc') || cert.toLowerCase().includes('cites')) return 'certified';
                if (cert.toLowerCase().includes('premium')) return 'premium';
                return 'wildcaught';
              };

              return (
                <Card 
                  key={product.name} 
                  className="overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
                >
                  {/* Background Image */}
                  <img
                    src={product.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  {/* Enhanced overlay for text readability */}
                  <div className="absolute inset-0 bg-white/75 dark:bg-black/70" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl font-bold mb-3">{product.name}</CardTitle>
                      <Badge variant={getBadgeVariant(product.certification)} className="mb-3 w-fit">
                        <Award className="w-3.5 h-3.5 mr-1.5" />
                        {product.certification}
                      </Badge>
                      <CardDescription className="text-base text-foreground/90">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-foreground/80">{product.details}</p>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Arca Marina?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Fish className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Full Traceability</h3>
              <p className="opacity-90">From ocean to table</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
              <p className="opacity-90">MSC-certified fisheries | FSSC-certified production | HACCP practices</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Snowflake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flash Frozen</h3>
              <p className="opacity-90">Preserves freshness and quality</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Fish className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="opacity-90">Tailored processing and packaging</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
