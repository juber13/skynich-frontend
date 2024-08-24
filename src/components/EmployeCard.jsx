import React, { useState } from 'react'
import { FaUser, FaLink } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { FaIndianRupeeSign } from "react-icons/fa6";
import { useEffect } from 'react';
import axios from 'axios'
const EmployeCard = () => {
  const [data , setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://skynich-backend.onrender.com/api/employeeList")
      .then((res) => setData(res.data.employees));
  },[])

 const handleDelete = async(id) => {
  try{

    const res = axios.delete(
      `https://skynich-backend.onrender.com/api/deleteEmployee/${id}`
    );
    console.log(res);

  }catch(err){
    console.log(err)
  }
 }  
console.log(data)
  return (
    <>
      {data?.map((item, index) => (
        <div
          className='sm:max-w-xs border p-2 mt-3 rounded-xl shadow-md bg-white'
          key={index}
        >
          <div
            className='logo flex flex-col items-center justify-center'
            key={index}
          >
            <img
              className='text-sm w-[50px] rounded-full'
              src={item.imageUrl}
              alt=''
            />

            <div className='personal-info text-center mt-3'>
              <h3 className='text-sm font-bold'>{item.name}</h3>
              <h2 className='text-xs text-gray-400'>{item.email}</h2>
            </div>

            <div className='social-media flex items-center justify-between w-full p-4 text-gray-500'>
              <FaUser />
              <FaLink />
              <MdDeleteForever  onClick={() => handleDelete(item._id)}/>
            </div>

            <div className='w-full'>
              <hr className='border bg-gray-500 h-[1px]' />
            </div>

            <div className='job-details grid grid-cols-2 gap-10 text-xs pt-3'>
              <div>
                <h2 className='font-bold'>{item.designation}</h2>
                <h2>Deginations</h2>
              </div>

              <div>
                <h2 className='font-bold'>{item.department}</h2>
                <h2>Organizations</h2>
              </div>

              <div>
                <h2 className='font-bold'>{item.joinig}</h2>
                <h2>Date pf joining</h2>
              </div>

              <div>
                <h2 className='flex  text-sm items-center font-bold'>
                  <FaIndianRupeeSign /> {item.salary}
                </h2>
                <h2>Salary</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default EmployeCard