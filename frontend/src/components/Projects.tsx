import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  category: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
const isDisabled = (link: string) => {
  return !link || link === "#" || link.trim() === "";
};

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A collection of end-to-end systems, iOS applications, and AI solutions built across my academic, freelance, and professional journey.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card rounded-xl overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">{tech}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                  {/* CODE BUTTON */}
                  {isDisabled(project.github) ? (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="flex-1 cursor-not-allowed opacity-50"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:border-primary transition-all"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}


                    {/* DEMO BUTTON */}
                    {isDisabled(project.demo) ? (
                      <Button
                        size="sm"
                        disabled
                        className="flex-1 bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
