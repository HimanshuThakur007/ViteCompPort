import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import ClientSection from "../CllientSection/ClientSection";
import WhyUs from "../WhyUs/WhyUs";
import ProductShowCase from "../ProductShowCase/ProductShowCase";
import Banner from "../../CustomComponents/Banner";
import Testimonial from "../Testimonial/Testimonial";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import OurServices from "../OurServices/OurServices";
import EnquiryModal from "../Modals/EnquiryModal";
import HowStarted from "../HowWeStart/HowStarted";

const Home = () => {
  const [iSopen, setIsOpen]: any = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };

  const openHandler = () => {
    setIsOpen(true);
  };
  const clickDownHandler = (type:any)=>{
    var targetElement:any = document.getElementById('pay');
    var targetFa:any = document.getElementById('Fa');
    var targetPe:any = document.getElementById('Pe');
    var targetIc:any = document.getElementById('Ic');
    var targetIs:any = document.getElementById('Is');
    var targetSfa:any = document.getElementById('sfa');
    var targetBc:any = document.getElementById('Bc');
    var targetEc:any = document.getElementById('Ec');
    var targetmobile:any = document.getElementById('mobile');
    var targetweb:any = document.getElementById('Web');
    var targetcon:any = document.getElementById('Con');
    var targetbu:any = document.getElementById('Bu');


switch(type){
  case 'pay':
    (targetElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    break;
    case 'Fa':
      (targetFa).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'Pe':
      (targetPe).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'Ic':
      (targetIc).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'Is':
      (targetIs).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'sfa':
      (targetSfa).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'Bc':
      (targetBc).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'Ec':
      (targetEc).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'mobile':
      (targetmobile).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'Web':
      (targetweb).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'Con':
      (targetcon).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;
    case 'Bu':
      (targetbu).scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      break;

}

}

  return (
    <>
      <EnquiryModal
        isShow={iSopen}
        closeModal={closeHandler}
        heading="Interested ?"
        about="my name is modal!!!"
        Close="click"
      />

      <HeroImage openHandler={openHandler} />

      {/* <WhyUs/> */}

      <OurServices clickDownHandler={clickDownHandler} />
      <div className="container">
        <ProductShowCase />
      </div>

      <ClientSection />
      <HowStarted />
      <div className="container">
        <TestimonialCard />
      </div>
    </>
  );
};

export default Home;
