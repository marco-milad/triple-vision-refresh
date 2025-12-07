import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="founder" className="py-28 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 max-w-6xl mx-auto">

          {/* Founder Image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="w-80 h-[440px] md:w-[420px] md:h-[520px] rounded-3xl bg-muted overflow-hidden shadow-xl border border-border/30">
              <img
                src="https://res.cloudinary.com/dcui0elwh/image/upload/v1765142389/mario1_ro5hky.jpg"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Founder Info */}
          <motion.div
            className="flex-1 text-left pt-0 md:pt-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-sm tracking-widest text-primary font-medium mb-4">
              THE FOUNDER
            </p>

            <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-6">
              Behind Every Vision, There’s a Story Worth Telling
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl font-light">
              With over a decade of passion, dedication, and creativity,
              <span className="font-semibold text-foreground"> Triple Vision Agency</span>
              was built to redefine how brands express their identity.  
              Our philosophy blends strategy, art, and technology to create work that lasts.
            </p>

            {/* Signature */}
            <div className="mb-10 opacity-70">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Cpath d='M10,40 Q30,20 50,35 T90,30' stroke='%23888' stroke-width='2' fill='none'/%3E%3C/svg%3E"
                alt="Signature"
                className="h-12"
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[ 
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Twitter, href: "https://twitter.com" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all shadow-sm hover:shadow-md"
                >
                  <item.icon size={22} className="text-primary" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
