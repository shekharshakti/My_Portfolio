import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award, CheckSquare, Calendar } from 'lucide-react';

const trainingData = {
  title: "GeeksforGeeks – DSA with C++ & Java",
  duration: "June 2024 - July 2024",
  description: "An intensive training program focused on Data Structures and Algorithms using C++ and Java programming languages.",
  topics: [
    "Arrays, Linked Lists, Stacks, and Queues",
    "Hashmaps, Heaps, and Trees",
    "Big-O analysis and optimization techniques",
    "Recursion and Backtracking strategies",
    "Dynamic Programming and Greedy Algorithms"
  ],
  achievements: [
    "Implemented key data structures from scratch",
    "Optimized algorithms for time and space complexity",
    "Participated in coding contests and hackathons"
  ]
};

const Training = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="training" className="section py-20 bg-light-200 dark:bg-dark-800">
      <motion.h2 
        className="section-title mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Training
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`card overflow-hidden transition-all duration-500 ${isExpanded ? 'transform-gpu hover:-translate-y-2' : ''}`}
          whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-primary-500 mb-2">{trainingData.title}</h3>
                <div className="flex items-center text-dark-600 dark:text-light-400 mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>{trainingData.duration}</span>
                </div>
              </div>
              <Award size={40} className="text-accent-500" />
            </div>

            <p className="text-dark-700 dark:text-light-300 mb-6">{trainingData.description}</p>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full py-2 px-4 rounded-lg bg-light-300 dark:bg-dark-700 text-dark-800 dark:text-light-200 font-medium transition-colors hover:bg-light-400 dark:hover:bg-dark-600"
            >
              <span>View Details</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-800 dark:text-light-100 mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white mr-2">
                          1
                        </span>
                        Topics Covered
                      </h4>
                      <ul className="space-y-3">
                        {trainingData.topics.map((topic, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                          >
                            <CheckSquare size={18} className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                            <span className="text-dark-600 dark:text-light-300">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-800 dark:text-light-100 mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white mr-2">
                          2
                        </span>
                        Achievements
                      </h4>
                      <ul className="space-y-3">
                        {trainingData.achievements.map((achievement, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                          >
                            <CheckSquare size={18} className="mr-2 mt-1 text-accent-500 flex-shrink-0" />
                            <span className="text-dark-600 dark:text-light-300">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Training;
