import React from 'react'

function Card() {
    return (
        <>
            {/* main div */}
            <div className=' w-[392px] h-[360px] rounded-[32px] bg-boxColor backdrop-blur-lg p-10'>
                {/* icon div */}
                <div className=' bg-[#3D3F54] w-[56px] h-[56px] rounded-full flex justify-center items-center '>
                    <img  src="Frame.png" alt="" /></div>
                <p className=' font-normal text-white leading-[24px] my-5 '>"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."</p>
                {/* address div */}
                <div className=' flex gap-4'>
                    {/* img div */}
                    <div className=''>
                        <img src="Ellipse.png" alt="" />
                    </div>
                    {/* name div */}
                    <div>
                        <h1 className=' font-medium text-[16px] text-white leading-[24px]'>Hadid Khan</h1>
                        <p className=' font-normal text-[12px] text-[#ADB2B1] leading-5'>UIUX Designer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card