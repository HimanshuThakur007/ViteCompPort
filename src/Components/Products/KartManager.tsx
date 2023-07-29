
import bg from '../../Images/erp-mobileapp-features.png';
import { TiTick } from 'react-icons/ti'
import SmallProductCard from '../../CustomComponents/ProductCard/SmallProductCard';
import './product.css'
import kart from '../../Images/productLogo/all Brands logo-03.png'
import Contact from '../ContactUs/Contact';
import PremimumCard from '../../CustomComponents/ProductCard/premimumCard';
import i2 from '../../Images/KART MANAGER/Scalability and Flexibility.png';
import i25 from '../../Images/KART MANAGER/Cost-Effective Solution.png';
import i4 from '../../Images/KART MANAGER/Reliable Support and Updates.png'
import i24 from '../../Images/KART MANAGER/Integration Capabilities.png';
import s from '../../Images/st-icon-1.svg';
import st from '../../Images/st-icon-2.svg';
import st3 from '../../Images/st-icon-3.svg';
import st4 from '../../Images/st-icon-4.svg';
import st5 from '../../Images/st-icon-5.svg';
import st6 from '../../Images/st-icon-6.svg';
import BenefitProductCard from '../../CustomComponents/ProductCard/BenefitProductCard';
import li2 from '../../Images/KART MANAGER/Scalability and Flexibility1.png'
import li4 from '../../Images/KART MANAGER/Reliable Support and Updates1.png'
import li24 from '../../Images/KART MANAGER/Integration Capabilities1.png'
import li25 from '../../Images/KART MANAGER/Cost-Effective Solution1.png'
import { useRef } from 'react';

const myDivStyle = {
  fontFamily: 'Alegreya, serif',
  color: '#2a1fbc',
  fontWeight: 'bold',
  fontStyle: 'italic'
};

