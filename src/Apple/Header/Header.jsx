import React, { useState } from "react";

const Header = () => {
  const [hovered, setHovered] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  let closeTimeout;

  const links = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  const dropdownContent = {
    Store: {
      columns: [
        {
          title: "Shop",
          items: [
            "Shop the Latest",
            "Mac",
            "iPad",
            "iPhone",
            "Apple Watch",
            "AirPods",
            "Accessories",
          ],
        },
        {
          title: "Quick Links",
          items: [
            "Find a Store",
            "Order Status",
            "Apple Trade In",
            "Ways to Buy",
            "Personal Setup",
          ],
        },
        {
          title: "Shop Special Stores",
          items: ["Education", "Business"],
        },
      ],
    },
    Mac: {
      columns: [
        {
          title: "Explore Mac",
          items: ["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio"],
        },
        {
          title: "Quick Links",
          items: ["Compare Mac", "Mac Accessories", "Apple Trade In"],
        },
      ],
    },
    iPad: {
      columns: [
        {
          title: "Explore iPad",
          items: [
            "iPad Pro",
            "iPad Air",
            "iPad",
            "iPad mini",
            "Apple Pencil",
            "Keyboards",
          ],
        },
        {
          title: "Quick Links",
          items: ["Compare iPad", "iPad Accessories", "Apple Trade In"],
        },
      ],
    },
    iPhone: {
      columns: [
        {
          title: "Explore iPhone",
          items: [
            "iPhone 16 Pro",
            "iPhone 16",
            "iPhone 15",
            "iPhone SE",
            "Compare iPhone",
          ],
        },
        {
          title: "Quick Links",
          items: ["iPhone Accessories", "Apple Trade In", "Ways to Buy"],
        },
      ],
    },
    Watch: {
      columns: [
        {
          title: "Explore Watch",
          items: [
            "Apple Watch Series 10",
            "Apple Watch SE",
            "Apple Watch Bands",
            "Compare Watch",
          ],
        },
        {
          title: "Quick Links",
          items: ["Apple Watch Studio", "Apple Trade In", "Ways to Buy"],
        },
      ],
    },
    AirPods: {
      columns: [
        {
          title: "Explore AirPods",
          items: ["AirPods Pro 2", "AirPods 3rd Gen", "AirPods Max"],
        },
        {
          title: "Quick Links",
          items: ["Compare AirPods", "AirPods Accessories"],
        },
      ],
    },
    "TV & Home": {
      columns: [
        {
          title: "Explore TV & Home",
          items: ["Apple TV 4K", "HomePod", "Home Accessories"],
        },
      ],
    },
    Entertainment: {
      columns: [
        {
          title: "Explore Entertainment",
          items: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade"],
        },
      ],
    },
    Accessories: {
      columns: [
        {
          title: "Explore Accessories",
          items: ["Mac Accessories", "iPad Accessories", "iPhone Accessories"],
        },
      ],
    },
    Support: {
      columns: [
        {
          title: "Get Support",
          items: [
            "Mac Support",
            "iPhone Support",
            "iPad Support",
            "Watch Support",
          ],
        },
        {
          title: "Helpful Topics",
          items: ["AppleCare+", "Repair", "Contact Us"],
        },
      ],
    },
  };

  const handleMouseEnter = (label) => {
    clearTimeout(closeTimeout);
    setHovered(label);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsDropdownVisible(false);
      setHovered(null);
    }, 200); // Delay prevents flicker when moving between link and dropdown
  };

  return (
    <header className="bg-gray-100 backdrop-blur-md relative z-50">
      <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* ---------- Desktop Header ---------- */}
        <div className="hidden md:flex items-center justify-center w-full relative">
          {/* Apple icon */}
          <div className="text-xl pr-10">
            <i className="fa-brands fa-apple"></i>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {links.map((label) => (
              <div
                key={label}
                onMouseEnter={() => handleMouseEnter(label)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <a
                  href="#"
                  className={`text-xs font-medium transition-colors ${
                    hovered === label && isDropdownVisible
                      ? "text-black"
                      : "text-gray-800 hover:text-gray-600"
                  }`}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6 pl-10">
            <button>
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <button>
              <i className="fa-solid fa-bag-shopping text-lg"></i>
            </button>
          </div>
        </div>

        {/* ---------- Mobile Header ---------- */}
        <div className="flex items-center justify-between w-full md:hidden">
          <div className="text-lg">
            <i className="fa-brands fa-apple"></i>
          </div>

          <div className="flex items-center space-x-5">
            <button>
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <button>
              <i className="fa-solid fa-bag-shopping text-lg"></i>
            </button>
            <button onClick={() => setIsMobileOpen((v) => !v)}>
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- Desktop Dropdown ---------- */}
      {hovered && dropdownContent[hovered] && isDropdownVisible && (
        <div
          className="absolute left-0 w-screen bg-[#f5f5f7] border-t border-gray-300 shadow-lg animate-fadeIn"
          onMouseEnter={() => {
            clearTimeout(closeTimeout);
            setIsDropdownVisible(true);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-12 py-8 grid grid-cols-3 gap-16">
            {dropdownContent[hovered].columns.map((col, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold mb-3 text-gray-900">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-700 hover:text-black transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------- Mobile Dropdown ---------- */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-gray-700 bg-black/95 backdrop-blur-md">
          <div className="px-4 py-4">
            {links.map((label) => (
              <a
                key={label}
                href="#"
                className="block py-3 border-b border-gray-800 last:border-b-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
