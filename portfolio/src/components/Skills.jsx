import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiDart, SiPhp, SiMysql,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiFlutter, SiAndroid, SiApple,
  SiNodedotjs, SiExpress, SiFastapi, SiLaravel,
  SiMongodb, SiFirebase, SiSqlite,
  SiTensorflow, SiOpenai, SiGooglecloud
} from 'react-icons/si';
import { FaJava, FaBrain, FaCode, FaAws } from 'react-icons/fa';
import { FiCode, FiSmartphone, FiDatabase, FiCpu, FiTool, FiLayers, FiCheck } from 'react-icons/fi';

const getSkillIcon = (name) => {
  const map = {
    'Java': { icon: FaJava, color: '#F89820' },
    'Python': { icon: SiPython, color: '#3776AB' },
    'C#': { icon: FaCode, color: '#68B638' },
    'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
    'Dart': { icon: SiDart, color: '#0175C2' },
    'PHP': { icon: SiPhp, color: '#9B7FCA' },
    'SQL': { icon: SiMysql, color: '#4479A1' },
    'ReactJS': { icon: SiReact, color: '#61DAFB' },
    'NextJS': { icon: SiNextdotjs, color: '#FFFFFF' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
    'HTML & CSS': { icon: SiHtml5, color: '#E34F26' },
    'JavaFX': { icon: FaJava, color: '#F89820' },
    'Flutter': { icon: SiFlutter, color: '#54C5F8' },
    'Android (Kotlin)': { icon: SiAndroid, color: '#3DDC84' },
    'iOS (Swift)': { icon: SiApple, color: '#FA7343' },
    'Node.js': { icon: SiNodedotjs, color: '#339933' },
    'Express.js': { icon: SiExpress, color: '#AAAAAA' },
    'FastAPI': { icon: SiFastapi, color: '#009688' },
    'JSP & Servlets': { icon: FaJava, color: '#F89820' },
    'Laravel': { icon: SiLaravel, color: '#FF2D20' },
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'Firebase Firestore': { icon: SiFirebase, color: '#FFCA28' },
    'MySQL': { icon: SiMysql, color: '#4479A1' },
    'SQLite': { icon: SiSqlite, color: '#44A4DB' },
    'AWS': { icon: FaAws, color: '#FF9900' },
    'TensorFlow Lite': { icon: SiTensorflow, color: '#FF6F00' },
    'Gemini API': { icon: SiGooglecloud, color: '#4285F4' },
    'OpenRouter API': { icon: SiOpenai, color: '#74AA9C' },
    'Computer Vision': { icon: FiCpu, color: '#818CF8' },
    'Augmented Reality (AR)': { icon: FiCpu, color: '#EC4899' },
    'Neural Networks': { icon: FaBrain, color: '#22D3EE' },
    'Git & GitHub': { icon: FiTool, color: '#F05032' },
    'Agile Scrum': { icon: FiLayers, color: '#818CF8' },
    'REST APIs': { icon: FiCode, color: '#FBBF24' },
    'WebSockets': { icon: FiCode, color: '#22D3EE' },
    'Firebase Auth': { icon: SiFirebase, color: '#FFCA28' },
    'PHPUnit Testing': { icon: FiCode, color: '#3776AB' },
  };
  return map[name] || { icon: FiCheck, color: '#818CF8' };
};

const CATEGORIES = [
  {
    title: 'Core Programming', icon: FiCode,
    accent: '#818CF8', bg: 'rgba(99,102,241,0.07)', border: 'rgba(99,102,241,0.22)',
    skills: [
      { name: 'Java', level: 'Advanced' }, { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' }, { name: 'Dart', level: 'Advanced' },
      { name: 'C#', level: 'Intermediate' }, { name: 'SQL', level: 'Advanced' },
    ],
  },
  {
    title: 'Mobile Architecture', icon: FiSmartphone,
    accent: '#22D3EE', bg: 'rgba(34,211,238,0.07)', border: 'rgba(34,211,238,0.22)',
    skills: [
      { name: 'Flutter', level: 'Advanced' },
      { name: 'Android (Kotlin)', level: 'Intermediate' },
      { name: 'iOS (Swift)', level: 'Intermediate' },
    ],
  },
  {
    title: 'Web & Full-Stack', icon: FiLayers,
    accent: '#34D399', bg: 'rgba(52,211,153,0.07)', border: 'rgba(52,211,153,0.22)',
    skills: [
      { name: 'ReactJS', level: 'Advanced' }, { name: 'NextJS', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' }, { name: 'Node.js', level: 'Advanced' },
      { name: 'FastAPI', level: 'Intermediate' }, { name: 'Laravel', level: 'Intermediate' },
    ],
  },
  {
    title: 'AI / ML & AR Systems', icon: FiCpu, highlight: true,
    accent: '#EC4899', bg: 'rgba(236,72,153,0.07)', border: 'rgba(236,72,153,0.28)',
    skills: [
      { name: 'TensorFlow Lite', level: 'Advanced' }, { name: 'Gemini API', level: 'Advanced' },
      { name: 'OpenRouter API', level: 'Advanced' }, { name: 'Computer Vision', level: 'Advanced' },
      { name: 'Augmented Reality (AR)', level: 'Advanced' },
    ],
  },
  {
    title: 'Databases & Cloud', icon: FiDatabase,
    accent: '#FBBF24', bg: 'rgba(251,191,36,0.07)', border: 'rgba(251,191,36,0.22)',
    skills: [
      { name: 'MongoDB', level: 'Advanced' }, { name: 'Firebase Firestore', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' }, { name: 'AWS', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Protocols', icon: FiTool,
    accent: '#FB923C', bg: 'rgba(251,146,60,0.07)', border: 'rgba(251,146,60,0.22)',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' }, { name: 'Agile Scrum', level: 'Advanced' },
      { name: 'REST APIs', level: 'Advanced' }, { name: 'WebSockets', level: 'Advanced' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: 'linear-gradient(180deg, #0D1320 0%, #080C14 100%)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(79,70,229,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.3,
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.1) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            fontFamily: "'Fira Code', monospace", fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818CF8',
            padding: '5px 14px', background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.22)', borderRadius: '20px',
            marginBottom: '20px',
          }}>
            <FiCode style={{ fontSize: '13px' }} />
            Skills & Expertise
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: '48px', fontWeight: 900,
            color: '#F0ECFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Technologies I{' '}
            <span style={{
              background: 'linear-gradient(135deg, #EC4899, #818CF8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>master</span>
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', color: '#9B94BD', maxWidth: '480px', margin: '0 auto' }}>
            A curated catalog of tools and frameworks I use daily to build production-grade applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {CATEGORIES.map((cat, idx) => {
            const HeaderIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: cat.highlight
                    ? 'linear-gradient(135deg, rgba(18,12,32,0.98), rgba(26,12,36,0.98))'
                    : 'rgba(14,20,36,0.9)',
                  border: `1px solid ${cat.border}`,
                  borderRadius: '18px',
                  padding: '26px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 16px 48px ${cat.bg.replace('0.07', '0.3')}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Highlight glow blob */}
                {cat.highlight && (
                  <div style={{
                    position: 'absolute', top: '-20px', right: '-20px',
                    width: '100px', height: '100px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)',
                    filter: 'blur(15px)', pointerEvents: 'none',
                  }} />
                )}

                {/* Card header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                    background: cat.bg, border: `1px solid ${cat.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <HeaderIcon style={{ color: cat.accent, fontSize: '18px' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 700, color: '#F0ECFF' }}>
                      {cat.title}
                    </p>
                    {cat.highlight && (
                      <p style={{ fontFamily: "'Fira Code', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: cat.accent, marginTop: '1px' }}>
                        ★ Specialty Area
                      </p>
                    )}
                  </div>
                </div>

                {/* Skills list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cat.skills.map((skill) => {
                    const { icon: SkillIcon, color } = getSkillIcon(skill.name);
                    const isAdv = skill.level === 'Advanced';
                    return (
                      <div key={skill.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <SkillIcon style={{ color: '#5B5480', fontSize: '16px', flexShrink: 0, transition: 'color 0.2s' }} />
                          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#9B94BD' }}>{skill.name}</span>
                        </div>
                        <span style={{
                          fontFamily: "'Fira Code', monospace", fontSize: '8px', fontWeight: 700,
                          textTransform: 'uppercase', letterSpacing: '0.08em', padding: '3px 8px',
                          borderRadius: '6px',
                          background: isAdv ? cat.bg : 'rgba(30,26,58,0.8)',
                          border: `1px solid ${isAdv ? cat.border : 'rgba(30,26,58,1)'}`,
                          color: isAdv ? cat.accent : '#5B5480',
                        }}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          #skills .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          #skills .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
