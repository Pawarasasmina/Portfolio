import React from 'react';
import { motion } from 'framer-motion';
import whoAmI from '../assets/who am i.png';

// "Who Am I" Section Component
export default function WhoAmI() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="text-center mb-16"
>
  <motion.h2
    className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
  >
    {'Who Am I?'.split('').map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 8 }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.h2>
</motion.div>


        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-1/2 flex justify-center"
          >
            <img
              src={whoAmI} // Adjust the path as needed
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hi, I'm Pawara Sasmina
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I am a third-year Software Engineering undergraduate at SLIIT. With a strong foundation in software development, I have experience in building both web and mobile applications. My projects include an online class management system and a task management app, showcasing my ability to deliver robust and scalable solutions. I am proficient in JavaScript, Python, PHP, and other technologies, which enable me to create innovative and efficient applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I am currently looking for opportunities to grow as a developer and contribute to innovative projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
