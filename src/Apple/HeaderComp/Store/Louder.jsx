import React from "react";

const Louder= () => {
 
  const products = [
    {
      type: "promo",
      title:'Get 3 months of Apple Music free.',
      tag:'Included with the purchase of selected Apple devices.',
      img: 'Images/Store/Louder/store-card.png',
    },
    {
      type: "product",
      new:true,
      name:'AirPods Pro 3',
     price:'MRP ₹25900.00 (Incl.of all taxes)',
      img: 'Images/Store/Louder/airpods pro 3.png', 
    },
    {
      type: "product",
      new:true,
      name:'AirPods 4 with Active Noise Cancellation',
      price:'MRP ₹17900.00 (Incl.of all taxes)',
      img: 'Images/Store/Louder/airpods 4.png',
      
    },
    {
      type: "product",
      new:true,
      name:'Powerbeast fit-Wireless Fitness Earbuds with Secure...',
      price:'MRP ₹24900.00 (Incl.of all taxes)',
      img: 'Images/Store/Louder/ME2M4.png',
      
    },
    {
      type: "product",
      new:true,
     name:'AirPods Max - Midnight',
     price:'MRP ₹59900.00 (Incl.of all taxes)',
      img: 'Images/Store/Louder/airpods max.png',
      
    },
    {
      type: "product",
      new:true,
      name:'HomePod - Midnight',
      price:'MRP ₹32900.00 (Incl.of all taxes)',
      img: 'Images/Store/Louder/homepod midnight.png',
      
    },
        {
          type: "product",
          new:true,
      name:'Powerbeats Pro 2- High- Performance Earbuds-Elect...',
      price:'MRP ₹29900.00 (Incl.of all taxes)',
      img: 'Images/Store/Louder/MX743.png',
      
    },
        {
          type: "product",
          new:true,
      name:'HomePod mini - Orange',
      price:'MRP ₹10900.00 (Incl.of all taxes)',
      img: 'Images/Store/Louder/homepod mini.png',
      
    },
        {
          type: "product",
          new:true,
      name:'Beats Pill - Wireless Bluetooth Speaker-...',
      price:'MRP ₹16900.00 (Incl.of all taxes)',
      img: 'Images/Store/Louder/MW463.png',
      
    }
  ];

  return (
    <div className="bg-gray-100 pb-2">
      {/* Header */}
      <div className="px-6 sm:px-[100px] mb-6">
        <h1 className="font-bold text-[28px]">
         Loud and clear. {" "}
          <span className="text-gray-600 font-bold">
             Unparalleled choices for rich, high-quality sound.
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

export default Louder;
