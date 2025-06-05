import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "TypeScript", "Bash", "SQL"],
    "Frontend Technologies": ["Next.js", "React.js", "Vue.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "Vuetify"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
    "Backend Technologies": ["Node.js", "FastAPI", "Flask", "Django", "Spring", "Celery", "gRPC", "MVC", "RESTful APIs", "GraphQL", "Redis", "Nginx"],
    "Cloud & Infrastructure": ["AWS","EC2", "S3", "RDS", "Lambda", "CloudFormation", "Amplify", "Cognito", "API Gateway", "SQS", "Microsoft Azure", "GCP"],
    "CI/CD & DevOps": ["Docker", "Kubernetes", "Docker Compose", "GitHub Actions", "Jenkins", "GitLab CI", "Terraform"],
    "System Design & Architecture": ["Microservices Architecture", "High Availability Systems", "Scalability", "Fault Tolerance", "API Design"],
    "Other Tools & Integrations": ["Prisma ORM", "OpenTelemetry", "Grafana", "NextAuth", "Chrome Extensions (Manifest V3)", "Vercel", "Render"],
    "Operating Systems": ["Linux", "Windows", "macOS"]
  };

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                className="glass p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-4 text-[hsl(var(--electric-blue))]">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-[#1a1a1a] 
                        text-white rounded-md text-sm
                        border border-white/20
                        hover:bg-[#2a2a2a]
                        hover:border-white/40
                        transition-all duration-200 cursor-default"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
