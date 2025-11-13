import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fish, Award, Globe } from "lucide-react";
import norwayLandscape from "@/assets/norway-landscape.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
        {/* Video Background */}
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="/hero-poster.jpg"
          disablePictureInPicture
          disableRemotePlayback
          webkit-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Ocean's Finest Fish
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Premium sustainably sourced seafood from pristine Arctic and Pacific waters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="brand-filled" className="text-lg rounded-xl px-8">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="brand-outline" className="text-lg rounded-xl px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden bg-white" style={{ backgroundColor: 'hsl(0 0% 100%)' }}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Arca Marina
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry-leading standards in sustainable seafood sourcing and distribution
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative text-center p-10 bg-card/50 backdrop-blur-sm rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Fish className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Premium Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flash-frozen at sea to preserve natural freshness and premium taste
                </p>
              </div>
            </div>

            <div className="group relative text-center p-10 bg-card/50 backdrop-blur-sm rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">MSC Certified</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All products meet the highest standards of sustainability and traceability
                </p>
              </div>
            </div>

            <div className="group relative text-center p-10 bg-card/50 backdrop-blur-sm rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Globe className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trusted supplier with reliable exports worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <img
          src={norwayLandscape}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          sizes="100vw"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join our network of satisfied clients worldwide and experience the Arca Marina difference
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
