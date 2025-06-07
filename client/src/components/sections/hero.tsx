import { motion } from "framer-motion";
import profileImage from '@/assets/profile.jpeg';
import profileImage1 from '@/assets/profile2.jpeg';
import { useState } from 'react';
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export function HeroSection() {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Modern workspace background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern developer workspace" 
          className="w-full h-full object-cover opacity-20" 
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
              Hi, I'm <span className="gradient-text">Vishwanth</span>
            </h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Software Engineer
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg mb-12 text-white bg-gradient-to-r from-[#2a2a72]/50 to-[#009ffd]/50 p-4 sm:p-6 rounded-xl border border-white/20 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Focused on building scalable web applications and integrating AI to create smarter, more intuitive user experiences. Skilled across the full stack — from crafting responsive frontends to designing robust backend systems and deploying them in the cloud. Passionate about clean code, practical solutions, and constantly learning new ways to push technology forward.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a 
                href="https://vishwaj1.github.io/docs/VishwanthReddy.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 gradient-bg text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 animate-glow flex items-center gap-2"
              >
                <FaFileAlt className="text-xl" />
                Resume
              </a>
              <a 
                href="http://linkedin.com/in/jvvr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 glass text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/vishwaj1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 glass text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--neon-purple))] rounded-2xl blur-xl opacity-30"></div>
              <img 
                src={isHovered ? profileImage : profileImage1} 
                alt="Vishwanth Reddy Jakka" 
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 glass rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 glass rounded-full animate-float opacity-30" style={{animationDelay: '4s'}}></div>
    </section>
  );
}
