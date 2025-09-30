@tailwind base;
@tailwind components;
@tailwind utilities;
import React from "react";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Ihr neues Familienglück in Oberhausen-Alsfeld</h1>
        <p className="text-sm">
          Charmantes Reihenmittelhaus mit ausgebautem Dachgeschoss und Garten in ruhiger Sackgasse
        </p>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-12">
        {/* Eckdaten */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Eckdaten</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Bromberger Straße 16, 46145 Oberhausen-Alsfeld</li>
            <li><strong>Verkaufspreis: 375.000 €</strong></li>
            <li>Verfügbar ab: September 2025</li>
            <li>Grundstück: ca. 321 m² (Bodenwert 360 €/m²)</li>
            <li>Wohnfläche: EG+OG ca. 124 m² + DG 32 m²</li>
            <li>Vollunterkellert, Baujahr: 1976</li>
            <li>Zimmer: 6 | Bäder: 2 + Gäste-WC</li>
          </ul>
        </section>

        {/* Objektbeschreibung */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Objektbeschreibung</h2>
          <p>
            Dieses gepflegte Reihenmittelhaus aus dem Baujahr 1976 bietet mit seiner großzügigen
            Wohnfläche und einem zusätzlich ausgebauten Dachgeschoss viel Platz für die ganze Familie.
            Die Immobilie befindet sich in einer verkehrsberuhigten Sackgasse im beliebten Stadtteil
            <strong> Oberhausen-Alsfeld</strong> und besticht durch ihre kinderfreundliche Lage und eine
            exzellente Infrastruktur. Eine eigene Garage, ein schöner Garten mit Terrasse und ein Balkon
            runden das attraktive Angebot ab.
          </p>
        </section>

        {/* Raumaufteilung */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Raumaufteilung</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Erdgeschoss:</strong> Wohnzimmer, Küche, Flur, Gäste-WC</li>
            <li><strong>Obergeschoss:</strong> 3 Zimmer, Bad mit Wanne+Dusche, Balkon</li>
            <li><strong>Dachgeschoss:</strong> großer Raum + Duschbad</li>
            <li><strong>Keller:</strong> Stauraum, Heizung, Garage, Gartenabgang</li>
          </ul>
        </section>

        {/* Lage */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Lage und Umgebung</h2>
          <p>
            Ruhige Sackgasse in Oberhausen-Alsfeld. Die Infrastruktur ist hervorragend: Bushaltestelle,
            Supermärkte, Bäcker und eine Grundschule sind zu Fuß erreichbar. Freizeitmöglichkeiten
            (Tennisplatz) in der Nähe.
          </p>
        </section>

        {/* Energetisches */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Energetische Daten</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Heizungsart: Gas-Zentralheizung</li>
            <li>Energieeffizienzklasse F (Sanierungsfahrplan vorhanden)</li>
            <li>Renovierungen: 2 von 4 Fenstern (Rückseite, 2023)</li>
          </ul>
        </section>

        {/* Kontaktformular */}
        <section id="kontakt">
          <h2 className="text-2xl font-semibold mb-4">Kontakt aufnehmen</h2>
          <form
            name="kontakt"
            method="POST"
            data-netlify="true"
            className="space-y-4 bg-white p-6 rounded-md shadow-md"
          >
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

          <p className="mt-4 text-gray-700">
            Oder direkt: <strong>David Hennes – +49 178 815 96 33</strong>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-12">
        <p>© 2024 Immobilienverkauf David Hennes – Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default App;