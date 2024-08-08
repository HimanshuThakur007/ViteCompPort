import React, { useState } from "react";
import sk from "../../Images/home/sfa ].png";
import bg from "../../Images/comprehensiveGSTModule.png";
import hr from "../../Images/homepage/HR 2.png";
import f1 from "../../Images/homepage/Financial Accounting1.png";
import inv from "../../Images/homepage/inventory.png";
import erpbg from '../../Images/homepage/erp-system-img.png'
import pay from "../../Images/productLogo/add7.png";
import busy from "../../Images/team/busy logo.png";
import sfa from "../../Images/productLogo/finall logo sfa.png";
import erp from "../../Images/productLogo/add8.png";
import dms from "../../Images/productLogo/partner portal  logo dms 01.png";
import mobile from '../../Images/home/Mobile Application Development.png';
import web from '../../Images/home/Web Application Development.png';
import ecom from '../../Images/home/Ecommerce.png';
import busycust from '../../Images/home/busycust.png';
import consulting from '../../Images/home/Consulting.png';
import cust from '../../Images/home/busycust.png'
import Info from '../../Images/productLogo/infoserve.png'
import excellentlogo from "../../Images/excellent LOGO 30-03-2023.png";
import InfoServe1 from "../../Images/home/infoserve.png";
import {
  ProductCard_leftImg,
  ProductCard_rightImg,
} from "../../CustomComponents/ProductCard/ProductCard";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductShowCase = () => {
  const navigate = useNavigate();

  let iconStyle = { color: "Tomato" };


  return (
    <>
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div id="pay">
            <ProductCard_leftImg
              style={{ width: "17vh", marginTop: "-39px" }}
              src2={pay}
              src={hr}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/payroll");
              }}
              title="HR & Payroll"
              text="Our HR system that offers comprehensive functionality for the entire employee lifecycle, from hire to retire, can significantly benefit organizations. It provides a range of features to streamline HR processes, enhance efficiency, and improve employee management. "
              textBold="Here are some key functions Recruitment and Onboarding -Employee Records and Administration, -Time and Attendance Management, -Performance Management, -Training and Development, -Benefits Administration, -Offboarding and Exit Management"
              collapseItem="By offering complete functionality across these HR functions, Our HR system can significantly improve operational efficiency, enhance data accuracy, and provide a better employee experience throughout their journey with the organization."
            />
          </div>
          <div id="Fa">
            <ProductCard_rightImg
              style2={{ width: "16vh", marginTop: "-10px" }}
              rsrc={f1}
              rsrc2={busy}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/payroll");
              }}
              rtitle="Financial Accounting"
              rtext="Excellent Softwares, your trusted Solution Partner for Busy Business Accounting Software. Running a  business comes with numerous challenges, and managing your accounting processes efficiently is undoubtedly one of them."
              collapseRight=" BUSY Accounting Software, your comprehensive billing and accounting software designed to streamline your financial processes and empower you with detailed analysis of income and expenses. With a wide range of powerful features and a user-friendly interface, BUSY is the ultimate solution to meet your financial management needs"
            />
          </div>
          <div id="Pe">
            <ProductCard_leftImg
              style={{ width: "16vh", marginTop: "-45px" }}
              src={erpbg}
              src2={erp}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/erp");
              }}
              title="Production ERP"
              text="Excellent ERP specifically designed to meet the needs of the manufacturing and production industry. Our state-of-the-art software is tailored to optimize your production processes,  
           "
              textBold="streamline operations, and enhance overall efficiency,ultimately helping your"
              collapseItem='business thrive in today’s competitive market. We understand the unique challenges faced by manufacturing companies. Whether you are involved in discrete manufacturing, process manufacturing, or a combination of both, our ERP solution is built to address your specific requirements. Our powerful features and modules encompass the entire production lifecycle, from planning and procurement to inventory management, production scheduling, quality control, and beyond.'
            />
          </div>
          <div id="Ic">
            <ProductCard_rightImg
              style2={{ width: "16vh", marginTop: "-45px" }}
              rsrc={inv}
              rsrc2={erp}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/erp");
              }}
              rtitle="Inventory Control"
              rtext="We understand the challenges of managing inventory – from tracking and recording to monitoring sales and optimizing stock levels, and that’s why we offer powerful software that enable you to gain complete visibility and control over your inventory,"
              textBoldright="Here’s a breakdown of the key features of our inventory control software:-Real-time Inventory Tracking and monitoring,-Barcode scanning and printing,-Order management and tracking,-Automated reporting,"
              collapseRight=" no matter the size or complexity of your operations. Our solutions are scalable and customizable to meet the unique needs of your business, whether you are a small retailer or a large multinational corporation."
            />
          </div>

          <div id="Is">
            <ProductCard_leftImg
              style={{ width: "16vh", marginTop: "-42px" }}
              src={InfoServe1}
              src2={Info}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/infoserve");
              }}
              title="Distributor Management System"
              text="Your one-stop solution for efficient and streamlined distributor management. Our comprehensive software is designed to help you effectively manage your distribution network, enhance collaboration with distributors, and boost overall operational efficiency.
            At Excellent"
              collapseItem='Softwares, we understand the challenges faced by companies that rely on a distribution model. Whether you are a manufacturer, wholesaler, or retailer, our powerful DMS provides you with the tools and features you need to optimize your distribution processes and drive success.'
            />
          </div>
          <div id="sfa">
            <ProductCard_rightImg
              style2={{ width: "20vh", marginTop: "-25px" }}
              imgStyle={{ height: '49vh' }}
              rsrc={sk}
              rsrc2={sfa}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/excsfa");
              }}
              rtitle="Sales Force Automation"
              rtext="Revolutionize your sales operations and empower your team with our state-of-the-art Sales Force Automation (Excellent SFA) Mobile App. salespeople can efficiently handle field orders, streamline workflows, and provide exceptional service to customers."
              textBoldright="Beat Master & Planning-Routing & Tracking- Order Processing-Invoicing- E- Catalogue- Collection -Order Tracking-Ledger Report- Ageing"
              secondBold="B2B Interface (Customer login)"
              collapseRight=" enhance customer interactions, and boost your sales performance. Experience the convenience and productivity of managing field orders on the go. It empowers your sales team to deliver exceptional service and drive revenue growth. Here’s a brief overview of what to expect from our SFA "
            />
          </div>
          <div id="Bc">
            <ProductCard_leftImg
              style={{ width: "16vh", marginTop: "-10px" }}
              src2={busy}
              src={busycust}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/busycust");
              }}
              title="Busy Customisation"
              text="We understand that every business is unique and has its own specific accounting practices which are not covered 100% with Busy Accounting Software. That’s why we offer comprehensive customization services to cater to your business requirements "
              textBold="Here are some key aspects of our Busy Accounting Software customization services,
            Custom Module Development- Field Customization- Template Design-Report Customization -Integration with Third-Party Systems- Workflow Automation"
              collapseItem="seamlessly.
            Our team of experienced software developers and professionals work closely with you to analyse your business processes and identify areas where customization can enhance efficiency and productivity. Whether you need to add new features, add new fields in master as well as transaction, custom reports or integrate with other systems, we have the expertise to deliver the perfect solution."
            />
          </div>
          <div id="Ec">
            <ProductCard_rightImg
              style2={{ width: "20vh", marginTop: "-25px" }}
              rsrc={ecom}
              rsrc2={sfa}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/webapp");
              }}
              rtitle="E-commerce"
              rtext="Every entrepreneur dreams of having their own E-commerce platform with integrated accounting software. However, managing such a platform can be challenging without a proper solution. That’s where we come in."
              collapseRight=" We offer a plug-and-play solution that solves all your E-commerce and accounting related problems. Our comprehensive range of solutions is designed to help you start and run a successful E-commerce store. Whether you’re a small business owner or an aspiring entrepreneur, we have everything you need to establish and grow your online presence. At Our E-Store Solutions, we are committed to empowering businesses with the necessary tools and expertise to thrive in the constantly evolving E-commerce landscape."
            />
          </div>
          <div id="mobile">
            <ProductCard_leftImg
              style={{ width: "20vh", marginTop: "-25px" }}
              src2={sfa}
              src={mobile}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/mobileapp");
              }}
              title="Mobile App Development"
              text="We are passionate about transforming ideas into innovative and interactive mobile applications. We pride ourselves on being a leader in the industry, consistently delivering cutting-edge solutions that surpass clients' expectations.
           "
              collapseItem=' Our team’s expertise lies in mobile technologies, allowing us to stay ahead of the curve and leverage the latest advancements in the field. Whether it’s iOS, Android, or cross-platform development, we have the knowledge and skills to bring your app idea to life on any platform.
            We strongly believe in the power of user-centered design. We understand that a successful mobile app is not just about functionality; it’s about creating an exceptional user experience. By conducting thorough research and user testing, we ensure that our apps are intuitive, visually appealing, and meet the needs of your target audience.'
            />
          </div>
          <div id="Web">
            <ProductCard_rightImg
              style2={{ width: "16vh", marginTop: "-45px" }}
              rsrc={web}
              rsrc2={erp}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/webapp");
              }}
              rtitle="Web App Development"
              rtext="Excellent Softwares seem to be a leading Web Application development company with a comprehensive range of services. With a team of professionals, including UI/UX designers, web application developers, quality analysts, and marketers, "
              collapseRight="you have a diverse skill set to cater to various client needs.
            Our expertise in web and mobile app development, along with product engineering, suggests that you have experience in handling projects from concept to completion. This end-to-end approach can be beneficial for clients looking for comprehensive solutions. 
            Our focus on helping clients grow their businesses indicates a client-centric approach. We provide web application solutions that can contribute to business growth. Overall, with our team’s expertise and diverse skill set, Excellent Softwares appears to be a reliable choice for businesses seeking web application development services."
            />
          </div>
          <div id="Con">
            <ProductCard_leftImg
              style={{ width: "16vh", marginTop: "-10px" }}
              src={consulting}
              src2={excellentlogo}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/consulting");
              }}
              title="Consulting"
              text="We are a trusted partner for businesses seeking expert advice and strategic software solutions. Our team of experienced consultants is dedicated to helping organizations overcome challenges, seize opportunities, and achieve sustainable growth.
           "
              collapseItem=' Our approach to product development is centered around driving digital adoption through a combination of design led thinking, behavioral science, and data-driven insights. By incorporating these elements, we enable our clients to create user-centric solutions that deliver exceptional experiences and drive business outcomes.'
            />
          </div>
          <div id="Bu">
            <ProductCard_rightImg
              style2={{ width: "16vh", marginTop: "-10px" }}
              rsrc={cust}
              rsrc2={busy}
              icon={<FaArrowCircleRight size={40} style={iconStyle} />}
              onClick={() => {
                navigate("/customize_software");
              }}
              rtitle="Customized Software"
              rtext="We understand that every business is unique, and we believe that one software does not fit all. That’s why our approach to software solutions is focused on customization and Integrated design. We take the time to understand your industry and business processes,"
              collapseRight=" workflows, and objectives in order to create software that addresses your pain points and aligns with your long-term goals. Overall a customized approach to software solutions ensures that technology works for your business rather than the other way around. By investing in a tailored solution, you can optimize your operations, drive growth, and achieve your business objectives effectively."
            />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default ProductShowCase;
