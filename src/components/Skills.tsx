
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Smartphone, Globe, Database, Zap } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Creating stunning visual experiences",
      skills: ["UI/UX Design", "Brand Identity", "Illustration", "Motion Graphics", "Print Design", "Logo Design"],
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development", 
      description: "Building responsive and interactive interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "API Design", "Cloud Services"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform apps",
      skills: ["React Native", "Flutter", "iOS", "Android", "App Store Optimization"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine creative design thinking with technical excellence to deliver outstanding results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10 hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
