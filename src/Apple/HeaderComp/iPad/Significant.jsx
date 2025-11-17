
import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    title: "iPad and iPhone",
    content:
      "iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.",
    img: "Images/IPad/Significant/iphone.png",
  },
  {
    title: "iPad and Mac",
    content:"iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar. Then use your iPad for drawing or editing with Apple Pencil or as a second display. Extend your workflow to new places, and when you return to your desk, Universal Control allows you to use one mouse or trackpad seamlessly across both devices.",
      img: "Images/IPad/Significant/mac.png",
  },
  {
    title: "iPad and Apple Watch",
    content:
      "iPad is perfect for seeing rich Health data tracked from Apple Watch and reviewing trends and highlights in your Health app on a larger display. You can also invite your loved ones to securely share their health information with you to give you peace of mind and stay connected to each other.",
    img: "Images/IPad/Significant/watch.png",
  },
];

const Significant = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
 useEffect(() => {
          AOS.init({
              duration: 1000,
              once: true,
              offset: 100,
          });
      }, []);

  return (
    <div className="px-6 sm:px-16 bg-gray-100">
      {/* Title Section */}
      <div data-aos="fade-up"
                data-aos-delay={100} className="pt-20 sm:pt-36 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4 sm:mb-0">
          Significant Others
        </h1>
      </div>

      {/* Card Section */}
      <div data-aos="fade-up"
                data-aos-delay={100} className=" bg-white mt-10  rounded-3xl pt-12 pb-12 px-8 sm:pt-16 sm:pb-16 sm:px-12 flex flex-col lg:flex-row items-start justify-between min-h-[32rem]">

        {/* Left: Accordion */}
        <div className="w-full lg:w-1/2 space-y-6">
          {sections.map((section, index) => (
            <div key={index} >
              {/* Title Row */}
              <button
                onClick={() => setActiveIndex(index)}
                className="flex justify-between items-center w-full text-left  text-xl sm:text-2xl font-semibold py-3 border-b border-gray-300"
              >
                <span>{section.title}</span>
                <i
                  className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {/* Content */}
              {activeIndex === index && (
                <div className="mt-4">
                  <p className="text-gray-700  leading-snug  text-md sm:text-lg sm:pr-28">
                    {section.content}
                  </p>

                  {/* Image below content (mobile only) */}
                  <div className="mt-6 block lg:hidden">
                    <img
                      src={section.img}
                      alt={section.title}
                      className="w-full rounded-2xl transition-all duration-500"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Image (large screen only) */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 hidden lg:flex justify-center">
          <img
            src={sections[activeIndex].img}
            alt={sections[activeIndex].title}
            className="w-[90%] max-w-lg transition-all duration-500 rounded-2xl"
          />
        </div>
      </div>

       <div className=" pt-28 sm:pt-36"></div>

    </div>
  );
};

export default Significant;
