
import React from "react";

function IntroPost() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white p-8 rounded-2xl shadow-lg w-full md:w-[80%] mb-8 text-center">
      <h1 className="text-3xl font-bold mb-3">
        Welcome to MyBlog 🚀
      </h1>
      <p className="text-lg leading-relaxed max-w-2xl mx-auto">
        Hi, I’m <span className="font-semibold">[Swati Simgh]</span>!  
        I created this space to share tips, tutorials, and ideas about React, UI/UX, and everything in between.  
        Whether you’re just starting or looking to sharpen your skills, you’ll find resources here to make your journey easier.
      </p>
      <p className="mt-3 text-sm">
        💡 Expect bite-sized tutorials, real-world project guides, and design tips that are practical and easy to follow.  
      </p>
      <button className="mt-5 bg-white text-red-500 font-semibold px-6 py-2 rounded-full hover:scale-105 transition">
        Subscribe Now
      </button>
    </div>
  );
}

export default IntroPost;
