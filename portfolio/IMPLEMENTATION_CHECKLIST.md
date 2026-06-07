# Portfolio Website - Implementation Checklist

## 🚀 QUICK START

### **Phase 0: Initial Setup (30 minutes)**
```bash
# Create Next.js project
npx create-next-app@latest my-portfolio --typescript --tailwind

# Navigate to project
cd my-portfolio

# Install additional packages
npm install framer-motion react-icons formspree

# Start dev server
npm run dev
```

---

## 📋 PHASE 1: PROJECT STRUCTURE (1 hour)

Create these folders:

```
✓ src/components/
✓ src/pages/
✓ src/styles/
✓ src/data/
✓ src/utils/
✓ public/images/
✓ public/videos/
```

### **Key Files to Create**

#### **`tailwind.config.js`** - Color System
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#00D9FF',
        'primary-dark': '#0095A8',
        'primary-light': '#66E6FF',
        'dark': {
          'bg': '#0A0E27',
          'card': '#1A1F3A',
          'hover': '#242D4A',
        },
        'text': {
          'primary': '#F5F7FB',
          'secondary': '#A8B2D1',
          'tertiary': '#6B7280',
        }
      }
    }
  }
}
```

#### **`src/data/projects.js`** - Project Data
```javascript
export const projects = [
  {
    id: 1,
    title: 'AI-Powered AR Beauty App',
    description: 'Deployed 8 ML models with <150ms inference latency...',
    image: '/images/projects/ar-beauty.jpg',
    technologies: ['Flutter', 'Firebase', 'TensorFlow Lite'],
    github: 'https://github.com/...',
    demo: 'https://...',
    metrics: {
      users: '50,000+',
      rating: '4.8★',
      downloads: '12,000+',
      uptime: '99.7%'
    }
  },
  // Add more projects...
];

