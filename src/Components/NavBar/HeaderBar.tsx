import { BiPhoneCall } from 'react-icons/bi'
import './HeaderBar.css'
import { AiOutlineMail } from 'react-icons/ai'

const HeaderBar = () => {
  return (
    <div>
        <div className='top-header-area'>
        <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-8 col-12">
        <ul className="top-header-contact-info">
          <li><i className="bx bx-phone-call"><BiPhoneCall/></i> <a href="tel:+91-9871749499">+91-9871749499</a></li>
          <li><i className="bx bx-envelope"><AiOutlineMail/></i> <a href="mailto:info@excellentsoftwares.com"> info@excellentsoftwares.com</a></li>
        </ul>
      </div>
      <div className="col-lg-6 col-md-6">
        {/* <div className="top-header-btn"> <a href="contact-us.html" className="default-btn">Get a Quote</a> </div> */}
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default HeaderBar