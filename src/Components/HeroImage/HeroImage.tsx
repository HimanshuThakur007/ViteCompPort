import Carousel from 'react-bootstrap/Carousel';
import bat from '../../Images/batman.jpg';
import off2 from '../../Images/off2.jpg';
import off from '../../Images/office.jpg'
import hi from '../../Images/hero-img.png'
import Banner from '../../CustomComponents/Banner';
import { Button } from '../../CustomComponents/Button';
import './Hero.css'
const  HeroImage=()=> {
  return (
   <>
    <section id="hero" className="d-flex align-items-center">
    <div className='page-header section-padding full-height right-col-full dc-one'>

<div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1 style={{fontWeight:'bold'}}>Better Solutions For Your Business</h1>
      <h2 style={{fontStyle:'italic'}}>We are team of talented designers making websites with React</h2>
      <div className="d-flex justify-content-center justify-content-lg-start">
        {/* <a href="#about" className="btn-get-started scrollto">Free Trail</a> */}
        <Button btnName='Free Trail'/>
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