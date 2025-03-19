import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1f]/80 backdrop-blur-sm border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            Kaustubh
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <motion.a
              href="Kaustubh_Muley,.VIT.pdf"
              download="Kaustubh_Muley_CV.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-gray-600 
                       text-white hover:from-red-700 hover:to-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              <span>CV</span>
            </motion.a>
          </nav>

          <div className="flex items-center space-x-4">
            <SocialLink href="https://github.com/Kaustubh2026" icon={<Github size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/kaustubh-muley-827b76257/" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:mkaustubh2026@gmail.com" icon={<Mail size={20} />} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05, color: '#e53e3e' }}
    className="text-gray-300 hover:text-red-500 transition-colors"
  >
    {children}
  </motion.a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.2 }}
    className="text-gray-300 hover:text-red-500 transition-colors"
  >
    {icon}
  </motion.a>
);

export default Header;