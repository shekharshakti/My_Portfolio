import { Github, Linkedin, Mail, MapPin, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-200 dark:bg-dark-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Shekhar Shakti
            </motion.h3>
            <motion.p 
              className="text-dark-700 dark:text-light-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full Stack Developer & DSA Enthusiast, crafting intuitive and performant web applications.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://leetcode.com/shekharshakti/" target="_blank" rel="noopener noreferrer" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Code size={20} />
              </a>
              <a href="mailto:shekharrajput7050@gmail.com" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <li>
                <a href="#home" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </motion.ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Contact
            </motion.h3>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                <span className="text-dark-700 dark:text-light-300">Sasaram, Bihar 821115</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-500 flex-shrink-0" />
                <a href="mailto:shekharrajput7050@gmail.com" className="text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  shekharrajput7050@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="border-t border-light-400 dark:border-dark-700 mt-8 pt-8 text-center text-dark-700 dark:text-light-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p>&copy; {currentYear} Shekhar Shakti. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
