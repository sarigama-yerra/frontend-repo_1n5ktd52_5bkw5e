import React from 'react';
import { Star, Camera, Film, Users } from 'lucide-react';

export default function InfoSection() {
  const items = [
    {
      icon: Camera,
      title: 'Visione',
      desc: 'Uno sguardo dentro i processi creativi di fotografi e artisti visivi.',
    },
    {
      icon: Film,
      title: 'Regia',
      desc: 'Episodi curati con un linguaggio cinematografico moderno e minimale.',
    },
    {
      icon: Users,
      title: 'Collaborazioni',
      desc: 'Team multidisciplinari che ridefiniscono i confini tra arte e tecnologia.',
    },
    {
      icon: Star,
      title: 'Premi',
      desc: 'Riconoscimenti internazionali per fotografia, suono e direzione artistica.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Info</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Tutela dell'estetica, ritmo narrativo e storie autentiche dal dietro le quinte della creatività contemporanea.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
