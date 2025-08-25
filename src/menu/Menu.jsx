import React from "react";
import { Link } from "react-router-dom";
import pasta from "../assets/products/pasta.jpg"
import burger from "../assets/products/burger.jpg"
import pizza from "../assets/products/pizza.jpg"
const menuData = [
  {
    id: "burgers",
    title: "Burgers",
    icon: "🍔",
    items: [
      {
        id: "cheeseburger",
        name: "Cheeseburger",
        description:
          "Pain artisanal, steak haché, fromage cheddar, salade, tomate",
        price: "50 DH",
        isPopular: true,
        image: burger,
      },
      {
        id: "bacon-burger",
        name: "Bacon Burger",
        description:
          "Pain brioche, steak haché, bacon croustillant, fromage, oignons caramélisés",
        price: "55 DH",
        image: burger,
      },
      {
        id: "vegan-burger",
        name: "Vegan Burger",
        description: "Pain complet, steak végétal, avocat, légumes de saison",
        price: "48 DH",
        image: burger,
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    icon: "🍝",
    items: [
      {
        id: "spaghetti-bolognese",
        name: "Spaghetti Bolognese",
        description: "Pâtes fraîches, sauce bolognaise traditionnelle, parmesan",
        price: "60 DH",
        isPopular: true,
        image: pasta,
      },
      {
        id: "penne-alfredo",
        name: "Penne Alfredo",
        description: "Penne, crème fraîche, parmesan, champignons",
        price: "58 DH",
        image: pasta,
      },
      {
        id: "lasagna",
        name: "Lasagna",
        description: "Lasagnes maison, viande hachée, béchamel, mozzarella",
        price: "65 DH",
        image: pasta,
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    icon: "🍕",
    items: [
      {
        id: "margherita",
        name: "Margherita",
        description: "Pâte maison, sauce tomate, mozzarella, basilic frais",
        price: "55 DH",
        isPopular: true,
        image: pizza,
      },
      {
        id: "pepperoni",
        name: "Pepperoni",
        description: "Pâte maison, sauce tomate, mozzarella, pepperoni",
        price: "60 DH",
        image: pizza,
      },
      {
        id: "quattro-formaggi",
        name: "Quattro Formaggi",
        description: "Pâte maison, mozzarella, gorgonzola, parmesan, chèvre",
        price: "65 DH",
        image: pizza,
      },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    icon: "🥤",
    items: [],
    subsections: [
      {
        title: "Froides",
        items: [
          { id: "coca-cola", name: "Coca-Cola", description: "33cl", price: "15 DH" },
          { id: "jus-orange", name: "Jus d'orange", description: "Pressé frais", price: "18 DH" },
          { id: "eau-minerale", name: "Eau minérale", description: "50cl", price: "10 DH" },
        ],
      },
      {
        title: "Chaudes",
        items: [
          { id: "cafe", name: "Café", description: "Expresso italien", price: "12 DH" },
          { id: "the", name: "Thé", description: "Sélection de thés premium", price: "10 DH" },
          { id: "chocolat-chaud", name: "Chocolat chaud", description: "Chocolat belge, chantilly", price: "15 DH" },
        ],
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-emerald-900 text-white py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 font-souvenir_std tracking-[-2px] md:text-6xl">
            Notre Menu
          </h1>
          <p className="text-xl font-medium font-forma_djr_display md:text-2xl">
            Les meilleures recettes nécessitent les meilleurs produits
          </p>
        </div>

        {/* Retour */}
        <Link
          to="/"
          className="absolute top-8 left-8 text-white text-base font-medium items-center bg-transparent box-border gap-x-2 flex justify-center leading-4 min-h-[50px] min-w-[50px] border-white px-4 py-3 rounded-[25px] border-2 border-solid font-forma_djr_display transition-colors duration-200 hover:bg-white hover:text-emerald-900 md:text-lg md:min-h-[60px] md:px-6 md:py-4 md:rounded-[30px]"
        >
          ← Retour
        </Link>
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid gap-16">
          {menuData.map((section) => (
            <section key={section.id} className="relative">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 mb-4">
                  <span className="text-4xl">{section.icon}</span>
                  <h2 className="text-4xl font-bold text-emerald-900 font-souvenir_std tracking-[-2px] md:text-5xl">
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Section Items */}
              {section.items.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="relative bg-white border-2 border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group overflow-hidden"
                    >
                      {item.isPopular && (
                        <div className="absolute -top-3 -right-3 bg-[#C03434] text-white text-sm font-bold px-3 py-1 rounded-full font-forma_djr_display">
                          Populaire
                        </div>
                      )}

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-40 object-cover"
                        />
                      )}

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-emerald-900 font-souvenir_std group-hover:text-[#C03434] transition-colors duration-200">
                            {item.name}
                          </h3>
                          <span className="text-2xl font-bold text-[#C03434] font-forma_djr_display">
                            {item.price}
                          </span>
                        </div>

                        {item.description && (
                          <p className="text-gray-600 font-forma_djr_display leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && (
                <div className="grid gap-12 md:grid-cols-2">
                  {section.subsections.map((subsection) => (
                    <div
                      key={subsection.title}
                      className="bg-gray-50 rounded-lg p-8"
                    >
                      <h3 className="text-2xl font-bold text-emerald-900 mb-6 font-souvenir_std text-center">
                        {subsection.title}
                      </h3>
                      <div className="space-y-4">
                        {subsection.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            <div>
                              <h4 className="font-bold text-emerald-900 font-forma_djr_display">
                                {item.name}
                              </h4>
                              {item.description && (
                                <p className="text-sm text-gray-600 font-forma_djr_display">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <span className="text-xl font-bold text-[#C03434] font-forma_djr_display">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-emerald-900 mb-4 font-souvenir_std">
            Prêt à commander ?
          </h3>
          <p className="text-xl text-gray-600 mb-8 font-forma_djr_display">
            Découvrez nos saveurs authentiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white text-base font-medium items-center bg-[#C03434] inline-flex justify-center min-h-[60px] min-w-[200px] border-[#C03434] px-8 py-4 rounded-[30px] border-2 border-solid font-forma_djr_display hover:bg-red-700 transition-colors duration-200 md:text-xl md:min-h-[75px] md:py-6 md:rounded-[37.5px]">
              À emporter
            </button>
            <button className="text-white text-base font-medium items-center bg-emerald-900 inline-flex justify-center min-h-[60px] min-w-[200px] border-emerald-900 px-8 py-4 rounded-[30px] border-2 border-solid font-forma_djr_display hover:bg-emerald-800 transition-colors duration-200 md:text-xl md:min-h-[75px] md:py-6 md:rounded-[37.5px]">
              En livraison
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
