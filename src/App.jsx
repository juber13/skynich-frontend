import { useState } from "react";
import "./App.css";
import EmployeCard from "./components/EmployeCard";
import Header from "./components/Header";
import Form from "./components/Form";
import { FaPlus } from "react-icons/fa";

import { ToastContainer , toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";



function App() {
    const [toggle, setToggle] = useState(false);

  
  return (
    <>
    <Header />
      <div className='w-full relative h-auto'>
      <Form toggle={toggle} setToggle={setToggle}/>
        <div
          onClick={() => setToggle(true)}
          className='w-[50px] cursor-pointer h-[50px] rounded-full bg-white flex items-center justify-center border fixed right-10 bottom-10 hover:bg-black hover:text-white'
        >
          <button className=''>
            <FaPlus />
          </button>
        </div>
        <div className='flex flex-wrap max-w-4xl m-auto bg-gray-100 gap-5 items-center justify-center shadow-xl mt-3 p-2'>
          <EmployeCard />
        </div>
      </div>
      <ToastContainer />
    </>
  
  );
}

export default App;
