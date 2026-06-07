# Portfolio Website Guide - Complete Build Blueprint

## 📋 TABLE OF CONTENTS
1. Tech Stack & Tools
2. Project Structure
3. Design System & Colors
4. Page Layouts & Components
5. Implementation Checklist
6. Code Examples

---

## 1️⃣ TECH STACK & TOOLS

### **Frontend Framework**
- **Next.js 14** (React-based, best for portfolios)
  - Built-in routing
  - Static site generation (fast loading)
  - SEO optimization
  - Deployment ready (Vercel)
  - Alternative: React + Vite (if you prefer simpler setup)

### **Styling**
- **Tailwind CSS** (utility-first CSS framework)
  - Rapid development
  - Consistent design system
  - Mobile-responsive out of the box
  - Easy color customization
  - Alternative: CSS Modules or Styled Components

### **Animations & Interactions**
- **Framer Motion** (for React)
  - Smooth scroll animations
  - Page transitions
  - Hover effects
  - Project card reveals
  - Installation: `npm install framer-motion`

### **Icons**
- **React Icons** (icon library)
  - 1000+ icons
  - Lightweight
  - Easy to customize colors/size
  - Installation: `npm install react-icons`

### **Code Highlighting (for project code snippets)**
- **Prism.js** or **Highlight.js**
  - Beautiful code syntax highlighting
  - Multiple themes

### **Email (Contact Form)**
- **Nodemailer** (if self-hosting backend)
- **Formspree** (free, no backend needed) - **RECOMMENDED**
  - Just post to their endpoint
  - No code required

### **Deployment**
- **Vercel** (free tier, optimized for Next.js)
- **Netlify** (free tier alternative)
- **GitHub Pages** (for static sites)

### **Version Control**
- **Git & GitHub** (host your code, show GitHub contributions)

### **Development Tools**
```bash
npm init next-app@latest my-portfolio
# or
npm create vite@latest my-portfolio -- --template react
```

---

## 2️⃣ PROJECT STRUCTURE

```
my-portfolio/
├── public/                    # Static files (images, icons, CV)
│   ├── images/
│   │   ├── projects/         # Project screenshots
│   │   ├── profile.jpg       # Your professional photo
│   │   └── bg-patterns/      # Background patterns
│   ├── videos/               # Project demo videos
│   └── cv.pdf                # Your resume
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero/intro section
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Technical skills grid
│   │   ├── Projects.jsx      # Project cards grid
│   │   ├── ProjectCard.jsx   # Individual project card
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Footer.jsx        # Footer
│   │   └── ScrollIndicator.jsx # Scroll animation
│   │
│   ├── pages/
│   │   ├── index.jsx         # Home page
│   │   ├── projects.jsx      # All projects (detailed view)
│   │   ├── [projectId].jsx   # Individual project detail page
│   │   └── 404.jsx           # 404 page
│   │
│   ├── styles/
│   │   ├── globals.css       # Global styles & Tailwind
│   │   └── animations.css    # Custom animations
│   │
│   ├── data/
│   │   ├── projects.js       # Project data (JSON-like)
│   │   ├── skills.js         # Skills data
│   │   └── social.js         # Social links
│   │
│   ├── utils/
│   │   ├── animations.js     # Reusable animation helpers
│   │   └── api.js            # API calls (contact form, etc.)
│   │
│   └── app.jsx               # Main app component (or _app.jsx for pages)
│
├── .env.local                 # Environment variables (API keys)
├── tailwind.config.js         # Tailwind configuration & colors
├── package.json              # Dependencies
└── README.md                 # Project documentation
```

---

## 3️⃣ DESIGN SYSTEM & COLOR PALETTE

### **Color Palette (Professional & Modern)**

This portfolio uses a **sophisticated dark-to-light gradient** with vibrant accent colors.

