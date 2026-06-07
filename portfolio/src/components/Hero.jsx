import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from 'next/image';
import { profile } from '../data/projects';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollDown = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-128 h-128 bg-accent-purple/5 rounded-full filter blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Bio / Content */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold tracking-wider text-primary uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight text-text-primary mb-4"
          >
            Hi, I'm <span className="text-primary text-glow font-extrabold">{profile.name.split(' ')[0]}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-sans font-semibold text-text-secondary mb-6"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-tertiary max-w-xl mb-10 leading-relaxed"
          >
            {profile.tagline}. Specializing in building production-ready apps with Flutter, Next.js, and ML models.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center md:justify-start items-center mb-10 w-full"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-light hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/15 transition-all duration-300"
            >
              View Work
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/5 hover:border-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-5 items-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-border/40 text-text-secondary hover:text-primary hover:border-primary/50 rounded-lg hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-border/40 text-text-secondary hover:text-primary hover:border-primary/50 rounded-lg hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 bg-dark-card border border-border/40 text-text-secondary hover:text-primary hover:border-primary/50 rounded-lg hover:-translate-y-1 transition-all duration-300"
              aria-label="Email Contact"
            >
              <FiMail className="text-xl" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Graphic with User Photo */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            variants={itemVariants}
            className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 rounded-full flex items-center justify-center border border-primary/20 box-glow"
          >
            {/* Spinning decorative ring */}
            <div className="absolute inset-2 border-2 border-dashed border-primary/10 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-8 border border-dashed border-accent-purple/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Inside Content: Glassmorphic photo container */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-border/50 relative group shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Sachini Wijesundara"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 300px"
              />
              
              {/* Dynamic Overlay info on hover */}
              <div className="absolute inset-0 bg-dark-bg/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-dark-bg/80 border border-primary/40 rounded-xl px-4 py-2 text-xs font-bold text-primary tracking-wider uppercase">
                  BSc. Software Engineering
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bouncing Arrow Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollDown}
          className="text-primary hover:text-primary-light transition-colors text-3xl animate-bounce focus:outline-none"
          aria-label="Scroll to About Section"
        >
          <FiArrowDown />
        </button>
      </div>
    </section>
  );
}
