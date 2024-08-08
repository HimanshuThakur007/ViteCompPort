import React from 'react'
import { TiTick } from 'react-icons/ti'
import bg from '../../Images/erp-function.png';
import Testimonial from '../Testimonial/Testimonial';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BusyCustomization = ({openHandler}:any) => {
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
                <title>Excellent softwares || Busy Customization</title>
                <meta name="Busy Customization Page" content="Busy Customization services page content" />
            </Helmet>
        <section className="breadcrumbs webdev-breadcrumb" style={{padding: '60px 0', overflow:'hidden', marginTop:'2px'}}>
<div className="container pos-r">
    <div className="banner-content">
        <div className="crumb-cont-main">
            <div className="breadcrumb-content">
                <h1> <span>Busy Customization </span> Services Driving Customer Centric
                    Solutions for You</h1>
                <a href="#" className="btnn btn-white" onClick={openHandler}>Let's Talk </a>
            </div>
        </div>
    </div>
</div>
</section>
        <section className="next-gen-web">
<div className="container">
    <div className="sec-title">
        <h2 className="h1">Customisation of Busy</h2>
        <p>Maintaining financial records of a company is a Herculean task as a small error can quickly turn into a catastrophe. To maintain and keep track of all financial records of a company accounting software like Busy is employed. Busy software is fast, easy and effective accounting software with a highly secured database structure. It minimizes the workload and increase the overall work efficiency of the financial department of any company. It is an integrated accounting package developed for small and medium sized business organization.</p>
        <p>Excellent Softwares is a Channel Partner of Busy accounting package. The Busy business accounting software comes in three version- Basic, Standard and Enterprise. The Basic package is designed for micro and small scale business houses; the Standard package is designed for small and medium sized organization and the Enterprise edition is for large scale organization. </p>
        <p> The Basic package is a single user variant whereas the Enterprise edition and the Standard are available in three variants – single user, multi user and client server. The different versions are available with optional modules to suit specific requirements of every business needs. </p>
        <p>Excellent Softwares isn’t just the authorized Channel Partner of Busy accounting software but also of other Busy products like BUSY Payroll, Busy Bar Code Printing Software, and Busy Customer Service Management Software. We also provide additional services to clients like BUSY Customization, BUSY Data Synchronization and BUSY Implementation.</p>
    </div>
</div>
</section>

<div className='container  mt-5'>
          <div className='row'>

            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">

              <img src={bg} className='image-fluid' />

            </div>

            <div className='col-lg-6 d-flex justify-content-center align-items-stretch content' data-aos="fade-left" data-aos-delay="100">
              <div className='heading mb-3'>
                <h1>Busy Customisation <br /><span style={{ fontFamily: 'serif', fontWeight: 'bold', fontStyle: 'italic', color: '#2a1fbc' }}> Features</span> </h1>
                <p>
                Prominent Features of Busy Accounting Package are
                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />An ERP simplifies all challenges related to Production of an enterprises</li> */}
                      <li><TiTick size={20} style={iconStyle} />Supports multiple currencies</li>
                      <li><TiTick size={20} style={iconStyle} />Inventory management for multiple location</li>
                      {/* <li><TiTick size={20} style={iconStyle} />MRP (Material Requirement Planning)</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />Quotation/ Vendor Quotation/ Order Managemen</li> */}
                      <li><TiTick size={20} style={iconStyle} />Purchase order and sales order processing</li>
                      <li><TiTick size={20} style={iconStyle} />Multiple company accounting</li>
                      {/* <li><TiTick size={20} style={iconStyle} />Quality Management</li> */}
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />It organize and integrates-operation processes and
                        information flows, to make opti mum use of resources
                        such as (4M) Men, Material Money and Machine</li> */}
                      <li><TiTick size={20} style={iconStyle} />State wise sales tax reporting</li>
                      <li><TiTick size={20} style={iconStyle} />E-mail and SMS integration</li>
                      <li><TiTick size={20} style={iconStyle} />State wise VAT returns</li>
                      <li><TiTick size={20} style={iconStyle} />User configurable document and order processing</li>
                      {/* <li><TiTick size={20} style={iconStyle} />Reporting and Analytics</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />MIS Report</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


   

       
        <section className='our-app'>
            <div className='container'>
                <div className='sec-title'>
                    <h2 className='h1'>Our Busy Customisation Process</h2>
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


    {/* </section> */}
</>
  )
}

export default BusyCustomization