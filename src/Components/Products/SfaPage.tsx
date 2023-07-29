import bg from "../../Images/erp-mobileapp-features.png";
import { TiTick } from "react-icons/ti";
import SmallProductCard from "../../CustomComponents/ProductCard/SmallProductCard";
import "./product.css";
import Contact from "../ContactUs/Contact";
import PremimumCard from "../../CustomComponents/ProductCard/premimumCard";
import i2 from "../../Images/SFA/Order Management.png";
import i25 from "../../Images/SFA/Improved Productivity and Efficiency.png";
import i4 from "../../Images/SFA/Product Catalog and Information.png";
import i24 from "../../Images/SFA/Sales Analytics and Reporting.png";
import s from '../../Images/Erp-images/accounting.png';
import st from '../../Images/Erp-images/payment-method.png';
import st3 from '../../Images/Erp-images/inventory.png';
import st4 from '../../Images/Erp-images/production.png';
import st5 from '../../Images/Erp-images/quality-control.png';
import st6 from '../../Images/Erp-images/report.png';
import BenefitProductCard from "../../CustomComponents/ProductCard/BenefitProductCard";
import li2 from "../../Images/SFA/Order Management1.png";
import li4 from "../../Images/SFA/Product Catalog and Information1.png";
import li24 from "../../Images/SFA/Sales Analytics and Reporting1.png";
import li25 from "../../Images/SFA/Improved Productivity and Efficiency1.png";
import sfa from '../../Images/productLogo/finall logo sfa.png';

const myDivStyle = {
  fontFamily: "Alegreya, serif",
  color: "#2a1fbc",
  fontWeight: "bold",
  fontStyle: "italic",
};

