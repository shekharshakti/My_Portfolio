import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after delay
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section py-20">
      <motion.h2 
        className="section-title mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-dark-800 dark:text-light-100 mb-6">Let's Connect</h3>
            <p className="text-dark-600 dark:text-light-300 mb-8">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me through any of the following channels.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-800 dark:text-light-100">Email</h4>
                <a href="mailto:shekharrajput7050@gmail.com" className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  shekharrajput7050@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-800 dark:text-light-100">Phone</h4>
                <a href="tel:+917050382908" className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  +91 7050382908
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-800 dark:text-light-100">Location</h4>
                <span className="text-dark-600 dark:text-light-300">
                  Sasaram, Bihar 821115
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="flex space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-dark-800 dark:bg-light-100 rounded-full flex items-center justify-center text-white dark:text-dark-800 hover:bg-opacity-90 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://leetcode.com/shekharshakti/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#FFA116] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
              aria-label="LeetCode"
            >
              <Code size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-light-100 mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-success-500/10 text-success-500 font-medium"
              >
                Your message has been sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-error-500/10 text-error-500 font-medium"
              >
                There was an error sending your message. Please try again later.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-light-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-300 dark:bg-dark-700 text-dark-800 dark:text-light-100 border border-light-400 dark:border-dark-600 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-light-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-300 dark:bg-dark-700 text-dark-800 dark:text-light-100 border border-light-400 dark:border-dark-600 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-light-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-300 dark:bg-dark-700 text-dark-800 dark:text-light-100 border border-light-400 dark:border-dark-600 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-light-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-light-300 dark:bg-dark-700 text-dark-800 dark:text-light-100 border border-light-400 dark:border-dark-600 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;