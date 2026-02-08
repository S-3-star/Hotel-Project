import React from "react";

const Navlinks = [
  { title: "About", url: "/about" },
  { title: "Room", url: "/room" },
  { title: "Amenities", url: "/amenities" },
  { title: "Dining", url: "/dining" },
  { title: "ContactUs", url: "/contactUs" },
];

export default function Header() {
  return (
    <header className="bg-[#F6F4F1] shadow-sm">
      <nav className="flex justify-center gap-8 items-center py-4 text-lg">
        {Navlinks.map((el, idx) => (
          <a
            href={el.url}
            key={idx}
            className="text-gray-800 font-medium hover:text-[#C9A24D] transition duration-300"
          >
            {el.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
