import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-glow/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-primary/30 rotate-45"
        animate={{ 
          y: [-20, 20, -20],
          rotate: [45, 90, 45]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-2/3 right-1/4 w-16 h-16 border-2 border-purple-medium/40 rounded-full"
        animate={{ 
          y: [20, -20, 20],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary/20 rounded-lg"
        animate={{ 
          y: [-15, 15, -15],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5 
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Triple Vision Agency</span>
          </motion.div>

        <motion.h1 
  className="leading-tight mb-6"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
>
  <span className="block text-4xl sm:text-5xl md:text-6xl font-medium tracking-widest">
    A Full Service
  </span>
  <span className="block text-6xl sm:text-5xl md:text-8xl font-bold text-gradient">
    Media Agency
  </span>
</motion.h1>


          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
Digital agency crafting impactful, user-centric
experiences with cutting-edge design and technology
for maximum success. Innovative digital agency
crafting impactful solutions          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button variant="hero" size="lg" className="group">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg" className="group">
              <Play className="w-5 h-5" />
              Learn More 
            </Button>
          </motion.div>

        {/* Stats */}
<motion.div 
  className="grid grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/30"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.8 }}
>
  {[
    { number: 180, label: "Projects Delivered", suffix: "+" },
    { number: 500, label: "Happy Clients", suffix: "+" },
    { number: 10, label: "Years Experience", suffix: "+" },
    { number: 1500, label: "Cups of Tea", suffix: "+" },
  ].map((stat, index) => (
    <motion.div 
      key={stat.label} 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
    >
      <div className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-2">
        <CountUp
          start={0}
          end={stat.number}
          duration={4}
          suffix={stat.suffix}
        />
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  ))}
</motion.div>
        </div>
      </div>

     
    </section>
  );
};

export default HeroSection;
