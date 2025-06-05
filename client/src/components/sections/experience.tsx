import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2021 - Present",
    description: "Led development of enterprise data analytics platform serving 10k+ users. Implemented AI-powered query optimization reducing response times by 60%.",
    color: "electric-blue"
  },
  {
    title: "Full Stack Developer",
    company: "StartupHub Inc.",
    period: "2019 - 2021",
    description: "Built scalable web applications using React and Node.js. Developed real-time collaboration features and integrated multiple third-party APIs.",
    color: "deep-purple"
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2018 - 2019",
    description: "Created responsive web interfaces for client projects. Specialized in performance optimization and cross-browser compatibility.",
    color: "electric-blue"
  }
];

export function ExperienceSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 gradient-bg"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-[hsl(var(--${exp.color}))] rounded-full border-4 border-[#0A0A0A]`}></div>
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className={`text-[hsl(var(--${exp.color}))] mb-2`}>{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
