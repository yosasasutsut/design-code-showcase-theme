
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Shield, Database, Cloud, Cog } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Application Development",
      description: "Custom web applications built with modern frameworks and technologies",
      features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions", "Content Management Systems"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Government Solutions",
      description: "Secure, compliant applications for public sector organizations",
      features: ["Security Compliance", "Data Protection", "Accessibility Standards", "Government Integration"],
      color: "from-blue-600 to-slate-600"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Enterprise Systems",
      description: "Scalable backend systems and database solutions for large organizations",
      features: ["API Development", "Database Design", "System Integration", "Performance Optimization"],
      color: "from-slate-600 to-gray-700"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Cloud-native applications and migration services",
      features: ["AWS & Azure", "Microservices", "DevOps Pipeline", "Auto Scaling"],
      color: "from-blue-500 to-slate-500"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      features: ["Process Automation", "Legacy Modernization", "Digital Strategy", "Change Management"],
      color: "from-slate-500 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored for government agencies and private businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-105 transition-transform`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
