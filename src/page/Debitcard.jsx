import React from 'react'
import Btn from '../compronent/button/Btn'


function Debitcard() {
  return (
    <div className=' py-11 sm:py-20 lg:py-32'>
    {/* main div 1*/}
       <div className=' w-full h-[519px] flex flex-1 flex-col md:flex-row py-10 md:py-12 lg:py-20 justify-center items-center '>
        {/* left div */}
        <div className=' max-w-[604px]  h-[234px] space-y-2 md:space-y-3 lg:space-y-5 '>
            <h1 className=' font-bold text-[20px] md:text-[30px] lg:text-[40px] text-white'> Wern Debit Card</h1>
            <p className=' max-w-[424px] font-normal text-[16px] text-wrap text-secondary leading-[24px]'>More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.</p>
            
            
            <Btn title='Get Started' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    }  />
             <p className=' font-bold text-[16px] text-primary '>Will be available soon</p>
        </div>
        {/* right div */}
        <div className=' mt-20'>
          <img src="Group 16.png" alt="" />
        </div>
       </div>

       {/* main div 2 */}
       <div className=' w-full h-[519px] flex flex-1 flex-col md:flex-row py-10 md:py-12 lg:py-20 justify-center items-center mt-36 sm:mt-56 md:mt-12 '>
        {/* left div */}
        <div className=' max-w-[604px] h-[234px] space-y-2 md:space-y-3 lg:space-y-5 md:order-1 pt-3 '>
            <h1 className=' font-bold text-[20px] md:text-[30px] lg:text-[40px] text-white'>Find the Perfect Card for You</h1>
            <p className='max-w-[470px] font-normal text-[16px] text-wrap text-secondary leading-[24px]'>Unlocking the Power of Crypto, Both Virtually and Physically
            Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.</p>
            
            
            <Btn title='Get Started' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    }  />
            
        </div>
        {/* right div */}
        <div className=' pt-32 sm:pt-14'>
          <img src="Group 16 (1).png" alt="" />
        </div>
       </div>
    </div>
  )
}

export default Debitcard