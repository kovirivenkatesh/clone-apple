import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Best = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const products = [
    {
      tag: "Monthly payment options are available.",
      subTag:
        "Choose an easy way to finance with convenient payment options.",
      img: "Images/Mac/Best/monthly-payment.png",
    },
    {
      tag: "Save with Apple Trade In.",
      subTag: "Get credit towards your next iPad when you trade in an eligible device at an Apple Store. ",
      img: "Images/Mac/Best/save.png",
    },
    {
      tag: "Save on a new iPad with education pricing.",
      subTag: "Available to college students and educators.",
      img: "Images/Mac/Best/education.png",
    },
    {
      tag: "Meet your new iPad with Personal Setup.",
      subTag:
        "Jump into online sessions with a Specialist to set up your iPad and discover new features.",
      img: "Images/Mac/Best/join.png",
    },
    {
      tag: "Get flexible delivery and easily pickup.",
      subTag: "Get free delivery or pickup at your Apple Store.",
      img: "Images/Mac/Best/delivery.png",
    },
    {
      tag: "Shop live with a Specialist",
      subTag:
        "Let us guide you live over video and answer all of your questions.",
      img: "Images/Mac/Best/shop.png",
    },
    
    {
      tag: "Explore a shopping experience designed around you.",
      subTag:
        "Use the Apple Store app to get a more personal way to shop.",
      img: "Images/Mac/Best/explore.png",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div  data-aos="fade-up" 
            data-aos-delay={100} className="pt-28 pl-6 sm:pl-16 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4 sm:mb-0">
          Why Apple is the best <br /> place to buy iPad.
        </h1>

        <button className="text-blue-600 hover:underline font-medium flex items-center sm:pr-16">
          Shop iPad <span className="ml-2 text-xl">&gt;</span>
        </button>
      </div>

      {/* Cards */}
      <div className="pt-20 flex gap-6 overflow-x-auto no-scrollbar px-6 sm:px-20 pb-10 snap-x snap-mandatory scroll-smooth">
        {products.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up" 
            data-aos-delay={idx * 100} 
            className="relative bg-white rounded-[28px] shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_8px_20px_rgba(0,0,0,0.06)]
              border border-gray-100 shrink-0 snap-center 
              w-[290px] sm:w-[370px] h-[300px] flex flex-col justify-start px-10 py-6
              transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="mb-2">
              <img
                src={item.img}
                alt="icon"
                className="h-20 w-20 object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-[20px] sm:text-[24px] leading-snug font-semibold tracking-tight text-gray-900">
              {item.tag}
            </p>
            <p className="pt-2 text-md sm:text-lg leading-snug tracking-tight text-gray-900">
              {item.subTag}
            </p>

            <button className="absolute bottom-4 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-3xl font-semibold hover:bg-gray-900 transition">
              +
            </button>
          </div>
        ))}
      </div>

      <div className="pt-36 sm:pt-52"></div>
    </div>
  );
};

export default Best;
