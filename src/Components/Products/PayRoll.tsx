
import bg from '../../Images/erp-mobileapp-features.png';
import { TiTick } from 'react-icons/ti'
import SmallProductCard from '../../CustomComponents/ProductCard/SmallProductCard';
import './product.css'
import erp from '../../Images/erp-system-img.png'
import Contact from '../ContactUs/Contact';
import PremimumCard from '../../CustomComponents/ProductCard/premimumCard';
import i2 from '../../Images/excellent pay/accuracy--.png';
import i25 from '../../Images/excellent pay/customerservice.png';
import i4 from '../../Images/excellent pay/Report.png'
import i24 from '../../Images/excellent pay/efficiency-.png';
import s from '../../Images/Premium-Modules/Excellent Pay/Employee Data Management.png';
import st from '../../Images/Premium-Modules/Excellent Pay/Payroll Calculation.png';
import st3 from '../../Images/Premium-Modules/Excellent Pay/Deductions and Benefits.png';
import st4 from '../../Images/Premium-Modules/Excellent Pay/Payroll Reporting.png';
import st5 from '../../Images/Premium-Modules/Excellent Pay/Integration with Time and Attendance.png';
import st6 from '../../Images/Premium-Modules/Excellent Pay/Self-Service Portals.png';
import BenefitProductCard from '../../CustomComponents/ProductCard/BenefitProductCard';
import li2 from '../../Images/excellent pay/accuracy.png'
import li4 from '../../Images/excellent pay/Reporting and Analytics.png'
import li24 from '../../Images/excellent pay/efficiency.png'
import li25 from '../../Images/excellent pay/customer-service.png';
import payroll from '../../Images/productLogo/add7.png';
import { Helmet } from 'react-helmet';

const myDivStyle = {
  fontFamily: 'Alegreya, serif',
  color: '#2a1fbc',
  fontWeight: 'bold',
  fontStyle: 'italic'
};

