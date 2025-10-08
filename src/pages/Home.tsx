import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fish, Award, Globe } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
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
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white hover:bg-white hover:text-black backdrop-blur-sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/5 rounded-2xl mb-6 group-hover:bg-primary/10 transition-colors">
                <Fish className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Flash-frozen at sea to preserve natural freshness and premium taste
              </p>
            </div>

            <div className="group text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/5 rounded-2xl mb-6 group-hover:bg-primary/10 transition-colors">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">MSC Certified</h3>
              <p className="text-muted-foreground leading-relaxed">
                All products meet the highest standards of sustainability and traceability
              </p>
            </div>

            <div className="group text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/5 rounded-2xl mb-6 group-hover:bg-primary/10 transition-colors">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trusted supplier with reliable exports worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
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
