import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiArrowRight, FiCpu, FiMonitor, FiSmartphone, FiRadio } from 'react-icons/fi';
import { SiFlutter, SiReact, SiNextdotjs, SiLaravel } from 'react-icons/si';

export default function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  // Minimalist icons based on primary stack
  const getProjectVisual = (category, techs) => {
    const isAI = category.includes('AI') || category.includes('ML');
    const isMobile = category.includes('Mobile');
    const isWeb = category.includes('Web') || category.includes('Security');
    
    if (isAI) {
      return {
        icon: FiCpu,
        bgGradient: 'from-purple-950/20 to-black',
        iconColor: 'text-accent-purple',
        badgeColor: 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20'
      };
    }
    if (isMobile) {
      return {
        icon: SiFlutter,
        bgGradient: 'from-sky-950/20 to-black',
        iconColor: 'text-primary',
        badgeColor: 'bg-primary/10 text-primary border border-primary/20'
      };
    }
    if (isWeb) {
      return {
        icon: SiReact,
        bgGradient: 'from-emerald-950/20 to-black',
        iconColor: 'text-accent-teal',
        badgeColor: 'bg-accent-teal/10 text-accent-teal border border-accent-teal/20'
      };
    }
    return {
      icon: FiRadio,
      bgGradient: 'from-amber-950/20 to-black',
      iconColor: 'text-accent-gold',
      badgeColor: 'bg-accent-gold/10 text-accent-gold border border-accent-gold/20'
    };
  };

  const style = getProjectVisual(project.category, project.technologies);
  const ProjectIcon = style.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white/[0.01] border border-white/[0.06] rounded-2xl overflow-hidden shadow-lg hover:border-white/[0.12] hover:shadow-2xl flex flex-col h-full transition-all duration-300"
    >
      {/* Cover visual (Clean dark gradient with large brand icon) */}
      <div className={`relative h-44 bg-gradient-to-b ${style.bgGradient} flex items-center justify-center p-6 border-b border-white/[0.04] overflow-hidden`}>
        
        {/* Subtle background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />
        
        <div className={`text-4xl ${style.iconColor} opacity-20 group-hover:scale-110 group-hover:opacity-45 transition-all duration-500`}>
          <ProjectIcon />
        </div>

        {/* Small project acronym */}
        <div className="absolute bottom-4 left-5 text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase select-none">
          {project.title.split(' ')[0]} // CORE
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${style.badgeColor}`}>
              {project.category}
            </span>
          </div>
          <h3 className="text-base font-display font-bold text-text-primary mt-2.5 group-hover:text-primary transition-colors duration-200 line-clamp-1">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Key Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-white/[0.06]">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-2.5">
                <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">{metric.label}</div>
                <div className="text-xs font-semibold text-primary mt-0.5">{metric.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[9.5px] px-2.5 py-0.5 bg-white/[0.02] border border-white/[0.06] text-zinc-400 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[9.5px] px-2.5 py-0.5 bg-primary/5 border border-primary/20 text-primary rounded-md font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions Links */}
        <div className="flex justify-between items-center pt-4 border-t border-white/[0.06]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Codebase
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-light transition-colors ml-auto"
          >
            Review Specs <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
