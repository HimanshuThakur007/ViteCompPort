
import bg from '../../Images/erp-mobileapp-features.png';
import { TiTick } from 'react-icons/ti'
import SmallProductCard from '../../CustomComponents/ProductCard/SmallProductCard';
import './product.css'
import erp from '../../Images/erp-system-img.png'
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
import st7 from '../../Images/st-icon-7.svg';
import st8 from '../../Images/st-icon-8.svg';
import st9 from '../../Images/st-icon-9.svg';
import st10 from '../../Images/st-icon-10.svg';
import st11 from '../../Images/st-icon-11.svg';
import st12 from '../../Images/st-icon-12.svg';
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

const Asset = () => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>
     <section id="hero" className="d-flex align-items-center" style={{height:'100vh',background:'#f4faff'}}>

<div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>How Industries benefit from <span style={myDivStyle}>Fixed Asset Management Software</span></h1>
      {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
      <p className='mt-3'>Excellent ERP system can provide industries with increased operational efficiency, better data management, improved collaboration, enhanced customer satisfaction, compliance adherence, scalability, and informed decision-making. These benefits contribute to the overall competitiveness and success of industries across various sectors.</p>
      <div className='btn-wrapper wow fadeInUp'>
      <div className="d-flex justify-content-center justify-content-lg-start mt-4">
        <a className='btnn btn-primary'>Get Started</a>
        {/* <Button btnName='Free Trail'/> */}
      
      </div>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src={erp} className="img-fluid animated" alt=""/>
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc',fontWeight:'bold'}}>Fixed Asset Management Software</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                  Are you tired of juggling multiple systems to manage your business operations? Look no further than Excellent ERP - a comprehensive and intuitive software solution designed to simplify and optimize your business processes. With Excellent ERP, you can seamlessly integrate various functions within your organization, saving time, increasing efficiency, and driving growth.
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p> */}
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <SmallProductCard cardTitle='Centralized Management' src={i2} src2={li2} cardText='Excellent ERP provides a centralized platform to manage all aspects of your business, including inventory, sales, finance, manufacturing, human resources, and more. Say goodbye to data silos and enjoy a holistic view of your organization.' />
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Customizable Modules' src={i24} src2={li24} cardText='Tailor Excellent ERP to meet your specific business needs. Choose from a range of modules and functionalities to create a personalized solution that aligns with your unique requirements. Whether you are a small startup or a large enterprise, Excellent ERP can scale with your business.' />
                  </div>
                
                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Real-time Analytics and Reporting' src={i4} src2={li4} cardText='Make data-driven decisions with confidence. Excellent ERP offers real-time analytics and reporting tools, providing valuable insights into your business performance. Access key metrics, generate customized reports, and gain a deeper understanding of your operations to drive efficiency and identify growth opportunities.' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Seamless Integration' src={i25} src2={li25} cardText='Excellent ERP seamlessly integrates with other software systems, such as CRM platforms, e-commerce platforms, and third-party applications. Achieve a unified ecosystem where data flows seamlessly across your organization, eliminating manual data entry and ensuring data accuracy.' />
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
                ERP features specifically tailored for the manufacturing industry:
                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />An ERP simplifies all challenges related to Production of an enterprises</li> */}
                      <li><TiTick size={20} style={iconStyle} />Bill of Materials (BOM) Management</li>
                      <li><TiTick size={20} style={iconStyle} />Production Planning and Scheduling</li>
                      {/* <li><TiTick size={20} style={iconStyle} />MRP (Material Requirement Planning)</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />Quotation/ Vendor Quotation/ Order Managemen</li> */}
                      <li><TiTick size={20} style={iconStyle} />Shop Floor Control</li>
                      <li><TiTick size={20} style={iconStyle} />Inventory Management</li>
                      <li><TiTick size={20} style={iconStyle} />Quality Management</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />It organize and integrates-operation processes and
                        information flows, to make opti mum use of resources
                        such as (4M) Men, Material Money and Machine</li> */}
                      <li><TiTick size={20} style={iconStyle} />Material Requirements Planning (MRP)</li>
                      <li><TiTick size={20} style={iconStyle} />Equipment Maintenance</li>
                      <li><TiTick size={20} style={iconStyle} />Costing and Financial Management</li>
                      <li><TiTick size={20} style={iconStyle} />Traceability and Compliance</li>
                      <li><TiTick size={20} style={iconStyle} />Reporting and Analytics</li>
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
                  <h2 className='h1'>Benefits of Fixed Asset Management Software</h2>
                  <div className='lead-text'>
                    <p >ERP (Enterprise Resource Planning) software offers numerous benefits to businesses. Some of the key advantages of implementing ERP software include:</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix mb-4 mt-4'>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard  head='Streamlined Processes' text='Excellent ERP software integrates various departments and functions within an organization, enabling seamless communication and collaboration. It streamlines business processes, eliminates duplicate and manual data entry, and reduces the need for multiple systems or spreadsheets.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Improved Efficiency' text='By automating tasks and eliminating manual processes, Excellent ERP software improves operational efficiency. It minimizes errors, reduces processing time, and increases productivity by providing real-time information, automating routine tasks, and optimizing workflows.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Enhanced Data Visibility' text='Excellent ERP software provides a centralized database that stores all relevant information, allowing users to access accurate, up-to-date data from various departments. This improves decision-making by providing a holistic view of the organizations performance and enables data-driven insights.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Scalability and Flexibility' text='Excellent ERP software is designed to scale with the growth of a business. 
                It can adapt to changing requirements, accommodate additional users, and integrate with other systems or modules as needed. 
                This flexibility enables organizations to expand their operations without significant disruptions.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Cost Savings' text='While implementing an Excellent ERP system requires an initial investment, 
                it can lead to long-term cost savings. By streamlining processes, reducing manual errors, optimizing inventory levels, and improving resource management, Excellent ERP software helps minimize operational costs and enhances overall efficiency.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Improved Data Management' text='systems provide a centralized database that stores all relevant information. This enables industries to have a single source of truth for data, ensuring data accuracy and consistency across departments. Real-time data visibility allows for better decision-making and helps in identifying trends, opportunities, and potential issues.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Effective Resource Planning' text='Excellent ERP systems provide tools for resource planning, including inventory control, supply chain management, and production scheduling. These features help industries optimize resource allocation, reduce wastage, and maintain optimal inventory levels. By aligning resources with demand, industries can minimize costs and improve customer satisfaction.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Customer Satisfaction' text='Excellent ERP systems enable industries to enhance customer satisfaction through improved order management, faster response times, and accurate delivery tracking. Customer information and history stored in the ERP system enable personalized service and better customer relationship management. This, in turn, leads to increased customer loyalty and repeat business.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Business Intelligence and Analytics' text='Excellent ERP systems often include built-in analytics and reporting capabilities. These features provide valuable insights into business performance, such as sales trends, profitability analysis, and cost optimization opportunities. By leveraging these insights, industries can make data-driven decisions and continuously improve their operations.' />
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
        <Contact/>
    </>
  )
}

export default Asset