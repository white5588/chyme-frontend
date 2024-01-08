import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa6";
import { MdSurroundSound } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";




const Product = () => {
  return (
    <div className=' w-full h-screen  flex justify-center items-center'>
      <div className='w-[95%] h-full justify-center items-center '>

        <div className=' px-2 py-4 flex justify-center items-center  flex-row gap-7 mt-4 '>
         <div className=' px-2 py-1 flex flex-col  bg-white leading-[45px] rounded hover:scale-105 transition-all cursor-pointer hover:bg-purple-600 hover:text-white hover:shadow-black hover:border-black'> <div className='px-2 py-4 flex font-bold text-[20px] flex-col'> <IoCallSharp className="text-[45px] flex"  />Airtime</div> Get up to a 3% discount when you purchase <br /> airtime on our platform. Including VTU for all  <br /> networks <div className=' px-2 py-4 flex underline hover:scale-105 transition-all hover:text-[orange]'>Buy Airtime</div></div>
         <div className=' px-2 py-1 flex flex-col  bg-white leading-[45px] rounded  hover:scale-105 transition-all cursor-pointer hover:bg-purple-600 hover:text-white hover:shadow-black hover:border-black'> <div className='px-2 py-4 flex font-bold text-[20px] flex-col'><IoIosPhonePortrait className="text-[55px] flex" />Data</div> Buy and Resell cheap mobile data (+SME) <br /> at an affordable rate for all mobile networks. <div className=' px-2 py-4 flex underline hover:scale-105 transition-all hover:text-[orange]'>BUY DATA</div></div>
         <div className=' px-2 py-1 flex flex-col  bg-white leading-[45px] rounded  hover:scale-105 transition-all cursor-pointer hover:bg-purple-600 hover:text-white hover:shadow-black hover:border-black'> <div className='px-2 py-4 flex font-bold text-[20px] flex-col'> <PiTelevisionSimpleBold className="text-[55px] flex"   />Cable</div> Stay on-trend! Subscribe your Cable TV (GOtv,  <br />DSTv & StartTimes at an affordable price. <br /> One-click activation.<div className=' px-2 py-4 flex underline hover:scale-105 transition-all hover:text-[orange]'>SUBSCRIBE CABLE TV</div></div>
        
        </div>
        <div className=' px-2 py-4 flex justify-center items-center  flex-row gap-7  '>
         <div className=' px-2 py-1 flex flex-col  bg-white leading-[35px] rounded  hover:scale-105 transition-all cursor-pointer hover:bg-purple-600 hover:text-white hover:shadow-black hover:border-black'> <div className='px-2 py-4 flex font-bold text-[20px] flex-col'> <FaLightbulb className="text-[55px] flex" />Electricity</div>Instant token generation when you pay for <br /> your electricity bill payment, both prepaid <br /> and postpaid. AEDC, EKEDC, IBEDC, IKEDC, <br /> JED, KAEDCO, KEDCO & PHED etc.<div className=' px-2 py-2 flex underline hover:scale-105 transition-all hover:text-[orange] '>BUY ELECTRICITY</div></div>
         <div className=' px-2 py-1 flex flex-col  bg-white leading-[35px] rounded  hover:scale-105 transition-all cursor-pointer hover:bg-purple-600 hover:text-white hover:shadow-black hover:border-black'> <div className='px-2 py-4 flex font-bold text-[20px] flex-col'> <MdSurroundSound  className="text-[55px] flex" />Airtime</div>Print and resell recharge cards for all <br /> networks (MTN, GLO, AIRTEL & <br /> 9MOBILE(ETISALAT) online in Nigeria. A4 <br /> paper recharge card print format. Normal PIN <br /> at 3% discount. <div className=' px-2 py-2 flex underline hover:scale-105 transition-all hover:text-[orange]'>PRINT RECHARGE CARD</div></div>
         <div className=' px-2 py-1 flex flex-col  bg-white leading-[35px] rounded  hover:scale-105 transition-all cursor-pointer hover:bg-purple-600 hover:text-white hover:shadow-black hover:border-black'> <div className='px-2 py-4 flex font-bold text-[20px] flex-col'> <IoIosFootball className="text-[55px] flex" />Sport Betting</div> Fund your betting account online in Nigeria <br /> now, with one click. Fund Bet9ja, NairaBet,  <br /> BetKing, BetWay, BetLand, LivescoreBet, <br /> MerryBet, CloudBet, 1XBet, ETC Online ..<div className=' px-2 py-4 flex underline hover:scale-105 transition-all hover:text-[orange]'>FUND YOUR ACCOUNT</div></div>
        
        </div>


        <div className='px-2 py-4 flex justify-center items-center flex-col'>
         <div className='text-[50px] flex font-bold'>Do More With Chyme</div>
         <div className='flex mt-5 font-semibold'>We offer huge mouth-watering commissions for every transaction you perform for customers  with instant withdrawal when you carry out any of the services offered by chyme.ng <br />Help your customers top up data, buy airtime, subscribe GOtv, DStv, and StarTimes, print recharge cards online, fund their betting accounts, and pay for electricity bills online both prepaid and postpaid (AEDC, EKEDC, IBEDC, IKEDC, JED, KAEDCO, KEDCO & PHED, etc.)</div>
       </div>

      </div>
    </div>
  )
}

export default Product
