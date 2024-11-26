import React from 'react'
import Reviewdata from './../../data/reviewdata/Reviewdata';
function Card() {
    return (
        <>
            {/* main div */}
  <div className=' flex flex-1 flex-col py-10 gap-5 justify-center items-center lg:flex-row lg:gap-5 lg:py-20 md:py-12 mt-20 sm:mt-24 md:mt-14'>         
{
    Reviewdata.map((review) => (
        <div key={review.id} className='  w-[330px] sm:w-[400px] lg:w-[392px] h-[360px] rounded-[32px] bg-boxColor backdrop-blur-lg p-10'>
        {/* icon div */}
        <div className=' bg-[#3D3F54] w-[56px] h-[56px] rounded-full flex justify-center items-center '>
            <img  src="Frame.png" alt="" /></div>
        <p className=' font-normal text-white leading-[24px] my-5 '>{review.content}</p>
        {/* address div */}
        <div className=' flex gap-4'>
            {/* img div */}
            <div className=''>
                <img src={review.img} alt="" />
            </div>
            {/* name div */}
            <div>
                <h1 className=' font-medium text-[16px] text-white leading-[24px]'>{review.name}</h1>
                <p className=' font-normal text-[12px] text-[#ADB2B1] leading-5'>{review.title}</p>
            </div>
        </div>
       </div>
    ))
}
</div>    
        </>
    )
}

export default Card