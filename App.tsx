import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import InspirationAssistant from './components/InspirationAssistant';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-rose-200 selection:text-rose-900">
      {/* Decorative frame border for the whole site */}
      <div className="fixed inset-0 border-[12px] border-white pointer-events-none z-40 hidden lg:block"></div>
      <div className="fixed inset-3 border border-rose-100 pointer-events-none z-40 hidden lg:block rounded-[2px]"></div>

      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Gallery searchQuery={searchQuery} />
      <Footer />

      {/* Gemini AI Powered Feature */}
      <InspirationAssistant />
    </main>
  );
};

export default App;