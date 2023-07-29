import React from 'react'
import './howstarted.css'

const HowStarted = () => {
  return (
   <>
   <section className="how-started">
    <div className="container">
        <div className="how_it_start_section">
            <div className="sec-title">
                <h3 className="">How it all started and what drives us today</h3>
                <p>
                    Since 2002, we've served more than 5000+ Businesses. We are delivering user-friendly and Excellent solutions by
                    collaborating with a diversified team of specialists with distinct backgrounds and experiences.
                </p>
            </div>
            <div className="row-start">
                <ul className="how_it_start_ul" style={{padding:'0px'}}>
                    <li className="how_it_start_li" id="counter-box">
                        <div>
                            <h3 className="how_it_start_li_head "><span className="count1" data-number="250">50</span>+</h3>
                            <p className="how_it_start_li_para">Team Members</p>
                        </div>
                    </li>
                    <li className="how_it_start_li" id="counter-box1">
                        <div>
                            <h3 className="how_it_start_li_head"><span className="count1" data-number="200">5000</span>+</h3>
                            <p className="how_it_start_li_para">Businesses We Served</p>
                        </div>
                    </li>
                    <li className="how_it_start_li" id="counter-box2">
                        <div>
                            <h3 className="how_it_start_li_head"><span className="count1" data-number="100">15</span>+</h3>
                            <p className="how_it_start_li_para">Products</p>
                        </div>
                    </li>
                    <li className="how_it_start_li" id="counter-box3">
                        <div>
                            <h3 className="how_it_start_li_head"><span className="count1" data-number="300">10000</span>+</h3>
                            <p className="how_it_start_li_para">Custom Solutions Delivered</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
   </>
  )
}

export default HowStarted