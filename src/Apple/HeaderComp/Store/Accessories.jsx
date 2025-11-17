import React from "react";

const Accessories = () => {
 
  const products = [
    {
      type: "promo",
      title:'In with the new',
      tag:'In accessories you love.In a new mix of colours and textures.',
      img: 'Images/Store/Accessories/mixture.png',
    },
    {
      type: "product",
      new:true,
      name:'iPhone 17 Pro Max TechWoven Case with MagSafe-Blue',
     price:'MRP ₹5900.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/iPhone 17 pro max.png',
      
    },
    {
      type: "product",
      new:true,
      name:'iPhone 17 Pro Sicicone Case with MagSafe-Orange',
      price:'MRP ₹4900.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/iPhone 17 pro.png',
      
    },
    {
      type: "product",
      new:true,
      name:'Magic Keyboard for iPad Air 13"(M3)-US English-Black',
      price:'MRP ₹29900.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/Magic Keyboard.png',
      
    },
    {
      type: "product",
      new:true,
     name:'Crossbody Strap-Light Blue',
     price:'MRP ₹5900.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/strap.png',
      
    },
    {
      type: "product",
      new:true,
      name:'iPhone Air Bumper-Light Blue',
      price:'MRP ₹3900.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/AirBumper.png',
      
    },
        {
          type: "product",
          new:true,
      name:'46mm Neon Yellow Sport Loop',
      price:'MRP ₹3900.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/Loop.png',
      
    },
        {
          type: "product",
          new:true,
      name:'46mm Anchor Blue Sport Band -M/L',
      price:'MRP ₹4500.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/band.png',
      
    },
        {
          type: "product",
          new:true,
      name:'iPhone Air MagSafe Battery',
      price:'MRP ₹11900.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/battery.png',
      
    },
        {
          type: "product",
          new:true,
      name:'MagSafe Charger (2m)',
      price:'MRP ₹5500.00 (Incl.of all taxes)',
      img: 'Images/Store/Accessories/charger.png',
      
    },
        {
           type: "promoLast",
       title:'Explore all Acccessories.',
      img: 'Images/Store/Accessories/all accessories.png',
      
    },
  ];

  return (
    <div className="bg-gray-100 pb-2">
      {/* Header */}
      <div className="px-6 sm:px-[100px] mb-6">
        <h1 className="font-bold text-[28px]">
          Accessories.{" "}
          <span className="text-gray-600 font-bold">
            Essentials that pair perfectly with your favourite devices.
          </span>
        </h1>
      </div>

      {/* Scrollable product cards */}
       <div className="relative w-full">
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 sm:px-20 pb-10 snap-x snap-mandatory scroll-smooth">
        {products.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-[28px] border border-gray-100 shrink-0 snap-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 
              ${
                item.type === "promo"
                  ? " w-[300px] sm:w-[400px] h-[500px] p-8 flex flex-col justify-between"
                  : item.type === "promoLast"
                  ? "w-[400px] h-[500px] p-8 flex flex-col justify-between"
                  : "w-[300px] h-[500px] p-6 flex flex-col justify-between"
              }`}
          >
            {/* Top text block */}
            {item.type === "promo" && (
              <>
                <div>
                  <h2 className="font-semibold text-3xl text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-md leading-snug">{item.tag}</p>
                </div>
                <div className="relative flex justify-center items-end mt-auto h-[70%]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute bottom-0 w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
              </>
            )}

            {item.type === "product" && (
              <>
                <div className="flex justify-center items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-contain w-[300px] h-[260px] mt-4 pt-8"
                  />
                </div>
                <div>
                  {item.new && (
                    <p className="text-orange-500 text-sm font-semibold mb-1">
                      New
                    </p>
                  )}
                  <p className="text-[17px] font-semibold leading-snug text-gray-900">
                    {item.name}
                  </p><br/>
                  <p className="text-gray-600 text-sm mt-1">{item.price}</p>
                </div>
              </>
            )}

            {item.type === "promoLast" && (
              <>
                <div className="mb-4">
                  <h2 className="font-semibold text-3xl text-gray-900 mb-2 pt-8">
                    {item.title}
                  </h2>
                </div>
                <div className="flex justify-center items-center mt-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-[240px]"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Accessories;
