import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8">🍽️ Notre Menu</h1>

      {/* Burgers */}
      <section className="w-full max-w-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">🍔 Burgers</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-white rounded shadow">Cheeseburger - 50 DH</li>
          <li className="p-3 bg-white rounded shadow">Bacon Burger - 55 DH</li>
          <li className="p-3 bg-white rounded shadow">Vegan Burger - 48 DH</li>
        </ul>
      </section>

      {/* Pasta */}
      <section className="w-full max-w-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">🍝 Pasta</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-white rounded shadow">Spaghetti Bolognese - 60 DH</li>
          <li className="p-3 bg-white rounded shadow">Penne Alfredo - 58 DH</li>
          <li className="p-3 bg-white rounded shadow">Lasagna - 65 DH</li>
        </ul>
      </section>

      {/* Pizza */}
      <section className="w-full max-w-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">🍕 Pizza</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-white rounded shadow">Margherita - 55 DH</li>
          <li className="p-3 bg-white rounded shadow">Pepperoni - 60 DH</li>
          <li className="p-3 bg-white rounded shadow">Quattro Formaggi - 65 DH</li>
        </ul>
      </section>

      {/* Boissons */}
      <section className="w-full max-w-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">🥤 Boissons</h2>
        <h3 className="font-medium">Froides</h3>
        <ul className="space-y-2 mb-2">
          <li className="p-2 bg-white rounded shadow">Coca-Cola - 15 DH</li>
          <li className="p-2 bg-white rounded shadow">Jus d’orange - 18 DH</li>
          <li className="p-2 bg-white rounded shadow">Eau minérale - 10 DH</li>
        </ul>
        <h3 className="font-medium">Chaudes</h3>
        <ul className="space-y-2">
          <li className="p-2 bg-white rounded shadow">Café - 12 DH</li>
          <li className="p-2 bg-white rounded shadow">Thé - 10 DH</li>
          <li className="p-2 bg-white rounded shadow">Chocolat chaud - 15 DH</li>
        </ul>
      </section>

      {/* Bouton pour revenir à la page principale */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800"
      >
        ⬅️ Retour à la page principale
      </Link>
    </div>
  );
}
