import React from 'react'

import Footerdata from '../data/footer/Footerdata';



function Footer(){
  return (
    <div className=' my-7 py-10 '>
      <img src="logo.png" alt="" />
      <p>Discover the power of our secure and rewarding credit cards</p>
    <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center my-8'>
      {
        Footerdata.map((itme,index)=>(
          <div key={index} className=' mt-11'>
              <h1 className=' font-bold text-[18px]'>{itme.title}</h1>
              {
              itme.links.map((link,index)=>(
                 <div  key={index}>
                   <a className=' text-[16px] text-secondary font-normal' href={link.url}>{link}</a>
                 </div>
              ))  
              
              }
          </div>
            
        ))
      }
    </div>
    </div>
  )
}

export default Footer;