import React from 'react'
import { Link } from 'react-router-dom'
import pics from "../../assets/Group_1__2_-removebg-preview.png"


const Header = () => {
  return (
    <div className='w-full h-[60px]  bg-[#bf8ce9]  flex justify-center items-center'>
      
      <div className='w-[90%] h-full flex justify-between items-center '>


<div className='px-2 py-2 flex justify-center items-center'>
    <div className=' px-2 py-2 flex text-[30px]  text-white  font-semibold justify-center items-center'>Chyme <img src={pics} className='flex justify-center items-center'/></div>
</div>

<div className=' px-2 py-4 flex justify-center items-center max-sm:hidden gap-5'>
    <div className='px-2 py-4 text-[15px] text-white font-semibold hover:scale-105 transition-all cursor-pointer'>Data</div>
    <div className=' px-2 py-4 text-[15px]  text-white  font-semibold hover:scale-105 transition-all cursor-pointer'>Airtime</div>
    <div className=' px-2 py-4 text-[15px] text-white font-semibold hover:scale-105 transition-all cursor-pointer'> Pay Bills</div>
    <div className=' px-2 py-4 text-[15px] text-white font-semibold hover:scale-105 transition-all cursor-pointer'> Electricity </div>
    <div className=' px-2 py-4 text-[15px] text-white font-semibold hover:scale-105 transition-all cursor-pointer'> Services </div>
</div>

<div className=' px-2 py-2 flex'>
    <button className=' px-2 py-2  bg-purple-600 rounded-md text-[white]  font-sans  border-black hover:scale-105 transition-all cursor-pointer '>
     
     <Link  to="/register">
     
      Get Started
     </Link>
      
      </button>
</div>

      </div>
    </div>
  )
}

export default Header
