import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-accent-400 uppercase tracking-widest text-sm font-semibold">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Professional Timeline</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Vertical Divider Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-primary-500/30 to-transparent transform -translate-x-1/2"></div>

          {/* Work History */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Career</h3>
            </div>

            {EXPERIENCE_DATA.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[2px] bg-white/10"></div>
                <div className="md:hidden absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-primary-500 box-content border-4 border-cosmic-900 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                <div className="glass-card p-6 md:p-8 rounded-2xl glass-card-hover transition-all duration-300 group border-l-4 border-l-primary-500">
                  <div className="mb-4">
                       <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{item.role}</h4>
                       <p className="text-lg text-slate-300 font-medium">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-300 mb-6 font-medium">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.8)]"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-12">
             <div className="flex items-center gap-4 mb-8 md:justify-end">
              <h3 className="text-2xl font-bold text-white order-2 md:order-1">Education</h3>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-accent-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] order-1 md:order-2">
                <GraduationCap size={24} />
              </div>
            </div>

            {EDUCATION_DATA.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0 md:text-right"
              >
                 {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[2px] bg-white/10"></div>
                <div className="md:hidden absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-accent-500 box-content border-4 border-cosmic-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                <div className="glass-card p-6 md:p-8 rounded-2xl glass-card-hover transition-all duration-300 group text-left md:text-right border-l-4 md:border-l-0 md:border-r-4 border-accent-500">
                  <h4 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors">{item.school}</h4>
                  <p className="text-slate-300 font-medium mb-4">{item.degree}</p>
                  <span className="inline-block bg-accent-900/30 text-accent-300 px-3 py-1 rounded-md text-sm">{item.period}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;