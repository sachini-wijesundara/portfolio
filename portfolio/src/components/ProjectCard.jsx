import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiArrowRight, FiCpu, FiSmartphone, FiRadio } from 'react-icons/fi';
import { SiFlutter, SiReact } from 'react-icons/si';

const getCategoryStyle = (category) => {
  if (category.includes('AI') || category.includes('ML')) return {
    icon: FiCpu, accent: '#EC4899',
    iconBg: 'rgba(236,72,153,0.1)', iconBorder: 'rgba(236,72,153,0.25)',
    headerBg: 'linear-gradient(135deg, rgba(30,8,40,0.95), rgba(20,8,30,0.95))',
    badge: { bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.3)', color: '#EC4899' },
    glow: 'rgba(236,72,153,0.18)',
  };
  if (category.includes('Mobile')) return {
    icon: SiFlutter, accent: '#22D3EE',
    iconBg: 'rgba(34,211,238,0.1)', iconBorder: 'rgba(34,211,238,0.25)',
    headerBg: 'linear-gradient(135deg, rgba(8,24,34,0.95), rgba(8,18,28,0.95))',
    badge: { bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.3)', color: '#22D3EE' },
    glow: 'rgba(34,211,238,0.18)',
  };
  if (category.includes('Web') || category.includes('Security')) return {
    icon: SiReact, accent: '#34D399',
    iconBg: 'rgba(52,211,153,0.1)', iconBorder: 'rgba(52,211,153,0.25)',
    headerBg: 'linear-gradient(135deg, rgba(6,22,16,0.95), rgba(6,18,14,0.95))',
    badge: { bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.3)', color: '#34D399' },
    glow: 'rgba(52,211,153,0.18)',
  };
  return {
    icon: FiRadio, accent: '#FBBF24',
    iconBg: 'rgba(251,191,36,0.1)', iconBorder: 'rgba(251,191,36,0.25)',
    headerBg: 'linear-gradient(135deg, rgba(24,18,6,0.95), rgba(18,14,6,0.95))',
    badge: { bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)', color: '#FBBF24' },
    glow: 'rgba(251,191,36,0.18)',
  };
};

export default function ProjectCard({ project, index }) {
  const s = getCategoryStyle(project.category);
  const Icon = s.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      style={{
        display: 'flex', flexDirection: 'column', height: '100%',
        background: 'rgba(14,20,36,0.95)', borderRadius: '20px', overflow: 'hidden',
        border: `1px solid ${s.iconBorder}`,
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 20px 60px ${s.glow}, 0 8px 24px rgba(0,0,0,0.5)`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* ── Visual header ── */}
      <div style={{
        height: '160px', position: 'relative', overflow: 'hidden',
        background: s.headerBg, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Dot pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle, ${s.accent}20 1px, transparent 1px)`,
          backgroundSize: '16px 16px', pointerEvents: 'none',
        }} />

        {/* Icon */}
        <div style={{
          width: '72px', height: '72px', borderRadius: '18px',
          background: s.iconBg, border: `1px solid ${s.iconBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 0 30px ${s.glow}`,
          position: 'relative', zIndex: 1,
        }}>
          <Icon style={{ color: s.accent, fontSize: '32px' }} />
        </div>

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          fontFamily: "'Fira Code', monospace", fontSize: '9px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          padding: '4px 10px', borderRadius: '6px',
          background: s.badge.bg, border: `1px solid ${s.badge.border}`, color: s.badge.color,
        }}>
          {project.category}
        </div>

        {/* Index */}
        <div style={{
          position: 'absolute', bottom: '12px', left: '14px',
          fontFamily: "'Fira Code', monospace", fontSize: '10px', color: 'rgba(91,84,128,0.6)',
          letterSpacing: '0.1em',
        }}>
          #{String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: '15px', fontWeight: 700,
          color: '#F0ECFF', marginBottom: '10px', lineHeight: 1.35,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#9B94BD',
          lineHeight: 1.65, marginBottom: '18px',
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {project.shortDescription}
        </p>

        {/* Metrics */}
        {project.metrics?.length > 0 && (
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px',
            paddingTop: '14px', borderTop: '1px solid rgba(99,102,241,0.08)',
          }}>
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} style={{
                padding: '10px', borderRadius: '10px',
                background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.1)',
              }}>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#5B5480', marginBottom: '3px' }}>{m.label}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 700, color: s.accent }}>{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', marginBottom: '16px' }}>
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} style={{
              fontFamily: "'Fira Code', monospace", fontSize: '10px', padding: '3px 9px',
              background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.16)',
              borderRadius: '6px', color: '#9B94BD',
            }}>{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span style={{
              fontFamily: "'Fira Code', monospace", fontSize: '10px', padding: '3px 9px',
              background: s.iconBg, border: `1px solid ${s.iconBorder}`,
              borderRadius: '6px', color: s.accent,
            }}>+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: '14px', borderTop: '1px solid rgba(99,102,241,0.08)',
        }}>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#5B5480', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F0ECFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#5B5480'; }}>
              <FiGithub size={13} /> Source
            </a>
          ) : <div />}
          <Link href={`/projects/${project.id}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 700, color: s.accent, textDecoration: 'none' }}>
            View Details <FiArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
