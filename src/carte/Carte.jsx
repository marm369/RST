import React from "react";

export default function Carte() {
  const openInGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Your+Restaurant+Address",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-50 p-6">
      <h1 className="text-4xl font-bold mb-6">📍 Localisation du Restaurant</h1>

      {/* Carte intégrée (iframe Google Maps) */}
      <div className="w-full max-w-3xl h-96 mb-6">
        <iframe
          title="restaurant-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086916419043!2d-122.41941568468116!3d37.77492977975942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c2f1ff19f%3A0x5e2b0e23456789!2sSan+Francisco!5e0!3m2!1sfr!2sma!4v1692930000000!5m2!1sfr!2sma"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <button
        onClick={openInGoogleMaps}
        className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 mb-6"
      >
        Ouvrir dans Google Maps
      </button>

      {/* Informations d’ouverture */}
      <div className="bg-white p-6 rounded shadow w-full max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">🕒 Horaires d'ouverture</h2>
        <p>Lundi - Vendredi : 09h00 - 22h00</p>
        <p>Samedi : 10h00 - 23h00</p>
        <p>Dimanche : 10h00 - 21h00</p>
      </div>
    </div>
  );
}
