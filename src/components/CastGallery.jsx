import React from 'react';

const cast = [
  {
    name: 'Luna Rossi',
    role: 'Fotografa',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3209831/3209831-uhd_2560_1440_25fps.mp4',
  },
  {
    name: 'Marco Bianchi',
    role: 'Regista',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195402/3195402-uhd_2560_1440_24fps.mp4',
  },
  {
    name: 'Giada Verdi',
    role: 'Art Director',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/853934/853934-hd_1920_1080_24fps.mp4',
  },
  {
    name: 'Noah Conti',
    role: 'Sound Designer',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1000&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/854406/854406-hd_1920_1080_24fps.mp4',
  },
];

export default function CastGallery() {
  return (
    <section id="cast" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Il Cast</h2>
            <p className="mt-2 text-gray-600">Foto e video esclusivi dei personaggi di Creatives.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cast.map((person) => (
            <article key={person.name} className="group rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={person.img}
                  alt={person.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
              <div className="px-4 pb-4">
                <video
                  src={person.video}
                  controls
                  className="w-full rounded-lg border border-gray-200"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
