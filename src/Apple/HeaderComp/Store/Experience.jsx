import React from "react";

const Experience = () => {
   
    const products = [
        {
            tag: "Apple Intelligence.Write,express yourself and get things done effortlessly.",
            img: 'Images/Store/Experience/appleintell.png',
            text: "text-black",
        },
        {
            name: "CONTINUITY",
            tag: "Powerful alone. Superpowered together.",
            img: 'Images/Store/Experience/continuity.png',
            text: "text-black",
        },
        {
            name: "APPLE STORE APP",
            tag: "Let them know it's on the way.",
            subTag: "Send a digital gift message that's easy to schedule, fun to give and fun to get.",
            img: 'Images/Store/Experience/mother.png',
            text: "text-black",
        },
        {

            tag: "Four Apple sevices.One easy subscription.",
            img: 'Images/Store/Experience/subscript.png',
            text: "text-black",
        },
        {
            tag: "We've got you covered.",
            subTag: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
            img: 'Images/Store/Experience/applecare.png',
            text: "text-black",
        },
        {
            name: "HOME",
            tag: "See how one app can control your entire home.",
            img: 'Images/Store/Experience/homekit.png',
            text: "text-black",
        }
    ];

   return (
    <div className="bg-gray-100 py-10">
      {/* Header */}
      <div className="px-6 sm:px-[100px] mb-6">
        <h1 className="font-bold text-[28px]">
          The Apple experience.{" "}
          <span className="text-gray-600 font-bold">
            Do even more with Apple products and services.
          </span>
        </h1>
      </div>

      {/* Scroll Container */}
      <div className="relative w-full">
        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 sm:px-20 pb-6 snap-x snap-mandatory scroll-smooth">
          {products.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl shrink-0 snap-center 
                w-[300px] sm:w-[440px] md:w-[460px] h-[500px]
                flex flex-col justify-between overflow-hidden 
                bg-white shadow-lg 
                transition-all duration-500 hover:-translate-2`}
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Text content */}
              <div
                className={`relative z-10 px-6 pt-8 pb-8 flex flex-col justify-start ${item.text}`}
              >
                {/* Reserved space for consistent layout */}
                <div className="flex flex-col justify-between min-h-[160px]">
                  <h3 className="text-sm font-semibold mb-1 min-h-[20px]">
                    {item.name || ""}
                  </h3>
                  <p className="text-xl sm:text-3xl mb-2 font-semibold min-h-[60px]">
                    {item.tag}
                  </p>
                  <p className="text-md opacity-90 min-h-[40px]">
                    {item.subTag || ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
