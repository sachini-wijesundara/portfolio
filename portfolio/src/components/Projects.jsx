import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FiLayers } from 'react-icons/fi';

const FILTERS = [
  { label: 'All Projects', value: 'All', emoji: '🚀' },
  { label: 'AI / ML / AR', value: 'AI', emoji: '🧠' },
  { label: 'Mobile Apps', value: 'Mobile', emoji: '📱' },
  { label: 'Web Systems', value: 'Web', emoji: '🌐' },
  { label: 'Systems & IoT', value: 'Systems', emoji: '⚙️' },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'AI') return p.category.includes('AI') || p.category.includes('ML');
    if (filter === 'Mobile') return p.category.includes('Mobile');
    if (filter === 'Web') return p.category.includes('Web');
    if (filter === 'Systems') return p.category.includes('Systems') || p.category.includes('IoT') || p.category.includes('Hardware');
    return false;
  });

  return (
    <section
      id="projects"
      style={{
        background: 'linear-gradient(180deg, #080C14 0%, #0D1320 100%)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Bottom glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(190,24,93,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.25,
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.1) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            fontFamily: "'Fira Code', monospace", fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818CF8',
            padding: '5px 14px', background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.22)', borderRadius: '20px',
            marginBottom: '20px',
          }}>
            <FiLayers style={{ fontSize: '13px' }} />
            Featured Work
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: '48px', fontWeight: 900,
            color: '#F0ECFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Projects I've{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818CF8, #EC4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>built</span>
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', color: '#9B94BD', maxWidth: '520px', margin: '0 auto' }}>
            A collection of engineering systems, mobile applications, and AI integrations from my portfolio.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}
        >
          {FILTERS.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '10px 20px', borderRadius: '12px', cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 600,
                  border: 'none', outline: 'none',
                  background: active ? 'linear-gradient(135deg, #4F46E5, #DB2777)' : 'rgba(14,20,36,0.95)',
                  color: active ? '#fff' : '#9B94BD',
                  boxShadow: active ? '0 4px 20px rgba(79,70,229,0.35)' : 'none',
                  border: active ? 'none' : '1px solid rgba(99,102,241,0.18)',
                  transition: 'all 0.25s ease',
                }}
              >
                <span style={{ fontSize: '14px' }}>{f.emoji}</span>
                {f.label}
              </button>
            );
          })}
        </motion.div>

        {/* Count */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            fontFamily: "'Fira Code', monospace", fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480',
          }}>
            Showing{' '}
            <span style={{ color: '#818CF8', fontWeight: 700 }}>{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'stretch' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                layout key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.3 }}
                style={{ height: '100%' }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#9B94BD' }}>No projects in this category yet.</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          #projects .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          #projects .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
