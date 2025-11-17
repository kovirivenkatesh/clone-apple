import React from "react";

const products = [
  { name: "MacBook Air", img: "Images/Mac/MacHeader/macbookair.png" },
  { name: "MacBook Pro", img: "Images/Mac/MacHeader/macbookpro.png" },
  { name: "iMac", img: "Images/Mac/MacHeader/imac.png" },
  { name: "Mac mini", img: "Images/Mac/MacHeader/macmini.png" },
  { name: "Mac Studio", img: "Images/Mac/MacHeader/macstudio.png" },
  { name: "Mac Pro", img: "Images/Mac/MacHeader/macpro.png" },
  { name: "Compare", img: "Images/Mac/MacHeader/compare.png" },
  { name: "Displays", img: "Images/Mac/MacHeader/displays.png" },
  { name: "Accessories", img: "Images/Mac/MacHeader/accessories.png" },
  { name: "macOS", img: "Images/Mac/MacHeader/macos.png" },
  { name: "Shop Mac", img: "Images/Mac/MacHeader/shop-mac.png" },
];

const MacHeader = () => {
  return (
    <div className="bg-white w-full border-b border-gray-200 py-2">
      <div className="flex justify-center">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar px-6 sm:px-16 py-3 scroll-smooth whitespace-nowrap">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center min-w-[70px]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 object-contain mb-1"
              />
              <p className="text-[11px] sm:text-xs text-gray-800 hover:text-blue-600 cursor-pointer font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MacHeader;