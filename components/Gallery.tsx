import React, { useState } from 'react';
import { ARTWORKS, CATEGORIES } from '../constants';
import { Artwork } from '../types';
import { DividerOrnament } from './FloralDecor';
import { ZoomIn } from 'lucide-react';

interface GalleryProps {
  searchQuery: string;
}

const Gallery: React.FC<GalleryProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('Tout');
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

  const filteredArtworks = ARTWORKS.filter(art => {
    const matchesCategory = selectedCategory === 'Tout' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="gallery" className="py-20 px-4 md:px-12 max-w-7xl mx-auto min-h-screen bg-stone-50">
      <DividerOrnament />

      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-stone-800 mb-4 italic">La Collection</h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300 border
                ${selectedCategory === category
                  ? 'bg-rose-200 border-rose-300 text-rose-900 shadow-sm'
                  : 'bg-transparent border-transparent text-stone-500 hover:border-rose-100 hover:bg-rose-50'}
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="group relative bg-white p-3 shadow-sm hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden border border-stone-100"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer" onClick={() => setSelectedImage(art)}>
                {/* SEO Optimized Alt Text */}
                <img
                  src={art.imageUrl}
                  alt={`${art.title} - Dessin style ${art.category} par Yasminou`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="text-rose-400 w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="pt-6 pb-2 text-center">
                <span className="text-xs font-sans text-rose-400 uppercase tracking-widest">{art.category}</span>
                <h3 className="font-serif text-xl text-stone-800 mt-2 mb-1 group-hover:text-rose-600 transition-colors">{art.title}</h3>
                <p className="text-xs text-stone-400 font-sans">{art.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-stone-500 font-serif italic text-lg">Aucune œuvre ne correspond à votre recherche.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white p-4 md:p-6 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-stone-400 hover:text-stone-800 z-10 bg-white/50 rounded-full p-2 hover:bg-white"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src={selectedImage.imageUrl}
                  alt={`Détail de l'oeuvre ${selectedImage.title}`}
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                <span className="text-rose-400 text-sm tracking-widest uppercase mb-2">{selectedImage.category}</span>
                <h3 className="font-display text-3xl text-stone-800 mb-4">{selectedImage.title}</h3>
                <p className="font-sans text-stone-600 leading-relaxed mb-6">
                  {selectedImage.description}
                </p>
                <div className="mt-auto border-t border-stone-100 pt-4 flex justify-between items-center text-xs text-stone-400 font-sans">
                  <span>Créé le {selectedImage.date}</span>
                  <span className="italic">La Galerie De Yasminou</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;