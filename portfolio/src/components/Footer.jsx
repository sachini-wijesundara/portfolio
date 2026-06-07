import Link from 'next/link';
import { profile } from '../data/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-dark-bg border-t border-border/20 text-text-tertiary">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Info */}
        <div className="text-center md:text-left">
          <Link href="/" className="font-display font-bold text-lg text-text-primary hover:text-primary transition-colors">
            Sachini Wijesundara
          </Link>
          <p className="text-xs mt-1.5 font-medium">
            Software Engineering Undergraduate • {currentYear}
          </p>
        </div>

        {/* Center: Anchor Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-primary transition-colors duration-300">Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-primary transition-colors duration-300">About</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-primary transition-colors duration-300">Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-primary transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition-colors duration-300">Contact</a>
        </div>

        {/* Right Side: Technology attributes */}
        <div className="text-center md:text-right text-[11px] font-medium">
          <p>Built with Next.js & Tailwind CSS</p>
          <p className="mt-1">Deploy-ready configuration</p>
        </div>

      </div>
    </footer>
  );
}
