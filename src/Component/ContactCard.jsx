import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactImg from "../assets/contactImg.jpg";

function ContactCard() {
  return (
    <div className="bg-gray-50 pb-24">
      {/* HERO IMAGE WITH TEXT */}
      <div className="relative w-full h-[420px] mb-24">
        <img
          src={contactImg}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-5xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="max-w-2xl text-gray-200 text-lg">
            We are here to assist you with reservations, inquiries, and any
            special requests to make your stay memorable.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <FaMapMarkerAlt className="text-4xl text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Location
            </h3>
            <p className="text-gray-600">
              Lakeside Road, Pokhara <br /> Nepal
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <FaPhoneAlt className="text-4xl text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Phone Number
            </h3>
            <p className="text-gray-600">
              +977 9812345678 <br /> +977 061-123456
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
            <FaEnvelope className="text-4xl text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Email Address
            </h3>
            <p className="text-gray-600">
              info@luxuryhotel.com <br /> booking@luxuryhotel.com
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white rounded-3xl shadow-lg p-10 md:p-14 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Send Us a Message
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-600 text-white px-10 py-3 rounded-xl font-medium hover:bg-amber-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
