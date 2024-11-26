
import './App.css'
import Debitcard from './page/Debitcard'

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
   
    </div>
    </>
  )
}

export default App
