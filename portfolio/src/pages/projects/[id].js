import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCpu, FiCheckCircle, FiCompass, FiShield } from 'react-icons/fi';
import { projects, profile } from '../../data/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <div className="bg-dark-bg text-text-primary min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Project not found</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | {profile.name}</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <div className="bg-dark-bg text-text-primary min-h-screen flex flex-col">
        {/* Re-use navbar */}
        <Navbar />

        {/* Hero cover spacing */}
        <div className="pt-24 pb-8 md:pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex-grow">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors mb-8 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to projects
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Project Overview and Detailed Sections */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Title & Cover header */}
              <div className="space-y-4">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                  {project.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-text-primary leading-tight">
                  {project.title}
                </h1>
              </div>

              {/* Cover Backdrop (Stylized technology gradient layout) */}
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-border/30 bg-gradient-to-br from-dark-card via-dark-hover to-dark-card flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                <div className="absolute w-64 h-64 bg-primary/10 rounded-full filter blur-3xl" />
                <div className="z-10 text-center">
                  <div className="text-4xl sm:text-6xl font-mono font-extrabold text-primary/80 mb-3">{project.title.split(' ')[0]}</div>
                  <div className="text-xs sm:text-sm font-semibold tracking-widest text-text-tertiary uppercase">{project.category} Core View</div>
                </div>
              </div>

              {/* Description & Overview */}
              <div className="bg-dark-card border border-border/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
                <h2 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
                  <FiCompass className="text-primary" /> Project Overview
                </h2>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="bg-dark-card border border-border/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
                  <h2 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
                    <FiCheckCircle className="text-primary" /> Key Features & Capabilities
                  </h2>
                  <div className="grid gap-4.5">
                    {project.features.map((feat, index) => (
                      <div key={index} className="flex gap-3.5 items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">{feat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenge & Solution (Present on major projects like AR Beauty and CareLink) */}
              {project.challenge && (
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Challenge */}
                  <div className="bg-dark-card border border-border/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-3">
                    <h3 className="text-lg font-display font-bold text-accent-red flex items-center gap-2">
                      <FiShield className="text-accent-red" /> The Challenge
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-dark-card border border-border/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-3">
                    <h3 className="text-lg font-display font-bold text-accent-teal flex items-center gap-2">
                      <FiCheckCircle className="text-accent-teal" /> The Solution
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Project Sidebar Details */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              
              {/* Info Card */}
              <div className="bg-dark-card border border-border/30 rounded-2xl p-6 shadow-xl space-y-6">
                <h3 className="text-lg font-display font-bold text-text-primary">System Specs</h3>
                
                {/* Tech Badges */}
                <div className="space-y-2">
                  <h4 className="text-xs text-text-tertiary uppercase tracking-wider font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-dark-bg border border-border/40 text-text-secondary rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="space-y-3 pt-6 border-t border-border/20">
                    <h4 className="text-xs text-text-tertiary uppercase tracking-wider font-semibold">Project Performance</h4>
                    <div className="grid gap-3">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="flex justify-between items-center bg-dark-bg/60 border border-border/25 rounded-xl p-3">
                          <span className="text-xs text-text-secondary font-medium">{metric.label}</span>
                          <span className="text-sm font-bold text-primary">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Repository and Demos links */}
                <div className="flex flex-col gap-3 pt-6 border-t border-border/20">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-dark-bg border border-border/40 text-text-primary hover:text-primary hover:border-primary/40 rounded-xl text-sm font-bold transition-all duration-300"
                    >
                      <FiGithub className="text-lg" /> Access Codebase
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-primary text-dark-bg hover:bg-primary-light rounded-xl text-sm font-bold transition-all duration-300"
                    >
                      <FiExternalLink className="text-lg" /> Live Demonstration
                    </a>
                  )}
                </div>

              </div>

              {/* Quick Contact Promo */}
              <div className="bg-gradient-to-tr from-dark-card via-dark-card to-primary/5 border border-primary/20 rounded-2xl p-6.5 shadow-xl text-center space-y-4">
                <FiCpu className="text-3xl text-primary mx-auto animate-pulse" />
                <h4 className="text-base font-display font-bold text-text-primary">Interested in this system?</h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Let's discuss how we can adapt these techniques for your specific platform needs.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block w-full py-2.5 bg-primary/10 border border-primary/20 hover:bg-primary/25 text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
                >
                  Contact Me
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.id === params.id) || null;

  return {
    props: {
      project,
    },
  };
}
