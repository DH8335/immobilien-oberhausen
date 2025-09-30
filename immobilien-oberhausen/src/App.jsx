import React from "react";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [currentStep, setCurrentStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);

  // → Hier kannst du echte Fotos später reinsetzen
  const propertyImages = [
    "https://placehold.co/800x600/4F46E5/FFFFFF?text=Außenansicht",
    "https://placehold.co/800x600/059669/FFFFFF?text=Wohnzimmer",
    "https://placehold.co/800x600/DC2626/FFFFFF?text=Küche",
    "https://placehold.co/800x600/7C3AED/FFFFFF?text=Schlafzimmer",
    "https://placehold.co/800x600/EA580C/FFFFFF?text=Badezimmer",
    "https://placehold.co/800x600/0891B2/FFFFFF?text=Garten"
  ];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length
    );

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document
        .getElementById("interest-form")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Familienglück in Oberhausen-Alsfeld
            </h1>
            <button
              onClick={scrollToForm}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Interesse bekunden
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section mit Galerie */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Galerie */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={propertyImages[currentImageIndex]}
                  alt={`Immobilie Bild ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {propertyImages.length}
                </div>
              </div>
              {/* Thumbs */}
              <div className="flex space-x-2 overflow-x-auto">
                {propertyImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 ${
                      idx === currentImageIndex
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Immobilien-Infos */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Reihenmittelhaus mit Garten & ausgebautem DG
                </h2>
                <p className="text-xl text-blue-600 font-semibold">
                  € 375.000
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">156</div>
                  <div className="text-sm text-gray-600">m² Wohnfläche</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">321</div>
                  <div className="text-sm text-gray-600">m² Grundstück</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">6</div>
                  <div className="text-sm text-gray-600">Zimmer</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">1976</div>
                  <div className="text-sm text-gray-600">Baujahr</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Adresse
                </h3>
                <p className="text-gray-700">
                  Bromberger Straße 16, 46145 Oberhausen-Alsfeld
                </p>
              </div>

              <button
                onClick={scrollToForm}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Jetzt Interesse bekunden
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exposé-Details */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Detaillierte Objektbeschreibung
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Objektbeschreibung</h3>
              <p className="text-gray-700 leading-relaxed">
                Dieses charmante Reihenmittelhaus aus dem Baujahr 1976 bietet ca. 156 m² Wohnfläche verteilt auf 6 Zimmer, Dachgeschoss, 2 Bäder und Gäste-WC. Ruhige Sackgasse, kinderfreundliche Lage, gute Infrastruktur. Eine Garage und ein schöner Garten mit Terrasse runden das Angebot ab.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Raumaufteilung</h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-700">
                <li><strong>Erdgeschoss:</strong> Wohnzimmer, Küche, Flur, Gäste-WC</li>
                <li><strong>Obergeschoss:</strong> 3 Zimmer, Bad mit Wanne+Dusche, Balkon</li>
                <li><strong>Dachgeschoss:</strong> großer Raum + Duschbad</li>
                <li><strong>Keller:</strong> Stauraum, Heizung, Garage, Gartenabgang</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energieausweis</h3>
              <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Heizungsart:</span> Gas-Zentralheizung
                </div>
                <div>
                  <span className="font-semibold">Energieklasse:</span> F
                </div>
                <div>
                  <span className="font-semibold">Bodenwert:</span> 360 €/m²
                </div>
                <div>
                  <span className="font-semibold">Renovierungen:</span> 2 Fenster (2023)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            © 2025 Immobilienverkauf David Hennes – Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;