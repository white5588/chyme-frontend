import React from 'react'
import pics from "../assets/business5-removebg-preview (1).png"
import Typewriter from "typewriter-effect"

const Homscreen = () => {
  return (
    <div className=' w-full h-screen   bg-purple-600 flex justify-center items-center sm-w-[100%] max-sm:block max-sm:flex-col'>
      
      <div className='w-full h-full flex justify-between items-center sm-w-[100%] max-sm:block max-sm:flex-col-reverse'>

   


<div className='w-full h-screen flex sm-w-[100%] justify-evenly items-center max-sm:block max-sm:flex-col-reverse'>



<div className=' px-2 py-4 flex flex-col leading-[47px] sm-w-full  '>
    <div className=' text-[42px] font-bold sm-w-[100%] text-white'>
    <Typewriter
      options={{ loop: true, delay: 55, deleteSpeed: 50 }}
  onInit={(typewriter) => {
    typewriter.typeString(' Buy Data, Airtime , Pay Bills  At A Cheaper Rate!!!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
     </div>
   <div className=' px-2 py-4 text-[13px] font-semibold sm-w-[100%] text-white'> Make IT  Flexible  For You ...</div>
</div>






</div>
<div className=' h-full w-[88%] flex sm-w-[100%]  sm-h-[100%]     '>
<img src={pics} className=' w-full h-full object-contain z-10 rounded-tl-[50px] rounded-br-[50px] sm-w-[100%] flex   sm-w-[100%] '/>
</div>

      </div>
    </div>
  )
}

export default Homscreen