export const skills = {
  languages: ['Java', 'Python', 'JavaScript', 'Dart', 'C#'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Flutter'],
  backend: ['Node.js', 'Firebase', 'MongoDB', 'Python'],
  other: ['TensorFlow Lite', 'AR', 'WebSockets', 'AWS']
};

export const social = [
  { name: 'GitHub', url: 'https://github.com/sachini-wijesundara' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sachini-wijesundara' },
];
```

#### **`src/styles/globals.css`** - Global Styles
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0A0E27;
  color: #F5F7FB;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

h1, h2, h3, h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

code {
  font-family: 'Fira Code', monospace;
  color: #00D9FF;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #1A1F3A;
}

::-webkit-scrollbar-thumb {
  background: #00D9FF;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #0095A8;
}
```

---

## 🎨 PHASE 2: COMPONENTS (4-5 hours)

### **Step 1: Navigation Bar**
- [ ] Create `src/components/Navbar.jsx`
- [ ] Add sticky positioning
- [ ] Add active link highlighting
- [ ] Add mobile hamburger menu
- [ ] Test responsive behavior

```jsx
// src/components/Navbar.jsx
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-hover">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Sachini</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-text-secondary hover:text-primary transition">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-card border-t border-dark-hover">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block px-6 py-3 text-text-secondary hover:text-primary">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
```

### **Step 2: Hero Section**
- [ ] Create `src/components/Hero.jsx`
- [ ] Add gradient background
- [ ] Add text animations (Framer Motion)
- [ ] Add animated scroll indicator
- [ ] Add CTA buttons

```jsx
// src/components/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold text-text-primary mb-6"
        >
          Hi, I'm <span className="text-primary">Sachini</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl text-text-secondary mb-8"
        >
          Full-Stack Developer | AI/ML Enthusiast | Building the future
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mb-16"
        >
          <button className="px-8 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-light transition">
            View Projects
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg transition rounded-lg">
            Download CV
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-bounce text-primary text-3xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
```

### **Step 3: About Section**
- [ ] Create `src/components/About.jsx`
- [ ] Add profile image
- [ ] Write compelling bio
- [ ] Add key points/bullets

### **Step 4: Skills Section**
- [ ] Create `src/components/Skills.jsx`
- [ ] Create skill cards
- [ ] Add React Icons
- [ ] Organize by category (Frontend, Backend, AI/ML)

### **Step 5: Projects Section**
- [ ] Create `src/components/Projects.jsx`
- [ ] Create `src/components/ProjectCard.jsx`
- [ ] Implement grid layout
- [ ] Add hover effects
- [ ] Add tech tags

### **Step 6: Contact Section**
- [ ] Create `src/components/Contact.jsx`
- [ ] Create form with Formspree integration
- [ ] Add contact info
- [ ] Add social links
- [ ] Add success/error messages

### **Step 7: Footer**
- [ ] Create `src/components/Footer.jsx`
- [ ] Add copyright info
- [ ] Add quick links
- [ ] Add year dynamically

---

## 📄 PHASE 3: PAGES (2 hours)

### **Step 1: Home Page (`src/pages/index.jsx`)**
- [ ] Import all components
- [ ] Arrange sections
- [ ] Test full page layout
- [ ] Verify smooth scrolling

```jsx
// src/pages/index.jsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
```

### **Step 2: Project Detail Page (`src/pages/projects/[id].jsx`)**
- [ ] Create dynamic project pages
- [ ] Add detailed project info
- [ ] Add code snippets (optional)
- [ ] Add related projects

### **Step 3: 404 Page**
- [ ] Create custom 404 page
- [ ] Add fun design
- [ ] Add link back to home

---

## 🎬 PHASE 4: ANIMATIONS & INTERACTIONS (2 hours)

- [ ] Add Framer Motion scroll animations
- [ ] Add page transition animations
- [ ] Add button hover effects
- [ ] Add card entrance animations
- [ ] Add smooth page scrolling
- [ ] Test all animations on mobile

**Key Animations to Add:**
1. **Stagger animations** - Elements appear one by one
2. **Scroll triggers** - Animations trigger on scroll
3. **Hover effects** - Cards lift, shadows appear
4. **Page transitions** - Smooth fade between pages
5. **Loading states** - Skeleton screens, spinners

---

## 📸 PHASE 5: CONTENT & IMAGES (2 hours)

- [ ] Add profile image
- [ ] Add project screenshots
- [ ] Optimize images (use Next.js Image component)
- [ ] Add alt text to all images
- [ ] Create project videos (optional)
- [ ] Write project descriptions with metrics

```jsx
// Use Next.js Image for optimization
import Image from 'next/image';

<Image
  src="/images/profile.jpg"
  alt="Sachini Wijesundara"
  width={300}
  height={300}
  className="rounded-full"
/>
```

---

## 🔧 PHASE 6: TECHNICAL OPTIMIZATION (1-2 hours)

- [ ] Add SEO meta tags
- [ ] Add Open Graph tags
- [ ] Optimize performance (Lighthouse)
- [ ] Add robots.txt
- [ ] Add sitemap.xml
- [ ] Test accessibility
- [ ] Fix console errors

```jsx
// Add to _document.jsx
import Head from 'next/head';

<Head>
  <meta name="description" content="Sachini Wijesundara - Full-Stack Developer & AI/ML Enthusiast" />
  <meta name="keywords" content="developer, portfolio, full-stack, AI" />
  <meta property="og:title" content="Sachini Wijesundara" />
  <meta property="og:image" content="/og-image.jpg" />
</Head>
```

---

## 🚀 PHASE 7: DEPLOYMENT (30 minutes)

### **Option A: Vercel (Recommended for Next.js)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set custom domain in Vercel dashboard
```

### **Option B: Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### **Option C: GitHub Pages**
- Push to GitHub
- Enable GitHub Pages in settings
- Choose main branch

### **Post-Deployment**
- [ ] Test all links work
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Monitor performance
- [ ] Set up analytics (Google Analytics/Vercel)

---

## 📊 MONITORING & MAINTENANCE

After deployment:
- [ ] Monitor Lighthouse score (target: 90+)
- [ ] Monitor Core Web Vitals
- [ ] Check for broken links
- [ ] Monitor contact form submissions
- [ ] Track visitor analytics
- [ ] Update projects regularly

---

## 📱 TESTING CHECKLIST

### **Desktop**
- [ ] Chrome/Firefox/Safari
- [ ] All animations smooth
- [ ] Hover effects work
- [ ] Links functional
- [ ] Form submission works

### **Mobile**
- [ ] iPhone/Android
- [ ] Touch interactions work
- [ ] Hamburger menu works
- [ ] Text readable
- [ ] Images load properly
- [ ] Form easy to use

### **Accessibility**
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast adequate
- [ ] Focus indicators visible
- [ ] Alt text on images

---

## 💾 GIT WORKFLOW

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub
git remote add origin https://github.com/username/portfolio
git branch -M main
git push -u origin main

# Regular commits
git add .
git commit -m "Add [feature]"
git push
```

---

## 🎯 SUCCESS METRICS

Your portfolio is successful when:
- [ ] Load time < 3 seconds
- [ ] Mobile score > 90
- [ ] All links functional
- [ ] Projects showcase metrics
- [ ] Clean, professional design
- [ ] Easy to navigate
- [ ] Contact form working
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] CV downloadable

---

## 📞 FREQUENTLY REFERENCED LINKS

**Package Documentation:**
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/
- Next.js: https://nextjs.org/docs
- React Icons: https://react-icons.github.io/react-icons/
- Formspree: https://formspree.io/

**Hosting:**
- Vercel: https://vercel.com/
- Netlify: https://netlify.com/
- GitHub Pages: https://pages.github.com/

**Design Tools:**
- Figma: https://figma.com/
- Coolors: https://coolors.co/
- Unplash: https://unsplash.com/ (images)

---

## ⏱️ ESTIMATED TIMELINE

- Phase 1 (Setup): 30 min
- Phase 2 (Components): 4-5 hours
- Phase 3 (Pages): 2 hours
- Phase 4 (Animations): 2 hours
- Phase 5 (Content): 2 hours
- Phase 6 (Optimization): 1-2 hours
- Phase 7 (Deployment): 30 min

**Total: ~14-17 hours**

This can be completed in 2-3 days of focused work!

---

**Good luck building your portfolio! 🚀**
