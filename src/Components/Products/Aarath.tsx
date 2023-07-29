
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

const Aarath = () => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>
     <section id="hero" className="d-flex align-items-center" style={{height:'100vh',background:'#f4faff'}}>

<div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>How Industries benefit from <span style={myDivStyle}>Commission & Interest Management (AARATH)</span></h1>
      {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
      <p className='mt-3'>Effective commission and interest management systems allow industries to accurately calculate and track commissions earned and interest accrued. This ensures that all revenue streams are properly accounted for and maximized, leading to increased profitability.</p>
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc',fontWeight:'bold'}}>Commission & Interest Management (AARATH)</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                  Commission management involves the calculation, tracking, and allocation of commissions earned by financial intermediaries or agents for their services. It is common in industries like investment banking, insurance, real estate, and securities trading. The commission management process typically includes:
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p> */}
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <SmallProductCard cardTitle='Calculation' src={i2} src2={li2} cardText='Determining the commission amounts based on pre-defined rates or agreements. This can vary depending on factors such as the type of transaction, product, or service provided by our app.' />
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Tracking' src={i24} src2={li24} cardText='Monitoring and recording commission-related activities, including the identification of transactions eligible for commissions, the parties involved, and the commission rates applicable' />
                  </div>
                
                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Allocation' src={i4} src2={li4} cardText='Assigning commissions to the relevant individuals or entities, ensuring that the correct amounts are distributed according to the agreed terms.' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Interest Adjustment' src={i25} src2={li25} cardText='Managing adjustments to interest rates, such as when rates change due to market conditions or contractual terms.' />
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
                      <li><TiTick size={20} style={iconStyle} />Commission Calculation</li>
                      <li><TiTick size={20} style={iconStyle} />Commission Tracking</li>
                      {/* <li><TiTick size={20} style={iconStyle} />MRP (Material Requirement Planning)</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />Quotation/ Vendor Quotation/ Order Managemen</li> */}
                      <li><TiTick size={20} style={iconStyle} />Commission Reporting</li>
                      <li><TiTick size={20} style={iconStyle} />Commission Disbursement</li>
                      <li><TiTick size={20} style={iconStyle} />Interest Calculation</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />It organize and integrates-operation processes and
                        information flows, to make opti mum use of resources
                        such as (4M) Men, Material Money and Machine</li> */}
                      <li><TiTick size={20} style={iconStyle} />Interest Accrual and Posting</li>
                      <li><TiTick size={20} style={iconStyle} />Interest Adjustment</li>
                      <li><TiTick size={20} style={iconStyle} />Interest Reporting</li>
                      <li><TiTick size={20} style={iconStyle} />Integration and Automation</li>
                      <li><TiTick size={20} style={iconStyle} />Compliance and Regulatory Considerations</li>
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
                  <h2 className='h1'>Benefits of Commission & Interest Management</h2>
                  <div className='lead-text'>
                    <p >ERP (Enterprise Resource Planning) software offers numerous benefits to businesses. Some of the key advantages of implementing ERP software include:</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix mb-4 mt-4'>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard  head='Financial Transparency' text='Commission and interest management systems enable clear and transparent financial transactions by automating the calculation and recording of commissions and interest. This reduces the likelihood of errors and discrepancies, ensuring accuracy and integrity in financial dealings.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Efficient and Accurate Calculations' text='Manual calculations of commissions and interest can be time-consuming and prone to errors. Using a dedicated system for commission and interest management streamlines the process, eliminating manual calculations and reducing the chances of mistakes.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Cost Savings' text='Effective commission and interest management can help businesses save costs. By automating processes and reducing manual intervention, organizations can lower administrative expenses associated with managing commissions and interest. Additionally, accurate calculations ' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Improved Productivity' text='Commission and interest management systems streamline administrative tasks related to calculating and processing commissions and interest payments. This frees up time for employees to focus on more strategic and value-added activities, improving overall productivity within the organization.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Compliance and Regulatory Adherence' text='Many industries have specific regulations and requirements concerning commissions and interest calculations, particularly in the financial sector. A dedicated commission and interest management system can help ensure compliance with these regulations.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Enhanced Decision-Making' text='By having accurate and up-to-date information on commissions and interest, businesses can make informed decisions regarding sales strategies, product pricing, and resource allocation. This data can provide valuable insights into revenue streams and help drive effective business planning.' />
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
                  <div className='lead-text'>
                    <p>Commission management refers to the processes and systems used by businesses to calculate, track, and manage commissions paid to their employees, agents, or partners. Premium modules for commission management may include advanced features such as:</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix mb-4 mt-4'>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Flexible Commission Structures' psrc={s}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Automated Calculations' psrc={st}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Commission Tracking' psrc={st3}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Integration Capabilities' psrc={st4}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Interest Calculation Methods' psrc={st5}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Configurable Interest Rates' psrc={st6}/>
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

export default Aarath