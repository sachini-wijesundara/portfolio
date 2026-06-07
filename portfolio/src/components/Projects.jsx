import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  // Filter keys definition
  const filters = [
    { label: 'All Projects', value: 'All' },
    { label: 'AI / ML / AR', value: 'AI' },
    { label: 'Mobile Apps', value: 'Mobile' },
    { label: 'Web Systems', value: 'Web' },
    { label: 'Systems & IoT', value: 'Systems' }
  ];

  // Helper matching function
  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'AI') {
      return project.category.includes('AI/ML');
    }
    if (filter === 'Mobile') {
      return project.category.includes('Mobile');
    }
    if (filter === 'Web') {
      return project.category.includes('Web');
    }
    if (filter === 'Systems') {
      return project.category.includes('Systems') || project.category.includes('IoT') || project.category.includes('Hardware');
    }
    return false;
  });

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-dark-bg border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Featured <span className="text-primary text-glow font-bold">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm sm:text-base font-medium">
            Explore a collection of key engineering systems, mobile applications, and AI integrations I have built.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-16 max-w-2xl mx-auto">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 focus:outline-none ${
                filter === f.value
                  ? 'bg-primary text-dark-bg font-bold shadow-md shadow-primary/10'
                  : 'bg-dark-card border border-border/40 text-text-secondary hover:text-text-primary hover:border-primary/30'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-text-secondary font-medium">
            No projects found in this category.
          </div>
        )}

      </div>
    </section>
  );
}
