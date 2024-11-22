import React from 'react';
import { motion } from 'framer-motion';

// Skills data
interface Skill {
  category: string;
  skills: { name: string; level: number }[];
}

const skillsData: Skill[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VsCode', level: 90 },
      { name: 'Linux', level: 45 },
    ],
  },
];

// Main Skills component
export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <SkillCard key={index} data={skillCategory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// SkillCard component
interface SkillCardProps {
  data: Skill;
  index: number;
}

function SkillCard({ data, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        {data.category}
      </h3>
      <div className="space-y-4">
        {data.skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="w-full">
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: skillIndex * 0.1 }}
                className="h-full bg-primary-light dark:bg-primary-dark rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
