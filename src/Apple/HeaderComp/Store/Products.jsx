import React from 'react'

const Products = () => {
 
  return (
    <div className="bg-gray-100">
      {/* Hero row */}
      <div className="max-w-7xl mx-auto px-6 sm:px-[100px] py-16 md:py-20 flex flex-col md:flex-row items-start justify-between gap-8">
        
        {/* Store title */}
        <h1 className="font-semibold tracking-tight leading-tight text-6xl md:text-7xl lg:text-8xl text-gray-900">
          Store
        </h1>

        {/* Right side text */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="font-semibold text-base md:text-2xl lg:text-3xl text-gray-800 leading-snug mb-3">
            The best way to buy the <br /> products you love.
          </h2>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline inline-flex items-center gap-1"
          >
            Find an Apple Store
            <span className="ml-1 text-blue-600 text-sm font-semibold">↗</span>
          </a>
        </div>
      </div>

      {/* Product list section */}
      <div className="relative max-w-7xl mx-auto p-6 sm:pl-36 pb-14">
        <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar py-6">
          {[
            { name: 'Mac', img: 'Images/Store/store/MacBook.png'},
            { name: 'iPhone', img: 'Images/Store/store/iPhone.png'},
            { name: 'iPad', img: 'Images/Store/store/iPad.png'},
            { name: 'Apple Watch', img: 'Images/Store/store/AppleWatch.png'},
            { name: 'AirPods', img: 'Images/Store/store/AirPods.png'},
            { name: 'AirTag', img: 'Images/Store/store/AirTag.png'},
            { name: 'Apple TV 4K', img: 'Images/Store/store/Apple TV 4K.png'},
            { name: 'HomePod', img: 'Images/Store/store/HomePod.png'},
            { name: 'Accessories', img: 'Images/Store/store/Accessories.png'},
          ].map((item, idx) => (
            <div
              key={item.name + idx}
              className="flex flex-col items-center shrink-0 cursor-pointer w-20 md:w-28"
            >
              <div className="flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 sm:w-32 sm:h-32 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-1 text-xs md:text-base font-semibold text-gray-800 text-center hover:underline">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
