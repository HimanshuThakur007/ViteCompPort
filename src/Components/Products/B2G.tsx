
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
import { Helmet } from 'react-helmet';

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
     <Helmet>
                <title>Excellent softwares || B2G</title>
                <meta name="B2G Page" content="B2G page content" />
            </Helmet>
<div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-2 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>How Business benefit from <span style={myDivStyle}>Excellent Busy To Google</span></h1>
      {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
      <p className='mt-0'>Busy to Google, revolutionizes the way businesses manage and access their data by seamlessly integrating Busy data with Google Drive. This innovative Add-on by Excellent Softwares empowers businesses with unparalleled convenience and efficiency.</p>
      <div className='btn-wrapper wow fadeInUp'>
      <div className="d-flex justify-content-center justify-content-lg-start mt-2">
        <a className='btnn btn-primary'>Get Started</a>
        {/* <Button btnName='Free Trail'/> */}
      
      </div>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src={BG} className="img-fluid animated" alt=""
       style={{
        width: window.innerWidth <= 768 ? '49%' : '100%',
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc',fontWeight:'bold'}}>Excellent Busy To Google (B2G)</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                  Scheduled syncing is a feature offered by BtoG that allows businesses to automate the synchronization process between BUSY software and Google Drive at specified intervals. Here's how this benefit works:

                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p> */}
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <SmallProductCard cardTitle='Real-Time Accessibility' src={i2} src2={li2} cardText='Excellent ERP provides a centralized platform to manage all aspects of your business, including inventory, sales, finance, manufacturing, human resources, and more.' />
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Enhanced Data Security' src={i24} src2={li24} cardText='BtoG ensures that your data remains safe and confidential. Reports synced to Google Drive are securely stored, and access is restricted to authorized personnel' />
                  </div>
                
                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Streamlined Workflow' src={i4} src2={li4} cardText='Simplifies workflow by automating the sync process between BUSY software and Google Drive. Once configured, you can set it and forget it, allowing BtoG to handle the data synchronization seamlessly in the background, saving you time and effort.' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Scheduled Syncing' src={i25} src2={li25} cardText='BtoG auto-scheduler feature to set intervals for data synchronization according to your preferences. Whether its every few minutes or at specific times of the day, BtoG offers flexibility in syncing data to Google Drive, ensuring that you are always working with the most current information' />
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
                      <li><TiTick size={20} style={iconStyle} />Comprehensive Monitoring</li>
                      <li><TiTick size={20} style={iconStyle} />User-Friendly Setup</li>
                      <li><TiTick size={20} style={iconStyle} />Customizable Data Syncing</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      <li><TiTick size={20} style={iconStyle} />Efficient Data Management</li>
                      <li><TiTick size={20} style={iconStyle} />Seamless Integration</li>
                      <li><TiTick size={20} style={iconStyle} />Scalability</li>
                     
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
                    <p >The benefits of Excellent Busy To Google (B2G) to every business owner:</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix' style={{marginTop:'10vh'}}>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard  head='Real-Time Insights' text='B2G enables business owners to access real-time insights into their companys performance, including outstanding amounts, stock status, and billing details. Stay informed and makes data-driven decisions swiftly to drive business growth and success' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Streamlined Operations' text='Say goodbye to manual data transfers and cumbersome processes with B2G. Automate data syncing between BUSY software and Google Drive, freeing up valuable time and resources for business owners to focus on strategic initiatives and core operations' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Efficient Collaboration' text='Foster collaboration and teamwork among employees by providing them with easy access to updated reports and data via Google Drive. Enable seamless communication and decision-making across departments, leading to increased productivity and efficiency.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Customizable Solutions' text='Tailor B2G to suit the unique needs and preferences of your business. Select specific reports and companies to sync with Google Drive, customize syncing schedules, and adapt the app to align with your workflow demands seamlessly.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Cost Savings' text='Reduce overhead costs associated with manual data entry and management processes by implementing B2G. Increase operational efficiency and optimize resource utilization, resulting in significant cost savings over time.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Scalable Solutions' text='Scale your data syncing operations effortlessly with B2G as your business grows. Whether you are a small startup or a large enterprise, B2G adapts to your evolving needs without compromising performance or security.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Competitive Advantage' text='Gain a competitive edge in the market by leveraging B2G to streamline operations, improve decision-making, and enhance customer satisfaction. Stay ahead of the competition by embracing innovative solutions that drive business growth and success.' />
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
                  <h2>Excellent Provides <span style={{ fontFamily: 'serif', fontWeight:'bold', fontStyle: 'italic', color: 'rgb(42, 31, 188)' }}>Premium Modules</span></h2>
                  
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
          </div> */}
<hr />
        <Contact/>
    </>
  )
}

export default B2G


