import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-dark-bg/85 backdrop-blur-md border-b border-border/40 shadow-lg' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight text-text-primary">
          <span className="text-primary group-hover:text-primary-light transition-colors">S</span>
          <span className="text-text-primary">achini</span>
          <span className="text-primary text-3xl leading-none">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={isHome ? `#${item.href}` : `/#${item.href}`}
              onClick={(e) => handleClick(e, item.href)}
              className="font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/40 rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-primary transition-colors text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 top-[73px] w-full bg-dark-bg/95 backdrop-blur-lg border-t border-border/40 z-40 transition-all duration-300 md:hidden ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center gap-8 py-16 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={isHome ? `#${item.href}` : `/#${item.href}`}
              onClick={(e) => handleClick(e, item.href)}
              className="font-display text-lg font-medium text-text-secondary hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs text-center px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary border border-primary/50 rounded-lg hover:bg-primary/10 hover:border-primary transition-colors"
          >
            Resume / CV
          </a>
        </div>
      </div>
    </nav>
  );
}
