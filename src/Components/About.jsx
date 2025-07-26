import React from 'react'
import './About.css'
import theme_pattern from '../assets/theme_pattern.svg'
import profile_img from '../assets/about_profile.jpg'
const About=()=>{
  return (
    <div id='about'className='about'>
    <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
    </div>
    <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hi, I'm a software developer with a passion for building innovative and user-friendly</p>
                <p>applications. With a strong foundation in computer science and a keen eye for design</p>
            </div>
             <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Java Script</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Next JS</p><hr style={{width:"50%"}}/>
                </div>
             </div>
               
        </div>
         
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE </p>
        </div>
        <div className="about-achievement">
           <h1>90+</h1>
            <p>PROJECTS COMPLETED </p>
        </div>
        <div className="about-achievement">
           <h1>10+</h1>
            <p> HACKATHONS ATTENDED</p>
        </div>   
             
             
        </div>
    </div>
  )
}
export default About