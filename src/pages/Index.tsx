import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen relative z-10">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <ScrollToTop />
      
      <footer className="py-8 px-4 text-center border-t border-border">
        <p className="text-muted-foreground">
          © 2024 Portfolio. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;