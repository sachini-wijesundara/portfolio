import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';
import { profile } from '../data/projects';

const ROLES = [
  'Flutter Developer',
  'Full-Stack Engineer',
  'AI/ML Enthusiast',
  'Mobile App Builder',
  'Software Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
  });

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: '#080C14',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0 60px',
      }}
    >
      {/* ── Background mesh glows ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.14) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '-10%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(190,24,93,0.1) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '40%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.5,
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.09) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      {/* ── Content container ── */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '0 40px',
        width: '100%', position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center',
      }}>

        {/* ───────── Left: Text ───────── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          {/* Available badge */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="visible">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '7px 16px', borderRadius: '30px',
              background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)',
              marginBottom: '28px',
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%', background: '#34D399', flexShrink: 0,
                boxShadow: '0 0 8px rgba(52,211,153,0.8)',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{
                fontFamily: "'Fira Code', monospace", fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.08em', textTransform: 'uppercase', color: '#818CF8',
              }}>
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={fadeUp(0.08)} initial="hidden" animate="visible"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 500, color: '#9B94BD', marginBottom: '10px' }}>
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 variants={fadeUp(0.14)} initial="hidden" animate="visible"
            style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 900, lineHeight: 1.0,
              letterSpacing: '-0.04em', color: '#F0ECFF', marginBottom: '20px',
              fontSize: 'clamp(48px, 6vw, 76px)',
            }}>
            Sachini<br />
            <span style={{
              background: 'linear-gradient(135deg, #818CF8 0%, #EC4899 60%, #22D3EE 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Wijesundara
            </span>
          </motion.h1>

          {/* Typing role */}
          <motion.div variants={fadeUp(0.2)} initial="hidden" animate="visible"
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 18px', borderRadius: '12px',
              background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)',
              marginBottom: '24px', minWidth: '280px',
            }}>
            <span style={{ color: '#5B5480', fontFamily: "'Fira Code', monospace", fontSize: '13px' }}>$ </span>
            <span style={{
              fontFamily: "'Fira Code', monospace", fontSize: '15px', fontWeight: 500, color: '#818CF8',
            }}>
              {displayed}
              <span style={{
                display: 'inline-block', width: '2px', height: '16px',
                background: '#EC4899', marginLeft: '2px', verticalAlign: 'middle',
                animation: 'blink 1s steps(1) infinite',
              }} />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={fadeUp(0.26)} initial="hidden" animate="visible"
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', color: '#9B94BD',
              lineHeight: 1.75, maxWidth: '440px', marginBottom: '36px',
            }}>
            A Software Engineering undergraduate passionate about building full-stack products — from{' '}
            <strong style={{ color: '#818CF8', fontWeight: 600 }}>mobile apps</strong> and{' '}
            <strong style={{ color: '#EC4899', fontWeight: 600 }}>web systems</strong> to{' '}
            <strong style={{ color: '#22D3EE', fontWeight: 600 }}>AI integrations</strong> and{' '}
            <strong style={{ color: '#34D399', fontWeight: 600 }}>IoT solutions</strong> — turning ideas into impactful, real-world software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp(0.32)} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '14px', textDecoration: 'none',
                background: 'linear-gradient(135deg, #4F46E5, #DB2777)',
                color: '#fff', fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '14px', fontWeight: 700,
                boxShadow: '0 4px 24px rgba(79,70,229,0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(79,70,229,0.55)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(79,70,229,0.4)'; }}
            >
              <HiSparkles size={16} />
              View My Work
            </a>
            <Link
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '14px', textDecoration: 'none',
                background: 'transparent', color: '#F0ECFF',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 600,
                border: '1px solid rgba(99,102,241,0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.7)'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <FiDownload size={15} />
              Download CV
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp(0.38)} initial="hidden" animate="visible"
            style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480' }}>
              Find me on
            </span>
            <div style={{ width: '32px', height: '1px', background: 'rgba(91,84,128,0.5)' }} />
            {[
              { href: profile.github, icon: FiGithub, label: 'GitHub' },
              { href: profile.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
              { href: `mailto:${profile.email}`, icon: FiMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer" aria-label={label}
                style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.18)',
                  color: '#9B94BD', textDecoration: 'none', transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'; e.currentTarget.style.background = 'rgba(99,102,241,0.12)'; e.currentTarget.style.color = '#818CF8'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.18)'; e.currentTarget.style.background = 'rgba(99,102,241,0.06)'; e.currentTarget.style.color = '#9B94BD'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp(0.44)} initial="hidden" animate="visible"
            style={{
              display: 'flex', gap: '40px', marginTop: '44px', paddingTop: '28px',
              borderTop: '1px solid rgba(99,102,241,0.12)',
            }}>
            {[
              { value: '11+', label: 'Projects Built' },
              { value: '3+', label: 'Years Coding' },
              { value: '5+', label: 'Tech Stacks' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: '30px', fontWeight: 900,
                  background: 'linear-gradient(135deg, #818CF8, #EC4899)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  lineHeight: 1,
                }}>{value}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: '#5B5480', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ───────── Right: Profile image ───────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
        >
          {/* Outer slow spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '400px', height: '400px', borderRadius: '50%',
              border: '1px dashed rgba(99,102,241,0.2)',
            }}
          />
          {/* Inner reverse ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '340px', height: '340px', borderRadius: '50%',
              background: 'linear-gradient(#080C14, #080C14) padding-box, linear-gradient(135deg, rgba(79,70,229,0.5), transparent 50%, rgba(190,24,93,0.5)) border-box',
              border: '1px solid transparent',
            }}
          />

          {/* Profile photo */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative', width: '270px', height: '270px' }}
          >
            {/* Gradient ring around photo */}
            <div style={{
              position: 'absolute', inset: '-4px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #4F46E5 0%, #DB2777 50%, #22D3EE 100%)',
              padding: '4px',
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#080C14' }} />
            </div>

            {/* Photo */}
            <div style={{ position: 'absolute', inset: '5px', borderRadius: '50%', overflow: 'hidden' }}>
              <Image
                src="/profile.jpg"
                alt="Sachini Wijesundara"
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="270px"
              />
            </div>

            {/* Badge: Education */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', top: '-8px', right: '-36px',
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 16px', borderRadius: '16px',
                background: 'rgba(14,20,36,0.95)', border: '1px solid rgba(99,102,241,0.28)',
                boxShadow: '0 8px 32px rgba(79,70,229,0.25)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span style={{ fontSize: '20px' }}>🎓</span>
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 700, color: '#818CF8', letterSpacing: '0.04em' }}>Plymouth BSc</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: '#5B5480', marginTop: '1px' }}>Hons · Reading</div>
              </div>
            </motion.div>

            {/* Badge: Status */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute', bottom: '-8px', left: '-40px',
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 16px', borderRadius: '16px',
                background: 'rgba(14,20,36,0.95)', border: '1px solid rgba(52,211,153,0.3)',
                boxShadow: '0 8px 32px rgba(52,211,153,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span style={{
                width: '9px', height: '9px', borderRadius: '50%', background: '#34D399', flexShrink: 0,
                boxShadow: '0 0 10px rgba(52,211,153,0.9)',
                animation: 'pulse 2s infinite',
              }} />
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 700, color: '#34D399', letterSpacing: '0.04em' }}>Open to Work</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: '#5B5480', marginTop: '1px' }}>Full-time / Internship</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
        style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          background: 'none', border: 'none', cursor: 'pointer', color: '#5B5480',
          fontFamily: "'Fira Code', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em',
          zIndex: 10,
        }}
      >
        <span>Scroll</span>
        <FiArrowDown size={15} />
      </motion.button>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        @media (max-width: 860px) {
          #home .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
