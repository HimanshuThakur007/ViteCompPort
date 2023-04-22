import React from 'react';
import './Nav.css'

const NavBarss = () => {
  return (
    <>
    <header id="master-head" className="navbar menu-absolute menu-center">
                <div className="container-fluid">
                    <div id="main-logo" className="logo-container">
                        <a className="logo" href="index-standard.html">
                            <img src="images/d-code-logo-dark.svg" className="logo-dark" alt="DCode"/>
                            <img src="images/d-code-logo-light.svg" className="logo-light" alt="DCode"/>
                        </a>
                    </div>
                    <div className="menu-toggle-btn">
                        {/* <!-- Mobile menu toggle--> */}
                        <a className="navbar-toggle">
                            <div className="burger-lines">
                            </div>
                        </a>
                        {/* <!-- End mobile menu toggle--> */}
                    </div>
                    <div id="navigation" className="nav navbar-nav navbar-main"><span className="close-btn"></span>
                        <ul id="main-menu" className="menu-primary">
                            <li className="menu-item menu-item-has-children active">
                                <a href="index-standard.html">Home</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                <ul className="sub-menu">
                                    <li className="menu-item active"><a href="index-standard.html">Standard Software</a></li>
                                    <li className="menu-item"><a href="index-crm.html">CRM software</a></li>
                                    <li className="menu-item"><a href="index-security-software.html">Security Software</a></li>
                                    <li className="menu-item"><a href="index-payment-software.html">Payment Software</a></li>
                                    <li className="menu-item"><a href="index-erp-software.html">ERP Systems</a></li>
                                    <li className="menu-item"><a href="index-digital-marketing.html">Digital Marketing</a></li>
                                    <li className="menu-item"><a href="index-ai-chatbot-software.html">AI Chatbot Software</a></li>
                                    <li className="menu-item"><a href="index-lms-software.html">LMS Software</a></li>
                                    <li className="menu-item"><a href="index-email-marketing.html">Email Marketing <span className="badge badge-danger rounded">New</span></a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#">Pages</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">About Us</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="page-aboutus.html">About Us</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="page-aboutus-two.html">About Us Two</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="page-aboutus-three.html">About Us Three <span className="badge badge-danger rounded">New</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="page-services.html">Services</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="page-career.html">Careers</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="page-job-details.html">Job Details</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Contact Us</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="page-contactus.html">Contact Us</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="page-contactus-two.html">Contact Us Two</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="page-contactus-three.html">Contact Us Three <span className="badge badge-danger rounded">New</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Auth Pages</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a target="_blank" href="page-signin.html">Login</a>
                                            </li>
                                            <li className="menu-item">
                                                <a target="_blank" href="page-signin-two.html">Login Two</a>
                                            </li>
                                            <li className="menu-item">
                                                <a target="_blank" href="page-signup.html">Register</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="page-404.html">404 (Not Found)</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="page-comingsoon.html" target="_blank">Coming Soon</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#">Blogs</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Blog Standard</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="page-blog-grid-3-col.html">Blog Grid (3 Col)</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="page-blog-grid-2-col.html">Blog Grid (2 Col)</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="page-blog-with-sidebar.html">Blog with Sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="page-blog-details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#">Elements</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                <ul className="sub-menu">
                                    <li className="menu-item">
                                        <a href="element-content-box.html">Content Boxes</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="element-pricing-tables.html">Pricing Tables</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="element-quotes-carousel.html">Quotes Carousel</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="element-counters-countdown.html">Counters &amp; Countdown</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="element-tabs-accordions.html">Tabs &amp; Accordions</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children mega-menu">
                                <a href="#">Mega Menu</a><span className="child-link"><i className="fas fa-chevron-down"></i></span>
                                <ul className="sub-menu mega-menu-inner">
                                    <li className="menu-item col-title">
                                        <a href="#">Layouts</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="index-standard.html">Standard Software</a></li>
                                            <li className="menu-item"><a href="index-crm.html">CRM software</a></li>
                                            <li className="menu-item"><a href="index-security-software.html">Security Software</a></li>
                                            <li className="menu-item"><a href="index-payment-software.html">Payment Software</a></li>
                                            <li className="menu-item"><a href="index-erp-software.html">ERP Systems</a></li>
                                            <li className="menu-item"><a href="index-digital-marketing.html">Digital Marketing</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <a href="#">Inner Pages</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="page-aboutus.html">About Us</a></li>
                                            <li className="menu-item"><a href="page-services.html">Services</a></li>
                                            <li className="menu-item"><a href="page-contactus.html">Contact Us</a></li>
                                            <li className="menu-item"><a href="page-404.html">404 (Not Found)</a></li>
                                            <li className="menu-item"><a target="_blank" href="page-comingsoon.html">Coming Soon</a></li>
                                            <li className="menu-item"><a target="_blank" href="page-signin-two.html">Login/Register</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <a href="#">Elements</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="element-content-box.html">Content Boxes</a></li>
                                            <li className="menu-item"><a href="element-pricing-tables.html">Pricing Tables</a></li>
                                            <li className="menu-item"><a href="element-quotes-carousel.html">Quotes Carousel</a></li>
                                            <li className="menu-item"><a href="element-counters-countdown.html">Counters &amp; Countdown</a></li>
                                            <li className="menu-item"><a href="element-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="page-blog-grid-3-col.html">Blog Grid (3 Col)</a></li>
                                            <li className="menu-item"><a href="page-blog-grid-2-col.html">Blog Grid (2 Col)</a></li>
                                            <li className="menu-item"><a href="page-blog-with-sidebar.html">Blog with Sidebar</a></li>
                                            <li className="menu-item"><a href="page-blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    <div className="navbar-right">
                        <div className="menu-button">
                            <a href="#" target="_blank">
                                <div className="btn btn-outline-primary btn-light">sign in</div>
                            </a>
                        </div>
                        <div className="search-option style-dark">
                            <div className="search-btn">
                                <a href="#"><i className="fas fa-search"></i></a>
                            </div>
                        </div>
                    </div></div>
                    
                </div>
            </header>
    </>
  )
}

export default NavBarss