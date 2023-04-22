import React, { useEffect, useState } from 'react'
import Header from '../../CustomComponents/Banner'
import ServicesModal from '../Modals/ServicesModal'
import ServiceCard from '../../CustomComponents/ServiceCard';


const Service = () => {
  const [isShow, setShow] : any = useState(false);
  const [isShowErp, setShowErp] : any = useState(false);
  const [isShowData, setShowData] : any = useState(false);
  const [isShowPoint, setShowPoint]: any = useState(false)

  return (
   <>
   
<ServicesModal
heading='Customisation of Busy' 
about='Maintaining financial records of a company is a Herculean task as a small error can quickly turn into a catastrophe. 
To maintain and keep track of all financial records of a company accounting software like Busy is employed. 
Busy software is fast, easy and effective accounting software with a highly secured database structure. 
It minimizes the workload and increase the overall work efficiency of the financial department of any company. 
It is an integrated accounting package developed for small and medium sized business organization.
Excellent Softwares is a Channel Partner of Busy accounting package. 
The Busy business accounting software comes in three version- Basic, Standard and Enterprise. 
The Basic package is designed for micro and small scale business houses; the Standard package is designed for small and medium sized organization and the Enterprise edition is for large scale organization. The Basic package is a single user variant whereas the Enterprise edition and the Standard are available in three variants – single user, multi user and client server. The different versions are available with optional modules to suit specific requirements of every business needs. Excellent Softwares isn’t just the authorized Channel Partner of Busy accounting software but also of other Busy products like BUSY Payroll, Busy Bar Code Printing Software, and Busy Customer Service Management Software. We also provide additional services to clients like BUSY Customization, BUSY Data Synchronization and BUSY Implementation.
Some of the prominent features of Busy Accounting package are:'
isShow={isShow} 
closeModal={()=>{setShow(false)}}
Close='close'
/>

<ServicesModal 
heading='Customised ERP' 
isShow={isShowErp} 
closeModal={()=>{setShowErp(false)}}
about='To meet the challenges of modern day business arena organizations are relying heavily on the capabilities of ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) systems. ERP systems help integrate business processes and offer real time updates. CRM systems on the other hand help in retaining customers and aids in focusing marketing efforts. Often it is seen that organizations use these two systems separately but integrating them can bring about synergy and increase the benefits manifold.
In most cases organizations don’t have the luxury to focus their resources on developing an ERP/CRM integrated system and so they rely on a strategic technological partner. Excellent Softwares has been partnering with companies and helping them manage enterprise wide systems for the past 10 years.
Excellent Softwares offers augmentation and integration of enterprise wide systems like ERP and CRM to organizations who want to break free from conventional systems and explore new heights. At Excellent Softwares our ERP/CRM members are not just technical experts they are business analysts with an in depth knowledge and understanding of our clients business. At Excellent Softwares we help maximize our clients’s IT potential and help them achieve a competitive advantage over their competitors. Our ERP/CRM team members are expert in SAP, PeopleSoft, Oracle, JD Edwards, Siebel, IFS and others. We use a flexible ERP/CRM integration method that offers reliable results in real time. We assign a dedicated virtual assistant (VA) for our clients. The VA is available 8 hours a day and 6 days a week.
Our ERP CRM integration service helps organizations to integrate cross-discipline teams, functions, and processes offering sharp insight and control over varied process from a single application. We are helping different organizations across diverse industry sectors including manufacturing, distribution, services, hospitality and retail to outgrow the limitations of individual enterprise systems.'
Close='close'
/>
<ServicesModal heading='Data Center Solutions' 
isShow={isShowData} 
closeModal={()=>{setShowData(false)}}
about='Excellent Softwares is a leading hosting service provider offering comprehensive Data Center Services. Our data centers 
support multiple platforms and come with global hosting capabilities. With Data Center solutions from Excellent Softwares you 
can give your clients the resource to lower costs, minimize risks and leverage their IT investments. We deliver secure, consistent 
and scalable hosting solutions to our clients.'
Close='close'
/>
<ServicesModal heading='Point to Point / Lease line / VPN' 
isShow={isShowPoint} 
closeModal={()=>{setShowPoint(false)}}
about='Point to point connection is a secured connection between two locations for private data transfer.
It is a closed or private network with no access to public networks and therefore is a secured communication channel. 
Point to point connections work under various speeds such as point to point T1, point to point Ethernet, or point to point DS3.
Why Use Point to Point wide area network
This type of connection is usually preferred by organizations having multiple offices around the globe. Point to point connection
 is a cost-effective, secured and flexible way to ensure seamless connection between employees across different offices. 
 Some of the areas where point to point communication is used are:'
Close='close'
/>
     <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title mt-3">
          <h2>Services</h2>
          <p>Every company is unique and to survive today’s business scenario conventional ideas and technology isn’t sufficient anymore. Innovation is the driving force that can help a company achieve market leadership and leverage its potential. At Excellent Softwares we help companies formulate new strategies, reach new markets, generate better ROI and optimize ongoing processes. Our attitude to walk on the path less visited, love for technology and global perspective makes our approach infallible. 
            We provide a wide range of technological solutions to meet the demands of modern day business.</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <ServiceCard 
            heading='Busy Customization' 
            about='Leverage the capabilities of your Accounting department with BUSY Accounting Package.'
            onClick={()=>{setShow(true)}} />
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <ServiceCard 
            heading='Customised ERP' 
            about='We offer augmentation and integration of enterprise wide systems like ERP and CRM '
            onClick={()=>{setShowErp(true)}} />
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
          <ServiceCard 
            heading='Data Center' 
            about='Excellent Softwares provides comprehensive Data Center Services 
            offering multi-platform support and global hosting capabilities'
            onClick={()=>{setShowData(true)}} />
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
          <ServiceCard 
            heading='Point to Point' 
            about='Enjoy seamless connectivity with multiple offices located in different time zones with our Point to Point connectivity service.'
            onClick={()=>{setShowPoint(true)}} />
            
          </div>

        </div>

      </div>
    </section>
   </>
  )
}

export default Service