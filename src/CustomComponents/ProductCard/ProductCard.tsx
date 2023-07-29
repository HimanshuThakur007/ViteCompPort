import React, { useState } from 'react'
import '../Cardstyle.css'
import {FaArrowCircleRight} from 'react-icons/fa'
import ReadMore from '../ReadMore'
import { Collapse } from 'react-bootstrap'

export const ProductCard_leftImg = ({src,alt,text,title,icon,text1,phead,onClick,textBold,secondaryText,src2,collapseItem}:any) => {
    let iconStyle = {color:'Tomato'}
    const [show, setShow]: any = useState(false)
    const showHide = ()=>{
           setShow(!show)
    }
   
  return (
   <>
     <div className="row">
          <div className="col-lg-5 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={src} className="img-fluid" alt={alt}/>
          </div>
          <div className="col-lg-7 pt-4 pt-lg-0 d-flex justify-content-center align-items-stretch content" data-aos="fade-left" data-aos-delay="100">
           
          <div className='card w-100 cardStyle' style={{borderRadius:'20px'}}>
           <div className="card-body">
            <div className='col-12 d-flex justify-content-between'>
           <h2 className="card-title titleStyle" style={{margin: '0 0 32px'}}>{title}</h2>
           <img src={src2} className="ms-5 logo-dark" alt="logo" style={{width:'17vh'}}/>
           {/* <img className='img-fluid' src={src2} style={{width:'5vw'}}/> */}
           </div>
           {/* <p className="card-text" style={{fontSize:'1.2rem',fontStyle:'italic'}}><span><b>{phead}</b></span>{text1}</p> */}
           <p className="card-text" style={{fontSize:'1.2rem',fontStyle:'italic'}}>
            {text} <a onClick={showHide} style={{color:'blue',cursor:'pointer'}} className={`${show === true ? "d-none":null}`}>{show === true ? 'Read Less...': 'Read More...'}</a>
            </p>
            
            {show === true?(
            <p className="card-text" style={{fontSize:'1.2rem',fontStyle:'italic'}}> <b>{textBold}</b> <br/> <span>{secondaryText}</span> {collapseItem}
            <a onClick={showHide} style={{color:'blue',cursor:'pointer'}} className={`${show === true ? null: "d-none"}`}>{show === true ? 'Read Less...': 'Read More...'}</a>
            </p>
            ):null}
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
    <div className='d-flex justify-content-end'>
 
      <button className='btn' onClick={onClick}>{icon}</button>
      {/* <button className='btn'><FaArrowCircleRight size={40} style={iconStyle}/></button> */}
      </div>
  </div>
        
          </div>
        </div>
   </>
  )
}




export const ProductCard_rightImg = ({rsrc,rtext,rtitle,onClick,textBoldright,secondaryTextright,secondBold,rsrc2,collapseRight}:any) => {
    let iconStyle = {color:'Tomato'}
    const [show, setShow]: any = useState(false)
    const showHide = ()=>{
           setShow(!show)
    }
  return (
    <>
    
    <div className="row">
          <div className="col-lg-7 order-lg-1 order-md-2 order-2 pt-lg-0 pt-5 d-flex justify-content-center content " data-aos="fade-left" data-aos-delay="100">

        {/* <CardComp title='Financial Accounting' text='BUSY is a powerful accounting software that helps streamline and control your business finances, track and analyse income and expenses, and more. Key features include complete books of accounting, sales and purchase analysis, bank reconciliation, and comprehensive reporting. BUSY is your complete business accounting solution' /> */}
        <div className='card w-100 cardStyle' style={{borderRadius:'20px'}}>
           <div className="card-body">
           <div className='col-12 d-flex justify-content-between'>
           <h2 className="card-title titleStyle" style={{margin: '0 0 32px'}}>{rtitle}</h2>
           <img src={rsrc2} className="ms-5 logo-dark" alt="logo" style={{width:'17vh'}}/>
           </div>
          
            <p className="card-text" style={{fontSize:'1.2rem',fontStyle:'italic'}}>
            {rtext} <a onClick={showHide} style={{color:'blue',cursor:'pointer'}} className={`${show === true ? "d-none":null}`}>{show === true ? 'Read Less...': 'Read More...'}</a>
            </p>
            
            {show === true?(
            <p className="card-text" style={{fontSize:'1.2rem',fontStyle:'italic'}}> <b>{textBoldright}</b> <br/> <span>{secondBold}</span> {collapseRight} 
            <a onClick={showHide} style={{color:'blue',cursor:'pointer'}} className={`${show === true ? null: "d-none"}`}>{show === true ? 'Read Less...': 'Read More...'}</a>
            </p>
            ):null}
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
    <div className='d-flex justify-content-end'>
    
      <button className='btn' onClick={onClick}><FaArrowCircleRight size={40} style={iconStyle}/></button>
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

export const Read = ({rsrc,rtext,rtitle,onClick,textBoldright,secondaryTextright,secondBold,rsrc2,textr}:any) => {
    let iconStyle = {color:'Tomato'}
  return (
    <>
    
    <div className="row">
          <div className="col-lg-7 order-lg-1 order-md-2 order-2 pt-lg-0 pt-5 d-flex justify-content-center content " data-aos="fade-left" data-aos-delay="100">

        {/* <CardComp title='Financial Accounting' text='BUSY is a powerful accounting software that helps streamline and control your business finances, track and analyse income and expenses, and more. Key features include complete books of accounting, sales and purchase analysis, bank reconciliation, and comprehensive reporting. BUSY is your complete business accounting solution' /> */}
        <div className='card w-100 cardStyle' style={{borderRadius:'20px'}}>
           <div className="card-body">
           <h2 className="card-title titleStyle" style={{margin: '0 0 32px'}}>{rtitle}</h2>
           <p className="card-text" style={{fontSize:'1.2rem',fontStyle:'italic'}}>{textr} <b>{textBoldright}</b><br /> <b>{secondBold}</b><br/><span>{secondaryTextright}</span></p>
       {/* <ReadMore text={textr} maxLength={450}/> */}
  </div>
    <div className='d-flex justify-content-between'>
    <img src={rsrc2} className="ms-5 logo-dark" alt="logo" style={{width:'17vh'}}/>
      <button className='btn' onClick={onClick}><FaArrowCircleRight size={40} style={iconStyle}/></button>
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

