import React from "react";

const SpecialStore = () => {
    
    const products = [
      
        {
            name: "EDUCATION",
            tag: "Buy a new Mac or iPad with education savings.",
            img: 'Images/Store/SpecialStore/macbook.png',
            text: "text-black",
        }
    ];

   return (
    <div className="bg-gray-100 py-10">
      {/* Header */}
      <div className="px-6 sm:px-[100px] mb-6">
        <h1 className="font-bold text-[28px]">
         Special stores. {" "}
          <span className="text-gray-600 font-bold">
            Exclusive savings for students and educators.
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
    w-[300px] sm:w-[340px] md:w-[400px] h-[500px]
    flex flex-col justify-between overflow-hidden 
    bg-white shadow-lg 
    transition-all duration-500 hover:-translate-y-2`}
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
                  <h4 className="text-sm font-semibold mb-1 min-h-[20px]">
                    {item.name || ""}
                  </h4>
                  <p className="text-xl sm:text-3xl mb-12 font-semibold min-h-[60px]">
                    {item.tag}
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

export default SpecialStore;
