import React, { useState } from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';
import nb from '../../Images/excellent LOGO 30-03-2023.png';
import busy from '../../Images/team/busy logo.png';
import nimg from '../../Images/home/navimg.png'
import {MdArrowDropDown} from 'react-icons/md'

const NavBarss = () => {

const [show, setShow]= useState(false);
const [isCollapse, setIsCollapse ]:any = useState(false)
const [isProduct, setIsProduct]:any = useState(false)

const productCollapse=()=>{
    setIsProduct(!isProduct)
}

const navBarOpen =()=>{
    setShow(!show)
}

const collapseShow = ()=>{
    setIsCollapse(!isCollapse)
    console.log(isCollapse)
}

const navLinkStyle = ({ isActive}: any)=>{
    return {
      color: isActive ? '#2a1fbc' : '#111111',
      textDecoration:'none'
    }
  }

  const reloadHandler = ()=>{
    window.location.href = location.href
  }



  return (
    <>
  <header id="master-head" className="navbar menu-center menu-fixed">
                <div className="col-lg-12 col-9 d-flex">
                    <div id="main-logo" className="col-lg-3 col-12 logo-container">
                        <NavLink className="logo" to="/">
                            <img src={nb} className="ms-5 logo-dark" alt="DCode"/>
                            
                            {/* <img src={nb} className="logo-light" alt="DCode"/> */}
                        </NavLink>
                    </div>
                    <div className="menu-toggle-btn ms-4 mt-3"  onClick={navBarOpen}>
                        {/* <!-- Mobile menu toggle--> */}
                        <a className="navbar-toggle">
                            <div className="burger-lines">
                            </div>
                        </a>
                        {/* <!-- End mobile menu toggle--> */}
                    </div>
                    <div id="navigation" className={`${show ? "nav navbar-nav navbar-main open":'col-lg-7 nav navbar-nav navbar-main'}`}>
                        {show == true ?(
                    <span className='close-btn' onClick={()=>setShow(false)}></span>
                    ):null}
                        <ul id="main-menu" className="menu-primary">
                            <li className="menu-item">
                                <NavLink style={navLinkStyle} to="/">Home </NavLink>
                                
                              
                            </li>
                            <li className="menu-item menu-item-has-children mega-menu">
                                <a href="#">Products </a><span className={`${isProduct ?"child-link":'child-link active'}`} onClick={productCollapse}><i className="fas fa-chevron-down"></i></span>
                                <ul className={`${isProduct?'':"sub-menu mega-menu-inner"}`}>
                                    <li className="menu-item col-title">
                                        <a>Products</a>
                                        <ul className={`${isProduct? '': "sub-menu"}`}>
                                            <li className="menu-item" onClick={reloadHandler}><NavLink to="/erp">Excellent ERP</NavLink></li>
                                            <li className="menu-item" onClick={reloadHandler}><NavLink to="/payroll">Excellent Pay</NavLink></li>
                                            <li className="menu-item" onClick={reloadHandler}><NavLink to="/excsfa">Excellent SFA</NavLink></li>
                                           
                                            <li className="menu-item" onClick={reloadHandler}><NavLink to="/infoserve">InfoServe</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <a>Addons</a>
                                        <ul className={`${isProduct? '': "sub-menu"}`}>
                                            <li className="menu-item" onClick={reloadHandler}><NavLink to="/clengine">Collection Engine</NavLink></li>
                                        <li className="menu-item" onClick={reloadHandler}><NavLink to="/clplus">CL Plus</NavLink></li>
                                            <li className="menu-item" onClick={reloadHandler}><NavLink to="/kartmanager">Kart Manager</NavLink></li>
                                            <li className="menu-item" onClick={reloadHandler}><NavLink to="/b2g">Busy To Google</NavLink></li>
                                            {/* <li className="menu-item" onClick={reloadHandler}><NavLink to="/aarath">Aarath</NavLink></li>
                                            <li className="menu-item" onClick={reloadHandler}><NavLink to="/asset">Asset</NavLink></li> */}
                                        </ul>
                                    </li>
                                    {/* -------------------------sideImage on navbar------------------------ */}
                                    <li className="menu-item col-title d-lg-block d-none" style={{padding:'0px'}}>
                                        <img className='' src={nimg} style={{width:'100%'}}/>
                                        <h4 className='text-center'>Products</h4>
                                        <p className='text-center'>Want to scale up your business? Now is the perfect time to start with the
                                            best platform and finest idea to help you grow and succeed.</p>
                                       </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children active">
                                <a>Services</a><span className={`${isCollapse ?"child-link":'child-link active'}`} onClick={collapseShow}><i className="fas fa-chevron-down"></i></span>
                                <ul className={`${isCollapse ? "":'sub-menu'}`}>
                                <li onClick={reloadHandler} className="menu-item">
                                        <NavLink  to="/customize_software" >Customized Software</NavLink>
                                    </li>
                                    <li onClick={reloadHandler} className="menu-item">
                                        <NavLink  to="/consulting">Consulting</NavLink>
                                    </li>
                                    
                                    <li onClick={reloadHandler} className="menu-item">
                                        <NavLink  to="/saasapp" >Saas App Development</NavLink>
                                    </li>
                                    <li onClick={reloadHandler} className="menu-item">
                                        <NavLink  to="/busycust" >Busy Customisation</NavLink>
                                    </li>
                                        
                                    <li onClick={reloadHandler} className="menu-item">
                                        <NavLink  to="/mobileapp">Mobile App Development</NavLink>
                                    </li>
                                    <li onClick={reloadHandler} className="menu-item">
                                        <NavLink  to="/webapp">Web Development</NavLink>
                                    </li>
                                   
                                  
                                   
                                    
                                </ul>
                            </li>

                            <li className="menu-item">
                                <NavLink style={navLinkStyle} to="/about">About</NavLink>
                              
                            </li>

                            <li className="menu-item">
                                <NavLink style={navLinkStyle} to="/enquiry_form">Enquiry</NavLink>
                              
                            </li>
                            <li className="menu-item d-lg-none d-xl-none d-xxl-none d-flex">
                            <NavLink className="logo ms-5" to="#">
                            <img src={busy} className="ms-5 logo-dark" alt="DCode"/>
                            
                        </NavLink>
                              
                            </li>

                        </ul>
                    </div>
                    <div id="main-logo" className="col-lg-2 d-lg-flex d-none logo-container">
                        <NavLink className="logo" to="#">
                            <img src={busy} className="ms-5 logo-dark" alt="DCode"/>
                            
                        </NavLink>
                    </div>
                    
                   
                </div>
            </header>
    </>
  )
}

export default NavBarss