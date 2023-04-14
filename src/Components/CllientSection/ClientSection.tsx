import React from 'react';
import c1 from '../../Images/clients/client-1.png';
import c2 from '../../Images/clients/client-2.png';
import c3 from '../../Images/clients/client-3.png';
import c4 from '../../Images/clients/client-4.png';
import c5 from '../../Images/clients/client-5.png';
import c6 from '../../Images/clients/client-6.png';

const ClientSection = () => {
  return (
    <>

    <section id="clients" className="clients section-bg">
      <div className="container">

        <div className="row" data-aos="zoom-in">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={c1} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={c2} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={c3} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={c4} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={c5} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={c6} className="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default ClientSection