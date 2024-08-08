import { useState } from 'react';
// import c1 from '../../Images/clients/client-1.png';
import c1 from '../../Images/clientsLogo/aptlogo_f.png';
// import c2 from '../../Images/clients/client-2.png';
import c2 from '../../Images/clientsLogo/Bajaj-Finserv.svg';
// import c3 from '../../Images/clients/client-3.png';
import c3 from '../../Images/clientsLogo/Hosper.jpg';
import c4 from '../../Images/clientsLogo/EmbeddedImage.png';
// import c4 from '../../Images/clients/client-4.png';
import c5 from '../../Images/clientsLogo/download.jpg';
// import c5 from '../../Images/clients/client-5.png';
import c6 from '../../Images/clientsLogo/LG-Logo-2014.png';
import c7 from '../../Images/clientsLogo/Website-Top-Logo.png';
import c8 from '../../Images/clientsLogo/relaxo logo.png';
import c9 from '../../Images/clientsLogo/logo.jpg';
import c10 from '../../Images/clientsLogo/eng_logo.svg';
// import c10 from '../../Images/clientsLogo/main_logo.webp';
import c11 from '../../Images/clientsLogo/MULTI_METALS_LTD.webp';
import c12 from '../../Images/clientsLogo/kalco_alu_systems_png_20075.png';
import c13 from '../../Images/clientsLogo/anupam.png';
import c14 from '../../Images/clientsLogo/advanced logo.png';
import c15 from '../../Images/clientsLogo/co.jpg';
import c16 from '../../Images/clientsLogo/cropped-ASK-LOGO.png';
import sony from '../../Images/clientsLogo/sony.png';
import { Button } from '../../CustomComponents/Button';
import './Client.css'
// import SucessStories from '../SucessStories/SucessStories';

const ClientSection = () => {
  const [viewAll, setViewAll]: any = useState(false)

  const viewAllHandler = () => {
    setViewAll(!viewAll)
  }
  return (
    <>

      <section id="clients" className="clients">

        <div className="container">

          <div className="row">

            <h3 className="text-center">Our Valuable Clients</h3>
            <div className='col-12 d-flex'>
              <div className='row'>
                <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={c1} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={c2} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={c3} className="img-fluid" alt="" />
                </div>

                <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={c4} className="img-fluid" alt="" />
                </div>

                <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={c5} className="img-fluid" alt="" />
                </div>

                <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={c6} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={c7} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={c8} className="img-fluid" alt="" />
                </div>

                {
                  viewAll == true ? (
                    <>
                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={c9} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={c10} className="img-fluid" alt="" />
                      </div>

                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={c11} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={c12} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={c13} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={c14} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={c15} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={c16} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center" style={{backgroundColor:'white'}}>
                        <img src={sony} className="img-fluid" alt="" style={{mixBlendMode:'multiply'}}/>
                      </div>
                    </>
                  ) : null
                }


              </div>
            </div>
            {/* </div> */}
            {/* </div> */}


          </div>

        </div>
        <div className='col-12 d-flex justify-content-center mt-4'>
          <>
            {viewAll == false ? (
              <Button onClick={viewAllHandler} btnName='View More' />
            ) : (
              <Button onClick={viewAllHandler} btnName='View Less' />
            )}
          </>

        </div>

      </section>
    </>
  )
}

export default ClientSection;