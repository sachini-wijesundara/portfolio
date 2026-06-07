import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  // Custom colors based on project categories to make them visually distinct
  const getCategoryStyles = (category) => {
    switch (category) {
      case 'AI/ML & Mobile':
      case 'AI/ML & Web':
        return 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20';
      case 'Mobile':
        return 'bg-primary/10 text-primary border border-primary/20';
      case 'Web & Systems':
      case 'Web & Security':
        return 'bg-accent-teal/10 text-accent-teal border border-accent-teal/20';
      case 'IoT & Hardware':
        return 'bg-accent-gold/10 text-accent-gold border border-accent-gold/20';
      default:
        return 'bg-text-tertiary/10 text-text-secondary border border-border/40';
    }
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-dark-card border border-border/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/30 flex flex-col h-full transition-all duration-300"
    >
      {/* Visual Header / Cover (Using stylized tech gradient as fallback since images are concepts) */}
      <div className="relative h-48 bg-gradient-to-br from-dark-bg to-dark-hover flex items-center justify-center p-6 overflow-hidden border-b border-border/20">
        
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        
        {/* Glow circle overlay */}
        <div className="absolute w-36 h-36 bg-primary/10 rounded-full filter blur-2xl group-hover:scale-125 transition-transform duration-500" />
        
        {/* Fallback visual emblem representing the project */}
        <div className="z-10 text-center">
          <div className="text-3xl font-mono text-primary/80 mb-2 font-extrabold group-hover:scale-110 transition-transform duration-300">
            {project.title.split(' ')[0]}
          </div>
          <span className="text-[10px] font-semibold tracking-widest text-text-tertiary uppercase">
            {project.category}
          </span>
        </div>

        {/* Hover overlay mask */}
        <div className="absolute inset-0 bg-dark-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Header (Category and Title) */}
        <div className="mb-4">
          <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${getCategoryStyles(project.category)}`}>
            {project.category}
          </span>
          <h3 className="text-lg font-display font-bold text-text-primary mt-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Key Metrics Grid (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-border/20">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="bg-dark-bg/60 border border-border/20 rounded-lg p-2.5">
                <div className="text-[9px] font-bold text-text-tertiary uppercase tracking-wider">{metric.label}</div>
                <div className="text-xs sm:text-sm font-bold text-primary mt-0.5">{metric.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 bg-dark-bg border border-border/40 text-text-tertiary rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 bg-primary/5 border border-primary/20 text-primary rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Actions Links */}
        <div className="flex justify-between items-center pt-4 border-t border-border/20">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-primary transition-colors"
            >
              <FiGithub className="text-sm" /> Code
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-primary-light transition-colors ml-auto"
          >
            Details <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
