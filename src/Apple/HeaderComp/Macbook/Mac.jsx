import React, { useState } from "react";

const products = [{
  name: 'MacBook Air 13” and 15”',
  tag: 'M4 chip',
  subTag: 'Strikingly thin and fast so you can work, play or create anywhere.',
  price: 'From ₹99900.00**<br/> or ₹14983.00/mo. for 6 mo.*',
  img:'public/Images/Mac/Mac/mba.png'
},
{
  name: 'MacBook Pro 14” and 16”',
  tag: 'M5, M4 Pro or M4 Max chip',
  subTag: 'The most advanced Mac laptops for demanding workflows.',
  price: 'From ₹169900.00** <br/> or ₹26650.00/mo. for 6 mo.*',
  img:'public/Images/Mac/Mac/mbp.png'
},
{
  name: 'iMac',
  tag: 'M4 chip',
  subTag: 'A stunning all-in-one desktop for creativity and productivity.',
  price: 'From ₹99900.00** <br/> or ₹14983.00/mo. for 6 mo.*',
  img:'public/Images/Mac/Mac/imac.png'
},
{
  name: 'Mac mini',
  tag: 'M4 or M4 Pro chip',
  subTag: 'The mini-est, most affordable Mac with mighty performance.',
  price: 'From ₹59900.00** <br/> or ₹9317.00/mo. for 6 mo.*',
   img:'public/Images/Mac/Mac/macmini.png'
},
{
  name: 'Mac Studio',
  tag: 'M4 Max or M3 Ultra chip',
  subTag: 'Powerful performance and extensive connectivity for pro workflows.',
  price: 'From ₹214900.00** <br/> or ₹34150.00/mo. for 6 mo.*',
   img:'public/Images/Mac/Mac/macstudio.png'
},
{
  name: 'Mac Pro',
  tag: 'M2 Ultra chip',
  subTag: 'A pro workstation with PCIe expansion for demanding workflows.',
  price: 'From ₹729900.00** <br/> or ₹127386.00/mo. for 6 mo.*',
   img:'public/Images/Mac/Mac/macpro.png'
},
{
  name: 'Studio Display',
  subTag: 'A 5K Retina display with stellar camera and audio.',
  price: 'From ₹159900.00** <br/>  or ₹27907.00/mo. for 6 mo.*',
   img:'public/Images/Mac/Mac/studio-display.png'
},
{
  name: 'Pro Display XDR',
  subTag: 'An advanced 6K XDR display for pro workflows.',
  price: 'From ₹449900.00** <br/> or ₹78519.00/mo. for 6 mo.**',
   img:'public/Images/Mac/Mac/prodisplay.png'
}
]

const Mac = () => {
  const buttons = ["All Products", "Laptops", "Desktops", "Displays"];
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="pt-14 sm:pt-20 pl-6 sm:pl-16 font-semibold">
        <h1 className="text-5xl sm:text-7xl">Mac</h1>
      </div>

      <div className="pt-16 sm:pt-20 flex justify-center sm:justify-start sm:pl-16">
        <div className="flex bg-gray-200 rounded-3xl overflow-x-auto sm:overflow-visible scroll-smooth scrollbar-hide p-1">
          {buttons.map((btn, index) => (
            <button
              key={btn}
              onClick={() => setActive(index)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-3xl transition-all duration-300
                ${active === index
                  ? "bg-black text-white"
                  : "text-black hover:text-gray-700"
                }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Product cards */}
      <div className="flex items-start gap-8 overflow-x-auto no-scrollbar px-6 sm:px-16 pt-12 scroll-smooth">
        {products.map((product) => (
          <div
            key={product.name}
            className="border rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300 text-center w-full sm:w-96 break-words flex-shrink-0"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto rounded-xl bg-gray-100"
            />
            <h2 className="mt-4 text-2xl font-semibold break-words">{product.name}</h2>
            {product.tag && <p className="text-lg font-semibold break-words">{product.tag}</p>}
            <p className="mt-2 text-gray-700 text-lg break-words">{product.subTag}</p>
            <p
              className="mt-4 text-lg font-semibold break-words"
              dangerouslySetInnerHTML={{ __html: product.price }}
            />
            <div className="mt-4 flex gap-8 justify-center pt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-500 transition-colors">
                Learn more
              </button>
              <button className="text-blue-600 hover:underline">Buy &gt;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mac;