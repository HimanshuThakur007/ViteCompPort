import React from 'react';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'

const TeamCard = ({src,name,position,about,hreft,linkedIn}:any) => {
  return (
    <>
    <div className="member d-flex align-items-start">
              <div className="pic"><img src={src} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>{name}</h4>
                <span>{position}</span>
                <p>{about}</p>
                <div className="social">
                  <a href={hreft}><i className="ri-twitter-fill"><AiOutlineTwitter /></i></a>
                  <a href=""><i className="ri-facebook-fill"><FaFacebook /></i></a>
                  <a href=""><i className="ri-instagram-fill"><AiFillInstagram /></i></a>
                  <a href={linkedIn}> <i className="ri-linkedin-box-fill"><AiFillLinkedin /></i> </a>
                </div>
              </div>
            </div>
    </>
  )
}

export default TeamCard