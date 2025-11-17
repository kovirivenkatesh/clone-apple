import React, {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    name: 'iPad Pro',
    subTag: 'The ultimate iPad experience with the most advanced technology.',
    price: 'From ₹99900.00** <br/> or ₹15983.00/mo. for 6 mo.*',
    img: 'public/Images/IPad/IPad/ipad pro.png'
  },
  {
    name: 'iPad Air',
    subTag: 'Serious performance in a thin and light design.',
    price: 'From ₹59900.00** <br/> or ₹9317.00/mo. for 6 mo.*',
    img: 'public/Images/IPad/IPad/ipad air.png'
  },
  {
    name: 'iPad',
    subTag: 'The colourful, all-screen iPad for the things you do every day.',
    price: 'From ₹34900.00** <br/> or ₹5317.00/mo. for 6 mo.*',
    img: 'public/Images/IPad/IPad/ipad.png'
  },
  {
    name: 'iPad mini',
    subTag: 'The full iPad experience in an ultra-portable design.',
    price: 'From ₹49900.00** <br/> or ₹7817.00/mo. for 6 mo.*',
    img: 'public/Images/IPad/IPad/ipad mini.png'
  }
]

const IPad = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  }, []);

  return (
    <div>
      <div data-aos="fade-up" data-aos-delay={100}  className="pt-14 sm:pt-20 pl-6 sm:pl-16 font-semibold">
        <h1 className="text-5xl sm:text-7xl">iPad</h1>
      </div>

      {/* Product cards */}
      <div className="flex items-start gap-8 overflow-x-auto no-scrollbar px-6 sm:px-16 pt-12 scroll-smooth">
        {products.map((product) => (
          <div
            key={product.name}  data-aos="fade-up" data-aos-delay={100}
            className=" p-4  text-center w-full sm:w-96 break-words flex-shrink-0"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-105 hover:-translate-y-1  bg-gray-100"
            />
            <h2 className="mt-10 text-xl sm:text-3xl font-semibold break-words">{product.name}</h2>
            {product.tag && <p className="text-lg font-semibold break-words">{product.tag}</p>}
            <p className="mt-2 text-gray-700  text-md sm:text-lg break-words">{product.subTag}</p>
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

       <div className="pt-36 sm:pt-52"></div>
       
    </div>
  );
};

export default IPad;