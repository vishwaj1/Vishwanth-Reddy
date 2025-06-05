import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const projects = [
  {
    id: 1,
    title: "SQL Query Assistant",
    description: "Revolutionary data tool that transforms natural language questions into optimized SQL queries. Perfect for developers who want to analyze data without complex query writing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "AI/ML", "PostgreSQL", "Natural Language Processing"],
    category: "data"
  },
  {
    id: 2,
    title: "DataInsight Dashboard",
    description: "Comprehensive analytics platform that helps developers identify trends and patterns in their data through intuitive visualizations and automated insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "D3.js", "Node.js", "Data Visualization"],
    category: "data"
  },
  {
    id: 3,
    title: "Query Builder Pro",
    description: "Visual query builder that allows developers to construct complex SQL queries through drag-and-drop interface, making database interactions more accessible.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["TypeScript", "React", "SQL", "Database Tools"],
    category: "data"
  },
  {
    id: 4,
    title: "TrendScope Analytics",
    description: "Advanced trend analysis tool that automatically detects patterns in time-series data and provides actionable insights for business intelligence.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "Machine Learning", "FastAPI", "Time Series"],
    category: "data"
  },
  {
    id: 5,
    title: "DevData Toolkit",
    description: "Complete suite of data tools for developers including schema analyzers, query optimizers, and performance monitors for database operations.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Next.js", "GraphQL", "Redis", "Performance Monitoring"],
    category: "web"
  },
  {
    id: 6,
    title: "Smart Data Explorer",
    description: "Mobile-first application that connects to multiple data sources and provides AI-powered exploration capabilities for on-the-go data analysis.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["React Native", "AI Integration", "Multi-Database"],
    category: "mobile"
  }
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref, isIntersecting } = useIntersectionObserver();

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const filters = [
    { id: "all", label: "All" },
    { id: "data", label: "Data Tools" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" }
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
                  className="w-full h-48 object-cover" 
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
                    <a href="#" className="text-[hsl(var(--electric-blue))] hover:text-[hsl(var(--deep-purple))] transition-colors">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="#" className="text-[hsl(var(--electric-blue))] hover:text-[hsl(var(--deep-purple))] transition-colors">
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
