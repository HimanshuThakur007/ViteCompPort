import React from 'react';
import { Helmet } from 'react-helmet';
import { AiFillInstagram, AiFillLinkedin, AiFillSkype, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const FeedBackPage = () => {
  return (
   <>
    <section className="how-started mt-1">
    <Helmet>
                <title>Excellent softwares || FeedBack Page </title>
                <meta name="FeedBack Page" content="FeedBack page content" />
            </Helmet>
    <div className="container">
        <div className="how_it_start_section">
            <div className="sec-title">
                <h3 className="">Like and Subscribe</h3>
                {/* <p>
                    Since 2002, we've served more than 5000+ Businesses. We are delivering user-friendly and Excellent solutions by
                    collaborating with a diversified team of specialists with distinct backgrounds and experiences.
                </p> */}
            </div>
            <div className="row-start">
                <ul className="how_it_start_ul" style={{padding:'0px'}}>
                    <li className="how_it_start_li" id="counter-box">
                        <div>
                            <h3 className="how_it_start_li_head d-flex justify-content-center"><span className="count1" data-number="250"><a href="https://www.youtube.com/@ExcellentSoftwares" className="youtube"><i className="bx bxl-youtube"><img src='https://cdn-icons-png.flaticon.com/128/1384/1384060.png'/></i></a></span></h3>
                            {/* <p className="how_it_start_li_para">Youtube</p> */}
                            <img src='src/Images/social-link/esyoutube.png'/>
                        </div>
                    </li>
                    <li className="how_it_start_li" id="counter-box1">
                        <div>
                            <h3 className="how_it_start_li_head d-flex justify-content-center">
                                <span className="count1" data-number="200"> <a href="https://www.facebook.com/ExcellentSoftwares/" className="facebook"><i className="bx bxl-facebook"><img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png'/></i></a></span></h3>
                            {/* <p className="how_it_start_li_para">facebook</p> */}
                            <img src='src/Images/social-link/fbqr.png'/>
                        </div>
                    </li>
                    <li className="how_it_start_li" id="counter-box2">
                        <div>
                            <h3 className="how_it_start_li_head d-flex justify-content-center"><span className="count1" data-number="100">
                            <a href="https://www.instagram.com/excellentsoftwares?utm_source=qr&igsh=MWw3OGd2cjJ5OTZmOQ==" className="instagram" data-target="instagram" target="_blank"><i className="bx bxl-instagram"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"/></i></a>
                                </span></h3>
                            {/* <p className="how_it_start_li_para">Instagram</p> */}
                            <img src='src/Images/social-link/esinstaqr.png'/>
                        </div>
                    </li>
                    <li className="how_it_start_li" id="counter-box3">
                        <div>
                        <h3 className="how_it_start_li_head d-flex justify-content-center"><span className="count1" data-number="250"><a href="https://www.linkedin.com/company/excellent-softwares/" className="linkedin"><i className="bx bxl-linkedin"><img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png'/></i></a></span></h3>
                            {/* <p className="how_it_start_li_para">Custom Solutions Delivered</p> */}
                            <img src='src/Images/social-link/eslinkdin.png'/>
                        </div>
                    </li>
                  
                </ul>
            </div>
        </div>
    </div>
</section>
   </>
  )
}

export default FeedBackPage