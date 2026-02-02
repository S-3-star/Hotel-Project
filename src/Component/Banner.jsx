import React from 'react'
import n from "../assets/n.jpg"

function Banner() {
  return (
    <div>
      <div className="flex justify-center items-center mt-12 md:mt-0">
        <img
          src={n}
          alt="Banner"
          className="w-full h-166 object-cover shadow-xl"
        />
      </div>
    </div>
  );
}

export default Banner