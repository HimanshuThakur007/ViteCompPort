
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

const myDivStyle = {
  fontFamily:'Alegreya, serif',
  color:'#2a1fbc',
  fontWeight:'bold',
  fontStyle:'italic'
};

const Products = () => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>
     <section id="hero" className="d-flex align-items-center" style={{height:'100vh',background:'#f4faff'}}>

<div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>How Industries benefit from <span style={myDivStyle}>Excellent ERP Systems</span></h1>
      {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
      <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque dignissim eget.</p>
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc',fontWeight:'bold'}}>Excellent ERP</span><br />System</h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aspernatur, molestiae nam libero quaerat eum veritatis recusandae harum, quibusdam reiciendis sunt deleniti dolore? Explicabo reiciendis sapiente iusto atque modi eligendi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p>
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Easy to Implement and use' src={i2} cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Provides Custom Dashboards' src={i24} cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales' />
                  </div>
                
                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Access data anywhere anytime' src={i4} cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='A cost-effective solutions' src={i25} cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales' />
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sunt labore eos deleniti atque in recusandae id iure exercitationem qui eum ipsa repellat est, rerum, pariatur, vitae fuga earum ipsam?
                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />An ERP simplifies all challenges related to Production of an enterprises</li> */}
                      <li><TiTick size={20} style={iconStyle} />Production Indent</li>
                      <li><TiTick size={20} style={iconStyle} />Production Planningk</li>
                      {/* <li><TiTick size={20} style={iconStyle} />MRP (Material Requirement Planning)</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />Quotation/ Vendor Quotation/ Order Managemen</li> */}
                      <li><TiTick size={20} style={iconStyle} />MRN/ IQC</li>
                      <li><TiTick size={20} style={iconStyle} />QC Plan (hem wise)</li>
                      {/* <li><TiTick size={20} style={iconStyle} />Sale</li> */}
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />It organize and integrates-operation processes and
                        information flows, to make opti mum use of resources
                        such as (4M) Men, Material Money and Machine</li> */}
                      <li><TiTick size={20} style={iconStyle} />Purchase Requisition (PR)</li>
                      <li><TiTick size={20} style={iconStyle} />Gate Entry</li>
                      <li><TiTick size={20} style={iconStyle} />Purchase</li>
                      <li><TiTick size={20} style={iconStyle} />Production Process</li>
                      {/* <li><TiTick size={20} style={iconStyle} />Dispatch Plan</li>
                      <li><TiTick size={20} style={iconStyle} />MIS Report</li> */}
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
                  <h2 className='h1'>Benefits of Excellent ERP Software</h2>
                  <div className='lead-text'>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio sapiente veniam quasi, asperiores, laudantium totam dicta placeat sed eveniet quaerat. Voluptatibus modi fugiat consequatur ratione harum ab mollitia commodi.</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix mb-4 mt-4'>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard  head='Technology Integration' text='Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Flexibility' text='Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Paperless Administration' text='Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Productivity' text='Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Performance' text='Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                <BenefitProductCard head='Information Accessibility' text='Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.' />
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio sapiente veniam quasi, asperiores, laudantium totam dicta placeat sed eveniet quaerat. Voluptatibus modi fugiat consequatur ratione harum ab mollitia commodi.</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix mb-4 mt-4'>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Fee Collection' psrc={s}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Library' psrc={st}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Human Resource' psrc={st3}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Academic' psrc={st4}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard phead='Examination' psrc={st5}/>
                </div>
                <div className='col-lg-2 col-md-6'>
                <PremimumCard  phead='Student Info' psrc={st6}/>
                </div>
                <div className='col-lg-2 col-md-6'>
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
                </div>
              </div>
            </div>
          </div>

        <Contact/>
    </>
  )
}

export default Products