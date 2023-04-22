import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ban from '../../Images/office.jpg'

const Testimonial = () => {
  return (
    <>
    
    <Carousel>
          {/* <h1>Himanshu</h1> */}
      <Carousel.Item>
        <img
          className="rounded-circle shadow-4-strong"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" 
          alt="First slide"
     
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded-circle shadow-4-strong"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          alt="Second slide"
    
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
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
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Testimonial