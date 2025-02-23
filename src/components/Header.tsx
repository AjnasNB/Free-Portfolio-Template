import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            Ajnas N B
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-indigo-400 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 transition-transform group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.a 
              href="https://github.com/AjnasNB" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/ajnasnb" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:ajnasulqubra@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="tel:+918590708633"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg mt-4 rounded-lg"
            >
              <div className="p-4 space-y-4">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-indigo-400 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="flex space-x-6 pt-4 border-t border-gray-700">
                  <a href="https://github.com/AjnasNB" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/ajnasnb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:ajnasulqubra@gmail.com" className="text-gray-300 hover:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="tel:+918590708633" className="text-gray-300 hover:text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;