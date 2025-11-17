import React from "react";

const Dream = () => {
  return (
    <div className="sm:pl-16 pt-32 sm:pt-60">
      <div className="pl-6">
        <h1 className="text-3xl sm:text-5xl font-semibold">
          If you can dream it,
          <br />
          Mac can do it.
        </h1>
      </div>

      {/* Main Card */}
      <div className="pt-20 pb-20 sm:pb-40 pl-6 sm:pl-0">
        <div className="relative w-[93%] rounded-3xl overflow-hidden text-white text-center shadow-2xl bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-black">

          {/* Top Image (no gap at all) */}
          <div className="relative w-full">
            <img
              src="Images/Mac/Dream/person.png"
              alt="Person behind Mac"
              className="w-full h-auto object-cover block align-top"
              style={{
                display: "block",
                margin: 0,
                padding: 0,
                lineHeight: 0,
                border: "none",
              }}
            />
            {/* Blue line directly below image */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"></div>
          </div>

          {/* Green Section (content + logo) */}
          <div className="bg-green-700 px-6 sm:px-12 pt-10 pb-4">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
              Great ideas start here.
            </h1>
            <p className="text-lg sm:text-lg text-gray-300 mb-6">
              See how Mac helps ideas come to life.
            </p>

            {/* Buttons */}
            <div className="flex flex-row justify-center gap-4 mb-4 -mt-2">
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                Watch the film
              </button>
              <button className="flex items-center justify-center  px-6 py-[7px] rounded-full text-sm font-medium hover:underline transition">
                Learn more
                <span className="ml-2 text-lg font-semibold">+</span>
              </button>
            </div>

            {/* Apple logo touching bottom border */}
            <div className="flex justify-center">
              <img
                src="Images/Mac/Dream/Apple_logo_black.svg.png"
                alt="Apple logo"
                className="w-28 sm:w-36 opacity-25 mb-[-4px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
