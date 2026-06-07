import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiDart, SiPhp, SiMysql,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3,
  SiFlutter, SiAndroid, SiApple,
  SiNodedotjs, SiExpress, SiFastapi, SiLaravel,
  SiMongodb, SiFirebase, SiSqlite,
  SiTensorflow, SiOpenai, SiGooglecloud
} from 'react-icons/si';

import { FaJava, FaBrain, FaCode, FaAws } from 'react-icons/fa';

import { FiCode, FiSmartphone, FiDatabase, FiCpu, FiTool, FiLayers, FiCheck } from 'react-icons/fi';

export default function Skills() {
  const getSkillIcon = (name) => {
    switch (name) {
      // Languages
      case 'Java': return { icon: FaJava, color: 'hover:text-[#F89820]' };
      case 'Python': return { icon: SiPython, color: 'hover:text-[#3776AB]' };
      case 'C#': return { icon: FaCode, color: 'hover:text-[#178600]' };
      case 'JavaScript': return { icon: SiJavascript, color: 'hover:text-[#F7DF1E]' };
      case 'Dart': return { icon: SiDart, color: 'hover:text-[#0175C2]' };
      case 'PHP': return { icon: SiPhp, color: 'hover:text-[#777BB4]' };
      case 'SQL': return { icon: SiMysql, color: 'hover:text-[#4479A1]' };
      
      // Frontend
      case 'ReactJS': return { icon: SiReact, color: 'hover:text-[#61DAFB]' };
      case 'NextJS': return { icon: SiNextdotjs, color: 'hover:text-[#FFFFFF]' };
      case 'Tailwind CSS': return { icon: SiTailwindcss, color: 'hover:text-[#06B6D4]' };
      case 'HTML & CSS': return { icon: SiHtml5, color: 'hover:text-[#E34F26]' };
      case 'JavaFX': return { icon: FaJava, color: 'hover:text-[#F89820]' };
      
      // Mobile
      case 'Flutter': return { icon: SiFlutter, color: 'hover:text-[#02569B]' };
      case 'Android (Kotlin)': return { icon: SiAndroid, color: 'hover:text-[#3DDC84]' };
      case 'iOS (Swift)': return { icon: SiApple, color: 'hover:text-[#FA7343]' };
      
      // Backend
      case 'Node.js': return { icon: SiNodedotjs, color: 'hover:text-[#339933]' };
      case 'Express.js': return { icon: SiExpress, color: 'hover:text-[#828282]' };
      case 'FastAPI': return { icon: SiFastapi, color: 'hover:text-[#009688]' };
      case 'JSP & Servlets': return { icon: FaJava, color: 'hover:text-[#F89820]' };
      case 'Laravel': return { icon: SiLaravel, color: 'hover:text-[#FF2D20]' };
      
      // Database & Cloud
      case 'MongoDB': return { icon: SiMongodb, color: 'hover:text-[#47A248]' };
      case 'Firebase Firestore': return { icon: SiFirebase, color: 'hover:text-[#FFCA28]' };
      case 'MySQL': return { icon: SiMysql, color: 'hover:text-[#4479A1]' };
      case 'SQLite': return { icon: SiSqlite, color: 'hover:text-[#003B57]' };
      case 'AWS': return { icon: FaAws, color: 'hover:text-[#FF9900]' };
      
      // AI/ML/AR
      case 'TensorFlow Lite': return { icon: SiTensorflow, color: 'hover:text-[#FF6F00]' };
      case 'Gemini API': return { icon: SiGooglecloud, color: 'hover:text-[#1A73E8]' };
      case 'OpenRouter API': return { icon: SiOpenai, color: 'hover:text-[#74AA9C]' };
      case 'Computer Vision': return { icon: FiCpu, color: 'hover:text-[#00D9FF]' };
      case 'Augmented Reality (AR)': return { icon: FiCpu, color: 'hover:text-[#9D4EDD]' };
      case 'Neural Networks': return { icon: FaBrain, color: 'hover:text-[#00F5D4]' };
      
      // Tools
      case 'Git & GitHub': return { icon: FiTool, color: 'hover:text-[#F05032]' };
      case 'Agile Scrum': return { icon: FiLayers, color: 'hover:text-[#00D9FF]' };
      case 'REST APIs': return { icon: FiCode, color: 'hover:text-[#FFC300]' };
      case 'WebSockets': return { icon: FiCode, color: 'hover:text-[#00F5D4]' };
      case 'Firebase Auth': return { icon: SiFirebase, color: 'hover:text-[#FFCA28]' };
      case 'PHPUnit Testing': return { icon: FiCode, color: 'hover:text-[#3776AB]' };
      
      default: return { icon: FiCheck, color: 'hover:text-primary' };
    }
  };

  const categories = [
    {
      title: "Core Programming",
      icon: FiCode,
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Dart", level: "Advanced" },
        { name: "C#", level: "Intermediate" },
        { name: "SQL", level: "Advanced" }
      ]
    },
    {
      title: "Mobile Architecture",
      icon: FiSmartphone,
      skills: [
        { name: "Flutter", level: "Advanced" },
        { name: "Android (Kotlin)", level: "Intermediate" },
        { name: "iOS (Swift)", level: "Intermediate" }
      ]
    },
    {
      title: "Web & Full-Stack",
      icon: FiLayers,
      skills: [
        { name: "ReactJS", level: "Advanced" },
        { name: "NextJS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "FastAPI", level: "Intermediate" },
        { name: "Laravel", level: "Intermediate" }
      ]
    },
    {
      title: "AI / ML & AR Systems",
      icon: FiCpu,
      skills: [
        { name: "TensorFlow Lite", level: "Advanced" },
        { name: "Gemini API", level: "Advanced" },
        { name: "OpenRouter API", level: "Advanced" },
        { name: "Computer Vision", level: "Advanced" },
        { name: "Augmented Reality (AR)", level: "Advanced" }
      ],
      highlight: true
    },
    {
      title: "Databases & Cloud",
      icon: FiDatabase,
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "Firebase Firestore", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "AWS", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Protocols",
      icon: FiTool,
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Agile Scrum", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "WebSockets", level: "Advanced" }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-dark-card border-t border-border/25 relative overflow-hidden">
      
      {/* Decorative Blur Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-144 h-144 bg-primary/2 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Technical <span className="text-primary text-glow-cyan font-bold">Skills</span>
          </h2>
          <p className="text-text-tertiary max-w-xl mx-auto text-sm sm:text-base font-medium leading-relaxed">
            A granular catalog of technologies I build with, configured with professional levels.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => {
            const HeaderIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                custom={catIdx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-dark-bg border rounded-2xl p-6.5 shadow-xl transition-all duration-300 card-glowing-border ${
                  cat.highlight 
                    ? 'border-primary/40 box-glow-cyan bg-gradient-to-b from-[#0B0F19] to-[#0D1627]' 
                    : 'border-border hover:border-primary/20'
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-6.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    cat.highlight 
                      ? 'bg-primary/15 text-primary box-glow-cyan' 
                      : 'bg-dark-card border border-border text-text-tertiary'
                  }`}>
                    <HeaderIcon className="text-lg" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-text-primary">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Interactive List */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => {
                    const iconConfig = getSkillIcon(skill.name);
                    const SkillIcon = iconConfig.icon;
                    return (
                      <div key={skill.name} className="flex items-center justify-between group">
                        
                        {/* Skill icon & name */}
                        <div className="flex items-center gap-3">
                          <div className={`text-text-tertiary transition-colors duration-300 text-lg ${iconConfig.color}`}>
                            <SkillIcon />
                          </div>
                          <span className="text-xs sm:text-sm text-text-tertiary group-hover:text-text-primary transition-colors duration-200 font-medium">
                            {skill.name}
                          </span>
                        </div>

                        {/* Proficiency level indicator */}
                        <div className="flex items-center gap-2">
                          <span className={`text-[8.5px] font-extrabold tracking-widest px-2 py-0.5 rounded uppercase ${
                            skill.level === 'Advanced' 
                              ? 'bg-primary/10 text-primary border border-primary/20' 
                              : 'bg-border/40 text-text-tertiary'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
