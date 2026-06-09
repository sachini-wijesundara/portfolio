import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail, FiMapPin, FiCheckCircle,
  FiGithub, FiLinkedin, FiAlertCircle, FiSend,
} from 'react-icons/fi';
import { profile } from '../data/projects';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'placeholder';
    if (id === 'placeholder') {
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 900);
      return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: 'POST', body: new FormData(e.target), headers: { Accept: 'application/json' },
      });
      if (res.ok) { setIsSubmitted(true); e.target.reset(); setTimeout(() => setIsSubmitted(false), 5000); }
      else { const d = await res.json(); setErrorMessage(d.error || 'Something went wrong.'); }
    } catch { setErrorMessage('Network error. Please try again.'); }
    finally { setIsLoading(false); }
  };

  const CONTACTS = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: '#818CF8' },
    { icon: FiMapPin, label: 'Location', value: profile.location, href: null, color: '#EC4899' },
  ];

  const inputBase = {
    width: '100%', padding: '13px 16px', boxSizing: 'border-box',
    background: 'rgba(10,16,28,0.8)', border: '1px solid rgba(99,102,241,0.2)',
    color: '#F0ECFF', borderRadius: '12px', fontSize: '14px',
    fontFamily: "'Space Grotesk', sans-serif", outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  };

  const focusInput = (e) => {
    e.target.style.borderColor = 'rgba(99,102,241,0.7)';
    e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)';
  };
  const blurInput = (e) => {
    e.target.style.borderColor = 'rgba(99,102,241,0.2)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #0D1320 0%, #080C14 100%)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(79,70,229,0.09) 0%, transparent 70%)',
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
            <FiMail style={{ fontSize: '13px' }} />
            Let's Talk
          </div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: '48px', fontWeight: 900,
            color: '#F0ECFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px',
          }}>
            Get in{' '}
            <span style={{
              background: 'linear-gradient(135deg, #EC4899, #818CF8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>touch</span>
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', color: '#9B94BD', maxWidth: '480px', margin: '0 auto' }}>
            Open to collaborations, opportunities, and interesting project discussions.
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '32px', alignItems: 'start' }}>

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Intro */}
            <div style={{
              padding: '28px', borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(79,70,229,0.12), rgba(190,24,93,0.08))',
              border: '1px solid rgba(99,102,241,0.22)',
            }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 700, color: '#F0ECFF', marginBottom: '12px' }}>
                Let's build something amazing! 🚀
              </h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#9B94BD', lineHeight: 1.7 }}>
                Whether you have a project idea, want to collaborate, or are looking for a passionate engineer — I'd love to hear from you.
              </p>
            </div>

            {/* Contact cards */}
            {CONTACTS.map(({ icon: Icon, label, value, href, color }) => {
              const Tag = href ? 'a' : 'div';
              return (
                <Tag
                  key={label}
                  href={href || undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '18px 20px', borderRadius: '16px',
                    background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.14)',
                    textDecoration: 'none', transition: 'border-color 0.2s ease',
                    cursor: href ? 'pointer' : 'default',
                  }}
                  onMouseEnter={(e) => { if (href) e.currentTarget.style.borderColor = `${color}50`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.14)'; }}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
                    background: `${color}12`, border: `1px solid ${color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon style={{ color, fontSize: '17px' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Fira Code', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480', marginBottom: '3px' }}>{label}</p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 600, color: '#F0ECFF', wordBreak: 'break-all' }}>{value}</p>
                  </div>
                </Tag>
              );
            })}

            {/* Social */}
            <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.14)' }}>
              <p style={{ fontFamily: "'Fira Code', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480', marginBottom: '14px' }}>Find me online</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { href: profile.github, icon: FiGithub, label: 'GitHub' },
                  { href: profile.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                      padding: '11px', borderRadius: '10px', textDecoration: 'none',
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)',
                      color: '#9B94BD', transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.color = '#F0ECFF'; e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)'; e.currentTarget.style.color = '#9B94BD'; e.currentTarget.style.background = 'rgba(99,102,241,0.06)'; }}
                  >
                    <Icon size={14} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} style={{
              padding: '36px', borderRadius: '20px',
              background: 'rgba(14,20,36,0.9)', border: '1px solid rgba(99,102,241,0.18)',
            }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 700, color: '#F0ECFF', marginBottom: '6px' }}>
                Send a Message ✉️
              </h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#9B94BD', marginBottom: '28px' }}>
                I'll get back to you within 24 hours.
              </p>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontFamily: "'Fira Code', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480', display: 'block', marginBottom: '8px' }} htmlFor="name">Your Name</label>
                  <input type="text" name="name" id="name" required placeholder="Jane Smith" style={inputBase} onFocus={focusInput} onBlur={blurInput} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Fira Code', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480', display: 'block', marginBottom: '8px' }} htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" required placeholder="jane@company.com" style={inputBase} onFocus={focusInput} onBlur={blurInput} />
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontFamily: "'Fira Code', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480', display: 'block', marginBottom: '8px' }} htmlFor="subject">Subject</label>
                <input type="text" name="_subject" id="subject" required placeholder="Project Collaboration / Job Opportunity" style={inputBase} onFocus={focusInput} onBlur={blurInput} />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '22px' }}>
                <label style={{ fontFamily: "'Fira Code', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5B5480', display: 'block', marginBottom: '8px' }} htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={5} required placeholder="Hey Sachini, I'd love to discuss..." style={{ ...inputBase, resize: 'none', lineHeight: 1.7 }} onFocus={focusInput} onBlur={blurInput} />
              </div>

              {/* Submit */}
              <button
                type="submit" disabled={isLoading}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '14px', borderRadius: '12px', border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer',
                  background: 'linear-gradient(135deg, #4F46E5, #DB2777)',
                  color: '#fff', fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 700,
                  boxShadow: '0 4px 20px rgba(79,70,229,0.3)',
                  opacity: isLoading ? 0.7 : 1,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { if (!isLoading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,70,229,0.5)'; } }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.3)'; }}
              >
                <FiSend size={15} />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success */}
              {isSubmitted && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', borderRadius: '12px', marginTop: '16px', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', color: '#34D399' }}>
                  <FiCheckCircle size={18} style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 600 }}>Message sent! I'll reply soon 🎉</span>
                </motion.div>
              )}

              {/* Error */}
              {errorMessage && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', borderRadius: '12px', marginTop: '16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#EF4444' }}>
                  <FiAlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 600 }}>{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
