
import bg from '../../Images/erp-mobileapp-features.png';
import { TiTick } from 'react-icons/ti'
import SmallProductCard from '../../CustomComponents/ProductCard/SmallProductCard';
import './product.css'
import BG from '../../Images/productLogo/B2G111.png'
import Contact from '../ContactUs/Contact';
import PremimumCard from '../../CustomComponents/ProductCard/premimumCard';
import i2 from '../../Images/icon-2.svg';
import i25 from '../../Images/icon-25.svg';
import i4 from '../../Images/icon-4.svg'
import i24 from '../../Images/icon-24.svg';
import s from '../../Images/st-icon-1.svg';
import st from '../../Images/st-icon-2.svg';
import st3 from '../../Images/st-icon-3.svg';
import st4 from '../../Images/st-icon-4.svg';
import st5 from '../../Images/st-icon-5.svg';
import st6 from '../../Images/st-icon-6.svg';
import BenefitProductCard from '../../CustomComponents/ProductCard/BenefitProductCard';
import li2 from '../../Images/icon-2-light.svg'
import li4 from '../../Images/icon-4-light.svg'
import li24 from '../../Images/icon-24-light.svg'
import li25 from '../../Images/icon-25-light.svg'

const myDivStyle = {
  fontFamily:'Alegreya, serif',
  color:'#2a1fbc',
  fontWeight:'bold',
  fontStyle:'italic'
};

const B2G = () => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>
     <section id="hero" className="d-flex align-items-center" style={{height:'100vh',background:'#f4faff'}}>

<div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>How Business benefit from <span style={myDivStyle}>Excellent Busy To Google</span></h1>
      {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
      <p className='mt-3'>Google Cloud's data analytics and machine learning capabilities can be used to optimize manufacturing processes, predict maintenance needs, and streamline supply chain operations. Additionally, Google Workspace (formerly G Suite) offers communication and collaboration tools that can enhance productivity and coordination among teams.</p>
      <div className='btn-wrapper wow fadeInUp'>
      <div className="d-flex justify-content-center justify-content-lg-start mt-4">
        <a className='btnn btn-primary'>Get Started</a>
        {/* <Button btnName='Free Trail'/> */}
      
      </div>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src={BG} className="img-fluid animated" alt=""/>
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc',fontWeight:'bold'}}>Excellent Busy To Google (B2G)</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                  Excellent SFA to empower their sales teams, enhance productivity, and optimize sales processes. By leveraging mobile devices, sales representatives can access real-time customer data, update sales records on the go, 
                   Ultimately, Excellent SFA mobile apps are used to improve sales team performance, streamline workflows, enhance customer engagement, and drive sales growth.

                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p> */}
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <SmallProductCard cardTitle='Centralized Management' src={i2} src2={li2} cardText='Excellent ERP provides a centralized platform to manage all aspects of your business, including inventory, sales, finance, manufacturing, human resources, and more.' />
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Customizable Modules' src={i24} src2={li24} cardText='Tailor Excellent ERP to meet your specific business needs. Choose from a range of modules and functionalities to create a personalized solution that aligns with your unique requirements. ' />
                  </div>
                
                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Real-time Analytics and Reporting' src={i4} src2={li4} cardText='Make data-driven decisions with confidence. Excellent ERP offers real-time analytics and reporting tools, providing valuable insights into your business performance. ' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Seamless Integration' src={i25} src2={li25} cardText='Excellent ERP seamlessly integrates with other software systems, such as CRM platforms, e-commerce platforms, and third-party applications. Achieve a unified ecosystem where data flows seamlessly across your organization,' />
                  </div>
                </div>
               

              </div>
            </div>
          </div>
        </div>
<hr className='mb-4'/>
        <div className='container  mt-5'>
          <div className='row'>

            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">

              <img src={bg} className='image-fluid' />

            </div>

            <div className='col-lg-6 d-flex justify-content-center align-items-stretch content' data-aos="fade-left" data-aos-delay="100">
              <div className='heading mb-3'>
                <h1>App fledged with <br /><span style={{ fontFamily: 'serif',fontWeight:'bold', fontStyle: 'italic', color: '#2a1fbc' }}> Features</span> </h1>
                <p>
                The salient features of Busy to Google (B2G): 
                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>
                      <li><TiTick size={20} style={iconStyle} />40+ Reports.</li>
                      <li><TiTick size={20} style={iconStyle} />One-Time Configuration.</li>
                      <li><TiTick size={20} style={iconStyle} />Configurable Filters.</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      <li><TiTick size={20} style={iconStyle} />User Friendly Interface.</li>
                      <li><TiTick size={20} style={iconStyle} />Customization Available.</li>
                      <li><TiTick size={20} style={iconStyle} />Automated Intervel Based Data Sync.</li>
                     
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
                  <h2 className='h1'>Benefits of Excellent Busy To Google (B2G)</h2>
                  <div className='lead-text'>
                    <p >ERP (Enterprise Resource Planning) software offers numerous benefits to businesses. Some of the key advantages of implementing ERP software include:</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix' style={{marginTop:'10vh'}}>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard  head='Enhanced Productivity' text='SFA mobile apps provide sales representatives with access to critical information and tools on their mobile devices, enabling them to be more productive while on the go. They can update customer data, manage leads, track sales activities, and access sales collateral easily' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Real-Time Data and Analytics' text='With an SFA mobile app, sales teams can access real-time data and analytics about customers, leads, and sales performance. This enables them to make informed decisions, identify trends, and prioritize opportunities. Managers can also gain insights into team performance and make data-driven decisions to optimize.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Improved Sales Processes' text='SFA mobile apps streamline sales processes by automating repetitive tasks, such as data entry, order processing, and reporting. This reduces manual errors, ensures data accuracy, and frees up time for sales representatives to focus on building relationships with customers and closing deals.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Better Customer Relationship Management' text='SFA mobile apps provide a comprehensive view of customer information, including contact details, communication history, purchase history, and preferences. This enables sales representatives to have more meaningful interactions with customers, personalize their approach, and provide better customer service.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Mobility and Flexibility' text='SFA mobile apps allow sales representatives to access and update information from anywhere, anytime. Whether they are on the road, at client meetings, or working remotely, they can stay connected and productive. This flexibility improves responsiveness and allows for timely follow-ups, increasing customer satisfaction.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Collaboration and Communication' text='SFA mobile apps often include features that facilitate collaboration and communication within sales teams. Sales representatives can share information, collaborate on deals, and communicate updates and insights in real-time, fostering teamwork and improving coordination.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Sales Performance Tracking' text='SFA mobile apps enable tracking and monitoring of individual and team sales performance. Managers can set targets, track progress, and provide timely feedback and coaching to improve performance. This promotes accountability and motivates sales representatives to achieve their goals.' />
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
                  <h2>Excellent Provides <span style={{ fontFamily: 'serif', fontWeight:'bold', fontStyle: 'italic', color: 'rgb(42, 31, 188)' }}>Premium Modules</span></h2>
                  {/* <div className='lead-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio sapiente veniam quasi, asperiores, laudantium totam dicta placeat sed eveniet quaerat. Voluptatibus modi fugiat consequatur ratione harum ab mollitia commodi.</p>
                  </div> */}
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix mb-4 mt-4'>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Accounting' psrc={s}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Purchase' psrc={st}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Inventory' psrc={st3}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Production' psrc={st4}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Quality Control' psrc={st5}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Reporting/Analytics' psrc={st6}/>
                </div>
               
              </div>
            </div>
          </div>
<hr />
        <Contact/>
    </>
  )
}

export default B2G


