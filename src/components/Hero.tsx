import { Button } from "@/components/ui/button";
import { Github, LecternIcon, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background/50"></div>
      
      {/* Soft floating orbs for cinematic effect */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 animate-fade-in-down">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium text-primary mb-4 animate-pop-in shadow-soft">
            Aspiring Full Stack Developer
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer animate-fade-in-up">
          “Crafting Experiences, Not Just Code”
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Passionate about creating beautiful, functional, and user-friendly web applications
        </p>
        
        <div className="flex flehttps://twitter.comx-wrap gap-4 justify-center mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-glow hover:scale-110 transition-transform font-medium"
          >
             Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-110 transition-all backdrop-blur-sm"
          >
            Get In Touch, would love to collaborate
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://github.com/snehagupta9576908" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-smooth hover:scale-110 animate-pop-in shadow-soft"
            style={{ animationDelay: '0.7s' }}
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="www.linkedin.com/in/
sneha-gupta-a48477253" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-smooth hover:scale-110 animate-pop-in shadow-soft"
            style={{ animationDelay: '0.8s' }}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://leetcode.com/u/java_obs/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-smooth hover:scale-110 animate-pop-in shadow-soft"
            style={{ animationDelay: '0.9s' }}
          >
            <LecternIcon className="w-5 h-5" />
          </a>
          <a 
            href="mailto:contact@example.com"
            className="p-3 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-smooth hover:scale-110 animate-pop-in shadow-soft"
            style={{ animationDelay: '1s' }}
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;