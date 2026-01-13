import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`pointer-events-auto transition-all duration-300 ease-in-out
            ${scrolled 
              ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-8 py-3 w-auto' 
              : 'bg-transparent w-full max-w-7xl px-0 py-4 flex justify-between'
            }
          `}
        >
          <div className={`flex items-center ${scrolled ? 'gap-8' : 'justify-between w-full'}`}>
            
            {/* Logo */}
            <a href="#" className={`text-2xl font-bold tracking-tight text-white transition-opacity font-sans`}>
              H<span className="text-primary-400">.</span>A<span className="text-accent-400">.</span>
            </a>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center ${scrolled ? 'space-x-8' : 'space-x-12'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-slate-300 hover:text-white p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-slate-400 hover:text-white"
              >
                <X size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;