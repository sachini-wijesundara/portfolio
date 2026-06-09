import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/projects';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden py-14 px-6 md:px-12"
      style={{
        background: '#080C14',
        borderTop: '1px solid rgba(99,102,241,0.1)',
      }}
    >
      {/* Gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(79,70,229,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/">
              <span className="font-display text-2xl font-black" style={{ color: '#F0ECFF' }}>
                <span className="gradient-text">S</span>achini
                <span style={{ color: '#818CF8' }}>.</span>
              </span>
            </Link>
            <p className="text-xs mt-1.5 font-medium" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Software Engineering Undergraduate · {year}
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Plymouth BSc (Hons) · Sri Lanka 🇱🇰
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 md:pt-1.5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => scrollTo(e, link)}
                className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { href: profile.github, icon: FiGithub, label: 'GitHub' },
              { href: profile.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
              { href: `mailto:${profile.email}`, icon: FiMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(99,102,241,0.06)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.background = 'rgba(99,102,241,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 pt-8 text-center md:text-left"
          style={{ borderTop: '1px solid rgba(99,102,241,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © {year} Sachini Wijesundara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
