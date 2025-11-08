import React from 'react';
import { Play } from 'lucide-react';

export default function Trailer() {
  return (
    <section id="trailer" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trailer ufficiale</h2>
            <p className="mt-2 text-gray-600">Un assaggio dell'atmosfera e del ritmo narrativo di Creatives.</p>
          </div>
        </div>

        <div className="mt-8">
          {/* Responsive 16:9 container */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Trailer Ufficiale"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          <a
            href="#episodi"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Play size={18} /> Guarda gli episodi
          </a>
        </div>
      </div>
    </section>
  );
}
