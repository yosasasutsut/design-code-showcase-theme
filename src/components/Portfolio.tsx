
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Building, Smartphone } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Municipal Service Portal",
      description: "Comprehensive web platform for city services, permits, and citizen engagement",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Government"],
      category: "Government",
      icon: <Building className="h-4 w-4" />
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management and scheduling system for medical facilities",
      image: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=600&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "MongoDB", "Healthcare"],
      category: "Private Sector",
      icon: <Building className="h-4 w-4" />
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions",
      image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Encryption", "FinTech"],
      category: "Mobile App",
      icon: <Smartphone className="h-4 w-4" />
    },
    {
      title: "E-Government Tax Portal",
      description: "Digital tax filing and payment system for state revenue department",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Java", "Oracle DB", "Security"],
      category: "Government",
      icon: <Building className="h-4 w-4" />
    },
    {
      title: "Fleet Management App",
      description: "Real-time vehicle tracking and maintenance scheduling for logistics company",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      tags: ["Flutter", "GPS Integration", "AWS", "IoT"],
      category: "Mobile App",
      icon: <Smartphone className="h-4 w-4" />
    },
    {
      title: "Document Management System",
      description: "Secure document storage and workflow management for federal agency",
      image: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?w=600&h=400&fit=crop",
      tags: ["Angular", "Node.js", "Azure", "Compliance"],
      category: "Government",
      icon: <Building className="h-4 w-4" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing successful digital solutions delivered to our government and private sector clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20">
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                      {project.icon}
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-slate-300 text-slate-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
