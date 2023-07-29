import React from 'react';
import './styleproduct.css'

const SmallProductCard = ({cardTitle,cardText,src,hstyle,tstyle,src2}:any) => {
  return (
    <>

          <div className='features-block theme-one wow fadeInUp' style={{visibility: 'visible' ,animationName: 'fadeInUp'}}>
            <div className='inner-box'>
              <div className='icon'>
                 <img className='normal' src={src}/>
                 <img className='hover' src={src2} />
              </div>
              <div className='text'>
                <h4 className='h4'>{cardTitle}</h4>
                <p style={tstyle}>{cardText}</p>
              </div>

            </div>
          </div>
       
    </>
  )
}

export default SmallProductCard