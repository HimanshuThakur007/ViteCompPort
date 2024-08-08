
import bg from '../../Images/erp-mobileapp-features.png';
import { TiTick } from 'react-icons/ti'
import SmallProductCard from '../../CustomComponents/ProductCard/SmallProductCard';
import './product.css'
import info from '../../Images/productLogo/infoserve.png'
import Contact from '../ContactUs/Contact';
import PremimumCard from '../../CustomComponents/ProductCard/premimumCard';
import i2 from '../../Images/INFOSERVE/Organization and coordination1.png';
import i25 from '../../Images/INFOSERVE/Scalability and growth1.png';
import i4 from '../../Images/INFOSERVE/Data management and analysis1.png'
import i24 from '../../Images/INFOSERVE/PRO1.png';
import s from '../../Images/Premium-Modules/infoserve/Inventory Management.png';
import st from '../../Images/Premium-Modules/infoserve/Order Management.png';
import st3 from '../../Images/Premium-Modules/infoserve/Sales and CRM.png';
import st4 from '../../Images/Premium-Modules/infoserve/Financial Management.png';
import st5 from '../../Images/Premium-Modules/infoserve/Integration and API.png';
import st6 from '../../Images/Premium-Modules/infoserve/Analytics and Reporting.png';
import BenefitProductCard from '../../CustomComponents/ProductCard/BenefitProductCard';
import li2 from '../../Images/INFOSERVE/Organization and coordination.png'
import li4 from '../../Images/INFOSERVE/Data management and analysis.png'
import li24 from '../../Images/INFOSERVE/PRO.png'
import li25 from '../../Images/INFOSERVE/Scalability and growth.png';
import { Helmet } from 'react-helmet';


const myDivStyle = {
  fontFamily: 'Alegreya, serif',
  color: '#2a1fbc',
  fontWeight: 'bold',
  fontStyle: 'italic'
};

