import React from "react";
import hop from "../assets/hop.jpg";
import ab from "../assets/ab.jpg";
import d from "../assets/d.jpg";
import l from "../assets/l.jpg";
import x from "../assets/x.jpg";
import y from "../assets/y.jpg";
import r from "../assets/r.jpg";

const cards = [
  { id: 1, title: "Executive Suite Room", price: "400", image: ab },
  { id: 2, title: "Deluxe Suite Room", price: "300", image: l },
  { id: 3, title: "Junior Suite Room", price: "200", image: d },
  { id: 4, title: "Deluxe Room", price: "180", image: x },
  { id: 5, title: "Premium Room", price: "220", image: y },
  { id: 6, title: "Luxury Room", price: "350", image: r },
];

function RoomCard() {
  return (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="w-full h-150 relative">
        <img
          src={hop}
          alt="Hotel Rooms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-sm tracking-widest uppercase text-orange-500 mb-2">
          Hotel Peninsula
        </p>

        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Rooms</h2>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Our rooms are thoughtfully designed to offer a perfect blend of
          comfort, elegance, and modern convenience. Spacious interiors, refined
          furnishings, and calming tones create a serene atmosphere where guests
          can relax and unwind.
        </p>
      </div>

      {/* Room Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cards.map((el) => (
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

                <button className="text-sm font-medium text-orange-500 hover:text-orange-600 transition">
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

export default RoomCard;
