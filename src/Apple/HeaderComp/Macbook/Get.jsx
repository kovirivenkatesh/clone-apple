import React from 'react';

const products = [
  {
    name: 'Performance and Battery Life',
    tag: 'Go fast. Go far.',
    img: 'Images/Mac/Get/performance.jpg',
    color:'white'
  },
  {
    name: 'Built for AI',
    tag: 'Smart. Secure. On device.',
    img: 'Images/Mac/Get/built.webp'
  },
  {
    name: 'macOS and Apple Intelligence',
    tag: 'Easy to use. Easy to love.',
    img: 'Images/Mac/Get/macos.webp'
  },
  {
    name: 'Mac + iPhone',
    tag: 'Together they work wonders.',
    img: 'Images/Mac/Get/mac+iphone.jpg'
  },
  {
    name: 'Compatibility',
    tag: 'Mac runs your favourite apps.',
    img: 'Images/Mac/Get/compatibility.jpg'
  },
  {
    name: 'Privacy and Security',
    tag: "Your business is nobody else's.",
    img: 'Images/Mac/Get/privacy.webp'
  },
  {
    name: 'Durability',
    tag: 'Built to stand the test of time.',
    img: 'Images/Mac/Get/durability.jpeg'
  },
  {
    name: 'Apple Values',
    tag: 'Our values drive everything we do.',
    img: 'Images/Mac/Get/earth.jpeg'
  },
];

const Get = () => {
  return (
    <div>
      <div className="pt-20 sm:pt-36 pl-6 sm:pl-16 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4 sm:mb-0">
          Get to know Mac.
        </h1>
      </div>

      {/* Cards */}
      <div className="pt-4 sm:pt-20 flex gap-6 overflow-x-auto no-scrollbar px-6 sm:px-20 pb-10 snap-x snap-mandatory scroll-smooth">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-[28px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 shrink-0 snap-center w-[290px] sm:w-[370px] h-[500px] sm:h-[600px] flex flex-col justify-start transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1"
          >
            {/* Background image */}
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>

            {/* Text at top */}
            <div className="relative z-10 px-6 pt-6 text-white">
              <p className="text-[14px] sm:text-[18px] leading-snug font-semibold tracking-tight">
                {item.name}
              </p>
              <p className="pt-1 text-[22px] sm:text-[26px] leading-snug tracking-tight">
                {item.tag}
              </p>
            </div>

            {/* + Button */}
            <button className="absolute bottom-4 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-3xl font-semibold hover:bg-gray-200 transition">
              +
            </button>
          </div>
        ))}
      </div>
      <div className=" pt-36 sm:pt-52"></div>
    </div>
  );
};

export default Get;
