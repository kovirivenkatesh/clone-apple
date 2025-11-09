import React from "react";

const Help = () => {
  
    const products = [
        {
            tag: "Shop with a Specialist over video.",
            subTag: "Choose your next device in a guided, one-way video session.",
            img: 'Images/Store/help/specialist video.jpeg',
            text: "text-black",
        },
        {
            name: "APPLE SPECIALIST",
            tag: "Shop one on one with a Specialist online",
            img: 'Images/Store/help/specialist help.jpeg',
            text: "text-black",
        },
        {
            name: "TODAY AT APPLE",
            tag: "Explore Apple Intelligence",
            subTag: "Come and try it for yourself in a free session at the Apple Store",
            img: 'Images/Store/help/taa (2).jpeg',
            text: "text-black",
        },
        {
            name: "TODAY AT APPLE",
            tag: "Join free sessions at your Apple Store.",
            subTag:
                "Learn about the latest features and how to go further with your Apple devices.",
            img: 'Images/Store/help/TAA.jpeg',
            text: "text-black",
        },
        {
            name: "SMALL BUSINESS",
            tag: "From enterprise to small business, we'll work with you.",
            img: 'Images/Store/help/business.jpeg',
            text: "text-white",
        },
        {
            name: "PERSONAL SETUP",
            tag: "Set up your new device with help from a Specialist.",
            subTag:
                "Let us guide you through data transfer, the latest features and more, in an online, one-to-one session.",
            img: 'Images/Store/help/personal setup.jpeg',
            text: "text-black",
        },
        {
            name: "WATCH AND LEARN",
            tag: "Need support? Our teams are here for you.",
            img: 'Images/Store/help/app.jpeg',
            text: "text-black",
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            {/* Header */}
            <div className="px-6 sm:px-[100px] mb-6">
                <h1 className="font-bold text-[28px]">
                    Help is here.{" "}
                    <span className="text-gray-600 font-bold">
                        Whenever and however you need it.
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
                                w-[300px] sm:w-[440px] md:w-[460px] h-[480px]
                                flex flex-col justify-between overflow-hidden 
                                transition-all duration-500 hover:shadow-lg hover:-translate-y-2`}
                        >
                            {/* Background Image */}
                            <img
                                src={item.img}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                            {/* Text content */}
                            <div className={`relative z-10 px-6 pt-8 ${item.text}`}>
                                {item.name && (
                                    <h3 className="text-sm font-semibold mb-1">
                                        {item.name}
                                    </h3>
                                )}
                                <p className="text-3xl mb-2 font-semibold">{item.tag}</p>
                                {item.subTag && (
                                    <p className="text-lg opacity-90">{item.subTag}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Help;
