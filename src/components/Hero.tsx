import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Sparkles } from 'lucide-react';
import photo2 from '../assets/PAWARA1.png';
import photo from '../assets/mine.png';
import cv from '../assets/MY_CV.pdf';

interface AnimatedSkillProps {
  icon: React.ReactNode;
  label: string;
  delay: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-200">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12"
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div variants={itemVariants} className="relative">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
               Pawara
                <span className="relative inline-block ml-2">
                  Sasmina
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -right-8 -top-6"
                  >
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl leading-relaxed"
            >
             I am an undergraduate student at SLIIT with a passion for IT. I have honed my skills in the industry. I am driven to constantly learn and grow, and am eager to apply my knowledge to new challenges.
            </motion.p>

            {/* Download CV Button */}
            <motion.div variants={itemVariants} className="mb-12">
            <a
  href={cv}
  download="Pawara_Sasmina_CV.pdf"
  className="inline-block text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark px-6 py-3 rounded-lg transition duration-200
             hover:bg-primary-light hover:border-primary-light hover:text-white 
             dark:hover:bg-primary-dark dark:hover:border-primary-dark dark:hover:text-white"
>
  Download CV
</a>

            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex justify-center lg:justify-start space-x-8 mb-12"
            >
              <AnimatedSkill icon={<Code2 size={28} />} label="Frontend" delay={0.2} />
              <AnimatedSkill icon={<Database size={28} />} label="Backend" delay={0.4} />
              <AnimatedSkill icon={<Globe size={28} />} label="Web Dev" delay={0.6} />
            </motion.div>
          </div>

          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 3 }}
              animate={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative inline-block"
            >
              <img
                src={photo} // Replace with actual asset path
                alt="Profile"
                className="w-96 max-w-full mx-auto" // Remove `rounded-full`
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedSkill({ icon, label, delay }: AnimatedSkillProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="flex flex-col items-center"
      transition={{ delay }}
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg mb-3 relative"
      >
        <motion.div
          className="text-primary-light dark:text-primary-dark"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          {icon}
        </motion.div>
        <motion.div
          className="absolute -inset-1 bg-primary-light/10 dark:bg-primary-dark/10 rounded-xl z--1"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
      <span className="text-gray-600 dark:text-gray-400 font-medium">{label}</span>
    </motion.div>
  );
}
