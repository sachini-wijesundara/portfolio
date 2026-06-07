# Portfolio Website - Code Snippets & References

This file contains ready-to-use code snippets for common portfolio components.

---

## 1️⃣ PROJECT CARD COMPONENT

```jsx
// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

export default function ProjectCard({ project, index }) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    }),
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="bg-dark-card border border-dark-hover rounded-xl overflow-hidden group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-56 bg-dark-hover overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-dark-bg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-dark-hover">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm"
            >
              <FiGithub size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm ml-auto"
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
```

---

## 2️⃣ SKILL CARD COMPONENT

```jsx
// src/components/SkillCard.jsx
import { motion } from 'framer-motion';

export default function SkillCard({ category, skills }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-dark-card border border-dark-hover rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
    >
      {/* Category Title */}
      <h3 className="text-xl font-bold text-text-primary mb-6">
        {category}
      </h3>

      {/* Skills Grid */}
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 group"
          >
            {/* Icon */}
            {skill.icon && (
              <skill.icon className="text-2xl text-primary group-hover:text-primary-light transition-colors" />
            )}
            {/* Skill Name */}
            <span className="text-text-secondary group-hover:text-text-primary transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
```

---

## 3️⃣ CONTACT FORM WITH FORMSPREE

```jsx
// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-text-primary mb-16 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <FiMail className="text-2xl text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-text-secondary text-sm mb-1">Email</p>
                <a
                  href="mailto:sachini.2005.wijesundara@gmail.com"
                  className="text-text-primary hover:text-primary transition-colors"
                >
                  sachini.2005.wijesundara@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <FiPhone className="text-2xl text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-text-secondary text-sm mb-1">Phone</p>
                <a
                  href="tel:+94740797867"
                  className="text-text-primary hover:text-primary transition-colors"
                >
                  +94 740 797 867
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <FiMapPin className="text-2xl text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-text-secondary text-sm mb-1">Location</p>
                <p className="text-text-primary">Maharagama, Sri Lanka</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-dark-hover">
              <p className="text-text-secondary text-sm mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sachini-wijesundara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors text-xl"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sachini-wijesundara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors text-xl"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors text-xl"
                >
                  Twitter
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Name Input */}
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-3 bg-dark-card text-text-primary placeholder-text-tertiary border border-dark-hover rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-6 py-3 bg-dark-card text-text-primary placeholder-text-tertiary border border-dark-hover rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Your message..."
                rows="5"
                required
                className="w-full px-6 py-3 bg-dark-card text-text-primary placeholder-text-tertiary border border-dark-hover rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 text-accent-teal bg-accent-teal/10 px-4 py-3 rounded-lg"
              >
                <FiCheckCircle /> Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
```

---

## 4️⃣ ANIMATED SECTION TITLE

```jsx
// src/components/SectionTitle.jsx
import { motion } from 'framer-motion';

export default function SectionTitle({ title, highlight, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// Usage:
// <SectionTitle title="Featured" highlight="Projects" subtitle="Check out my latest work" />
```

---

## 5️⃣ METRIC BADGE COMPONENT

```jsx
// src/components/MetricBadge.jsx
export default function MetricBadge({ label, value }) {
  return (
    <div className="bg-dark-card border border-dark-hover rounded-lg p-4">
      <p className="text-text-secondary text-xs uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className="text-2xl font-bold text-primary">
        {value}
      </p>
    </div>
  );
}

// Usage in ProjectCard:
// <div className="grid grid-cols-2 gap-4">
//   <MetricBadge label="Users" value="50K+" />
//   <MetricBadge label="Rating" value="4.8★" />
// </div>
```

---

## 6️⃣ SMOOTH SCROLL TO SECTION

```jsx
// src/utils/scrollToSection.js
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Usage in buttons:
// <button onClick={() => scrollToSection('projects')}>
//   View Projects
// </button>
```

---

## 7️⃣ SEO HEAD CONFIGURATION

```jsx
// src/pages/_app.jsx or _document.jsx
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="description" content="Sachini Wijesundara - Full-Stack Developer & AI/ML Enthusiast. Building innovative software solutions." />
        <meta name="keywords" content="developer, full-stack, React, Flutter, AI/ML, portfolio" />
        <meta name="author" content="Sachini Wijesundara" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta property="og:title" content="Sachini Wijesundara - Full-Stack Developer" />
        <meta property="og:description" content="Building innovative software solutions with React, Flutter, and AI/ML" />
        <meta property="og:image" content="https://yourportfolio.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourportfolio.com" />
        <meta name="twitter:title" content="Sachini Wijesundara - Full-Stack Developer" />
        <meta name="twitter:description" content="Building innovative software solutions" />
        <meta name="twitter:image" content="https://yourportfolio.com/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
```

---

## 8️⃣ LOADING SKELETON

```jsx
// src/components/ProjectCardSkeleton.jsx
export default function ProjectCardSkeleton() {
  return (
    <div className="bg-dark-card border border-dark-hover rounded-xl overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-56 bg-dark-hover" />

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        <div className="h-6 bg-dark-hover rounded w-3/4" />
        <div className="h-4 bg-dark-hover rounded w-full" />
        <div className="h-4 bg-dark-hover rounded w-2/3" />
        <div className="flex gap-2">
          <div className="h-6 bg-dark-hover rounded-full w-16" />
          <div className="h-6 bg-dark-hover rounded-full w-20" />
        </div>
      </div>
    </div>
  );
}
```

---

## 9️⃣ CUSTOM ANIMATIONS

```css
/* src/styles/animations.css */

/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In From Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Glow Pulse */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 217, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 217, 255, 0);
  }
}

/* Usage in Tailwind */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-glow {
  animation: glowPulse 2s infinite;
}
```

---

## 🔟 ENVIRONMENT VARIABLES

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/sachini-wijesundara
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/sachini-wijesundara
```

Usage in code:
```jsx
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

---

## 1️⃣1️⃣ RESPONSIVE IMAGE COMPONENT

```jsx
// src/components/ResponsiveImage.jsx
import Image from 'next/image';

export default function ResponsiveImage({ src, alt, priority = false }) {
  return (
    <div className="relative w-full aspect-video">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
```

---

## 1️⃣2️⃣ DEPLOYMENT CONFIGURATION

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image Optimization
  images: {
    domains: ['unsplash.com', 'images.pexels.com'],
  },

  // Sitemap
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ],
    };
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## 1️⃣3️⃣ ANALYTICS SETUP

```jsx
// src/pages/_app.jsx
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
```

---

## QUICK COPY-PASTE COMMANDS

```bash
# Install all dependencies at once
npm install framer-motion react-icons next-image-export-optimizer

# Create components folder structure
mkdir -p src/{components,pages,styles,data,utils} public/{images,videos}

# Start dev server with tunnel (for mobile testing)
npm run dev -- --experimental-https

# Build and analyze bundle
npm run build && npm run analyze

# Export to static site
npm run export
```

---

**Remember:**
- Replace placeholder values (form IDs, URLs, social links)
- Optimize images before deployment
- Test all components on mobile
- Keep animations smooth (60fps)
- Monitor Core Web Vitals

Good luck with your portfolio! 🚀
