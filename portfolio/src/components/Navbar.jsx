import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const NAV_ITEMS = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].href);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(NAV_ITEMS[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(6, 5, 15, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(167, 139, 250, 0.12)'
            : '1px solid transparent',
          padding: scrolled ? '12px 0' : '22px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '24px',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#F0ECFF',
                display: 'flex',
                alignItems: 'center',
                gap: '1px',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #818CF8, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                S
              </span>
              <span style={{ color: '#F0ECFF' }}>achini</span>
              <span style={{ color: '#818CF8', fontSize: '28px' }}>.</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="hidden-mobile"
          >
            {/* Nav Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.name}
                    href={isHome ? `#${item.href}` : `/#${item.href}`}
                    onClick={(e) => scrollTo(e, item.href)}
                    style={{
                      position: 'relative',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: isActive ? 600 : 500,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      background: isActive ? 'rgba(99,102,241,0.08)' : 'transparent',
                      border: isActive ? '1px solid rgba(99,102,241,0.18)' : '1px solid transparent',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div
              style={{
                width: '1px',
                height: '24px',
                background: 'rgba(99,102,241,0.2)',
                margin: '0 12px',
              }}
            />

            {/* Resume CTA */}
            <Link
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '9px 20px',
                background: 'linear-gradient(135deg, #4F46E5, #DB2777)',
                color: '#fff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(124, 58, 237, 0.35)',
                transition: 'all 0.3s ease',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(124, 58, 237, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(124, 58, 237, 0.35)';
              }}
            >
              <FiDownload size={14} />
              Resume
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
              color: '#818CF8',
              cursor: 'pointer',
            }}
            className="show-mobile"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '65px',
              left: '16px',
              right: '16px',
              zIndex: 99,
              background: 'rgba(10, 8, 24, 0.97)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(99,102,241,0.18)',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.name}
                    href={isHome ? `#${item.href}` : `/#${item.href}`}
                    onClick={(e) => scrollTo(e, item.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '15px',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      background: isActive ? 'rgba(99,102,241,0.1)' : 'transparent',
                      border: isActive ? '1px solid rgba(99,102,241,0.2)' : '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #818CF8, #EC4899)',
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}

              <div
                style={{
                  height: '1px',
                  background: 'rgba(99,102,241,0.1)',
                  margin: '8px 0',
                }}
              />

              <Link
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 16px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #4F46E5, #DB2777)',
                  color: '#fff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(79,70,229,0.3)',
                }}
              >
                <FiDownload size={15} />
                Download Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive CSS ── */}
      <style jsx global>{`
        .hidden-mobile {
          display: flex !important;
        }
        .show-mobile {
          display: none !important;
        }
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
