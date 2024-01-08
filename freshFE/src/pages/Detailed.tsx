import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosHeadset } from "react-icons/io";

const Detailed = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
       <div className=' w-full h-full flex  bg-[lightpurple] top-[20%] flex-col '>
     
       <div className='  w-full h-[350px] flex  flex-row  gap-10   top-[-6%]  relative justify-center items-center sm-grid-col'>
        <div className='px-1 py-5 flex justify-center items-center flex-col  leading-[45px]  bg-white font-semibold rounded  hover:scale-105 transition-all hover:shadow-sm hover:border-black cursor-pointer'> <MdAccessTime  className="text-[50px] flex" /> <div className='font-bold px-2 py-4 text-[20px]'>We're Fast</div>24 hours online and zero  <br /> network downtime, even at  <br />midnight you can get your data <br /> with one click. You are one <br />button away from getting your data..</div>
        <div className=' px-1 py-4 flex justify-center items-center  flex-col  leading-[49px]  bg-white font-semibold rounded hover:scale-105 transition-all hover:shadow-sm-[black] hover:border-black cursor-pointer'><FaLightbulb  clasName=" text-[60px] flex "/> <div className='font-bold px-2 py-4 text-[20px]'>Automated Services</div>All services, ranging from cheap <br /> airtime, data, cable tv, and <br /> betting account funding to electricity  <br /> bills, and even our recharge <br /> card printing are automated. </div>
        <div className=' px-1 py-4 flex justify-center items-center flex-col  leading-[45px] bg-white font-semibold rounded hover:scale-105 transition-all hover:shadow-sm hover:border-black cursor-pointer'><RiSecurePaymentLine className=" text-[50px] flex " />  <div className=' font-bold px-2 py-4 text-[20px]'>100% Secured Payment</div>  All your transactions at InstantopUp <br /> are secured and automated. Fund <br /> your InstantTopUp wallet with either <br /> your bank ATM card or  <br /> through a bank transfer. </div>
        <div className=' px-1 py-4 flex justify-center items-center flex-col  leading-[45px] bg-white font-semibold rounded hover:scale-105 transition-all hover:shadow-sm hover:border-black cursor-pointer'><IoIosHeadset className=" text-[50px] flex " />  <div className=' font-bold px-2 py-4 text-[20px]'>Suport 24/7</div>  Customer support staffs are always <br /> available 24/7 to help you <br /> resolve any issues. We provide <br /> you with multiple ways to <br /> reach us and get fast help. </div>
       </div>
      

       <div className='px-2 py-4 flex justify-center items-center flex-col'>
         <div className='text-[50px] flex'>InstanTopUp Easy Payment</div>
         <div className='flex mt-5 font-semibold'>Cheapest VTU Platform in Nigeria, Top-up Phone Airtime, Buy Data (SME). <br />Fund Your Betting Account, Pay Electricity Bills, Print Recharge Cards Online, and Renew Cable TV Subscriptions In One Click. Instant Delivery!</div>
       </div>

       <div className='px-2 py-4 flex justify-start items-start flex-col mt-5 leading-[18px]'>
         <div className='text-[15px] flex font-semibold'>OUR SERVICES</div>
         <div className='flex mt-5 font-bold text-[45px] leading-[48px]'>Buy/Resell Cheap Airtime & Data, Pay Bills Online, <br /> Pay Electricity Bills & Print Recharge Card</div>
       </div>


       </div>

    </div>
  )
}

export default Detailed
