import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const basicProjects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind", "TypeScript"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Weather App",
      description: "Real-time weather application using OpenWeather API",
      tech: ["React", "API", "CSS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Todo List",
      description: "Task management app with local storage functionality",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const advancedProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      tech: ["React", "D3.js", "Firebase", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses",
      tech: ["React", "WebSocket", "OpenAI", "TypeScript"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof basicProjects[0]; index: number }) => {
    const { ref, isVisible } = useScrollAnimation();
    
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        <Card className="bg-card border-border hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group h-full hover:scale-105 hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="group-hover:text-primary transition-smooth">{project.title}</CardTitle>
            <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary text-foreground">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">A collection of my recent work</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded"></span>
            Basic Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded"></span>
            Advanced Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
