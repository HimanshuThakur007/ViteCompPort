import { useState } from 'react'
import ServicesModal from '../Modals/EnquiryModal'
import social from '../../Images/social-app.svg'
import './ServiceStyle.css';
import Testimonial from '../Testimonial/Testimonial';
import CustomizedBusiness from './CustomizedBusiness/CustomizedBusiness';
import { useNavigate } from 'react-router-dom';
import Contact from '../ContactUs/Contact';
import { Helmet } from 'react-helmet';


const Service = ({clickDownHandler}:any) => {
    const navigate = useNavigate()
    const [isShow, setShow]: any = useState(false);
    const [isShowErp, setShowErp]: any = useState(false);
    const [isShowData, setShowData]: any = useState(false);
    const [isShowPoint, setShowPoint]: any = useState(false)

    return (
        <>
            <Helmet>
                <title>Excellent softwares || Mobile App </title>
                <meta name="Mobile App Page" content="Mobile App services page content" />
            </Helmet>
            <ServicesModal
                heading='Customisation of Busy'
                about='Maintaining financial records of a company is a Herculean task as a small error can quickly turn into a catastrophe. 
                To maintain and keep track of all financial records of a company accounting software like Busy is employed. 
                Busy software is fast, easy and effective accounting software with a highly secured database structure. 
                It minimizes the workload and increase the overall work efficiency of the financial department of any company. 
                It is an integrated accounting package developed for small and medium sized business organization.
                Excellent Softwares is a Channel Partner of Busy accounting package. 
                The Busy business accounting software comes in three version- Basic, Standard and Enterprise. 
                The Basic package is designed for micro and small scale business houses; the Standard package is designed for small and medium sized organization and the Enterprise edition is for large scale organization. The Basic package is a single user variant whereas the Enterprise edition and the Standard are available in three variants – single user, multi user and client server. The different versions are available with optional modules to suit specific requirements of every business needs. Excellent Softwares isn’t just the authorized Channel Partner of Busy accounting software but also of other Busy products like BUSY Payroll, Busy Bar Code Printing Software, and Busy Customer Service Management Software. We also provide additional services to clients like BUSY Customization, BUSY Data Synchronization and BUSY Implementation.
                Some of the prominent features of Busy Accounting package are:'
                isShow={isShow}
                closeModal={() => { setShow(false) }}
                Close='close'
            />

            <ServicesModal
                heading='Customised ERP'
                isShow={isShowErp}
                closeModal={() => { setShowErp(false) }}
                about='To meet the challenges of modern day business arena organizations are relying heavily on the capabilities of ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) systems. ERP systems help integrate business processes and offer real time updates. CRM systems on the other hand help in retaining customers and aids in focusing marketing efforts. Often it is seen that organizations use these two systems separately but integrating them can bring about synergy and increase the benefits manifold.
                In most cases organizations don’t have the luxury to focus their resources on developing an ERP/CRM integrated system and so they rely on a strategic technological partner. Excellent Softwares has been partnering with companies and helping them manage enterprise wide systems for the past 10 years.
                Excellent Softwares offers augmentation and integration of enterprise wide systems like ERP and CRM to organizations who want to break free from conventional systems and explore new heights. At Excellent Softwares our ERP/CRM members are not just technical experts they are business analysts with an in depth knowledge and understanding of our clients business. At Excellent Softwares we help maximize our clients’s IT potential and help them achieve a competitive advantage over their competitors. Our ERP/CRM team members are expert in SAP, PeopleSoft, Oracle, JD Edwards, Siebel, IFS and others. We use a flexible ERP/CRM integration method that offers reliable results in real time. We assign a dedicated virtual assistant (VA) for our clients. The VA is available 8 hours a day and 6 days a week.
                Our ERP CRM integration service helps organizations to integrate cross-discipline teams, functions, and processes offering sharp insight and control over varied process from a single application. We are helping different organizations across diverse industry sectors including manufacturing, distribution, services, hospitality and retail to outgrow the limitations of individual enterprise systems.'
                Close='close'
            />
            <ServicesModal heading='Data Center Solutions'
                isShow={isShowData}
                closeModal={() => { setShowData(false) }}
                about='Excellent Softwares is a leading hosting service provider offering comprehensive Data Center Services. Our data centers 
                support multiple platforms and come with global hosting capabilities. With Data Center solutions from Excellent Softwares you 
                can give your clients the resource to lower costs, minimize risks and leverage their IT investments. We deliver secure, consistent 
                and scalable hosting solutions to our clients.'
                Close='close'
            />
            <ServicesModal heading='Point to Point / Lease line / VPN'
                isShow={isShowPoint}
                closeModal={() => { setShowPoint(false) }}
                about='Point to point connection is a secured connection between two locations for private data transfer.
                It is a closed or private network with no access to public networks and therefore is a secured communication channel. 
                Point to point connections work under various speeds such as point to point T1, point to point Ethernet, or point to point DS3.
                Why Use Point to Point wide area network
                This type of connection is usually preferred by organizations having multiple offices around the globe. Point to point connection
                is a cost-effective, secured and flexible way to ensure seamless connection between employees across different offices. 
                Some of the areas where point to point communication is used are:'
                Close='close'
            />
            <section id="services" className="services section-bg">
                {/* <div className='inner-page-header section-padding style-dark' style={{height:'42vh'}}>
                    <div className="container" data-aos="fade-up">
                        <div className='page-title-inner text-center clearfix'>
                            <div className='heading-wrapper'>
                                <h1 className='h1'>Mobile Application</h1>
                                <div className='lead-text'>
                                    <p>At Excellent Softwares, we take pride in crafting high-quality, customized mobile applications that cater to the unique needs of our valued customers. With our expertise and innovative approach, we have successfully delivered numerous mobile apps that have empowered businesses to thrive in the digital landscape.</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div> */}

<section className="breadcrumbs webdev-breadcrumb" style={{padding: '60px 0', overflow:'hidden', marginTop:'2px'}}>
<div className="container pos-r">
    <div className="banner-content">
        <div className="crumb-cont-main">
            <div className="breadcrumb-content">
                <h1> <span>Mobile Application</span></h1>
                <p>At Excellent Softwares, we take pride in crafting high-quality, customized mobile applications that cater to the unique needs of our valued customers. With our expertise and innovative approach, we have successfully delivered numerous mobile apps that have empowered businesses to thrive in the digital landscape.</p>
                <a className="btnn btn-white" onClick={clickDownHandler}>Get In Touch </a>
            </div>
        </div>
    </div>
</div>
</section>

                <section className='mob-app-service'>
                    <div className='container'>
                        <div className='sec-title'>
                            <h2 className='h1'>Mobile App Development Service </h2>
                        </div>
                        <div className='row-start'>
                            <div className='app-service-main'>
                                <ul className='mobService'>
                                    <li className='theme-card to-load card-inner-structure-3 ios-iphone loaded'>
                                        <figure>
                                            <img src="./assets/ios-icon-icon.svg" alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>iOS Apps</h5>
                                            </a>
                                            <p>Our expertise spans from crafting applications for iPhone to iPad, ensuring that each app is optimized for top-notch performance and usability. We have a deep understanding of what it takes to turn a simple app concept into a highly profitable mobile application.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 android-app loaded'>
                                        <figure>
                                            <img src="	./assets/android-app-icon.svg" alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Android Mobile Apps</h5>
                                            </a>
                                            <p>We specialize in creating custom Android applications that run seamlessly on a wide range of Android devices. Our Android development team stays updated with the latest technologies and best practices to deliver feature-rich and intuitive apps for various purposes.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 web-mobile-app loaded'>
                                        <figure>
                                            <img src="./assets/web-mob-app.svg" alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Web Apps</h5>
                                            </a>
                                            <p>Streamlined business processes with our tailored business and productivity web apps. Our dedicated team of skilled web and mobile application developers is committed to creating captivating mobile sites and applications that are not only easy to use but also highly effective in enhancing your business operations.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 mobile-app-design loaded'>
                                        <figure>
                                            <img src="./assets/mob-app-design.svg" alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Mobile App Designs</h5>
                                            </a>
                                            <p>In app design, we recognize user experiences and interface significance. Therefore, our UI/UX designers rigorously adhere to Apple and Google's design requirements to build aesthetically appealing mobile apps without compromising functionality.</p>
                                        </figcaption>
                                    </li>
                                    <li className='theme-card to-load card-inner-structure-3 cross-mobile-app loaded'>
                                        <figure>
                                            <img src="./assets/cross-platfrom-icon.svg" alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>Cross-platform Mobile Apps</h5>
                                            </a>
                                            <p>We specialize in crafting custom mobile app development solutions using cross-platform technologies for both Android and iOS devices. Our expertise lies in leveraging the power of React Native to build high-quality applications that seamlessly run across multiple platforms, providing a native-like experience to users.</p>
                                        </figcaption>
                                    </li>
                                    {/* <li className='theme-card to-load card-inner-structure-3 ar-mobile loaded'>
                                        <figure>
                                            <img src="./assets/ar-mobile-game-app.svg" alt="" style={{width:'98px'}} />
                                        </figure>
                                        <figcaption>
                                            <a href='' className='c-black'>
                                                <h5>AR Mobile Game Apps</h5>
                                            </a>
                                            <p>Our AR gaming professionals have all of the necessary tools and technological know-how to create AR games. Unity, Corona, and Unreal Engine are among the tools used by Mobcoder. Allow us to assist you in providing your consumers with engaging gaming experiences.</p>
                                        </figcaption>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-our-work">
        <div>
            <div className="container">
                <h2 className="main_heading_section section_our_work_head">We Create Purpose-driven Apps and Digital
                    Products</h2>
            </div>
            <div className="section_our_work_main">
                <ul className="section_our_work_main_ul trademap" style={{marginLeft:'-32px'}}>
                    <li className="our-work-first" style={{background:"url(./assets/sfa-mobile.jpg)",backgroundPosition:"center",backgroundSize: "cover",backgroundRepeat: "no-repeat",width:'100%'}}>
                        <div className="container">
                            <div className="our_work_sub_main">
                                <div className="our_work_sub_main_left"> 
                                {/* <img src="https://cdn.mobcoder.com/dist/images/home-page/product_detail/TreadMap.webp" alt="TreadMap" className="max-image" decoding="async" loading="lazy"/> */}
                                 </div>
                                <div className="our_work_sub_main_right work-white">
                                    <p className="work_right_head" style={{color:'black'}}>Sales </p>
                                    <h3 className="work_right_heading" style={{color:'black'}}>Sales Force Automation</h3>
                                    <p className="work_right_para" style={{color:'black'}}>Excellent SFA Unleashing Sales Potential - Streamlining Processes i.e. order- Collection Processing Transformed Customer Relationships and Drove Business Growth.</p>
                                    <p className="work_right_foot_head" style={{color:'black'}}>Tech Stack :</p>
                                    <ul className="work_right_ul">
                                        <li className="work_right_li"style={{color:'black'}}>iOS</li>
                                        <li className="work_right_li" style={{color:'black'}}>Android</li>
                                        {/* <li className="work_right_li"style={{color:'black'}}>Android</li> */}
                                        <li className="work_right_li" style={{color:'black'}}>Firebase</li>
                                        <li className="work_right_li"style={{color:'black'}}>Google Map Tiles</li>
                                        {/* <li className="work_right_li">Kotlin</li> */}
                                        {/* <li className="work_right_li">GitLab</li> */}
                                        {/* <li className="work_right_li">Mapbox</li> */}
                                        {/* <li className="work_right_li">Firebase</li> */}
                                    </ul> 
                                    {/* <a href="https://mobcoder.com/product-stories/treadmap/" target="_blank" className="work_right_btn">VIEW CASE STUDY</a> */}
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="our-work-first maro">
                        <div className="container">
                            <div className="our_work_sub_main">
                                <div className="our_work_sub_main_left "> <img src="https://cdn.mobcoder.com/dist/images/home-page/product_detail/maro.webp" alt="Maro" className="max-image" decoding="async" loading="lazy"/> </div>
                                <div className="our_work_sub_main_right work-black">
                                    <p className="work_right_head">AI/ML</p>
                                    <h3 className="work_right_heading">Maro</h3>
                                    <p className="work_right_para">We created an application that empowers families to
                                        navigate conversations about mental health, diversity, and empathy. In addition,
                                        the app helps parents track their children's emotional states.</p>
                                    <p className="work_right_foot_head">Tech Stack :</p>
                                    <ul className="work_right_ul">
                                        <li className="work_right_li">Swift</li>
                                        <li className="work_right_li">Node.js</li>
                                        <li className="work_right_li">MongoDB</li>
                                        <li className="work_right_li">Express.js</li>
                                        <li className="work_right_li">Firebase</li>
                                        <li className="work_right_li">React.js </li>
                                        <li className="work_right_li">Linux</li>
                                        <li className="work_right_li">AWS</li>
                                        <li className="work_right_li">S3 Bucket</li>
                                        <li className="work_right_li">Branch.io</li>
                                    </ul> <a href="https://mobcoder.com/product-stories/maro/" target="_blank" className="work_right_btn">VIEW CASE STUDY</a>
                                </div>
                            </div>
                        </div>
                    </li> */}
                    {/* <li className="our-work-first cultsport" style={{background:"url(https://cdn.mobcoder.com/dist/images/home-page/product_detail/cultsport_bg.webp)",backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                        <div className="container">
                            <div className="our_work_sub_main">
                                <div className="our_work_sub_main_left"> <img src="https://cdn.mobcoder.com/dist/images/home-page/product_detail/cultsport.webp" alt="Cultsport" className="max-image" decoding="async" loading="lazy"/> </div>
                                <div className="our_work_sub_main_right work-white">
                                    <p className="work_right_head">FITNESS</p>
                                    <h3 className="work_right_heading">Cultsport</h3>
                                    <p className="work_right_para">With the new OneFitPlus app, you can take advantage of
                                        Live sessions, a top-notch gaming experience, and HealthCoins to make your
                                        fitness journey more enjoyable and motivating.</p>
                                    <p className="work_right_foot_head">Tech Stack :</p>
                                    <ul className="work_right_ul">
                                        <li className="work_right_li">Swift</li>
                                        <li className="work_right_li">Node.js</li>
                                        <li className="work_right_li">MongoDB</li>
                                        <li className="work_right_li">Express.js</li>
                                        <li className="work_right_li">Firebase</li>
                                        <li className="work_right_li">React.js </li>
                                        <li className="work_right_li">Linux</li>
                                        <li className="work_right_li">AWS</li>
                                        <li className="work_right_li">S3 Bucket</li>
                                        <li className="work_right_li">Branch.io</li>
                                    </ul> <a href="https://mobcoder.com/product-stories/cultsport/" target="_blank" className="work_right_btn">VIEW CASE STUDY</a>
                                </div>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    </section>
                {/* <section className='customized-business'>
                    <div className='container'>
                        <div className='sec-title'>
                            <h2 className='h1'>Customized Business Solutions</h2>
                        </div>
                        <div className='row-start'>
                            <ul className='customized-ul'>


                                <CustomizedBusiness imgsrc={social} alt='SFA App' caption='SFA App' />
                                <CustomizedBusiness imgsrc={social} alt='Finance Apps' caption='Busy Reporting Apps' />
                                <CustomizedBusiness imgsrc={social} alt='Agent App' caption='Agent Apps' />
                                <CustomizedBusiness imgsrc={social} alt='FollowUp App' caption='Follow-up App' />
                                <CustomizedBusiness imgsrc={social} alt='Lead Management App' caption='Lead Management' />
                                <CustomizedBusiness imgsrc={social} alt='Car Rental App' caption='Car Rental App' />
                                <CustomizedBusiness imgsrc={social} alt='Event App' caption='Event App' />
                                <CustomizedBusiness imgsrc={social} alt='Social App' caption='Order Processing App' />

                            </ul>
                        </div>
                    </div>

                </section> */}

<section className="customized-business">
        <div className="container">
            <div className="sec-title">
                <h2 className="h1">Customized Business Solutions</h2>
            </div>
            <div className="row-start">
                <ul className="customized-ul">
                    <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/social-app.svg" alt="Social Apps"/>
                        </figure>
                        <figcaption>
                            <p>SFA App</p>
                        </figcaption>
                    </li>
                    <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/travel-app.svg" alt="Travel Apps"/>
                        </figure>
                        <figcaption>
                            <p>Busy Reporting<br/> Apps</p>
                        </figcaption>
                    </li>
                    <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/ar-app.svg" alt="AR Apps"/>
                        </figure>
                        <figcaption>
                            <p>Agent Apps</p>
                        </figcaption>
                    </li>
                    <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/finance-app.svg" alt="Finance Apps"/>
                        </figure>
                        <figcaption>
                            <p>Follow-up Apps</p>
                        </figcaption>
                    </li>
                    <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/ai-ml-app.svg" alt="AI/ML Apps"/>
                        </figure>
                        <figcaption>
                            <p>Lead Management<br/> Apps</p>
                        </figcaption>
                    </li>
                    {/* <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/enterprise-app.svg" alt="Enterprise Apps"/>
                        </figure>
                        <figcaption>
                            <p>Enterprise Apps </p>
                        </figcaption>
                    </li> */}
                    <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/fitness-app.svg" alt="Fitness Apps"/>
                        </figure>
                        <figcaption>
                            <p>Car Rental Apps</p>
                        </figcaption>
                    </li>
                    <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/event-app.svg" alt="Event Apps"/>
                        </figure>
                        <figcaption>
                            <p>Event Apps</p>
                        </figcaption>
                    </li>
                    <li className="customized-business-list to-load loaded">
                        <figure>
                            <img src="https://cdn.mobcoder.com/dist/images/mobile-app-page/game-app.svg" alt="Game App"/>
                        </figure>
                        <figcaption>
                            <p>Order Processing<br/> App</p>
                        </figcaption>
                    </li>
                </ul>
            </div>
        </div>
    </section>


                <section className='our-app'>
                    <div className='container'>
                        <div className='sec-title'>
                            <h2 className='h1'>Our Mobile App Development Process</h2>
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
                </section>


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
                <div id='contact'>
      <Contact />
      </div>


            </section>
        </>
    )
}

export default Service