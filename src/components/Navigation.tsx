
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo placeholder - user will replace with their 200x200 logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SH</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Software House
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-blue-600 transition-colors">Home</a>
            <a href="#skills" className="text-foreground hover:text-blue-600 transition-colors">Skills</a>
            <a href="#services" className="text-foreground hover:text-blue-600 transition-colors">Services</a>  
            <a href="#portfolio" className="text-foreground hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a href="#home" className="block text-foreground hover:text-blue-600 transition-colors">Home</a>
            <a href="#skills" className="block text-foreground hover:text-blue-600 transition-colors">Skills</a>
            <a href="#services" className="block text-foreground hover:text-blue-600 transition-colors">Services</a>
            <a href="#portfolio" className="block text-foreground hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contact" className="block text-foreground hover:text-blue-600 transition-colors">Contact</a>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
