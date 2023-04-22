import React from 'react'
import '../Cardstyle.css'
import {FaArrowCircleRight} from 'react-icons/fa'

export const ProductCard_leftImg = ({src,alt,text,title,icon}:any) => {
    let iconStyle = {color:'Tomato'}
  return (
   <>
     <div className="row">
          <div className="col-lg-5 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={src} className="img-fluid" alt={alt}/>
          </div>
          <div className="col-lg-7 pt-4 pt-lg-0 d-flex justify-content-center align-items-stretch content" data-aos="fade-left" data-aos-delay="100">
           
          <div className='card w-100 cardStyle' style={{borderRadius:'20px'}}>
           <div className="card-body">
           <h2 className="card-title titleStyle" style={{margin: '0 0 32px'}}>{title}</h2>
           <p className="card-text" style={{fontSize:'1.2rem',fontStyle:'italic'}}>{text}</p>
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
    <div className='d-flex justify-content-end'>
      <button className='btn'>{icon}</button>
      {/* <button className='btn'><FaArrowCircleRight size={40} style={iconStyle}/></button> */}
      </div>
  </div>
        
          </div>
        </div>
   </>
  )
}




export const ProductCard_rightImg = ({rsrc,rtext,rtitle}:any) => {
    let iconStyle = {color:'Tomato'}
  return (
    <>
    
    <div className="row">
          <div className="col-lg-7 order-lg-1 order-md-2 order-2 pt-lg-0 pt-5 d-flex justify-content-center content " data-aos="fade-left" data-aos-delay="100">

        {/* <CardComp title='Financial Accounting' text='BUSY is a powerful accounting software that helps streamline and control your business finances, track and analyse income and expenses, and more. Key features include complete books of accounting, sales and purchase analysis, bank reconciliation, and comprehensive reporting. BUSY is your complete business accounting solution' /> */}
        <div className='card w-100 cardStyle' style={{borderRadius:'20px'}}>
           <div className="card-body">
           <h2 className="card-title titleStyle" style={{margin: '0 0 32px'}}>{rtitle}</h2>
           <p className="card-text" style={{fontSize:'1.2rem',fontStyle:'italic'}}>{rtext}</p>
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
    <div className='d-flex justify-content-end'>
      <button className='btn'><FaArrowCircleRight size={40} style={iconStyle}/></button>
      </div>
  </div>
         
          </div>
          <div className="col-lg-5 order-lg-2 order-md-1 order-1 mt-4 m pt-lg-0  d-flex align-items-center " data-aos="fade-right" data-aos-delay="100">
            <img src={rsrc} className="img-fluid" alt=""/>
          </div>
        </div>
    
    </>
  )
}

