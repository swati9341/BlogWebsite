import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");


  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      category: "React",
      image: "/blog1.jpeg",
      description: "Learn the basics of React and start building apps.",
    },
    {
      id: 2,
      title: "Designing for Mobile",
      category: "UI/UX",
      image: "/blog2.jpeg",
      description: "Principles of mobile-first design and UX.",
    },
    {
      id: 3,
      title: "React Native for Beginners",
      category: "React Native",
      image: "/blog1.jpeg",
      description: "Create native mobile apps with React Native.",
    },
    {
      id: 4,
      title: "Why Angular is Still Relevant",
      category: "Angular",
      image: "/blog2.jpeg",
      description: "Exploring Angular's strengths in modern dev.",
    },
  ];

  // Filter blogs based on tag and search term
  const filteredBlogs = blogs.filter((blog) => {
    const matchesTag =
      activeIndex === 0 || blog.category === tags[activeIndex].name;
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="flex flex-col items-center mt-8 md:px-[150px]">
      <div className="bg-white shadow-lg p-4 rounded-lg -mt-5 w-full md:w-[50%] flex items-center">
        <IoSearchSharp className="text-[20px] text-gray-400" />
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {blog.description}
                </p>
                <span className="text-xs mt-3 inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full">
                  {blog.category}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No blogs found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Blog;
