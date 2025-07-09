
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 ${scrolled ? 'bg-dark/90 dark:bg-dark/90' : 'bg-transparent'} backdrop-blur-md border-b ${scrolled ? 'border-gray-800' : 'border-transparent'} transition-all duration-300`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-oralia rounded-full flex items-center justify-center">
              <span className="text-white font-bold">O</span>
            </div>
            <span className="font-bold text-xl text-white dark:text-white">Oralia</span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Features', 'Industries', 'Mission', 'Blog', 'Try It', 'Integration'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              {item === 'Mission' ? (
                <Link to="/mission" className="text-sm font-medium text-gray-300 hover:text-oralia transition-colors">
                  {item}
                </Link>
              ) : item === 'Blog' ? (
                <Link to="/blog" className="text-sm font-medium text-gray-300 hover:text-oralia transition-colors">
                  {item}
                </Link>
              ) : (
                <button 
                  onClick={() => handleSectionNavigation(item === 'Industries' ? 'verticals' : item.toLowerCase().replace(' ', ''))}
                  className="text-sm font-medium text-gray-300 hover:text-oralia transition-colors"
                >
                  {item}
                </button>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button className="bg-oralia hover:bg-oralia-dark text-white transition-all duration-300">Get Started</Button>
          </motion.div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <motion.button 
            className="p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-dark-accent dark:bg-dark-accent border-t border-gray-800"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              <motion.button 
                onClick={() => {
                  handleSectionNavigation('features');
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-sm font-medium text-gray-300 hover:text-oralia w-full text-left" 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 5 }}
              >
                Features
              </motion.button>
              <motion.button 
                onClick={() => {
                  handleSectionNavigation('verticals');
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-sm font-medium text-gray-300 hover:text-oralia w-full text-left" 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
              >
                Industries
              </motion.button>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <Link to="/mission" className="block py-2 text-sm font-medium text-gray-300 hover:text-oralia" onClick={() => setIsMenuOpen(false)}>
                  Mission
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <Link to="/blog" className="block py-2 text-sm font-medium text-gray-300 hover:text-oralia" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </motion.div>
              <motion.button 
                onClick={() => {
                  handleSectionNavigation('tryit');
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-sm font-medium text-gray-300 hover:text-oralia w-full text-left" 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                Try It
              </motion.button>
              <motion.button 
                onClick={() => {
                  handleSectionNavigation('integration');
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-sm font-medium text-gray-300 hover:text-oralia w-full text-left" 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                Integration
              </motion.button>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="w-full bg-oralia hover:bg-oralia-dark text-white">Get Started</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
