import { Leaf, Search, Heart, Users } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Sustainable Fishing</h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            Preserving Ocean Resources for Future Generations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xl leading-relaxed">
              At Arca Marina, we believe world-class fish and seafood start with responsible ocean stewardship. 
              We partner exclusively with fisheries that align business operations with sustainability, implementing 
              industry-best practices and honoring marine ecosystems through time-tested methods.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Checklist */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partner Check-list</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Science-Based Harvesting */}
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">1. Science-Based Harvesting</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Collaboration with marine biologists to set catch limits</li>
                    <li>• Prioritization of seasonal fishing to protect spawning grounds</li>
                    <li>• Usage of selective gear to minimize bycatch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Full-Supply Chain Traceability */}
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">2. Full-Supply Chain Traceability</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Blockchain-tracked from vessel to vendor</li>
                    <li>• MSC/ASC certifications where applicable</li>
                    <li>• Transparent sourcing documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ecosystem Protection */}
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">3. Ecosystem Protection</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Avoid fishing in vulnerable marine areas</li>
                    <li>• Participate in habitat restoration initiatives</li>
                    <li>• Strict ban on illegal, unreported fishing (IUU)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ethical Fleet Operations */}
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">4. Ethical Fleet Operations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Modern vessels with reduced fuel consumption</li>
                    <li>• Waste reduction programs onboard</li>
                    <li>• Fair labor practices across all operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why It Matters</h2>
            <blockquote className="text-2xl italic text-center leading-relaxed">
              "We don't just take from the ocean – we ensure it thrives. By choosing Arca Marina, 
              you support fishing methods that maintain biodiversity and coastal communities."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
