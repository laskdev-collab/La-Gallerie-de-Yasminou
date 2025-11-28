
import React, { useState } from 'react';
import { Sparkles, X, Lightbulb, Feather, Palette } from 'lucide-react';
import { getCreativeInspiration } from '../services/geminiService';
import { InspirationMode } from '../types';

const InspirationAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleInspire = async (mode: InspirationMode) => {
    setLoading(true);
    setResult(null);
    const text = await getCreativeInspiration(mode);
    setResult(text);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-rose-100 border border-rose-300 shadow-lg hover:shadow-rose-200/50 hover:scale-110 transition-all duration-300"
          title="Muse Artistique"
        >
          <Sparkles className="w-6 h-6 text-rose-500 group-hover:text-rose-600 animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white/90 backdrop-blur-md border border-rose-200 rounded-2xl p-6 shadow-2xl w-80 md:w-96 transform transition-all duration-300 origin-bottom-right animate-in fade-in slide-in-from-bottom-10">
          <div className="flex justify-between items-center mb-4 border-b border-rose-100 pb-2">
            <h3 className="font-serif text-lg text-rose-900 font-semibold italic">Votre Muse Digitale</h3>
            <button onClick={() => setIsOpen(false)} className="text-rose-400 hover:text-rose-700">
              <X size={18} />
            </button>
          </div>

          <p className="text-sm text-stone-600 mb-6 font-sans">
            En manque d'inspiration ? Laissez-moi vous guider vers votre prochaine création.
          </p>

          <div className="grid grid-cols-3 gap-2 mb-6">
            <button
              onClick={() => handleInspire(InspirationMode.IDEA)}
              className="flex flex-col items-center p-3 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-100 transition-colors group"
            >
              <Lightbulb size={20} className="text-orange-400 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-rose-800 font-medium">Idée</span>
            </button>
            <button
              onClick={() => handleInspire(InspirationMode.CRITIQUE)}
              className="flex flex-col items-center p-3 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-100 transition-colors group"
            >
              <Palette size={20} className="text-rose-400 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-rose-800 font-medium">Conseil</span>
            </button>
            <button
              onClick={() => handleInspire(InspirationMode.POETRY)}
              className="flex flex-col items-center p-3 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-100 transition-colors group"
            >
              <Feather size={20} className="text-stone-500 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-rose-800 font-medium">Poésie</span>
            </button>
          </div>

          {loading && (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-400"></div>
            </div>
          )}

          {result && (
            <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-100">
              <p className="text-sm text-stone-700 font-serif leading-relaxed italic">
                "{result}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InspirationAssistant;
