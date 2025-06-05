import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Professional portrait */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Professional developer portrait" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Data Tool Creator & Full Stack Developer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in building innovative data tools that help developers find insights and trends in their data. My focus is on creating applications that translate natural language questions into optimized SQL queries, making data analysis accessible and intuitive.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With expertise in modern web technologies and database systems, I create tools that bridge the gap between complex data analysis and user-friendly interfaces, empowering developers to make data-driven decisions effortlessly.
            </p>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: "fab fa-js-square", name: "JavaScript" },
                { icon: "fab fa-react", name: "React" },
                { icon: "fab fa-node-js", name: "Node.js" },
                { icon: "fas fa-database", name: "SQL" },
                { icon: "fab fa-python", name: "Python" },
                { icon: "fab fa-aws", name: "AWS" }
              ].map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="glass p-4 rounded-lg text-center skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <i className={`${skill.icon} text-3xl text-[hsl(var(--electric-blue))] mb-2`}></i>
                  <p className="text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
