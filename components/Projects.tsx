import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      
      {/* Background Decor - Subtle static glow to complement canvas */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-aurora-blue/5 rounded-full blur-[120px] -z-10 translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-aurora-green/5 rounded-full blur-[120px] -z-10 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-aurora-green uppercase tracking-widest text-sm font-semibold">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Featured Projects</h2>
          <p className="text-slate-400 mt-6 font-light">
            A showcase of technical excellence in API design, data visualization, and process automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full perspective-1000 cursor-pointer"
            >
               {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-aurora-green via-blue-500 to-aurora-blue rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
              
              <div className="glass-card h-full rounded-2xl overflow-hidden border border-white/5 flex flex-col relative z-10 bg-black/80">
                
                {/* Image Container with Zoom Effect */}
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    
                    {/* Floating External Link Icon */}
                    <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-slate-900/50 to-black/90">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-aurora-green transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tag) => (
                        <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full group-hover:border-aurora-green/30 group-hover:text-white transition-colors"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;