import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const partners = [
  { 
    id: 1, 
    name: "Partner 1", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765217061/triple-vision-agency-partner5_hncc1t.svg" 
  },
  { 
    id: 2, 
    name: "Partner 2", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765215718/triple-vision-agency-partner3_ivozpl.svg" 
  },
  { 
    id: 3, 
    name: "Partner 3", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765215913/triple-vision-agency-partner4_q5m1tr.svg" 
  },
  { 
    id: 4, 
    name: "Partner 4", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 5, 
    name: "Partner 5", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 6, 
    name: "Partner 6", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 7, 
    name: "Partner 7", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 8, 
    name: "Partner 8", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 9, 
    name: "Partner 9", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 10, 
    name: "Partner 10", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 11, 
    name: "Partner 11", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 12, 
    name: "Partner 12", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
  { 
    id: 12, 
    name: "Partner 12", 
    logo: "https://res.cloudinary.com/dj1wzapty/image/upload/v1765213799/triple-vision-agency-partner1_pblbdl.svg" 
  },
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
                className="group relative p-8 rounded-xl bg-white/10 border border-border/50 hover:border-primary/50 hover:bg-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={partner.logo}
                  alt={partner.name}
className="w-full h-20 object-contain transition-all duration-300 relative z-10 scale-150"
                  loading="lazy"
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