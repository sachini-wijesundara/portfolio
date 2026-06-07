import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiArrowRight, FiActivity, FiCpu, FiMonitor, FiSmartphone, FiTerminal } from 'react-icons/fi';

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

  // Assign colors to project tags to make them visual markers
  const getCategoryTheme = (category) => {
    if (category.includes('AI/ML') || category.includes('AI')) {
      return {
        badge: 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20',
        glow: 'box-glow-purple',
        icon: FiCpu,
        accentColor: 'text-accent-purple',
        gradient: 'from-[#0f0a24] to-[#1e0f3d]'
      };
    }
    if (category.includes('Mobile')) {
      return {
        badge: 'bg-primary/10 text-primary border border-primary/20',
        glow: 'box-glow-cyan',
        icon: FiSmartphone,
        accentColor: 'text-primary',
        gradient: 'from-[#09152b] to-[#0a2540]'
      };
    }
    if (category.includes('Web') || category.includes('Security')) {
      return {
        badge: 'bg-accent-teal/10 text-accent-teal border border-accent-teal/20',
        glow: 'box-glow-cyan',
        icon: FiMonitor,
        accentColor: 'text-accent-teal',
        gradient: 'from-[#051c20] to-[#0a3536]'
      };
    }
    if (category.includes('IoT') || category.includes('Hardware')) {
      return {
        badge: 'bg-accent-gold/10 text-accent-gold border border-accent-gold/20',
        glow: 'box-glow-gold',
        icon: FiActivity,
        accentColor: 'text-accent-gold',
        gradient: 'from-[#251f08] to-[#3a2e0a]'
      };
    }
    return {
      badge: 'bg-text-tertiary/10 text-text-secondary border border-border/40',
      glow: 'shadow-md',
      icon: FiTerminal,
      accentColor: 'text-text-secondary',
      gradient: 'from-[#0b101b] to-[#171f30]'
    };
  };

  const theme = getCategoryTheme(project.category);
  const IconComponent = theme.icon;

  // Custom UI Mockups representing the project type
  const renderMockup = (category) => {
    // 1. AI/ML/AR Node Connections Mockup
    if (category.includes('AI/ML') || category.includes('AI')) {
      return (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full h-full border border-accent-purple/20 rounded-xl bg-dark-bg/60 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-[9px] text-accent-purple/80">
            <div className="flex justify-between items-center border-b border-border/40 pb-1.5 mb-2">
              <span className="flex items-center gap-1.5"><FiCpu className="text-[10px] animate-pulse" /> NeuralEngine.active</span>
              <span className="text-[8px] text-text-tertiary">v1.2.4</span>
            </div>
            
            {/* Custom abstract connecting nodes layout */}
            <div className="flex-grow flex items-center justify-center relative">
              <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center bg-dark-bg box-glow-cyan z-10 text-primary">AI</div>
              <div className="absolute w-20 h-10 border border-dashed border-accent-purple/30 rounded-full animate-[spin_12s_linear_infinite]" />
              <div className="absolute w-28 h-20 border border-dashed border-accent-purple/20 rounded-full animate-[spin_24s_linear_infinite_reverse]" />
              {/* Surrounding nodes */}
              <div className="absolute top-2 left-6 w-3.5 h-3.5 rounded-full bg-accent-teal/10 border border-accent-teal/30 flex items-center justify-center text-[7px] text-accent-teal font-bold">ML</div>
              <div className="absolute bottom-1 right-8 w-3.5 h-3.5 rounded-full bg-accent-purple/15 border border-accent-purple/40 flex items-center justify-center text-[7px] text-accent-purple font-bold">AR</div>
            </div>

            <div className="border-t border-border/40 pt-1.5 flex justify-between text-[8px] text-text-tertiary">
              <span>Latency: &lt;150ms</span>
              <span className="text-accent-teal">TensorFlow.ok</span>
            </div>
          </div>
        </div>
      );
    }
    // 2. Mobile App Mockup Screen
    if (category.includes('Mobile')) {
      return (
        <div className="absolute inset-0 flex items-center justify-center pt-5">
          {/* Mock Mobile Phone Device */}
          <div className="w-[110px] h-[160px] border-[3px] border-border-light rounded-t-2xl bg-dark-bg relative shadow-2xl flex flex-col p-1.5 overflow-hidden">
            {/* Top notch */}
            <div className="w-10 h-2 bg-border-light rounded-full mx-auto mb-2 flex justify-center items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-dark-bg" />
            </div>
            
            {/* Mock Screen Content */}
            <div className="flex-grow flex flex-col gap-1.5">
              <div className="h-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-between px-1.5 text-[7px] font-bold text-primary">
                <span>Dashboard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
              </div>
              
              {/* Simulated UI rows */}
              <div className="flex-grow flex flex-col gap-1">
                <div className="h-3.5 bg-dark-card border border-border/40 rounded flex items-center justify-between px-1">
                  <div className="w-8 h-1 bg-text-tertiary/30 rounded" />
                  <div className="w-3 h-1 bg-primary/40 rounded" />
                </div>
                <div className="h-3.5 bg-dark-card border border-border/40 rounded flex items-center justify-between px-1">
                  <div className="w-10 h-1 bg-text-tertiary/30 rounded" />
                  <div className="w-2 h-1 bg-primary/40 rounded" />
                </div>
                <div className="h-3.5 bg-dark-card border border-border/40 rounded flex items-center justify-between px-1">
                  <div className="w-6 h-1 bg-text-tertiary/30 rounded" />
                  <div className="w-4 h-1 bg-accent-purple/30 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // 3. Web Browser Mockup Window
    if (category.includes('Web') || category.includes('Security')) {
      return (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {/* Mock Browser Frame */}
          <div className="w-full h-full border border-border rounded-xl bg-dark-bg/60 p-2 shadow-2xl flex flex-col overflow-hidden">
            {/* Browser top titlebar */}
            <div className="flex justify-between items-center border-b border-border/40 pb-2 mb-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
              </div>
              <div className="w-28 h-2.5 bg-dark-card border border-border/30 rounded text-[7px] text-text-tertiary text-center leading-[9px] font-mono select-none">
                https://sachini.dev
              </div>
              <div className="w-3" />
            </div>

            {/* Browser client content */}
            <div className="flex-grow flex flex-col gap-2 p-1 bg-dark-bg/40 border border-border/30 rounded">
              <div className="flex justify-between items-center text-[7px] font-bold text-text-primary">
                <span>Secure Console</span>
                <span className="text-[6.5px] font-semibold text-accent-teal bg-accent-teal/10 px-1 border border-accent-teal/20 rounded">AES-256</span>
              </div>
              
              {/* Custom micro graph */}
              <div className="flex-grow flex items-end gap-1 border-b border-l border-border/30 h-10 p-1">
                <div className="w-full h-[30%] bg-accent-teal/20 hover:bg-accent-teal/40 rounded-t transition-colors" />
                <div className="w-full h-[65%] bg-accent-teal/30 hover:bg-accent-teal/50 rounded-t transition-colors" />
                <div className="w-full h-[45%] bg-accent-teal/20 hover:bg-accent-teal/40 rounded-t transition-colors" />
                <div className="w-full h-[90%] bg-accent-teal/45 hover:bg-accent-teal/60 rounded-t transition-colors" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    // 4. IoT Circuit Schematic Mockup
    if (category.includes('IoT') || category.includes('Hardware')) {
      return (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full h-full border border-accent-gold/20 rounded-xl bg-dark-bg/60 p-3 relative overflow-hidden flex flex-col justify-between font-mono text-[8px] text-accent-gold/80">
            <div className="flex justify-between items-center border-b border-border/40 pb-1.5 mb-2">
              <span className="flex items-center gap-1.5"><FiActivity className="text-[10px] animate-pulse" /> Telemetry.esp32</span>
              <span className="text-[7px] text-text-tertiary">I/O ACTIVE</span>
            </div>

            {/* Custom abstract circuit trace layout */}
            <div className="flex-grow flex items-center justify-center relative">
              <div className="w-8 h-8 rounded bg-[#102a1c] border border-accent-gold/40 flex items-center justify-center text-accent-gold text-2xs font-extrabold shadow-md">ESP32</div>
              {/* Pins trace lines */}
              <div className="absolute top-1/2 left-4 right-4 h-0.5 border-t border-dashed border-accent-gold/30 pointer-events-none" />
              <div className="absolute top-3 bottom-3 left-1/2 w-0.5 border-l border-dashed border-accent-gold/20 pointer-events-none" />
              
              {/* Mock sensor items */}
              <div className="absolute top-2 left-6 px-1 py-0.5 bg-dark-card border border-border rounded text-[6.5px]">pH: 7.2</div>
              <div className="absolute bottom-2 right-6 px-1 py-0.5 bg-dark-card border border-border rounded text-[6.5px]">24.5 °C</div>
            </div>

            <div className="border-t border-border/40 pt-1.5 flex justify-between text-[7px] text-text-tertiary">
              <span>ESP32 IoT Node</span>
              <span className="text-accent-gold animate-pulse">Telemetry.ok</span>
            </div>
          </div>
        </div>
      );
    }

    // Default Fallback
    return (
      <div className="z-10 text-center">
        <div className="text-3xl font-mono text-primary/80 mb-2 font-extrabold group-hover:scale-110 transition-transform duration-300">
          {project.title.split(' ')[0]}
        </div>
        <span className="text-[10px] font-semibold tracking-widest text-text-tertiary uppercase">
          {project.category}
        </span>
      </div>
    );
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-dark-card border border-border rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/20 flex flex-col h-full transition-all duration-300"
    >
      {/* Visual Header / Cover (Renders specific gorgeous mockup widgets based on project type) */}
      <div className={`relative h-48 bg-gradient-to-br ${theme.gradient} flex items-center justify-center p-6 overflow-hidden border-b border-border`}>
        
        {/* Abstract grid backdrop overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        
        {/* Category Glow backdrop */}
        <div className={`absolute w-32 h-32 bg-primary/5 rounded-full filter blur-2xl group-hover:scale-125 transition-transform duration-500`} />
        
        {/* Mockup Renderer */}
        {renderMockup(project.category)}

        {/* Hover overlay mask */}
        <div className="absolute inset-0 bg-dark-bg/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className={`inline-block text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${theme.badge}`}>
              {project.category}
            </span>
            <IconComponent className={`text-sm ${theme.accentColor} opacity-70`} />
          </div>
          <h3 className="text-base sm:text-lg font-display font-bold text-text-primary mt-2.5 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-text-tertiary text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Key Metrics Grid (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-6 pt-4.5 border-t border-border">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="bg-dark-bg/60 border border-border/80 rounded-xl p-2.5">
                <div className="text-[8.5px] font-bold text-text-tertiary uppercase tracking-wider">{metric.label}</div>
                <div className="text-xs sm:text-sm font-extrabold text-primary mt-0.5">{metric.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[9.5px] px-2 py-0.5 bg-dark-bg border border-border text-text-tertiary rounded font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[9.5px] px-2 py-0.5 bg-primary/5 border border-primary/20 text-primary rounded font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Actions Links */}
        <div className="flex justify-between items-center pt-4 border-t border-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-tertiary hover:text-primary transition-colors duration-200"
            >
              <FiGithub className="text-sm" /> Codebase
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-xs font-extrabold text-primary group-hover:text-primary-light transition-colors ml-auto"
          >
            Review Specs <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
