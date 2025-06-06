import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const education = [
  {
    school: "University of Maryland Baltimore County",
    degree: "Master of Science in Computer Science",
    period: "Aug 2023 - May 2025",
    gpa: "3.81/4.0",
    color: "electric-blue"
  },
  {
    school: "Vasavi College of Engineering",
    degree: "Bachelor of Science in Computer Science",
    period: "Aug 2019 - May 2023",
    gpa: "3.6/4.0",
    color: "deep-purple"
  }
];

export function EducationSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="education" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 gradient-bg"></div>
          
          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="relative flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-[hsl(var(--${edu.color}))] rounded-full border-4 border-[#0A0A0A]`}></div>
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                    <p className={`text-[hsl(var(--${edu.color}))] mb-2`}>{edu.degree}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-300">GPA: {edu.gpa}</p>
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