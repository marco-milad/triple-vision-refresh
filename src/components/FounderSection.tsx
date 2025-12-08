import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="founder" className="py-28 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 max-w-6xl mx-auto">
          
          {/* Founder Image */}
          <motion.div
            className="relative flex-shrink-0 group"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="w-80 h-[440px] md:w-[420px] md:h-[520px] rounded-3xl bg-gradient-to-br from-purple-900/50 to-background/50 backdrop-blur-sm overflow-hidden shadow-2xl border border-border/30 transition-all duration-300 group-hover:shadow-3xl group-hover:scale-[1.02]">
              <img 
                src="https://res.cloudinary.com/dj1wzapty/image/upload/f_auto,q_auto,w_500,h_650,c_fill,g_auto/Gemini_Generated_Image_lmjgdolmjgdolmjg_1_qiv2ia"
                alt="Founder"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 mix-blend-lighten" 
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Founder Info */}
          <motion.div
            className="flex-1 text-left pt-0 md:pt-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <p className=" tracking-widest text-primary font-bold mb-4 uppercase">
              The Founder
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Behind Every Vision, There's a Story Worth Telling
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-0 max-w-xl font-light">
              With over a decade of passion, dedication, and creativity in branding and design,
              <span className="font-semibold text-foreground"> Triple Vision Agency </span>
              was built to redefine how brands express their identity.  
              Our philosophy blends strategy, art, and technology to create work that lasts.
            </p>

           {/* Signature */}
<motion.div 
  className="mb-4 -mt-6"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  <img 
    src="https://res.cloudinary.com/dj1wzapty/image/upload/f_auto,q_auto/1_uldvqt.png"
    className="h-40 md:h-48 w-auto object-contain object-left opacity-90 hover:opacity-100 transition-opacity filter brightness-110 -ml-20" 
    alt="Founder Signature"
  />
</motion.div>


            {/* Social Links */}
            <div className="flex gap-4">
              {[ 
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;