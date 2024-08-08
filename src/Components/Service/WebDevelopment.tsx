import CustomizedBusiness from "./CustomizedBusiness/CustomizedBusiness"
import social from '../../Images/social-app.svg'
import Testimonial from "../Testimonial/Testimonial";
import './ServiceStyle.css'
import { useNavigate } from "react-router-dom";
import Contact from "../ContactUs/Contact";
import { Helmet } from "react-helmet";

const WebDevelopment = ({clickDownHandler}:any) => {
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
                <title>Excellent softwares || Web App Development </title>
                <meta name="Web App Development Page" content="Web App Development services page content" />
            </Helmet>
            <section className="breadcrumbs webdev-breadcrumb" style={{ padding: '60px 0', overflow: 'hidden', marginTop:'2px' }}>
                <div className="container pos-r">
                    <div className="banner-content">
                        <div className="crumb-cont-main">
                            <div className="breadcrumb-content">
                                <h1> <span>Web App Development </span> Services Driving Customer Centric
                                    Solutions for You</h1>
                                <a className="btnn btn-white" onClick={clickDownHandler}>Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="next-gen-web">
                <div className="container">
                    <div className="sec-title">
                        <h2 className="h1">Empowering Your Digital Future: Building Next-Gen Web Solutions</h2>
                        <p>Excellent Softwares, a leading web development company in India. In the rapidly evolving digital era, web applications have become a cornerstone for businesses, particularly in facilitating B2B transactions. At Excellent Softwares, we specialize in providing comprehensive and tailor-made web development services that effectively address your unique business challenges.</p>
                        <p>At Our Company, we take pride in offering exceptional end-to-end web development services tailored specifically to tackle the distinct challenges your business encounters. Whether you're a budding start-up or a well-established enterprise, our team possesses the expertise and experience needed to craft personalized web solutions that not only elevate your online presence but also optimize your day-to-day operations.</p>
                        <p>Our primary goal is to create web applications that not only cater to your unique requirements but also offer a secure and seamless user experience. With a focus on leveraging our expertise and cutting-edge technologies, we are dedicated to empowering your business to thrive in the dynamic digital landscape.</p>
                        {/* <p>Our goal is to develop web applications that not only meet your specific requirements but also provide a secure and seamless user experience. By leveraging our expertise and cutting-edge technologies, we ensure that your business can thrive in the digital landscape.</p> */}
                        
                    </div>
                </div>
            </section>
            <section className='mob-app-service'>
                <div className='container'>
                    <div className='sec-title'>
                        <h2 className='h1'>Web Development Approach</h2>
                    </div>
                    <div className='row-start'>
                        <div className='app-service-main'>
                            <ul className='mobService'>
                                <li className='theme-card to-load card-inner-structure-3 ios-iphone loaded'>
                                    <figure>
                                        <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/ios-icon-icon.svg" alt="" />
                                    </figure>
                                    <figcaption>
                                        <a href='' className='c-black'>
                                            <h5> Web Development </h5>
                                        </a>
                                        <p>We turn your vision into a dynamic and cutting-edge reality! Our team of skilled web development specialists is geared up to bring life to your website by incorporating advanced functionalities and innovative ideas.
                                        </p>
                                    </figcaption>
                                </li>
                                <li className='theme-card to-load card-inner-structure-3 android-app loaded'>
                                    <figure>
                                        <img src="	https://cdn.mobcoder.com/dist/images/mobile-app-page/android-app-icon.svg" alt="" />
                                    </figure>
                                    <figcaption>
                                        <a href='' className='c-black'>
                                            <h5> Quality Control</h5>
                                        </a>
                                        <p>During this stage, the development and testing teams collaborate closely to ensure that the software or website meets the specified requirements and is free of major bugs and issues. Successful completion this phase means the ready for a soft launch or a limited release to the client for review and feedback.</p>
                                    </figcaption>
                                </li>
                                <li className='theme-card to-load card-inner-structure-3 web-mobile-app loaded'>
                                    <figure>
                                        <img src="		https://cdn.mobcoder.com/dist/images/mobile-app-page/web-mob-app.svg" alt="" />
                                    </figure>
                                    <figcaption>
                                        <a href='' className='c-black'>
                                            <h5> Visual Design</h5>
                                        </a>
                                        <p>Our Product Design solutions that encompass graphic design, identity design, UI design, and branding. With our proficiency in front-end technology, we offer the finest design services that truly cater to your ideas and requirements, ensuring a seamless and captivating user experience for your website or application.
                                        </p>
                                    </figcaption>
                                </li>
                                <li className='theme-card to-load card-inner-structure-3 mobile-app-design loaded'>
                                    <figure>
                                        <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/mob-app-design.svg" alt="" />
                                    </figure>
                                    <figcaption>
                                        <a href='' className='c-black'>
                                            <h5> Discovery & Planning </h5>
                                        </a>
                                        <p>In this phase, we lay the crucial groundwork that set the tone for the entire website development project. This initial stage is all about gathering comprehensive information and understanding the project's scope, objectives, and requirements. Our dedicated team collaborates closely with you to ensure a clear and unified vision before moving forward with the development process.</p>
                                    </figcaption>
                                </li>
                                <li className='theme-card to-load card-inner-structure-3 cross-mobile-app loaded'>
                                    <figure>
                                        <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/cross-platfrom-icon.svg" alt="" />
                                    </figure>
                                    <figcaption>
                                        <a href='' className='c-black'>
                                            <h5> User Acceptance Testing</h5>
                                        </a>
                                        <p>The User Acceptance Testing (UAT) phase indicates that the website has undergone thorough testing by the end-users or client representatives, and it meets their expectations and requirements. The website is deemed to be stable, smooth, and relatively bug-free, as any major issues would have been identified and addressed during the UAT phase. Once the UAT phase is complete and all necessary adjustments have been made based on user feedback, the website is ready to be rolled out for the client's official review and feedback.</p>
                                    </figcaption>
                                </li>
                                <li className='theme-card to-load card-inner-structure-3 ar-mobile loaded'>
                                    <figure>
                                        <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/ar-mobile-game-app.svg" alt="" />
                                    </figure>
                                    <figcaption>
                                        <a href='' className='c-black'>
                                            <h5> Launch</h5>
                                        </a>
                                        <p>This phase involves meticulous preparation and execution to ensure a smooth and successful rollout of the application to the target audience. This is a very important final step, for which a lot of preparation is done. Data migration, server setup and configuration, code merge, domain name redirection, and sanity test are some of the key tasks performed in this phase.</p>
                                    </figcaption>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="core-tech">
                <div className="container">
                    <div className="sec-title">
                        <h2 className="h1">Our Web Core Technologies</h2>
                        <p>We have experience in web development with multiple industries like finance, healthcare, education, and retail. We assist our clients through project management and expert advice throughout the development process. In addition, we use the best technology in the industry to provide excellent solutions.</p>
                    </div>
                    <div className="row-start">
                        <div className="core-tech-main">
                            <div className="core-tech-ul box-4 mobile-slide">
                                <div className="to-load loaded">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/django.webp" alt="django" />
                                </div>
                                <div className="to-load loaded">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/react.webp" alt="react" />
                                </div>
                                <div className="to-load loaded">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/rails.webp" alt="rails" />
                                </div>
                                <div className="to-load loaded">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/angular.webp" alt="angular" />
                                </div>
                                <div className="to-load loaded">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/java.webp" alt="java" />
                                </div>
                                <div className="to-load loaded">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/spring.webp" alt="spring" />
                                </div>
                                <div className="to-load no-anim">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/cakePHP.webp" alt="cakePHP" />
                                </div>
                                <div className="to-load no-anim">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/laravel.webp" alt="laravel" />
                                </div>
                                <div className="to-load no-anim">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/wordpress.webp" alt="wordpress" />
                                </div>
                                <div className="to-load no-anim">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/dotNet.webp" alt="dotNet" />
                                </div>
                                <div className="to-load no-anim">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/joomla.webp" alt="joomla" />
                                </div>
                                <div className="to-load no-anim">
                                    <img src="https://cdn.mobcoder.com/dist/images/tech-logo/node.webp" alt="node" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className='customized-business'>
                    <div className='container'>
                        <div className='sec-title'>
                            <h2 className='h1'>Customized Business Solutions</h2>
                        </div>
                        <div className='row-start'>
                            <ul className='customized-ul'>


                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Social App' />
                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Social App' />
                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Social App' />
                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Social App' />
                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Social App' />
                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Social App' />
                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Social App' />
                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Social App' />

                            </ul>
                        </div>
                    </div>

                </section> */}
            {/* <section className='our-app'>
                <div className='container'>
                    <div className='sec-title'>
                        <h2 className='h1'>Our Web Development Process</h2>
                    </div>
                    <div className='row-start'>
                        <ul className='dev-process'>
                            <li className='dev-process-list to-load delay-1 loaded'>
                                <h6>Analysis of Requirements</h6>
                                <p>Learn more about our customer </p>
                                <p>Recognizing the needs of the client </p>
                                <p>Proposal of a solution </p>
                            </li>
                            <li className='dev-process-list to-load delay-1 loaded'>
                                <h6>Designing & Wireframing</h6>
                                <p>The structure of the blueprint</p>
                                <p>Creating wireframes for each screen</p>
                                <p>The app is being designed</p>
                            </li>
                            <li className='dev-process-list to-load delay-1 loaded'>
                                <h6>Testing</h6>
                                <p>Application testing</p>
                                <p>100% bug-free</p>
                                <p>Get final approval from the client</p>
                            </li>
                            <li className='dev-process-list to-load delay-1 loaded'>
                                <h6>Development</h6>
                                <p>Coding the app</p>
                                <p>Layout main sections</p>
                                <p>Client’s feedback</p>
                            </li>
                            <li className='dev-process-list to-load delay-1 loaded'>
                                <h6>Deployment</h6>
                                <p>Deploy(App Launch) to App Stores</p>
                                <p>Deploy to client’s server</p>
                                <p>App available for users</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </section> */}


