@tailwind base;
@tailwind components;
@tailwind utilities;
import React, { useState } from "react";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/haus1.jpg",
    "/haus2.jpg",
    "/haus3.jpg"
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* ✅ Header */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Immobilien Oberhausen</h1>
        <p className="text-sm">Ihr Partner für Verkauf & Vermietung</p>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-12">
        {/* ✅ Galerie */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Unsere Objekte</h2>
          <div className="relative">
            <img
              src={images[currentImageIndex]}
              alt="Immobilie"
              className="rounded-md shadow-lg w-full h-96 object-cover"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (currentImageIndex - 1 + images.length) % images.length
                  )
                }
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                ◀
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((currentImageIndex + 1) % images.length)
                }
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                ▶
              </button>
            </div>
          </div>
        </section>

        {/* ✅ Kontaktformular */}
        <section id="kontakt">
          <h2 className="text-2xl font-semibold mb-4">Kontakt aufnehmen</h2>

          <form
            name="kontakt"
            method="POST"
            data-netlify="true"
            className="space-y-4 bg-white p-6 rounded-md shadow-md"
          >
            {/* Netlify hidden input */}
            <input type="hidden" name="form-name" value="kontakt" />

            <input
              type="text"
              name="vorname"
              placeholder="Vorname"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="nachname"
              placeholder="Nachname"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
            <textarea
              name="nachricht"
              placeholder="Deine Nachricht..."
              className="w-full border border-gray-300 p-2 rounded"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Absenden
            </button>
          </form>
        </section>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-12">
        <p>© 2024 Immobilien Oberhausen – Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default App;