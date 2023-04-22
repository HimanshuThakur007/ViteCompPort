import React from 'react';
import './pcard.css'

const PremimumCard = ({phead,phstyle,psrc}:any) => {
  return (
    <>
     <div className='features-block theme-three wow fadeInUp' style={{visibility:'visible' ,animationName: 'fadeInUp'}}>
        <div className='inner-box'>
          <div className='icon'>
            <img className='normal' src={psrc}/>
          </div>
            <div className='text'>
                <h4>{phead}</h4>
               
            </div>
        </div>

    </div>
    </>
  )
}

export default PremimumCard