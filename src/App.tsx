import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import EducationData from './components/educationData';
import Skills from './components/Skills';
import { motion } from 'framer-motion';
import WhoAmI from './components/WhoAmI';
import Contact from './components/Contact';
import Services from './components/services';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main>
        <Hero/>
        
        <section id="about">
        <WhoAmI/>
      </section>

        <section id="education">
        <EducationData />
      </section>
      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
    
      <section id="Services">
      <Services/>
      </section>

      <section id="Contact">
      <Contact/>
      </section>

      

      

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 py-8 text-center text-gray-600 dark:text-gray-400 transition-colors duration-200"
        >
          <p>© 2024 Made by Pawara. </p>
        </motion.footer>
      </main>
    </div>
  );
}

export default App;