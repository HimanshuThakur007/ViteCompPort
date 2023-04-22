import React from 'react';
import c1 from '../../Images/clients/client-1.png';
import c2 from '../../Images/clients/client-2.png';
import c3 from '../../Images/clients/client-3.png';
import c4 from '../../Images/clients/client-4.png';
import c5 from '../../Images/clients/client-5.png';
import c6 from '../../Images/clients/client-6.png';
import { Button } from '../../CustomComponents/Button';
import './Client.css'

const ClientSection = () => {
  return (
    <>

      <section id="clients" className="clients">

        <div className="container">

          <div className="row">
            <div className='col-12 d-lg-flex d-block'>
              <div className='col-6'>
                <h3>3,60,000+</h3>
                <p>Trust <b>Excellent Softwares</b> as their<br />
                  Business Accounting Software</p>
              </div>

              <div className='col-6'>
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
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
        <div className='col-12 d-flex justify-content-center mt-4'>
          <Button btnName='Read Success Stories' />

        </div>

      </section>
    </>
  )
}

export default ClientSection