#### **Primary Colors**
```css
/* Primary Brand Colors */
--color-primary: #00D9FF;        /* Vibrant Cyan - CTAs, highlights */
--color-primary-dark: #0095A8;   /* Dark Cyan - Hover states */
--color-primary-light: #66E6FF;  /* Light Cyan - Backgrounds */

/* Background Colors */
--color-bg-dark: #0A0E27;        /* Very dark navy - Main background */
--color-bg-card: #1A1F3A;        /* Dark blue-gray - Card backgrounds */
--color-bg-hover: #242D4A;       /* Slightly lighter - Hover states */

/* Text Colors */
--color-text-primary: #F5F7FB;   /* Off-white - Main text */
--color-text-secondary: #A8B2D1; /* Muted blue-gray - Secondary text */
--color-text-tertiary: #6B7280;  /* Gray - Tertiary text */

/* Accent Colors */
--color-accent-1: #FF6B6B;       /* Red - Errors, important highlights */
--color-accent-2: #4ECDC4;       /* Teal - Success, secondary accents */
--color-accent-3: #FFD93D;       /* Gold - Warnings, tertiary accents */
--color-accent-4: #A78BFA;       /* Purple - Premium features */

/* Borders & Dividers */
--color-border: #2D3748;         /* Subtle border color */
--color-border-light: #4A5568;   /* Lighter borders */
```

#### **Alternative Light Theme** (if you prefer)
```css
--color-bg-dark: #F9FAFC;        /* Off-white background */
--color-bg-card: #FFFFFF;        /* White cards */
--color-text-primary: #1F2937;   /* Dark gray text */
--color-text-secondary: #6B7280; /* Medium gray text */
--color-primary: #0095A8;        /* Same cyan */
```

### **Tailwind Configuration**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      'primary': '#00D9FF',
      'primary-dark': '#0095A8',
      'primary-light': '#66E6FF',
      'accent-red': '#FF6B6B',
      'accent-teal': '#4ECDC4',
      'accent-gold': '#FFD93D',
      'accent-purple': '#A78BFA',
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
    },
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],  // Bold headings
        body: ['Inter', 'sans-serif'],        // Body text
        mono: ['Fira Code', 'monospace'],     // Code blocks
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
```

### **Font Choices**
```html
<!-- In your HTML head -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

**Font Usage:**
- **Poppins 700/800** - Page titles, hero text, project names
- **Inter 500/600** - Section headings, card titles, buttons
- **Inter 400** - Body text, descriptions, paragraphs
- **Fira Code 400** - Code snippets, technical details

---

## 4️⃣ PAGE LAYOUTS & COMPONENTS

### **A. NAVIGATION BAR (Sticky)**
```
┌─────────────────────────────────────────────────────────┐
│ Logo/Name    │  Home  About  Projects  Skills  Contact  │
└─────────────────────────────────────────────────────────┘

Colors:
- Background: Semi-transparent dark-bg with backdrop blur
- Text: text-primary
- Active link: primary (cyan) with underline
- Logo: Primary color (cyan)

Behavior:
- Sticky to top on scroll
- Mobile: Hamburger menu
- Active section highlighted
```

### **B. HERO SECTION (Full Height)**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Hi, I'm Sachini Wijesundara                           │
│  Software Engineer | Full-Stack Developer               │
│  Building AI-powered & scalable applications            │
│                                                         │
│  [View My Projects]  [Download CV]                      │
│                                                         │
│  ↓ Scroll to explore ↓                                  │
│                                                         │
└─────────────────────────────────────────────────────────┘

Design:
- Full viewport height (min-height: 100vh)
- Animated gradient background
- Staggered text animations (fade in + slide up)
- Animated scroll indicator at bottom
- Profile image on right (circle with subtle shadow)

