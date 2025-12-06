import { Film, Calendar, Globe, Code, Palette, Radio, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Media Production",
    description: "We understand the power of media to reach minds and hearts. High-quality video and audio production that tells your story.",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "We don't just plan events. We design magical experiences to create happiness and lasting memories.",
  },
  {
    icon: Globe,
    title: "Digital Media Services",
    description: "In the social media jungle, only unique voices can be heard. We make yours stand out strategically.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Your online experience affects how clients see your brand. We craft websites that reflect your vision.",
  },
  {
    icon: Palette,
    title: "Graphics & Branding",
    description: "We never forget the art at the core. Designing visual identity with an artistic touch that captivates.",
  },
  {
    icon: Radio,
    title: "PR & Media Monitoring",
    description: "Stay ahead of the conversation. We monitor, analyze, and strategize your public relations presence.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-dark/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/10 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            WE MEDIALIZE IT
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-card-gradient rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-medium scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
