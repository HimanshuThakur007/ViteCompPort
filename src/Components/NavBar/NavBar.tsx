import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import CloseBtn from '../Closebutton/CloseBtn';




const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed]:any[] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    

  return (
    <>
  

  <header id="header" className="fixed-top header-scrolled">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Es</a></h1>
   
    <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><NavLink className="nav-link scrollto active" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/service">Services</NavLink></li>
          <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
          <li><NavLink className="nav-link scrollto" to="/team">Team</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/product">Products</NavLink></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="/contactus">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle">h</i>
      </nav>

    </div>
  </header>

 

    
    </>
  )
}

export default NavBar


{/* <div classNameName={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent"> */}

{/* <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse} >
<span classNameName="navbar-toggler-icon"></span>
</button> */}