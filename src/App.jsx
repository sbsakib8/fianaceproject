
import './App.css'
import Offer from './Offer'
import Hero from './page/Hero'
import Navbars from './page/Navber'
import Vision from './page/Vision'


function App() {
  

  return (
    <>
   <Navbars/>
   <Hero/>
    <div className=' container'>
      <Vision/>
      <Offer/>
    
   
    </div>
    </>
  )
}

export default App
