import React from 'react';
import '../../Components/allstyle/allstyle.css'
import li1 from '../../Images/large-thumb-3 (1).jpg';
import l2 from '../../Images/large-thumb-2.jpg'
import l4 from '../../Images/large-thumb-4.jpg'
import l5 from '../../Images/large-thumb-5.jpg';

const BlogDetails = () => {
  return (
    <>
    <section id='blogdetails' className='blogdetails'>
    <div className="inner-page-header section-padding style-dark">
                    <div className="container">
                        <div className="page-title-inner text-center clearfix">
                            <div className="heading-wrapper">
                                <h1 className="h1">20 Questions You Should Always Ask About Security Software Before Buying It.</h1>
                            </div>
                            <div className="post-meta">
                                {/* <span className="entry-meta entry-author">
                                    By - 
                                    <a href="#">DCode Author</a>
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-padding">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-lg-8">
                                <article className="post">
                                    <div className="post-thumbnail">
                                        <img src={li1} alt=""/>
                                    </div>
                                    <div className="post-meta">
                                        <span className="entry-meta entry-category">
                                            <a href="#">Software</a>
                                        </span>
                                        <span className="entry-meta entry-date">
                                            <a href="#">August 11, 2020</a>
                                        </span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu.</p>
                                    <p>Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.</p>
                                    <blockquote>
                                        <p>Aliquam malesuada bibendum arcu vitae elementum. Vel pretium lectus quam id leo in vitae turpis. Facilisi nullam vehicula ipsum. <cite>– Rosalina Pong</cite></p>
                                    </blockquote>
                                    <h2>Proin vel leo vel leo condimentum auctor</h2>
                                    <p>Aenean nibh massa, condimentum in dignissim ut, egestas nec est. Aenean rhoncus, risus a commodo placerat, arcu neque auctor urna, nec tincidunt lacus sem at augue. Quisque sed nunc eget dolor fermentum rutrum.</p>
                                    <ul className="list-style-one">
                                        <li><strong>Reliability:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien.</li>
                                        <li><strong>Speed:</strong> Pellentesque sit amet enim sed dui consectetur sagittis. Nulla varius, ex nec varius efficitur, ex quam sodales erat, quis lacinia nulla dolor vitae massa.</li>
                                        <li><strong>Pricing:</strong> Nunc tincidunt, libero in volutpat consectetur, massa erat sagittis nisi, in semper eros diam non ipsum.</li>
                                        <li><strong>Support:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien.</li>
                                    </ul>
                                    <h3>Mauris quis scelerisque sapien</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu.</p>
                                    <p>Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.</p>
                                    <div className="entry-content-bottom">
                                        <div className="entry-tags">
                                            <label className="label">Tags:</label>
                                            <div className="tagcloud">
                                                <a href="#">Technology</a><a href="#">Software</a><a href="#">Digital</a><a href="#">Social</a><a href="#">Security</a><a href="#">CRM</a><a href="#">Payment</a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar right-side">
                                    <div className="widget search-box">
                                        <form method="post">
                                            <div className="form-group">
                                                <input type="search" name="SearchInput" className="form-control" placeholder="Search..."/>
                                            </div>
                                            <button type="submit"><i className="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="widget text">
                                        <div className="widget-title">
                                            <h3 className="title">Free Text</h3>
                                        </div>
                                        <div className="text-widget">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros.</p>
                                        </div>
                                    </div>
                                    <div className="widget widget_categories">
                                        <div className="widget-title">
                                            <h3 className="title">Categories</h3>
                                        </div>
                                        <ul>
                                            <li className="cat-item"><a href="#">Event</a></li>
                                            <li className="cat-item"><a href="#">Software</a></li>
                                            <li className="cat-item"><a href="#">Technology</a></li>
                                            <li className="cat-item"><a href="#">Marketing</a></li>
                                            <li className="cat-item"><a href="#">Uncategorized</a></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_recent_entries">
                                        <div className="widget-title">
                                            <h3 className="title">Recent Post</h3>
                                        </div>
                                        <ul className="st-recent-posts">
                                            <li className="rp-item">
                                                <a href="#">
                                                    <div className="article-img">
                                                        <img src={l2} alt=""/>
                                                    </div>
                                                    <div className="article-details">
                                                        <h4 className="entry-title">20 Questions You Should Always Ask About Security Software Before Buying It.</h4>
                                                        <span className="rp-date">August 11, 2020</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="rp-item">
                                                <a href="#">
                                                    <div className="article-img">
                                                        <img src={l4} alt=""/>
                                                    </div>
                                                    <div className="article-details">
                                                        <h4 className="entry-title">Responsible for a Technology Budget? 12 Top Notch Ways to Spend Your Money.</h4>
                                                        <span className="rp-date">August 01, 2020</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="rp-item">
                                                <a href="#">
                                                    <div className="article-img">
                                                        <img src={l5} alt=""/>
                                                    </div>
                                                    <div className="article-details">
                                                        <h4 className="entry-title">Why You Should Focus on Improving Marketing.</h4>
                                                        <span className="rp-date">July 27, 2020</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_tag_cloud">
                                        <div className="widget-title">
                                            <h3 className="title">Tag Cloud</h3>
                                        </div>
                                        <div className="tagcloud">
                                            <a href="#">Technology</a><a href="#">Software</a><a href="#">Digital</a><a href="#">Social</a><a href="#">Security</a><a href="#">CRM</a><a href="#">Payment</a>
                                        </div>
                                    </div>
                                    <div className="widget widget_social">
                                        <div className="widget-title">
                                            <h3 className="title">Follow Us</h3>
                                        </div>
                                        <div className="social-media-links">
                                            <ul>
                                                <li><a target="_blank" href="https://www.facebook.com/sacredthemes/"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a target="_blank" href="https://www.instagram.com/sacred_themes/"><i className="fab fa-instagram"></i></a></li>
                                                <li><a target="_blank" href="https://www.linkedin.com/company/sacredthemes/"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a target="_blank" href="https://twitter.com/SacredThemes"><i className="fab fa-twitter"></i></a></li>
                                                <li><a target="_blank" href="https://www.behance.net/sacredthemes"><i className="fab fa-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
    </>
  )
}

export default BlogDetails