const InfoServe = ({ clickDownHandler }: any) => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>
      <section id="hero" className="d-flex align-items-center" style={{ height: '100vh', background: '#f4faff' }}>
        <Helmet>
          <title>Excellent softwares || Infoserve</title>
          <meta name="Infoserve Page" content="Infoserve page content" />
        </Helmet>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-2 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>How Businesses benefit from <span style={myDivStyle}>Distributor Management Software</span></h1>
              {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
              <p className='mt-0'>Infoserve empowers businesses with centralized control, powerful reporting, and user-friendly connectivity. It optimizes promotional strategies, ensures reliable data synchronization, and enables effective target setting, all leading to increased efficiency, growth, and success.</p>
              <div className='btn-wrapper wow fadeInUp'>
                <div className="d-flex justify-content-center justify-content-lg-start mt-2">
                  <a className='btnn btn-primary' onClick={clickDownHandler}>Get Started</a>
                  {/* <Button btnName='Free Trail'/> */}

                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={info} className="img-fluid animated" alt="" style={{
             width: window.innerWidth <= 768 ? '38%' : '100%', // Adjust the width based on screen size
            maxWidth: '100%'}}/>
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc', fontWeight: 'bold' }}>Distributor Management Software</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                    Elevate your business with Infoserve, where streamlined control, comprehensive reporting, and reliable data synchronization converge to fuel informed decisions, optimize operations, and ignite accelerated growth.
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p> */}
                </div>

                <div className='col-lg-12 mb-3' style={{ marginTop: '7vh' }}>
                  <img src={info} className="img-fluid" alt="" />
                </div>

              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <SmallProductCard cardTitle='Organization and coordination' src={i2} src2={li2} cardText='Implements a centralized control system that ensures an efficient organization, with powerful reporting capabilities of all transactions distributor points and the company level' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Process automation' src={i24} src2={li24} cardText='offers process automation capabilities automating order processing, invoicing, and inventory updates.Optimizea workflows automating approval processes, task assignments, and notifications' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Data management and analysis' src={i4} src2={li4} cardText='Allows businesses to gather, store, and analyze data related to various aspects of their operations' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Scalability and growth' src={i25} src2={li25} cardText='designed to scale seamlessly with the growing needs of your business allows it to accommodate increasing transaction volumes, users, and data.' />
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
                <h1><br /><span style={{ fontFamily: 'serif', fontWeight: 'bold', fontStyle: 'italic', color: '#2a1fbc' }}> Features</span> </h1>
                <p>
                  Distributor Management Software (DMS) is a specialized software solution designed to streamline and automate various aspects of distributor management and enhance overall operational efficiency. Here are some salient features commonly found in DMS
                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>

                      <li><TiTick size={20} style={iconStyle} />Centralized Reporting Power</li>
                      <li><TiTick size={20} style={iconStyle} />Platform Independent Software</li>

                      <li><TiTick size={20} style={iconStyle} />Easy Sale/Purchase Summary</li>
                      <li><TiTick size={20} style={iconStyle} />Distributor Level Transaction Control</li>
                      <li><TiTick size={20} style={iconStyle} />Anytime/Anywhere Connectivity</li>
                      <li><TiTick size={20} style={iconStyle} />Software Data Synchronization</li>
                      <li><TiTick size={20} style={iconStyle} />No Dependency on Full-Time Internet</li>
                      <li><TiTick size={20} style={iconStyle} />Fast and Reliable Performance</li>
                      <li><TiTick size={20} style={iconStyle} />User-Friendly Interface</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>

                      <li><TiTick size={20} style={iconStyle} />User-Defined Checks and Controls</li>
                      <li><TiTick size={20} style={iconStyle} />Powerful and Customizable MIS</li>
                      <li><TiTick size={20} style={iconStyle} />Target Management (Sales Targets for Different Levels)</li>
                      <li><TiTick size={20} style={iconStyle} />Transaction Sync and Data Control (Branch, State/Zone/Area, Distributor)</li>
                      <li><TiTick size={20} style={iconStyle} />Comprehensive Reports (Retailer Sales, Distributor Sale Purchase, etc.)</li>
                      <li><TiTick size={20} style={iconStyle} />Multi Software Integration - Busy, Tally, etc.</li>


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
                  <h2 className='h1'>Benefits of Distributor Management Software</h2>
                  <div className='lead-text'>
                    <p >Leads to decreased shipping charges and faster delivery to customers, and it also makes things easier for buyers as it enables “one stop shopping” and other conveniences and rewards, such as customer loyalty rewards programs</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix mb-4 mt-4'>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Efficient Order Management' text='Streamlines the order management process by automating tasks such as order placement, tracking, and fulfillment. It helps ensure accurate order processing, reduces errors, and improves overall efficiency.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Inventory Control' text='Inventory control with real-time tracking, automated stock updates, and seamless integration with order processing. With customizable rules and data-driven insights, optimize stock levels, prevent stockouts, and reduce carrying costs, ensuring efficient inventory management' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Enhanced Communication' text='Enables seamless two-way communication, centralized reporting, and reliable connectivity for informed decision-making and efficient collaboration among stakeholders.Anytime/anywhere coonectivity without full-time internet dependency empowers effective communication.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Channel Performance Tracking' text='With Infoserves data-driven approach and robust channel performance tracking capabilities, providing real-time insights into sales performance and distribution channels. 
                 Comprehensive reporting and analytics enable easy assessment of various channels.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Streamlined Payments and Invoicing' text='Streamline payments and invoicing with automated processes, ensuring accurate and timely transactions. Businesses can effortlessly generate and manage invoices, reducing manual efforts and potential errors.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Scalability and Flexibility' text='Exceptional scalability and flexibility, catering to businesses of all sizes and adapting to their evolving needs. Its flexible architecture allows seamless expansion of resources, accommodating growth effortlessly. With customizable features and adaptable functionalities.' />
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
                <p>Take control of your distribution processes with our advanced Distribution Management Premium Module.
                  Designed to streamline your operations and optimize your supply chain, this powerful module offers a
                  range of features to enhance your distribution management capabilities</p>
              </div>
            </div>
            <div className='empty-space-60 clearfix'></div>

          </div>

          <div className='row clearfix mb-4 mt-4'>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Inventory Management' psrc={s} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Order Management' psrc={st} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Sales and CRM' psrc={st3} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Financial Management' psrc={st4} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Integration and API' psrc={st5} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Analytics and Reporting' psrc={st6} />
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

export default InfoServe