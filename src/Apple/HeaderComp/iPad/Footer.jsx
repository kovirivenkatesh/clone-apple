import React, { useState } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      title: "Shop and Learn",
      links: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Apple Wallet",
      links: ["Wallet"],
    },
    {
      title: "Account",
      links: [
        "Manage Your Apple Account",
        "Apple Store Account",
        "iCloud.com",
      ],
    },
    {
      title: "Entertainment",
      links: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
      ],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Summer Camp",
        "Ways to Buy",
        "Apple Trade In",
        "Recycling Programme",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business"],
    },
    {
      title: "For Education",
      links: [
        "Apple and Education",
        "Shop for Education",
        "Shop for College",
      ],
    },
    {
      title: "For Healthcare",
      links: ["Apple in Healthcare", "Health on Apple Watch"],
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Environment", "Privacy", "Supply Chain"],
    },
    {
      title: "About Apple",
      links: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[13px] leading-snug">
      <div className="max-w-7xl mx-auto px-10 md:px-12 pt-6">
        {/* Top Divider */}
        <hr className="border-gray-300 mb-1 sm:w-5/6 mx-auto" />


        {/* Breadcrumb */}
        <div className="flex items-center sm:pl-20  gap-2 mb-2 sm:mb-6 text-sm">
          <span className="font-bold text-lg">
            <i className="fa-brands fa-apple"></i>
          </span>
          <span className="text-gray-500">{'>'}</span>
          <span>iPad</span>
        </div>

        <hr className="border-gray-300 mb-1 block sm:hidden" />

        {/* Large Screen Layout */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 mb-8 px-20">
          {/* Column 1 */}
          <div>
            <h4 className="sm:font-semibold text-black mb-1">Shop and Learn</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Store</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Mac</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">iPad</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">iPhone</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Watch</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">AirPods</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">TV & Home</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">AirTag</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Accessories</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Gift Cards</a></li>
            </ul>

            <h4 className="sm:font-semibold text-black mt-3 mb-1">Apple Wallet</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Wallet</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="sm:font-semibold text-black mb-1">Account</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Manage Your Apple Account</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple Store Account</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">iCloud.com</a></li>
            </ul>

            <h4 className="sm:font-semibold text-black mt-3 mb-1">Entertainment</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Apple One</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple TV+</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple Music</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple Arcade</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple Podcasts</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple Books</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">App Store</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="sm:font-semibold text-black mb-1">Apple Store</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Find a Store</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Genius Bar</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Today at Apple</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple Summer Camp</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Ways to Buy</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple Trade In</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Recycling Programme</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Order Status</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Shopping Help</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="sm:font-semibold text-black mb-1">For Business</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Apple and Business</a></li>
            </ul>

            <h4 className="sm:font-semibold text-black mt-3 mb-1">For Education</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Apple and Education</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Shop for Education</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Shop for College</a></li>
            </ul>

            <h4 className="sm:font-semibold text-black mt-3 mb-1">For Healthcare</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Apple in Healthcare</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Health on Apple Watch</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="sm:font-semibold text-black mb-1">Apple Values</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Accessibility</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Environment</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Privacy</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Supply Chain</a></li>
            </ul>

            <h4 className="sm:font-semibold text-black mt-3 mb-1">About Apple</h4>
            <ul className="leading-relaxed">
              <li><a href="#" className="hover:underline text-[#424245]">Newsroom</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Apple Leadership</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Career Opportunities</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Investors</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Ethics & Compliance</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Events</a></li>
              <li><a href="#" className="hover:underline text-[#424245]">Contact Apple</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col divide-y divide-gray-300 mb-6">
          {footerSections.map((section, i) => (
            <div key={i}>
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex justify-between items-center py-3 text-black font-semibold"
              >
                {section.title}
                <span
                  className={`transform transition-transform duration-200 ${
                    openSection === section.title ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {openSection === section.title && (
                <ul className="pl-3 pb-3 space-y-2 text-[#424245]">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
          <hr className="border-gray-300 mb-1 sm:w-5/6 mx-auto" />


        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center sm:px-16 gap-3 text-[13px]">
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>

          <div className="flex flex-wrap gap-2 md:gap-3 items-center p-4">
            <a href="#" className="hover:underline text-[#424245]">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline text-[#424245]">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline text-[#424245]">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline text-[#424245]">Legal</a>
            <span>|</span>
            <a href="#" className="hover:underline text-[#424245]">Site Map</a>
          </div>

          <p className="text-right md:text-left">India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
