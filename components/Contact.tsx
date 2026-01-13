import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
          
          <div className="text-center mb-12">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
             >
                Start a Conversation
             </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-400 text-lg"
             >
                Ready to take your project to the next level? I'm currently open for new opportunities.
             </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
               <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-aurora-green/30 transition-colors">
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-aurora-green/10 rounded-full flex items-center justify-center border border-aurora-green/20 group-hover:bg-aurora-green/20 transition-all">
                      <Mail size={20} className="text-aurora-green" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email</p>
                      <p className="font-medium text-base break-all">{SOCIAL_LINKS.email}</p>
                    </div>
                  </a>
               </div>

               <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-aurora-blue/30 transition-colors">
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-aurora-blue/10 rounded-full flex items-center justify-center border border-aurora-blue/20 group-hover:bg-aurora-blue/20 transition-all">
                      <Linkedin size={20} className="text-aurora-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">LinkedIn</p>
                      <p className="font-medium text-base">Himanshu Agrawal</p>
                    </div>
                  </a>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1 text-left">
                  <label className="text-xs text-slate-400 font-medium ml-1">Your Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-aurora-green transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-1 text-left">
                  <label className="text-xs text-slate-400 font-medium ml-1">Your Email</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-aurora-green transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-1 text-left">
                  <label className="text-xs text-slate-400 font-medium ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-aurora-green transition-colors" placeholder="Hello..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-aurora-green to-aurora-blue text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-aurora-green/25 transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;