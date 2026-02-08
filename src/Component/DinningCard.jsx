import React from "react";
import d1 from "../assets/d1.jpg";

import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import food6 from "../assets/food6.jpg";
import food7 from "../assets/food7.jpg";
import food8 from "../assets/food8.jpg";
import food9 from "../assets/food9.jpg";
import food10 from "../assets/food10.jpg";
import food11 from "../assets/food11.jpg";
import food12 from "../assets/food12.jpg";

const diningItems = [
  {
    id: 1,
    name: "Signature Nepali Thali",
    price: "$18",
    image: food1,
    desc: "A traditional platter featuring authentic Nepali flavors and spices.",
  },
  {
    id: 2,
    name: "Grilled Chicken Platter",
    price: "$22",
    image: food2,
    desc: "Juicy grilled chicken served with seasonal vegetables and sauce.",
  },
  {
    id: 3,
    name: "Creamy Alfredo Pasta",
    price: "$16",
    image: food3,
    desc: "Classic pasta tossed in a rich, creamy Alfredo sauce.",
  },
  {
    id: 4,
    name: "Pan-Seared Fish Fillet",
    price: "$24",
    image: food4,
    desc: "Fresh fish fillet cooked to perfection with herbs and butter.",
  },
  {
    id: 5,
    name: "Traditional Momo Platter",
    price: "$14",
    image: food5,
    desc: "Steamed dumplings filled with seasoned meat and served with chutney.",
  },
  {
    id: 6,
    name: "Wood-Fired Pizza",
    price: "$20",
    image: food6,
    desc: "Crispy pizza topped with fresh ingredients and melted cheese.",
  },
  {
    id: 7,
    name: "Lamb Rogan Josh",
    price: "$26",
    image: food7,
    desc: "Slow-cooked lamb curry infused with aromatic spices and rich flavors.",
  },
  {
    id: 8,
    name: "Sichuan Chili oil Wontons",
    price: "$26",
    image: food10,
    desc: "The intense heat and rich umami of these Sichuan Chili Oil Wontons make them one of the most beloved Chinese comfort dishes. Juicy pork dumpling",
  },
  {
    id: 9,
    name: "Lipton Onion Soup Burger",
    price: "$26",
    image: food11,
    desc: "A burger is a popular, versatile sandwich consisting of a cooked, savory patty—traditionally ground beef—served inside a sliced bun or roll. Often grilled or pan-fried, it is typically customized with cheese, fresh vegetables like lettuce, tomato, and onion, along with condiments such as ketchup, mustard, or mayonnaise. ",
  },
  {
    id: 10,
    name: "Chef’s Special Dessert",
    price: "$10",
    image: food9,
    desc: "A delightful dessert crafted by our expert pastry chef.",
  },
  {
    id: 11,
    name: "Signature Mocktail",
    price: "$8",
    image: food8,
    desc: "Refreshing blend of fresh fruits, herbs, and natural flavors.",
  },
  {
    id: 12,
    name: "Strawberry Cheesecake",
    price: "$8",
    image: food12,
    desc: "It's rich, creamy, and delightfully decadent.",
  },
];

function DiningCard() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-amber-600 uppercase tracking-widest text-sm mb-3">
            Dining Experience
          </p>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Our Restaurant & Cuisine
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Experience fine dining where traditional flavors meet modern
            culinary excellence.
          </p>
        </div>

        {/* Dining Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-6">
          <img
            src={d1}
            alt="Dining Area"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Text BELOW image */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">
            Our Special Food
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated dishes prepared by our chefs using fresh
            ingredients to deliver unforgettable taste and quality.
          </p>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {diningItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Food Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-amber-600 font-medium">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <button className="text-sm font-medium text-amber-600 hover:text-amber-700 transition">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiningCard;
