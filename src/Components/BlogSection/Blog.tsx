import React from 'react';
// import '../allstyle/allstyle.css'
import './BlogStyle.css';
import large from '../../Images/large-thumb-3.jpg'
import l2 from '../../Images/large-thumb-2.jpg'
import l4 from '../../Images/large-thumb-4.jpg'
import l5 from '../../Images/large-thumb-5.jpg';
import l1 from '../../Images/large-thumb-1.jpg';
import l6 from '../../Images/large-thumb-6.jpg'

const Blog = () => {
  return (
    <>
    <section id='blog' className='blog'>
    <div className="inner-page-header section-padding style-dark">
                    <div className="container">
                        <div className="page-title-inner text-center clearfix">
                            <div className="heading-wrapper">
                                <h1 className="h1">Latest News</h1>
                                <div className="lead-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat dolor velit.</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="section-padding">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="news-grid column-3">
                                <div className="article-block category-software">
                                    <div className="inner-box">
                                        <div className="article-img">
                                            <a href="#">
                                                <img src={large} alt=""/>
                                            </a>
                                        </div>
                                        <div className="article-details">
                                            <div className="post-meta">
                                                <span className="entry-meta entry-category">
                                                    <a href="#">Software</a>
                                                </span>
                                                <span className="entry-meta entry-date">
                                                    <a href="#">August 11, 2020</a>
                                                </span>
                                            </div>
                                            <h2 className="entry-title"><a href="#">20 Questions You Should Always Ask About Security Software Before Buying It.</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-block category-technology">
                                    <div className="inner-box">
                                        <div className="article-img">
                                            <a href="#">
                                                <img src={l2} alt=""/>
                                            </a>
                                        </div>
                                        <div className="article-details">
                                            <div className="post-meta">
                                                <span className="entry-meta entry-category">
                                                    <a href="#">Technology</a>
                                                </span>
                                                <span className="entry-meta entry-date">
                                                    <a href="#">August 01, 2020</a>
                                                </span>
                                            </div>
                                            <h2 className="entry-title"><a href="#">Responsible for a Technology Budget? 12 Top Notch Ways to Spend Your Money.</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-block category-marketing">
                                    <div className="inner-box">
                                        <div className="article-img">
                                            <a href="#">
                                                <img src={l5} alt=""/>
                                            </a>
                                        </div>
                                        <div className="article-details">
                                            <div className="post-meta">
                                                <span className="entry-meta entry-category">
                                                    <a href="#">Marketing</a>
                                                </span>
                                                <span className="entry-meta entry-date">
                                                    <a href="#">July 27, 2020</a>
                                                </span>
                                            </div>
                                            <h2 className="entry-title"><a href="#">Why You Should Focus on Improving Marketing.</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-block category-event">
                                    <div className="inner-box">
                                        <div className="article-img">
                                            <a href="#">
                                                <img src={l1} alt=""/>
                                            </a>
                                        </div>
                                        <div className="article-details">
                                            <div className="post-meta">
                                                <span className="entry-meta entry-category">
                                                    <a href="#">Event</a>
                                                </span>
                                                <span className="entry-meta entry-date">
                                                    <a href="#">July 11, 2020</a>
                                                </span>
                                            </div>
                                            <h2 className="entry-title"><a href="#">The Ultimate Glossary of Terms About Software Launch Event.</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-block category-technology">
                                    <div className="inner-box">
                                        <div className="article-img">
                                            <a href="#">
                                                <img src={l6} alt=""/>
                                            </a>
                                        </div>
                                        <div className="article-details">
                                            <div className="post-meta">
                                                <span className="entry-meta entry-category">
                                                    <a href="#">Technology</a>
                                                </span>
                                                <span className="entry-meta entry-date">
                                                    <a href="#">July 07, 2020</a>
                                                </span>
                                            </div>
                                            <h2 className="entry-title"><a href="#">The Top Reasons People Succeed in the Finance Industry.</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-block category-software">
                                    <div className="inner-box">
                                        <div className="article-img">
                                            <a href="#">
                                                <img src={l4} alt=""/>
                                            </a>
                                        </div>
                                        <div className="article-details">
                                            <div className="post-meta">
                                                <span className="entry-meta entry-category">
                                                    <a href="#">Software</a>
                                                </span>
                                                <span className="entry-meta entry-date">
                                                    <a href="#">June 30, 2020</a>
                                                </span>
                                            </div>
                                            <h2 className="entry-title"><a href="#">How Technology Is Changing How We Treat Security Software.</a></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrapper text-center">
                                <ul className="pagination">
                                    <li>
                                        <span aria-current="page" className="page-numbers current">1</span>
                                    </li>
                                    <li>
                                        <a className="page-numbers" href="#">2</a>
                                    </li>
                                    <li>
                                        <a className="page-numbers" href="#">3</a>
                                    </li>
                                    <li>
                                        <a className="page-numbers" href="#">4</a>
                                    </li>
                                    <li className="page-next">
                                        <a href="#">
                                            <i className="mdi mdi-chevron-right">r</i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
    </>
  )
}

export default Blog