{/* --------------today------------------------- */}

<section className="brand-webdev bg-light-yellow" style={{backgroundColor:'#fbffef'}}>
        <div className="container">
            <div className="sec-title web_app_div">
                <h2 className="h1">Why Choose Excellent Softwares for Web Development ?</h2>
                <p>Here are a few ways that we stand out as a company when it comes to what our experience is with
                    websites and creating digital experiences.</p>
            </div>
            <div className="row-start">
                <div className="web-brand-container">
                    <ul className="web-brand-ul box-2">
                        <li className="theme-card card-inner-structure web-brand-list to-load loaded">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand1.svg" alt="Agile web design and development methodology"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0"> Agile web design and development methodology. </h6>
                                </figcaption>
                            </div>
                        </li>
                        <li className="theme-card card-inner-structure web-brand-list to-load loaded">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand2.svg" alt="Proven track record of successful web design and development
                                        project delivery"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0"> Proven track record of successful web design and development
                                        project delivery. </h6>
                                </figcaption>
                            </div>
                        </li>
                        <li className="theme-card card-inner-structure web-brand-list to-load loaded">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand3.svg" alt="Competitive rates for web design and development talent"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0"> Competitive rates for web design and development talent. </h6>
                                </figcaption>
                            </div>
                        </li>
                        <li className="theme-card card-inner-structure web-brand-list to-load loaded">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand4.svg" alt="Rigorous quality assurance (QA) testing before “Go-Live”"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0">Rigorous Quality Assurance (QA) testing before “Go-Live.”</h6>
                                </figcaption>
                            </div>
                        </li>
                        <li className="theme-card card-inner-structure web-brand-list to-load loaded">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand5.svg" alt="Cross-functional team"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0">Cross-functional team.</h6>
                                </figcaption>
                            </div>
                        </li>
                        <li className="theme-card card-inner-structure web-brand-list to-load loaded">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand6.svg" alt="Shorter development times translating to lower costs"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0">Shorter development times translate to lower costs.</h6>
                                </figcaption>
                            </div>
                        </li>
                        <li className="theme-card card-inner-structure web-brand-list to-load no-anim">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand7.svg" alt="In-house, front-end experts: Business Analysts, UX/UI
                                        Specialists &amp; Designers"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0"> In-house, front-end experts: Business Analysts, UX/UI
                                        Specialists &amp; Designers. </h6>
                                </figcaption>
                            </div>
                        </li>
                        <li className="theme-card card-inner-structure web-brand-list to-load no-anim">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand8.svg" alt="Unparalleled open technology expertise and experience"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0">Unparalleled open technology expertise and experience.</h6>
                                </figcaption>
                            </div>
                        </li>
                         <li className="theme-card card-inner-structure web-brand-list to-load">
                            <div className="card-inner-img">
                                <figure>
                                    <img src="https://cdn.mobcoder.com/dist/images/web-brand9.svg" alt="Friendly, open, communicative and collaborative way of working
                                        with clients"/>
                                </figure>
                                <figcaption>
                                    <h6 className="marB0">Friendly, open, communicative and collaborative way of working
                                        with clients.</h6>
                                </figcaption>
                            </div>
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

export default WebDevelopment