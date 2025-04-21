import { motion } from 'framer-motion';
import SkillsSphere from '../canvas/SkillsSphere';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C++", "Java", "JavaScript", "C", "HTML", "CSS"]
  },
  {
    name: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "Redux"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"]
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "MS Office", "Postman"]
  },
  {
    name: "Concepts",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "System Design"]
  }
];

// Extract all skills for the 3D visualization
const allSkills = skillsData.flatMap(category => category.skills);

const Skills = () => {
  return (
    <section id="skills" className="section py-20 bg-light-200 dark:bg-dark-800">
      <motion.h2 
        className="section-title mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 3D Skills Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <SkillsSphere skills={allSkills} />
        </motion.div>

        {/* Skills Categories */}
        <div className="order-1 lg:order-2 space-y-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary-500 mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="bg-light-300 dark:bg-dark-700 px-4 py-2 rounded-full text-dark-700 dark:text-light-300 text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: '#6366f1',
                      color: '#ffffff' 
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;