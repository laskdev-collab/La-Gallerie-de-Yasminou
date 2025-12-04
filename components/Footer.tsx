import React from 'react';
import { Instagram, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 py-12 border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h4 className="font-display text-2xl text-stone-800 mb-6">La Gallerie De Yasminou</h4>

        <div className="flex space-x-6 mb-8">
          <a href="#" className="p-3 bg-white rounded-full text-rose-400 hover:text-rose-600 hover:shadow-md transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-3 bg-white rounded-full text-rose-400 hover:text-rose-600 hover:shadow-md transition-all">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-stone-500 font-serif italic text-sm mb-4">
          "askip ca a dit c'est la meilleure dessinatrice de Mulhouse"
        </p>

        <div className="flex items-center gap-2 text-xs text-stone-400 font-sans uppercase tracking-widest mt-8">
          <span>Fait avec</span>
          <Heart size={10} className="text-rose-400 fill-current" />
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;