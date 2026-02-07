import ScrollReveal from "./ScrollReveal";
import ProjectCarousel from "./ProjectCarousel";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#020408]">
      {/* Laser Lines Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary animate-pulse" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">
              ENGINEERING <span className="text-primary text-glow-cyan not-italic">BREAKTHROUGHS</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
};



export default ProjectsSection;