Colors:
- Background: Gradient from dark-bg to dark-card
- Primary text: Cyan (#00D9FF) for emphasis
- Secondary text: text-secondary (muted blue-gray)
```

### **C. ABOUT SECTION**
```
┌──────────────────────┬──────────────────────────┐
│                      │ Brief bio paragraph      │
│ Profile Image        │ Technical background     │
│ (Circle, 300px)      │ Current focus            │
│                      │ Why hire me (2-3 bullets)│
└──────────────────────┴──────────────────────────┘

Layout:
- Two-column grid (responsive: stack on mobile)
- Image left, text right
- Image: Circular, professional photo with ring effect
- Text: Warm, personal tone

Colors:
- Image border: Primary color with glow effect
- Text: text-primary & text-secondary
- Accent bullets: Primary color bullets (cyan)
```

### **D. SKILLS SECTION**
```
╔════════════════════════════════════════════════════╗
║ TECHNICAL SKILLS                                  ║
╠════════════════════════════════════════════════════╣
║                                                  ║
║ ┌─────────────────┐ ┌─────────────────────────┐ ║
║ │ Programming     │ │ Frontend              │ ║
║ │ Languages       │ │ - React/Next.js       │ ║
║ │ - Java          │ │ - Tailwind CSS        │ ║
║ │ - Python        │ │ - React Icons         │ ║
║ │ - JavaScript    │ │                       │ ║
║ │ - Dart          │ │ Backend               │ ║
║ │ - C#            │ │ - Node.js/Express     │ ║
║ │                 │ │ - Firebase            │ ║
║ └─────────────────┘ │ - MongoDB             │ ║
║                     │                       │ ║
║                     └─────────────────────────┘ ║
║                                                  ║
║ ┌──────────────────────────────────────────────┐ ║
║ │ AI/ML & Other                                │ ║
║ │ - TensorFlow Lite    - AR/AR Technologies    │ ║
║ │ - Computer Vision    - WebSockets            │ ║
║ │ - Gemini API         - Cloud Platforms       │ ║
║ └──────────────────────────────────────────────┘ ║
╚════════════════════════════════════════════════════╝

Layout:
- 2-4 column grid (responsive)
- Skill cards with icons
- Hover effect: Card lifts up, background lightens
- Icons: React Icons (tech-specific icons)

Colors:
- Card background: dark-card
- Card border: Subtle border-light
- Hover background: dark-hover or accent color faded
- Text: text-primary

Typography:
- Category title: Poppins 600 (text-primary)
- Skills: Inter 400 (text-secondary)
```

### **E. PROJECTS SECTION (Grid)**
```
╔════════════════════════════════════════════════════╗
║ FEATURED PROJECTS                                 ║
╠════════════════════════════════════════════════════╣
║                                                  ║
║ ┌──────────────────┐ ┌──────────────────────┐   ║
║ │ [Image]          │ │ [Image]              │   ║
║ │                  │ │                      │   ║
║ │ AR Beauty App    │ │ Healthcare Platform  │   ║
║ │ Flutter • AI • AR│ │ Flutter • Firebase   │   ║
║ │ [View Project]   │ │ [View Project]       │   ║
║ └──────────────────┘ │                      │   ║
║                      │ [View Project]       │   ║
║                      └──────────────────────┘   ║
║                                                  ║
║ ┌──────────────────┐ ┌──────────────────────┐   ║
║ │ [Image]          │ │ [Image]              │   ║
║ │                  │ │                      │   ║
║ │ E-Commerce       │ │ Password Manager     │   ║
║ │ React • MongoDB  │ │ React • FastAPI      │   ║
║ │ [View Project]   │ │ [View Project]       │   ║
║ └──────────────────┘ └──────────────────────┘   ║
║                                                  ║
╚════════════════════════════════════════════════════╝

Layout:
- CSS Grid: 2 columns (responsive: 1 on mobile)
- Gap: 2rem (32px)
- Masonry layout option (alternate heights)

Card Design:
- Image with overlay on hover
- Title + tech stack tags
- Description (1-2 lines)
- "View Project" button

Card Hover Effect:
- Scale up slightly (1.05x)
- Image darkens (overlay 30%)
- Button becomes more visible
- Shadow effect appears

Colors:
- Background: dark-card
- Border: border-light
- Image overlay: Dark with 70% opacity
- Tech tags: Primary color background, dark text
- Button: Primary color with hover state
```

### **F. INDIVIDUAL PROJECT PAGE**
```
┌─────────────────────────────────────────────┐
│ ← Back to Projects                          │
├─────────────────────────────────────────────┤
│                                             │
│ AR Beauty Try-On Application                │
│ Full-stack mobile application with AI/ML    │
│                                             │
│ [Large Project Image/Video]                 │
│                                             │
│ Overview                                    │
│ "This AI-powered application enables users │
│  to virtually try cosmetic products..."     │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ Key Achievements                        │ │
│ │ • 50,000+ daily active users           │ │
│ │ • 4.8★ rating (12,000+ downloads)      │ │
│ │ • <150ms ML inference latency           │ │
│ │ • 99.7% uptime                         │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ Technologies Used                           │
│ [Flutter] [Firebase] [TensorFlow Lite]     │
│ [AR Core] [Python] [Gemini API]            │
│                                             │
│ Code Highlight (Optional)                   │
│ ```dart                                     │
│ class ARBeautyApp extends StatefulWidget {} │
│ ```                                         │
│                                             │
│ [GitHub Repo] [Live Demo] [Next Project →] │
│                                             │
└─────────────────────────────────────────────┘

Design:
- Full-width layout
- Large hero image/video
- Sidebar with quick info
- Code snippets with syntax highlighting
- Related projects carousel at bottom
```

### **G. CONTACT SECTION**
```
╔═══════════════════════════════════════╗
║ GET IN TOUCH                          ║
╠═══════════════════════════════════════╣
║                                       ║
║ Email: sachini@example.com            ║
║ Phone: +94 740 797 867                ║
║                                       ║
║ Quick Links:                          ║
║ [GitHub] [LinkedIn] [Twitter]         ║
║                                       ║
║ ┌─────────────────────────────────┐   ║
║ │ Name                            │   ║
║ │ Email                           │   ║
║ │ Message                         │   ║
║ │ [Send Message]                  │   ║
║ └─────────────────────────────────┘   ║
║                                       ║
╚═══════════════════════════════════════╝

Design:
- Two-column (contact info + form)
- Form styling: Clean inputs with focus effects
- Social icons: Hover with color change
- Success message on submit

Colors:
- Input borders: border-light
- Input focus: Primary color border with glow
- Button: Primary with accent on hover
- Social icons: Primary color, change on hover
```

### **H. FOOTER**
```
┌─────────────────────────────────────────┐
│ Sachini Wijesundara © 2024              │
│ [Privacy] [Terms] [Sitemap]             │
│ Made with React & Tailwind              │
│ Last updated: Jan 2024                  │
└─────────────────────────────────────────┘

Colors:
- Background: Slightly lighter than dark-bg
- Text: text-tertiary (muted)
- Links: Primary color on hover
```

---

## 5️⃣ IMPLEMENTATION CHECKLIST

### **Phase 1: Setup**
- [ ] Create Next.js/React project
- [ ] Install Tailwind CSS
- [ ] Install Framer Motion & React Icons
- [ ] Set up project structure
- [ ] Configure Tailwind colors
- [ ] Set up Git repository

### **Phase 2: Components**
- [ ] Build Navbar component
- [ ] Build Hero section
- [ ] Build About section
- [ ] Build Skills section
- [ ] Build Projects grid
- [ ] Build Contact form
- [ ] Build Footer

### **Phase 3: Styling**
- [ ] Apply Tailwind classes
- [ ] Add custom animations
- [ ] Ensure responsive design
- [ ] Test on mobile/tablet
- [ ] Implement dark mode (optional)

### **Phase 4: Content**
- [ ] Write compelling bio
- [ ] Add project screenshots/videos
- [ ] Write project descriptions with metrics
- [ ] Create skills list
- [ ] Set up contact form
- [ ] Add social links

### **Phase 5: Enhancement**
- [ ] Add scroll animations (Framer Motion)
- [ ] Add page transitions
- [ ] Implement smooth scrolling
- [ ] Add loading states
- [ ] Optimize images
- [ ] Add SEO meta tags

### **Phase 6: Deployment**
- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Set up custom domain
- [ ] Test all links
- [ ] Monitor performance

---

## 6️⃣ CODE EXAMPLES

### **A. TAILWIND CONFIG (tailwind.config.js)**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00D9FF',
        'primary-dark': '#0095A8',
        'primary-light': '#66E6FF',
        'accent': {
          'red': '#FF6B6B',
          'teal': '#4ECDC4',
          'gold': '#FFD93D',
          'purple': '#A78BFA',
        },
        'dark': {
          'bg': '#0A0E27',
          'card': '#1A1F3A',
          'hover': '#242D4A',
        },
        'text': {
          'primary': '#F5F7FB',
          'secondary': '#A8B2D1',
          'tertiary': '#6B7280',
        },
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
```

### **B. HERO COMPONENT (Hero.jsx)**
```jsx
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-display font-bold text-text-primary mb-6"
        >
          Hi, I'm <span className="text-primary">Sachini</span> Wijesundara
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-text-secondary mb-8"
        >
          Software Engineer | Full-Stack Developer | AI/ML Enthusiast
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-text-tertiary mb-12"
        >
          Building scalable, innovative applications with modern technologies
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mb-16"
        >
          <button className="px-8 py-3 bg-primary text-dark-bg font-semibold rounded-lg hover:bg-primary-light transition-all">
            View My Projects
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all rounded-lg">
            Download CV
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center text-primary text-3xl animate-bounce"
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

### **C. PROJECT CARD COMPONENT (ProjectCard.jsx)**
```jsx
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-dark-card border border-dark-hover rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative h-56 bg-dark-hover overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-dark-bg opacity-0 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-text-primary mb-2">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-text-secondary text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <FiGithub /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <FiExternalLink /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
```

### **D. SKILLS SECTION (Skills.jsx)**
```jsx
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFlutter,
  SiFirebase,
  SiPython,
  SiJava,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React/Next.js', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Flutter', icon: SiFlutter },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Python', icon: SiPython },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-text-primary mb-16 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -4 }}
              className="bg-dark-card border border-dark-hover rounded-xl p-8"
            >
              <h3 className="text-xl font-display font-bold text-text-primary mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                    >
                      <Icon className="text-2xl text-primary" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### **E. CONTACT FORM (Contact.jsx) with Formspree**
