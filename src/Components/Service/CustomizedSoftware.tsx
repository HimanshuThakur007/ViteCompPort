import React from 'react'
import { useNavigate } from 'react-router-dom';
import Contact from '../ContactUs/Contact';
import c1 from '../../Images/Customized Software/Tailored Solution.png'
import c3 from '../../Images/Customized Software/Quality Assurance.png'
import c4 from '../../Images/Customized Software/Cost-Effectiveness.png'
import c5 from '../../Images/Customized Software/Scalability.png'
import c6 from '../../Images/Customized Software/Customer-Centric Approach.png'
import c7 from '../../Images/Customized Software/Data Security.png'
import c8 from '../../Images/Customized Software/Timely Delivery.png'
import c9 from '../../Images/Customized Software/Reliable Support.png'
import { Helmet } from 'react-helmet';

const CustomizedSoftware = ({clickDownHandler}:any) => {
    let iconStyle = { color: '#2a1fbc' }
    const navigate = useNavigate()
  return (
    <>
    {/* <section id="services" className="services section-bg"> */}
        {/* <div className='inner-page-header section-padding style-dark'>
            <div className="container" data-aos="fade-up">
                <div className='page-title-inner text-center clearfix'>
                    <div className='heading-wrapper'>
                        <h1 className='h1'>Web App Development</h1>
                        <div className='lead-text'>
                            <p>Excellent Softwares is a top-notch and premier Web and Mobile Application Development Company in India,we are deeply committed to producing engaging mobile apps that rigorously satisfy corporate needs and cater to a wide range of web and mobile application development projects.</p>
                        </div>
                    </div>

                </div>


            </div>
        </div> */}
          <Helmet>
                <title>Excellent softwares || Customized Software</title>
                <meta name="Customized Software Page" content="Customized Software services page content" />
            </Helmet>
        <section className="breadcrumbs webdev-breadcrumb" style={{padding: '60px 0', overflow:'hidden', marginTop:'2px'}}>
<div className="container pos-r">
    <div className="banner-content">
        <div className="crumb-cont-main">
            <div className="breadcrumb-content">
                <h1> <span>Customized Softwares</span> Services Driving Customer Centric
                    Solutions for You</h1>
                <a className="btnn btn-white" onClick={clickDownHandler}>Get In Touch </a>
            </div>
        </div>
    </div>
</div>
</section>
        <section className="next-gen-web">
<div className="container">
    <div className="sec-title">
        <h2 className="h1">Why Customized Software?</h2>
        <p>Off-the-shelf software might seem convenient at first, but it often falls short in addressing the specific challenges and requirements of your business.</p>
<p>We specialize in crafting tailor-made software solutions that cater to diverse industries. Our expertise spans web applications, mobile apps, enterprise software, and other bespoke solutions. With a dedicated team of skilled developers, designers, and project managers, we collaborate to deliver cutting-edge software, empowering your business to thrive in the digital era.</p>
        
    </div>
</div>
</section>

<section className='mob-app-service'>
                    <div className='container'>
                        <div className='sec-title'>
                            <h2 className='h1'>Why choose Us?</h2>
                            {/* <p>Off-the-shelf software might seem convenient at first, but it often falls short in addressing the specific challenges and requirements of your business. That's where we come in. Our team of skilled developers works closely with you to understand your goals, processes, and constraints. We then craft a customized software solution that fits your exact needs, providing you with a competitive advantage and driving operational efficiency.</p> */}
                        </div>
                        <div className='row-start'>
                            <div className='app-service-main'>
                                <ul className='mobService'>
                                    <li className='theme-card to-load card-inner-structure-3 ios-iphone loaded'>
                                        <figure>
                                            <img src={c1} alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Tailored Solutions</h5>
                                            </a>
                                            <p>We understand that every business is unique and requires custom-tailored solutions. We listen to your specific requirements, challenges, and objectives to create software that perfectly aligns with your vision.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 android-app loaded'>
                                        <figure>
                                            <img src="	./assets/android-app-icon.svg" alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Experienced Team</h5>
                                            </a>
                                            <p>Our team of software professionals is handpicked based on their expertise and experience in the industry. With a proven track record of successful projects, we are equipped to handle any complexity and deliver results that exceed expectations.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 web-mobile-app loaded'>
                                        <figure>
                                            <img src={c3} alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Quality Assurance</h5>
                                            </a>
                                            <p>Our commitment to quality is unwavering. We follow industry best practices and conduct rigorous testing to ensure that the software we deliver is of the highest quality, reliable, and secure.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 mobile-app-design loaded'>
                                        <figure>
                                            <img src={c4} alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Cost-Effectiveness</h5>
                                            </a>
                                            <p>Customized software might seem like a significant investment, but it's worth it. Our solutions are designed to optimize your business processes, increase efficiency, and ultimately save you money in the long run.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 cross-mobile-app loaded'>
                                        <figure>
                                            <img src={c5} alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Scalability</h5>
                                            </a>
                                            <p>We develop software with scalability in mind, ensuring that it can grow and adapt as your business expands. This future-proof approach guarantees that your software will remain relevant for years to come.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 cross-mobile-app loaded'>
                                        <figure>
                                            <img src={c6} alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Customer-Centric Approach</h5>
                                            </a>
                                            <p>Our clients are at the heart of everything we do. We maintain transparent communication throughout the development process, keeping you informed and involved at every stage.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 ar-mobile loaded'>
                                        <figure>
                                            <img src={c7} alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Data Security</h5>
                                            </a>
                                            <p>We prioritize the security of your sensitive data and intellectual property. Our team employs robust security measures to safeguard your information from any potential threats.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 ar-mobile loaded'>
                                        <figure>
                                            <img src={c8} alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Timely Delivery</h5>
                                            </a>
                                            <p>We understand the importance of meeting deadlines. Our streamlined development process and project management methodologies allow us to deliver solutions on time without compromising quality.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 ar-mobile loaded'>
                                        <figure>
                                            <img src={c9} alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Reliable Support</h5>
                                            </a>
                                            <p>Our commitment to your success extends beyond the delivery of the software. We provide dedicated and dependable support to address any queries or issues, ensuring that your software continues to perform optimally and meet your evolving needs.</p>
                                        </figcaption>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
<div id='contact'>
      <Contact />
      </div>

        {/* <div className="cta-section section-padding style-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-sm-12">
                        <div className="call-to-action-content i-text-center">
                            <h2 className="h1">Get a personalized demo, instantly. <span className="special-fonts">Schedule a demo</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <div className="call-to-action-btn text-right i-text-center">
                        <a onClick={()=>{navigate('/enquiry')}} className="btn btn-primary btn-light btn-large">Contact Us Now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* ---------------------------------------------------------------------------------------------------------------- */}
        {/* <Testimonial /> */}


    {/* </section> */}
</>
  )
}

export default CustomizedSoftware;