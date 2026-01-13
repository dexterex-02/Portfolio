import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Sparkles, Cpu, Layers, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes("Backend")) return <Cpu className="text-aurora-green" size={24} />;
    if (title.includes("Frontend")) return <Layers className="text-aurora-blue" size={24} />;
    return <BarChart3 className="text-cyan-400" size={24} />;
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-aurora-green mb-6 uppercase tracking-widest text-sm font-semibold"
            >
              <Sparkles size={16} /> About The Developer
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Fueling innovation with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-green to-aurora-blue">code & data.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-slate-400 leading-relaxed text-lg font-light max-w-3xl"
            >
              <p>
                I'm a Software & Automation Engineer at Honeywell with a knack for solving complex puzzles. 
                My journey started at SRM University, and it has evolved into a passion for building scalable architectures.
              </p>
              <p>
                From crafting secure <strong>.NET APIs</strong> to designing responsive <strong>Angular</strong> interfaces, 
                I bridge the gap between backend logic and user experience. 
                I also turn raw numbers into actionable strategies using <strong>Power BI</strong>.
              </p>
            </motion.div>
        </div>

        {/* Skills Bento Grid - Centered */}
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((category, idx) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group text-left"
                >
                  {/* Decorative Gradient Blob */}
                  <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500
                    ${idx === 0 ? 'bg-aurora-green' : idx === 1 ? 'bg-aurora-blue' : 'bg-cyan-500'}
                  `}></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                            {getIcon(category.title)}
                        </div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                        <span 
                            key={skill} 
                            className="px-4 py-2 bg-white/5 text-slate-300 text-sm rounded-lg border border-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              
               {/* Image Card Filler (Optional or replaced with another skill block) */}
               {/* Note: In a 3-col grid with 3 categories, this isn't strictly needed unless we want filler. 
                   Since we have 3 categories, I will skip the image filler to keep the centered grid balanced. */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;