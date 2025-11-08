import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Developer",
      company: "ByteCode IT Solutions",
      period: "2025-Ongoing",
      description: "Started career building landing pages and small web applications by using ReactJS and JavaScript.",
      achievements: [
        "Mastered React fundamentals",
        "Collaborated with design team",
        "Enhanced my skills by 50%"
      ]
    },
    {
      title: "Junior Java Developer",
      company: "CodSoft",
      period: "July-August 2024",
      description: "Developed responsive small applications using OOPs and modern Java .",
      achievements: [
        "Built 5 small Gaming & Banking System  basic applications",
        "Developed and Debugged the code",
        "Implemented design system"
      ]
    },
    {
      title: "Google for Developers",
      company: "Eduskills",
      period: "April-June 2024",
      description: "Learned  the functionality and problem solving skills-A virtual Internship Program",

      achievements: [
        "Improved logical performance ",
            "Learn Time Management ","Good Learning experience"
      ]
    }
    
  ];

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={ref}
                className={`relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary transition-all duration-500 ${
                  isVisible ? 'shadow-glow scale-100' : 'scale-0'
                }`}></div>
              
                <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-glow transition-smooth hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;