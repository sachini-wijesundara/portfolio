import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiUsers, FiCpu, FiMapPin, FiMail } from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi2';
import Image from 'next/image';
import { profile, skills } from '../data/projects';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } },
});

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(180deg, #080C14 0%, #0D1320 100%)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(79,70,229,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.35,
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.1) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            fontFamily: "'Fira Code', monospace", fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818CF8',
            padding: '5px 14px', background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.22)', borderRadius: '20px',
            marginBottom: '20px',
          }}>
            <HiAcademicCap style={{ fontSize: '14px' }} />
            About Me
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: '48px', fontWeight: 900,
            color: '#F0ECFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px',
          }}>
            The person behind the{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818CF8, #EC4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>code</span>
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', color: '#9B94BD', maxWidth: '480px', margin: '0 auto' }}>
            A passionate engineer who loves turning complex ideas into elegant, impactful software.
          </p>
        </motion.div>

        {/* ── Grid layout ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>

          {/* ── Left column (4 cols) ── */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Profile photo card */}
            <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.18)', borderRadius: '20px', padding: '16px', overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: '14px', overflow: 'hidden', background: '#111B2E' }}>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile.jpg`} alt={profile.name} fill style={{ objectFit: 'cover' }} sizes="350px" />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
                  background: 'linear-gradient(to top, rgba(10,16,28,0.95), transparent)',
                }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '17px', color: '#F0ECFF' }}>{profile.name}</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: '#818CF8', marginTop: '2px' }}>Plymouth BSc (Hons) · Reading</p>
                </div>
              </div>
              {/* Info chips */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '14px' }}>
                {[
                  { icon: FiMapPin, text: profile.location?.split(',')[0] || 'Sri Lanka', color: '#818CF8' },
                  { icon: FiMail, text: 'Email me', color: '#EC4899', href: `mailto:${profile.email}` },
                ].map(({ icon: Icon, text, color, href }) => {
                  const Tag = href ? 'a' : 'div';
                  return (
                    <Tag key={text} href={href} style={{
                      display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 12px',
                      background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.12)',
                      borderRadius: '10px', textDecoration: 'none', cursor: href ? 'pointer' : 'default',
                    }}>
                      <Icon style={{ color, flexShrink: 0, fontSize: '13px' }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', color: '#9B94BD', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{text}</span>
                    </Tag>
                  );
                })}
              </div>
            </motion.div>

            {/* Certifications card */}
            <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '20px', padding: '24px' }}
            >
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '15px', fontWeight: 700, color: '#F0ECFF', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiAward style={{ color: '#FBBF24' }} /> Certifications
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {profile.certifications.map((cert, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <FiAward style={{ color: '#FBBF24', fontSize: '12px' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#F0ECFF', lineHeight: 1.4 }}>{cert.title}</p>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', color: '#5B5480', marginTop: '2px' }}>{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right column (8 cols) ── */}
          <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Bio card */}
            <motion.div variants={fadeUp(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '20px', padding: '32px' }}
            >
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 700, color: '#F0ECFF', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiCpu style={{ color: '#818CF8' }} /> My Background
              </h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: '#9B94BD', lineHeight: 1.75 }}>{profile.bio}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                {['Flutter', 'Next.js', 'AI/ML', 'Firebase', 'REST APIs', 'Agile', 'React', 'Python'].map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'Fira Code', monospace", fontSize: '11px', padding: '4px 10px',
                    background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.18)',
                    borderRadius: '6px', color: '#818CF8',
                  }}>{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeUp(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '20px', padding: '32px' }}
            >
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 700, color: '#F0ECFF', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiBookOpen style={{ color: '#22D3EE' }} /> Education
              </h3>
              <div style={{ position: 'relative', paddingLeft: '28px' }}>
                {/* Timeline line */}
                <div style={{
                  position: 'absolute', left: '9px', top: '8px', bottom: '8px', width: '1px',
                  background: 'linear-gradient(to bottom, rgba(99,102,241,0.6), rgba(236,72,153,0.3), transparent)',
                }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  {profile.education.map((edu, i) => (
                    <div key={i} style={{ position: 'relative' }}>
                      {/* Dot */}
                      <div style={{
                        position: 'absolute', left: '-23px', top: '2px', width: '22px', height: '22px',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: i === 0 ? 'linear-gradient(135deg, #4F46E5, #DB2777)' : 'rgba(30,26,58,1)',
                        border: i === 0 ? 'none' : '1px solid rgba(99,102,241,0.3)',
                      }}>
                        <HiAcademicCap style={{ fontSize: '11px', color: i === 0 ? '#fff' : '#9B94BD' }} />
                      </div>
                      <span style={{
                        fontFamily: "'Fira Code', monospace", fontSize: '9px', fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '0.1em', color: '#818CF8',
                        padding: '3px 8px', background: 'rgba(99,102,241,0.08)',
                        border: '1px solid rgba(99,102,241,0.2)', borderRadius: '6px',
                        display: 'inline-block', marginBottom: '6px',
                      }}>{edu.period}</span>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '15px', fontWeight: 700, color: '#F0ECFF' }}>{edu.degree}</p>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#818CF8', marginTop: '2px', fontWeight: 600 }}>{edu.institution}</p>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: '#5B5480', marginTop: '6px', lineHeight: 1.6 }}>{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Soft Skills + Reference */}
            <motion.div variants={fadeUp(0.25)} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '20px', padding: '32px' }}
            >
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 700, color: '#F0ECFF', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiUsers style={{ color: '#EC4899' }} /> Soft Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {skills.soft.map((skill, i) => (
                  <span key={i} style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', padding: '6px 14px',
                    background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.15)',
                    borderRadius: '8px', color: '#9B94BD', cursor: 'default',
                  }}>{skill}</span>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '24px' }}>
                <p style={{ fontFamily: "'Fira Code', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480', marginBottom: '14px' }}>Academic Reference</p>
                {profile.references.map((ref, i) => (
                  <div key={i} style={{ padding: '16px', background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.1)', borderRadius: '12px' }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 700, color: '#F0ECFF' }}>{ref.name}</p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: '#9B94BD', marginTop: '2px' }}>{ref.role} — {ref.institution}</p>
                    <a href={`mailto:${ref.contact}`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: '#818CF8', display: 'inline-block', marginTop: '6px', fontWeight: 600, textDecoration: 'none' }}>{ref.contact}</a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style jsx global>{`
        @media (max-width: 900px) {
          #about .about-grid > div:first-child { grid-column: span 12 !important; }
          #about .about-grid > div:last-child { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
