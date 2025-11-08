import React from 'react';

const episodes = [
  {
    number: 1,
    title: 'Luce e Ombra',
    desc: 'Una fotografa traduce emozioni in scatti minimali nelle vie di Milano.',
    duration: '32 min',
    thumb: 'https://images.unsplash.com/photo-1529625050061-2d8a5d98f1a8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    number: 2,
    title: 'Storyboard',
    desc: 'Un giovane regista costruisce un racconto visivo a partire dal suono.',
    duration: '28 min',
    thumb: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    number: 3,
    title: 'Color Grading',
    desc: 'L’art direction plasma atmosfere, palette e identità visiva.',
    duration: '30 min',
    thumb: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
  },
  {
    number: 4,
    title: 'Silenzio Attivo',
    desc: 'Un sound designer compone paesaggi sonori per storie intime.',
    duration: '26 min',
    thumb: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function Episodes() {
  return (
    <section id="episodi" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Episodi</h2>
            <p className="mt-2 text-gray-600">Scopri i capitoli della serie, ognuno dedicato a una disciplina creativa.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {episodes.map((ep) => (
            <article key={ep.number} className="group rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={ep.thumb}
                  alt={`Episodio ${ep.number}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wide text-gray-500">Ep {ep.number}</span>
                  <span className="text-xs text-gray-500">{ep.duration}</span>
                </div>
                <h3 className="mt-2 font-semibold text-gray-900">{ep.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{ep.desc}</p>
                <a href="#trailer" className="mt-3 inline-block text-sm font-medium text-gray-900 hover:underline">Guarda il trailer</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
