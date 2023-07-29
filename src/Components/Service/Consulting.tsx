import React from 'react'
import erp from '../../Images/erp-system-img.png'
import Contact from '../ContactUs/Contact';

const Consulting = ({clickDownHandler}:any) => {
    const myDivStyle = {
        fontFamily:'Alegreya, serif',
        color:'#2a1fbc',
        fontWeight:'',
        fontStyle:'italic'
      };
  return (
    <>
      <section id="hero" className="d-flex align-items-center" style={{height:'75vh',background:'#f4faff'}}>

<div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>Strategy & Consulting</h1>
      <h2 className='hero_main_sub' style={{color: '#000', marginBottom:'5px'}}>INNOVATION | TRANSFORMATION | LEADERSHIP</h2>
      {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
      <p className=''>Our Tech Strategy & advisory expertise helps you to realize the exceptional business value of technology.</p>
      <div className='btn-wrapper wow fadeInUp'>
      <div className="d-flex justify-content-center justify-content-lg-start mt-4">
        <a className='btnn btn-primary' onClick={clickDownHandler}>Get Started</a>
        {/* <Button btnName='Free Trail'/> */}
      
      </div>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200" >
      <img src='https://cdn.mobcoder.com/dist/images/services/consulting/hero_image.svg' className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>
<section>
        <div className="container">
            <div className="sec-title to-load loaded">
                <h2 className="h1">Scale your in-house development team with <br/> our Best tech talent on-demand</h2>
                <p>we offer comprehensive consulting services designed to empower your business for success in the ever-evolving digital landscape. Our seasoned team of consultants brings a wealth of knowledge and expertise across various industries, providing valuable insights and strategic guidance tailored to your unique business needs.</p>
            </div>
        </div>
    </section>
    <section className="Build_Immersive_start App_Maintenance_Div our_consulting_capabilties">
        <div className="container">
            <div className="build_main">
                <h2>Our Consulting Capabilities</h2>
                <ul className="box-2 build_immersive_ul" style={{padding:'0px'}}>
                    <li className="theme-card card-inner-structure t to-loado-load">
                        <div className="card-inner-img">
                            <figure> <img src="https://cdn.mobcoder.com/dist/images/services/consulting/technical.svg" alt="Technical Architecture"/> </figure>
                            <figcaption>
                                <h4 className="bold marB0">Expertise</h4>
                            </figcaption>
                        </div>
                        <p>Our consultants offer a wealth of knowledge and expertise to your service. Drawing from diverse backgrounds and profound industry insights, we grasp the distinctive challenges your business encounters, crafting tailored solutions that cater to your specific needs.</p>
                    </li>
                    <li className="theme-card card-inner-structure to-load loaded">
                        <div className="card-inner-img">
                            <figure> <img src="https://cdn.mobcoder.com/dist/images/services/consulting/Solution.svg" alt="Solution Design"/> </figure>
                            <figcaption>
                                <h4 className="bold marB0">Customized Approach</h4>
                            </figcaption>
                        </div>
                        <p>We kickstart our consulting journey with a thorough analysis of your organization. Our team collaborates closely with your stakeholders to understand your goals, challenges, and opportunities. Through workshops and interviews, we delve deep into your processes and workflows.
                        </p>
                    </li>
                    <li className="theme-card card-inner-structure to-load loaded">
                        <div className="card-inner-img">
                            <figure> <img src="https://cdn.mobcoder.com/dist/images/services/consulting/performance.svg" alt="Performance Refinement"/> </figure>
                            <figcaption>
                                <h4 className="bold marB0">Results-Driven</h4>
                            </figcaption>
                        </div>
                        <p>Our unwavering commitment lies in delivering concrete results. By harmonizing data-driven analysis with effective implementation strategies, our recommendations translate into measurable outcomes. Your success remains our utmost priority.</p>
                    </li>
                    <li className="theme-card card-inner-structure to-load loaded">
                        <div className="card-inner-img">
                            <figure> <img src="https://cdn.mobcoder.com/dist/images/services/consulting/cto.svg" alt="CTO Consultation"/> </figure>
                            <figcaption>
                                <h4 className="bold marB0">Collaborative Partnership</h4>
                            </figcaption>
                        </div>
                        <p>At our core, we foster enduring, collaborative partnerships with clients. As an integrated extension of your team, we work closely with your stakeholders throughout the consulting process. Together, we address challenges, capitalize on opportunities, and navigate through change with shared determination.</p>
                    </li>

                </ul>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="sec-title to-load loaded">
                <h2 className="h1">Our Consulting Principles</h2>
                <p>The Excellent consulting team specialises in strategic implementation to create quick impact and
                    organisational change. Our product development technique focuses on driving digital adoption by
                    combining design thinking, behavioural science and data driven insights.</p>
            </div>
        </div>
    </section>

    <section className="Consulting_Principles">
        <div className="container">
            <div className="row-start">
                <div className="uiux-service-comtainer">
                    <ul className="uiux-service-ul" style={{padding:'0px'}}>
                        <li className="uiux-service-list theme-card to-load card-inner-structure-3 loaded">
                            <figcaption className="card-inner-s3-content">
                                <h4> Define the problem</h4>
                                <p>We ensure identifying the problem and designing an intervention plan that addresses
                                    the issue.</p>
                            </figcaption>
                        </li>
                        <li className="uiux-service-list theme-card to-load card-inner-structure-3 loaded">
                            <figcaption className="card-inner-s3-content">
                                <h4> Drive Digital Adoption</h4>
                                <p>We make sure that our solutions will leverage each technology to the fullest to drive
                                    innovation &amp; optimize processes. </p>
                            </figcaption>
                        </li>
                        <li className="uiux-service-list theme-card to-load card-inner-structure-3 loaded">
                            <figcaption className="card-inner-s3-content">
                                <h4> Design-Led Thinking</h4>
                                <p>Through Design thinking we bring together what is desirable from a client point of
                                    view with what is technologically feasible and economically viable.</p>
                            </figcaption>
                        </li>
                        <li className="uiux-service-list theme-card to-load card-inner-structure-3 loaded">
                            <figcaption className="card-inner-s3-content">
                                <h4> Validate Ideas </h4>
                                <p>We rely on the value of the idea validation process. It’s the foundation
                                    of every great product. That’s why over the years we worked out a well-designed
                                    system for validating business ideas</p>
                            </figcaption>
                        </li>
                        <li className="uiux-service-list theme-card to-load card-inner-structure-3 loaded">
                            <figcaption className="card-inner-s3-content">
                                <h4>Long Term Mindset</h4>
                                <p>We ensure robust, scalable solutions for sustained success. By leveraging cutting-edge technologies and industry best practices, we create agile and adaptable software, minimizing future maintenance costs and maximizing ROI. Partner with us for forward-thinking solutions built to stand the test of time.</p>
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
                                    <h2 className="h1">Need Help with <span className="special-fonts"> Consulting Services?</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12">
                                <div className="call-to-action-btn text-right i-text-center">
                                    <a href="#" className="btn btn-primary btn-light btn-large">Contact Us Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

    </>
  )
}

export default Consulting