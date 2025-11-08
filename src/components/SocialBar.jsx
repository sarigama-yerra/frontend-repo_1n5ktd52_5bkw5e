import React from 'react';
import { Instagram } from 'lucide-react';

export default function SocialBar() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Seguici</h3>
            <p className="text-sm text-gray-600">Dietro le quinte, teaser e annunci su Instagram.</p>
          </div>
          <a
            href="https://instagram.com/creatives"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-90 transition"
          >
            <Instagram size={18} /> Apri Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
