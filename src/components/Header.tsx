import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-scroll'; 
import sign from '../assets/sign2.png';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu on item click
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={sign}
              alt="Your Signature Photo"
              className="w-20 rounded-full cursor-pointer"
            />
          </motion.div>

          {/* Desktop Navigation */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ staggerChildren: 0.2 }}
  className="hidden md:flex items-center space-x-8"
>
  {/* Add links to sections */}
  {["about", "education", "skills", "projects", "services", "contact"].map((section, index) => (
    <motion.a
      key={section}
      href={`#${section}`}
      className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark text-lg font-medium"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </motion.a>
  ))}

  <ThemeToggle />
  <SocialLink href="https://github.com/Pawarasasmina" icon={<Github />} label="GitHub" />
  <SocialLink href="https://linkedin.com/in/pawarasasmina" icon={<Linkedin />} label="LinkedIn" />
  <SocialLink href="mailto:pawarasasmina1@gmail.com" icon={<Mail />} label="Email" />
</motion.div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="md:hidden overflow-hidden bg-opacity-90 bg-gray-800 dark:bg-gray-900 rounded-lg"
        >
          <div className="py-6 space-y-6 text-white flex flex-col items-center justify-center">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block text-xl hover:text-primary-light dark:hover:text-primary-dark"
              onClick={handleMenuItemClick}
            >
              About
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="block text-xl hover:text-primary-light dark:hover:text-primary-dark"
              onClick={handleMenuItemClick}
            >
              Education
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="block text-xl hover:text-primary-light dark:hover:text-primary-dark"
              onClick={handleMenuItemClick}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block text-xl hover:text-primary-light dark:hover:text-primary-dark"
              onClick={handleMenuItemClick}
            >
              Projects
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="block text-xl hover:text-primary-light dark:hover:text-primary-dark"
              onClick={handleMenuItemClick}
            >
              Services
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block text-xl hover:text-primary-light dark:hover:text-primary-dark"
              onClick={handleMenuItemClick}
            >
              Contact
            </Link>

            {/* Social Links Displayed Horizontally with Extra Space */}
            <div className="flex space-x-2 mt-6">
              <MobileSocialLink href="https://github.com/Pawarasasmina" icon={<Github />} label="GitHub" />
              <MobileSocialLink href="https://linkedin.com/in/pawarasasmina" icon={<Linkedin />} label="LinkedIn" />
              <MobileSocialLink href="mailto:pawarasasmina1@gmail.com" icon={<Mail />} label="Email" />
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </motion.a>
  );
}

function MobileSocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <motion.a
      whileHover={{ x: 5 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-white hover:text-primary-light dark:hover:text-primary-dark transition-colors px-4"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}
