import Carousel from 'react-bootstrap/Carousel';
import bat from '../../Images/batman.jpg';
import off2 from '../../Images/off2.jpg';
import off from '../../Images/office.jpg'
import hi from '../../Images/hero-img.png'
import Banner from '../../CustomComponents/Banner';
import { Button } from '../../CustomComponents/Button';
import './Hero.css'
const  HeroImage=({openHandler}:any)=> {
  return (
   <>
    <section id="hero" className="d-flex align-items-center">
    <div className='page-header section-padding full-height right-col-full dc-one'>

<div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <div className='col-12 d-lg-flex d-sm-block d-md-flex mt-lg-0 mt-sm-5 mt-md-0'>
      {/* <h1 style={{fontWeight:'bold', fontSize:'4rem'}}><span style={{color:'#015da4'}}>Excellent</span>  <span className='sm-pt-2' style={{color:'#f7271d'}}> Softwares</span> </h1> */}
     <h1 style={{fontWeight:'bold', fontSize:'4rem',color:'#015da4'}}>Excellent</h1>
     <h1 style={{fontWeight:'bold', fontSize:'4rem',color:'#f7271d',marginLeft:'10px'}}>Softwares</h1>
     </div>
      <h2 className='d-flex justify-content-center' style={{fontStyle:'italic', marginLeft:'15%'}}>Bringing Excellence To Business</h2>
      <div className="d-flex justify-content-center justify-content-lg-start">
        {/* <a href="#about" className="btn-get-started scrollto">Free Trail</a> */}
        <Button onClick={openHandler} btnName='Get In Touch'/>
        {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a> */}
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src={hi} className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>
</div>
</section>
   </>
  );
}

export default HeroImage;