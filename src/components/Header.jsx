import React from 'react'
import { CiCloudOn } from "react-icons/ci";


const Header = () => {
  return (
    <div className='w-full p-4 sticky top-0 left-0 z-10 bg-white shadow-md text-2xl flex items-center'>
      <span className='text-blue-400 text-3xl font-bold'>sky</span>niche
      <CiCloudOn className='text-blue-800'/>
    </div>
  );
}

export default Header