import React from 'react'
import TeamCard from '../../CustomComponents/TeamCard';
import t1 from '../../Images/team/team-1.jpg';
import t2 from '../../Images/team/team-2.jpg';
import t3 from '../../Images/team/team-3.jpg';
import t4 from '../../Images/team/team-4.jpg';

const TeamSection = () => {
  return (
    <>

    <section id="team" className="team section-bg mt-4">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <TeamCard src={t1} name='Himanshu' position='CEO' about='CEO of my owm world'/>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <TeamCard src={t2} name='Atul' position='CEO' about='CEO of my owm world'/>
           
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
          <TeamCard src={t3} name='Vivek' position='CEO' about='CEO of my owm world'/>
      
           
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
          <TeamCard src={t4} name='Raja' position='CEO' about='CEO of my owm world'/>
          
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default TeamSection