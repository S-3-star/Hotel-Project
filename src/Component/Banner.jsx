import Slider from 'react-slick';
import React from 'react'
import z from "../assets/z.jpg"
import o from "../assets/o.jpg"
import caption from "../assets/caption.jpg"
import f from "../assets/f.jpg"
// import j from "../assets/j.jpg"
// import k from "../assets/k.jpg"

import { set } from 'react-hook-form';
export default function BannerSlider(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToshow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const banners = [
    { id: 1, image: caption },
    { id: 2, image: f },
    { id: 3, image: o },
    { id: 4, image: z },
    // { id: 4, image: j },
    // { id: 5, image: k },
  ];

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="h-[400pxl]">
            <img
              src={banner.image}
              className="w-full block h-150 object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