const KartManager = ({clickDownHandler}:any) => {

  let iconStyle = { color: '#2a1fbc' }
  // const clickDownHandler = ()=>{
  //   const targetElement = document.getElementById('contact');
  //   if (targetElement) {
  //     targetElement.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start', 
  //     });
    
  // }
  // }
  return (
    <>
      <section id="hero" className="d-flex align-items-center" style={{ height: '100vh', background: '#f4faff' }}>

        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>How Businesses benefit from <span style={myDivStyle}>Kart Manager</span></h1>
              {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
              <p className='mt-3'>Kart Manager empowers businesses to effectively manage their online stores, improve customer experience, and drive sales growth. </p>
              <div className='btn-wrapper wow fadeInUp'>
                <div className="d-flex justify-content-center justify-content-lg-start mt-4">
                  <a className='btnn btn-primary' onClick={clickDownHandler}>Get Started</a>
                  {/* <Button btnName='Free Trail'/> */}

                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={kart} className="img-fluid animated" alt="" />
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc', fontWeight: 'bold' }}>Kart manager</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                  Kart Manager boosts business efficiency by simplifying accounting and inventory with Excel templates and E-commerce integration, ensuring better tracking, payments management, and faster operations.
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p> */}
                </div>
                <div className='col-lg-12 mb-3' style={{marginTop:'7vh'}}>
                <img src={kart} className="img-fluid" alt=""/>
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <SmallProductCard cardTitle='Scalability and Flexibility' src={i2} src2={li2} cardText='
Built to scale with your business. It can handle all types of E-commerce business needs.' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Integration Capabilities' src={i24} src2={li24} cardText='Easy integration provides easy data import from E-commerce websites for optimized inventory management.' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Reliable Support and Updates' src={i4} src2={li4} cardText='Excellent customer support to ensure a smooth experience for its users' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Cost-Effective Solution' src={i25} src2={li25} cardText='Offers competitive pricing options, making it a cost-effective choice for businesses of all sizes' />
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
                comprehensive business add-on, empowering streamlined accounting and inventory management with Excel templates, order tracking, and seamless e-commerce data integration. Simplify your operations and unlock your business's full potential.

                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />An ERP simplifies all challenges related to Production of an enterprises</li> */}
                      <li><TiTick size={20} style={iconStyle} />Inventory Management.</li>
                      {/* <li><TiTick size={20} style={iconStyle} />MRP (Material Requirement Planning)</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />Quotation/ Vendor Quotation/ Order Managemen</li> */}
                      <li><TiTick size={20} style={iconStyle} />User Defined Excel Templates.</li>
                      <li><TiTick size={20} style={iconStyle} />Order Vs Dispatch Tracking.</li>
                      {/* <li><TiTick size={20} style={iconStyle} />Customer Relationship Management (CRM)</li> */}
                      <li><TiTick size={20} style={iconStyle} />Unsettled References.</li>
                      <li><TiTick size={20} style={iconStyle} />Portal Wise Outstanding</li>
                      <li><TiTick size={20} style={iconStyle} />Import data from E-commerce websites</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />It organize and integrates-operation processes and
                        information flows, to make opti mum use of resources
                      such as (4M) Men, Material Money and Machine</li> */}
                      <li><TiTick size={20} style={iconStyle} />Courier Tracking.</li>
                      <li><TiTick size={20} style={iconStyle} />Missing Invoice Tracking.</li>
                      <li><TiTick size={20} style={iconStyle} />Sales Return Matching.</li>
                      <li><TiTick size={20} style={iconStyle} />Cancelled Order Tracking.</li>
                      <li><TiTick size={20} style={iconStyle} />Bulk Printing.</li>
                      {/* <li><TiTick size={20} style={iconStyle} />Sales Team Collaboration</li>
                      <li><TiTick size={20} style={iconStyle} />Improved Productivity and Efficiency</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />MIS Report</li> */}
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
                  <h2 className='h1'>Benefits of Excellent Kart manager</h2>
                  <div className='lead-text'>
                    <p >Excellent KartManager offers a range of benefits that can positively impact your e-commerce business. Here are some key advantages:</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix' style={{marginTop:'10vh'}}>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Streamlined Operations' text='With Excellent KartManager, you can streamline and automate various aspects of your e-commerce operations. From inventory management and order processing to product catalog updates and customer communication, the software consolidates and centralizes these processes, save you time.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Improved Efficiency' text='By automating manual tasks and providing a centralized platform, Excellent KartManager increases efficiency in managing your online store. It reduces the risk of errors, eliminates duplicate efforts, and allows you to handle a higher volume of orders and products without sacrificing accuracy or speed.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Enhanced Customer Experience' text='Providing a seamless and user-friendly online shopping experience is crucial for customer satisfaction. Excellent KartManager helps you achieve this by offering a mobile-responsive design, smooth checkout process, personalized customer communication, and easy product search and navigation. ' />
                </div>
                {/* <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Accurate Inventory Management' text='SFA mobile apps provide a comprehensive view of customer information, including contact details, communication history, purchase history, and preferences. This enables sales representatives to have more meaningful interactions with customers, personalize their approach, and provide better customer service.' />
                </div> */}
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Data-Driven Insights' text='The built-in analytics and reporting features of Excellent KartManager provide valuable insights into your e-commerce performance. You can analyze sales data, customer behavior, and product trends to make data-driven decisions for your business. These insights can help you optimize your marketing strategies, identify areas for improvement, .' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Seamless Integration' text='Excellent Kart Manager integrates with various third-party tools and services, such as payment gateways, shipping providers, and marketing platforms. This seamless integration ensures smooth communication between different systems, reduces manual data entry, and improves overall operational efficiency of the app.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Cost-Effectiveness' text='By automating processes, reducing errors, and improving efficiency, Excellent KartManager can help you reduce operational costs. Additionally, its competitive pricing and cost-effective features make it a valuable investment for businesses of all sizes, providing a positive return on investment.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Scalability and Flexibility' text='As your e-commerce business grows, Excellent KartManager can scale with you. It accommodates expanding product catalogs, increasing order volumes, and additional sales channels. The softwares flexibility allows you to customize it to suit your specific business needs and adapt to changing market demands.' />
                </div>

                {/* <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Customer Satisfaction' text='Excellent ERP systems enable industries to enhance customer satisfaction through improved order management, faster response times, and accurate delivery tracking. Customer information and history stored in the ERP system enable personalized service and better customer relationship management. This, in turn, leads to increased customer loyalty and repeat business.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Business Intelligence and Analytics' text='Excellent ERP systems often include built-in analytics and reporting capabilities. These features provide valuable insights into business performance, such as sales trends, profitability analysis, and cost optimization opportunities. By leveraging these insights, industries can make data-driven decisions and continuously improve their operations.' />
                </div> */}
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
              {/* <div className='lead-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio sapiente veniam quasi, asperiores, laudantium totam dicta placeat sed eveniet quaerat. Voluptatibus modi fugiat consequatur ratione harum ab mollitia commodi.</p>
              </div> */}
            </div>
            <div className='empty-space-60 clearfix'></div>

          </div>

          <div className='row clearfix mb-4 mt-4'>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Advanced Analytics and Reporting' psrc={s} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Marketing Automation' psrc={st} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Advanced Order Management' psrc={st3} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Multi-Channel Selling' psrc={st4} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Advanced Inventory Control' psrc={st5} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Customer Loyalty and Rewards' psrc={st6} />
            </div>
            {/* <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Expenses' psrc={st7}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Attendance' psrc={st8}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Inventory' psrc={st9}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Communicate' psrc={st10}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Home work' psrc={st11}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Upload Content' psrc={st12}/>
                </div> */}
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

export default KartManager


