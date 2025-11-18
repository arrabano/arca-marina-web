import { Award, Globe, Shield, Users } from "lucide-react";
import coastalLandscape from "@/assets/coastal-landscape.jpg";
import valuesWaveBackground from "@/assets/values-wave-background.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <img
          src={coastalLandscape}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="100vw"
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

      {/* Main Content - Two Column Layout */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[35%_65%] gap-12 md:gap-16 lg:gap-20 items-start">
              {/* Headline Column */}
              <div className="flex items-center md:sticky md:top-32">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Where Quality Meets the Ocean
                </h2>
              </div>

              {/* Body Content Column with increased right padding */}
              <div className="space-y-8 pr-4 md:pr-12 lg:pr-20">
                {/* Block 1: Company Identity */}
                <div className="p-6 md:p-8 border-l-4 border-primary bg-background/50 rounded-r-lg">
                  <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75] text-foreground/90 mb-4">
                    <strong className="font-semibold text-foreground">Arca Marina</strong> is a global seafood trading company dedicated to bringing the ocean's finest fish to tables around the world.
                  </p>
                  <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75] text-foreground/90">
                    Our mission is to promote health and well-being by delivering pure, sustainably sourced seafood—exactly as nature provides it, with <strong className="font-semibold text-foreground">no compromises on quality or integrity.</strong>
                  </p>
                </div>

                {/* Block 2: Values & Partnerships */}
                <div className="p-6 md:p-8 border-l-4 border-primary bg-background/50 rounded-r-lg">
                  <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75] text-foreground/90 mb-4">
                    Through strategic global partnerships, Arca Marina has rapidly established itself as a trusted supplier, renowned for our unwavering commitment to <strong className="font-semibold text-foreground">ethical practices, sustainability and complete traceability</strong> throughout the supply chain.
                  </p>
                  <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75] text-foreground/90">
                    We work exclusively with fisheries and producers who share our values, ensuring every product meets the highest standards of excellence.
                  </p>
                </div>

                {/* Block 3: Operations & Expertise */}
                <div className="p-6 md:p-8 border-l-4 border-primary bg-background/50 rounded-r-lg">
                  <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75] text-foreground/90 mb-4">
                    From wild-caught fish to responsibly farmed shellfish, Arca Marina offers a <strong className="font-semibold text-foreground">diverse selection of premium seafood</strong>—processed at sea or in state-of-the-art onshore facilities.
                  </p>
                  <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75] text-foreground/90">
                    Our team brings together expertise from across the globe, and our operations span the world's most abundant fishing regions, guaranteeing freshness and reliability for customers everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-48 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <img
          src={valuesWaveBackground}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-20">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
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

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
