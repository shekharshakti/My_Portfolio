import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    title: "Node.js – Server Side JavaScript",
    issuer: "Coursera",
    date: "September 2023",
    description: "Learned server-side JavaScript programming with Node.js, including Express framework, RESTful APIs, and database integration.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "August 2023",
    description: "Comprehensive course on cloud computing concepts, architectures, services, and implementation strategies.",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 3,
    title: "Building Web Apps in PHP",
    issuer: "Coursera",
    date: "July 2023",
    description: "Learned PHP programming for web development, including database connectivity, forms handling, and security best practices.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    id: 4,
    title: "HTML, CSS, JS for Web Developers",
    issuer: "Coursera",
    date: "May 2023",
    description: "Learned front-end web development fundamentals, responsive design principles, and modern JavaScript programming.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  }
];

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certificatesData.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certificatesData.length) % certificatesData.length);
  };

  return (
    <section id="certificates" className="section py-20">
      <motion.h2 
        className="section-title mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>

      {/* Mobile View: Carousel */}
      <div className="md:hidden relative">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="card overflow-hidden"
        >
          <div className="relative h-48">
            <img 
              src={certificatesData[activeIndex].image} 
              alt={certificatesData[activeIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent flex flex-col justify-end p-4">
              <span className="text-white text-sm font-medium">{certificatesData[activeIndex].issuer} • {certificatesData[activeIndex].date}</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-dark-800 dark:text-light-100 mb-2">{certificatesData[activeIndex].title}</h3>
            <p className="text-dark-600 dark:text-light-300 mb-4">{certificatesData[activeIndex].description}</p>
            <a 
              href={certificatesData[activeIndex].link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
            >
              <span className="mr-1">View Certificate</span> 
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center mt-6 space-x-4">
          <button 
            onClick={prevCertificate} 
            className="p-2 rounded-full bg-light-300 dark:bg-dark-700 text-dark-700 dark:text-light-300 hover:bg-light-400 dark:hover:bg-dark-600 transition-colors"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center space-x-2">
            {certificatesData.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index 
                    ? 'bg-primary-500' 
                    : 'bg-light-400 dark:bg-dark-700'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextCertificate} 
            className="p-2 rounded-full bg-light-300 dark:bg-dark-700 text-dark-700 dark:text-light-300 hover:bg-light-400 dark:hover:bg-dark-600 transition-colors"
            aria-label="Next certificate"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Desktop View: Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {certificatesData.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="card overflow-hidden group transform perspective transition-all duration-500 hover:rotate-y-6 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48">
              <img 
                src={certificate.image} 
                alt={certificate.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent flex flex-col justify-end p-4">
                <span className="text-white text-sm font-medium">{certificate.issuer} • {certificate.date}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-dark-800 dark:text-light-100 mb-2">{certificate.title}</h3>
              <p className="text-sm text-dark-600 dark:text-light-300 mb-4 line-clamp-3">{certificate.description}</p>
              <a 
                href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary-500 hover:text-primary-600 transition-colors text-sm"
              >
                <span className="mr-1">View Certificate</span> 
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;