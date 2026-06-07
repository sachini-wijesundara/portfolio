import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiUsers, FiCpu } from 'react-icons/fi';
import { profile, skills } from '../data/projects';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-dark-bg border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            About <span className="text-primary text-glow font-bold">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Profile Bio & Certifications */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-dark-card border border-border/30 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-display font-bold text-text-primary mb-4 flex items-center gap-2">
                <FiCpu className="text-primary" /> My Background
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6 font-medium text-sm sm:text-base">
                {profile.bio}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/20">
                <div>
                  <h4 className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-sm font-semibold text-text-primary">{profile.location}</p>
                </div>
                <div>
                  <h4 className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-primary hover:text-primary-light transition-colors break-words">{profile.email}</a>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-dark-card border border-border/30 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center gap-2">
                <FiAward className="text-primary" /> Certifications
              </h3>
              <div className="space-y-4">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <FiAward className="text-primary text-sm" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-text-tertiary">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Education & Soft Skills */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Education Timeline */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-dark-card border border-border/30 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center gap-2">
                <FiBookOpen className="text-primary" /> Education
              </h3>
              <div className="relative pl-6 border-l-2 border-border/40 space-y-8">
                {profile.education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Node dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-dark-card border-2 border-primary" />
                    
                    <span className="inline-block text-[10px] font-bold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded mb-2">
                      {edu.period}
                    </span>
                    <h4 className="text-base font-bold text-text-primary">
                      {edu.degree}
                    </h4>
                    <h5 className="text-sm font-semibold text-text-secondary">
                      {edu.institution}
                    </h5>
                    <p className="text-xs sm:text-sm text-text-tertiary mt-2">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills & Academic References */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-dark-card border border-border/30 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center gap-2">
                <FiUsers className="text-primary" /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-3.5 py-1.5 bg-dark-bg border border-border/40 text-text-secondary hover:text-primary hover:border-primary/40 rounded-lg cursor-default transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Reference */}
              <div className="pt-6 border-t border-border/20">
                <h4 className="text-xs text-text-tertiary uppercase tracking-wider mb-3">Academic Reference</h4>
                {profile.references.map((ref, index) => (
                  <div key={index} className="bg-dark-bg/60 border border-border/20 rounded-xl p-4">
                    <p className="text-sm font-bold text-text-primary">{ref.name}</p>
                    <p className="text-xs text-text-tertiary">{ref.role} — {ref.institution}</p>
                    <a href={`mailto:${ref.contact}`} className="text-xs font-semibold text-primary hover:underline mt-1.5 inline-block">{ref.contact}</a>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
