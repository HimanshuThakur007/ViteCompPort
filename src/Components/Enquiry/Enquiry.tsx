import React from 'react'
import './Enquiry.css';
import {BsTelephoneInbound} from 'react-icons/bs';
import {HiOutlineMailOpen} from 'react-icons/hi'

const Enquiry = () => {
  return (
    <>
       <section id="enquiry" className="enquiry">
     <div className='inner-page-header section-padding style-dark'>
      <div className="container" data-aos="fade-up">
        <div className='page-title-inner text-center clearfix'>
           <div className='heading-wrapper'>
             <h1 className='h1'>Contact Us</h1>
             <div className='lead-text'>
              <p>What makes a great company? It's really easy. It's also the people that are working here.</p>
             </div>
           </div>

        </div>
       

        </div>
      </div>

      <div className="about-section section-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4">
                                <div className="contact-info-box wow fadeInLeft" data-wow-delay="0.8s">
                                    <div className="contact-wrapper">
                                        <div className="icon">
                                            {/* <i className="mdi mdi-phone-incoming-outline"></i> */}
                                            <BsTelephoneInbound />
                                        </div>
                                        <div className="content">
                                            <h4>Phone</h4>
                                            <p>Our customer care is open from Mon-Sat, 9:30 am to 6:30 pm</p>
                                            <p><a className="btn link-btn" href="tel:1234567890">+91-120-6244444 </a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-box wow fadeInLeft" data-wow-delay="1s">
                                    <div className="contact-wrapper">
                                        <div className="icon">
                                            {/* <i className="mdi mdi-email-open-outline"></i> */}
                                            <HiOutlineMailOpen />
                                        </div>
                                        <div className="content">
                                            <h4>Email</h4>
                                            <p>Our support team will get back to in 48-h during standard business hours.</p>
                                            <p><a className="btn link-btn">info@excellentsoftwares.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="heading-wrapper with-separator">
                                    <span className="sub-title">Get in touch</span>
                                    <h2 className="h1"><span>Connect</span> with us</h2>
                                </div>
                                <div className="text-wrapper">
                                    <p>Please contact us using the details below. For more information about our services, please visit the corresponding page on our web.</p>
                                </div>
                                <div className="contact-form">
                                    <form method="post">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className='form-label'>First Name</label>
                                                <input type="text" className="form-control" id="FiratName" placeholder=""/>
                                            </div>
                                            <div className="form-group col-md-6">
                                            <label className='form-label'>Last Name</label>
                                                <input type="text" className="form-control" id="LastName" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                        <label className='form-label'>Email Address</label>
                                            <input type="email" className="form-control" id="email" placeholder=""/>
                                        </div>
                                        {/* <div className="form-group">
                                            <input type="text" className="form-control" id="subject" placeholder="How can I help you?"/>
                                        </div> */}
                                        <div className="form-group">
                                        <label className='form-label'>Message</label>
                                            <textarea className="form-control" placeholder="" rows={4}></textarea>
                                        </div>
                                        <div className="d-flex justify-content-center justify-content-lg-start mt-4">
        <a className='btnn btn-primary'>Submit</a>
       
      
      </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    </section>
    </>
  )
}

export default Enquiry