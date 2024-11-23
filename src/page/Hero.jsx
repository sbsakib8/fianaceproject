import React from 'react'
import Btn from '../compronent/button/Btn'

function Hero() {
    return (
        <>
            {/* main div */}
            <div className=' flex'>
                {/* hero content */}
                <div>
                    <h1>Spend your Cardano anywhere, anytime.</h1>
                    <p>Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>

                    <Btn title='Get Started' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    } />

                </div>
                {/* hero image */}
                <div>
                    <img src="Group 21.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero