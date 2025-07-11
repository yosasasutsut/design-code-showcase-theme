
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your digital transformation? Let's discuss how we can help your organization succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Let's Discuss Your Project</h3>
              <p className="text-slate-600">
                Whether you're a government agency looking for compliant solutions or a private business 
                seeking digital innovation, we're here to help transform your ideas into reality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">contact@bestcyberconsulting.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 123-CYBER</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">123 Technology Drive, Innovation District, DC 20001</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Business Hours</h4>
                  <p className="text-slate-600">Mon - Fri: 8:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border border-slate-200 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Request a Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <Input placeholder="John" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <Input placeholder="Doe" className="border-slate-300" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <Input type="email" placeholder="john.doe@company.com" className="border-slate-300" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Organization</label>
                <Input placeholder="Your Company/Agency" className="border-slate-300" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Project Type</label>
                <select className="w-full h-10 px-3 py-2 border border-slate-300 rounded-md bg-background text-sm">
                  <option>Select project type</option>
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>Government Solution</option>
                  <option>Enterprise System</option>
                  <option>Cloud Migration</option>
                  <option>Digital Transformation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                  className="min-h-[120px] border-slate-300"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Send className="h-4 w-4 mr-2" />
                Send Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
