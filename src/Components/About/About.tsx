import React from 'react'
import Header from '../../CustomComponents/Header'
import CarouselImg from '../HeroImage/HeroImage'
import { ThemeProvider } from 'react-bootstrap'

const About = () => {
  return (
    <>
     
    <section id="about" className="about mt-4">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
            Excellent Softwares is into providing customized business solutions to every business needs.  Established in 2002 and located at Delhi, Excellent Softwares has always been at the forefront of technical innovation and providing high quality next generation user friendly technical solutions which .

            Our years of working experience with different industries have helped us gain deep insight of the market and of customer needs. Combining our experience, our passion to take on technological challenges and our love for technology we have been constantly delivering innovative and result oriented solutions to our clients since our inception.With a team of dedicated professionals and armed with the latest technology we offer a wide array of IT based solutions including
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Customization of BUSY Accounting Software</li>
              <li><i className="ri-check-double-line"></i> Customised business Solutions</li>
              <li><i className="ri-check-double-line"></i> ERP/CRM Implementation</li>
              <li><i className="ri-check-double-line"></i> Data center& Connectivity Solutions</li>
              <li><i className="ri-check-double-line"></i> Software & Business Consultancy</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default About