import { motion } from 'framer-motion';
import { Briefcase, Code, Monitor, Smartphone, Star } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive, high-performance websites with modern technologies.',
    icon: Code,
  },
  {
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications for Android and iOS.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user experiences.',
    icon: Monitor,
  },
  {
    title: 'Consulting',
    description: 'Offering expert advice on software projects and strategies.',
    icon: Briefcase,
  },
];

export default function Services() {
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services We Provide</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our expertise to help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: any;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group p-6 text-center"
    >
      <Icon className="w-12 h-12 mx-auto text-primary-light dark:text-primary-dark mb-4" />
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
    </motion.div>
  );
}
