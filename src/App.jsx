import React from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import CastGallery from './components/CastGallery';
import Trailer from './components/Trailer';
import Episodes from './components/Episodes';
import SocialBar from './components/SocialBar';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">Creatives</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#trailer" className="hover:text-gray-600">Trailer</a>
            <a href="#episodi" className="hover:text-gray-600">Episodi</a>
            <a href="#cast" className="hover:text-gray-600">Cast</a>
            <a href="#info" className="hover:text-gray-600">Info</a>
            <a href="#contatti" className="hover:text-gray-600">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Trailer />
        <Episodes />
        <section id="info">
          <InfoSection />
        </section>
        <CastGallery />
        <SocialBar />
        <ContactForm />
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Creatives — Tutti i diritti riservati</p>
          <div className="flex gap-4">
            <a href="#trailer" className="hover:text-gray-900">Trailer</a>
            <a href="#episodi" className="hover:text-gray-900">Episodi</a>
            <a href="#cast" className="hover:text-gray-900">Cast</a>
            <a href="#info" className="hover:text-gray-900">Info</a>
            <a href="#contatti" className="hover:text-gray-900">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
