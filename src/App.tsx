import React from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/About'
import NavBar from './Components/NavBar/NavBar'
import LayOut from './Components/Layout/LayOut'
import Service from './Components/Service/Service';
import Testimonial from './Components/Testimonial/Testimonial';
import Products from './Components/Products/Products';
import Enquiry from './Components/Enquiry/Enquiry';
import ContactUs from './Components/ContactUs/ContactUs';
import TeamSection from './Components/TeamSection/TeamSection';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <div>
<BrowserRouter>
<NavBar/>
<Routes>
{/* <Route path='/' element={<LayOut/>}> */}
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/testimonial' element={<Testimonial/>}/>
<Route path='/product' element={<Products/>}/>
<Route path='/enquiry' element={<Enquiry/>}/>
<Route path='/contactus' element={<ContactUs/>}/>
<Route path='/team' element={<TeamSection/>}/>
{/* </Route> */}
</Routes>
<Footer/>

</BrowserRouter>
    </div>
  )
}

export default App