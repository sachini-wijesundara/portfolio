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
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="home" className="relative min-h-screen bg-dark-bg flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden">
      
      {/* Sleek radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full max-h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.03),transparent_70%)] pointer-events-none" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto w-full grid md:grid-cols-12 gap-12 lg:gap-16 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Typography / Bio */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Subtle status capsule */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-[10px] font-semibold tracking-wider text-primary uppercase mb-8 shadow-inner"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Software Engineer
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-text-primary mb-4 leading-[1.05]"
          >
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">{profile.name.split(' ')[0]}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl font-medium text-text-secondary mb-6"
          >
            {profile.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-text-secondary max-w-lg mb-10 leading-relaxed font-normal"
          >
            {profile.tagline}. Focused on building high-performance systems with <span className="text-white font-medium">Flutter</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-white font-medium">AI integrations</span>.
          </motion.p>

          {/* Action Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto text-center px-7 py-3.5 bg-white text-dark-bg font-semibold rounded-lg hover:bg-neutral-200 active:scale-95 transition-all duration-200 text-xs tracking-wider uppercase"
            >
              Explore Projects
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-7 py-3.5 border border-white/[0.08] hover:border-white text-text-primary font-semibold rounded-lg hover:bg-white/[0.03] active:scale-95 transition-all duration-200 text-xs tracking-wider uppercase"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4 items-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-lg" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-text-secondary hover:text-white transition-colors duration-200"
              aria-label="Email Contact"
            >
              <FiMail className="text-lg" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Clean profile image orb */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            variants={itemVariants}
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
          >
            {/* Outer subtle glow ring */}
            <div className="absolute inset-0 rounded-full border border-white/[0.04] p-1.5" />
            <div className="absolute inset-1.5 rounded-full border border-white/[0.08]" />
            
            {/* Main Avatar Frame */}
            <div className="absolute inset-3 rounded-full overflow-hidden border border-white/[0.1] relative shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Sachini Wijesundara"
                fill
                priority
                className="object-cover scale-[1.02] hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            
            {/* Floating indicator */}
            <div className="absolute -bottom-2 -right-2 bg-dark-card border border-white/[0.08] rounded-xl px-3 py-1.5 shadow-2xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent-teal rounded-full animate-pulse" />
              <span className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider">Plymouth BSc</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollDown}
          className="text-text-secondary hover:text-white transition-colors text-2xl animate-bounce focus:outline-none"
          aria-label="Scroll to About Section"
        >
          <FiArrowDown />
        </button>
      </div>
    </section>
  );
}
