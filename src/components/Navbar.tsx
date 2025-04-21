import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Home, 
  User, 
  GraduationCap, 
  FolderKanban, 
  Medal,
  Award, 
  Cpu, 
  Mail
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Education', href: '#education', icon: <GraduationCap size={20} /> },
    { name: 'Projects', href: '#projects', icon: <FolderKanban size={20} /> },
    { name: 'Training', href: '#training', icon: <Medal size={20} /> },
    { name: 'Certificates', href: '#certificates', icon: <Award size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Cpu size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-light-100/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="text-2xl font-bold text-primary-500 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-extrabold">S</span>
          <span className="font-light">hekhar</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * navItems.indexOf(item) }}
              >
                <a
                  href={item.href}
                  className="font-medium text-dark-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Dark mode toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-300"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-300"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-300"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-light-100 dark:bg-dark-800 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * navItems.indexOf(item) }}
                >
                  <a
                    href={item.href}
                    className="flex items-center py-3 px-4 rounded-lg font-medium text-dark-700 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;