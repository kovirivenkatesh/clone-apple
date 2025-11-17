import React from 'react'

const products = [
  {
    name: 'Mac accessories',
    details: "Explore keyboards, mice and other essentials.",
    button: 'Shop Mac accessories',
    img: 'Images/Mac/Essentials/accessories.png'
  },
  {
    name: 'Studio Display',
    details: 'The 68.29 cm (27") 5K Retina display pairs beautifully with any Mac.',
    button: 'Learn more',
    img: 'Images/Mac/Essentials/display.png'
  }
]

const Essentials = () => {
  return (
    <div className="bg-gray-100">
      {/* Section heading */}
      <div className="pt-20 sm:pt-36 pl-6 sm:pl-16 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4 sm:mb-0">
          Mac Essentials.
        </h1>
      </div>

      {/* Scrollable cards */}
      <div className="pt-4 sm:pt-20">
        <div className="flex gap-6 overflow-x-auto no-scrollbar pl-6 pr-6 sm:pr-0 sm:pl-16 pb-10 snap-x snap-mandatory scroll-smooth">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[28px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_8px_20px_rgba(0,0,0,0.06)]
                         border border-gray-100 shrink-0 snap-center w-[290px] sm:w-[550px] h-[500px] sm:h-[600px]
                         flex flex-col items-center justify-center transition-all duration-300
                         hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              {/* Text content */}
              <div className="flex flex-col items-center text-center px-6 pb-16">
                <h2 className="text-3xl font-semibold mb-2">{item.name}</h2>
                <p className="mb-4 text-lg sm:px-12">{item.details}</p>
                <button className="text-blue-600 hover:underline font-medium text-lg">
                  {item.button} <span className="ml-1 text-xl">&gt;</span>
                </button>
              </div>

              {/* Image */}
              <div className="mt-6 flex justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[180px] sm:h-[300px] w-[800px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

       <div className=" pt-36 sm:pt-32"></div>

    </div>
  )
}

export default Essentials
