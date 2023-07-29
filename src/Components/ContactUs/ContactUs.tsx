import React from 'react'
import Header from '../../CustomComponents/Banner'
import ServicesModal from '../Modals/EnquiryModal'
import { Button } from '../../CustomComponents/Button'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'

const ContactUs = () => {
  return (
    <>
     <section id="contact" className="contact">
     <div className='inner-page-header section-padding style-dark'>
      <div className="container" data-aos="fade-up">
        <div className='page-title-inner text-center clearfix'>
           <div className='heading-wrapper'>
             <h1 className='h1'>Contact</h1>
             <div className='lead-text'>
              <p>What makes a great company? It's really easy. It's also the people that are working here.</p>
             </div>
           </div>

        </div>
       

        </div>
      </div>
      <div className="container" data-aos="fade-up">

        <div className="section-title mt-3">
          <h2>Contact</h2>
          <p>Contact Us By Feeling The Form</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i><MdLocationOn size={30}/></i>
                <h4>Location:</h4>
                <p>Unit No. 216, 2nd Floor, Tower - B,
                   The i-Thum, Plot No. A - 40, Sector - 62,
                   NOIDA, Uttar Pradesh 201309, Bharat<br/>
                   Ph:+ 91-120- 6244444 (100 Lines)
                   </p>
              </div>

              <div className="email">
                <i><AiOutlineMail size={20}/></i>
                <h4>Email:</h4>
                <p> info@excellentsoftwares.com</p>
              </div>

              <div className="phone">
                <i><BiPhoneCall size={20}/></i>
                <h4>Call:</h4>
                <p>09871749499</p>
                <p></p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"  style={{border:'0', width: '100%' ,height: '290px'}} ></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name"><b>Your Name</b></label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name"><b>Your Email</b></label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name"><b>Subject</b></label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group">
                <label htmlFor="name"><b>Message</b></label>
                <textarea className="form-control" name="message" rows={10} required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
              <Button btnName='Send Message'/>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default ContactUs