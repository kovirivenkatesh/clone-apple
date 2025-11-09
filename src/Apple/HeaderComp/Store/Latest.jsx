import React from "react";

const Latest = () => {
   
    const products = [
        {
            name: "iPhone 17 Pro",
            tag: "All out Pro.",
            price: "From ₹134900.00",
            img: 'Images/Store/latest/iphone-17-pro.png',
            bg: "bg-black text-white",
        },
        {
            name: 'MacBook Pro 14"',
            tag: "Supercharged by M5.",
            price: "From ₹169900.00",
            img: 'Images/Store/latest/macbook-pro.png',
            bg: "bg-black text-white",
        },
        {
            name: "iPhone Air",
            tag: "The thinnest iPhone ever.",
            price: "From ₹119900.00",
            img: 'Images/Store/latest/iphone-air.png',
            bg: "bg-white text-black",
        },
        {
            name: "iPad Pro",
            tag: "Mmmmm. Power.",
            price: "From ₹99900.00",
            img: 'Images/Store/latest/ipad.png',
            bg: "bg-white text-black",
        },
        {
            name: "iPhone 17",
            tag: "Magichromatic.",
            price: "From ₹82900.00",
            img: 'Images/Store/latest/iphone -17.png',
            bg: "bg-black text-white",
        },
        {
            name: "Apple Watch Series 11",
            tag: "The ultimate way to watch your health.",
            price: "From ₹46900.00",
            img: 'Images/Store/latest/watch-s-11.png',
            bg: "bg-black text-white",
        },
        {
            name: "Apple Watch SE 3",
            tag: "Walk it. Talk it. Track it. Love it.",
            price: "From ₹25900.00",
            img: 'Images/Store/latest/watch.png',
            bg: "bg-white text-black",
        },
        {
            name: "Apple Watch Ultra 3",
            tag: "Personal beast.",
            price: "From ₹89900.00",
            img: 'Images/Store/latest/watch-ultra.png',
            bg: "bg-black text-white",
        },
        {
            name: "AirPods Pro 3",
            tag: "The world's best in-ear Active Noise Cancellation.",
            price: "From ₹25900.00",
            img: 'Images/Store/latest/airpods.png',
            bg: "bg-white text-black",
        },
        {
            name: "Explore iPhone Accessories",
            tag: "Explore iPhone Accessories",
            img: 'Images/Store/latest/accessories.png',
            bg: "bg-white text-black",
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            {/* Header */}
            <div className="px-6 sm:px-[100px] mb-6">
                <h1 className="font-bold text-[28px]">
                    The latest.{" "}
                    <span className="text-gray-600 font-bold">
                        Take a look at what’s new right now.
                    </span>
                </h1>
            </div>

            {/* Scroll Container */}
            <div className="relative w-full">
                <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-20 pb-6 snap-x snap-mandatory scroll-smooth ">
                    {products.map((item, idx) => (
                        <div
                            key={idx}
                            className={`group relative rounded-3xl ${item.bg} shrink-0 snap-center 
                                      w-[300px] sm:w-[360px] md:w-[400px] h-[480px] 
                                       flex flex-col justify-between overflow-hidden 
                                       transition-all duration-500 hover:shadow-lg hover:-translate-2`}
                        >
                            {/* Text content */}
                            <div className="px-6 pt-8 z-10">
                                <h2 className="text-2xl font-semibold mb-1">{item.name}</h2>
                                <p className="text-lg mb-2">{item.tag}</p>
                                {item.price && (
                                    <p className="text-sm opacity-80">{item.price}</p>
                                )}
                            </div>

                            {/* Image section (touching bottom) */}
                            <div className="relative flex justify-center items-end mt-auto h-[70%]">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="absolute bottom-0 w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Latest;
