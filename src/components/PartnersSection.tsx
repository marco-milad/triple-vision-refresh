import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "Partner 1", logo: "https://via.placeholder.com/200x80?text=Partner+1" },
  { id: 2, name: "Partner 2", logo: "https://via.placeholder.com/200x80?text=Partner+2" },
  { id: 3, name: "Partner 3", logo: "https://via.placeholder.com/200x80?text=Partner+3" },
  { id: 4, name: "Partner 4", logo: "https://via.placeholder.com/200x80?text=Partner+4" },
  { id: 5, name: "Partner 5", logo: "https://via.placeholder.com/200x80?text=Partner+5" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/200x80?text=Partner+6" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            TRUSTED BY <span className="text-transparent bg-clip-text bg-orange-gradient">INDUSTRY LEADERS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading brands and organizations to deliver exceptional results
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <StaggerItem key={partner.id}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PartnersSection;
