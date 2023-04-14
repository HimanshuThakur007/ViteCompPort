import React from 'react'

const ServiceCard = ({onClick,heading,about, ...props}:any) => {
  return (
   <>
    <div className="icon-box" onClick={onClick}>
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a>{heading}</a></h4>
              <p>{about}</p>
            </div>
   </>
  )
}

export default ServiceCard