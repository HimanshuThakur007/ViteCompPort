
import bg from '../../Images/erp-mobileapp-features.png';
import { TiTick } from 'react-icons/ti'
import SmallProductCard from '../../CustomComponents/ProductCard/SmallProductCard';
import './product.css'
import whyus from '../../Images/productLogo/clengine.png'
import Contact from '../ContactUs/Contact';
import i2 from '../../Images/COLLECTIONENGINE/Prompt Action1.png';
import i25 from '../../Images/COLLECTIONENGINE/Minimize Delays and DisputeS1.png';
import i4 from '../../Images/COLLECTIONENGINE/Maintain Customer Relationships1.png'
import i24 from '../../Images/COLLECTIONENGINE/Improve Communication1.png';
import BenefitProductCard from '../../CustomComponents/ProductCard/BenefitProductCard';
import li2 from '../../Images/COLLECTIONENGINE/Prompt Action.png'
import li4 from '../../Images/COLLECTIONENGINE/Maintain Customer Relationships.png'
import li24 from '../../Images/COLLECTIONENGINE/Improve Communication.png'
import li25 from '../../Images/COLLECTIONENGINE/Minimize Delays and DisputeS.png';
import { Helmet } from 'react-helmet';


const myDivStyle = {
  fontFamily: 'Alegreya, serif',
  color: '#2a1fbc',
  fontWeight: 'bold',
  fontStyle: 'italic'
};

const CollectionEngine = ({clickDownHandler}:any) => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>
      <section id="hero" className="d-flex align-items-center" style={{ height: '100vh', background: '#f4faff' }}>
      <Helmet>
                <title>Excellent softwares || Collection Engine</title>
                <meta name="Collection Engine Page" content="Collection Engine page content" />
            </Helmet>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-2 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>How Businesses benefit from <span style={myDivStyle}>Collection Engine</span></h1>
              {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
              <p className='mt-0'>Collection Engine 3.0, the powerful successor to Collection Engine 2.0, designed to 
              streamline and enhance your collections process like never before. it helps businesses in improving their 
              cash flow (amount outstanding) by reducing the time it takes to collect payments, send Quotation, Invoice, 
              Account Statement, etc. 
              {/* Timely bill reminders prompt customers to settle their outstanding balances, 
              leading to faster payment cycles and increased liquidity for the business. */}
              </p>
              <div className='btn-wrapper wow fadeInUp'>
                <div className="d-flex justify-content-center justify-content-lg-start mt-2">
                  <a className='btnn btn-primary' onClick={clickDownHandler}>Get Started</a>
                  {/* <Button btnName='Free Trail'/> */}

                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-delay="200">
              <img src={whyus} className="img-fluid animated" alt="" 
               style={{
                width: window.innerWidth <= 768 ? '38%' : '100%',
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
                  <h1>Why <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc', fontWeight: 'bold' }}>Collection Engine</span></h1>
                </div>
                <div className='text-wrapper'>
                  <p className='lead-text'>
                  Craft the perfect message using multiple templates for Email and WhatsApp, allowing you to tailor your communication for different scenarios such as sending documents, reminders, personalised greetings, reports and tracking the status of each account. Quick and hassle-free payments by sending payment links through trusted payment gateways (PayU). This saves time and reduces the need for manual intervention.
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                  </p> */}
                </div>
                <div className='col-lg-12 mb-3' style={{marginTop:'7vh'}}>
                <img src={whyus} className="img-fluid" alt=""/>
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='row inner-row clearfix'>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <SmallProductCard cardTitle='Prompt Action' src={i2} src2={li2} cardText='Many customers may simply forget or overlook their outstanding payments Payment reminders serve as a reminder to customers to clear their outstanding' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <SmallProductCard cardTitle='Improve Communication' src={i24} src2={li24} cardText='Multi-channel reach for seamless customer connection. Versatile templates for tailored messages.' />
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6 himanshu'>
                    <SmallProductCard cardTitle='Maintain Customer Relationships' src={i4} src2={li4} cardText='Polite and professional automatic/manual messaging, sending product catalogues to greetings and wishes. We have got it covered' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mycard'>
                    <SmallProductCard cardTitle='Minimize Delays and Disputes' src={i25} src2={li25} cardText='
Automate processes like due bill communication and quotation sending, helping you effortlessly manage your transactions.' />
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
                  Payment reminder software typically offers several useful features to help businesses and individuals manage their payment processes effectively. Here are some common features:
                </p>
                <div className='col-lg-12 d-flex'>
                  <div className='col-lg-6'>
                    <ul>
                      <li><TiTick size={20} style={iconStyle} />Automated Reminders</li>
                      <li><TiTick size={20} style={iconStyle} />Customizable Templates</li>
                      <li><TiTick size={20} style={iconStyle} />Scheduled Reminders</li>
                      <li><TiTick size={20} style={iconStyle} />Multiple Communication Channels</li>
                      <li><TiTick size={20} style={iconStyle} />Payment Tracking</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                
                      <li><TiTick size={20} style={iconStyle} />Payment Integration</li>
                      <li><TiTick size={20} style={iconStyle} />Customer Management</li>
                      <li><TiTick size={20} style={iconStyle} />Reporting and Analytics</li>
                      <li><TiTick size={20} style={iconStyle} />Customization and Branding</li>
                      <li><TiTick size={20} style={iconStyle} />Multiple Currency and Language Support</li>
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
                  <h2 className='h1'>Benefits of Excellent Collection Engine</h2>
                  <div className='lead-text'>
                    <p >Excellent Collection Engine offers numerous benefits to businesses. Some of the key advantages of implementing Collection Engine include:</p>
                  </div>
                </div>
                <div className='empty-space-60 clearfix'></div>

              </div>

              <div className='row clearfix '  style={{marginTop:'10vh'}}>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Improved Cash Flow' text='Helps businesses collect payments more efficiently, reducing the time it takes to receive payments. This leads to improved cash flow and better working capital management' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Time and Resource Savings' text='Automation through Excellent Collection Engines reduces the need for manual follow-ups and collections. This can saves time and resources that can be allocated to other important tasks within the business.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Timely Payments' text='Payment reminders serve as prompts to customers, reminding them of their outstanding balances and encouraging timely payments. This helps minimize late or missed payments, improving overall payment compliance.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Enhanced Customer Relationships' text='
Sending polite and professional payment reminders helps maintain positive relationships with customers. It shows that the business values their partnership.
New product introductions also get easier with catalogue broadcasting.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Minimized Bad Debt' text='Collection engines help identify and prioritize overdue accounts, allowing businesses to take timely action to collect outstanding payments. By implementing efficient reminder systems, businesses can minimize the risk of bad debt and reduce write-offs.' />
                </div>
                <div className='col-lg-4 col-md-6'>
                  <BenefitProductCard head='Cost Reduction' text='By automating collection efforts, businesses can reduce costs associated with manual processes, such as labor, printing, and postage. Additionally, efficient collection practices help minimize the need for costly debt collection agencies.' />
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

export default CollectionEngine