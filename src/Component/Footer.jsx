import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-[#F6F4F1] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          {/* Hotel Info */}
          <div>
            <p className="text-2xl font-semibold text-gray-800 mb-2">
            Hotel Peninsula
            </p>
            <p className="text-gray-600">Pokhara</p>
            <p className="text-amber-600 text-lg mt-2">+977 9876543210 / 56</p>

            <div className="flex gap-4 mt-5 text-xl text-gray-600">
              <FaFacebook className="hover:text-amber-600 transition" />
              <FaInstagram className="hover:text-amber-600 transition" />
              <AiFillTikTok className="hover:text-amber-600 transition" />
              <FaYoutube className="hover:text-amber-600 transition" />
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xl font-semibold text-gray-800 mb-4">Explore</p>
            <ul className="space-y-2 text-gray-600">
              {[
                "About",
                "Room",
                "Amenities",
                "Dining",
                "ContactUs",
                "Gallery",
                "Terms & Conditions",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-amber-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Kathmandu City Office
            </p>
            <p className="text-gray-600">
              Diyali Marg, Lazimpat,
              <br />
              Kathmandu
            </p>

            <p className="text-amber-600 mt-4">
              reservation@hotelpeninsula.com <br />
              +977-1-2001657 / 78 / 47
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#ECE8E2] py-4">
        <p className="text-center text-sm text-gray-600">
          © 2025 Hotel Peninsula. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
