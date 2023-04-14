import React from 'react'

interface CardComp{
    title: string,
    text: string,

}

export const CardComp = ({title, text}: CardComp) => {
    
  return (
   <>
   <div className='card w-100'>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
  </div>
   
   </>
  )
}
