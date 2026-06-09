import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiArrowLeft, FiGithub, FiExternalLink,
  FiCheckCircle, FiAlertTriangle, FiZap, FiCompass,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { projects, profile } from '../../data/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const getCategoryAccent = (category) => {
  if (category.includes('AI') || category.includes('ML')) return { color: '#EC4899', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.3)' };
  if (category.includes('Mobile')) return { color: '#22D3EE', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.3)' };
  if (category.includes('Web') || category.includes('Security')) return { color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.3)' };
  return { color: '#FBBF24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)' };
};

const card = {
  background: 'rgba(14,20,36,0.8)',
  border: '1px solid rgba(99,102,241,0.28)',
  borderRadius: '20px',
  padding: '28px',
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <div style={{ background: '#080C14', color: '#F0ECFF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: 700 }}>Project not found</p>
      </div>
    );
  }

  const accent = getCategoryAccent(project.category);

  return (
    <>
      <Head>
        <title>{`${project.title} | ${profile.name}`}</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <div style={{ background: '#080C14', color: '#F0ECFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <main style={{ flexGrow: 1, paddingTop: '100px', paddingBottom: '80px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>

            {/* ── Back button ── */}
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link href="/#projects" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '36px',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 600,
                color: '#9B94BD', textDecoration: 'none', transition: 'color 0.2s ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#818CF8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#9B94BD'; }}
              >
                <FiArrowLeft size={15} /> Back to Projects
              </Link>
            </motion.div>

            {/* ── Hero banner ── */}
            <motion.div variants={fadeUp(0)} initial="hidden" animate="visible"
              style={{
                position: 'relative', borderRadius: '24px', overflow: 'hidden',
                marginBottom: '40px', height: '320px',
                background: `linear-gradient(135deg, rgba(14,20,36,0.98), rgba(20,12,30,0.98))`,
                border: `1px solid ${accent.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '48px 56px',
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute', top: '-40px', left: '-40px',
                width: '300px', height: '300px', borderRadius: '50%',
                background: `radial-gradient(circle, ${accent.bg.replace('0.1', '0.25')} 0%, transparent 70%)`,
                filter: 'blur(40px)', pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: '-40px', right: '100px',
                width: '250px', height: '250px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)', pointerEvents: 'none',
              }} />
              {/* Dot grid */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
                backgroundImage: `radial-gradient(circle, ${accent.color}20 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }} />

              {/* Left: title */}
              <div style={{ position: 'relative', zIndex: 1, maxWidth: '580px' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '5px 14px', borderRadius: '30px', marginBottom: '18px',
                  background: accent.bg, border: `1px solid ${accent.border}`,
                }}>
                  <span style={{
                    fontFamily: "'Fira Code', monospace", fontSize: '10px', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.1em', color: accent.color,
                  }}>{project.category}</span>
                </div>
                <h1 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(24px, 3.5vw, 40px)',
                  fontWeight: 900, color: '#F0ECFF', lineHeight: 1.15, letterSpacing: '-0.03em',
                }}>
                  {project.title}
                </h1>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: '#9B94BD',
                  marginTop: '14px', lineHeight: 1.65, maxWidth: '460px',
                }}>
                  {project.shortDescription}
                </p>
              </div>

              {/* Right: big icon watermark */}
              <div style={{
                position: 'relative', zIndex: 1, flexShrink: 0,
                width: '120px', height: '120px', borderRadius: '28px',
                background: accent.bg, border: `1px solid ${accent.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 40px ${accent.bg.replace('0.1', '0.4')}`,
              }}>
                <HiSparkles style={{ color: accent.color, fontSize: '52px' }} />
              </div>
            </motion.div>

            {/* ── Main grid ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '28px', alignItems: 'start' }}>

              {/* ─── LEFT column ─── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* Overview */}
                <motion.div variants={fadeUp(0.1)} initial="hidden" animate="visible" style={card}>
                  <h2 style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 700,
                    color: '#F0ECFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px',
                  }}>
                    <span style={{
                      width: '32px', height: '32px', borderRadius: '10px', flexShrink: 0,
                      background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <FiCompass style={{ color: '#818CF8', fontSize: '15px' }} />
                    </span>
                    Project Overview
                  </h2>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: '#9B94BD', lineHeight: 1.8 }}>
                    {project.description}
                  </p>
                </motion.div>

                {/* Key Features */}
                {project.features?.length > 0 && (
                  <motion.div variants={fadeUp(0.15)} initial="hidden" animate="visible" style={card}>
                    <h2 style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 700,
                      color: '#F0ECFF', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px',
                    }}>
                      <span style={{
                        width: '32px', height: '32px', borderRadius: '10px', flexShrink: 0,
                        background: `${accent.bg}`, border: `1px solid ${accent.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <FiCheckCircle style={{ color: accent.color, fontSize: '15px' }} />
                      </span>
                      Key Features & Capabilities
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {project.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                          <div style={{
                            width: '26px', height: '26px', borderRadius: '8px', flexShrink: 0,
                            background: accent.bg, border: `1px solid ${accent.border}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: "'Fira Code', monospace", fontSize: '10px', fontWeight: 700,
                            color: accent.color, marginTop: '1px',
                          }}>
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: '#9B94BD', lineHeight: 1.7 }}>
                            {feat}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Challenge & Solution */}
                {project.challenge && (
                  <motion.div variants={fadeUp(0.2)} initial="hidden" animate="visible"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}
                  >
                    {/* Challenge */}
                    <div style={{
                      ...card,
                      background: 'rgba(239,68,68,0.04)',
                      border: '1px solid rgba(239,68,68,0.2)',
                    }}>
                      <h3 style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: '15px', fontWeight: 700,
                        color: '#FCA5A5', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px',
                      }}>
                        <FiAlertTriangle style={{ color: '#EF4444' }} /> The Challenge
                      </h3>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#9B94BD', lineHeight: 1.75 }}>
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div style={{
                      ...card,
                      background: 'rgba(52,211,153,0.04)',
                      border: '1px solid rgba(52,211,153,0.2)',
                    }}>
                      <h3 style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: '15px', fontWeight: 700,
                        color: '#6EE7B7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px',
                      }}>
                        <FiZap style={{ color: '#34D399' }} /> The Solution
                      </h3>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#9B94BD', lineHeight: 1.75 }}>
                        {project.solution}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* ─── RIGHT sidebar ─── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '110px' }}>

                {/* Metrics */}
                {project.metrics?.length > 0 && (
                  <motion.div variants={fadeUp(0.12)} initial="hidden" animate="visible" style={card}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: '15px', fontWeight: 700,
                      color: '#F0ECFF', marginBottom: '18px',
                    }}>
                      📊 Project Metrics
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {project.metrics.map((m) => (
                        <div key={m.label} style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '12px 14px', borderRadius: '12px',
                          background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.1)',
                        }}>
                          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: '#9B94BD' }}>{m.label}</span>
                          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '15px', fontWeight: 800, color: accent.color }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tech Stack */}
                <motion.div variants={fadeUp(0.17)} initial="hidden" animate="visible" style={card}>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: '15px', fontWeight: 700,
                    color: '#F0ECFF', marginBottom: '16px',
                  }}>
                    🛠️ Tech Stack
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} style={{
                        fontFamily: "'Fira Code', monospace", fontSize: '11px', fontWeight: 500,
                        padding: '5px 11px', borderRadius: '8px',
                        background: accent.bg, border: `1px solid ${accent.border}`, color: accent.color,
                      }}>{tech}</span>
                    ))}
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div variants={fadeUp(0.22)} initial="hidden" animate="visible"
                  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
                        padding: '14px', borderRadius: '14px', textDecoration: 'none',
                        background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.25)',
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#F0ECFF',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'; e.currentTarget.style.background = 'rgba(14,20,36,0.9)'; }}
                    >
                      <FiGithub size={17} /> View Source Code
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
                        padding: '14px', borderRadius: '14px', textDecoration: 'none',
                        background: 'linear-gradient(135deg, #4F46E5, #DB2777)',
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#fff',
                        boxShadow: '0 4px 20px rgba(79,70,229,0.35)',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,70,229,0.5)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.35)'; }}
                    >
                      <FiExternalLink size={17} /> Live Demo
                    </a>
                  )}
                </motion.div>

                {/* CTA card */}
                <motion.div variants={fadeUp(0.27)} initial="hidden" animate="visible"
                  style={{
                    padding: '28px', borderRadius: '20px', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(190,24,93,0.08))',
                    border: '1px solid rgba(99,102,241,0.22)',
                  }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>💡</div>
                  <h4 style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 700,
                    color: '#F0ECFF', marginBottom: '10px',
                  }}>
                    Interested in this project?
                  </h4>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#9B94BD',
                    lineHeight: 1.65, marginBottom: '18px',
                  }}>
                    Let's connect and discuss how we can collaborate or adapt these ideas for your needs.
                  </p>
                  <Link href="/#contact" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '100%', padding: '12px', borderRadius: '12px', textDecoration: 'none',
                    background: 'linear-gradient(135deg, #4F46E5, #DB2777)', color: '#fff',
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 700,
                    boxShadow: '0 4px 16px rgba(79,70,229,0.3)',
                    transition: 'all 0.25s ease',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    Get In Touch →
                  </Link>
                </motion.div>

              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { id: p.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.id === params.id) || null;
  return { props: { project } };
}
