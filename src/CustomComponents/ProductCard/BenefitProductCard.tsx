import React from 'react';
import './benefit.css'

const BenefitProductCard = ({head, text}:any) => {
  return (
    <>
    <div className='features-block theme-two wow fadeInUp' style={{visibility:'visible' ,animationName: 'fadeInUp'}}>
        <div className='inner-box'>
            <div className='text'>
                <h4>{head}</h4>
                <p>{text}</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default BenefitProductCard