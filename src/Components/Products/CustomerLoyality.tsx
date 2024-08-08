
import bg from '../../Images/erp-mobileapp-features.png';
import { TiTick } from 'react-icons/ti'
import SmallProductCard from '../../CustomComponents/ProductCard/SmallProductCard';
import './product.css'
import loyalty from '../../Images/productLogo/CL+.png'
import Contact from '../ContactUs/Contact';
import PremimumCard from '../../CustomComponents/ProductCard/premimumCard';
import i2 from '../../Images/CL+/CustomizationB1.png';
import i25 from '../../Images/CL+/cost effectiveness.png';
import i4 from '../../Images/CL+/CustomizatiB.png'
import i24 from '../../Images/CL+/CustomizationB.png';
import s from '../../Images/st-icon-1.svg';
import st from '../../Images/st-icon-2.svg';
import st3 from '../../Images/st-icon-3.svg';
import st4 from '../../Images/st-icon-4.svg';
import st5 from '../../Images/st-icon-5.svg';
import st6 from '../../Images/st-icon-6.svg';
import BenefitProductCard from '../../CustomComponents/ProductCard/BenefitProductCard';
import li2 from '../../Images/CL+/Customization1.png'
import li4 from '../../Images/CL+/Customizati.png'
import li24 from '../../Images/CL+/Customization.png'
import li25 from '../../Images/CL+/cost effectiveness1.png'
import { Helmet } from 'react-helmet';

const myDivStyle = {
  fontFamily: 'Alegreya, serif',
  color: '#2a1fbc',
  fontWeight: 'bold',
  fontStyle: 'italic'
};

