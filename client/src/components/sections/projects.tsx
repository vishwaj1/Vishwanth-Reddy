import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const projects = [
  {
    id: 1,
    title: "PrettyPrompt",
    description: "Developed a Next.js and Tailwind CSS frontend with a FastAPI backend and Groq integration to rewrite, shorten, lengthen, and re-tone prompts using multiple LLMs, with real-time scoring and comparison. Implemented user authentication, prompt history, and template CRUD using NextAuth, Prisma ORM, and Supabase/Postgres, with full CORS support and responsive UI controls for seamless prompt management.",
    image: "/Vishwanth-Reddy/client/src/images/pretty-prompt.png",
    tags: ["Next.js", "FastAPI", "Groq", "NextAuth", "Prisma", "Supabase", "PostgreSQL"],
    category: "web",
    link: "https://prettyprompt.vercel.app/"
  },
  {
    id: 2,
    title: "Voice-Powered Chrome Extension",
    description: "Built Web Talk at HackHound2025 a hands-free web browsing Chrome extension that converts speech to text (WebSpeechAPI) and routes commands through Groq + Gemma2-9b-it LLMs. Executes tab/page actions via Chrome Tabs & Scripting APIs under ManifestV3, summarizes and answers question about the page. Further roadmap includes multilingual input and TTS feedback.",
    image: "/Vishwanth-Reddy/client/src/images/web-talk.png",
    tags: ["Chrome Extension", "WebSpeechAPI", "Groq", "Gemma2-9b-it", "ManifestV3"],
    category: "web",
    link: "https://github.com/vishwaj1/Web-Talk"
  },
  {
    id: 3,
    title: "Anonymous Grading System",
    description: "Developed a Java-based grading system that automated exam evaluations using barcode scanning and student-ID mapping, boosting grading speed by 60%. Built a secure backend with AWS Amplify, Cognito, GraphQL, and DynamoDB, reducing manual grading errors by 80%.",
    image: "/Vishwanth-Reddy/client/src/images/anonymous-grading-system.jpeg",
    tags: ["Java", "AWS Amplify", "Cognito", "GraphQL", "DynamoDB"],
    category: "mobile",
    link: "https://github.com/vishwaj1/Anonymous-Grading-System"
  },
  {
    id: 4,
    title: "Adaptive Genre Gaming",
    description: "Designed and developed EpicTale, an AI-driven fiction game that dynamically crafts storylines across genres using player decisions for immersive, replayable narratives. Built the frontend using React.js and CSS Modules, with features like character and genre selection supporting 50+ identity combinations. Integrated OpenAI APIs and managed story flow via Context API and Node.js backend, enabling branching narratives across 5+ genres including Mystical Thriller and Time Travel.",
    image: "/Vishwanth-Reddy/client/src/images/adaptive-genre-gaming.jpeg",
    tags: ["React.js", "CSS Modules", "OpenAI API", "Node.js", "Context API"],
    category: "web",
    link: "https://github.com/vishwaj1/EpicTale"
  },
  {
    id: 5,
    title: "Distributed File System",
    description: "Developed a secure peer-to-peer file system with AES encryption and MySQL database integration. Implemented user authentication, file operations (create, read, update, delete), and file sharing capabilities. Built a GUI interface for file management with features like directory creation, file sharing with access control, and secure data transmission between peers.",
    image: "/Vishwanth-Reddy/client/src/images/Distributed-file-system.jpeg",
    tags: ["Python", "MySQL", "AES Encryption", "Socket Programming", "GUI"],
    category: "system",
    link: "https://github.com/vishwaj1/Distributed-File-System"
  },
  {
    id: 6,
    title: "Weapon Detection System",
    description: "Developed a real-time weapon detection system using AlexNet deep learning architecture, achieving 95% accuracy. Optimized model data preprocessing techniques, reducing training time by 30% and improving inference speed. Reduced latency in real-time detection by fine-tuning inference pipelines, decreasing processing time by 40% for video stream analysis. Enhanced public safety by designing a scalable detection system, enabling integration with surveillance networks and reducing false positives by 20%.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["AlexNet", "Deep Learning", "Computer Vision", "Python", "Real-time Processing"],
    category: "ml",
    link: "https://github.com/vishwaj1/WeaponDetectionUsingAlexnet"
  },
  // {
  //   id: 7,
  //   title: "DevData Toolkit",
  //   description: "Complete suite of data tools for developers including schema analyzers, query optimizers, and performance monitors for database operations.",
  //   image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  //   tags: ["Next.js", "GraphQL", "Redis", "Performance Monitoring"],
  //   category: "web"
  // },
  // {
  //   id: 8,
  //   title: "Smart Data Explorer",
  //   description: "Mobile-first application that connects to multiple data sources and provides AI-powered exploration capabilities for on-the-go data analysis.",
  //   image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  //   tags: ["React Native", "AI Integration", "Multi-Database"],
  //   category: "mobile"
  // }
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref, isIntersecting } = useIntersectionObserver();

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ml", label: "ML" },
    { id: "system", label: "System" }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#111111]" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 glass rounded-full transition-all ${
                activeFilter === filter.id 
                  ? 'bg-[hsl(var(--electric-blue))]' 
                  : 'hover:bg-[hsl(var(--electric-blue))]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-contain bg-[#1a1a1a] p-2" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-[hsl(var(--electric-blue))]/20 text-[hsl(var(--electric-blue))] rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    
                    <a href={project.link} target="_blank"  className="text-[hsl(var(--electric-blue))] hover:text-[hsl(var(--deep-purple))] transition-colors">
                      <i className="fab fa-github"></i> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
