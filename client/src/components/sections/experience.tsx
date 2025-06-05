import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    title: "Senior Data Tools Developer",
    company: "Your Company",
    period: "2022 - Present",
    description: "Leading development of innovative data analysis tools that translate natural language into SQL queries. Created solutions that help developers access data insights 10x faster than traditional methods.",
    color: "electric-blue"
  },
  {
    title: "Full Stack Developer",
    company: "Tech Innovation Lab",
    period: "2020 - 2022",
    description: "Built comprehensive data visualization platforms and developer tools. Specialized in creating intuitive interfaces for complex database operations and analytics workflows.",
    color: "deep-purple"
  },
  {
    title: "Software Developer",
    company: "Data Solutions Inc.",
    period: "2018 - 2020",
    description: "Developed web applications focused on data processing and analysis. Created tools that automated complex data workflows and improved developer productivity.",
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
