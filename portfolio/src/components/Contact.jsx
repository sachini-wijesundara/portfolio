import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiGithub, FiLinkedin, FiAlertCircle } from 'react-icons/fi';
import { profile } from '../data/projects';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const formData = new FormData(e.target);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'placeholder';

    // If placeholder, we simulate success for demonstration purposes
    if (formspreeId === 'placeholder') {
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-dark-card border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Get In <span className="text-primary text-glow font-bold">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-5 space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-display font-bold text-text-primary">Contact Information</h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Feel free to reach out to me for project collaborations, software opportunities, or queries regarding my work.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Email */}
              <motion.div variants={itemVariants} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <FiMail />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-1">Email</h4>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm sm:text-base font-semibold text-text-primary hover:text-primary transition-colors duration-300 break-all"
                  >
                    {profile.email}
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-1">Phone</h4>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-semibold text-text-primary hover:text-primary transition-colors duration-300"
                  >
                    {profile.phone}
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-sm sm:text-base font-semibold text-text-primary">
                    {profile.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-border/20">
              <h4 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-4">Follow My Coding Journey</h4>
              <div className="flex gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 bg-dark-bg border border-border/40 text-text-secondary hover:text-primary hover:border-primary/40 rounded-lg transition-all duration-300"
                >
                  <FiGithub className="text-sm" /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 bg-dark-bg border border-border/40 text-text-secondary hover:text-primary hover:border-primary/40 rounded-lg transition-all duration-300"
                >
                  <FiLinkedin className="text-sm" /> LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Message form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-5 bg-dark-bg border border-border/30 rounded-2xl p-6.5 sm:p-8 shadow-xl">
              <h3 className="text-lg font-display font-bold text-text-primary mb-2">Send a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4.5 py-3 bg-dark-card border border-border/40 text-text-primary placeholder-text-tertiary rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-350"
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4.5 py-3 bg-dark-card border border-border/40 text-text-primary placeholder-text-tertiary rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-350"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="_subject"
                  id="subject"
                  required
                  className="w-full px-4.5 py-3 bg-dark-card border border-border/40 text-text-primary placeholder-text-tertiary rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-350"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4.5 py-3 bg-dark-card border border-border/40 text-text-primary placeholder-text-tertiary rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-350 resize-none"
                  placeholder="Hey Sachini, I would like to discuss..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-3.5 bg-primary text-dark-bg font-bold rounded-xl hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/10 transition-all duration-300"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>

              {/* Form Status Messages */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2.5 text-accent-teal bg-accent-teal/10 border border-accent-teal/20 px-4 py-3 rounded-xl"
                >
                  <FiCheckCircle className="text-lg flex-shrink-0" />
                  <span className="text-sm font-semibold">Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2.5 text-accent-red bg-accent-red/10 border border-accent-red/20 px-4 py-3 rounded-xl"
                >
                  <FiAlertCircle className="text-lg flex-shrink-0" />
                  <span className="text-sm font-semibold">{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
