import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 bg-card overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-glow/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            LET'S CREATE
            <br />
            <span className="text-gradient">SOMETHING GREAT</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with us and let's discuss how we can help your brand grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-background/50 rounded-2xl border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-1">Email Us</h4>
                <p className="text-muted-foreground">hello@triplevision.agency</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background/50 rounded-2xl border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-1">Call Us</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background/50 rounded-2xl border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-1">Visit Us</h4>
                <p className="text-muted-foreground">123 Creative District, Design City</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/50 rounded-2xl border border-border/50 p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full group">
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
