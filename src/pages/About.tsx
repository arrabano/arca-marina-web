import { Award, Globe, Shield, Users } from "lucide-react";
import coastalLandscape from "@/assets/coastal-landscape.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${coastalLandscape})` }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-center text-white">About Arca Marina</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
            A global seafood trading company dedicated to bringing the ocean's finest fish to tables around the world
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-ocean-blue-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                <strong className="text-primary">Arca Marina</strong> is a global seafood trading company dedicated to bringing the{" "}
                <strong>ocean's finest fish</strong> to tables around the world. Our mission is to promote health and well-being by 
                delivering pure, sustainably sourced seafood—exactly as nature provides it, with no compromises on quality or integrity.
              </p>

              <p className="text-lg leading-relaxed">
                Through strategic global partnerships, Arca Marina has rapidly established itself as a trusted supplier, renowned for 
                our unwavering commitment to <strong>ethical practices, sustainability and complete traceability</strong> throughout 
                the supply chain. We work exclusively with fisheries and producers who share our values, ensuring every product meets 
                the highest standards of excellence.
              </p>

              <p className="text-lg leading-relaxed">
                From wild-caught fish to responsibly farmed shellfish, Arca Marina offers a diverse selection of premium seafood—processed 
                at sea or in state-of-the-art onshore facilities. Our team brings together expertise from across the globe, and our 
                operations span the world's most abundant fishing regions, guaranteeing freshness and reliability for customers everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-background to-ocean-blue-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-background rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                No compromises on quality or integrity
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                Complete traceability and ethical practices
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">
                Operations across abundant fishing regions
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-muted-foreground">
                Team expertise from across the globe
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