const CustomerLoyality = ({clickDownHandler}:any) => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>
      <section id="hero" className="d-flex align-items-center" style={{ height: '100vh', background: '#f4faff' }}>
      <Helmet>
                <title>Excellent softwares || CL+</title>
                <meta name="Customer Loyalty Plus Page" content="Customer Loyalty Plus page content" />
            </Helmet>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-2 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>How Businesses benefit from <span style={myDivStyle}>Customer Loyalty Plus</span></h1>
              {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
              <p className='mt-0'>we are committed to providing you with a user-friendly and feature-rich loyalty management platform. Build a loyal customer base, increase customer retention, and drive your business growth with CL+. Get started today and witness the transformative power of customer loyalty</p>
              <div className='btn-wrapper wow fadeInUp'>
                <div className="d-flex justify-content-center justify-content-lg-start mt-2">
                  <a className='btnn btn-primary' onClick={clickDownHandler}>Get Started</a>
                  {/* <Button btnName='Free Trail'/> */}

                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={loyalty} className="img-fluid animated" alt="" 
               style={{
                width: window.innerWidth <= 768 ? '64%' : '100%',
               maxWidth: '100%'}}
              />
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc', fontWeight: 'bold' }}>Customer Loyalty Plus</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                  Its user-friendly platform and data-driven insights make it easy to create customized loyalty programs tailored to specific customer types. Experience the power of Customer loyalty plus in elevating your brand.
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p> */}
                </div>
                <div className='col-lg-12 mb-3' style={{marginTop:'7vh'}}>
                <img src={loyalty} className="img-fluid" alt=""/>
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <SmallProductCard cardTitle='Customization' src={i2} src2={li2} cardText='Create a unique and engaging experience with extensive customization for loyalty programs, including personalized rewards, targeted promotions, and customer segmentation.' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6 '>
                    <SmallProductCard cardTitle='Integration Capabilities' src={i4} src2={li4} cardText='versatile integration capabilities enable businesses to synchronize loyalty programs with existing systems, simplifying data management and maximizing efficiency.' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Ease of Use' src={i24} src2={li24} cardText='user-friendly interface, easy navigation and setup.Intuitive design, businesses can quickly implement and manage loyalty programs without technical complexities. Streamline your customer engagement and loyalty initiatives effortlessly.' />
                    {/* Streamline your customer engagement and loyalty initiatives effortlessly. */}
                  </div>

                
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Cost-effectiveness' src={i25} src2={li25} cardText='Evaluate the pricing structure of the loyalty program and consider its cost-effectiveness for your business' />
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
                The salient features of Customer Loyalty Plus 
                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />An ERP simplifies all challenges related to Production of an enterprises</li> */}
                      <li><TiTick size={20} style={iconStyle} />Points and Rewards System</li>
                      <li><TiTick size={20} style={iconStyle} />Personalised offers</li>
                      {/* <li><TiTick size={20} style={iconStyle} />MRP (Material Requirement Planning)</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />Quotation/ Vendor Quotation/ Order Managemen</li> */}
                      <li><TiTick size={20} style={iconStyle} />Loyalty points system</li>
                      <li><TiTick size={20} style={iconStyle} />Tiered Membership</li>
                      <li><TiTick size={20} style={iconStyle} />Special Promotions and Exclusive Offers</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />It organize and integrates-operation processes and
                        information flows, to make opti mum use of resources
                      such as (4M) Men, Material Money and Machine</li> */}
                      <li><TiTick size={20} style={iconStyle} />Referral Programs</li>
                      <li><TiTick size={20} style={iconStyle} />Gamification Elements</li>
                      <li><TiTick size={20} style={iconStyle} />Communication and Engagement</li>
                      <li><TiTick size={20} style={iconStyle} />Data and Analytics</li>
                      {/* <li><TiTick size={20} style={iconStyle} />Traceability and Compliance</li>
                      <li><TiTick size={20} style={iconStyle} />Reporting and Analytics</li> */}
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
                  <h2 className='h1'>Benefits of Excellent Customer Loyalty Plus</h2>
                  <div className='lead-text'>
                    <p >Some key advantages of implementing Customer loyalty plus include:</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix' style={{marginTop:'10vh'}}>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Increased Customer Retention' text='By understanding customer preferences and offering timely, customized promotions, businesses can foster loyalty and satisfaction, ultimately leading to increased customer retention rates.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Repeat Business' text='By leveraging data-driven insights and offering seamless experiences, businesses can foster customer loyalty and encourage repeat purchases, driving sustained growth and profitability.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Customer Satisfaction' text='By delivering exceptional service and meeting customer needs promptly, businesses can establish lasting relationships and achieve higher levels of customer satisfaction.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Word-of-Mouth Marketing' text='By providing top-notch service and personalized solutions, businesses can harness the power of word-of-mouth referrals, fostering organic growth and expanding their customer base with satisfied customers who enthusiastically share their positive encounters with others.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Data and Insights' text='Gain a competitive edge through informed decision-making and strategic planning. By analyzing real-time data and customer behavior, companies can uncover valuable trends, optimize operations, and unlock growth opportunities, ensuring long-term success in a dynamic market.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Competitive Advantage' text='Having a customer loyalty program can differentiate your business from competitors, as it demonstrates your commitment to customer satisfaction' />
                </div>
               
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* <div className='container'>
        <div className='row clearfix justify-content-center'>
          <div className='col-lg-8'>
            <div className='heading-wrapper text-center mt-4'>
              <h2>Excellent Provides <span style={{ fontFamily: 'serif', fontWeight: 'bold', fontStyle: 'italic', color: 'rgb(42, 31, 188)' }}>Premium Modules</span></h2>
              <div className='lead-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio sapiente veniam quasi, asperiores, laudantium totam dicta placeat sed eveniet quaerat. Voluptatibus modi fugiat consequatur ratione harum ab mollitia commodi.</p>
              </div>
            </div>
            <div className='empty-space-60 clearfix'></div>

          </div>

          <div className='row clearfix mb-4 mt-4'>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Accounting' psrc={s} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Purchase' psrc={st} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Inventory' psrc={st3} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Production' psrc={st4} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Quality Control' psrc={st5} />
            </div>
            <div className='col-lg-2 col-md-6'>
              <PremimumCard phead='Reporting/Analytics' psrc={st6} />
            </div>
          
          </div>
        </div>
      </div> */}
      <hr />
      <div id='contact'>
      <Contact />
      </div>
    </>
  )
}

export default CustomerLoyality


