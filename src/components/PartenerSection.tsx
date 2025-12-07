import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "Partner 1", logo: "https://via.placeholder.com/200x80?text=Partner+1" },
  { id: 2, name: "Partner 2", logo: "https://via.placeholder.com/200x80?text=Partner+2" },
  { id: 3, name: "Partner 3", logo: "https://via.placeholder.com/200x80?text=Partner+3" },
  { id: 4, name: "Partner 4", logo: "https://via.placeholder.com/200x80?text=Partner+4" },
  { id: 5, name: "Partner 5", logo: "https://via.placeholder.com/200x80?text=Partner+5" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/200x80?text=Partner+6" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/200x80?text=Partner+6" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/200x80?text=Partner+6" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/200x80?text=Partner+6" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/200x80?text=Partner+6" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/200x80?text=Partner+6" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/200x80?text=Partner+6" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
       <AnimatedSection className="text-center mb-16">
  {/* Subheading صغير لتمييز القسم */}
  <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
    Our Partners
  </span>

  {/* العنوان الرئيسي */}
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight">
    Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Industry Leaders</span>
  </h2>

  {/* وصف مختصر واحترافي */}
  <p className="text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl">
    We proudly collaborate with top brands and organizations worldwide, delivering innovative solutions and exceptional results that drive success.
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