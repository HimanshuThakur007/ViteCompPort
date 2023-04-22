import React from 'react'

const ServiceCard = ({onClick,heading,about,icon, ...props}:any) => {
  return (
   <>
    <div className="icon-box" onClick={onClick}>
              <div className="icon">{icon}</div>
              <h4><a>{heading}</a></h4>
              <p>{about}</p>
            </div>
   </>
  )
}

export default ServiceCard