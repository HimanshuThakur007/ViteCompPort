
import TeamSection from '../TeamSection/TeamSection'
import { ProductCard_leftImg } from '../../CustomComponents/ProductCard/ProductCard'
import bg from '../../Images/user-interface-img.png'
import { TiTick } from 'react-icons/ti'
import { CardComp } from '../../CustomComponents/CardComp'
import ServiceCard from '../../CustomComponents/ServiceCard'
import { RxGlobe } from 'react-icons/rx';
import { TfiBasketball } from 'react-icons/tfi'
import { TfiLinux } from 'react-icons/tfi'

const About = () => {
  let iconStyle = { color: '#2a1fbc' }
  return (
    <>

      <section id="about" className="about">
        <div className='inner-page-header section-padding style-dark' style={{padding:' 60px 0px'}}>
          <div className="container" data-aos="fade-up">
            <div className='page-title-inner text-center clearfix'>
              <div className='heading-wrapper'>
                <h1 className='h1'>About Us</h1>
                <div className='lead-text'>
                  <p>What makes a great company? It's really easy. It's also the people that are working here.</p>
                </div>
              </div>

            </div>


          </div>
        </div>
        <div className="container" data-aos="fade-up">

          <div className="row mt-5">
            {/* <div className='col-12 mb-4 d-flex'> */}
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">

              <img src={bg} className='image-fluid' />

            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-stretch content' data-aos="fade-left" data-aos-delay="100">
              <div className='heading mb-3'>
                <h1>Why the best choose to <br /><span style={{ fontFamily: 'serif', fontStyle: 'italic', color: '#2a1fbc' }}>work with us</span> </h1>
                <p>
                  Established in 2002 and headquartered in Noida, Excellent Softwares is a leading provider of customized business solutions. With a strong focus on technical innovation, we have been delivering high-quality, next-generation, user-friendly solutions to clients across diverse industries.
                  Our extensive experience working with various industries has provided us with deep market insights and a profound understanding of customer needs. This knowledge, combined with our passion for technological challenges and love for innovation, has empowered us to consistently deliver innovative and result-oriented solutions since our inception.
                  At Excellent Softwares, we have assembled a team of dedicated professionals who are equipped with the latest technology and possess expertise in their respective domains. We offer a wide array of IT-based solutions tailored to meet the unique requirements of businesses.

                </p>
                <ul>
                  <li><TiTick size={20} style={iconStyle} /> Customization of BUSY Accounting Software</li>
                  <li><TiTick size={20} style={iconStyle} /> Customised business Solutions</li>
                  <li><TiTick size={20} style={iconStyle} /> ERP/CRM Implementation</li>
                  <li><TiTick size={20} style={iconStyle} /> Data center& Connectivity Solutions</li>
                  <li><TiTick size={20} style={iconStyle} /> Software & Business Consultancy</li>
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
                onClick={() => { }} />
            </div>

            <div className="col-xl-4 col-md-6 mt-4 mt-xl-0 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
              <ServiceCard
                icon={<TfiBasketball size={80} />}
                heading='Our Approach'
                about='Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris.'
                onClick={() => { }} />
            </div>

            <div className="col-xl-4 col-md-6 mt-4 mt-xl-0 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
              <ServiceCard
                icon={<TfiLinux size={80} />}
                heading='Our Mission, Vision'
                about='Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris.'
                onClick={() => { }} />
            </div>
          </div>
        </div>
      </section>

      {/* <TeamSection /> */}
    </>
  )
}

export default About