import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Ajnas N B
            </h3>
            <p className="text-gray-400">Full Stack Engineer & AI Enthusiast</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/AjnasNB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/ajnasnb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:ajnasulqubra@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+918590708633"
              className="hover:text-purple-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ajnas N B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;