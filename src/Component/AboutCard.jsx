import React from 'react'
import z from "../assets/z.jpg";
import v from "../assets/v.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";


const cards = [
    { id: 1, image: z },
]

function AboutCard() {

return (
  <div className="w-full ">
    {cards.map((card) => (
      <div key={card.id} className="h-[200pxl]">
        <div>
          <img src={card.image} className="w-full block h-150 object-cover " />
        </div>{" "}
        <br />
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Section – Left */}
          <section className="md:w-1/2 text-justify ">
            <p className="text-gray-700 ">
              At The Soaltee Kathmandu, we take pride in offering an exceptional
              blend of luxury, heritage, and warm Nepali hospitality. Nestled
              within lush landscaped gardens in the heart of Kathmandu, our
              iconic five-star hotel has been a symbol of elegance and
              excellence for decades.
            </p>
            <br />
            <p>
              Designed to provide a peaceful retreat from the city’s bustle, The
              Soaltee Kathmandu offers spacious, thoughtfully appointed rooms
              and suites, world-class amenities, and personalized service that
              ensures every guest feels truly valued. From refined dining
              experiences and rejuvenating wellness facilities to expansive
              event spaces, every detail reflects our commitment to comfort and
              quality. Our legacy is built on trust, tradition, and innovation.
            </p>
            <br />
            <p>
              Whether you are visiting for business, leisure, or a special
              celebration, we strive to create memorable experiences that go
              beyond expectations. At The Soaltee Kathmandu, luxury is not just
              about comfort—it is about care, culture, and connection. We look
              forward to welcoming you and making your stay truly unforgettable.
            </p>
          </section>

          {/* Image Section – Right */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={v}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="The Soaltee Kathmandu"
            />
          </div>
        </div>
        <div>
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* LEFT: Image Cards */}
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img1}
                    alt="Soaltee History 1"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img2}
                    alt="Soaltee History 2"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img3}
                    alt="Soaltee History 3"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img4}
                    alt="Soaltee History 4"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>

              {/* RIGHT: History Text */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6">Our History</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  The Soaltee Kathmandu stands as a proud symbol of Nepal’s
                  hospitality heritage. Established in 1966, the hotel was
                  envisioned as a landmark destination that would introduce
                  international-standard luxury to Nepal while honoring the
                  country’s rich cultural values. Over the decades, The Soaltee
                  Kathmandu has evolved gracefully, welcoming global leaders,
                  dignitaries, and travelers from around the world. Surrounded
                  by landscaped gardens and designed with timeless elegance, the
                  hotel continues to preserve its legacy while embracing modern
                  hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
}

export default AboutCard