import React from 'react'
import offerdata from './data/offer/Offerdata'

function Offer() {
  return (
    <div className=' my-6 py-9 md:py-10 lg:py-16'>
    <h1 className=' text-center mb-7 lg:mb-12 font-bold text-[40px]'>What do we offer?</h1>
   <div className=' flex flex-1 flex-col lg:flex-row justify-center items-center '>
   {
        offerdata.map((itme) => (
            <div key={itme.id} className=' flex max-w-[392px] h-[89px] mt-11 lg:mt-0'>
               <div className='w-[80px] h-[80px] rounded-full bg-[#3D3F54] mr-8 flex justify-center items-center'>
                 <img className=' w-[30px] h-[30px]' src={itme.img} />
                 </div>
              <div>
              <h2 className=' font-medium text-[24px] mb-3'>{itme.title}</h2>
              <p className=' font-normal text-[16px] text-secondary leading-[23px] text-wrap'>{itme.description}</p>
              </div>
            </div>
        ))
    }
   </div>
    </div>
  )
}
export default Offer;