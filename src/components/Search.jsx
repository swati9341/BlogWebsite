import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function Search() {
  const tags=[
    {
      id:1,
      name:"All"
    },
    {
      id:2,
      name:"React"
    },
    {
      id:3,
      name:'React Native',
    },
    {
      id:4,
      name:"Angular",
    },
    {
      id:5,
      name:"UI/UX",
    },
  ]
  const [activeIndex,serActiveIndex]=useState(0);
  return (
    <div className='text-center justify-center mt-8 flex-col md:px-[150px]'>
      <img src="/banner.png" className='rounded-2xl' alt="banner" />

      <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <IoSearchSharp className='text-[20px] text-gray-400' />

          <input type='text' placeholder='search' className='outline-none ml-2'></input>

    </div>
    <div className='flex gap-10 justify-center mt-5'>
      {tags.map((item,index)=>(
        <ul onClick={()=>setActiveIndex(index)} className={`${index==activeIndex ?'bg-red-500 text-white':null}p-1 pb-2 rounded-small md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-red-500 transition-none duration-100`}>
          <li>{item.name}</li>
        </ul>

      
      ))}
      

    </div>
    </div>
  )
}

export default Search
