import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 glass transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/95' : 'bg-white/10'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">Alex Chen</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">Contact</button>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 glass z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <button onClick={() => scrollToSection('home')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[hsl(var(--electric-blue))] transition-colors">Contact</button>
          </div>
        </motion.div>
      )}
    </>
  );
}