const PayRoll = ({ clickDownHandler }: any) => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>
      <section id="hero" className="d-flex align-items-center" style={{ height: '100vh', background: '#f4faff' }}>
        <Helmet>
          <title>Excellent softwares || Excellent Pay</title>
          <meta name="Payroll Page" content="Payroll page content" />
        </Helmet>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-2 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>How Industries benefit from <span style={myDivStyle}>Excellent Pay</span></h1>
              <p className='mt-0'>Excellent pay management through improved employee satisfaction, enhanced retention and recruitment, legal compliance, increased productivity, cost savings, better financial planning, and streamlined benefits administration.</p>
              <div className='btn-wrapper wow fadeInUp'>
                <div className="d-flex justify-content-center justify-content-lg-start mt-1">
                  <a className='btnn btn-primary' onClick={clickDownHandler}>Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={payroll} className="img-fluid animated" alt="" style={{
             width: window.innerWidth <= 768 ? '60%' : '100%', // Adjust the width based on screen size
            maxWidth: '100%', // Ensure the image doesn't exceed its container width
    }}/>
            </div>
          </div>
        </div>

      </section>

      <section id="about" className="about ">

        <div className='features-section section-padding'>
          <div className='container'>
            <div className='row clearfix align-items-center justify-content-between'>
              <div className='col-lg-5'>
                <div className='heading-wrapper with-separator'>
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc', fontWeight: 'bold' }}>Excellent Pay</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                    It contributes to employee satisfaction, legal compliance, and financial stability. Implementing an efficient and reliable payroll system can streamline these processes and reduce the risk of errors and non-compliance.
                  </p>
                
                </div>
                <div className='col-lg-12 mb-3' style={{ marginTop: '7vh' }}>
                  <img src={payroll} className="img-fluid" alt="" />
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <SmallProductCard cardTitle='Accuracy' src={i2} src2={li2} cardText='Ensures accurate calculations of employee wages, taxes, and deductions, minimizing errors and discrepancies.' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Automation and Efficiency' src={i24} src2={li24} cardText='Streamlines and automates payroll processes, reducing manual efforts and time.' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Reporting and Analytics' src={i4} src2={li4} cardText='Robust reporting and analytics capabilities help businesses gain insights into labor costs . It offer customizable reports and dashboards to meet specific reporting needs.' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Customer Support' src={i25} src2={li25} cardText='The availability of reliable customer support, such as documentation, tutorials, and responsive helpdesk assistance, contributes to a positive user experience ' />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <hr className='mb-4' />
        <div className='container  mt-5'>
          <div className='row'>

            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">

              <img src={bg} className='image-fluid' />

            </div>

            <div className='col-lg-6 d-flex justify-content-center align-items-stretch content' data-aos="fade-left" data-aos-delay="100">
              <div className='heading mb-3'>
                <h1><span style={{ fontFamily: 'serif', fontWeight: 'bold', fontStyle: 'italic', color: '#2a1fbc' }}> Features</span> </h1>
                <p>
                  The salient features of Excellent Pay:
                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>

                      <li><TiTick size={20} style={iconStyle} />HR & Benefits Administration</li>

                      <li><TiTick size={20} style={iconStyle} />Employee Management</li>
                      <li><TiTick size={20} style={iconStyle} />Payroll Processing</li>
                      <li><TiTick size={20} style={iconStyle} />Compliance Management</li>
                      <li><TiTick size={20} style={iconStyle} />Compensation Management</li>



                      <li><TiTick size={20} style={iconStyle} />Time & Attendance</li>

                      <li><TiTick size={20} style={iconStyle} />Gate Pass Management</li>
                      <li><TiTick size={20} style={iconStyle} />Leave & Over Time Management</li>

                      <li><TiTick size={20} style={iconStyle} />Personal Data Management</li>
                      <li><TiTick size={20} style={iconStyle} />ESIC/EPF/Labour Welfare Fund</li>

                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>

                      <li><TiTick size={20} style={iconStyle} />Employee Assets Tracking</li>
                      <li><TiTick size={20} style={iconStyle} />Loan and Advance Management</li>
                      <li><TiTick size={20} style={iconStyle} />Bonus & Gratuity</li>

                      <li><TiTick size={20} style={iconStyle} />Canteen Management</li>
                      <li><TiTick size={20} style={iconStyle} />Bus Route Management</li>
                      <li><TiTick size={20} style={iconStyle} />Letter/Id Cards Printing</li>

                      <li><TiTick size={20} style={iconStyle} />Analytics and Reporting</li>
                      <li><TiTick size={20} style={iconStyle} />Integration Capabilities</li>
                      <li><TiTick size={20} style={iconStyle} />Self-Service Portals</li>
                      <li><TiTick size={20} style={iconStyle} />Mobile Accessibility</li>


                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='benefits-section section-padding style-dark dark-bg gradient-heading-bg mt-5'>
          <div className='container'>
            <div className='row clearfix justify-content-center'>
              <div className='col-lg-8'>
                <div className='heading-wrapper text-center'>
                  <h2 className='h1'>Benefits of Excellent Pay Software</h2>
                  <div className='lead-text'>
                    <p>Some of The Benefits of Excellent Pay software are</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix' style={{ marginTop: '12vh' }}>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Time savings' text='Automating processes reduces the time and effort required for manual calculations, data entry, and paperwork.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Accuracy' text='Minimize the risk of errors and ensure accurate calculations, reducing the chances of compliance issues.' />
                  {/* or employee disputes */}
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Cost efficiency' text='By streamlining , businesses can save on administrative costs and potentially avoid penalties resulting from compliance errors.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Employee satisfaction' text='Self-service portals provide convenience to employees, allowing them to access their payroll information easily.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Data security' text='Comes with robust security measures to protect sensitive employee information, reducing the risk of data breaches.' />
                </div>
              
              </div>
            </div>
          </div>
        </div>

      </section>
      <div className='container'>
        <div className='row clearfix justify-content-center'>
          <div className='col-lg-8'>
            <div className='heading-wrapper text-center mt-4'>
              <h2><span style={{ fontFamily: 'serif', fontWeight: 'bold', fontStyle: 'italic', color: 'rgb(42, 31, 188)' }}>Premium Modules</span></h2>
              <div className='lead-text'>
                <p>We understand that managing payroll can be a complex and time-consuming task. That's why we're excited to offer our Payroll Premium Modules, a comprehensive suite of tools designed to streamline and enhance your payroll management process.</p>
              </div>
            </div>
            <div className='empty-space-60 clearfix'></div>

          </div>

          <div className='row clearfix mb-4 mt-4'>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Employee Data Management' psrc={s} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Payroll Calculation' psrc={st} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Deductions and Benefits' psrc={st3} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Payroll Reporting' psrc={st4} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Integration with Time and Attendance' psrc={st5} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Self-Service Portals' psrc={st6} />
            </div>
          
          </div>
        </div>
      </div>
      <hr />
      <div id='contact'>
        <Contact />

      </div>
    </>
  )
}

export default PayRoll