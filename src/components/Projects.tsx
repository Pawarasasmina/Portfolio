import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import type { Project } from '../types';
import adressbook from '../assets/adressbook.jpeg';
import pathfinder from '../assets/pathfinder.png';
import pixelplaza from '../assets/pixelplasa.png';
import healthcare from '../assets/healthcare.png';
import highway from '../assets/highway.png';
import lanerunner from '../assets/lanerunner.png';
import portfolio from '../assets/portfolio.png';
import dilubeats from '../assets/dilubeats.png';
import job from '../assets/job.jpeg';
import tailorshop from '../assets/tailorshop.png';
import company from '../assets/company.png';

const projects: Project[] = [
 
  {
    title: 'DILU Beats - Singer Website',
    description: 'Developed a responsive animative website for Sri Lankan singer',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Pawarasasmina/Web-site-for-singer.git',
    website: 'https://dilubeats.com/',
    image: dilubeats,
  },
  {
    title: 'Company Website',
    description: 'Developed a responsive animative company landing webpage for Sri Lankan software company',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Pawarasasmina/neuriOx-company_portfolio',
    website: 'https://neurioxit.systems/',
    image: company,
  },
  {
    title: 'Tailor Shop Website',
    description: 'Developed a responsive animative website for tailorshop (real lworld customer) on customer requirements',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Pawarasasmina/Sisira_Tailors.git',
    website: 'https://sisira-tailors.vercel.app/',
    image: tailorshop,
  },
  {
    title: 'Online Healthcare System',
    description: 'Developed a web-based e-channeling and medical details sharing system.',
    tech: ['MERN Stack', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Pawarasasmina/Smart_HealthCare_System.git',
    image: healthcare,
  },
 
 
  {
    title: 'Path Finder',
    description: 'A cross-platform mobile application to alleviate urban traffic congestion.',
    tech: ['Flutter', 'Dart', 'Android Studio'],
    github: 'https://github.com/Pawarasasmina/Path-Finder.git',
    image: pathfinder,
  },
  {
    title: 'Pixel Plaza',
    description: 'Developed a web-based shopping mall system to improve the shopping experience beyond a normal e-commerce platform.',
    tech: ['MERN Stack', 'Vite', 'Tailwind CSS', 'JWT', 'Bcrypt', 'JavaScript'],
    github: 'https://github.com/Pawarasasmina/Pixel-Plaza---Online-Shopping-Mall.git',
    image: pixelplaza,
  },
  {
    title: 'Online Seat Booking System',
    description: 'Developed a web-based Highway bus ticket booking system.',
    tech: ['MERN Stack', 'Vite', 'Bootstrap CSS', 'JWT', 'Bcrypt', 'JavaScript'],
    github: 'https://github.com/Pawarasasmina/Online-seat-booking-system.git',
    image: highway,
  },
  
 
  {
    title: 'Lane Runner',
    description: 'Developed a simple mobile game for Android.',
    tech: ['Kotlin', 'XML', 'Android Studio'],
    github: 'https://github.com/Pawarasasmina/LaneRunner.git',
    image: lanerunner,
  },
  {
    title: 'Address Book',
    description: 'Simple Android mobile application for managing addresses of people.',
    tech: ['Kotlin', 'XML', 'SQLite', 'Android Studio'],
    github: 'https://github.com/Pawarasasmina/Address-Book.git',
    image: adressbook,
  },
  {
    title: 'Job Portal',
    description: 'Online carrer supplying and applying website with front and back-end interactions.',
    tech: ['PHP', 'HTML', 'JavaScript', 'CSS'],
    github: 'https://github.com/Pawarasasmina/Job-Portal.git',
    image: job,
  },
  {
    title: 'Sky-On-Eye',
    description: 'Web-based online movie ticket booking system.',
    tech: ['PHP', 'HTML', 'JavaScript', 'CSS'],
    github: 'https://github.com/Pawarasasmina/Sky-On-Eye.git',
    image: 'https://path-to-your-image/sky-on-eye.jpg'
  },
  {
    title: 'Online Music Store',
    description: 'Developed a web-based music listening and purchasing system.',
    tech: ['Java', 'Bootstrap CSS', 'OOP'],
    github: 'https://github.com/Pawarasasmina/Online-Music-Store.git',
    image: 'https://path-to-your-image/music-store.jpg'
  },
  {
    title: 'Fitness Master',
    description: 'CRUD operations for online nutritional and fitness planning with front and back-end interactions.',
    tech: ['PHP', 'HTML', 'JavaScript', 'CSS'],
    github: 'https://github.com/Pawarasasmina/Project-06---Fitness-Master.git',
    image: 'https://path-to-your-image/fitness-master.jpg'
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Show only the first 3 projects initially, show all if "Show More" is clicked
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length); // Loop back to 0 when it reaches the end
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
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
            transition={{ type: 'spring', stiffness: 100 }}
            className="inline-block p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg mb-4"
          >
            <Star className="w-6 h-6 text-primary-light dark:text-primary-dark" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-block text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark px-6 py-3 rounded-lg transition duration-200
                         hover:bg-primary-light hover:border-primary-light hover:text-white 
                         dark:hover:bg-primary-dark dark:hover:border-primary-dark dark:hover:text-white"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="ml-2">GitHub</span>
          </motion.a>
          {project.website && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="ml-2">View Page</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
