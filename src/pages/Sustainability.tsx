import sustainabilityVessel from "@/assets/sustainability-vessel.jpg";

const Sustainability = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <img
          src={sustainabilityVessel}
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
          <h1 className="text-5xl font-bold mb-6 text-center text-white">Sustainable Fishing</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
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
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Science-Based Harvesting */}
            <div className="relative bg-white p-8 rounded-[10px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-[#0047BB]">
              <div className="absolute top-6 left-6 text-[120px] font-bold text-[#EFEFEF] leading-none select-none">1</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Science-Based Harvesting</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">Collaboration with <strong>marine biologists</strong> to set catch limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">Prioritization of <strong>seasonal fishing</strong> to protect spawning grounds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">Usage of <strong>selective gear</strong> to minimize bycatch</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Full-Supply Chain Traceability */}
            <div className="relative bg-white p-8 rounded-[10px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-[#0047BB]">
              <div className="absolute top-6 left-6 text-[120px] font-bold text-[#EFEFEF] leading-none select-none">2</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Full-Supply Chain Traceability</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80"><strong>Blockchain-tracked</strong> from vessel to vendor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80"><strong>MSC/ASC certifications</strong> where applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80"><strong>Transparent sourcing</strong> documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ecosystem Protection */}
            <div className="relative bg-white p-8 rounded-[10px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-[#0047BB]">
              <div className="absolute top-6 left-6 text-[120px] font-bold text-[#EFEFEF] leading-none select-none">3</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Ecosystem Protection</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">Avoid fishing in <strong>vulnerable marine areas</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">Participate in <strong>habitat restoration</strong> initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">Strict ban on <strong>illegal, unreported fishing</strong> (IUU)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ethical Fleet Operations */}
            <div className="relative bg-white p-8 rounded-[10px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-[#0047BB]">
              <div className="absolute top-6 left-6 text-[120px] font-bold text-[#EFEFEF] leading-none select-none">4</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Ethical Fleet Operations</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">Modern vessels with <strong>reduced fuel consumption</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80"><strong>Waste reduction programs</strong> onboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0047BB] mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80"><strong>Fair labor practices</strong> across all operations</span>
                  </li>
                </ul>
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
