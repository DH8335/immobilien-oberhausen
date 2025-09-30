function App() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({
    // Persönliche Daten
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    geburtsdatum: '',
    familienstand: '',
    anzahlKinder: '',
    
    // Adresse
    strasse: '',
    plz: '',
    ort: '',
    
    // Berufliche Situation
    beruf: '',
    arbeitgeber: '',
    beschaeftigungsverhaeltnis: '',
    nettoEinkommen: '',
    befristet: '',
    
    // Partner (falls verheiratet/Lebenspartnerschaft)
    partnerVorname: '',
    partnerNachname: '',
    partnerBeruf: '',
    partnerArbeitgeber: '',
    partnerNettoEinkommen: '',
    
    // Finanzielle Situation
    eigenkapital: '',
    monatlicheRate: '',
    sonstigeVerbindlichkeiten: '',
    schufa: '',
    
    // Kaufabsicht
    kaufzeitpunkt: '',
    eigennutzung: '',
    besichtigungstermin: '',
    
    // Finanzierung
    finanzierungsbestaetigung: '',
    finanzierungspartner: false,
    
    // Datenschutz
    datenschutz: false,
    newsletter: false
  });

  const [currentStep, setCurrentStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);

  const propertyImages = [
    "https://placehold.co/800x600/4A5568/FFFFFF?text=Außenansicht+Vorderseite",
    "https://placehold.co/800x600/6B7280/FFFFFF?text=Außenansicht+Seitlich",
    "https://placehold.co/800x600/8B7355/FFFFFF?text=Wohn-+und+Essbereich",
    "https://placehold.co/800x600/2F855A/FFFFFF?text=Küche",
    "https://placehold.co/800x600/3B82F6/FFFFFF?text=Gartenansicht",
    "https://placehold.co/800x600/7C3AED/FFFFFF?text=Kinderzimmer+1",
    "https://placehold.co/800x600/DC2626/FFFFFF?text=Elternschlafzimmer",
    "https://placehold.co/800x600/EA580C/FFFFFF?text=Dachgeschoss",
    "https://placehold.co/800x600/0891B2/FFFFFF?text=Badezimmer+OG",
    "https://placehold.co/800x600/059669/FFFFFF?text=Garage"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('interest-form').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Vielen Dank!</h2>
          <p className="text-gray-600 mb-6">
            Ihre Anfrage wurde erfolgreich übermittelt. Wir prüfen Ihre Angaben und melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          {formData.finanzierungspartner && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                Sie werden zusätzlich von unserem Finanzierungspartner kontaktiert, um Ihre Finanzierungsmöglichkeiten zu prüfen.
              </p>
            </div>
          )}
          <button 
            onClick={() => {setSubmitted(false); setShowForm(false); setCurrentStep(1);}}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Zurück zur Immobilie
          </button>
        </div>
      </div>
    );
  }

  const renderFormStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Persönliche Daten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vorname *</label>
                <input
                  type="text"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nachname *</label>
                <input
                  type="text"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Geburtsdatum *</label>
                <input
                  type="date"
                  name="geburtsdatum"
                  value={formData.geburtsdatum}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Familienstand *</label>
                <select
                  name="familienstand"
                  value={formData.familienstand}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Bitte wählen</option>
                  <option value="ledig">Ledig</option>
                  <option value="verheiratet">Verheiratet</option>
                  <option value="geschieden">Geschieden</option>
                  <option value="verwitwet">Verwitwet</option>
                  <option value="lebenspartnerschaft">Lebenspartnerschaft</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Straße, Hausnr. *</label>
                <input
                  type="text"
                  name="strasse"
                  value={formData.strasse}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">PLZ *</label>
                <input
                  type="text"
                  name="plz"
                  value={formData.plz}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ort *</label>
                <input
                  type="text"
                  name="ort"
                  value={formData.ort}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Berufliche Situation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Beruf *</label>
                <input
                  type="text"
                  name="beruf"
                  value={formData.beruf}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Arbeitgeber *</label>
                <input
                  type="text"
                  name="arbeitgeber"
                  value={formData.arbeitgeber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Beschäftigungsverhältnis *</label>
                <select
                  name="beschaeftigungsverhaeltnis"
                  value={formData.beschaeftigungsverhaeltnis}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Bitte wählen</option>
                  <option value="angestellt">Angestellt</option>
                  <option value="beamter">Beamter</option>
                  <option value="selbststaendig">Selbstständig</option>
                  <option value="freiberufler">Freiberufler</option>
                  <option value="rentner">Rentner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Netto-Einkommen (monatlich) *</label>
                <input
                  type="number"
                  name="nettoEinkommen"
                  value={formData.nettoEinkommen}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="€"
                  required
                />
              </div>
            </div>
            
            {(formData.familienstand === 'verheiratet' || formData.familienstand === 'lebenspartnerschaft') && (
              <div className="border-t pt-6">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Partner-Daten</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partner Vorname</label>
                    <input
                      type="text"
                      name="partnerVorname"
                      value={formData.partnerVorname}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partner Nachname</label>
                    <input
                      type="text"
                      name="partnerNachname"
                      value={formData.partnerNachname}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partner Beruf</label>
                    <input
                      type="text"
                      name="partnerBeruf"
                      value={formData.partnerBeruf}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partner Netto-Einkommen</label>
                    <input
                      type="number"
                      name="partnerNettoEinkommen"
                      value={formData.partnerNettoEinkommen}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="€"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Finanzielle Situation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Verfügbares Eigenkapital *</label>
                <input
                  type="number"
                  name="eigenkapital"
                  value={formData.eigenkapital}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="€"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gewünschte monatliche Rate *</label>
                <input
                  type="number"
                  name="monatlicheRate"
                  value={formData.monatlicheRate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="€"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sonstige Verbindlichkeiten (Kredite, etc.)</label>
                <textarea
                  name="sonstigeVerbindlichkeiten"
                  value={formData.sonstigeVerbindlichkeiten}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Bitte alle bestehenden Kredite und Verbindlichkeiten auflisten"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">SCHUFA-Auskunft *</label>
                <select
                  name="schufa"
                  value={formData.schufa}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Bitte wählen</option>
                  <option value="positiv">Positiv (keine negativen Einträge)</option>
                  <option value="negativ">Negativ (negative Einträge vorhanden)</option>
                  <option value="unbekannt">Unbekannt</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Kaufabsicht & Finanzierung</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gewünschter Kaufzeitpunkt *</label>
                <select
                  name="kaufzeitpunkt"
                  value={formData.kaufzeitpunkt}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Bitte wählen</option>
                  <option value="sofort">Sofort</option>
                  <option value="3monate">Innerhalb 3 Monate</option>
                  <option value="6monate">Innerhalb 6 Monate</option>
                  <option value="12monate">Innerhalb 12 Monate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Eigennutzung *</label>
                <select
                  name="eigennutzung"
                  value={formData.eigennutzung}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Bitte wählen</option>
                  <option value="eigennutzung">Eigennutzung</option>
                  <option value="kapitalanlage">Kapitalanlage</option>
                </select>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Finanzierungsbestätigung</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Finanzierungsbestätigung vorhanden? *</label>
                  <select
                    name="finanzierungsbestaetigung"
                    value={formData.finanzierungsbestaetigung}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Bitte wählen</option>
                    <option value="ja">Ja, Finanzierungsbestätigung liegt vor</option>
                    <option value="nein">Nein, noch keine Finanzierungsbestätigung</option>
                  </select>
                </div>

                {formData.finanzierungsbestaetigung === 'ja' && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Finanzierungsbestätigung hochladen</label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Erlaubte Formate: PDF, JPG, PNG (max. 5MB)</p>
                  </div>
                )}

                {formData.finanzierungsbestaetigung === 'nein' && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="finanzierungspartner"
                        checked={formData.finanzierungspartner}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Ja, ich möchte von Ihrem Finanzierungspartner kontaktiert werden
                        </label>
                        <p className="text-xs text-gray-600 mt-1">
                          Unser Partner prüft kostenlos Ihre Finanzierungsmöglichkeiten. Dafür benötigen Sie Gehaltsnachweise und Eigenkapitalnachweis.
                        </p>
                      </div>
                    </div>
                    
                    {formData.finanzierungspartner && (
                      <div className="mt-4 space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Gehaltsnachweise (letzte 3 Monate)</label>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Eigenkapitalnachweis</label>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <p className="text-xs text-gray-500">Erlaubte Formate: PDF, JPG, PNG (max. 5MB pro Datei)</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Besichtigung & Datenschutz</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gewünschter Besichtigungstermin</label>
              <select
                name="besichtigungstermin"
                value={formData.besichtigungstermin}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Bitte wählen</option>
                <option value="werktags">Werktags</option>
                <option value="wochenende">Wochenende</option>
                <option value="flexibel">Flexibel</option>
              </select>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Datenschutz & Einverständniserklärungen</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="datenschutz"
                    checked={formData.datenschutz}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <label className="text-sm text-gray-700">
                    Ich habe die <a href="#" className="text-blue-600 underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <label className="text-sm text-gray-700">
                    Ich möchte über weitere Immobilienangebote per E-Mail informiert werden (optional)
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Ihre Angaben im Überblick:</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Name:</strong> {formData.vorname} {formData.nachname}</p>
                <p><strong>E-Mail:</strong> {formData.email}</p>
                <p><strong>Eigenkapital:</strong> {formData.eigenkapital ? `${formData.eigenkapital}€` : 'Nicht angegeben'}</p>
                <p><strong>Monatliche Rate:</strong> {formData.monatlicheRate ? `${formData.monatlicheRate}€` : 'Nicht angegeben'}</p>
                <p><strong>Finanzierung:</strong> {formData.finanzierungsbestaetigung === 'ja' ? 'Bestätigung vorhanden' : 'Noch keine Bestätigung'}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Reihenmittelhaus Oberhausen-Alsfeld</h1>
            <button
              onClick={scrollToForm}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Interesse bekunden
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section mit Bildergalerie */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bildergalerie */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={propertyImages[currentImageIndex]}
                  alt="Immobilie"
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
              
              {/* Thumbnail Navigation */}
              <div className="flex space-x-2 overflow-x-auto">
                {propertyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Immobilien-Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ihr neues Familienglück in Oberhausen-Alsfeld</h2>
                <p className="text-gray-600 mb-4">Bromberger Straße 16, 46145 Oberhausen-Alsfeld</p>
                <p className="text-xl text-blue-600 font-semibold">€ 375.000</p>
                <p className="text-sm text-gray-500 mt-1">Verfügbar ab: September 2025</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">124 m²</div>
                  <div className="text-sm text-gray-600">Wohnfläche</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">32 m²</div>
                  <div className="text-sm text-gray-600">Nutzfläche (DG)</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">6</div>
                  <div className="text-sm text-gray-600">Zimmer</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">321 m²</div>
                  <div className="text-sm text-gray-600">Grundstück</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">1976</div>
                  <div className="text-sm text-gray-600">Baujahr</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Bäder + Gäste-WC</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Ausstattung</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Vollunterkellert</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Garten mit Terrasse</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Garage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Balkon</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Ausgebautes DG</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Gas-Zentralheizung</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Ruhige Sackgasse</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Kinderfreundlich</span>
                  </div>
                </div>
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

      {/* Exposé Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Detaillierte Objektbeschreibung</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Objektbeschreibung</h3>
              <p className="text-gray-700 leading-relaxed">
                Dieses gepflegte Reihenmittelhaus aus dem Baujahr 1976 bietet mit seiner großzügigen Wohnfläche und einem zusätzlich ausgebauten Dachgeschoss viel Platz für die ganze Familie. Die Immobilie befindet sich in einer verkehrsberuhigten Sackgasse im beliebten Stadtteil Oberhausen-Alsfeld und besticht durch ihre kinderfreundliche Lage und eine exzellente Infrastruktur. Eine eigene Garage, ein schöner Garten mit Terrasse und ein Balkon runden das attraktive Angebot ab.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Raumaufteilung und Ausstattung</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Erdgeschoss</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Großes, lichtdurchflutetes Wohnzimmer</li>
                    <li>• Abgetrennte Küche</li>
                    <li>• Flur</li>
                    <li>• Gäste-WC</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Obergeschoss</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Drei geräumige Zimmer</li>
                    <li>• Badezimmer mit Wanne & Dusche</li>
                    <li>• Balkon mit Gartenblick</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dachgeschoss</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Großer, heller Raum (32 m² Nutzfläche)</li>
                    <li>• Duschbad</li>
                    <li>• Ideal als Elternbereich, Büro oder Spielzimmer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Keller</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Vollkeller mit viel Stauraum</li>
                    <li>• Gas-Zentralheizung</li>
                    <li>• Garage mit direktem Hauszugang</li>
                    <li>• Kellertreppe zum Garten</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lage und Umgebung</h3>
              <p className="text-gray-700 leading-relaxed">
                Die Immobilie liegt in einer ruhigen Wohngegend in Oberhausen-Alsfeld. Die Lage in einer Sackgasse sorgt für absolute Ruhe und Sicherheit – ideal für Familien mit Kindern. Die Infrastruktur ist hervorragend: In wenigen Gehminuten erreichen Sie eine Bushaltestelle, Supermärkte, einen Bäcker und eine Grundschule. Freizeitmöglichkeiten wie ein Tennisplatz sind ebenfalls in der Nähe.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energetische Daten</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Energieeffizienzklasse:</span>
                    <div className="text-lg font-bold text-orange-600">F</div>
                  </div>
                  <div>
                    <span className="font-semibold">Heizungsart:</span>
                    <div>Gas-Zentralheizung</div>
                  </div>
                  <div>
                    <span className="font-semibold">Renovierungen:</span>
                    <div>2 von 4 Fenster (Rückseite) erneuert 2023</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">Ein Sanierungsfahrplan liegt vor. Energieausweis ist in Bearbeitung.</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                📄 Vollständiges Exposé herunterladen (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interesse Form */}
      {showForm && (
        <section id="interest-form" className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-bold">Interesse bekunden</h2>
                <p className="mt-2 opacity-90">Bitte füllen Sie alle Felder aus, damit wir Ihnen ein passendes Angebot unterbreiten können.</p>
              </div>

              {/* Progress Bar */}
              <div className="bg-gray-200 h-2">
                <div 
                  className="bg-blue-600 h-2 transition-all duration-300"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                ></div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {/* Step Indicator */}
                <div className="flex justify-between items-center mb-8">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {step}
                      </div>
                      <div className="ml-2 text-xs text-gray-600 hidden md:block">
                        {step === 1 && 'Persönlich'}
                        {step === 2 && 'Beruflich'}
                        {step === 3 && 'Finanzen'}
                        {step === 4 && 'Finanzierung'}
                        {step === 5 && 'Abschluss'}
                      </div>
                      {step < 5 && <div className="w-8 h-0.5 bg-gray-300 mx-2 hidden md:block"></div>}
                    </div>
                  ))}
                </div>

                {/* Form Content */}
                {renderFormStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-2 rounded-md font-medium ${
                      currentStep === 1 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gray-600 text-white hover:bg-gray-700'
                    }`}
                  >
                    Zurück
                  </button>
                  
                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
                    >
                      Weiter
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!formData.datenschutz}
                      className={`px-6 py-2 rounded-md font-medium ${
                        formData.datenschutz
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Anfrage absenden
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 text-xl">ℹ️</div>
                <div>
                  <h3 className="font-medium text-blue-800">Warum diese Angaben?</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Diese Informationen helfen uns dabei, nur qualifizierte Interessenten zu kontaktieren und Ihnen passende Finanzierungslösungen anzubieten. Alle Daten werden vertraulich behandelt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-300">
                <p>David Hennes</p>
                <p>📞 +49 178 815 96 33</p>
                <p>📍 Bromberger Straße 16</p>
                <p>46145 Oberhausen-Alsfeld</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Besichtigungen</h3>
              <div className="space-y-2 text-gray-300">
                <p>Nach Vereinbarung</p>
                <p>Kontaktieren Sie uns für einen Termin</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-300 hover:text-white">Impressum</a><br/>
                <a href="#" className="text-gray-300 hover:text-white">Datenschutz</a><br/>
                <a href="#" className="text-gray-300 hover:text-white">AGB</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Immobilienverkauf Oberhausen. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}