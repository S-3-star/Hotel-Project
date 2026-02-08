import React from "react";

import A7 from "../assets/A7.jpg";
import d1 from "../assets/d1.jpg";
import sw from "../assets/sw.jpg";
import sp from "../assets/sp.jpg";
import gm from "../assets/gm.jpg";
import kid from "../assets/kid.jpg";
import gd from "../assets/gd.jpg";
import A3 from "../assets/A3.jpg";

const facilities = [
  {
    title: "Conference Hall",
    image: A7,
    desc: "Our spacious conference hall is designed for meetings, seminars, and events, offering modern facilities and a refined ambiance for productive gatherings.",
  },
  {
    title: "Dining Experience",
    image: d1,
    desc: "Enjoy local and international cuisine prepared by skilled chefs, served in a warm and elegant dining atmosphere.",
    reverse: true,
  },
  {
    title: "Swimming Pool",
    image: sw,
    desc: "A beautifully designed swimming pool offering a refreshing and relaxing escape for guests of all ages.",
  },
  {
    title: "Spa & Wellness",
    image: sp,
    desc: "Rejuvenate your body and mind with soothing massages, wellness therapies, and a tranquil spa environment.",
    reverse: true,
  },
  {
    title: "Fitness Center",
    image: gm,
    desc: "Stay active with modern equipment in our fully equipped fitness center designed for all fitness levels.",
  },
  {
    title: "Kids Play Area",
    image: kid,
    desc: "A safe and fun play area where children can enjoy engaging activities while families relax.",
    reverse: true,
  },
  {
    title: "Garden & Outdoor Lounge",
    image: gd,
    desc: "Unwind in our landscaped garden and outdoor lounge, perfect for peaceful moments surrounded by nature.",
  },
];

function AmenitiesCard() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Our Hotel Facilities & Activities
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Discover thoughtfully designed spaces and premium facilities that
          enhance comfort, relaxation, and memorable experiences throughout your
          stay.
        </p>

        {/* Hero Image */}
        <div className="mb-24">
          <img
            src={A3}
            alt="Hotel Amenities"
            className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Facility Sections */}
        <div className="space-y-24">
          {facilities.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                item.reverse ? "lg:flex-row-reverse" : ""
              } items-center gap-14 bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="lg:w-1/2 w-full p-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AmenitiesCard;
