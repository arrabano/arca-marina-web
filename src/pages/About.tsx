import { Award, Globe, Shield, Users } from "lucide-react";
import coastalLandscape from "@/assets/coastal-landscape.jpg";

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

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-[750px] mx-auto space-y-8">
            <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75]">
              <strong className="font-semibold text-foreground">Arca Marina</strong> is a global seafood trading company dedicated to bringing the ocean's finest fish to tables around the world.
            </p>

            <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75]">
              Our mission is to promote health and well-being by delivering pure, sustainably sourced seafood—exactly as nature provides it, with <strong className="font-semibold text-foreground">no compromises on quality or integrity.</strong>
            </p>

            <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75]">
              Through strategic global partnerships, Arca Marina has rapidly established itself as a trusted supplier, renowned for our unwavering commitment to <strong className="font-semibold text-foreground">ethical practices, sustainability and complete traceability</strong> throughout the supply chain.
            </p>

            <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75]">
              We work exclusively with fisheries and producers who share our values, ensuring every product meets the highest standards of excellence.
            </p>

            <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75]">
              From wild-caught fish to responsibly farmed shellfish, Arca Marina offers a <strong className="font-semibold text-foreground">diverse selection of premium seafood</strong>—processed at sea or in state-of-the-art onshore facilities.
            </p>

            <p className="text-[17px] md:text-[18px] leading-[1.7] md:leading-[1.75]">
              Our team brings together expertise from across the globe, and our operations span the world's most abundant fishing regions, guaranteeing freshness and reliability for customers everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #E8F2F7 0%, #D4E8F0 100%)' }}>
        {/* Decorative Wave Patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,100 Q150,80 300,100 T600,100 T900,100 T1200,100 T1500,100 T1800,100 L1800,0 L0,0 Z" fill="none" stroke="#0047BB" strokeWidth="1.5" opacity="0.3"/>
          <path d="M0,120 Q150,100 300,120 T600,120 T900,120 T1200,120 T1500,120 T1800,120" fill="none" stroke="#0047BB" strokeWidth="1.5" opacity="0.25"/>
          <path d="M0,140 Q150,120 300,140 T600,140 T900,140 T1200,140 T1500,140 T1800,140" fill="none" stroke="#0047BB" strokeWidth="1.5" opacity="0.2"/>
          <path d="M0,160 Q150,140 300,160 T600,160 T900,160 T1200,160 T1500,160 T1800,160" fill="none" stroke="#0047BB" strokeWidth="1.5" opacity="0.15"/>
          
          <path d="M1800,400 Q1650,420 1500,400 T1200,400 T900,400 T600,400 T300,400 T0,400" fill="none" stroke="#0047BB" strokeWidth="1.5" opacity="0.3"/>
          <path d="M1800,380 Q1650,400 1500,380 T1200,380 T900,380 T600,380 T300,380 T0,380" fill="none" stroke="#0047BB" strokeWidth="1.5" opacity="0.25"/>
          <path d="M1800,360 Q1650,380 1500,360 T1200,360 T900,360 T600,360 T300,360 T0,360" fill="none" stroke="#0047BB" strokeWidth="1.5" opacity="0.2"/>
          <path d="M1800,340 Q1650,360 1500,340 T1200,340 T900,340 T600,340 T300,340 T0,340" fill="none" stroke="#0047BB" strokeWidth="1.5" opacity="0.15"/>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
