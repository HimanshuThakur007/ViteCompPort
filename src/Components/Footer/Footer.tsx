import { AiFillInstagram, AiFillLinkedin, AiFillSkype, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Footer = () => {

  return (
    <>
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Excellent softwares</h4>
                <p>
                  Unit No. 216, 2nd Floor, <br />
                  Tower - B, The i-Thum, <br />
                  Plot No. A - 40, <br />
                  Sector - 62, NOIDA, <br />
                  Uttar Pradesh 201309, Bharat<br />
                  <strong>Phone:</strong>+ 91-120- 6244444 (100 Lines)<br />
                  <strong>Email:</strong>info@excellentsoftwares.com<br />
                </p>
              </div>


              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/about">About us</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/enquiry">Contact Us</NavLink></li>
                  {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to='/webapp'>Web Development</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/mobileapp">Mobile App Development</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/busycust">Busy Customisation</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/consulting">Consulting</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/saasapp">Saas App Development</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/customize_software">Customized Software</NavLink></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                {/* <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p> */}
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"><AiOutlineTwitter /></i></a>
                  <a href="https://www.facebook.com/ExcellentSoftwares/" className="facebook"><i className="bx bxl-facebook"><BsFacebook /></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"><AiFillInstagram /></i></a>
                  {/* <a href="#" className="google-plus"><i className="bx bxl-skype"><AiFillSkype /></i></a> */}
                  <a href="https://in.linkedin.com/company/excellent-softwares---india" className="linkedin"><i className="bx bxl-linkedin"><AiFillLinkedin /></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </footer>

    </>
  );
}

export default Footer;