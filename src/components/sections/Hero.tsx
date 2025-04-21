import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Code, ChevronDown } from 'lucide-react'; // Add ChevronDown icon
import ParticlesCanvas from '../canvas/ParticlesCanvas';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll down handler
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Particles Background */}
      {isMounted && <ParticlesCanvas />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 text-transparent bg-clip-text"
          >
            Shekhar Shakti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-dark-600 dark:text-light-300 mb-8 max-w-2xl"
          >
            Full Stack Developer | MERN Stack | DSA Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="btn btn-outline"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/shekharshakti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="LeetCode"
            >
              <Code size={24} />
            </a>
<a
  href="/shekharrajput.pdf"
  download
  className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
  aria-label="Download CV"
>
  <Download size={24} />
</a>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <ChevronDown size={40} className="text-primary-500 hover:text-primary-700 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
