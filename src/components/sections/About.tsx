import { motion } from 'framer-motion';
import { BrainCircuit, BookOpen, Code, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section py-20">
      <motion.h2 
        className="section-title mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* 3D Card with Profile Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="perspective"
        >
          <div className="relative w-full max-w-md mx-auto transform-3d group">
            <div className="card p-12 h-full transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:shadow-xl">
              <div className="flex justify-center mb-8">
<div className="w-48 h-48 rounded-full overflow-hidden">
  <img src="/P12.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
</div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-4 text-dark-800 dark:text-light-100">
                Shekhar Shakti
              </h3>
              
              <div className="mb-4 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
                  Full Stack Developer
                </span>
              </div>
              
<div className="space-y-4 text-dark-600 dark:text-light-300">
  <div className="flex items-center">
    <BrainCircuit size={20} className="mr-3 text-primary-500" />
    <span>MERN Stack Enthusiast</span>
  </div>
  <div className="flex items-center">
    <BookOpen size={20} className="mr-3 text-primary-500" />
    <span>B.Tech Student at LPU (2022-2026)</span>
  </div>
  <div className="flex items-center">
    <Code size={20} className="mr-3 text-primary-500" />
    <span>DSA Problem Solver</span>
  </div>
  <div className="flex items-center">
    <Trophy size={20} className="mr-3 text-primary-500" />
    <span>500+ Problems Solved</span>
  </div>
</div>
            </div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-dark-700 dark:text-light-300"
        >
          <p className="text-lg">
            Hello! I'm Shekhar, a passionate Full Stack Developer and DSA enthusiast currently pursuing my B.Tech degree at Lovely Professional University.
          </p>
          
          <p>
            My journey into the world of coding began with a curiosity about how applications work behind the scenes. This curiosity has evolved into a deep passion for building robust and efficient web solutions using the MERN stack (MongoDB, Express, React, Node.js).
          </p>
          
          <p>
            I recently completed an intensive Data Structures and Algorithms training at GeeksforGeeks, where I honed my problem-solving skills using C++ and Java. This training has equipped me with the analytical mindset needed to approach complex programming challenges.
          </p>
          
          <p>
            When I'm not coding, you can find me solving problems on LeetCode, exploring new technologies, or contributing to open-source projects. I believe in continuous learning and am always looking for opportunities to expand my knowledge and skills.
          </p>
          
          <div className="pt-4">
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
