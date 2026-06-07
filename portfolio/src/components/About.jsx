import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiUsers, FiCpu } from 'react-icons/fi';
import Image from 'next/image';
import { profile, skills } from '../data/projects';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-dark-bg border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
            About <span className="text-primary font-bold">Me</span>
          </h2>
          <div className="w-10 h-0.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Profile Picture & Certifications (4 cols) */}
          <div className="lg:col-span-4 space-y-8 flex flex-col items-center lg:items-stretch">
            
            {/* Profile Picture Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white/[0.01] border border-white/[0.06] rounded-2xl p-4 shadow-xl w-full max-w-[280px] lg:max-w-none mx-auto overflow-hidden group"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-4 text-center lg:text-left px-1">
                <h4 className="font-display font-bold text-text-primary text-sm">{profile.name}</h4>
                <p className="text-[11px] text-zinc-400 mt-1 font-medium">Plymouth BSc (Hons) Reading</p>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white/[0.01] border border-white/[0.06] rounded-2xl p-6 shadow-xl w-full"
            >
              <h3 className="text-base font-display font-bold text-text-primary mb-5 flex items-center gap-2">
                <FiAward className="text-primary" /> Certifications
              </h3>
              <div className="space-y-4">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="flex gap-3 items-start group">
                    <div className="w-6.5 h-6.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiAward className="text-primary text-xs" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] text-zinc-500 mt-0.5 font-medium">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio, Education & Soft Skills (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white/[0.01] border border-white/[0.06] rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-lg font-display font-bold text-text-primary mb-4 flex items-center gap-2">
                <FiCpu className="text-primary" /> My Background
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6 text-sm font-normal">
                {profile.bio}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.06]">
                <div>
                  <h4 className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Location</h4>
                  <p className="text-xs font-semibold text-text-primary">{profile.location}</p>
                </div>
                <div>
                  <h4 className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Email</h4>
                  <a href={`mailto:${profile.email}`} className="text-xs font-semibold text-primary hover:text-primary-light transition-colors break-all">{profile.email}</a>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white/[0.01] border border-white/[0.06] rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-lg font-display font-bold text-text-primary mb-6 flex items-center gap-2">
                <FiBookOpen className="text-primary" /> Education
              </h3>
              <div className="relative pl-5 border-l border-white/[0.08] space-y-8 ml-2">
                {profile.education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Node dot */}
                    <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-dark-bg border border-primary" />
                    
                    <span className="inline-block text-[9px] font-bold tracking-wider text-primary uppercase bg-primary/10 px-2 py-0.5 rounded mb-2">
                      {edu.period}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-text-primary">
                      {edu.degree}
                    </h4>
                    <h5 className="text-xs sm:text-sm font-semibold text-zinc-400 mt-0.5">
                      {edu.institution}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-medium">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white/[0.01] border border-white/[0.06] rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-lg font-display font-bold text-text-primary mb-5 flex items-center gap-2">
                <FiUsers className="text-primary" /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1.5 bg-white/[0.02] border border-white/[0.04] text-zinc-400 hover:text-white rounded-lg cursor-default transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Reference */}
              <div className="pt-6 border-t border-white/[0.06] mt-6">
                <h4 className="text-[10px] text-zinc-500 uppercase tracking-wider mb-3 font-semibold">Academic Reference</h4>
                {profile.references.map((ref, index) => (
                  <div key={index} className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4">
                    <p className="text-xs sm:text-sm font-bold text-text-primary">{ref.name}</p>
                    <p className="text-[10px] sm:text-xs text-zinc-400 mt-0.5">{ref.role} — {ref.institution}</p>
                    <a href={`mailto:${ref.contact}`} className="text-[10px] sm:text-xs font-semibold text-primary hover:underline mt-1.5 inline-block">{ref.contact}</a>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
