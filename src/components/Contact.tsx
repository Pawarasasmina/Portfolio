import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, Rocket } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Using EmailJS to send the email
    emailjs
      .sendForm('service_r6r9dwi', 'template_9w0wuic', e.target as HTMLFormElement, 'AjuF7Kzd1C57NZ8Hn')
      .then(() => {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset the state after a delay to hide the rocket animation
        setTimeout(() => setIsSent(false), 3000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

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
            transition={{ type: 'spring', stiffness: 100 }}
            className="inline-block p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg mb-4"
          >
            <Mail className="w-6 h-6 text-primary-light dark:text-primary-dark" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with me. You can either call, email directly, or send a message.
          </p>
        </motion.div>

        {/* Contact options */}
        <div className="flex flex-wrap justify-center gap-4 sm:flex-row sm:space-x-6 mb-8">
          <motion.a
            href="tel:+94775211771"
            className="flex flex-col items-center text-xl text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
            whileHover={{ scale: 1.1 }}
          >
            <Phone className="w-10 h-10 mb-2" />
            <span>Call Me</span>
          </motion.a>

          <motion.a
            href="mailto:pawarasasmina1@gmail.com"
            className="flex flex-col items-center text-xl text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
            whileHover={{ scale: 1.1 }}
          >
            <Mail className="w-10 h-10 mb-2" />
            <span>Email Me</span>
          </motion.a>

          <motion.a
            href="https://github.com/Pawarasasmina"
            className="flex flex-col items-center text-xl text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
            whileHover={{ scale: 1.1 }}
          >
            <Github className="w-10 h-10 mb-2" />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/pawarasasmina"
            className="flex flex-col items-center text-xl text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin className="w-10 h-10 mb-2" />
            <span>LinkedIn</span>
          </motion.a>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 mt-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 mt-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg text-gray-600 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 mt-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
              rows={5}
              required
            />
          </div>

          <div className="flex justify-center items-center mt-8">
            <button
              type="submit"
              className="inline-block text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark px-6 py-3 rounded-lg transition duration-200
                hover:bg-primary-light hover:border-primary-light hover:text-white 
                dark:hover:bg-primary-dark dark:hover:border-primary-dark dark:hover:text-white"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {isSent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 text-green-500"
            >
              <p>Your message has been sent successfully!</p>
            </motion.div>

            <motion.div
     initial={{ x: '-100%', y: '50%' }}
     animate={{ x: '150%', y: '-100%' }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <Rocket className="w-16 h-16 text-primary-light dark:text-primary-dark" />
  </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
