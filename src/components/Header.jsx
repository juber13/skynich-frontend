import React from 'react'
import { CiCloudOn } from "react-icons/ci";


const Header = ({handleChange}) => {

  return (
    <div className='w-full p-4 sticky justify-between top-0 left-0 z-10 bg-white shadow-md text-2xl flex items-center'>
    <div className='flex items-center'>
      <span className='text-blue-400 text-3xl font-bold'>sky</span>niche
      <CiCloudOn className='text-blue-800'/>
    </div>
    <div className='w-[60%] sm:w-[30%]'>
      <input type="text" placeholder='search...' className='border p-2 rounded-md outline-none shadow-sm w-full text-sm' onChange={handleChange}/>
    </div>
    </div>
  );
}

export default Header