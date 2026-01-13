import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Linkedin, Mail, Code2, Database, Globe } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center z-10">
        
        {/* Visual Element - Ambient Behind Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-aurora-green/10 to-aurora-blue/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

        <motion.div 
          style={{ y: y1, opacity }}
          className="flex flex-col items-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-aurora-green/30 bg-aurora-green/10 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-green"></span>
            </span>
            <span className="text-aurora-green text-sm font-medium tracking-wide uppercase">Software Engineer</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight font-sans"
          >
            Architecting <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-green via-white to-aurora-blue text-glow">
              Future-Ready
            </span> <br/>
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light mx-auto"
          >
             Navigating the digital landscape with .NET ecosystems, Angular interfaces, and data-driven insights. 
             Building robust automation that scales with your ambition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <a 
              href="#projects"
              className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <div className="flex items-center gap-6">
               <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 hover:border-aurora-blue/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 hover:border-aurora-green/50"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Floating Abstract Tech Elements - Centered Bottom */}
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center gap-8 opacity-50 pointer-events-none"
        >
             <div className="flex items-center gap-2 text-aurora-green/60">
                <Code2 size={16} /> <span>Full Stack</span>
             </div>
             <div className="flex items-center gap-2 text-aurora-blue/60">
                <Database size={16} /> <span>Data Analytics</span>
             </div>
             <div className="flex items-center gap-2 text-slate-400/60">
                <Globe size={16} /> <span>Automation</span>
             </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;