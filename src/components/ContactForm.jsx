import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Grazie ${name}! Ti contatteremo presto.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contatti" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Contatti</h2>
        <p className="mt-2 text-gray-600">Per collaborazioni, stampa e informazioni generali, compila il modulo.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Messaggio</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Invia
            </button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
