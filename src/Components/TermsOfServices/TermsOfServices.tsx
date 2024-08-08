import React from 'react';
import { Helmet } from 'react-helmet';

const TermsOfServices: React.FC = () => {
    return (
        <section id="about" className="about">
            <Helmet>
                <title>Excellent softwares || Terms of services </title>
                <meta name="description" content="Terms of services page" />
            </Helmet>

            <div className="container" data-aos="fade-up">

                <div className="row mt-5">
                    <div className='col-lg-12 d-flex justify-content-center align-items-stretch content' data-aos="fade-left" data-aos-delay="100">
                        <div className='heading mb-3'>
                            <h1><span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc' }}>Terms Of Services</span> </h1>
                            <p style={{ color: 'grey' }}>
                                Welcome to <b style={{ color: 'black' }}>Excellent Softwares </b>
                                By accessing and using our website <a href='https://www.excellentsoftwares.com/'>https://www.excellentsoftwares.com/</a>,
                                you agree to comply with and be bound by the following terms and conditions.
                                Please read these terms carefully before using our website.
                            </p>
                            <h6>Acceptance of Terms</h6>
                            <p style={{ color: 'grey' }}>
                                By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our website.
                            </p>
                            <h6>Use of Website </h6>
                            <p style={{ color: 'grey' }}>
                                You are permitted to use our website for your personal or business purposes, subject to the restrictions set out in these terms and conditions. You may not modify, reproduce, or distribute any content from our website without our prior written consent.
                            </p>
                            <h6>Accuracy of Information </h6>
                            <p style={{ color: 'grey' }}>
                                While we strive to keep the information on our website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
                            </p>
                            <h6>Visitor Conduct</h6>
                            <p style={{ color: 'grey' }}>When using our website, you agree not to post or transmit any material that is unlawful, defamatory, obscene, offensive, or otherwise objectionable. You also agree not to engage in any conduct that may disrupt or interfere with the operation of the website.</p>
                            <h6>Links to Third-Party Websites</h6>
                            <p style={{ color: 'grey' }}>
                                Our website may contain links to third-party websites that are not owned or controlled by Excellent Softwares. We have no control over the content, privacy policies, or practices of these websites and assume no responsibility for them.
                            </p>
                            <h6>Limitation of Liability</h6>
                            <p style={{ color: 'grey' }}>In no event shall <b style={{ color: 'black' }}>Excellent Softwares</b> be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or the inability to use our website, even if we have been advised of the possibility of such damages.</p>
                            <h6>Governing Law</h6>
                            <p style={{ color: 'grey' }}>
                                These terms and conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.
                            </p>
                            <h6>Changes to Terms</h6>
                            <p style={{ color: 'grey' }}>
                                We reserve the right to modify or update these terms and conditions at any time without prior notice. By continuing to use our website after any such changes, you agree to be bound by the revised terms and conditions.
                            </p>
                            <h6>Contact Us</h6>
                            <p style={{ color: 'grey' }}>
                                If you have any questions or concerns about these terms and conditions, please contact us at  <a href="mailto:info@excellentsoftwares.com" style={{ color: "blue", cursor: 'pointer' }}>info@excellentsoftwares.com</a>.
                                  <br/>
                                  <br/>
                                <b>Thank you for visiting Excellent Softwares!</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfServices;
