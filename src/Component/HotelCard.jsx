import React from "react";
import as from "../assets/as.jpg"
import ab from "../assets/ab.jpg";
import d from "../assets/d.jpg";
import l from "../assets/l.jpg";
import x from "../assets/x.jpg";
import y from "../assets/y.jpg";
import r from "../assets/r.jpg";
import { ImPriceTag } from "react-icons/im";


const Rooms = [
  { id: 1, title: "Executive Suite Room", price: "400", image: ab },
  { id: 2, title: "Deluxe Suite Room", price: "300", image: l },
  { id: 3, title: "Junior Suite Room", price: "200", image: d },
  { id: 4, title: "Deluxe Room", price: "180", image: x },
  { id: 5, title: "Premium Room", price: "220", image: y },
  { id: 6, title: "Luxury Room", price: "350", image: r },
];

export default function HotelCard() {
  return (
    <div className="bg-gray-50">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-amber-600 tracking-widest uppercase text-sm mb-3">
          Welcome to Our Hotel
        </p>

        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Experience Comfort & Elegance
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Our hotel offers a perfect blend of comfort, style, and modern
          amenities. With well-designed rooms, attentive service, and a
          welcoming atmosphere, we ensure a relaxing and memorable stay for
          every guest.
        </p>

        {/* Center Image */}
        <div className="mt-12 flex justify-center">
          <img
            src={as}
            alt="Hotel Interior"
            className="w-full max-w-4xl rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Rooms Heading */}
      <div className="text-center mb-16">
        <p className="text-amber-600 uppercase tracking-widest text-sm">
          Luxury Experience
        </p>
        <h2 className="text-4xl font-semibold mt-3 text-gray-800">
          Rooms & Suites
        </h2>
      </div>

      {/* Room Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {Rooms.map((el) => (
            <div
              key={el.id}
              className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={el.image}
                  alt={el.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/15"></div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-1">
                  From ${el.price} / Night
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {el.title}
                </h3>

                <button className="text-sm font-medium text-amber-600 hover:text-amber-700 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
