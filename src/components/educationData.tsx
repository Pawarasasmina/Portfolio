import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationData {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

const educationData: EducationData[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    year: '2021 - Present',
    description: 'Specializing in Software Engineering with hands-on experience in full-stack development and project management.',
  },
  {
    degree: 'Secondary Education',
    institution: 'St.Thomas college , Matara',
    year: '2013 - 2021',
    description: '',
  },
  {
    degree: 'Primary Education',
    institution: 'Olcott Primary School, Matara',
    year: '2008 - 2012',
    description: '',
  },
];

export default function Education() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg mb-4"
          >
            <GraduationCap className="w-6 h-6 text-primary-light dark:text-primary-dark" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here is a summary of my academic qualifications and achievements.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <EducationCard key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface EducationCardProps {
  data: EducationData;
  index: number;
}

function EducationCard({ data, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 group transition-transform duration-300"
    >
      <div className="flex items-start">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="p-4 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg mr-4"
        >
          <GraduationCap className="w-6 h-6 text-primary-light dark:text-primary-dark" />
        </motion.div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{data.degree}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-1">{data.institution}</p>
          <span className="text-gray-500 dark:text-gray-400">{data.year}</span>
          <p className="text-gray-600 dark:text-gray-300 mt-3 line-clamp-3">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
