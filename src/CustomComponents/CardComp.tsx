import React from 'react'
import './Cardstyle.css';
import {FaArrowCircleRight} from 'react-icons/fa'
export const CardComp = ({title, text}: any) => {
    let iconStyle = {color:'Tomato'}
  return (
   <>
   <div className='card w-100 cardStyle' style={{borderRadius:'20px'}}>
  
  <div className="card-body">
    <h2 className="card-title titleStyle" style={{margin: '0 0 32px'}}>{title}</h2>
    <p className="card-text" style={{fontSize:'1.2rem'}}>{text}</p>
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
    <div className='d-flex justify-content-end'>
      <button className='btn'><FaArrowCircleRight size={40} style={iconStyle}/></button>
      </div>
  </div>
   
   </>
  )
}
