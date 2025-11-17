import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    name: 'Apple Pencil',
    details: "Dream it up. Jot it down.",
    button: 'Learn more',
    img: 'Images/IPad/Essentials/pencil.png'
  },
  {
    name: 'Keyboards for iPad',
    details: 'Type it out. Take it with you.',
    button: 'Learn more',
    img: 'Images/IPad/Essentials/magic.png'
  }
]

const Essentials = () => {

    useEffect(() => {
          AOS.init({
              duration: 1000,
              once: true,
              offset: 100,
          });
      }, []);

  return (
    <div className="bg-gray-100">
     
      <div  data-aos="fade-up"
                data-aos-delay={100} className="pt-20 sm:pt-36 pl-6 sm:pl-16 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4 sm:mb-0">
          iPad Essentials.
        </h1>
      </div>

     
      <div className="pt-4 sm:pt-20">
        <div className="flex gap-6 overflow-x-auto no-scrollbar pl-6 pr-6 sm:pr-0 sm:pl-16 pb-10 snap-x snap-mandatory scroll-smooth">
          {products.map((item, idx) => (
            <div
              key={idx}  data-aos="fade-up"
                data-aos-delay={100} 
              className={`relative bg-white rounded-[28px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_8px_20px_rgba(0,0,0,0.06)]
                         border border-gray-100 shrink-0 snap-center w-[290px] sm:w-[550px] h-[500px] sm:h-[600px]
                         flex flex-col justify-between transition-all duration-300
                         hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1`}
            >
            
              {idx === 0 ? (
                <>
                 
                  <div className="flex flex-col items-center text-center px-8 pt-10 sm:pt-14 pb-6">
                    <h2 className="text-3xl font-semibold mb-2">{item.name}</h2>
                    <p className="mb-4 text-lg sm:px-12">{item.details}</p>
                    <button className="text-blue-600 hover:underline font-medium text-lg">
                      {item.button} <span className="ml-1 text-xl">&gt;</span>
                    </button>
                  </div>
                  <div className="w-full flex justify-center mt-auto pb-16 sm:pb-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-[200px] sm:h-[400px] w-full object-cover object-bottom"
                    />
                  </div>
                </>
              ) : (
                <>
                 
                  <div className="w-full flex justify-center mb-auto ">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-[200px] sm:h-[350px] w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center px-8 pb-16 sm:pb-14 pt-6">
                    <h2 className="text-3xl font-semibold mb-2">{item.name}</h2>
                    <p className="mb-4 text-lg sm:px-12">{item.details}</p>
                    <button className="text-blue-600 hover:underline font-medium text-lg">
                      {item.button} <span className="ml-1 text-xl">&gt;</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-36 sm:pt-32"></div>
    </div>
  )
}

export default Essentials
