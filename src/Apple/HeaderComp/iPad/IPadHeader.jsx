
import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  { name: "iPadPro", img: "Images/IPad/IPadHeader/ipad-air.png" },
  { name: "iPad Air", img: "Images/IPad/IPadHeader/ipad-air.png" },
  { name: "iPad", img: "Images/IPad/IPadHeader/ipad.png" },
  { name: "iPad mini", img: "Images/IPad/IPadHeader/ipad mini.png" },
  { name: "Compare", img: "Images/IPad/IPadHeader/compare.png" },
  { name: "Apple Pencil", img: "Images/IPad/IPadHeader/pencil.png" },
  { name: "Keyboards", img: "Images/IPad/IPadHeader/keyboard.png" },
  { name: "Accessories", img: "Images/IPad/IPadHeader/accessories.png" },
  { name: "iPadOS 26", img: "Images/IPad/IPadHeader/ipad os.png" },
  { name: "Shop iPad", img: "Images/IPad/IPadHeader/shop.png" }
 
];

const IPadHeader = () => {

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true,
            offset:100
        })
    },[]);

  return (
    <div className="bg-white  py-2">
      <div data-aos="fade-left" data-aos-delay={100}  className="flex justify-center">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-6 sm:px-16 py-3 scroll-smooth whitespace-nowrap">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center min-w-[70px]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 object-contain mb-1"
              />
              <p className="text-[11px] sm:text-xs text-gray-800 hover:text-blue-600 cursor-pointer font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPadHeader;