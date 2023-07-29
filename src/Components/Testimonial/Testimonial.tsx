import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ban from '../../Images/office.jpg'

import TestiMonialsDetails from './TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../Images/team/team-1.jpg';
import spranjan from '../../Images/team/spranjan.jpg';
import naveen from '../../Images/team/naveengupta.jpg';
import dinesh from '../../Images/team/Dinesh-gupta.jpg';
import rajeev from '../../Images/team/rajiv.jpg';
import './stylet.css'

const Testimonial = () => {
  const testiMonials = [
    {
        name: 'Mr. Rajeev Bhardwaj',
        description: 'Excellent Softwares is a perfect combination of achievement and success. Just as achievement is the knowledge that one studies, works hard & than praised by others is success. Mr. Anil Yadav aimed only for achievement & he become successful.',
        address: 'India',
        // img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        img: rajeev
    },
    {
        name: 'Mr. Naveen Gupta',
        description: 'I Extend my Blessings & Good wishes and lots of success for Future. Mr. Anil Yadav , What i found is a smart, intellectual person with full command on products he offers. What was expected of him , he gave much more than that.',
        address: 'India',
        img: naveen
    },
    {
        name: 'Mr. Dinesh Gupta',
        description: 'Excellent Softwares has made a significant contribution in the growth of BUSY of providing custimization services around BUSY which has helped BUSY win many accounts especially in mid-sized business segment. I wish them all the best.',
        address: 'India',
        img: dinesh
    },
    {
        name: 'Mr. S. P. Ranjan ',
        description: 'Bridging teh Gap between customers problem and effective Solutions. Excellent Softwares has helped in delivering more value to busy by creating cost effecient add-ons',
        address: 'India',
        img: spranjan
    },
]
//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
};
  return (
    <>
    
     <section id="testimonial" className="testimonials">
            <div className="container">
            <div className="row justify-content-center clearfix">
                            <div className="col-lg-8">
                                <div className="heading-wrapper text-center with-separator">
                                    <h2 className="h1">Happy Clients <span>Feedback</span></h2>
                                    <div className="lead-text">
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a neque non pellentesque.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src={userPic} />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div className="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map((testiMonialDetail):any => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    
    {/* <Carousel> */}
          {/* <h1>Himanshu</h1> */}
      {/* <Carousel.Item>
        <img
          className="rounded-circle shadow-4-strong"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" 
          alt="First slide"
     
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="rounded-circle shadow-4-strong"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          alt="Second slide"
    
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="rounded-circle shadow-4-strong"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          alt="Third slide"
     
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    {/* </Carousel> */}
    </>
  )
}

export default Testimonial