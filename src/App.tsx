import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Training from './components/sections/Training';
import Certificates from './components/sections/Certificates';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-light-100 dark:bg-dark-900 text-dark-900 dark:text-light-100 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Hero />
          </div>
          
<main className="relative z-0">
  <About />
  <Education />
  <Projects />
  <Training />
  <Certificates />
  <Skills />
  <Contact />
</main>
          
          <Footer />
        </motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;
