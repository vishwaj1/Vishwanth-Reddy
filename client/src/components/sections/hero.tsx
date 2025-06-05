import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern workspace background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern developer workspace" 
          className="w-full h-full object-cover opacity-20" 
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div 
          className="animate-float"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Hi, I'm <span className="gradient-text">Alex Chen</span>
          </h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Full Stack Developer & Data Enthusiast
          </motion.p>
          <motion.p 
            className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build innovative web applications and data tools that help developers find insights and turn complex questions into actionable SQL queries.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button className="px-8 py-4 gradient-bg text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 animate-glow">
            View My Work
          </button>
          <button className="px-8 py-4 glass text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
            Download Resume
          </button>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 glass rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 glass rounded-full animate-float opacity-30" style={{animationDelay: '4s'}}></div>
    </section>
  );
}
