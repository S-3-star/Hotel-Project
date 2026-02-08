import React from "react";

// Hotel & General Images
import z from "../assets/z.jpg";
import o from "../assets/o.jpg";
import caption from "../assets/caption.jpg";
import f from "../assets/f.jpg";
import v from "../assets/v.jpg";

import A7 from "../assets/A7.jpg";
import d1 from "../assets/d1.jpg";
import sw from "../assets/sw.jpg";
import sp from "../assets/sp.jpg";
import gm from "../assets/gm.jpg";
import kid from "../assets/kid.jpg";
import gd from "../assets/gd.jpg";
import A3 from "../assets/A3.jpg";
import asImg from "../assets/as.jpg";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";



// Room Images
import ab from "../assets/ab.jpg";
import d from "../assets/d.jpg";
import l from "../assets/l.jpg";
import x from "../assets/x.jpg";
import y from "../assets/y.jpg";
import r from "../assets/r.jpg";

// Food Images
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

// Gallery Images Array
const galleryImages = [
  z,
  o,
  caption,
  f,
  v,
  A7,
  sw,
  d1,
  sp,
  gm,
  kid,
  gd,
  A3,
  asImg,
  img1,
  img2,
  img3,
  img4,
  ab,
  d,
  l,
  x,
  y,
  r,
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8,
  food9,
  food10,
  food11,
  food12,
];

function GallaryCard() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-amber-600 uppercase tracking-widest text-sm mb-3">
            Our Moments
          </p>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Hotel Gallery
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore the beauty, comfort, and elegance of our hotel through our
            curated gallery of spaces, dining, rooms, and unforgettable moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={img}
                alt="Hotel Gallery"
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium tracking-wide">
                  View Image
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GallaryCard;
