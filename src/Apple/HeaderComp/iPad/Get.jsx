import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
    {
        name: 'iPadOS + Apps',
        tag: 'Everyday superpowers. Built right in.',
        img: 'Images/IPad/Get/performance.jpg',
        color: 'white'
    },
    {
        name: 'Apple Intelligence',
        tag: 'Personal,private,powerful.',
        img: 'Images/IPad/Get/built.webp'
    },
    {
        name: 'productivity',
        tag: 'Your workplace can be any place.',
        img: 'Images/IPad/Get/productivity.jpg'
    },
    {
        name: 'Creativity',
        tag: 'Take your inner artist out and about.',
        img: 'Images/IPad/Get/creativity.jpg'
    },
    {
        name: 'Learning',
        tag: 'Your classroom can be anywhere.',
        img: 'Images/IPad/Get/compatibility.jpg'
    },
    {
        name: 'Entertainment',
        tag: "Kick back.Tune in. Game on.",
        img: 'Images/IPad/Get/privacy.webp'
    },
    {
        name: 'Apple Pencil',
        tag: 'Dream it up.Jot it down.',
        img: 'Images/IPad/Get/ipad pro.jpg'
    }
];

const Get = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div>
            <div data-aos="fade-up"
                data-aos-delay={100} className=" pt-20 sm:pt-36 pl-6 sm:pl-16 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
                <h1 className="text-4xl sm:text-5xl font-semibold mb-4 sm:mb-0">
                    Get to know iPad.
                </h1>
            </div>

            {/* Cards */}
            <div className="pt-4 sm:pt-20 flex gap-6 overflow-x-auto no-scrollbar px-6 sm:px-20 pb-10 snap-x snap-mandatory scroll-smooth">
                {products.map((item, idx) => (
                    <div
                        key={idx}  data-aos="fade-up"
                data-aos-delay={100}
                        className="relative bg-black rounded-[28px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 shrink-0 snap-center w-[290px] sm:w-[370px] h-[500px] sm:h-[600px] flex flex-col justify-start transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                    >
                        {/* Background image */}
                        <img
                            src={item.img}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>

                        {/* Text at top */}
                        <div className="relative z-10 px-6 pt-6 text-white">
                            <p className="text-[14px] sm:text-[18px] leading-snug font-semibold tracking-tight">
                                {item.name}
                            </p>
                            <p className="pt-1 text-[22px] sm:text-[26px] leading-snug tracking-tight">
                                {item.tag}
                            </p>
                        </div>

                        {/* + Button */}
                        <button className="absolute bottom-4 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-3xl font-semibold hover:bg-gray-200 transition">
                            +
                        </button>
                    </div>
                ))}
            </div>
            <div className=" pt-36 sm:pt-52"></div>
        </div>
    );
};

export default Get;
