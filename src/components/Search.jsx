import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  const tags = [
    { id: 1, name: "All" },
    { id: 2, name: "React" },
    { id: 3, name: "React Native" },
    { id: 4, name: "Angular" },
    { id: 5, name: "UI/UX" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center mt-8 md:px-[150px]">
      
      {/* Banner Image */}
      <div className="flex justify-center w-full">
        <img
          src="/images.jpeg"
          alt="banner"
          className="rounded-2xl max-w-full md:max-w-3xl object-cover"
        />
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-lg p-4 rounded-lg -mt-5 w-full md:w-[50%] flex items-center">
        <IoSearchSharp className="text-[20px] text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none ml-2 w-full"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {tags.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`${index === activeIndex ? 'bg-red-500 text-white ' : 'bg-gray-100 text-gray-700 '} 
              p-2 px-4 rounded-full cursor-pointer hover:scale-110 hover:border border-red-500 transition-all duration-200`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
