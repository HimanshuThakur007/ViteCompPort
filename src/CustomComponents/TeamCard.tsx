import React from 'react'

const TeamCard = ({src,name,position,about}:any) => {
  return (
    <>
    <div className="member d-flex align-items-start">
              <div className="pic"><img src={src} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>{name}</h4>
                <span>{position}</span>
                <p>{about}</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
    </>
  )
}

export default TeamCard