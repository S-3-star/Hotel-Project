import React from "react";

const Navlinks = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Rooms & Suites",
    url: "/rooms & suites",
  },
  {
    title: "Amenities",
    url: "/amenities",
  },
  {
    title: "Dining",
    url: "/dining",
  },
  {
    title: "Contact Us",
    url: "/contact us",
  },
];

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center gap-4 items-center bg-white-200 border-2">
      {Navlinks.map((el, idx) => (
        <a
          href={el.url}
          key={idx}
          className="font-medium hover:text-white transition"
        >
          {el.title}
        </a>
      ))}
    </div>
  );
}
