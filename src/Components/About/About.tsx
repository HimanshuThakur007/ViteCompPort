
import TeamSection from '../TeamSection/TeamSection'
import { ProductCard_leftImg } from '../../CustomComponents/ProductCard/ProductCard'
import bg from '../../Images/user-interface-img.png'
import {TiTick} from 'react-icons/ti'
import { CardComp } from '../../CustomComponents/CardComp'
import ServiceCard from '../../CustomComponents/ServiceCard'
import {RxGlobe} from 'react-icons/rx';
import {TfiBasketball} from 'react-icons/tfi'
import {TfiLinux} from 'react-icons/tfi'

const About = () => {
  let iconStyle = {color:'#2a1fbc'}
  return (
    <>
     
    <section id="about" className="about ">
      <div className="container" data-aos="fade-up">

        <div className="section-title mt-3">
          <h2>About Us</h2>
        </div>

        <div className="row">
          {/* <div className='col-12 mb-4 d-flex'> */}
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">

              <img src={bg} className='image-fluid'/>
          
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-stretch content' data-aos="fade-left" data-aos-delay="100">
              <div className='heading mb-3'>
                <h1>Why the best choose to <br/><span style ={{fontFamily: 'serif', fontStyle:'italic',color:'#2a1fbc'}}>work with us</span> </h1>
                <p>
            Excellent Softwares is into providing customized business solutions to every business needs.  Established in 2002 and located at Delhi, Excellent Softwares has always been at the forefront of technical innovation and providing high quality next generation user friendly technical solutions which .

            Our years of working experience with different industries have helped us gain deep insight of the market and of customer needs. Combining our experience, our passion to take on technological challenges and our love for technology we have been constantly delivering innovative and result oriented solutions to our clients since our inception.With a team of dedicated professionals and armed with the latest technology we offer a wide array of IT based solutions including
            </p>
            <ul>
                <li><TiTick size={20} style={iconStyle}/> Customization of BUSY Accounting Software</li>
              <li><TiTick size={20} style={iconStyle}/> Customised business Solutions</li>
              <li><TiTick size={20} style={iconStyle}/> ERP/CRM Implementation</li>
              <li><TiTick size={20} style={iconStyle}/> Data center& Connectivity Solutions</li>
              <li><TiTick size={20} style={iconStyle}/> Software & Business Consultancy</li>
              </ul>
              </div>
            </div>
        
        </div>
      </div>
      
    </section>
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
      <div className="row">
          <div className="col-xl-4 col-md-6 mt-xl-0 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <ServiceCard 
            icon={<RxGlobe size={80} />}
            heading='Our Responsibility' 
            about='Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris.'
            onClick={()=>{}} />
          </div>

          <div className="col-xl-4 col-md-6 mt-4 mt-xl-0 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <ServiceCard 
            icon={<TfiBasketball size={80}/>}
            heading='Our Approach' 
            about='Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris.'
            onClick={()=>{}} />
          </div>

          <div className="col-xl-4 col-md-6 mt-4 mt-xl-0 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <ServiceCard 
            icon={<TfiLinux size={80}/>}
            heading='Our Mission, Vision' 
            about='Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris.'
            onClick={()=>{}} />
          </div>
        </div>
        </div>
        </section>
        
      <TeamSection/>
    </>
  )
}

export default About