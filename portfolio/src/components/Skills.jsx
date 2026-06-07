import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiCpu, FiTool, FiLayers } from 'react-icons/fi';
import { skills } from '../data/projects';

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: FiCode,
      data: skills.languages,
    },
    {
      title: "Mobile Development",
      icon: FiSmartphone,
      data: skills.mobile,
    },
    {
      title: "Frontend Technologies",
      icon: FiLayers,
      data: skills.frontend,
    },
    {
      title: "Backend Technologies",
      icon: FiCpu,
      data: skills.backend,
    },
    {
      title: "Databases & Cloud",
      icon: FiDatabase,
      data: skills.cloudDb,
    },
    {
      title: "AI / ML / AR",
      icon: FiCpu,
      data: skills.aiml,
      highlight: true // Mark for special glowing border
    },
    {
      title: "Tools & Methodologies",
      icon: FiTool,
      data: skills.tools,
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-dark-card border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Technical <span className="text-primary text-glow font-bold">Skills</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm sm:text-base font-medium">
            A comprehensive overview of my programming proficiency, architectural knowledge, and technical tools.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.title}
                custom={catIdx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-dark-bg border rounded-2xl p-6.5 shadow-xl transition-all duration-300 ${
                  cat.highlight 
                    ? 'border-primary/50 box-glow bg-gradient-to-b from-dark-bg via-dark-bg to-primary/5' 
                    : 'border-border/30 hover:border-primary/30'
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    cat.highlight 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-dark-card border border-border/40 text-text-secondary'
                  }`}>
                    <IconComponent className="text-lg" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-text-primary">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.data.map((skill, skillIdx) => (
                    <div key={skill.name} className="group flex justify-between items-center">
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors font-medium">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md uppercase cursor-default ${
                        skill.level === 'Advanced' 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'bg-border/30 text-text-tertiary border border-border/40'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
