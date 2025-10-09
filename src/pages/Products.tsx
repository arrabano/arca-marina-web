import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fish, Award, Snowflake } from "lucide-react";
import productsFish from "@/assets/products-fish.jpg";

const products = [
  {
    name: "Atlantic Cod",
    description: "Caught in the icy waters of the Barents Sea",
    details: "Perfect for fillets, salted cod, and traditional bacalao",
    certification: "MSC-certified"
  },
  {
    name: "Atlantic Haddock",
    description: "Mild, flaky white fish ideal for frying and grilling",
    details: "MSC-certified fisheries",
    certification: "MSC-certified"
  },
  {
    name: "Pink Salmon",
    description: "Wild-caught in the Pacific",
    details: "Available as whole fish, fillets, or canned",
    certification: "Sustainable"
  },
  {
    name: "Chum Salmon",
    description: "Renowned for its lean texture and rich flavor",
    details: "Frozen at sea to preserve freshness",
    certification: "Wild-caught"
  },
  {
    name: "Red King Crab",
    description: "Harvested from the nutrient-rich waters of the Far East",
    details: "Live, frozen, or cooked sections",
    certification: "Premium"
  },
  {
    name: "Red Caviar (Salmon Roe)",
    description: "Bright, delicate pearls with balanced brininess",
    details: "Sourced from sustainable salmon fisheries",
    certification: "Sustainable"
  },
  {
    name: "Black Caviar (Sturgeon)",
    description: "Luxurious, buttery Caspian Sea caviar",
    details: "CITES-certified and traceable",
    certification: "CITES-certified"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsFish})` }}
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
      <section className="py-12 bg-ocean-blue-light">
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
            {products.map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        <Award className="w-3 h-3 mr-1" />
                        {product.certification}
                      </Badge>
                    </div>
                    <Fish className="w-8 h-8 text-primary" />
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-ocean-blue text-ocean-blue-foreground">
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
