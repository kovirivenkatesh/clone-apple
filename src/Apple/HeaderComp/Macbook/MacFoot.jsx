
import React from 'react'

const Content = [
  {
    title: 'Explore Mac',
    items: ["Explore All Mac", "MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro", "Displays", "Compare Mac", "Switch from PC to Mac"],
    size: 'text-2xl'
  },
  {
    title: 'Shop Mac',
    items: ["Shop Mac", "Mac Accessories", "Ways to Buy"],
    size: 'text-md'
  },
  {
    title: 'More from Mac',
    items: ["Mac Support", "AppleCare", "macOS Tahoe", "Apple Intelligence", "Apps by Apple", "Even better with iPhone", "iCloud+", "Mac for Business", "Education"],
    size: 'text-md'
  }
]


const MacFoot = () => {
  return (
    <div className="px-6 sm:px-16 bg-gray-50">
      {/* Title Section */}
      <div className="pt-20 sm:pt-36">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-8">Mac</h1>
      </div>

      {/* Columns Section */}
      <div className="flex flex-col sm:flex-row  gap-10 sm:gap-20 pt-4 pb-20">
        {Content.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="font-semibold text-md mb-4 text-gray-600">
              {item.title}
            </h2>

            <ul className="text-black font-semibold">
              {item.items.map((subItem, subIndex) => {
                // For the first column (Explore Mac)
                if (index === 0 && subIndex >= item.items.length - 2) {
                  return (
                    <li
                      key={subIndex}
                      className={`text-md ${subIndex === item.items.length - 2 ? "pt-3" : "pt-3"} leading-tight`}
                    >
                      {subItem}
                    </li>
                  );
                }

                // Normal items
                return (
                  <li key={subIndex} className={`${item.size} mb-2`}>
                    {subItem}
                  </li>
                );
              })}
            </ul>

          </div>
        ))}
      </div>

        <div className=" pt-12 sm:pt-24"></div>

    </div>
  )
}

export default MacFoot