```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="py-20 px-6 bg-dark-card">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-text-primary mb-12 text-center">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-dark-bg text-text-primary placeholder-text-tertiary border border-dark-hover rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-dark-bg text-text-primary placeholder-text-tertiary border border-dark-hover rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              className="w-full px-4 py-3 bg-dark-bg text-text-primary placeholder-text-tertiary border border-dark-hover rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-dark-bg font-semibold rounded-lg hover:bg-primary-light transition-all"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-center text-accent-teal">
              ✓ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
```

---

## 🚀 QUICK START COMMANDS

```bash
# Create Next.js project
npx create-next-app@latest my-portfolio

# Install dependencies
npm install framer-motion react-icons

# Install Tailwind (if not included)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Development server
npm run dev

# Build for production
npm run build
npm start

# Deploy to Vercel
npm install -g vercel
vercel
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile:  < 768px   (single column)
Tablet:  768-1024px (2 columns)
Desktop: > 1024px  (3+ columns)

Use Tailwind breakpoints: sm: (640px), md: (768px), lg: (1024px), xl: (1280px)
```

---

## 🎨 DESIGN REFERENCE

- **Inspiration**: Modern tech portfolios with dark theme
- **Aesthetic**: Sophisticated, clean, professional with subtle animations
- **Typography**: Bold display font (Poppins) + clean body font (Inter)
- **Motion**: Subtle, purposeful (not overwhelming)
- **Accessibility**: High contrast, keyboard navigation, semantic HTML

---

## 📝 NOTES FOR YOU

1. **Colors**: The cyan primary (#00D9FF) stands out against dark backgrounds
2. **Animations**: Use Framer Motion's `whileHover` and `initial/animate` props
3. **Performance**: Optimize images with Next.js Image component
4. **SEO**: Add meta tags, Open Graph tags for social sharing
5. **Contact Form**: Use Formspree for easy backend-less form submission
6. **Hosting**: Vercel is free and perfect for Next.js

---

**Good luck building your portfolio! 🚀**
