import React, { useEffect, useState } from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import About from './Components/About/About'
import Service from './Components/Service/MobileApp';
import Testimonial from './Components/Testimonial/Testimonial';
import Products from './Components/Products/ExcellentErp';
import Enquiry from './Components/Enquiry/Enquiry';
import ContactUs from './Components/ContactUs/ContactUs';
import TeamSection from './Components/TeamSection/TeamSection';
import Footer from './Components/Footer/Footer';
import Header from './CustomComponents/Banner';
import NavBarss from './Components/NavBar/NavBarss';
import Blog from './Components/BlogSection/Blog';
import BlogDetails from './Components/BlogSection/BlogDetails';
import PayRoll from './Components/Products/PayRoll';
import CollectionEngine from './Components/Products/CollectionEngine';
import CustomerLoyality from './Components/Products/CustomerLoyality';
import KartManager from './Components/Products/KartManager';
import Aarath from './Components/Products/Aarath';
import InfoServe from './Components/Products/InfoServe';
import Asset from './Components/Products/Asset';
import SfaPage from './Components/Products/SfaPage';
import B2G from './Components/Products/B2G';
import ExcellentErp from './Components/Products/ExcellentErp';
import WebDevelopment from './Components/Service/WebDevelopment';
import Consulting from './Components/Service/Consulting';
import SaasApp from './Components/Service/SaasApp';
import Wrapper from './Components/Wrapper/Wrapper'
import BusyCustomization from './Components/Service/BusyCustomization';
import EnquiryForm from './Components/Enquiry/EnquiryForm';
import CustomizedSoftware from './Components/Service/CustomizedSoftware';
import HeaderBar from './Components/NavBar/HeaderBar';
import EnquiryModal from './Components/Modals/EnquiryModal';
import PrivacyPage from './Components/PrivacyPage/PrivacyPage';
import FeedBackPage from './Components/FeedBack/FeedBackPage';
import TermsOfServices from './Components/TermsOfServices/TermsOfServices';




const App = () => {

  const [iSopen, setIsOpen]: any = useState(false)

  let url = 'http://103.194.9.31';
  let port = '22099'

  useEffect(()=>{
    localStorage.setItem('Url',url)
    localStorage.setItem('Port', port)
  },[])

  const closeHandler = () => {
      setIsOpen(false)
  }

  const openHandler = () => {
      setIsOpen(true)
  }
  const clickDownHandler = ()=>{
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    
  }
  }


  return (
    <div>
       <EnquiryModal isShow={iSopen} closeModal={closeHandler} heading='Got Queries For Us' about='my name is modal!!!' Close='click' />
<BrowserRouter>
<Wrapper>
  <HeaderBar/>
<NavBarss/>
<main id="main">
<Routes>
{/* <Route path='/' element={<LayOut/>}> */}
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/mobileapp' element={<Service clickDownHandler={clickDownHandler}/>}/>
<Route path='/webapp' element={<WebDevelopment clickDownHandler={clickDownHandler}/>}/>
<Route path='/saasapp' element={<SaasApp clickDownHandler={clickDownHandler}/>}/>
<Route path='/consulting' element={<Consulting clickDownHandler={clickDownHandler}/>}/>
<Route path='/testimonial' element={<Testimonial/>}/>
<Route path='/erp' element={<ExcellentErp clickDownHandler={clickDownHandler}/>}/>
<Route path='/enquiry' element={<Enquiry/>}/>
<Route path='/contactus' element={<ContactUs/>}/>
<Route path='/blog' element={<Blog />}/>
<Route path='/blogdetail' element={<BlogDetails/>}/>
<Route path='/payroll' element={<PayRoll clickDownHandler={clickDownHandler}/>}/>
<Route path='/clengine' element={<CollectionEngine clickDownHandler={clickDownHandler}/>}/>
<Route path='/clplus' element={<CustomerLoyality clickDownHandler={clickDownHandler}/>}/>
<Route path='/kartmanager' element={<KartManager clickDownHandler={clickDownHandler}/>}/>
<Route path='/b2g' element={<B2G/>}/>
{/* <Route path='/aarath' element={<Aarath/>}/> */}
<Route path='/infoserve' element={<InfoServe clickDownHandler={clickDownHandler}/>}/>
{/* <Route path='/asset' element={<Asset/>}/> */}
<Route path='/excsfa' element={<SfaPage clickDownHandler={clickDownHandler}/>}/>
<Route path='/busycust' element={<BusyCustomization clickDownHandler={clickDownHandler}/>}/>
<Route path='/enquiry_form' element={<EnquiryForm/>}/>
<Route path='/customize_software' element={<CustomizedSoftware clickDownHandler={clickDownHandler}/>}/>
<Route path='/privacy_policy' element={<PrivacyPage/>}/>
<Route path='/terms_of_services' element={<TermsOfServices/>}/>
<Route path='/feedback' element={<FeedBackPage/>}/>

{/* </Route> */}
</Routes>
</main>
<Footer/>
</Wrapper>
</BrowserRouter>
    </div>
  )
}

export default App