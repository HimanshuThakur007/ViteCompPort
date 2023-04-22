import React from 'react';
import NavBar from '../NavBar/NavBar';
import HeroImage from '../HeroImage/HeroImage';
import ClientSection from '../CllientSection/ClientSection';
import WhyUs from '../WhyUs/WhyUs';
import ProductShowCase from '../ProductShowCase/ProductShowCase';
import Banner from '../../CustomComponents/Banner';
import Testimonial from '../Testimonial/Testimonial';
import TestimonialCard from '../TestimonialCard/TestimonialCard';



const Home = () => {
    return (
        <>
         <NavBar/>
         {/* <div className='col-12'>
         <Banner/>
         </div> */}
         <HeroImage/>
         {/* <WhyUs/> */}
         <div className='container'>
         <ProductShowCase/>
         
         </div>
    
         <ClientSection/>
    
         <div className='container'>
         <TestimonialCard />
{/* <Testimonial/> */}
        
         </div> 
        </>
    )
}

export default Home