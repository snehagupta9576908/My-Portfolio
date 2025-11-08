import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const education = [
    {
      degree: "Bachelor in Information Technology",
      school: "  Dr. A P J Abdul Kalam Tech University Lucknow",
      year: "2022 - 2026",
      description: "Foundation in computer science and software development",
      achievements: ["GPA: 3.0/4.0", "2xRunnerUp in Badminton"]
    },
    {
      degree: "Intermediate",
      school: "U.P Board English Medium",
      year: "2022",
      description: "Foundation in Mathematics,Physics,Chemistry",
      achievements:["Holds All over 2nd Rank on being Mathematics Student"]
    }
     ,{
      degree: "High School",
      school: "U.P Board English Medium",
      year: "2020",
      description: "Foundation in Mathematics,Physics,Chemistry",
      achievements:["Holds All over 1st Rank on being Mathematics Student"]
    }
  ];

  const certifications = [
    "Udemy certification-Full Stack Web  Development",
    "Codsoft Intern - Junior Java  Developer",
    "Google for Developers - Virtual Internship  supported India EDU Program",
    
  ];

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">Academic background and certifications</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <Card className="bg-card border-border shadow-card hover:shadow-glow transition-smooth hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-card border-border shadow-card sticky top-4">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-3 p-3 bg-secondary rounded-lg hover:bg-primary/10 transition-smooth"
                    >
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
