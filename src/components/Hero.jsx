import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 sm:p-10 shadow-lg border border-black/5">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              CREATIVES
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
              Una serie televisiva che esplora il mondo di fotografi, registi e designer
              mentre reinventano il modo di raccontare storie visive.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#cast"
                className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Scopri i personaggi
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center rounded-full border border-gray-900 text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors"
              >
                Contatti
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-white/0" />
    </section>
  );
}
