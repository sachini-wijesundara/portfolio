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
        delayChildren: 0.1,
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.6 }
    }
  };

  const scrollDown = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-[#030712] via-[#0B0F19] to-[#030712] flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden">
      
      {/* Dynamic Animated Mesh Blobs */}
      <div className="absolute top-1/6 left-1/12 w-80 h-80 bg-primary/10 rounded-full filter blur-[100px] pointer-events-none animate-blob-1" />
      <div className="absolute bottom-1/5 right-1/10 w-96 h-96 bg-accent-purple/10 rounded-full filter blur-[120px] pointer-events-none animate-blob-2" />
      
      {/* Background Matrix Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-16 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Bio / Content */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Status Capsule */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20 rounded-full text-[11px] font-bold tracking-widest text-primary uppercase mb-8 shadow-inner"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="w-2 h-2 bg-primary rounded-full absolute" />
            Active Software Engineer
          </motion.div>

          {/* Huge Splitting Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-text-primary mb-4"
          >
            Hi, I'm <span className="bg-gradient-to-r from-primary via-primary-light to-accent-purple bg-clip-text text-transparent text-glow-cyan font-extrabold">{profile.name.split(' ')[0]}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl font-sans font-medium text-text-tertiary mb-6"
          >
            {profile.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-text-tertiary max-w-xl mb-10 leading-relaxed font-medium"
          >
            {profile.tagline}. Specialized in building high-performance systems with <span className="text-primary font-semibold">Flutter</span>, <span className="text-accent-teal font-semibold">Next.js</span>, and <span className="text-accent-purple font-semibold">AI/ML Models</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-10 w-full"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-dark-bg font-bold rounded-xl hover:bg-primary-light hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-primary/20 transition-all duration-300 cursor-pointer text-sm tracking-wide"
            >
              Explore Projects
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 border border-border-light text-text-primary hover:text-primary hover:border-primary font-bold rounded-xl hover:bg-primary/5 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-sm tracking-wide"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4.5 items-center justify-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-border text-text-tertiary hover:text-primary hover:border-primary/40 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-md"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-border text-text-tertiary hover:text-primary hover:border-primary/40 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-md"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 bg-dark-card border border-border text-text-tertiary hover:text-primary hover:border-primary/40 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-md"
              aria-label="Email Contact"
            >
              <FiMail className="text-xl" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual Portrait with Floating Badge Annotations */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96">
            
            {/* Spinning background outline rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_50s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-dashed border-accent-purple/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute inset-10 border border-dashed border-primary/10 rounded-full animate-[spin_15s_linear_infinite]" />

            {/* Main Avatar Card Frame */}
            <motion.div
              variants={itemVariants}
              className="absolute inset-8 rounded-full overflow-hidden border border-primary/30 box-glow-cyan shadow-2xl relative"
            >
              <Image
                src="/profile.jpg"
                alt="Sachini Wijesundara"
                fill
                priority
                className="object-cover scale-[1.02] hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 350px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Annotation Badge 1: AI & Mobile */}
            <motion.div
              variants={badgeVariants}
              className="absolute -top-3 -right-3 sm:-right-6 glass-panel border border-primary/25 rounded-2xl p-3 shadow-2xl flex items-center gap-2.5 z-20 badge-floating cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">
                AI
              </div>
              <div className="text-left pr-1">
                <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Focus Area</div>
                <div className="text-xs font-extrabold text-text-primary">AI & Mobile Systems</div>
              </div>
            </motion.div>

            {/* Floating Annotation Badge 2: Projects count */}
            <motion.div
              variants={badgeVariants}
              className="absolute -bottom-2 -left-3 sm:-left-6 glass-panel border border-accent-purple/25 rounded-2xl p-3 shadow-2xl flex items-center gap-2.5 z-20 badge-floating cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-accent-purple/15 text-accent-purple flex items-center justify-center flex-shrink-0 text-sm font-bold">
                11
              </div>
              <div className="text-left pr-1">
                <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Built</div>
                <div className="text-xs font-extrabold text-text-primary">Systems Developed</div>
              </div>
            </motion.div>

            {/* Floating Annotation Badge 3: University details */}
            <motion.div
              variants={badgeVariants}
              className="absolute bottom-1/2 -right-6 lg:-right-8 translate-y-1/2 glass-panel border border-accent-teal/25 rounded-2xl p-3 shadow-2xl flex items-center gap-2.5 z-20 badge-floating cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-accent-teal/15 text-accent-teal flex items-center justify-center flex-shrink-0 text-sm font-bold">
                UK
              </div>
              <div className="text-left pr-1">
                <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">University</div>
                <div className="text-xs font-extrabold text-text-primary">Plymouth (BSc.)</div>
              </div>
            </motion.div>

          </div>
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
