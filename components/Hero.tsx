import React from 'react';
import { CornerRose } from './FloralDecor';
import { Search } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-rose-50">
      {/* Decorative Background Elements */}
      <CornerRose className="top-0 left-0 -translate-x-10 -translate-y-10 w-64 h-64 text-rose-200" />
      <CornerRose className="bottom-0 right-0 translate-x-10 translate-y-10 w-64 h-64 text-rose-200" rotate={180} />

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply pointer-events-none"></div>

      <div className="z-10 text-center px-4 max-w-4xl animate-in fade-in zoom-in duration-1000 w-full">

        {/* Large Search Bar */}
        <div className="max-w-lg mx-auto mb-12 mt-12 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-rose-300 group-focus-within:text-rose-500 transition-colors duration-300" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-3 border-2 border-rose-100 rounded-full text-base md:text-lg font-serif text-stone-700 placeholder-rose-200 focus:outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-100/50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            placeholder="Rechercher une œuvre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const galleryElement = document.getElementById('gallery');
                if (galleryElement) {
                  galleryElement.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          />
        </div>

        <span className="block text-rose-400 text-lg md:text-xl font-serif tracking-[0.2em] mb-4 uppercase">
          Bienvenue à
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-stone-800 mb-6 tracking-tight drop-shadow-sm">
          La Galerie De Yasminou
        </h1>
        <p className="font-sans text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
          Des dessins simples faits par une personne simple, mais on l'apprecie quand meme.
        </p>

        <div className="mt-12">
          <a
            href="#gallery"
            className="inline-block px-8 py-4 border border-rose-300 text-rose-900 font-serif tracking-widest uppercase text-sm hover:bg-white hover:border-rose-400 transition-all duration-500 rounded-full shadow-sm hover:shadow-md"
          >
            Voir la Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;