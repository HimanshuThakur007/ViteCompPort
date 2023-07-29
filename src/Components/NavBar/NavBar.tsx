import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import CloseBtn from '../Closebutton/CloseBtn';
import {AiOutlineMenu} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import { Card, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import nb from '../../Images/excellent LOGO 30-03-2023.png'




const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [show, setShow]: any = useState(false)
  const showHandler = ()=>{
      setShow(!show)
  }
const navLinkStyle = ({ isActive}: any)=>{
  return {
    color: isActive ? '#2a1fbc' : '#4c5359',
    textDecoration:'none'
  }
}
  return (
    <>

<div>
      <nav className="navigation">
   <div className="col-lg-3 col-sm-12">
    <NavLink to="/" className="brand-name">
      <img src={nb} className='image-fluid' style={{width:'9vh'}}/>
    </NavLink>
    <button
      className="hamburger"
    
      onClick={() => {
        setIsNavExpanded(!isNavExpanded)
      }}
    >
       {isNavExpanded == false ?<AiOutlineMenu />:<GrFormClose />} 
      {/* hamburger svg code... */}
    </button>

   </div>
    <div 
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu col-lg-6 d-flex justify-content-around"
      }
    >

      <ul>
        
        <li>
          <NavLink style={navLinkStyle} to="/" onClick={()=>setIsNavExpanded(false)}>Home</NavLink>
        </li>
        <li >
          <NavLink style={navLinkStyle} to="/product">Product</NavLink>
          {/* <NavDropdown title="Product" id="basic-nav-dropdown">

              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
       
              
              </NavDropdown>
           */}
        </li>
        
        <li>
          <NavLink style={navLinkStyle} to="/about">About</NavLink>
        </li>
        
        <li>
          <NavLink style={navLinkStyle} to="/service">Services</NavLink>
        </li>
        {/* <li>
          <NavLink style={navLinkStyle} to="/contactus">Contact</NavLink>
        </li> */}
        <li>
          <NavLink style={navLinkStyle} to="/enquiry">Enquiry</NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/blog">Blog</NavLink>
        </li>
       
      </ul>
      
 </div>

<div className='col-3'></div>
    
  </nav>

  </div>
  
 
 

    
    </>
  )
}

export default NavBar


{/* <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent"> */}

{/* <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse} >
<span classNameName="navbar-toggler-icon"></span>
</button> */}