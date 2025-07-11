
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Bestcyber</span>
              <span className="text-sm text-muted-foreground">Consulting</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-foreground hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#projects" className="text-foreground hover:text-blue-600 transition-colors font-medium">Projects</a>
            <a href="#about" className="text-foreground hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors font-medium">Contact</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Quote
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
            <a href="#home" className="block text-foreground hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#services" className="block text-foreground hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#projects" className="block text-foreground hover:text-blue-600 transition-colors font-medium">Projects</a>
            <a href="#about" className="block text-foreground hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="block text-foreground hover:text-blue-600 transition-colors font-medium">Contact</a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
