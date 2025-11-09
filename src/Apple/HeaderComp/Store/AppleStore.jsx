import React from "react";

const AppleStore = () => {
  
  const products = [
    {
      rest: "No Cost EMI.§ Plus Instant Cashback.§§",
      img: 'Images/Store/AppleStore/EMI.png',
      size: "w-[52px] h-[52px]",
    },
    {
      highlight: "Exchange your smartphone,",
      rest: " get ₹3350.00–₹64000.00 in credit towards a new one.*",
      color: "text-blue-600",
      img: 'Images/Store/AppleStore/Exchange.png',
      size: "w-[60px] h-[60px]",
    },
    {
      highlight: "Customise  your Mac.",
      color: "text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-green-500",
      img: 'Images/Store/AppleStore/Mac.png',
      size: "w-[60px] h-[60px]",
    },
    {
      highlight: "Make them yours.",
      rest: " Engrave a mix of emoji, names and numbers for free.",
      color: "text-purple-600",
      img: 'Images/Store/AppleStore/Emoji.png',
      size: "w-[52px] h-[52px]",
    },
    {
      highlight: "Enjoy free delivery,or easy pickup",
      rest: "  from an Apple Store.",
      color: "text-rose-500",
      img: 'Images/Store/AppleStore/Delivery.png',
      size: "w-[52px] h-[52px]",
    },
    {
      highlight: "Trade in your eligible Mac,Apple Watch or iPad for instant credit.",
      rest: " In-store only.",
      color: "text-blue-500",
      img: 'Images/Store/AppleStore/Exchange.png',
      size: "w-[52px] h-[52px]",
    },
  ];

  return (
    <div className="bg-gray-100 py-6">
      {/* Header */}
      <div className="px-6 sm:px-[100px] mb-12">
        <h1 className="font-semibold text-[28px] text-gray-900 leading-snug">
          The Apple Store difference.{" "}
          <span className="text-gray-600 font-bold">
            Even more reasons to shop with us.
          </span>
        </h1>
      </div>

      {/* Cards */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 sm:px-20 pb-10 snap-x snap-mandatory scroll-smooth">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[28px] shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_8px_20px_rgba(0,0,0,0.06)]
              border border-gray-100 shrink-0 snap-center 
              w-[300px] h-[250px] flex flex-col justify-start px-10 py-6
              transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="mb-2">
              <img
                src={item.img}
                alt="icon"
                className={`${item.size} object-contain`}
              />
            </div>

            {/* Text */}
            <p className="text-[22px] leading-snug font-semibold tracking-tight text-gray-900">
              <span className={item.color}>{item.highlight}</span>
              <span>{item.rest}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleStore;
