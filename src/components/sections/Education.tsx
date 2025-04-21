import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "B.Tech",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2022 - 2026",
    description: "Currently pursuing a Bachelor of Technology degree with a CGPA of 7.30.",
    icon: <GraduationCap size={24} />,
  },
  {
    id: 2,
    degree: "12th Standard",
    institution: "DAV Public School",
    location: "Sasaram, Bihar",
    duration: "2020 - 2022",
    description: "Completed higher secondary education with 71% marks.",
    icon: <BookOpen size={24} />,
  },
  {
    id: 3,
    degree: "10th Standard",
    institution: "DAV Public School",
    location: "Sasaram, Bihar",
    duration: "2019 - 2020",
    description: "Completed secondary education with 81% marks.",
    icon: <Award size={24} />,
  },
];

const Education = () => {
  return (
    <section id="education" className="section py-20 bg-light-200 dark:bg-dark-800">
      <motion.h2 
        className="section-title mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-500/30 rounded-full"></div>

          {/* Timeline Items */}
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="relative flex flex-col md:flex-row items-center md:items-start mb-12 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white z-10">
                {item.icon}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
              } pl-16 md:pl-0`}>
                <div className="card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-primary-500 mb-1">{item.degree}</h3>
                  <h4 className="text-lg font-semibold text-dark-700 dark:text-light-200">{item.institution}</h4>
                  <div className="text-sm text-dark-500 dark:text-light-400 mb-3">{item.location} | {item.duration}</div>
                  <p className="text-dark-600 dark:text-light-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;