const SfaPage = ({ openHandler }: any) => {
  let iconStyle = { color: "#2a1fbc" };
  return (
    <>
      <section
        id="hero"
        className="d-flex align-items-center"
        style={{ height: "100vh", background: "#f4faff" }}
      >
        <div className="container mt-3">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>
                How Industries benefit from{" "}
                <span style={myDivStyle}>Excellent SFA</span>
              </h1>
              {/* <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2> */}
              <p className="mt-3">
                Optimize their sales processes, improve sales performance, and
                provide better customer experiences. By leveraging automation,
                real-time data, and collaboration.
              </p>
              <div className="btn-wrapper wow fadeInUp">
                <div className="d-flex justify-content-center justify-content-lg-start mt-4">
                  <a className="btnn btn-primary" onClick={openHandler}>
                    Get Started
                  </a>
                  {/* <Button btnName='Free Trail'/> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={sfa} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about ">
        <div className="features-section section-padding">
          <div className="container">
            <div className="row clearfix align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="heading-wrapper with-separator">
                  <h1>
                    Why{" "}
                    <span
                      style={{
                        fontFamily: "serif",
                        fontStyle: "italic",
                        color: "#2a1fbc",
                        fontWeight: "bold",
                      }}
                    >
                      Excellent SFA
                    </span>
                  </h1>
                </div>
                <div className="text-wrapper">
                  <p className="lead-text">
                    Excellent SFA to empower their sales teams, enhance
                    productivity, and optimize sales processes. By leveraging
                    mobile devices, sales representatives can access real-time
                    customer data, update sales records on the go, Ultimately,
                    Excellent SFA mobile apps are used to improve sales team
                    performance, streamline workflows, enhance customer
                    engagement, and drive sales growth.
                  </p>
                  {/* <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat, dignissimos est pariatur voluptas error tempore possimus hic ducimus, quod culpa illum ut a magni commodi voluptatibus asperiores veniam expedita!
                 </p> */}
                </div>

                <div className='col-lg-12 mb-3' style={{marginTop:'7vh'}}>
                <img src={sfa} className="img-fluid" alt=""/>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="row inner-row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <SmallProductCard
                      cardTitle="Order Management: "
                      src={i2}
                      src2={li2}
                      cardText="Sales Representatives can create and manage sales orders on the go using SFA"
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <SmallProductCard
                      cardTitle="Sales Analytics and Reporting"
                      src={i24}
                      src2={li24}
                      cardText="SFA mobile app provides real-time access to sales analytics"
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 himanshu">
                    <SmallProductCard
                      cardTitle="Product Catalog and Information"
                      src={i4}
                      src2={li4}
                      cardText="Includes product catalog with detailed information about products and services"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mycard">
                    <SmallProductCard
                      cardTitle="Improved Productivity and Efficiency"
                      src={i25}
                      src2={li25}
                      cardText="Helps in boosting sales team productivity and efficiency"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="container  mt-5">
          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src={bg} className="image-fluid" />
            </div>

            <div
              className="col-lg-6 d-flex justify-content-center align-items-stretch content"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="heading mb-3">
                <h1>
                 
                  <span
                    style={{
                      fontFamily: "serif",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      color: "#2a1fbc",
                    }}
                  >
                    {" "}
                    Features
                  </span>{" "}
                </h1>
                <p>
                   To streamline and enhance the sales
                  process.
                </p>
                <div className="col-lg-12 d-flex">
                  <div className="col-lg-6">
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />An ERP simplifies all challenges related to Production of an enterprises</li> */}
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Contact and Lead Management
                      </li>
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Opportunity Management
                      </li>
                      {/* <li><TiTick size={20} style={iconStyle} />MRP (Material Requirement Planning)</li> */}
                      {/* <li><TiTick size={20} style={iconStyle} />Quotation/ Vendor Quotation/ Order Managemen</li> */}
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Activity Tracking
                      </li>
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Sales Forecasting
                      </li>
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Order Management
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      {/* <li><TiTick size={20} style={iconStyle} />It organize and integrates-operation processes and
                       information flows, to make opti mum use of resources
                       such as (4M) Men, Material Money and Machine</li> */}
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Sales Analytics and Reporting
                      </li>
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Offline Access
                      </li>
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Product Catalog and Information
                      </li>
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Sales Team Collaboration
                      </li>
                      <li>
                        <TiTick size={20} style={iconStyle} />
                        Improved Productivity and Efficiency
                      </li>
                      {/* <li><TiTick size={20} style={iconStyle} />MIS Report</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-section section-padding style-dark dark-bg gradient-heading-bg mt-5">
          <div className="container">
            <div className="row clearfix justify-content-center">
              <div className="col-lg-8">
                <div className="heading-wrapper text-center">
                  <h2 className="h1">Benefits of Excellent SFA</h2>
                  <div className="lead-text">
                    <p>
                      Excellent SFA offers numerous benefits to
                      businesses. Some of the key advantages of implementing SFA
                      include:
                    </p>
                  </div>
                </div>
                <div className="empty-space-60 clearfix"></div>
              </div>

              <div className="row clearfix" style={{marginTop:'10vh'}}>
                <div className="col-lg-4 col-md-6"> 
                  <BenefitProductCard
                    head="Enhanced Productivity"
                    text="Provides sales representatives with access to critical information and tools on their mobile devices, enabling them to be more productive while on the go. They can update customer data, track sales activities, and access sales collateral easily"
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <BenefitProductCard
                    head="Real-Time Data and Analytics"
                    text="Sales teams can access real-time data and analytics about customers, leads, and sales performance. This enables them to make informed decisions, identify trends, and prioritize opportunities. Managers can also gain insights into team performance."
                  />
                  {/* and make data-driven decisions to optimize */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <BenefitProductCard
                    head="Improved Sales Processes"
                    text="Streamlines sales processes by automating repetitive tasks, such as data entry, order processing, and reporting. This reduces manual errors, ensures data accuracy, and frees up time for sales representatives to focus on building relationships with customers."
                  />
                  {/* and closing deals */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <BenefitProductCard
                    head="Customer Relationship Management"
                    text="A comprehensive view of customer information, including contact details, communication history, purchase history, and preferences. This enables sales representatives to have more meaningful interactions with customers, personalize their approach, and provide better customer service."
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <BenefitProductCard
                    head="Mobility and Flexibility"
                    text="Allow sales representatives to access and update information from anywhere, anytime. Whether they are on the road, at client meetings, or working remotely, they can stay connected and productive. This flexibility improves responsiveness and allows for timely follow-ups, increasing customer satisfaction."
                  />
                </div>
                {/* <div className='col-lg-4 col-md-6'>
               <BenefitProductCard head='Collaboration and Communication' text='SFA mobile apps often include features that facilitate collaboration and communication within sales teams. Sales representatives can share information, collaborate on deals, and communicate updates and insights in real-time, fostering teamwork and improving coordination.' />
               </div> */}
                <div className="col-lg-4 col-md-6">
                  <BenefitProductCard
                    head="Sales Performance Tracking"
                    text="Enable tracking and monitoring of individual and team sales performance. Managers can set targets, track progress, and provide timely feedback and coaching to improve performance. This promotes accountability and motivates sales representatives to achieve their goals."
                  />
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
      <div className="container">
        <div className="row clearfix justify-content-center">
          <div className="col-lg-8">
            <div className="heading-wrapper text-center mt-4">
              <h2>
               
                <span
                  style={{
                    fontFamily: "serif",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "rgb(42, 31, 188)",
                  }}
                >
                  Premium Modules
                </span>
              </h2>
              <div className="lead-text">
                <p>
                We understand the importance of streamlining your sales processes and empowering your sales team to achieve remarkable results. 
                That's why we're thrilled to introduce our Premium Module—an exceptional addition to our comprehensive Sales Force Automation (SFA) 
                solution.
                </p>
              </div>
            </div>
            <div className="empty-space-60 clearfix"></div>
          </div>

          <div className="row clearfix mb-4 mt-4">
            <div className="col-lg-2 col-md-6">
              <PremimumCard phead="Product Catalogue Management" psrc={s} />
            </div>
            <div className="col-lg-2 col-md-6">
              <PremimumCard phead="Salesman Tracking" psrc={st} />
            </div>
            <div className="col-lg-2 col-md-6">
              <PremimumCard phead="Salesman Route Planning" psrc={st4} />
            </div>
            <div className="col-lg-2 col-md-6">
              <PremimumCard phead="Order Management" psrc={st3} />
            </div>

            <div className="col-lg-2 col-md-6">
              <PremimumCard phead="Data Backup And Sync" psrc={st5} />
            </div>
            <div className="col-lg-2 col-md-6">
              <PremimumCard phead="Reporting" psrc={st6} />
            </div>
           
          </div>
        </div>
      </div>
      <hr />
      <div id="contact">

      <Contact />
      </div>
    </>
  );
};

export default SfaPage;
