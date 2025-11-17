import React, { useState } from "react";

const sections = [
  {
    title: "Mac and iPhone",
    content:
      "Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.",
    img: "Images/Mac/Unlock/iphone.png",
  },
  {
    title: "Mac and iPad",
    content:
      "Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start a Final Cut Pro project on your iPad and continue it on y⁠o⁠u⁠r⁠ ⁠M⁠a⁠c⁠.",
    img: "Images/Mac/Unlock/ipad.png",
  },
  {
    title: "Mac and Apple Watch",
    content:
      "Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password t⁠y⁠p⁠i⁠n⁠g⁠ ⁠i⁠s⁠ ⁠r⁠e⁠q⁠u⁠i⁠r⁠e⁠d⁠.",
    img: "Images/Mac/Unlock/mac-watch.png",
  },
];

const Unlock = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-6 sm:px-16">
      {/* Title Section */}
      <div className="pt-20 sm:pt-36 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4 sm:mb-0">
          Unlock the world of Apple.
        </h1>
        <button className="hover:underline text-blue-500 text-md sm:text-lg pr-4 sm:pr-0">
          Learn how Apple devices work better together <span>&gt;</span>
        </button>
      </div>

      {/* Card Section */}
      <div className="mt-10 bg-gray-100 rounded-3xl pt-12 pb-12 px-8 sm:pt-16 sm:pb-16 sm:px-12 flex flex-col lg:flex-row items-start justify-between min-h-[32rem]">

        {/* Left: Accordion */}
        <div className="w-full lg:w-1/2 space-y-6">
          {sections.map((section, index) => (
            <div key={index}>
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

export default Unlock;
