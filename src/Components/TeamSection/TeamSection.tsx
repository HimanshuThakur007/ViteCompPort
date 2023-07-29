import React from 'react'
import TeamCard from '../../CustomComponents/TeamCard';
// import t1 from '../../Images/team/anil sir.png';
import t1 from '../../Images/team/anilSir.jpg';
import t2 from '../../Images/team/SanjeevSir.png';
import t3 from '../../Images/team/team-3.jpg';
import t4 from '../../Images/team/amitSir.jpg';
import { Carousel } from 'react-bootstrap';

const TeamSection = () => {
  return (
    <>

    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Our Team <span style={{fontStyle:'italic', fontFamily:'Alegreya', color:'#2a1fbc'}}>Experts</span></h2>
          <p>We're justifiably proud of the team we've assembled. Initially numbering just one programmers, Excellent  has grown steadily and now has 20+ staff members.
          Team Excellent is made up of highly-qualified, talented and innovative IT professionals each with their own area of expertise. Their experience spans the full range of custom software development, from small entrepreneurial projects to complex systems for major corporations.</p>
        </div>
        
        <Carousel>
        <Carousel.Item >
        <div className="row">

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <TeamCard src={t1} name='Anil Yadav' position='CEO' about='CEO of Excellent Softwares' linkedIn='https://www.linkedin.com/in/anil-yadav-5a545727/?originalSubdomain=in' hreft="https://twitter.com/narendramodi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"/>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <TeamCard src={t2} name='Sanjeev Yadav' position='CEO' about='CEO of my world'/>
           
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
          <TeamCard src={t3} name='Shailendra Pandey' position='Manager' about='CEO of my world'/>
      
           
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
          <TeamCard src={t4} name='Amit Katyal' position='Sr.Software Engineer' about='developer'/>
          
          </div>

        </div>
        </Carousel.Item>
        <Carousel.Item >
        <div className="row">

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <TeamCard 
            // src={} 
            name='Narayan Kumar' position='CEO' about='CEO of my own world'/>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <TeamCard 
          // src={} 
          name='Hema Singh' position='Developer' about='CEO of my own world'/>
           
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
          <TeamCard 
          // src={} 
          name='Ekta Singh' position='Developer' about='CEO of my own world'/>
      
           
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
          <TeamCard 
          // src={} 
          name='Ashutosh Tewari' position='Accountant' about='CEO of my own world'/>
          
          </div>

        </div>
        </Carousel.Item>
        </Carousel>
      </div>
    </section>
    </>
  )
}

export default TeamSection