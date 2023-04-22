import React from 'react';
import './Card.css'
import Carousel from 'react-bootstrap/Carousel';
const TestimonialCard = () => {
  return (
    <>
    <div className='card w-100 mt-5 cardStyle' style={{borderRadius:'20px'}}>
   <div className="card-body">
     <h2 className="card-title col-12 d-flex justify-content-center titleStyle">What our Customers Say</h2>
     <Carousel style={{minHeight:'60vh', height:'auto'}} interval={2000}>
          {/* <h1>Himanshu</h1> */}
      <Carousel.Item >
      <div className='row'>
          <div className='col-12 d-flex justify-content-center mt-4 '>
        <img
          className="imageStyle"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" 
          alt="First slide"
          
        />
        </div>
    
        <Carousel.Caption style={{position:'inherit'}}>
            <div className=' customersSay'>
          <h3 style={{color:'#656b71'}}>Mr. Sanjeev Yadav</h3>
          <p className='mb-3'>CEO, Skypark India</p>
          <p>"Excellent Softwares converting complex business process into simpler ones and this provides great value addition to public life."</p>
          </div>
        </Carousel.Caption>
      </div>
      </Carousel.Item>
      <Carousel.Item >
      <div className='row'>
          <div className='col-12 d-flex justify-content-center mt-4 '>
        <img
          className="imageStyle"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" 
          alt="First slide"
          
        />
        </div>
    
        <Carousel.Caption style={{position:'inherit'}}>
            <div className='customersSay'>
          <h3 style={{color:'#656b71'}}>Mr. Dinesh Gupta</h3>
          <p className='mb-3'>Founder, Busy Infotech Pvt. Ltd.</p>
          <p>"Excellent Softwares has made a significant contribution in the growth of BUSY of providing custimization services around BUSY which has helped BUSY win many accounts especially in mid-sized business segment. I wish them all the best."</p>
          </div>
        </Carousel.Caption>
      </div>
      </Carousel.Item>
      <Carousel.Item >
      <div className='row'>
          <div className='col-12 d-flex justify-content-center mt-4 '>
        <img
          className="imageStyle"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" 
          alt="First slide"
          
        />
        </div>
    
        <Carousel.Caption style={{position:'inherit'}}>
            <div className='customersSay'>
          <h3 style={{color:'#656b71'}}>Mr. Rajesh Gupta</h3>
          <p className='mb-3'>Founder, Busy Infotech Pvt. Ltd.</p>
          <p>“Excellent Softwares has played a significant role in clinching big deals for BUSY”</p>
          </div>
        </Carousel.Caption>
      </div>
      </Carousel.Item>
    

    </Carousel>
   </div>
   </div>
    
    </>
  )
}

export default TestimonialCard;