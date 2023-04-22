import React from 'react';
import { Button } from '../../CustomComponents/Button';

const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className='benefits-section section-padding' style={{ backgroundColor: '#fff' }}>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8'>
                                <div className='heading-wrapper text-center mt-2'>
                                    <h2 style={{ color: '' }}>Connect <span style={{ fontFamily: 'serif', fontStyle: 'italic' ,color:'#2a1fbc' }}>with Us</span></h2>
                                    <div className='lead-text'>
                                        <p style={{ color: '' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio sapiente veniam quasi, asperiores, laudantium totam dicta placeat sed eveniet quaerat. Voluptatibus modi fugiat consequatur ratione harum ab mollitia commodi.</p>
                                    </div>
                                </div>
                              

                            </div>
                            {/* <div className='row'> */}
                            <div className="col-lg-12 mt-5 mt-lg-0 mb-4 d-flex align-items-stretch">
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
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact