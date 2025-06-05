import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    title: "Software Engineer",
    company: "University of Maryland Baltimore County",
    period: "Aug 2024 - May 2025",
    description: [
      "Delivered Campus Pantry, a real-time meal-reservation site that lowers food waste and aids food-insecure students.",
      "Built React and TypeScript front end with Redux and Google Maps, mobile loads under one second for more than two thousand users.",
      "Designed REST and GraphQL APIs with Node.js, Express, PostgreSQL, implemented JWT role-based auth, and sustained about 3000 reservation requests per day with an error rate under one percent.",
      "Containerised services in Docker and wired a GitHub Actions CI/CD pipeline for blue-green deployments on AWS EC2 and RDS, added OpenTelemetry and Grafana monitoring that cut average API latency from 450 ms to 180 ms."
    ],
    color: "electric-blue"
  },
  {
    title: "Full Stack Developer",
    company: "Healthcare Solutions Inc.",
    period: "June 2022 - May 2023",
    description: [
      "Helped rebuild a hospital dashboard using React + TypeScript, cutting load time by 35% and improving overall user experience.",
      "Developed secure APIs in Node.js for patient scheduling and reports, using JWT/OAuth for login and data protection.",
      "Containerized the app using Docker, and worked on Kubernetes deployment with auto-scaling and smooth updates.",
      "Added an AI-powered feature that suggests diagnosis codes using a BERT model, reducing manual work for doctors by 22%."
    ],
    color: "deep-purple"
  },
  {
    title: "Software Developer",
    company: "Tech Innovations Lab",
    period: "June 2021 - May 2022",
    description: [
      "Contributed to building EchoLens, an AI-driven meeting assistant using FastAPI, Celery, and HuggingFace (T5, BART) to summarize transcripts and extract action items from audio.",
      "Integrated AssemblyAI for transcription and speaker diarization, storing audio in AWS S3 and processed data in DynamoDB, with scalable deployment via Docker on AWS EC2.",
      "Developed the frontend with React.js, Tailwind CSS, and Web Audio API for synced playback and transcript highlights.",
      "Implemented Slack and Google Calendar APIs and used JWT Auth to automate follow-ups and built CI/CD using GitHub Actions."
    ],
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
                    <ul className="text-gray-300 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[hsl(var(--${exp.color}))] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
