import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Database, Layers, User } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Learning Management System",
    description: "A comprehensive LMS platform built with the MERN stack. Features include course management, user authentication, and REST APIs.",
    image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["MongoDB", "Express", "React", "Node.js", "REST API"],
    features: [
      "User authentication and authorization",
      "Course creation and management",
      "Student enrollment and progress tracking",
      "Responsive design for all devices"
    ],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Job Hunt Platform",
    description: "A job search and application platform that connects job seekers with employers. Built using the MERN stack with a responsive design.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    features: [
      "Job posting and application",
      "User profile management",
      "Advanced search and filtering",
      "Responsive UI with Tailwind CSS"
    ],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section py-20">
      <motion.h2 
        className="section-title mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="card perspective group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium bg-primary-500/80 text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-dark-700 dark:text-light-300 mb-4">{project.description}</p>
              
              <h4 className="text-lg font-semibold text-dark-800 dark:text-light-100 mb-2">Key Features:</h4>
              <ul className="mb-6 space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={activeProject === project.id ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * featureIndex }}
                  >
                    <div className="mr-2 mt-1 text-primary-500">
                      {featureIndex === 0 ? <Server size={16} /> : 
                       featureIndex === 1 ? <Database size={16} /> : 
                       featureIndex === 2 ? <Layers size={16} /> : 
                       <User size={16} />}
                    </div>
                    <span className="text-dark-600 dark:text-light-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center gap-2 text-sm px-4 py-2"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center gap-2 text-sm px-4 py-2"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <Github className="mr-2" size={20} />
          View More on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;