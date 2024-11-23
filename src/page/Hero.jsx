import React from 'react'
import Btn from '../compronent/button/Btn'

function Hero() {
    return (
        <>
            {/* main div */}
            <div className=' flex flex-1 flex-col md:flex-row pl-4 md:pl-10 lg:pl-20 mt-7 md:mt-10 lg:mt-28'>
                {/* hero content */}
                <div className=' order-2 md:order-1 mt-7 md:mt-3'>
                    <h1 className=' font-bold text-[40px] md:text-[56px] md:leading-[64px] w-full md:max-w-[604px]'>Spend your Cardano anywhere, anytime.</h1>
                    <p className=' font-normal text-[18px] leading-[24px] text-secondary max-w-[498px] mt-5 text-wrap mb-8'>Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>

                    <Btn title='Get Started' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    } />

                </div>
                {/* hero image */}
                <div className='md:order-1 flex flex-1 '>
                    <img className=' w-[450px] md:w-[604px]' src="hero-card.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero