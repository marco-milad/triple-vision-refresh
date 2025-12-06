import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brand Identity Redesign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 2,
    title: "Digital Campaign Launch",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 4,
    title: "Corporate Event Production",
    category: "Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              FEATURED PROJECTS
            </h2>
          </div>
          <a
            href="#"
            className="text-primary font-medium flex items-center gap-2 hover:gap-4 transition-all group"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-90' : 'opacity-60'}`} />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-primary text-sm font-medium tracking-wide mb-2">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  {project.title}
                </h3>
                <div className={`flex items-center gap-2 text-foreground font-medium transition-all duration-300 ${hoveredId === project.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                  View Project
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 transition-transform duration-500 ${hoveredId === project.id ? 'translate-x-0 translate-y-0' : 'translate-x-full -translate-y-full'}`}>
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
