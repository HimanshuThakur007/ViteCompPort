import './ourservice.css'
import hr from '../../Images/home/first page icons/HR & PayRoll.png';
import financial from '../../Images/home/first page icons/Financial Accounting.png';
import erp from '../../Images/home/first page icons/Production ERP.png';
import inv from '../../Images/home/first page icons/Inventory Control.png';
import dms from '../../Images/home/first page icons/Distributor Management System.png';
import sfa from '../../Images/home/first page icons/Sales Force Automation.png';
import bc from '../../Images/home/first page icons/Busy Customisation.png';
import ec from '../../Images/home/first page icons/E-Commerce.png';
import ma from '../../Images/home/first page icons/Mobile Application Development.png';
import wa from '../../Images/home/first page icons/Web Application Development.png';
import cons from '../../Images/home/first page icons/Consulting.png';
import cs from '../../Images/home/first page icons/Customized Software.png';

const OurServices = ({clickDownHandler}:any) => {
  return (
    <>
    <section className="industries_we_serve">
    <div className="container">
        <div className="industries_section">
            <div className="sec-title">
                <h2 className="h1">Solutions we have</h2>
                <p>At Excellent Softwares, we pride ourselves on our innovative approach to helping organizations worldwide bring their digital vision to life. With a deep understanding of the evolving digital landscape, we offer cutting-edge software solutions that drive business growth and transformation.
                </p>
            </div>
            <div className="row row-start">
                <ul className="col-12  d-flex flex-wrap ">
                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={hr} alt="healthcare app development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('pay')} style={{cursor:"pointer"}}>HR & PayRoll</h5>
                            </div>
                        </div>
                    </li>

                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3 ">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={financial} alt="banking app development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Fa')} style={{cursor:"pointer"}}>Financial Accounting</h5>
                            </div>
                        </div>
                    </li>

                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={erp} alt="fitness app development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Pe')} style={{cursor:"pointer"}}>Production ERP</h5>
                            </div>
                        </div>
                    </li>

                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={inv} alt="gaming app development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Ic')} style={{cursor:"pointer"}}>Inventory Control</h5>
                            </div>
                        </div>
                    </li>

                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={dms} alt="media app development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Is')} style={{cursor:"pointer"}}> Distributor Management System</h5>
                            </div>
                        </div>
                    </li>

                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={sfa} alt="retail app development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('sfa')} style={{cursor:"pointer"}}>Sales Force Automation</h5>
                            </div>
                        </div>
                    </li>

                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={bc} alt="e-learning app development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Bc')} style={{cursor:"pointer"}}>Busy Customisation</h5>
                            </div>
                        </div>
                    </li>
                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={ec} alt="travel development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Ec')} style={{cursor:"pointer"}}>E-Commerce</h5>
                            </div>
                        </div>
                    </li>
                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={ma} alt="travel development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('mobile')} style={{cursor:"pointer"}}>Mobile App Development</h5>
                            </div>
                        </div>
                    </li>
                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={wa} alt="travel development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Web')} style={{cursor:"pointer"}}>Web App Development</h5>
                            </div>
                        </div>
                    </li>
                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={cons} alt="travel development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Con')} style={{cursor:"pointer"}}>Consulting</h5>
                            </div>
                        </div>
                    </li>
                    <li className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                    <div className='d-flex mb-lg-5 mb-md-3 mb-2'>
                            <div className="industries_section_li_figure">
                                <img src={cs} alt="travel development services" className="img_full"/>
                            </div>
                            <div className="industries_section_li_figcaption ms-4">
                                <h5 className="industries_section_li_figcaption_head" onClick={()=>clickDownHandler('Bu')} style={{cursor:"pointer"}}>Customized Software</h5>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default OurServices