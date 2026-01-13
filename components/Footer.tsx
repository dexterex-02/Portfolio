import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Himanshu Agrawal. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Designed with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;