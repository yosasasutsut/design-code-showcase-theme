
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Shield } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "50+", label: "Projects Delivered" },
    { icon: <Award className="h-6 w-6" />, number: "15+", label: "Government Clients" },
    { icon: <Clock className="h-6 w-6" />, number: "8+", label: "Years Experience" },
    { icon: <Shield className="h-6 w-6" />, number: "100%", label: "Security Compliant" }
  ];

  const values = [
    {
      title: "Security First",
      description: "We prioritize security in every solution, ensuring compliance with government standards and industry best practices."
    },
    {
      title: "Agile Delivery",
      description: "Our agile methodology ensures rapid development cycles while maintaining high quality and client collaboration."
    },
    {
      title: "Scalable Solutions",
      description: "We build applications that grow with your organization, handling increased users and data seamlessly."
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team provides round-the-clock assistance to keep your systems running smoothly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            About <span className="text-blue-600">Bestcyber Consulting</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A trusted technology partner specializing in secure, scalable digital solutions 
            for government agencies and private enterprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              At Bestcyber Consulting, we bridge the gap between complex business requirements 
              and innovative technology solutions. Our team of experienced developers and consultants 
              work closely with government agencies and private businesses to deliver custom applications 
              that drive efficiency, enhance security, and enable digital transformation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With deep expertise in both web and mobile development, we understand the unique 
              challenges faced by our clients in the public and private sectors. Our solutions 
              are designed to meet strict compliance requirements while delivering exceptional 
              user experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-800">Government Certified</Badge>
              <Badge className="bg-slate-100 text-slate-800">ISO 27001</Badge>
              <Badge className="bg-blue-100 text-blue-800">HIPAA Compliant</Badge>
              <Badge className="bg-slate-100 text-slate-800">Security Certified</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-3">
                <h4 className="text-lg font-semibold text-slate-900">{value.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
