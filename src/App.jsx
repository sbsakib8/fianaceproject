
import './App.css'
import Cards from './page/Cards'
import Debitcard from './page/Debitcard'
import Faqs from './page/Faqs'

import Hero from './page/Hero'
import Navbars from './page/Navber'
import Offer from './page/Offer'
import Vision from './page/Vision'


function App() {
  

  return (
    <>
   <Navbars/>
   <Hero/>
    <div className=' container'>
      <Vision/>
      <Offer/>
      <Debitcard/>
      <Cards/>
      <Faqs/>
   
    </div>
    </>
  )
}

export default App
