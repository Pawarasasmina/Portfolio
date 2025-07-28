import React from "react";
import { FaUser, FaGraduationCap, FaCode, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import EducationData from './components/educationData';
import Skills from './components/Skills';

import WhoAmI from './components/WhoAmI';
import Contact from './components/Contact';
import Services from './components/services';



function App() {
  return (

    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <Header />
      

      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.section>

        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-6 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
  {[
    { id: "about", icon: <FaUser /> },
    { id: "education", icon: <FaGraduationCap /> },
    { id: "skills", icon: <FaCode /> },
    { id: "projects", icon: <FaProjectDiagram /> },
    { id: "services", icon: <FaTools /> },
    { id: "contact", icon: <FaEnvelope /> },
  ].map(({ id, icon }) => (
    <Link
      key={id}
      to={id}
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active-icon"
      className="cursor-pointer text-gray-500 dark:text-gray-300 text-2xl transition-all duration-200 hover:scale-125"
    >
      {icon}
    </Link>
  ))}
</nav>




        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <WhoAmI />
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <EducationData />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Projects />
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Services />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 py-8 text-center text-gray-600 dark:text-gray-400 transition-colors duration-200"
        >
          <p>© 2024 by Pawara Sasmina.</p>
        </motion.footer>
      </main>
    </div>
  );
}

export default App;