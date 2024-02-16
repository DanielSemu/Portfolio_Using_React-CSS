import React from 'react'
import "./about.css"
import Me from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'
const About = () => {
  return (
        <section className="about container section" id='about'>
          <h2 className="section_title">About Me</h2>
          
          <div className="about_container grid">
            <img src={Me} alt="" />
          
          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">
              I am Daniel Semu, Web Developer From AA Ethiopia. I have rich Experiance in website Design and building and customization, aslo I am good at Algorithms
              </p>
              <a href="" className="btn">Download CV</a>
            </div>
            <div iv className="about_skills grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Development</h3>
                  <span className="Skills_number">90%</span>
                </div>

                <div className="skills_bar">
                  <span className="skills_percentage development"></span>
                </div>
              </div>



      <div className="skills_data">
        <div className="skills_titles">
        <h3 className="skills_name">UX/UI design</h3>
        <span className="Skills_number ">80%</span>
        </div>
        <div className="skills_bar">
          <span className="skills_percentage ui_design"></span>
        </div>
      </div>



      <div className="skills_data">
        <div className="skills_titles">
        <h3 className="skills_name">Photography</h3>
        <span className="Skills_number ">60%</span>
        </div>
        <div className="skills_bar">
          <span className="skills_percentage photography"></span>
        </div>
        </div>
        </div>
      </div>
    </div>
    <AboutBox/>
  </section>

    // <div className='main-container'>
    //   <div className="second-container">
    //     <div className="left">
    //       <h1>About Me</h1>
    //       <img src={Me} alt="" />
    //     </div>
    //     <div className="card">
    //       <div className="card-left">
    //         <p>I am Daniel Semu, Web Developer From AA Ethiopia. I have rich Experiance in website Design and building and customization, aslo I am good at Algorithms</p>
    //         <a href="" className="btn">Download CV
    //         </a>
    //       </div>
    //       <div className="card-right">
    //         <p>Development</p>
    //         <hr className='development' />
    //         <p>UI/UX design</p>
    //         <hr className='ui'/>
    //         <p>Photography</p>
    //         <hr className="photography" />
    //       </div>
    //     </div>
      
    //   </div>
    //   <div className="numbers">
    //       <ul className='lists'>
    //         <li className="list-item">
    //           <i></i>
    //           <span className="num">198</span>
    //           <p>Project completed</p>
    //         </li>
    //         <li className="list-item">
    //           <i></i>
    //           <span className="num">5670</span>
    //           <p>Cup of coffe</p>
    //         </li>
    //         <li className="list-item">
    //           <i></i>
    //           <span className="num">427</span>
    //           <p>Satisfied Clients</p>
    //         </li>
    //         <li className="list-item">
    //           <i></i>
    //           <span className="num">35</span>
    //           <p>Nominees won</p>
    //         </li>
    //       </ul>
    //     </div>
    // </div>
  )
}
export default About
