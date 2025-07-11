
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-blue-50/20 to-purple-50/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Creative Code
                </span>
                <br />
                Meets Design
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We're a software house that blends exceptional graphic design with cutting-edge coding expertise. 
                Transform your ideas into stunning digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Expert Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Creative Design</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
                <div className="h-32 bg-white/10 rounded-xl flex items-center justify-center">
                  <Code className="h-16 w-16 text-white/40" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 bg-white/20 rounded"></div>
                  <div className="h-8 bg-white/20 rounded"></div>
                  <div className="h-8 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
