import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Strategic digital marketing campaigns",
  "Award-winning creative design team",
  "Data-driven decision making",
  "24/7 dedicated support",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-card overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              CRAFTING DIGITAL
              <br />
              <span className="text-gradient">SUCCESS STORIES</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Triple Vision Agency is a full-service digital marketing and creative agency. 
              We combine strategic thinking with creative excellence to help brands stand out 
              in the digital landscape and connect with their audiences in meaningful ways.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Discover Our Story
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Main image placeholder with geometric design */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-dark to-purple-deep rounded-3xl rotate-6 transform" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-purple-medium/30 rounded-2xl -rotate-3" />
              
              {/* Main container */}
              <div className="relative h-full bg-card-gradient rounded-2xl border border-border/50 p-8 flex items-center justify-center overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-primary/40 rounded-full" />
                <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-purple-medium/40 rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
                
                {/* Center content */}
                <div className="relative text-center z-10">
                  <div className="font-display text-7xl md:text-8xl text-primary mb-4">10+</div>
                  <div className="text-foreground text-lg font-medium">Years of Excellence</div>
                  <div className="text-muted-foreground text-sm mt-2">in Digital Marketing</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-4 top-1/4 bg-card border border-border/50 rounded-xl p-4 shadow-lg animate-float">
              <div className="font-display text-2xl text-primary">50+</div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </div>
            <div className="absolute -right-4 bottom-1/4 bg-card border border-border/50 rounded-xl p-4 shadow-lg animate-float-delayed">
              <div className="font-display text-2xl text-primary">150+</div>
              <div className="text-xs text-muted-foreground">Projects Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
